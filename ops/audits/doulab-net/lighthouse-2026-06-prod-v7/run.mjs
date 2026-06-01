#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, appendFileSync, statSync } from 'node:fs';
import { resolve } from 'node:path';

const OUT_DIR = resolve(process.cwd(), 'ops/audits/doulab-net/lighthouse-2026-06-prod-v7');
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
const LOG = resolve(OUT_DIR, 'run.log');

const mobileUrls = [
  '/', '/services', '/services/clarityscan', '/services/clarityscan/diagnostic',
  '/services/clarityscan/audit', '/services/innovation-maturity', '/services/imm-dt',
  '/services/diagnostics', '/services/coaching-mentoring', '/services/custom-workshops',
  '/services/innovation-readiness-workshop', '/case-studies', '/case-studies/afp-siembra',
  '/about', '/contact', '/work-with-us', '/vigia-futura', '/insights'
];
const desktopUrls = ['/', '/services/innovation-maturity', '/services/imm-dt', '/services/clarityscan'];

const slug = (u) => u === '/' ? 'home' : u.replace(/^\//, '').replace(/\//g, '-');

const navStartHits = [];

function fileOK(p) {
  try { return existsSync(p) && statSync(p).size > 50000; } catch { return false; }
}

function run(url, ff) {
  const s = slug(url);
  const outPath = resolve(OUT_DIR, `${s}-${ff}.json`);
  if (fileOK(outPath)) {
    appendFileSync(LOG, `SKIP ${ff} ${url} (exists)\n`);
    console.log(`SKIP ${ff} ${url}`);
    return;
  }
  const fullUrl = `https://www.doulab.net${url}`;
  const ffFlag = ff === 'mobile' ? '--form-factor=mobile' : '--preset=desktop';
  const cmd = `npx --yes lighthouse "${fullUrl}" --quiet --chrome-flags="--headless=new" ${ffFlag} --only-categories=performance,accessibility,best-practices,seo --output=json --output-path="${outPath}"`;
  const start = Date.now();
  let res = spawnSync(cmd, { encoding: 'utf8', shell: true, timeout: 240000 });
  let stderr = (res.stderr || '') + (res.stdout || '');
  if (!fileOK(outPath)) {
    if (stderr.includes('NO_NAVSTART')) navStartHits.push(`${url} (${ff})`);
    appendFileSync(LOG, `RETRY ${ff} ${url}: ${stderr.slice(0,300).replace(/\n/g,' ')}\n`);
    res = spawnSync(cmd, { encoding: 'utf8', shell: true, timeout: 240000 });
  }
  const dur = ((Date.now() - start)/1000).toFixed(1);
  const ok = fileOK(outPath);
  appendFileSync(LOG, `${ff} ${url} ok=${ok} dur=${dur}s\n`);
  console.log(`${ff} ${url} -> ok=${ok} (${dur}s)`);
}

for (const u of mobileUrls) run(u, 'mobile');
for (const u of desktopUrls) run(u, 'desktop');

appendFileSync(LOG, `NO_NAVSTART occurrences: ${navStartHits.length}\n${navStartHits.join('\n')}\n`);
console.log('DONE. NO_NAVSTART:', navStartHits.length);
