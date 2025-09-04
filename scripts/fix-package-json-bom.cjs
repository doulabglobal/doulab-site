const fs = require('fs');
let t = fs.readFileSync('package.json', 'utf8');
t = t.replace(/^\uFEFF/, '');
JSON.parse(t);
fs.writeFileSync('package.json', t, { encoding: 'utf8' });
console.log('package.json normalized (no BOM)');
