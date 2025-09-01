// scripts/strip-bom.cjs
const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'package.json');
const buf = fs.readFileSync(p);
const hadBom =
    buf.length >= 3 && buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF;

const text = buf.toString('utf8').replace(/^\uFEFF/, '');
fs.writeFileSync(p, text, { encoding: 'utf8' }); // no BOM by default

if (hadBom) console.log('strip-bom: removed BOM from package.json');
