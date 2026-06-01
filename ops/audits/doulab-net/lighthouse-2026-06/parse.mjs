import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
const dir = path.resolve('.');
const files = readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'summary.json');
const rows = [];
const oppAgg = {};
for (const f of files) {
  const r = JSON.parse(readFileSync(path.join(dir, f), 'utf8'));
  const scores = Object.fromEntries(Object.entries(r.categories).map(([k,v])=>[k, Math.round((v.score||0)*100)]));
  const ff = (r.configSettings && r.configSettings.formFactor) || 'unknown';
  rows.push({ file: f, formFactor: ff, url: r.finalUrl || r.requestedUrl, ...scores });
  for (const [id, a] of Object.entries(r.audits)) {
    if (a.details && typeof a.details.overallSavingsMs === 'number' && a.details.overallSavingsMs > 0) {
      if (!oppAgg[id]) oppAgg[id] = { id, totalMs: 0, pages: 0, title: a.title };
      oppAgg[id].totalMs += a.details.overallSavingsMs;
      oppAgg[id].pages += 1;
    }
    if (a.score !== null && a.score !== undefined && a.score < 0.9 && a.scoreDisplayMode === 'binary') {
      // track binary fails too
    }
  }
}
const opps = Object.values(oppAgg).sort((a,b)=>b.totalMs - a.totalMs).slice(0,15);
console.log(JSON.stringify({ rows, opps }, null, 2));
writeFileSync(path.join(dir,'summary.json'), JSON.stringify({ rows, opps }, null, 2));
