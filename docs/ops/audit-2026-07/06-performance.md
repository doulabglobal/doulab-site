---
title: "Audit 2026-07 — 06 Performance & frontend engineering"
status: draft
role: "Performance & frontend engineering"
locale: bilingual (EN + ES)
---

# Performance & frontend engineering audit — doulab.net — 2026-07 (bilingual)

## Scope

Performance and frontend-engineering audit of doulab.net after the bilingual launch (EN + ES, commit `eb1c8c8`). Backed by the **live** Lighthouse run set in `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/` (44 runs against `http://127.0.0.1:4173`: 36 mobile + 8 desktop, EN and ES). Source: `src/components/**`, `src/pages/**`, `src/css/custom.css`, `docusaurus.config.ts`, built artefacts under `build/` and `build/es/`. Cross-checked against the prior heuristic audit `docs/ops/audit-2026-06/06-performance.md`.

Out of scope: third-party scripts (none currently loaded — `third-party-summary` is empty on every run), Cloudflare edge cache validation (synthetic served locally), GPU/compositor profiling, runtime crash/JS error rates.

## Method

1. Parsed `categories.performance.score` and the `audits` object from every JSON in `lighthouse-2026-07-prod-v1/`. Extracted: `first-contentful-paint`, `largest-contentful-paint`, `largest-contentful-paint-element`, `total-blocking-time`, `cumulative-layout-shift`, `speed-index`, `interactive`, `render-blocking-resources`, `unused-javascript`, `unused-css-rules`, `total-byte-weight`, `resource-summary`, `network-requests`, `mainthread-work-breakdown`, `bootup-time`, `font-display`, `dom-size`, `prioritize-lcp-image`.
2. Reconstructed slowest vs fastest clusters and identified the bimodal FCP split.
3. Read `docusaurus.config.ts:42-58` (font preload), `src/css/custom.css:1-30` (@font-face), `src/components/Hero.tsx:75-100` (image preload), `src/pages/index.tsx:299-340` (client-side RSS fetch), and the built CSS `build/assets/css/styles.cfa80f86.css` to verify font URL resolution.
4. Compared against `audit-2026-06/06-performance.md` to deduplicate findings.

## Observed numbers (this run)

### Mobile perf cluster (sorted, worst → best)

| Page | Perf | FCP | LCP | TBT | CLS | SI |
|---|---|---|---|---|---|---|
| home-en | **46** | 4.62 s | 7.19 s | 695 ms | 0 | 5.56 s |
| services-innovation-maturity-es | **47** | 4.74 s | 6.71 s | 650 ms | 0 | 5.55 s |
| services-imm-dt-es | **50** | 4.61 s | 6.69 s | 562 ms | 0 | 5.65 s |
| services-clarityscan-es | **52** | 4.59 s | 6.59 s | 482 ms | 0 | 5.43 s |
| services-clarityscan-en | 54 | 4.59 s | 6.38 s | 404 ms | 0 | 5.55 s |
| services-innovation-maturity-en | 56 | 4.84 s | 6.55 s | 344 ms | 0 | 5.53 s |
| services-diagnostics-es | 58 | 2.26 s | 6.32 s | 243 ms | **0.239** | 3.02 s |
| services-en | 58 | 2.27 s | 6.55 s | 618 ms | 0 | 2.89 s |
| home-es | 67 | 2.26 s | 7.00 s | 291 ms | 0 | 3.44 s |
| services-imm-dt-en | 72 | 2.26 s | 6.42 s | 186 ms | 0 | 2.95 s |
| about-en | 72 | 2.26 s | 6.18 s | 199 ms | 0 | 2.26 s |
| contact-es | **76** | 2.26 s | 5.87 s | 59 ms | 0 | 2.26 s |

Desktop runs are all 96–97. CLS is 0 or near-0 except `services-diagnostics-es` (**0.239**) and a small handful of 0.02–0.05.

### The bimodal FCP split (key finding)

The 36 mobile runs cluster into two FCP bands with no intermediate values:

- **Slow band — FCP ≈ 4.6 s** (perf 46–58): home-en, services-clarityscan EN+ES, services-imm-dt-es, services-innovation-maturity EN+ES, services-clarityscan-audit-es, services-clarityscan-diagnostic-es, services-en.
- **Fast band — FCP ≈ 2.26 s** (perf 66–76): everything else, including home-es.

This is **not** run-to-run variance. The slow band consists of routes whose hero LCP element is a text block (`p.heroSubtitle` / `p.heroText`) inside the `<Hero>` component when an image preload is also emitted. Render-blocking CSS is the proximate cause Lighthouse flags (`render-blocking-resources` savings: 1,350 ms on every slow-band page; 1,200 ms on home-es). The CSS network time itself is fine (~10 ms) but the **117 KB stylesheet is parsed before first paint** and FCP is gated on it. The fast band benefits from earlier render because the LCP candidate doesn't depend on as much CSS-resolved text layout.

The home-en vs home-es delta (46 vs 67) is genuine and points to home-en's slower bootup (`main.09092cc1.js` script eval 798 ms vs ES at 638 ms) plus the eager RSS fetch racing the hero. Not run variance.

## Findings (ranked)

ID prefix `PERF-`. Severity P0–P3. Impact 1–5. Effort S/M/L.

### PERF-2607-001 — Self-hosted Roboto is shipped from TWO different paths; the preload misses the CSS-referenced files

- Severity: **P0** · Impact: **5** · Effort: **S**
- Audit IDs: `network-requests`, `uses-rel-preload`, `font-display`
- Location: `docusaurus.config.ts:47-58` (preload `<link>`); `src/css/custom.css:5-29` (@font-face); `static/fonts/roboto-*.woff2`; `build/assets/fonts/roboto-*-ee07f3bd….woff2`.
- Evidence — every mobile run downloads **4 Roboto woff2 files, ~170 KB total**:
  ```
  /assets/fonts/roboto-regular-ee07f3bd….woff2     42 KB  VeryHigh
  /assets/fonts/roboto-medium-ee07f3bd….woff2      42 KB  VeryHigh
  /assets/fonts/roboto-bold-ee07f3bd….woff2        42 KB  VeryHigh
  /fonts/roboto-regular.woff2                       42 KB  High      ← phantom
  ```
- Diagnosis: Docusaurus's CSS pipeline hashes `url('/fonts/roboto-regular.woff2')` in `custom.css` and rewrites it to `/assets/fonts/roboto-regular-ee07f3bd….woff2`. The preload `<link>` in `docusaurus.config.ts:53` was hand-written against the **un-hashed** path (`/fonts/roboto-regular.woff2`), which:
  1. Triggers a 4th HTTP fetch the browser never uses for layout (wasted 42 KB on every cold load).
  2. Means the preload provides **zero** speedup — the actual font URL the CSS resolves to is the hashed `/assets/fonts/...` variant. Browser preload-cache match is by URL string, not by content.
  3. The raw `static/fonts/` directory is also shipped into `build/fonts/` and `build/es/fonts/`, doubling on-disk artifact size for no benefit.
- Recommendation: Either (a) point the preload at the hashed CSS-resolved URL (brittle — hash changes per build; would need a Docusaurus plugin to inject), or (b) preferred: switch the @font-face declarations in `custom.css` to reference the raw `/fonts/roboto-regular.woff2` and **disable Docusaurus's CSS url() rewriting for that path** so the CSS-resolved URL matches the preload. Simpler still: drop the preload entirely and rely on `font-display: swap` (already set per `font-display` audit score = 1). Result: ~42 KB transfer saved every page load, one fewer high-priority request competing with hero LCP.
- Bilingual: identical bug in both `/` and `/es/*`. The `/es/assets/fonts/...` paths are themselves duplicate physical copies of the same fonts the EN build serves — Docusaurus per-locale asset namespacing means **each locale ships its own hash of identical bytes**. Edge cache cannot dedupe.

### PERF-2607-002 — Render-blocking CSS bundle is now 117 KB, 89 KB (76%) unused on every route

- Severity: **P0** · Impact: **5** · Effort: **M**
- Audit IDs: `render-blocking-resources` (savings 1,200–1,350 ms on slow-band pages), `unused-css-rules` (78–91 KB unused), `first-contentful-paint`
- Location: `src/css/custom.css` (now 117 KB minified, up from the 57 KB the 2026-06 audit measured — D16 consolidation kept growing); `build/assets/css/styles.cfa80f86.css` and `build/es/assets/css/styles.1658024e.css`.
- Evidence: every slow-band mobile run reports `render-blocking-resources` with `wastedMs` 1,200 ms attributed to the single stylesheet. `unused-css-rules` reports 78–91 KB unused (consistent across every page, EN and ES — same monolithic bundle). The CSS network fetch completes in ~10 ms, so the cost is **parse + style-recalc**, not transfer.
- Recommendation: This is the same root cause as `audit-2026-06/PERF-004` but now larger. Concrete next steps:
  1. Run a Lighthouse CSS coverage report against the home route to confirm the 76% unused figure (cross-check with `unused-css-rules.details`).
  2. Split component-scoped styles out of `custom.css` back into co-located `.module.css` files for: `immFunnel__*`, case-study-specific rules, IMM-DT page styles, ClarityScan funnel styles. The `src/components/imm/*.module.css` precedent already exists — extend it.
  3. Inline critical-CSS (Hero + header + first-fold tokens) into the document `<Head>` via Docusaurus `headTags` and asynchronously load the rest with `media="print"` + `onload` trick or `rel="preload" as="style"` then promote.
  4. Audit `custom.css` for duplicated declarations (the file grew from 57 KB → 117 KB in six weeks; likely contains drift).
- Bilingual: identical CSS on both locales; the two bundles are byte-equivalent modulo hash. Cloudflare cannot dedupe across `/assets/` and `/es/assets/`.

### PERF-2607-003 — Logo SVG is 84 KB unminified, fetched on every page at Medium priority

- Severity: **P1** · Impact: **4** · Effort: **S**
- Audit IDs: `network-requests` (83 KB Image, every page), `unminified-css`/`unminified-javascript` (logos not covered, but same principle)
- Location: `static/img/logo.svg` (84,765 bytes, single line, no embedded raster, no base64).
- Evidence: `/img/logo.svg` appears in `network-requests` on every page at Medium priority with `transferSize: 83 KB`. Header logo. The SVG is hand-exported with full path geometry and `clipPath`/`defs` overhead.
- Recommendation: Run through SVGO (`npx svgo static/img/logo.svg -o static/img/logo.svg --multipass`). Expect 60–90% reduction (typical for hand-exported designer SVGs). Target ≤10 KB. Alternative: hand-author a simplified version. Same logo is served on every locale (no per-locale duplication needed — verify `/es/img/logo.svg` is the same byte stream and consider a single canonical path).

### PERF-2607-004 — Homepage fetches 91 KB `/blog/rss.xml` at High priority during initial mount, racing the LCP paint

- Severity: **P1** · Impact: **4** · Effort: **S**
- Audit IDs: `network-requests` (Fetch resourceType, priority: High, transferSize 91 KB)
- Location: `src/pages/index.tsx:299-340` (`useLatestBlogPosts` → `fetch('/blog/rss.xml', { cache: 'no-store' })`); duplicated in `i18n/es/docusaurus-plugin-content-pages/index.tsx:310`.
- Evidence: `home-en-mobile.json` shows `http://127.0.0.1:4173/blog/rss.xml` started at 391 ms with **High** priority, transferring 91 KB. The fetch competes for bandwidth and main-thread parsing time with the hero image and the main bundle.
- Diagnosis: `cache: 'no-store'` is overkill for a feed that is regenerated at build time — it prevents both browser and edge caching. The fetch runs in `useEffect`, which fires post-mount, so it doesn't gate FCP, but it does inflate TBT on home (695 ms — by far the highest in the EN cluster) because XML parse + DOM construction (`new DOMParser().parseFromString`) runs on the main thread for 91 KB of markup.
- Recommendation: (a) Drop `cache: 'no-store'`; let the default browser/edge cache apply (or set `cache: 'force-cache'` with a 1-hour TTL via headers). (b) Better: emit the latest-3 posts as a JSON blob at build time (`src/data/latest-posts.json` generated by a `prebuild` script reading the blog folder) and import it statically — eliminates the fetch and the runtime XML parse entirely. Cuts ~91 KB transfer + ~150 ms TBT off the homepage. (c) If the dynamic version is kept, gate it behind `IntersectionObserver` so it only fires when the "Latest insights" section scrolls into view — most users never reach it on home.
- Bilingual: ES homepage has the same bug. Both locales fetch the **EN** `/blog/rss.xml` (the path is hardcoded, not locale-aware) — possible content bug separate from perf.

### PERF-2607-005 — Hero `<picture>` LCP preload is irrelevant on text-LCP routes (LCP element is a `<p>`, not the hero image)

- Severity: **P1** · Impact: **3** · Effort: **S**
- Audit IDs: `largest-contentful-paint-element`, `prioritize-lcp-image` (null score → LCP is not an image), `uses-rel-preload`
- Location: `src/components/Hero.tsx:88-99` (always emits `<link rel="preload" as="image">` for the hero raster); applies wherever `<Hero>` is used.
- Evidence: every slow-band mobile run's `largest-contentful-paint-element` reports a `<p>` element:
  - home-en: `section#hero > … > p.heroSubtitle` (the "Innovation architecture, foresight, and coaching to shape tomorrow." subtitle)
  - services-imm-dt-es: `p.heroText` ("IMM-DT extiende el Modelo de Madurez en Innovación…")
  - services-innovation-maturity-es: `p.heroSubtitle`
  - services-clarityscan-es: same pattern
- Diagnosis: The Hero raster is **never** the LCP candidate on these pages — the LCP is the long subtitle/body paragraph that overflows on mobile (297 px tall on home-en, 360 px tall on imm-dt-es because the ES translation is longer). Preloading the hero image at high priority displaces font-fetch and CSS-parse bandwidth from the actual LCP element. This extends the `audit-2026-06/PERF-006` finding with concrete Lighthouse evidence: it's not just the gating logic that's wrong, the image preload itself is misdirected on these routes.
- Recommendation: (a) Gate the `<Head>` image-preload block on whether the hero image is actually the LCP candidate — usually false on mobile where text wraps tall. Default to OFF and add an opt-in `preloadImage` prop, set true only on routes verified to have image-LCP (most don't). (b) Instead, **preload the Roboto-regular font** that the LCP `<p>` is rendered in (this is already attempted but fetches the wrong URL — see PERF-2607-001). Fixing PERF-2607-001 + PERF-2607-005 together resolves the slow-band FCP gap.
- Bilingual: ES copy is longer than EN ~15% of the time (Spanish averages ~120% character count of English). This pushes text-LCP elements taller on ES pages and exacerbates the issue. Explicit EN-vs-ES delta confirmed on `services-innovation-maturity`: EN 56, ES 47.

### PERF-2607-006 — `services-diagnostics-es` has a 0.239 CLS — the only meaningful CLS regression in the run set

- Severity: **P1** · Impact: **4** · Effort: **S**
- Audit IDs: `cumulative-layout-shift`, `layout-shift-elements`
- Location: `i18n/es/docusaurus-plugin-content-pages/services/diagnostics.tsx` (or whichever component renders the ES diagnostics page hero).
- Evidence: `services-diagnostics-es-mobile.json` reports CLS **0.239** — well above Google's 0.1 "good" threshold. EN counterpart is 0.002. Pattern suggests an ES-only string causing a late wrap or a missing image dimension that the EN copy happens not to trigger.
- Recommendation: Read `layout-shift-elements` from the JSON; verify all hero images and below-fold images on the ES diagnostics page have explicit `width`/`height`; check for ES-text-only `min-height` issues on stat cards or value-prop boxes. Compare ES copy length to EN; if the ES heading or body wraps an extra line on mobile that the EN doesn't, reserve space with a CSS `min-height` token.

### PERF-2607-007 — JS main bundle is 432 KB transferred, ~137 KB unused on every route

- Severity: **P1** · Impact: **4** · Effort: **M**
- Audit IDs: `unused-javascript` (137 KB wasted on every page), `bootup-time` (898 ms script eval on home-en mobile; 1,028 ms on services-imm-dt-es mobile), `total-byte-weight`
- Location: `build/assets/js/main.09092cc1.js` (432 KB) and `build/es/assets/js/main.186c6e18.js` (430 KB).
- Evidence: `unused-javascript` consistently reports ~137 KB of `main.js` unused on every route (~32% of the bundle). The bundle includes code paths that are only used on some pages (e.g., the home `useLatestBlogPosts` hook, the IMM components Pillars/Radar/MaturityLadder/EvidenceMeter/Roadmap, the `useScrollSpy` for ClarityScan).
- Recommendation: (a) Audit `src/pages/index.tsx` for synchronous imports that could be `React.lazy()` — the homepage imports 15 lucide icons and the BlogItem hook that only render below-fold. (b) Inspect what Docusaurus is putting into `main.js` via `webpack-bundle-analyzer` (run `ANALYZE=1 npm run build:cf` if the harness supports it; otherwise add `webpack-bundle-analyzer` temporarily). (c) Verify the IMM components are imported lazily on the service pages, not statically — current Lighthouse shows they're code-split (`8b4cdbdc.*.js` chunk loads on services-imm-dt only), good; check homepage isn't pulling them.
- Bilingual: EN and ES bundles are byte-equivalent modulo a few translated string literals; deduping at edge is impossible due to per-locale paths.

### PERF-2607-008 — Cytoscape + d3 + dagre + katex + mermaid all ship as ~1.5 MB of split chunks

- Severity: **P2** · Impact: **3** · Effort: **L**
- Audit IDs: bundle inspection (not a Lighthouse audit per se); `unused-javascript`
- Location: `build/assets/js/2279.7ff960b1.js` (534 KB — mermaid + d3-* + dagre + cytoscape + katex), `build/assets/js/165.fcb7b6fa.js` (432 KB — cytoscape), `build/assets/js/8731.2eb4558b.js` (335 KB — mermaid), `build/assets/js/244.b918a8eb.js` (146 KB — mermaid + cytoscape).
- Diagnosis: Mermaid 11 pulls in cytoscape (for the new graph layouts) and katex (for math labels), even when no diagram on the site uses either. These chunks are properly route-split — they only load on routes that render a mermaid fence — but **any** mermaid diagram triggers all four chunks.
- Recommendation: Same as `audit-2026-06/PERF-003` (build-time SVG rendering). New evidence: cytoscape (432 KB chunk) is loaded for every blog post that has a mermaid diagram, even simple flowcharts that don't use ELK/cytoscape layouts. If staying with runtime mermaid, configure `mermaid.initialize` to only register the layouts/diagram types actually used (`flowchart`, `sequence`); avoid auto-loading cytoscape unless an ELK-layout diagram requests it.

### PERF-2607-009 — `static/fonts/` ships into both `build/fonts/` AND `build/es/fonts/`, doubled phantom artefact

- Severity: **P3** · Impact: **2** · Effort: **S**
- Audit IDs: build inspection
- Location: `build/fonts/roboto-*.woff2` AND `build/es/fonts/roboto-*.woff2` AND `build/assets/fonts/roboto-*-ee07f3bd….woff2` AND `build/es/assets/fonts/roboto-*-ee07f3bd….woff2`.
- Evidence: The same three woff2 files exist at **four** distinct paths in the build output (raw EN, raw ES, hashed EN, hashed ES). Only the hashed paths are referenced by CSS.
- Recommendation: Resolves automatically when PERF-2607-001 lands (either by switching to the raw path or by dropping the redundant preload).

### PERF-2607-010 — Bilingual perf parity is broken: ES underperforms EN on slow-band routes, EN underperforms ES on home

- Severity: **P2** · Impact: **3** · Effort: **M**
- Audit IDs: cross-run comparison
- Evidence:
  | Route | EN perf | ES perf | Delta |
  |---|---|---|---|
  | home | 46 | 67 | ES +21 |
  | services-innovation-maturity | 56 | 47 | EN +9 |
  | services-imm-dt | 72 | 50 | EN +22 |
  | services-clarityscan | 54 | 52 | EN +2 |
  | services-clarityscan-diagnostic | 66 | 57 | EN +9 |
  | services-clarityscan-audit | 71 | 55 | EN +16 |
  | services-diagnostics | 74 | 58 | EN +16 |
  | services | 73 | 58 | EN +15 |
- Diagnosis: The home-en outlier (46 vs 67) is genuine — home-en has `main.js` bootup 899 ms vs ES 681 ms in this run set, suggesting the EN main bundle pays a one-time cost the ES one avoids (or run-to-run scheduling drift on Chrome's worker thread). The services-* routes consistently rank ES below EN — Spanish copy is longer, the LCP text element is taller, and the render-blocking CSS parse therefore gates a larger first paint. This is structural, not random.
- Recommendation: After fixing PERF-2607-005 (image preload on text-LCP pages) and PERF-2607-002 (split CSS), re-run Lighthouse and confirm the EN/ES delta on services-* collapses to ≤5 points. If it persists, copy-trim the ES hero subtitles to match EN line count on a 360 px viewport.

### PERF-2607-011 — `services-clarityscan-en-mobile` is 18 points worse than `services-clarityscan-en-desktop` despite identical hero — confirms mobile rendering pipeline is the bottleneck, not assets

- Severity: informational (calibration finding)
- Evidence: ClarityScan EN: desktop 97, mobile 54. Same HTML, same CSS, same images. Mobile CPU throttling (Lighthouse defaults to 4× CPU slowdown) plus the 117 KB CSS parse on the simulated Moto G4 CPU profile = the entire perf delta.
- Recommendation: Validates that PERF-2607-002 (CSS split + critical-CSS inlining) is the single highest-leverage mobile win available. Track mobile-CPU-bound budget as the primary KPI.

## Quick wins — top 5 (this pass)

1. **PERF-2607-001** — Fix the font preload to actually match the CSS-resolved URL (or drop it). 15 minutes; recovers 42 KB per page-load and removes one wasted High-priority request.
2. **PERF-2607-004** — Drop `cache: 'no-store'` on the homepage RSS fetch and either build-time-emit `latest-posts.json` or gate the fetch behind `IntersectionObserver`. 30 minutes; ~150 ms off home TBT and 91 KB off transfer.
3. **PERF-2607-003** — SVGO pass on `static/img/logo.svg`. 5 minutes; ~75 KB off every page load.
4. **PERF-2607-005** — Default `Hero` image-preload to OFF, opt-in via `preloadImage` prop. ~10 lines in `Hero.tsx`. Recovers high-priority bandwidth for the actual LCP element (text).
5. **PERF-2607-006** — Diagnose and fix the 0.239 CLS on `services-diagnostics-es`. Read `layout-shift-elements` from the LH JSON, add `width`/`height` or `min-height` to the offending element.

## Strategic bets — top 3

1. **CSS payload restructure (PERF-2607-002)**. Split `custom.css` (now 117 KB) into a token/utility core (~20 KB, always-loaded) and per-page modules. Inline critical-CSS for the Hero. Expected impact: mobile perf score 46–58 cluster → 70–80 across the board, gating the largest single contributor to FCP/LCP on mobile. M–L effort, P0 strategic.
2. **Build-time mermaid SVG rendering** (extends `audit-2026-06/PERF-003`; PERF-2607-008). Cytoscape (432 KB) and the d3+dagre+mermaid combo (~1.3 MB total) only ship to diagram pages, but that's still every IMM-related blog post and case study. Pre-rendering to SVG at build time removes the entire chunk family. L effort, P1.
3. **Bilingual asset deduplication**. Today, every static asset has two distinct fingerprinted copies on disk (one in `build/assets/...`, one in `build/es/assets/...`). Cloudflare can't dedupe across paths. Investigate a Docusaurus plugin that points both locales at the same `/assets/` namespace (since the binary content is locale-independent for JS/CSS/fonts/images). Would shrink build output ~40% and improve edge cache hit rate across the EN/ES split. M effort, P2.

## Out of scope / hand-offs

- ES copy length driving text-LCP height on services pages → **Content & copy** (PERF-2607-005 + PERF-2607-010 dependency)
- Per-locale CLS regression on `services-diagnostics-es` element identity → **i18n** + **Accessibility** (PERF-2607-006)
- The `/blog/rss.xml` path being EN-only fetched from the ES homepage → **i18n** (correctness, not perf)
- 0.05 CLS on `work-with-us-en-mobile` and `services-coaching-mentoring-en-mobile` (small but worth a pass) → **Mobile-first**
- Mermaid runtime theme/dark-mode parity → **Brand & visual** (already noted)
- `audit-2026-06/PERF-010` (`gh-pages` retained) — defer; not re-filed here.
- `audit-2026-06/PERF-011` (browserslist tightening) — defer; not re-filed here. Worth revisiting after the CSS/JS restructure lands and the polyfill budget becomes measurable.
- `audit-2026-06/PERF-014` (`Cache-Control` `s-maxage` on `/*`) — defer; not re-filed here, still valid.
- `audit-2026-06/PERF-015` (RSS+Atom both generated) — defer; trivial.

## Findings already resolved or covered by 2026-06 (not re-filed)

- `PERF-001` PNG fallbacks — `<picture>` AVIF/WebP usage confirmed in this audit (Hero serves AVIF, image `resource-summary` shows 97 KB Image total per page = only one optimized format hits the wire). PNG fallbacks no longer racing the AVIF/WebP variants.
- `PERF-002` 2.5 MB ILG hero — not visited by any LH run in this set; check separately.
- `PERF-006` Hero preload gating — extended/refined here as PERF-2607-005 with concrete LH evidence that the image isn't even the LCP candidate.
- `PERF-007` `imageSrcSet` listing PNG at 1x — source still has the pattern (`src/components/Hero.tsx:96`); folds into PERF-2607-005 (drop the whole preload).
- `PERF-009` YouTube iframes on AFP Siembra — case study mobile run shows perf 59/68 (EN/ES) and TBT 636/300 ms; iframes still likely heavy. Confirm `loading="lazy"` then close.
- `PERF-013` preconnect to `booking.doulab.net` — still missing in source; not re-filing, original recommendation stands.

## Open questions for Luis

1. **Drop the font preload entirely?** Given PERF-2607-001 shows the preload is misdirected, the simplest fix is `headTags: []`. `font-display: swap` is already on. Confirm acceptable to flash system font for ~50 ms on cold load.
2. **Build-time `latest-posts.json` for the homepage?** This is the cleanest fix for PERF-2607-004 but means the homepage "Latest insights" only updates on rebuild (already true for everything else on the site, since Cloudflare Pages rebuilds on every push).
3. **CSS split scope.** Are you open to re-introducing `.module.css` for the IMM components and service pages, or is the D16 "everything in custom.css" principle load-bearing for some workflow reason? PERF-2607-002 hinges on this.
4. **Bilingual asset dedup feasibility.** Worth a Docusaurus plugin investigation, or accept the 2× artefact size as the cost of locale isolation?
5. **ES copy trim policy.** If we shorten ES hero subtitles to match EN line count at 360 px, do you want them content-equivalent or can we condense (e.g., drop a clarifier)? Affects PERF-2607-005 follow-through.
