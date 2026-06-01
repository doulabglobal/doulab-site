// Summarize all LH JSONs in this directory.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const v3dir = path.resolve(dir, '..', 'lighthouse-2026-06-prod-v3');

function loadDir(d) {
  if (!fs.existsSync(d)) return {};
  const out = {};
  for (const f of fs.readdirSync(d)) {
    if (!f.endsWith('.json') || f === 'summary.json') continue;
    try {
      const j = JSON.parse(fs.readFileSync(path.join(d, f), 'utf8'));
      out[f] = j;
    } catch (e) {
      out[f] = { error: e.message };
    }
  }
  return out;
}

const v5 = loadDir(dir);
const v3 = loadDir(v3dir);

const rows = [];
const oppAgg = {}; // id -> { title, totalMs, pages: Set }
const failAgg = {}; // category -> { id -> { title, pages: Set } }

for (const [fname, j] of Object.entries(v5)) {
  if (j.error) { rows.push({ fname, error: j.error }); continue; }
  const url = j.finalDisplayedUrl || j.finalUrl || j.requestedUrl;
  const ff = j.configSettings?.formFactor || (fname.includes('desktop') ? 'desktop' : 'mobile');
  const cats = j.categories || {};
  const sc = (k) => cats[k] ? Math.round(cats[k].score * 100) : null;
  const row = { fname, url, ff, perf: sc('performance'), a11y: sc('accessibility'), bp: sc('best-practices'), seo: sc('seo') };
  rows.push(row);

  // opportunities aggregation (only mobile, only items with overallSavingsMs > 0)
  if (ff === 'mobile') {
    for (const [id, audit] of Object.entries(j.audits || {})) {
      const sav = audit.details?.overallSavingsMs;
      if (typeof sav === 'number' && sav > 50) {
        if (!oppAgg[id]) oppAgg[id] = { id, title: audit.title, totalMs: 0, pages: new Set() };
        oppAgg[id].totalMs += sav;
        oppAgg[id].pages.add(fname);
      }
    }
  }

  // failures
  for (const catKey of Object.keys(cats)) {
    const refs = cats[catKey].auditRefs || [];
    for (const ref of refs) {
      const a = j.audits?.[ref.id];
      if (!a) continue;
      if (a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'notApplicable' && a.scoreDisplayMode !== 'informative' && a.scoreDisplayMode !== 'manual') {
        if (!failAgg[catKey]) failAgg[catKey] = {};
        if (!failAgg[catKey][ref.id]) failAgg[catKey][ref.id] = { id: ref.id, title: a.title, pages: new Set() };
        failAgg[catKey][ref.id].pages.add(fname);
      }
    }
  }
}

// Sort opportunities
const topOpps = Object.values(oppAgg).sort((a,b)=>b.totalMs-a.totalMs).slice(0,10).map(o=>({id:o.id,title:o.title,totalMs:Math.round(o.totalMs),pages:o.pages.size}));

// Delta vs v3 (mobile)
const v3rows = {};
for (const [fname, j] of Object.entries(v3)) {
  if (j.error) continue;
  const ff = j.configSettings?.formFactor || (fname.includes('desktop') ? 'desktop' : 'mobile');
  const cats = j.categories || {};
  const sc = (k) => cats[k] ? Math.round(cats[k].score * 100) : null;
  v3rows[fname] = { perf: sc('performance'), a11y: sc('accessibility'), bp: sc('best-practices'), seo: sc('seo') };
}

const deltas = [];
for (const row of rows) {
  if (row.ff !== 'mobile' || !v3rows[row.fname]) continue;
  const v3r = v3rows[row.fname];
  deltas.push({ fname: row.fname, perf_v3: v3r.perf, perf_v5: row.perf, dperf: row.perf - v3r.perf, seo_v3: v3r.seo, seo_v5: row.seo, dseo: row.seo - v3r.seo, bp_v3: v3r.bp, bp_v5: row.bp, dbp: row.bp - v3r.bp });
}

// Failures summarized
const failures = {};
for (const [cat, ids] of Object.entries(failAgg)) {
  failures[cat] = Object.values(ids).map(f=>({id:f.id,title:f.title,pages:f.pages.size})).sort((a,b)=>b.pages-a.pages);
}

const summary = { rows, topOpps, deltas, failures };
fs.writeFileSync(path.join(dir, 'summary.json'), JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
