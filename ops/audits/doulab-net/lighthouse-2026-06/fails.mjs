import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
const dir = path.resolve('.');
const files = readdirSync(dir).filter(f => f.endsWith('.json') && !['summary.json'].includes(f) && !f.startsWith('parse'));
const targetIds = [
  'largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index','first-contentful-paint',
  'preload-lcp-image','prioritize-lcp-image','uses-responsive-images','modern-image-formats','uses-optimized-images',
  'unused-css-rules','unminified-css','unused-javascript','unminified-javascript','legacy-javascript',
  'render-blocking-resources','uses-rel-preconnect','server-response-time','third-party-summary','third-party-facades',
  'csp-xss','trusted-types','errors-in-console','image-aspect-ratio','deprecations','inspector-issues','is-on-https',
  'link-name','button-name','color-contrast','image-alt','heading-order','bypass','landmark-one-main',
  'meta-description','document-title','link-text','is-crawlable','crawlable-anchors','hreflang','canonical','robots-txt','tap-targets'
];
const fails = {};
for (const f of files) {
  const r = JSON.parse(readFileSync(path.join(dir, f), 'utf8'));
  for (const id of targetIds) {
    const a = r.audits[id];
    if (!a) continue;
    const failed = (a.score !== null && a.score !== undefined && a.score < 0.9);
    if (failed || (a.details && a.details.overallSavingsMs > 100)) {
      if (!fails[id]) fails[id] = [];
      fails[id].push({ file: f, score: a.score, savings: a.details?.overallSavingsMs, mode: a.scoreDisplayMode });
    }
  }
}
for (const [id, occ] of Object.entries(fails).sort((a,b)=>b[1].length - a[1].length)) {
  console.log(id.padEnd(28), 'failing on', occ.length, 'pages');
}
