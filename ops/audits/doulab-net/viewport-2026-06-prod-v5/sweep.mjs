// Viewport sweep — Phase 4 prod-v5. Temporary script, not part of source tree.
import { chromium } from 'file:///C:/Users/luiss/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const anchors = [
  { name: '360x640',   width: 360,  height: 640 },
  { name: '390x844',   width: 390,  height: 844 },
  { name: '768x1024',  width: 768,  height: 1024 },
  { name: '1280x800',  width: 1280, height: 800 },
  { name: '1366x768',  width: 1366, height: 768 },
  { name: '1920x1080', width: 1920, height: 1080 },
];

const pages = [
  { slug: 'home',                                path: '/' },
  { slug: 'services',                            path: '/services' },
  { slug: 'services-clarityscan',                path: '/services/clarityscan' },
  { slug: 'services-clarityscan-diagnostic',     path: '/services/clarityscan/diagnostic' },
  { slug: 'services-clarityscan-audit',          path: '/services/clarityscan/audit' },
  { slug: 'services-innovation-maturity',        path: '/services/innovation-maturity' },
  { slug: 'services-imm-dt',                     path: '/services/imm-dt' },
  { slug: 'services-diagnostics',                path: '/services/diagnostics' },
  { slug: 'services-coaching-mentoring',         path: '/services/coaching-mentoring' },
  { slug: 'services-custom-workshops',           path: '/services/custom-workshops' },
  { slug: 'services-innovation-readiness-workshop', path: '/services/innovation-readiness-workshop' },
  { slug: 'case-studies',                        path: '/case-studies' },
  { slug: 'case-studies-afp-siembra',            path: '/case-studies/afp-siembra' },
  { slug: 'about',                               path: '/about' },
  { slug: 'contact',                             path: '/contact' },
  { slug: 'work-with-us',                        path: '/work-with-us' },
  { slug: 'vigia-futura',                        path: '/vigia-futura' },
  { slug: 'insights',                            path: '/insights' },
];

const base = 'https://www.doulab.net';
const outRoot = path.dirname(fileURLToPath(import.meta.url));

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
      let errMsg = null;
      try {
        const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
        status = resp ? resp.status() : 0;
      } catch (e) {
        status = -1;
        errMsg = String(e && e.message || e);
      }
      const elapsed = Date.now() - start;
      const dir = path.join(outRoot, pg.slug);
      await mkdir(dir, { recursive: true });
      const file = path.join(dir, anchor.name + '.png');
      let shot = false;
      try {
        await page.screenshot({ path: file, fullPage: true });
        shot = true;
      } catch (e) {
        errMsg = (errMsg ? errMsg + ' | ' : '') + 'screenshot:' + String(e && e.message || e);
      }
      results.push({ slug: pg.slug, path: pg.path, anchor: anchor.name, status, ms: elapsed, shot, file, error: errMsg });
      console.log(`${pg.slug} @ ${anchor.name} -> ${status} (${elapsed}ms)${shot ? '' : ' NO-SHOT'}${errMsg ? ' ERR=' + errMsg.slice(0,80) : ''}`);
      await page.close();
    }
    await context.close();
  }
} finally {
  await browser.close();
}

await writeFile(path.join(outRoot, 'results.json'), JSON.stringify(results, null, 2));
console.log('DONE: ' + results.length + ' shots');
