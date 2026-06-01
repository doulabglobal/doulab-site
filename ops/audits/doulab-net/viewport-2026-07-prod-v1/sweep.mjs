// Bilingual viewport sweep — audit-2026-07 prod-v1.
// Captures the EN routes at `/...` and the ES counterparts at `/es/...` against
// a local production serve (`npm run serve --port=4173`). Same harness as
// viewport-2026-06-prod-v5.2 (per-page BrowserContext teardown, retry on
// failure, throttle, resumable, incremental structured log) with `locale`
// added to each capture record and to the on-disk dir layout.
import { chromium } from 'file:///C:/Users/luiss/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ALL_ANCHORS = [
  { name: '360x640',   width: 360,  height: 640 },
  { name: '390x844',   width: 390,  height: 844 },
  { name: '768x1024',  width: 768,  height: 1024 },
  { name: '1280x800',  width: 1280, height: 800 },
  { name: '1366x768',  width: 1366, height: 768 },
  { name: '1920x1080', width: 1920, height: 1080 },
];

const BASE_PAGES = [
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

const LOCALES = [
  { code: 'en', prefix: '' },
  { code: 'es', prefix: '/es' },
];

const ALL_PAGES = LOCALES.flatMap((loc) =>
  BASE_PAGES.map((p) => ({
    locale: loc.code,
    slug: p.slug,
    // Normalize trailing slash so the home path becomes /es (not /es/) on ES.
    path: loc.prefix + (p.path === '/' ? (loc.prefix ? '' : '/') : p.path),
  })),
);

const base = 'http://127.0.0.1:4173';
const outRoot = path.dirname(fileURLToPath(import.meta.url));

// --- CLI args ---------------------------------------------------------------
function parseListArg(prefix) {
  const arg = process.argv.find((a) => a.startsWith(prefix));
  if (!arg) return null;
  const raw = arg.slice(prefix.length);
  if (!raw) return null;
  return raw.split(',').map((s) => s.trim()).filter(Boolean);
}

const pageFilter = parseListArg('--pages=');
const anchorFilter = parseListArg('--anchors=');
const localeFilter = parseListArg('--locales=');

let pages = pageFilter
  ? ALL_PAGES.filter((p) => pageFilter.includes(p.slug))
  : ALL_PAGES;
if (localeFilter) {
  pages = pages.filter((p) => localeFilter.includes(p.locale));
}
const anchors = anchorFilter
  ? ALL_ANCHORS.filter((a) => anchorFilter.includes(a.name))
  : ALL_ANCHORS;

if (pages.length === 0) {
  console.error('No matching pages for filter:', pageFilter, localeFilter);
  process.exit(2);
}
if (anchors.length === 0) {
  console.error('No matching anchors for filter:', anchorFilter);
  process.exit(2);
}

// --- helpers ----------------------------------------------------------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fileExistsNonZero(p) {
  try {
    const s = await stat(p);
    return s.isFile() && s.size > 0;
  } catch {
    return false;
  }
}

const results = [];
const resultsPath = path.join(outRoot, 'results.json');

async function flushResults() {
  await writeFile(resultsPath, JSON.stringify(results, null, 2));
}

// --- main loop --------------------------------------------------------------
const THROTTLE_MS = 250;
const RETRY_DELAY_MS = 2000;
const NAV_TIMEOUT_MS = 45000;

const browser = await chromium.launch({ headless: true });
try {
  for (const pg of pages) {
    const dir = path.join(outRoot, pg.locale, pg.slug);
    await mkdir(dir, { recursive: true });

    for (const anchor of anchors) {
      const file = path.join(dir, anchor.name + '.png');

      if (await fileExistsNonZero(file)) {
        const entry = {
          locale: pg.locale,
          slug: pg.slug,
          path: pg.path,
          anchor: anchor.name,
          status: 0,
          ms: 0,
          attempts: 0,
          file,
          captured: true,
          skipped: true,
        };
        results.push(entry);
        await flushResults();
        console.log(`[${pg.locale}] ${pg.slug} @ ${anchor.name} -> SKIP (exists)`);
        continue;
      }

      const context = await browser.newContext({
        viewport: { width: anchor.width, height: anchor.height },
        deviceScaleFactor: 1,
        userAgent: anchor.width < 500
          ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
          : undefined,
      });

      const url = base + pg.path;
      const start = Date.now();
      let status = 0;
      let attempts = 0;
      let errMsg = null;
      let captured = false;
      let page = null;

      for (let attempt = 1; attempt <= 2; attempt++) {
        attempts = attempt;
        let attemptErr = null;
        let attemptStatus = 0;
        try {
          page = await context.newPage();
          const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: NAV_TIMEOUT_MS });
          attemptStatus = resp ? resp.status() : 0;
        } catch (e) {
          attemptErr = String((e && e.message) || e);
          attemptStatus = -1;
        }

        const failed = attemptErr !== null || attemptStatus === -1 || attemptStatus >= 500;

        if (!failed) {
          status = attemptStatus;
          try {
            await page.screenshot({ path: file, fullPage: true });
            captured = await fileExistsNonZero(file);
          } catch (e) {
            errMsg = (errMsg ? errMsg + ' | ' : '') + 'screenshot:' + String((e && e.message) || e);
          }
          break;
        }

        status = attemptStatus;
        const tag = `attempt${attempt}:` + (attemptErr || ('http' + attemptStatus));
        errMsg = (errMsg ? errMsg + ' | ' : '') + tag;

        try { if (page) await page.close(); } catch {}
        page = null;

        if (attempt < 2) {
          await sleep(RETRY_DELAY_MS);
        }
      }

      const elapsed = Date.now() - start;

      const entry = {
        locale: pg.locale,
        slug: pg.slug,
        path: pg.path,
        anchor: anchor.name,
        status,
        ms: elapsed,
        attempts,
        file,
        captured,
      };
      if (errMsg) entry.error = errMsg;
      results.push(entry);
      await flushResults();

      console.log(
        `[${pg.locale}] ${pg.slug} @ ${anchor.name} -> ${status} (${elapsed}ms) attempts=${attempts}` +
        `${captured ? '' : ' NO-SHOT'}${errMsg ? ' ERR=' + errMsg.slice(0, 100) : ''}`
      );

      try { if (page) await page.close(); } catch {}
      try { await context.close(); } catch {}

      await sleep(THROTTLE_MS);
    }
  }
} finally {
  try { await browser.close(); } catch {}
}

await flushResults();
console.log('DONE: ' + results.length + ' entries (' + results.filter((r) => r.captured).length + ' captured)');
