const fs = require('fs');
const path = 'src/pages/insights/index.tsx';
let t = fs.readFileSync(path, 'utf8');
// Generic label normalizations
const reps = [
  [/Read paper[ \t]*(?:[\u001a\?]+)?/g, 'Read paper ?'],
  [/Read the whitepaper[ \t]*(?:[\u001a\?]+)?/g, 'Read the whitepaper ?'],
  [/Explore notes[ \t]*(?:[\u001a\?]+)?/g, 'Explore notes ?'],
  [/Read post[ \t]*(?:[\u001a\?]+)?/g, 'Read post ?'],
  [/Visit site[ \t]*(?:[\u001a\?]+)?/g, 'Visit site ?'],
  [/Start with ClarityScan®/g, 'Start with ClarityScan?'],
  [/MicroCanvas® Framework v2\.1/g, 'MicroCanvas? Framework v2.1'],
  [/Lessons from Discovery[\s\u001a]*Validation[\s\u001a]*Efficiency[\s\u001a]*Scale\./g,
   'Lessons from Discovery ? Validation ? Efficiency ? Scale.'],
];
for (const [from,to] of reps) t = t.replace(from, to);
// Remove the FileText icon immediately after the MCF picture block
{
  const picIdx = t.indexOf('<picture>');
  if (picIdx !== -1) {
    const after = t.indexOf('</picture>', picIdx);
    if (after !== -1) {
      // Between </picture> and next 300 chars, remove a FileText icon line if present
      const slice = t.slice(after, after + 500);
      const replaced = slice.replace(/\n\s*<FileText className=\"cardIcon\" aria-hidden=\"true\" \/>/, '\n');
      if (replaced !== slice) {
        t = t.slice(0, after) + replaced + t.slice(after + slice.length);
      }
    }
  }
}
// Rewrite final CTA tail deterministically
{
  const marker = '/* Final CTA (shared pattern) */';
  const idx = t.indexOf(marker);
  if (idx !== -1) {
    const head = t.slice(0, idx);
    const tail = `/* Final CTA (shared pattern) */\n        <section className=\"section\" id=\"cta\" aria-labelledby=\"cta-title\">\n          <div className=\"finalCta\">\n            <h2 id=\"cta-title\">Have a topic you want us to cover?</h2>\n            <p>We publish practical, evidence-led guides. Tell us what would help your team.</p>\n            <div className=\"heroCtas\" style={{ justifyContent: 'center' }}>\n              <Link className=\"buttonPrimary\" to=\"/contact\" data-cta=\"cta.insights.final.contact\">\n                Suggest a topic\n              </Link>\n              <Link className=\"buttonPrimary\" to=\"/services/clarityscan\" data-cta=\"cta.insights.final.clarityscan\">\n                Start with ClarityScan?\n              </Link>\n              <Link className=\"buttonSecondary\" to=\"/what-we-do\" data-cta=\"cta.insights.final.whatwedo\">\n                What we do\n              </Link>\n            </div>\n          </div>\n        </section>\n      </main>\n    </Layout>\n  );\n}\n`;
    t = head + tail;
  }
}
fs.writeFileSync(path, t, 'utf8');
console.log('finalize-insights: done');
