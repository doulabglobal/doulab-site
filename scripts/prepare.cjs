// scripts/prepare.cjs
// Skip Husky in CI, or when .git or husky aren't present; run locally otherwise.
const { existsSync } = require('fs');
const { spawnSync } = require('child_process');

const isCI = process.env.CI === 'true' || process.env.CI === '1';
if (isCI) {
    console.log('prepare: skip husky in CI');
    process.exit(0);
}

if (!existsSync('.git')) {
    console.log('prepare: skip husky (no .git directory)');
    process.exit(0);
}

const candidates = ['husky/lib/bin.js', 'husky/lib/bin.mjs', 'husky/bin.js'];
let huskyBin = null;
for (const c of candidates) {
    try { huskyBin = require.resolve(c); break; } catch { }
}

if (!huskyBin) {
    console.log('prepare: skip husky (package not installed)');
    process.exit(0);
}

const r = spawnSync(process.execPath, [huskyBin, 'install'], { stdio: 'inherit' });
process.exit(r.status ?? 0);
