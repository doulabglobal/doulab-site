#!/usr/bin/env node
// G-5: post-build sitemap fix-up.
//
// Docusaurus's sitemap plugin emits a flat <urlset> per locale with no
// hreflang annotations and no sitemap_index. That tells Google the EN and
// ES URLs are unrelated, breaking cross-locale ranking signals.
//
// This script runs AFTER `docusaurus build` (wired via npm `postbuild`):
//   1. Reads build/sitemap.xml (EN) and build/es/sitemap.xml (ES).
//   2. For every <url>, injects <xhtml:link rel="alternate" hreflang="en">,
//      <hreflang="es">, and <hreflang="x-default"> children pointing at the
//      counterpart URL on each locale.
//   3. Writes build/sitemap_index.xml listing both per-locale sitemaps.
//   4. Patches build/robots.txt so the Sitemap directive points at the
//      index instead of just the EN sitemap.

import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BUILD = path.join(ROOT, 'build');
const EN_SITEMAP = path.join(BUILD, 'sitemap.xml');
const ES_SITEMAP = path.join(BUILD, 'es', 'sitemap.xml');
const SITEMAP_INDEX = path.join(BUILD, 'sitemap_index.xml');
const ROBOTS = path.join(BUILD, 'robots.txt');

const SITE_URL = 'https://www.doulab.net';
const EN_PREFIX = SITE_URL + '/';
const ES_PREFIX = SITE_URL + '/es/';

function extractUrls(xml) {
  // Sitemaps Docusaurus emits are single-line; extract every <url>...</url> block.
  const blocks = [];
  const blockRe = /<url>([\s\S]*?)<\/url>/g;
  let m;
  while ((m = blockRe.exec(xml)) !== null) {
    blocks.push(m[1]);
  }
  return blocks;
}

function getLoc(block) {
  const m = /<loc>([^<]+)<\/loc>/.exec(block);
  return m ? m[1] : null;
}

// Strip the locale prefix to get the canonical EN-relative path.
function canonicalPath(loc) {
  if (loc === SITE_URL || loc === SITE_URL + '/') return '/';
  if (loc.startsWith(ES_PREFIX)) {
    const rest = loc.slice(ES_PREFIX.length);
    return rest === '' ? '/' : '/' + rest;
  }
  if (loc === SITE_URL + '/es') return '/';
  if (loc.startsWith(EN_PREFIX)) return '/' + loc.slice(EN_PREFIX.length);
  return null;
}

function enUrlForPath(p) {
  return p === '/' ? SITE_URL + '/' : SITE_URL + p;
}
function esUrlForPath(p) {
  return p === '/' ? SITE_URL + '/es' : SITE_URL + '/es' + p;
}

function buildAnnotatedBlock(originalBlock, hasEn, hasEs, p) {
  const alternates = [];
  if (hasEn) {
    alternates.push(`<xhtml:link rel="alternate" hreflang="en" href="${enUrlForPath(p)}"/>`);
  }
  if (hasEs) {
    alternates.push(`<xhtml:link rel="alternate" hreflang="es" href="${esUrlForPath(p)}"/>`);
  }
  // x-default points to the default-locale URL (EN) when available.
  if (hasEn) {
    alternates.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${enUrlForPath(p)}"/>`);
  }
  return `<url>${originalBlock}${alternates.join('')}</url>`;
}

function reassemble(headerXml, blocks) {
  return headerXml + blocks.join('') + '</urlset>';
}

// Capture the XML preamble + opening <urlset ...> tag from the source.
function extractHeader(xml) {
  const m = /^([\s\S]*?<urlset[^>]*>)/.exec(xml);
  return m ? m[1] : '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">';
}

async function safeRead(p) {
  try {
    return await fs.readFile(p, 'utf8');
  } catch {
    return null;
  }
}

async function run() {
  const enXml = await safeRead(EN_SITEMAP);
  const esXml = await safeRead(ES_SITEMAP);
  if (!enXml || !esXml) {
    console.warn('fix-sitemaps: missing one of build/sitemap.xml or build/es/sitemap.xml — skipping');
    return;
  }

  const enBlocks = extractUrls(enXml);
  const esBlocks = extractUrls(esXml);

  // Path → block, per locale.
  const enByPath = new Map();
  for (const b of enBlocks) {
    const loc = getLoc(b);
    if (!loc) continue;
    const p = canonicalPath(loc);
    if (p) enByPath.set(p, b);
  }
  const esByPath = new Map();
  for (const b of esBlocks) {
    const loc = getLoc(b);
    if (!loc) continue;
    const p = canonicalPath(loc);
    if (p) esByPath.set(p, b);
  }

  // Build the annotated EN sitemap.
  const enHeader = extractHeader(enXml);
  const enHeaderClean = enHeader.includes('xmlns:xhtml=')
    ? enHeader
    : enHeader.replace('<urlset', '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml"');

  const enAnnotated = [];
  for (const [p, block] of enByPath) {
    enAnnotated.push(buildAnnotatedBlock(block, true, esByPath.has(p), p));
  }
  await fs.writeFile(EN_SITEMAP, reassemble(enHeaderClean, enAnnotated));

  const esHeader = extractHeader(esXml);
  const esHeaderClean = esHeader.includes('xmlns:xhtml=')
    ? esHeader
    : esHeader.replace('<urlset', '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml"');

  const esAnnotated = [];
  for (const [p, block] of esByPath) {
    esAnnotated.push(buildAnnotatedBlock(block, enByPath.has(p), true, p));
  }
  await fs.writeFile(ES_SITEMAP, reassemble(esHeaderClean, esAnnotated));

  // Sitemap index.
  const today = new Date().toISOString().slice(0, 10);
  const indexXml =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
    `<sitemap><loc>${SITE_URL}/sitemap.xml</loc><lastmod>${today}</lastmod></sitemap>` +
    `<sitemap><loc>${SITE_URL}/es/sitemap.xml</loc><lastmod>${today}</lastmod></sitemap>` +
    '</sitemapindex>';
  await fs.writeFile(SITEMAP_INDEX, indexXml);

  // robots.txt: point Sitemap directive at the index.
  try {
    const robots = await fs.readFile(ROBOTS, 'utf8');
    const patched = robots.replace(
      /^Sitemap:\s*https?:\/\/[^\s]*\/sitemap\.xml\s*$/m,
      `Sitemap: ${SITE_URL}/sitemap_index.xml`,
    );
    await fs.writeFile(ROBOTS, patched);
  } catch {
    // robots.txt may not exist if Docusaurus's robots-txt isn't enabled; skip.
  }

  console.log(
    `fix-sitemaps: OK — ${enAnnotated.length} EN URLs, ${esAnnotated.length} ES URLs annotated; sitemap_index.xml + robots.txt updated.`,
  );
}

run().catch((err) => {
  console.error('fix-sitemaps: error', err);
  process.exit(1);
});
