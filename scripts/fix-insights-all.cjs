const fs = require('fs');
const p = 'src/pages/insights/index.tsx';
let t = fs.readFileSync(p, 'utf8');
// Remove FileText icon in MCF card
t = t.replace(/\n\s*<FileText className=\"cardIcon\" aria-hidden=\"true\" \/>/, '');
// Fix MicroCanvas heading
t = t.replace(/<h3 id=\"insight-mcf-title\">MicroCanvas® Framework v2\.1<\/h3>/, '<h3 id=\"insight-mcf-title\">MicroCanvas? Framework v2.1<\/h3>');
// Fix Visit site
t = t.replace(/Visit site\s*\\u001a/g, 'Visit site ?');
// Fix arrows in link texts generically
const arrowFixes = [
  {key:'whitepaper', label:'Read paper'},
  {key:'agentic', label:'Read the whitepaper'},
  {key:'imm', label:'Explore notes'},
  {key:'blog', label:'Read post'}
];
for (const {key,label} of arrowFixes) {
  const re = new RegExp(`(<Link[^>]+cta\\.insights[^>]*${key}[^>]*>)[\\s\\S]*?(<\\/Link>)`,'g');
  t = t.replace(re, `$1\n                ${label} ?\n              $2`);
}
// Fix Lessons line
t = t.replace(/Lessons from Discovery[\s\\u001a]*Validation[\s\\u001a]*Efficiency[\s\\u001a]*Scale\./, 'Lessons from Discovery ? Validation ? Efficiency ? Scale.');
// Add ClarityScan CTA to final section if missing
if (!t.includes('cta.insights.final.clarityscan')) {
  t = t.replace(
    /(\<div class=\"heroCtas\"[^>]*>\n\s*<Link class=\"buttonPrimary\"[\s\S]*?<\/Link>\n\s*<Link class=\"buttonSecondary\"[\s\S]*?<\/Link>\n\s*)/,
    `$1            <Link class=\"buttonPrimary\" to=\"/services/clarityscan\" data-cta=\"cta.insights.final.clarityscan\">\n              Start with ClarityScan?\n            </Link>\n`
  );
}
fs.writeFileSync(p, t, 'utf8');
console.log('fix-insights-all: applied');
