#!/usr/bin/env node
// G-7: build-time guard for the [data-cta] analytics taxonomy.
//
// Two checks:
//   1. Every [data-cta] value in src/pages/** uses the `cta.*` prefix
//      (catches regressions like the old `wwu_*` ids).
//   2. The ES [data-cta] set is a SUBSET of the EN set — i.e., no ES
//      translation pass invented or renamed a key. Translation should
//      never touch analytics identifiers.
//
// Run via `npm run verify` (wired into the build pipeline).

import { promises as fs } from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const EN_DIR = path.join(ROOT, 'src', 'pages');
const ES_DIR = path.join(ROOT, 'i18n', 'es', 'docusaurus-plugin-content-pages');

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (/\.(tsx|jsx|ts|js)$/.test(ent.name)) {
      out.push(full);
    }
  }
  return out;
}

const DATA_CTA_RE = /data-cta=(?:"([^"]+)"|'([^']+)'|\{`([^`]+)`\}|\{["']([^"']+)["']\})/g;

async function collectCtas(dir) {
  const files = await walk(dir);
  const set = new Set();
  for (const f of files) {
    const src = await fs.readFile(f, 'utf8');
    let m;
    DATA_CTA_RE.lastIndex = 0;
    while ((m = DATA_CTA_RE.exec(src)) !== null) {
      const value = m[1] ?? m[2] ?? m[3] ?? m[4];
      if (value) set.add(value);
    }
  }
  return set;
}

function main() {
  return Promise.all([collectCtas(EN_DIR), collectCtas(ES_DIR)]).then(([enSet, esSet]) => {
    const failures = [];

    // Check 1: every value uses the cta.* prefix.
    const taxonomyViolations = [...enSet, ...esSet].filter((v) => !v.startsWith('cta.'));
    if (taxonomyViolations.length > 0) {
      failures.push(
        'data-cta values missing the "cta." prefix:\n  - ' + [...new Set(taxonomyViolations)].sort().join('\n  - '),
      );
    }

    // Check 2: ES is a subset of EN.
    const esExtras = [...esSet].filter((v) => !enSet.has(v));
    if (esExtras.length > 0) {
      failures.push(
        'data-cta values that exist in ES but not EN (analytics keys must NEVER be translated):\n  - ' +
          esExtras.sort().join('\n  - '),
      );
    }

    if (failures.length > 0) {
      console.error('verify-analytics: FAIL');
      for (const f of failures) console.error('\n' + f);
      process.exit(1);
    }
    console.log(`verify-analytics: OK (${enSet.size} EN keys, ${esSet.size} ES keys, all under cta.* taxonomy, ES ⊆ EN)`);
  });
}

main().catch((err) => {
  console.error('verify-analytics: internal error', err);
  process.exit(2);
});
