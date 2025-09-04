import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const EXCLUDE_DIRS = new Set(['node_modules', '.git', '.docusaurus', 'build', 'build-dry', '_import', '.vs']);
const DEFAULT_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.json', '.css', '.cjs', '.mjs', '.html', '.txt']);

const REPLACEMENTS = [
  // Product marks and names
  [/MicroCanvas®/g, 'MicroCanvas®'],
  [/MicroCanvas®/g, 'MicroCanvas®'],
  [/\(MCF\)r/g, 'MCF®'],
  [/IMM®/g, 'IMM®'],
  [/\(IMM\)r/g, 'IMM®'],
  [/ClarityScan®/g, 'ClarityScan®'],
  [/ClarityScan®/g, 'ClarityScan®'],
  [/Vigía/g, 'Vigía'],
  [/Vigía/g, 'Vigía'],

  // Replacement char → em dash; control SUB → arrow
  [/\uFFFD/g, '—'],
  [/\u001A/g, ' →'],

  // Contractions
  [/We\uFFFDTll/g, 'We’ll'],
];

const argv = process.argv.slice(2);
const OPTS = {
  check: argv.includes('--check'),
  dry: argv.includes('--dry'),
  include: [],
  exclude: [],
  exts: null,
};
for (const a of argv) {
  if (a.startsWith('--include=')) OPTS.include = a.substring(10).split(',').filter(Boolean);
  else if (a.startsWith('--exclude=')) OPTS.exclude = a.substring(10).split(',').filter(Boolean);
  else if (a.startsWith('--ext=')) OPTS.exts = new Set(a.substring(6).split(',').filter(Boolean).map((s) => (s.startsWith('.') ? s : `.${s}`)));
}

function shouldProcess(file) {
  const rel = path.relative(ROOT, file);
  if (rel.split(path.sep).some((p) => EXCLUDE_DIRS.has(p))) return false;
  const ext = path.extname(file);
  const allowed = OPTS.exts ?? DEFAULT_EXT;
  if (!allowed.has(ext)) return false;
  if (OPTS.include.length && !OPTS.include.some((s) => rel.includes(s))) return false;
  if (OPTS.exclude.length && OPTS.exclude.some((s) => rel.includes(s))) return false;
  return true;
}

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (shouldProcess(full)) yield full;
  }
}

let changed = 0;
let wouldChange = 0;
for (const file of walk(ROOT)) {
  try {
    const before = fs.readFileSync(file, 'utf8');
    let after = before;
    for (const [from, to] of REPLACEMENTS) after = after.replace(from, to);
    if (after !== before) {
      if (OPTS.check || OPTS.dry) wouldChange++;
      else {
        fs.writeFileSync(file, after, 'utf8');
        changed++;
      }
    }
  } catch {
    // ignore binary
  }
}

if (OPTS.check) {
  if (wouldChange) {
    console.error(`normalize: ${wouldChange} files would change`);
    process.exit(1);
  } else console.log('normalize: OK');
} else if (OPTS.dry) {
  console.log(`normalize: ${wouldChange} files would change (dry)`);
} else {
  console.log(`normalize: updated ${changed} files`);
}

