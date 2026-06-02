// Dark-mode parity audit — every main EN page captured at desktop + mobile
// with localStorage theme=dark forced before navigation. 2026-06-02.

import { chromium } from 'file:///C:/Users/luiss/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ANCHORS = [
  { name: '1280x800-desktop', width: 1280, height: 800 },
  { name: '390x844-mobile',   width: 390,  height: 844 },
];

const PAGES = [
  { slug: 'home',                                    path: '/' },
  { slug: 'services',                                path: '/services' },
  { slug: 'services-clarityscan',                    path: '/services/clarityscan' },
  { slug: 'services-clarityscan-diagnostic',         path: '/services/clarityscan/diagnostic' },
  { slug: 'services-clarityscan-audit',              path: '/services/clarityscan/audit' },
  { slug: 'services-innovation-maturity',            path: '/services/innovation-maturity' },
  { slug: 'services-imm-dt',                         path: '/services/imm-dt' },
  { slug: 'services-diagnostics',                    path: '/services/diagnostics' },
  { slug: 'services-coaching-mentoring',             path: '/services/coaching-mentoring' },
  { slug: 'services-custom-workshops',               path: '/services/custom-workshops' },
  { slug: 'services-innovation-readiness-workshop',  path: '/services/innovation-readiness-workshop' },
  { slug: 'case-studies',                            path: '/case-studies' },
  { slug: 'case-studies-afp-siembra',                path: '/case-studies/afp-siembra' },
  { slug: 'about',                                   path: '/about' },
  { slug: 'contact',                                 path: '/contact' },
  { slug: 'work-with-us',                            path: '/work-with-us' },
  { slug: 'vigia-futura',                            path: '/vigia-futura' },
  { slug: 'insights',                                path: '/insights' },
];

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

try {
  for (const pg of PAGES) {
    const dir = path.join(outRoot, pg.slug);
    await mkdir(dir, { recursive: true });

    for (const anchor of ANCHORS) {
      const file = path.join(dir, anchor.name + '.png');
      const context = await browser.newContext({
        viewport: { width: anchor.width, height: anchor.height },
        deviceScaleFactor: 1,
        colorScheme: 'dark',
        userAgent: anchor.width < 500
          ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
          : undefined,
      });
      await context.addInitScript(() => {
        try { localStorage.setItem('theme', 'dark'); } catch {}
      });

      const start = Date.now();
      let status = 0;
      let captured = false;
      try {
        const page = await context.newPage();
        const resp = await page.goto(base + pg.path, { waitUntil: 'networkidle', timeout: 45000 });
        status = resp ? resp.status() : 0;
        await page.screenshot({ path: file, fullPage: true });
        captured = await fileExistsNonZero(file);
        await page.close();
      } catch (e) {
        status = -1;
      }

      results.push({ slug: pg.slug, anchor: anchor.name, status, captured, ms: Date.now() - start });
      await flushResults();
      console.log(`${pg.slug} @ ${anchor.name} -> ${status} ${captured ? 'OK' : 'NO-SHOT'}`);

      await context.close();
      await sleep(200);
    }
  }
} finally {
  try { await browser.close(); } catch {}
}
console.log('DONE');
