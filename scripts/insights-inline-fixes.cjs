const fs = require('fs');
const p = 'src/pages/insights/index.tsx';
let t = fs.readFileSync(p, 'utf8');
const rx = [
  [/Read paper\s*\\u001a/g, 'Read paper ?'],
  [/Read the whitepaper\s*\\u001a/g, 'Read the whitepaper ?'],
  [/Explore notes\s*\\u001a/g, 'Explore notes ?'],
  [/Read post\s*\\u001a/g, 'Read post ?'],
  [/MicroCanvas® Framework v2\.1/g, 'MicroCanvas? Framework v2.1'],
  [/Visit site\s*\\u001a/g, 'Visit site ?'],
  [/Lessons from Discovery\s*\\u001a\s*Validation\s*\\u001a\s*Efficiency\s*\\u001a\s*Scale\./g,
   'Lessons from Discovery ? Validation ? Efficiency ? Scale.'],
];
for (const [from, to] of rx) t = t.replace(from, to);
fs.writeFileSync(p, t, 'utf8');
console.log('insights regex fixes applied');
