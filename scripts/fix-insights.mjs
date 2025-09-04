import fs from 'node:fs';

const p = 'src/pages/insights/index.tsx';
let text = fs.readFileSync(p, 'utf8');

// Normalize control SUBs around arrows in this page: remove stray SUBs
text = text.replace(/[\u001A\u001a]/g, '');

// Specific link texts (replace line tail robustly)
text = text.replace(/Read paper[^\r\n]*/g, 'Read paper →');
text = text.replace(/Read the whitepaper[^\r\n]*/g, 'Read the whitepaper →');
text = text.replace(/Explore notes[^\r\n]*/g, 'Explore notes →');
text = text.replace(/Read post[^\r\n]*/g, 'Read post →');
// Also catch SUB char explicitly
const SUB = String.fromCharCode(0x1A);
text = text.replace(new RegExp(`Read paper ${SUB}`, 'g'), 'Read paper →');
text = text.replace(new RegExp(`Read the whitepaper ${SUB}`, 'g'), 'Read the whitepaper →');
text = text.replace(new RegExp(`Explore notes ${SUB}`, 'g'), 'Explore notes →');
text = text.replace(new RegExp(`Read post ${SUB}`, 'g'), 'Read post →');

// Replace the IMM notes summary line to arrows (tolerant of control chars)
text = text.replace(/Lessons from Discovery[\s\u001A\u001a]*Validation[\s\u001A\u001a]*Efficiency[\s\u001A\u001a]*Scale\./, 'Lessons from Discovery → Validation → Efficiency → Scale.');

// Fix MicroCanvas mark if present
text = text.replace(/MicroCanvas® Framework v2\.1/g, 'MicroCanvas® Framework v2.1');

// Insert OG/Twitter meta after canonical if not present
if (!/og:image/.test(text)) {
  text = text.replace(
    /(\<link rel=\"canonical\" href=\"https:\/\/doulab\.net\/insights\" \/>)/,
    `$1\n        <meta property=\"og:title\" content=\"Insights - Research & Resources | Doulab\" />\n        <meta property=\"og:description\" content=\"Research, resources, and whitepapers from Doulab - practical, testable, and open.\" />\n        <meta property=\"og:image\" content=\"https://doulab.net/img/docusaurus-social-card.jpg\" />\n        <meta property=\"og:image:alt\" content=\"Doulab — Insights\" />\n        <meta name=\"twitter:card\" content=\"summary_large_image\" />\n        <meta name=\"author\" content=\"Luis Santiago Arias\" />`
  );
}

fs.writeFileSync(p, text, 'utf8');
console.log('fix-insights: updated');
