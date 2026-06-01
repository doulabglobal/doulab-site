// Viewport sweep — temporary script, not part of source tree.
import { chromium } from 'file:///C:/Users/luiss/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const anchors = [
  { name: '360x640',   width: 360,  height: 640 },
  { name: '390x844',   width: 390,  height: 844 },
  { name: '768x1024',  width: 768,  height: 1024 },
  { name: '1366x768',  width: 1366, height: 768 },
  { name: '1280x800',  width: 1280, height: 800 },
  { name: '1920x1080', width: 1920, height: 1080 },
];

const pages = [
  { slug: 'home',                    path: '/' },
  { slug: 'what-we-do',              path: '/what-we-do' },
  { slug: 'services',                path: '/services' },
  { slug: 'innovation-maturity',     path: '/services/innovation-maturity' },
  { slug: 'contact',                 path: '/contact' },
  { slug: 'book-clarityscan',        path: '/book-clarityscan' },
  { slug: 'insights',                path: '/insights' },
  { slug: 'case-studies',            path: '/case-studies' },
  { slug: 'case-afp-siembra',        path: '/case-studies/afp-siembra' },
  { slug: 'about',                   path: '/about' },
  { slug: '404',                     path: '/this-page-does-not-exist-404' },
];

const base = 'http://localhost:3001';
const outRoot = path.resolve(process.cwd());

const results = [];

const browser = await chromium.launch({ headless: true });
try {
  for (const anchor of anchors) {
    const context = await browser.newContext({
      viewport: { width: anchor.width, height: anchor.height },
      deviceScaleFactor: 1,
      userAgent: anchor.width < 500
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
        : undefined,
    });
    for (const pg of pages) {
      const page = await context.newPage();
      const url = base + pg.path;
      const start = Date.now();
      let status = 0;
      try {
        const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        status = resp ? resp.status() : 0;
      } catch (e) {
        status = -1;
      }
      const elapsed = Date.now() - start;
      const dir = path.join(outRoot, pg.slug);
      await mkdir(dir, { recursive: true });
      const file = path.join(dir, anchor.name + '.png');
      try {
        await page.screenshot({ path: file, fullPage: true });
      } catch (e) {
        // ignore
      }
      results.push({ slug: pg.slug, path: pg.path, anchor: anchor.name, status, ms: elapsed, file });
      console.log(`${pg.slug} @ ${anchor.name} -> ${status} (${elapsed}ms)`);
      await page.close();
    }
    await context.close();
  }
} finally {
  await browser.close();
}

import { writeFile } from 'node:fs/promises';
await writeFile(path.join(outRoot, 'results.json'), JSON.stringify(results, null, 2));
console.log('DONE: ' + results.length + ' shots');
