import fs from 'node:fs';

const files = [
  'src/pages/about/index.tsx',
  'src/pages/what-we-do/index.tsx',
  'src/pages/work-with-us/index.tsx',
];

const replacements = [
  [/ClarityScan®/g, 'ClarityScan®'],
  [/ClarityScan®/g, 'ClarityScan®'],
  [/MicroCanvas®/g, 'MicroCanvas®'],
  [/IMM®/g, 'IMM®'],
  [/Vigía/g, 'Vigía'],
  [/\uFFFD\?"/g, '—'], // common mojibake sequence
  [/\uFFFD/g, '—'], // fallback: stray replacement char
  [/\(IMM\)r/g, 'IMM®'],
];

const heroBlocks = [
  { file: 'src/pages/about/index.tsx', aria: 'about-hero-title' },
  { file: 'src/pages/what-we-do/index.tsx', aria: 'whatwedo-hero-title' },
  { file: 'src/pages/work-with-us/index.tsx', aria: 'wwu-hero-title' },
];

const metaFixes = [
  {
    file: 'src/pages/about/index.tsx',
    title: 'About — Doulab',
    desc: 'Discover Doulab’s vision, story, and service model — innovation made repeatable.',
  },
  {
    file: 'src/pages/what-we-do/index.tsx',
    title: 'What we do — Programs, Diagnostics & Foresight | Doulab',
    desc: 'Programs, diagnostics, and foresight to make innovation repeatable with MicroCanvas® 2.1 and IMM®. ',
  },
];

function fixFile(path) {
  let text = fs.readFileSync(path, 'utf8');

  // Remove legacy heroBlock by aria-labelledby
  const match = heroBlocks.find((h) => h.file === path);
  if (match) {
    const re = new RegExp(
      `<section className=\\"heroBanner\\"[^>]*aria-labelledby=\\"${match.aria}\\">[\\s\\S]*?<\\/section>`,
      'g',
    );
    text = text.replace(re, '');
  }

  // Apply mojibake replacements
  for (const [from, to] of replacements) {
    text = text.replace(from, to);
  }

  // Meta fixes (title/description) if configured
  const meta = metaFixes.find((m) => m.file === path);
  if (meta) {
    text = text.replace(/title=\"[^\"]*\"/g, (m) => (m.includes('What we do') || m.includes('About')) ? `title="${meta.title}"` : m);
    text = text.replace(/description=\"[^\"]*\"/g, (m) => `description="${meta.desc}"`);
  }

  fs.writeFileSync(path, text, 'utf8');
}

for (const f of files) {
  fixFile(f);
}

console.log('fix-mojibake: normalized copy and removed legacy hero blocks');

