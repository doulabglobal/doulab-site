// One-page spot check: /services/imm-dt (EN) at extended viewport roster.
// Triggered 2026-06-02 by Luis to inspect Phase readiness gate + Maturity ladder
// after the G-9 token sweep + C3 / C3b refactors. Same harness as the
// viewport-2026-07-prod-v1 sweep.mjs.

import { chromium } from 'file:///C:/Users/luiss/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ANCHORS = [
  // External fold
  { name: '280x653-foldext',  width: 280,  height: 653  },
  // Common smartphone
  { name: '360x640-androidS', width: 360,  height: 640  },
  { name: '390x844-iphone',   width: 390,  height: 844  },
  { name: '412x915-pixel',    width: 412,  height: 915  },
  { name: '430x932-iphonePM', width: 430,  height: 932  },
  // Internal fold
  { name: '768x884-foldint',  width: 768,  height: 884  },
  // Tablet portrait
  { name: '768x1024-ipadmini', width: 768, height: 1024 },
  { name: '820x1180-ipadair', width: 820,  height: 1180 },
  // Desktop
  { name: '1280x800',         width: 1280, height: 800  },
  { name: '1366x768',         width: 1366, height: 768  },
  { name: '1920x1080',        width: 1920, height: 1080 },
];

const PAGE = { slug: 'services-imm-dt', path: '/services/imm-dt' };
const THEME = process.argv.find((a) => a.startsWith('--theme='))?.slice('--theme='.length) || 'light';
const base = 'http://127.0.0.1:4173';
const outRoot = path.dirname(fileURLToPath(import.meta.url));

async function fileExistsNonZero(p) {
  try { const s = await stat(p); return s.isFile() && s.size > 0; } catch { return false; }
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const results = [];
const resultsPath = path.join(outRoot, 'results.json');
async function flushResults() { await writeFile(resultsPath, JSON.stringify(results, null, 2)); }

const browser = await chromium.launch({ headless: true });
const dir = path.join(outRoot, PAGE.slug + (THEME === 'dark' ? '-dark' : ''));
await mkdir(dir, { recursive: true });

try {
  for (const anchor of ANCHORS) {
    const file = path.join(dir, anchor.name + '.png');
    const context = await browser.newContext({
      viewport: { width: anchor.width, height: anchor.height },
      deviceScaleFactor: 1,
      colorScheme: THEME === 'dark' ? 'dark' : 'light',
      userAgent: anchor.width < 500
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : undefined,
    });

    // Force Docusaurus theme via localStorage before navigation.
    await context.addInitScript((theme) => {
      try { localStorage.setItem('theme', theme); } catch {}
    }, THEME);

    const start = Date.now();
    let status = 0;
    let captured = false;
    let errMsg = null;

    try {
      const page = await context.newPage();
      const resp = await page.goto(base + PAGE.path, { waitUntil: 'networkidle', timeout: 45000 });
      status = resp ? resp.status() : 0;
      await page.screenshot({ path: file, fullPage: true });
      captured = await fileExistsNonZero(file);
      await page.close();
    } catch (e) {
      errMsg = String((e && e.message) || e);
      status = -1;
    }

    const entry = { anchor: anchor.name, status, ms: Date.now() - start, file, captured };
    if (errMsg) entry.error = errMsg;
    results.push(entry);
    await flushResults();
    console.log(`${anchor.name} -> ${status} ${captured ? 'OK' : 'NO-SHOT'} (${entry.ms}ms)`);

    await context.close();
    await sleep(200);
  }
} finally {
  try { await browser.close(); } catch {}
}
console.log('DONE');
