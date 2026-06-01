#!/usr/bin/env node
// Bilingual Lighthouse run — audit-2026-07 prod-v1.
// Hits the LOCAL prod serve (`npm run serve --port=4173`) so it covers the
// new ES locale (not yet deployed). Same EN URL set as v7, mirrored to /es/*.
// Output: `<slug>-<locale>-<mobile|desktop>.json` per run.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, appendFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const OUT_DIR = resolve(process.cwd(), 'ops/audits/doulab-net/lighthouse-2026-07-prod-v1');
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
const LOG = resolve(OUT_DIR, 'run.log');

const BASE = 'http://127.0.0.1:4173';

const enMobileUrls = [
  '/', '/services', '/services/clarityscan', '/services/clarityscan/diagnostic',
  '/services/clarityscan/audit', '/services/innovation-maturity', '/services/imm-dt',
  '/services/diagnostics', '/services/coaching-mentoring', '/services/custom-workshops',
  '/services/innovation-readiness-workshop', '/case-studies', '/case-studies/afp-siembra',
  '/about', '/contact', '/work-with-us', '/vigia-futura', '/insights',
];
const enDesktopUrls = ['/', '/services/innovation-maturity', '/services/imm-dt', '/services/clarityscan'];

const esMobileUrls = enMobileUrls.map((u) => '/es' + (u === '/' ? '' : u));
const esDesktopUrls = enDesktopUrls.map((u) => '/es' + (u === '/' ? '' : u));

const RUNS = [
  ...enMobileUrls.map((u) => ({ url: u, locale: 'en', form: 'mobile' })),
  ...enDesktopUrls.map((u) => ({ url: u, locale: 'en', form: 'desktop' })),
  ...esMobileUrls.map((u) => ({ url: u, locale: 'es', form: 'mobile' })),
  ...esDesktopUrls.map((u) => ({ url: u, locale: 'es', form: 'desktop' })),
];

const slug = (u) => {
  if (u === '/' || u === '/es' || u === '/es/') return 'home';
  return u.replace(/^\/(es\/)?/, '').replace(/\//g, '-');
};

const navStartHits = [];

function fileOK(p) {
  try { return existsSync(p) && statSync(p).size > 50000; } catch { return false; }
}

function run(entry) {
  const { url, locale, form } = entry;
  const s = slug(url);
  const outPath = resolve(OUT_DIR, `${s}-${locale}-${form}.json`);
  if (fileOK(outPath)) {
    appendFileSync(LOG, `SKIP ${locale} ${form} ${url} (exists)\n`);
    console.log(`SKIP ${locale} ${form} ${url}`);
    return;
  }
  const fullUrl = BASE + url;
  const ffFlag = form === 'mobile' ? '--form-factor=mobile' : '--preset=desktop';
  const cmd = `npx --yes lighthouse "${fullUrl}" --quiet --chrome-flags="--headless=new" ${ffFlag} --only-categories=performance,accessibility,best-practices,seo --output=json --output-path="${outPath}"`;
  const start = Date.now();
  let res = spawnSync(cmd, { encoding: 'utf8', shell: true, timeout: 240000 });
  let stderr = (res.stderr || '') + (res.stdout || '');
  if (!fileOK(outPath)) {
    if (stderr.includes('NO_NAVSTART')) navStartHits.push(`${url} (${locale}/${form})`);
    appendFileSync(LOG, `RETRY ${locale} ${form} ${url}: ${stderr.slice(0,300).replace(/\n/g,' ')}\n`);
    res = spawnSync(cmd, { encoding: 'utf8', shell: true, timeout: 240000 });
  }
  const dur = ((Date.now() - start)/1000).toFixed(1);
  const ok = fileOK(outPath);
  appendFileSync(LOG, `${locale} ${form} ${url} ok=${ok} dur=${dur}s\n`);
  console.log(`${locale} ${form} ${url} -> ok=${ok} (${dur}s)`);
}

for (const entry of RUNS) run(entry);

appendFileSync(LOG, `NO_NAVSTART occurrences: ${navStartHits.length}\n${navStartHits.join('\n')}\n`);
console.log('DONE. NO_NAVSTART:', navStartHits.length);
