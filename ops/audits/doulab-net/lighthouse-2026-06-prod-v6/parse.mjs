#!/usr/bin/env node
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';

const DIR = resolve(process.cwd(), 'ops/audits/doulab-net/lighthouse-2026-06-prod-v6');
const V5_DIR = resolve(process.cwd(), 'ops/audits/doulab-net/lighthouse-2026-06-prod-v5');

const files = readdirSync(DIR).filter(f => f.endsWith('.json') && f !== 'summary-v6.json');

function score(cat) { return cat && typeof cat.score === 'number' ? Math.round(cat.score * 100) : '-'; }

const rows = [];
let rbrTotalMs = 0;
let rbrPages = [];
let fontsGoogleHits = [];

for (const f of files) {
  let data;
  try { data = JSON.parse(readFileSync(resolve(DIR, f), 'utf8')); } catch { continue; }
  const c = data.categories || {};
  const ff = f.endsWith('-desktop.json') ? 'desktop' : 'mobile';
  const url = (data.finalDisplayedUrl || data.finalUrl || data.requestedUrl || '').replace('https://www.doulab.net','') || '/';
  const row = {
    f, ff, url,
    perf: score(c.performance),
    a11y: score(c.accessibility),
    bp: score(c['best-practices']),
    seo: score(c.seo),
  };
  rows.push(row);

  // render-blocking-resources
  const rbr = data.audits && data.audits['render-blocking-resources'];
  if (rbr && rbr.details && typeof rbr.details.overallSavingsMs === 'number') {
    rbrTotalMs += rbr.details.overallSavingsMs;
    rbrPages.push({ f, ms: rbr.details.overallSavingsMs });
  } else if (rbr && typeof rbr.numericValue === 'number') {
    rbrTotalMs += rbr.numericValue;
    rbrPages.push({ f, ms: rbr.numericValue });
  }

  // fonts.googleapis.com check across audit items
  const json = JSON.stringify(data.audits || {});
  if (json.includes('fonts.googleapis.com')) fontsGoogleHits.push(f);
}

rows.sort((a,b) => a.f.localeCompare(b.f));

// v5 baseline
const v5 = {};
try {
  const v5sum = JSON.parse(readFileSync(resolve(V5_DIR, 'summary-v5.json'), 'utf8'));
  for (const r of v5sum.rows) v5[r.f] = r;
} catch {}

const deltas = rows.map(r => {
  const b = v5[r.f] || {};
  const d = (a,bv) => (typeof a === 'number' && typeof bv === 'number') ? (a-bv) : '-';
  return { f: r.f, url: r.url, ff: r.ff,
    perfNow: r.perf, perfV5: b.perf ?? '-', perfD: d(r.perf, b.perf),
    a11yNow: r.a11y, a11yV5: b.a11y ?? '-', a11yD: d(r.a11y, b.a11y),
    bpNow: r.bp, bpV5: b.bp ?? '-', bpD: d(r.bp, b.bp),
  };
});

const summary = { rows, deltas, rbrTotalMs, rbrPages, fontsGoogleHits };
writeFileSync(resolve(DIR, 'summary-v6.json'), JSON.stringify(summary, null, 2));

console.log('--- ROWS ---');
console.log('page | ff | perf | a11y | bp | seo');
for (const r of rows) console.log(`${r.url} | ${r.ff} | ${r.perf} | ${r.a11y} | ${r.bp} | ${r.seo}`);
console.log('\n--- DELTAS ---');
for (const d of deltas) console.log(`${d.url} (${d.ff}): perf ${d.perfV5}->${d.perfNow} (${d.perfD}) a11y ${d.a11yV5}->${d.a11yNow} (${d.a11yD}) bp ${d.bpV5}->${d.bpNow} (${d.bpD})`);
console.log(`\nRBR total ms: ${rbrTotalMs}`);
console.log(`fonts.googleapis.com hits: ${fontsGoogleHits.length}`);
if (fontsGoogleHits.length) console.log(fontsGoogleHits.join('\n'));

// Summary stats
const mobilePerf = rows.filter(r => r.ff==='mobile' && typeof r.perf === 'number').map(r=>r.perf).sort((a,b)=>a-b);
const median = arr => arr.length ? arr[Math.floor(arr.length/2)] : '-';
console.log(`\nMobile perf: count=${mobilePerf.length} min=${mobilePerf[0]} max=${mobilePerf.at(-1)} median=${median(mobilePerf)}`);
const bps = rows.filter(r => typeof r.bp === 'number').map(r=>r.bp);
console.log(`BP range: ${Math.min(...bps)} - ${Math.max(...bps)}`);
const immPages = ['services-innovation-maturity-mobile.json','services-imm-dt-mobile.json','services-clarityscan-diagnostic-mobile.json'];
console.log('IMM a11y:', immPages.map(f => `${f}=${rows.find(r=>r.f===f)?.a11y}`).join(' '));
