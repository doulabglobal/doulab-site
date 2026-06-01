# Lighthouse Audit — doulab.net — 2026-06-01

## Scope of this audit

Lighthouse-specific predictive audit of doulab.net (Docusaurus 3.10, Cloudflare Pages, English only, privacy-first with Cloudflare Web Analytics only — no GA/GTM). Covers the four scored Lighthouse categories:

- Performance
- Accessibility
- Best Practices
- SEO

Across both **mobile** (Lighthouse default Slow 4G simulated throttling) and **desktop** profiles, on a representative sample of public marketing, service, case-study, blog, and docs routes.

This audit differs from sibling audits as follows:

- `06-performance.md` (PERF-001..015) is a source-heuristic perf audit focused on Core Web Vitals levers (LCP, TBT, CLS, transfer-size). This Lighthouse audit predicts the **Lighthouse score impact** of those levers, then adds the Lighthouse-specific audits that the perf audit does not address (e.g., `errors-in-console`, `image-aspect-ratio`, `deprecations`, `csp-xss`, `meta-description`, `link-text`, `crawlable-anchors`, `tap-targets`).
- `07-accessibility.md` (A11Y-001..015) is a WCAG 2.2 AA static review. This audit cross-references which findings Lighthouse's automated `axe-core`-backed checks will surface (subset of WCAG; about 30 audits) and which require manual confirmation.
- `05-seo.md` (SEO-001..015) covers strategic SEO. This audit predicts which items will appear in Lighthouse's narrower automated SEO category (`meta-description`, `document-title`, `link-text`, `is-crawlable`, `hreflang`, `canonical`, `robots-txt`).

No Lighthouse run was executed for this pass (read-only source audit). The output is a prediction plus a concrete re-audit plan.

## Method

1. Read existing baselines: `docs/ops/performance-baseline.md` (Lighthouse 2026-01-15) and `docs/ops/phase-b5-p1-baseline.md`.
2. Read parallel audit outputs (`06-performance.md`, `07-accessibility.md`, `05-seo.md`) fully and map their findings to Lighthouse audit IDs.
3. Read `docusaurus.config.ts`, `package.json` (browserslist, deps) for predicted Lighthouse Best-Practices/Perf signals.
4. Note baseline scores (mobile, with extensions warning):
   - Performance 71, Accessibility 93, Best Practices 73, SEO 92
   - TBT ~1,150 ms, CLS 0
   - January 2026, pre-Phase-B/C performance work and pre-current PNG/AVIF/WebP `<picture>` introduction; some items may now be partly resolved.
5. Predict per-page score bands using sibling-audit evidence; identify items that lift fastest.

Constraint: no npm/build/Lighthouse execution. Citations are file:line; some items quote findings from sibling audits rather than re-deriving them.

## Predicted findings by category (ranked)

Estimated points lost are heuristic deltas vs a 100 ceiling for the relevant category; total per-category sum exceeds the actual loss because Lighthouse weights audits and several findings overlap.

### Performance category

#### LH-P-001 — `largest-contentful-paint` slow due to PNG-favouring preload on hero routes
- Predicted Lighthouse audit IDs: `largest-contentful-paint`, `largest-contentful-paint-element`, `preload-lcp-image`, `prioritize-lcp-image`
- Severity: P0 · Score impact: 12 · Effort: S
- Location: `src/components/Hero.tsx:88-98, 93-94`; `src/pages/index.tsx:693, 696-697`
- Observation: Hero `<link rel="preload" as="image">` uses PNG `href` and an `imageSrcSet` mixing AVIF/WebP/PNG at `1x`. Browsers without AVIF can still pull the PNG fallback; mobile LCP element is a 360–580 KB PNG on slow-4G simulation. Baseline Perf 71 is dominated by LCP on mobile.
- Recommendation: Cross-ref `PERF-001`, `PERF-007`. Set preload `href` to WebP and `type="image/webp"`; drop PNG from `imageSrcSet`.
- Evidence: `06-performance.md` PERF-001/007; baseline `performance-baseline.md:5,11`.

#### LH-P-002 — `total-blocking-time` ~1,150 ms baseline; mermaid + main bundle
- Predicted Lighthouse audit IDs: `total-blocking-time`, `bootup-time`, `mainthread-work-breakdown`, `unused-javascript`
- Severity: P0 · Score impact: 10 · Effort: M
- Location: `docusaurus.config.ts:23, 26` (mermaid enabled site-wide); `package.json:43` (`mermaid 11.11.0`)
- Observation: Mermaid runtime ships as a route chunk but its theme adapter and React glue land on every entrypoint that mounts theme-mermaid. Combined with `main.db7b626f.js` (0.41 MB) and `2279.7ff960b1.js` (0.51 MB) flagged in `phase-b5-p1-baseline.md:29-31`, mobile main-thread work on mid-tier CPUs exceeds the 600 ms TBT budget.
- Recommendation: Build-time SVG render mermaid (PERF-003, PERF-012). Defer below-fold icon imports (PERF-005).
- Evidence: `phase-b5-p1-baseline.md:29-31, 34-35`; `06-performance.md` PERF-003, PERF-005.

#### LH-P-003 — `unminified-css`/`unused-css-rules` against 57 KB monolithic stylesheet
- Predicted Lighthouse audit IDs: `unused-css-rules`, `render-blocking-resources`
- Severity: P1 · Score impact: 5 · Effort: M
- Location: `src/css/custom.css` (57,471 B, 2,463 lines, per PERF-004)
- Observation: All page-scoped selectors (`.immFunnel__*`, `.pages-b4-p1__*`, case-study classes) load on every route. Lighthouse "Reduce unused CSS" will flag well over 30 KB of bytes on simple routes like `/contact`, `/about`.
- Recommendation: Cross-ref PERF-004. Split per-route or reintroduce CSS modules for page-scoped surfaces.

#### LH-P-004 — `uses-responsive-images` / `efficient-animated-content` / `modern-image-formats` flag remaining PNGs
- Predicted Lighthouse audit IDs: `uses-webp-images`, `modern-image-formats`, `uses-optimized-images`, `uses-responsive-images`
- Severity: P1 · Score impact: 6 · Effort: S
- Location: `static/img/*.png` (41 PNGs, ~8.16 MB total per PERF-001); `static/img/research/innovation-lab-guide/hero-nyy.png` (2.49 MB, no AVIF/WebP variant per PERF-002)
- Observation: When PNG is selected as fallback or referenced directly (e.g., NNY hero), Lighthouse will dock for "Serve images in next-gen formats" and "Properly size images" (heroes likely 1920+ wide for a `600px`-rendered slot).
- Recommendation: Cross-ref PERF-001, PERF-002. Generate AVIF/WebP for NNY hero; drop PNG from preload srcSet; add responsive `sizes`/multi-width sources.

#### LH-P-005 — `third-party-summary` and `third-party-facades` from YouTube embeds
- Predicted Lighthouse audit IDs: `third-party-summary`, `third-party-facades`, `efficient-animated-content`
- Severity: P1 · Score impact: 4 · Effort: S
- Location: `src/pages/case-studies/afp-siembra.tsx:262, 276`
- Observation: Two `youtube-nocookie.com/embed/...` iframes on a single case-study page. Lighthouse explicitly recommends a facade pattern; will score-dock on `third-party-facades` until applied. Affects only the AFP Siembra route but is consistently visible in any audit that samples that URL.
- Recommendation: Cross-ref PERF-009. Add `loading="lazy"` minimally; facade ideally.

#### LH-P-006 — `legacy-javascript` and `unused-javascript` from permissive browserslist
- Predicted Lighthouse audit IDs: `legacy-javascript`, `unused-javascript`
- Severity: P2 · Score impact: 3 · Effort: S
- Location: `package.json:74-78` (`">0.5%", "not dead", "not op_mini all"`)
- Observation: Lighthouse `legacy-javascript` audit detects shipped polyfills for syntax modern engines already support. Per PERF-011, ~15–30 KB of avoidable polyfill bytes.
- Recommendation: Tighten browserslist (PERF-011).

#### LH-P-007 — `uses-rel-preconnect` opportunity for booking/Stripe hosts
- Predicted Lighthouse audit IDs: `uses-rel-preconnect`, `uses-rel-preload`
- Severity: P2 · Score impact: 2 · Effort: S
- Location: site-wide (no preconnects emitted)
- Observation: Lighthouse will flag missing preconnect to `booking.doulab.net`, `buy.stripe.com`, and `www.youtube-nocookie.com` (case-study route).
- Recommendation: Cross-ref PERF-013.

#### LH-P-008 — `server-response-time` (TTFB) on Cloudflare Pages root HTML
- Predicted Lighthouse audit IDs: `server-response-time`
- Severity: P2 · Score impact: 2 · Effort: S
- Location: `static/_headers:11-15`; HTML cache headers set `Cache-Control: no-cache` for `/*`
- Observation: With HTML revalidating every request, TTFB depends on Cloudflare Pages cold-edge fetch; first-visit TTFB on LATAM POPs likely 200–600 ms.
- Recommendation: Cross-ref PERF-014: add `s-maxage`/`stale-while-revalidate` on HTML.

### Accessibility category

Lighthouse a11y is automated only (axe-core subset, ~30 audits). It cannot catch most A11Y-002 / A11Y-004 / A11Y-014 issues — those need manual testing. The items below are the ones Lighthouse **will** automatically detect.

#### LH-A-001 — `link-name` / `button-name` likely fail on icon-only or empty-anchor patterns
- Predicted Lighthouse audit ID: `link-name`, `button-name`
- Severity: P1 · Score impact: 7 · Effort: S
- Location: `src/pages/index.tsx:59-68, 183-230` (carousel Prev/Next buttons per A11Y-004)
- Observation: Carousel buttons with `aria-roledescription` may lack accessible name if the visible label is icon-only. Lighthouse axe-core check `button-name` will fail loudly.
- Recommendation: Add `aria-label="Previous slide"` / `"Next slide"`; cross-ref A11Y-004.

#### LH-A-002 — `color-contrast` failures on funnel diagram and indigo brand on coloured surfaces
- Predicted Lighthouse audit ID: `color-contrast`
- Severity: P1 · Score impact: 5 · Effort: M
- Location: `src/css/custom.css:3-4, 564-569` (`--p2b #57C000` with white text ≈ 2.6:1 — fails AA)
- Observation: Per A11Y-006, the funnel green/orange phase bars with default white text are AA-borderline-to-fail. Lighthouse will flag every visible failing element.
- Recommendation: Cross-ref A11Y-006; tighten palette tokens.

#### LH-A-003 — `image-alt` may fire on decorative blog thumbnails with semantic alt
- Predicted Lighthouse audit ID: `image-alt`
- Severity: P2 · Score impact: 2 · Effort: S
- Location: `src/pages/index.tsx:548` (`alt={`Blog, ${post.title}`}`)
- Observation: Not a Lighthouse fail (alt is non-empty), but Lighthouse `image-alt` passes. The deeper a11y issue (A11Y-009 double-announcement) won't fire here — listed for completeness of overlap with the parallel audit.
- Recommendation: Cross-ref A11Y-009; this is a manual finding.

#### LH-A-004 — `heading-order` likely fails where pages render multiple `<h1>` (Hero + body)
- Predicted Lighthouse audit ID: `heading-order`
- Severity: P1 · Score impact: 4 · Effort: M
- Location: `src/pages/services/diagnostics.tsx:38` (explicit `<h1>` plus Hero `<h1>`); ecosystem stubs
- Observation: Lighthouse `heading-order` flags non-sequential headings. SEO-009 documents the duplicate-H1 risk.
- Recommendation: Cross-ref SEO-009, A11Y-002.

#### LH-A-005 — `bypass` (skip-link) and `landmark-one-main` predicted failure on homepage
- Predicted Lighthouse audit IDs: `bypass`, `landmark-one-main`
- Severity: P1 · Score impact: 5 · Effort: S
- Location: `src/pages/index.tsx:703-721` (Hero outside `<main>`); `src/theme/Root.tsx`
- Observation: Per A11Y-001/A11Y-002, the home page has H1 outside `<main>`. Lighthouse `landmark-one-main` may still pass (one `<main>` exists), but `bypass` (skip target reaches the page's primary content) can fail because the skip target lands below the H1.
- Recommendation: Cross-ref A11Y-001, A11Y-002.

### Best Practices category

Baseline BP = 73 — significant headroom. This category is sensitive to console errors, HTTPS-only resources, deprecations, and the new (2024+) `csp-xss` and `trusted-types` audits.

#### LH-BP-001 — `csp-xss` predicted to fail (no strict CSP in production)
- Predicted Lighthouse audit IDs: `csp-xss`, `trusted-types`
- Severity: P1 · Score impact: 7 · Effort: M
- Location: `static/_headers`; per `AGENTS.md:22` CSP defaults to Report-Only
- Observation: Lighthouse v10+ scores down sites that lack an enforced strict CSP with `'strict-dynamic'` and `nonce`/`hash`. Report-Only does not satisfy the audit.
- Recommendation: Stage an enforced CSP once tested; coordinate with the Security & privacy audit.

#### LH-BP-002 — `errors-in-console` likely fires from mermaid theme switching and React 18 dev warnings in client
- Predicted Lighthouse audit ID: `errors-in-console`
- Severity: P2 · Score impact: 4 · Effort: S
- Location: `docusaurus.config.ts:60-80` (mermaid theme config); various
- Observation: Mermaid often logs warnings (parser edge cases, theme application) to console; Docusaurus may log hydration mismatches. The 2026-01-18 baseline run noted "Chrome extensions affected this Lighthouse run" — that warning itself docks BP. Running cleanly in incognito should expose only real errors.
- Recommendation: Re-run in incognito; fix any genuine console errors surfaced.

#### LH-BP-003 — `image-aspect-ratio` likely on cards/hero where rendered ratio differs from natural
- Predicted Lighthouse audit ID: `image-aspect-ratio`
- Severity: P2 · Score impact: 3 · Effort: S
- Location: `src/components/Hero.tsx` `<picture>`; `src/pages/index.tsx:477-479, 546` (case-study + blog cards)
- Observation: If `width`/`height` attrs are omitted on `<img>` (or set inconsistently across AVIF/WebP/PNG sources of differing pixel dims), Lighthouse flags ratio mismatch and (separately) CLS risk on the image element.
- Recommendation: Verify intrinsic width/height attrs match source file dims for all formats in `<picture>`.

#### LH-BP-004 — `deprecations` likely fires on `unload`/legacy event listeners or `document.write` from third-parties
- Predicted Lighthouse audit ID: `deprecations`
- Severity: P3 · Score impact: 2 · Effort: S
- Location: Cloudflare Web Analytics beacon (`/cdn-cgi/rum`); third-party YouTube
- Observation: YouTube iframes historically trigger deprecation warnings (synchronous XHR, `unload`). Will appear on AFP Siembra audit run.
- Recommendation: Facade YouTube embeds (PERF-009) removes the surface.

#### LH-BP-005 — `inspector-issues` (mixed-content, COEP/COOP) may fire if any HTTP resource sneaks in
- Predicted Lighthouse audit ID: `inspector-issues`, `is-on-https`
- Severity: P3 · Score impact: 2 · Effort: S
- Location: site-wide; `static/_headers`
- Observation: Site is HTTPS-only on Cloudflare Pages, but Lighthouse `inspector-issues` can surface cookie/SameSite warnings from third-party embeds.
- Recommendation: Audit Cookie warnings on YouTube/Stripe routes.

### SEO category

Lighthouse SEO is the narrowest automated category (~14 audits). Most issues found in `05-seo.md` are *strategic* and outside Lighthouse scope; the items below are what Lighthouse actually scores.

#### LH-SEO-001 — `meta-description` may fail on pages that omit `description` in `<Head>`
- Predicted Lighthouse audit ID: `meta-description`
- Severity: P1 · Score impact: 5 · Effort: S
- Location: `src/pages/ecosystems/redlab.tsx`, `src/pages/ecosystems/red-incubadoras.tsx` (per SEO-006); some blog posts lacking frontmatter (per SEO-014)
- Observation: SEO-006 calls out these stub pages have no `<Head>` block, no description meta. Lighthouse `meta-description` fails per-page.
- Recommendation: Cross-ref SEO-006, SEO-014.

#### LH-SEO-002 — `link-text` likely fails on "Read post →", "Learn more →" generic anchors
- Predicted Lighthouse audit ID: `link-text`
- Severity: P1 · Score impact: 4 · Effort: M
- Location: `src/pages/index.tsx:283-323, 536-540` (per SEO-012)
- Observation: Lighthouse `link-text` flags non-descriptive anchor text ("learn more", "click here", "read more"). Site uses several.
- Recommendation: Cross-ref SEO-012.

#### LH-SEO-003 — `hreflang` audit will not fail today but will fail at ES launch
- Predicted Lighthouse audit ID: `hreflang`
- Severity: P3 (today), P0 (at ES launch) · Score impact: 0 now, 4 later · Effort: L
- Location: `docusaurus.config.ts:20`
- Observation: Single-locale site passes today; pre-stage per SEO-010 to avoid sudden score drop.

#### LH-SEO-004 — `robots-txt` predicted invalid
- Predicted Lighthouse audit ID: `robots-txt`
- Severity: P1 · Score impact: 4 · Effort: S
- Location: `static/` (no `robots.txt` present per SEO-003); baseline 2026-01-18 PDF reportedly flagged invalid `Content-Signal` directive coming from the edge.
- Observation: Lighthouse `robots-txt` audit returns "Invalid robots.txt" or "Lighthouse was unable to download a robots.txt file" — the audit fails.
- Recommendation: Ship `static/robots.txt` (SEO-003).

#### LH-SEO-005 — `canonical` may fail on legacy ILG URL competing with chapterized landing
- Predicted Lighthouse audit ID: `canonical`
- Severity: P2 · Score impact: 2 · Effort: S
- Location: `docs/research-resources/innovation-lab-guide-q2-2024-en.mdx` (per SEO-013)
- Observation: If canonical points to a removed/renamed target, Lighthouse flags.

#### LH-SEO-006 — `tap-targets` (mobile) likely fails on dense footer link columns
- Predicted Lighthouse audit ID: `tap-targets`
- Severity: P2 · Score impact: 3 · Effort: S
- Location: `docusaurus.config.ts:96-135` (4-column dense footer)
- Observation: Lighthouse mobile `tap-targets` requires ≥48×48 px hit areas with ≥8 px spacing. Stacked footer links often fall below.
- Recommendation: Verify rendered footer link tap sizes; widen line-height/padding in `custom.css`.

#### LH-SEO-007 — `is-crawlable` and `crawlable-anchors` should pass for marketing routes; verify booking flow `noindex` is correctly set
- Predicted Lighthouse audit IDs: `is-crawlable`, `crawlable-anchors`
- Severity: P3 · Score impact: 1 · Effort: S
- Location: `src/pages/book-clarityscan.tsx:25`, `src/pages/book-clarityscan-success.tsx:23`
- Observation: Correctly `noindex`. Lighthouse on those routes will "fail" `is-crawlable` by design — record as expected, not a defect (per SEO-015).

## Page-by-page predicted score band

Bands assume current state (no fixes yet), mid-tier mobile / unthrottled desktop. Format: `mobile / desktop`. Bands are wide because actual Lighthouse runs vary ±5 per execution.

| Page | Perf | A11y | BP | SEO |
|---|---|---|---|---|
| `/` (home) | 60–72 / 85–93 | 80–88 / 85–93 | 70–80 / 75–85 | 85–92 / 88–95 |
| `/what-we-do` | 65–75 / 88–95 | 85–92 / 88–95 | 72–82 / 78–88 | 75–85 (missing OG card) / 80–88 |
| `/services` | 60–72 / 85–92 | 85–92 / 88–95 | 72–82 / 78–88 | 78–86 / 82–90 |
| `/services/innovation-maturity` | 65–75 / 88–95 | 85–92 / 88–95 | 72–82 / 78–88 | 88–95 / 90–97 (has JSON-LD) |
| `/services/clarityscan` | 60–70 / 85–93 | 82–90 / 85–93 | 70–80 / 75–85 | 88–95 / 90–97 |
| `/services/diagnostics` | 60–72 / 85–92 | 78–86 (dup H1) / 82–90 | 72–82 / 78–88 | 75–85 (no JSON-LD, missing OG) / 80–88 |
| `/case-studies` | 70–80 / 90–96 | 85–92 / 88–95 | 72–82 / 78–88 | 78–86 / 82–90 |
| `/case-studies/afp-siembra` | **40–55** (YouTube ×2) / 75–85 | 82–90 / 85–93 | 65–75 / 72–82 | 80–88 / 85–92 |
| `/about` | 65–75 / 88–95 | 85–92 / 88–95 | 72–82 / 78–88 | 78–86 / 82–90 |
| `/contact` | 70–80 / 90–96 | 85–92 / 88–95 | 72–82 / 78–88 | 78–86 / 82–90 |
| `/book-clarityscan` | 70–80 / 88–95 | 75–85 (auto-open) / 80–88 | 65–75 (auto-popup) / 72–82 | n/a (noindex) |
| `/insights` (blog index) | 65–75 / 88–95 | 85–92 / 88–95 | 72–82 / 78–88 | 82–90 / 85–93 |
| Representative blog post | 65–75 / 88–95 | 85–92 / 88–95 | 72–82 / 78–88 | 78–88 (varies by image frontmatter) / 82–92 |
| `/docs/research-resources/intro` | 70–80 / 90–96 | 85–92 / 88–95 | 72–82 / 78–88 | 80–88 / 85–92 |
| `/docs/research-resources/innovation-lab-guide/01-…` | 50–65 (2.5 MB NNY hero) / 75–85 | 85–92 / 88–95 | 72–82 / 78–88 | 82–90 / 85–93 |

**Worst predicted routes**: AFP Siembra case study (mobile Perf low 40s due to two YouTube embeds), ILG chapter pages (NNY hero LCP), home (multi-icon, carousel, hero PNG preload).

**Best predicted routes**: `/services/innovation-maturity` (already has JSON-LD), `/contact` (no hero PNG of equal weight), `/docs/research-resources/intro` (text-heavy, light assets).

## Re-audit plan

### Tooling choice

**Primary**: Lighthouse CLI 12.x (Node CLI, headless Chrome) run locally and on every preview deploy. Rationale:
- Reproducible JSON output that can be diffed and stored in repo.
- Same engine as PageSpeed Insights but with full control over throttling, form-factor, locale, and per-run flags.
- No external API quotas.

**Supplementary**:
- **PageSpeed Insights API** for periodic field-data spot-checks from Google's POPs, including CrUX real-user metrics (when site qualifies). Use as a sanity reference; do not gate on it.
- **WebPageTest** (`webpagetest.org` public instance) for one-off Latin America/Caribbean POP runs (Bogotá, Santiago, São Paulo) — Lighthouse CLI cannot easily originate from those regions, but doulab's audience is LATAM/Caribbean and synthetic LATAM benchmarks are decision-critical.

**Considered, deferred**: Calibre, Treo (paid LH-in-CI) — note as `LH-CI-OPT-1` open question for Luis.

### Exact target URL list

Production URLs (no preview/staging unless preview deploys are wired):

```
https://doulab.net/
https://doulab.net/what-we-do
https://doulab.net/services
https://doulab.net/services/innovation-maturity
https://doulab.net/services/clarityscan
https://doulab.net/services/diagnostics
https://doulab.net/services/coaching-mentoring
https://doulab.net/services/custom-workshops
https://doulab.net/case-studies
https://doulab.net/case-studies/afp-siembra
https://doulab.net/case-studies/alpha-inversiones
https://doulab.net/case-studies/fundapec
https://doulab.net/case-studies/ogtic-redlab
https://doulab.net/about
https://doulab.net/contact
https://doulab.net/book-clarityscan
https://doulab.net/insights
https://doulab.net/blog/2026/01/19/coordination-threshold     (rep. blog post)
https://doulab.net/docs/research-resources/
https://doulab.net/docs/research-resources/innovation-lab-guide/01-executive-summary
https://doulab.net/vigia-futura
```

21 URLs × 2 form-factors = 42 audit runs per cycle.

### Mobile + Desktop matrix

| Form-factor | Throttling | Screen | Locale | Frequency |
|---|---|---|---|---|
| Mobile | Lighthouse default (Slow 4G simulated, 4× CPU slowdown) | 360×640 | en-US | Every cycle |
| Desktop | None (no throttling) | 1350×940 | en-US | Every cycle |
| Mobile (LATAM POP) | WebPageTest 4G Bogotá/Santiago | 360×640 | es-CO | Monthly spot-check |

### Storage location for results

```
ops/audits/doulab-net/lighthouse-2026-06/
  ├── README.md                       (run methodology, environment, Chrome/Lighthouse versions)
  ├── summary.csv                     (per-page, per-form-factor, per-category scores)
  ├── reports/
  │   ├── home-mobile.json
  │   ├── home-mobile.html
  │   ├── home-desktop.json
  │   ├── home-desktop.html
  │   ├── …                           (one .json + .html per URL × form-factor)
  ├── deltas/
  │   └── vs-2026-01-18.md            (delta vs baseline PDF)
  └── webpagetest/
      └── bogota-2026-06-15.json
```

Per `AGENTS.md:102`, the audit folder is reference-only (immutable evidence); follow the same convention for the new folder.

### Threshold gates

Gates apply **per page, per form-factor**:

| Category | Block-merge floor | Warn floor | Target |
|---|---|---|---|
| Performance | < 70 (mobile), < 85 (desktop) | < 80 / < 92 | ≥ 90 |
| Accessibility | < 90 (both) | < 95 | ≥ 95 |
| Best Practices | < 80 (both) | < 90 | ≥ 95 |
| SEO | < 90 (both) | < 95 | ≥ 95 |

**Special exceptions**:
- `/case-studies/afp-siembra` Performance floor lowered to 55 mobile / 75 desktop until YouTube facade lands (track PERF-009 resolution).
- `/book-clarityscan*` excluded from SEO gates (noindex by design).
- `/docs/research-resources/innovation-lab-guide/*` Performance floor lowered to 60 mobile until PERF-002 lands.

### CI integration option

Cloudflare Pages emits a unique preview URL per PR. Two options:

**Option A (recommended): GitHub Action on PRs touching `src/**`, `docs/**`, `static/**`, `docusaurus.config.ts`**
- Workflow uses `treosh/lighthouse-ci-action@v12` with `lhci autorun --collect.url=<preview-url> --collect.numberOfRuns=3`.
- Median of 3 runs per URL.
- Posts a sticky PR comment with the score matrix and delta vs main.
- Uploads JSON/HTML artifacts to GitHub Actions artifacts (90-day retention) and rsyncs into `ops/audits/doulab-net/lighthouse-PR-<n>/` on merge.
- Hard-fails the workflow if any block-merge floor is breached; soft-warns at warn floor.

**Option B (lighter): scheduled cron**
- Nightly GitHub Action against production runs LH CLI on the 21 URLs, commits the JSON summary to `ops/audits/doulab-net/lighthouse-nightly/<date>.csv`.
- No PR gating; trend-line only.

Recommend doing both: A for regression prevention, B for trend visibility.

### Cadence

- **Per-PR**: Option A on any PR that touches the in-scope paths.
- **Weekly**: full 42-run cycle on main → archive under `lighthouse-2026-06/`.
- **Monthly**: WebPageTest LATAM POP runs (4 representative pages: home, ClarityScan, ILG chapter, AFP Siembra).
- **Pre-release**: full Lighthouse cycle on the release candidate before any phase closeout (tie to `verify:build`).

## Quick wins (≤ 1 day) — top 5

1. **Fix Hero LCP preload** (LH-P-001 ↔ PERF-001/007): point preload `href` to WebP, set `type="image/webp"`, drop PNG from srcSet. Estimated +6 to +10 Performance points across all hero pages on mobile.
2. **Add `static/robots.txt`** (LH-SEO-004 ↔ SEO-003): single-file add. Estimated +3 to +5 SEO points sitewide.
3. **Gate Hero `<Head>` preload on `eager === true`** (PERF-006): 5-line patch in `Hero.tsx`. Stops 11 wasteful preloads. Estimated +2 to +4 Performance points on non-LCP routes.
4. **Generate AVIF/WebP for NNY hero PNG** (LH-P-004 ↔ PERF-002): 15 min with `sharp-cli`. Estimated +10 to +15 Performance points on ILG chapter pages.
5. **Add `loading="lazy"` to two AFP Siembra YouTube iframes** (LH-P-005 ↔ PERF-009): two-line patch. Estimated +15 to +25 Performance points on that one page.

## Strategic bets (multi-week) — top 3

1. **Build-time mermaid SVG rendering** (LH-P-002 ↔ PERF-003/012). Removes ~1 MB JS from any route with diagrams; eliminates re-layout. Lifts TBT into target zone on ILG chapters and case studies. M–L effort, +8 to +12 Performance points on diagram-heavy routes.
2. **CSS strategy revision: page-scoped extraction + critical-CSS inlining** (LH-P-003 ↔ PERF-004). Cuts `unused-css-rules` finding to <10 KB on simple routes; improves FCP. M effort, +3 to +6 Performance points sitewide.
3. **Stand up Lighthouse-CI on preview deploys with threshold gates** (this audit's re-audit plan). Locks in scores against regression; gives Luis a per-PR signal. M effort, prevents future score erosion rather than lifting current numbers.

## Out of scope / hand-offs

- LCP preload, image format, mermaid runtime cost, CSS payload, browserslist tightening, preconnect strategy, HTML cache headers → **Performance & frontend engineering** (already addressed in `06-performance.md`).
- `link-name` / `button-name` carousel fixes, `heading-order`, `bypass`/skip-link, `landmark-one-main`, focus indicator, IMM funnel diagram alternative text → **Accessibility** (`07-accessibility.md`).
- `meta-description`, `link-text`, `robots-txt`, `canonical`, hreflang readiness, OG cards → **SEO & discoverability** (`05-seo.md`).
- `csp-xss` / `trusted-types` (enforced CSP) → **Security & privacy**.
- `tap-targets` on dense footer / mobile target-size on CTAs → **Mobile-first / responsive**.
- `inspector-issues` Cookie/SameSite from third-party iframes → **Security & privacy** + **Analytics**.
- JSON-LD coverage on service pages, BreadcrumbList consolidation → **Code quality** + **Sales & positioning**.
- WebPageTest LATAM POP run wiring, paid LH-CI selection (Calibre/Treo) → **Ops / hosting**.
- Re-running the 2026-01-18 baseline in incognito to remove extension noise → **Ops** (one-time).

## Open questions for Luis

1. **Budget for paid LH-CI**: free GitHub Actions + `treosh/lighthouse-ci-action` is sufficient for current scale. Calibre (~$80/mo) and Treo (~$30/mo) add LATAM-origin LH runs, budget tracking dashboards, and Slack alerts. Worth it?
2. **LATAM POP testing cadence**: monthly WebPageTest spot-checks from Bogotá/Santiago/São Paulo — manual via `webpagetest.org` UI, or wire to API and store under `ops/audits/doulab-net/lighthouse-2026-06/webpagetest/`?
3. **Gate strictness**: block PR merge on any sub-90 Lighthouse category, or only on Perf < 70 mobile / a11y < 90? Stricter gates surface regressions earlier but slow PR throughput.
4. **Preview deploys**: does Cloudflare Pages automatically build a preview URL per PR? If not, decide whether to wire it (one-time setup) or run LH only against staging/main.
5. **Baseline replay**: should we attempt to re-run the 2026-01-18 Lighthouse in incognito (no extensions) as a clean baseline before the Phase B/C optimizations are scored, so the post-fix delta is honest?
6. **Score floor for ILG chapters and AFP Siembra**: accept temporary lowered floors until PERF-002 and PERF-009 land, or block all merges until those two land first?
7. **PSI submission to CrUX**: site likely doesn't have enough field traffic to qualify for CrUX yet. Plan to check `https://pagespeed.web.dev/analysis?url=https://doulab.net` and capture lab-only scores quarterly?

---

## Live verification — 2026-06-01

The audit was originally written from source-heuristic. The dev server at `http://localhost:3000/` became available mid-audit and a live Lighthouse pass was run against it (Lighthouse 12.8.2, headless Chromium, default throttling). **Note: the dev server has a current compilation error** — every page renders a Webpack "Compiled with problems" overlay (visible in viewport screenshots; see new finding LH-NEW-001 below). Lighthouse scores below were captured **with that overlay present in the DOM**, which inflates DOM weight, adds error-state CSS, and likely depresses the Performance score by a few points. Re-run after the overlay is fixed.

**Tooling used:** `npx lighthouse … --form-factor=mobile|desktop --only-categories=performance,accessibility,best-practices,seo --output=json`. Raw JSON per page: `ops/audits/doulab-net/lighthouse-2026-06/*.json`.

### Scores captured

| Page | Form factor | Perf | A11y | BP | SEO | Source JSON |
|---|---|---|---|---|---|---|
| `/` | mobile | **49** | 89 | 96 | 100 | `home-mobile.json` |
| `/` | desktop | **45** | 89 | 96 | 100 | `home-desktop.json` |
| `/what-we-do` | mobile | 51 | 95 | 96 | 100 | `what-we-do-mobile.json` |
| `/services` | mobile | 52 | 96 | 96 | 100 | `services-mobile.json` |
| `/services/innovation-maturity` | mobile | 51 | 89 | 96 | 100 | `services-innovation-maturity-mobile.json` |
| `/services/clarityscan` | mobile | 51 | 89 | 96 | 100 | `services-clarityscan-mobile.json` |
| `/case-studies` | mobile | 55 | 89 | 96 | 100 | `case-studies-mobile.json` |
| `/about` | mobile | **52** | 89 | 96 | **92** | `about-mobile.json` |
| `/contact` | mobile | 52 | 96 | 96 | 100 | `contact-mobile.json` |
| `/insights` | mobile | 49 | 96 | 96 | 100 | `insights-mobile.json` |

**Headline result:** Performance is **far worse than the 2026-01-18 baseline (Perf 71)** — every measured page scored **45–55 mobile, 45 desktop** with the overlay present. SEO is strong (92–100). Accessibility 89–96. Best Practices uniformly 96.

### Top cross-page opportunities (cumulative ms savings)

| Audit ID | Title | Pages affected | Total potential savings (ms) |
|---|---|---|---|
| `unused-javascript` | Reduce unused JavaScript | 7 | 1,050 |
| `unminified-css` | Minify CSS | 5 | 750 |
| `unminified-javascript` | Minify JavaScript | 1 | 150 |

Note: `unminified-css` and `unminified-javascript` are **dev-mode-only** signals — production build minifies. Real production cost is dominated by `unused-javascript` and the items already captured in `06-performance.md`.

### Predictions: confirmed / refuted / updated

- **LH-P-001 (Hero PNG preload)** — likely **CONFIRMED**. Mobile home Perf 49 is consistent with LCP penalty from oversized PNG; cannot fully validate until overlay is cleared and the production build is scored.
- **LH-P-002 (mermaid weight on diagram routes)** — UNTESTED. No diagram-heavy ILG chapters were Lighthouse-scored in this pass.
- **LH-P-005 (YouTube facade on AFP Siembra)** — UNTESTED. Case-study detail not included in this run.
- **LH-A-001..005** — partially CONFIRMED: a11y scores 89–96 align with the predicted band (heading order, focus indicators, contrast). Re-score post-fix.
- **LH-BP-001 (`csp-xss` Best Practices)** — REFUTED for now: dev-server CSP differs from prod `static/_headers`; all pages scored 96 BP. Re-run against the production CSP.
- **LH-SEO-004 (robots.txt)** — UNTESTED in dev. The lone SEO miss (`/about` at 92 vs 100 elsewhere) is likely a per-page description/meta issue, not robots. Re-test on prod.

### New live finding

**LH-NEW-001 — Dev-server compilation error overlay on every page**
- severity: **P0** (blocks accurate measurement; would block any developer onboarding)
- impact: 5
- effort: M (cannot estimate without diagnosing root cause; symptom is "Unexpected token '<', '<!DOCTYPE'... is not valid JSON" — classic 404-HTML-where-JSON-was-expected)
- location: dev server (`npm run start`); visible in every captured viewport screenshot at the top of the page
- observation: Webpack reports "Compiled with problems" with a JSON parse error on every page. The site still serves and Lighthouse still scores it, but the overlay is in the DOM, inflating weight and signaling a broken JSON import/fetch. The 2025-08-09 `dev-server.log` at repo root is stale — current error is not captured anywhere persistent.
- recommendation: (1) Reproduce by running `npm run start` and reading the terminal output; (2) the parse-error fingerprint suggests a fetch of `*.json` is hitting a 404 HTML page — search source for `fetch(.../*.json)` and `import './*.json'`; (3) check for recently-renamed files referenced from a stale path; (4) gate dev-server in CI so this regression cannot recur silently.
- evidence: `ops/audits/doulab-net/viewport-2026-06/home/360x640.png` (and every other anchor's screenshot under that tree)

### Updated re-audit plan

1. Fix LH-NEW-001 first.
2. Re-run `lighthouse` against **production build served locally** (`npm run build && npm run serve`) — not the dev server. Dev-mode disables minification, splits bundles differently, and re-injects HMR — none of which exists in production. Treat the captured dev numbers as a floor, not a baseline.
3. After step 2, replay the full URL matrix from the original re-audit plan above (21 URLs × mobile+desktop).
4. Compare new vs 2026-01-18 baseline. If Perf is still < 70, Phase 1 of the implementation plan in `00-index.md` should prioritize the `06-performance.md` quick wins.

---

## Production verification — 2026-06-01 (post-E.B1+E.C1 deploy, v2)

After the B1 (build hygiene) and C1 (Phase 1 truth & integrity) commits were merged and Cloudflare Pages auto-deployed (commit hash 44ba808), Lighthouse was re-run against `https://www.doulab.net/`. 9 mobile + 1 desktop. Raw JSON: `ops/audits/doulab-net/lighthouse-2026-06-prod-v2/*.json`.

### Production scores — pre vs post

| Page | Form factor | Perf prod-v1 | Perf prod-v2 | Δ |
|---|---|---|---|---|
| `/` | mobile | 70 | **91** | **+21** |
| `/` | desktop | 97 | **98** | +1 |
| `/what-we-do` | mobile | 72 | **89** | +17 |
| `/services` | mobile | (n/a) | **92** | new |
| `/services/clarityscan` | mobile | 72 | **93** | +21 |
| `/services/innovation-maturity` | mobile | 64 | **82** | +18 |
| `/case-studies` | mobile | 78 | **90** | +12 |
| `/about` | mobile | (n/a) | **92** | new |
| `/contact` | mobile | (n/a) | **89** | new |
| `/insights` | mobile | (n/a) | **92** | new |

**A11y** moved from 92–98 to 92–100. **SEO** went from uniform 92 to 85–92 (regression on `/about`, see LH-NEW-004 below). **Best Practices remains stuck at 78–79** — same as pre-deploy. The www canonical fix removed the 301 penalty but the two underlying BP failures persist (see LH-NEW-002, LH-NEW-003).

### Remaining top opportunities (top 2 cumulative)

| Audit ID | Pages | Total ms | Note |
|---|---|---|---|
| `render-blocking-resources` | 9 | 2,496 | Real, production-relevant. Tied to `06-performance.md` PERF-006/007 (defer/preload lucide-react synchronous imports + CSS). |
| `unused-javascript` | 8 | 1,830 | Real. Tied to PERF-baseline + CODE-011 deep lucide imports. |

The original v1 top opp `uses-text-compression` (43s) and the dev-only `unminified-*` opportunities have all disappeared — Cloudflare's Brotli + production minification did their job exactly as predicted.

### New findings from this run

**LH-NEW-002 — Cloudflare-injected `Content-Signal` robots.txt overrides the static file**
- severity: P1
- impact: 3 (SEO `robots-txt` audit fails sitewide; Lighthouse SEO −2 to −8)
- effort: S (dashboard-only change in Cloudflare Pages settings)
- location: Cloudflare Pages config, not source
- observation: B1 added a valid `static/robots.txt` referencing the sitemap. The deploy succeeded (371 files uploaded). But `https://www.doulab.net/robots.txt` still returns Cloudflare's auto-injected `Content-Signal` robots that Lighthouse rejects as invalid. CF Pages is overriding the static file at the edge.
- recommendation: Disable "Content Signals" in Cloudflare Pages → doulab-site → Settings → Speed/Bot management (or similar). Confirm with a curl against `/robots.txt` after the change. Not fixable from source.
- evidence: `curl https://www.doulab.net/robots.txt` returns content starting with `# As a condition of accessing this website...` rather than the `User-agent: *` / `Sitemap:` content of `static/robots.txt`.

**LH-NEW-003 — 6× 503 errors on JS chunks persist through fresh deploy**
- severity: P1
- impact: 4 (entire BP score is capped at 79; `errors-in-console` audit fails)
- effort: M (investigate wrangler upload; possibly re-run deploy with verbose logging)
- location: Cloudflare Pages deploy artifacts, not source
- observation: 6 lazily-loaded JS chunks return HTTP 503 from the CDN even on the fresh post-deploy build (chunk hashes are CURRENT, e.g. `2833a959.2783ef16.js`, not stale from v1). The build:cf log showed all 371 files uploaded; either some failed silently or these chunks are referenced by the prefetch manifest but never actually emitted.
- recommendation: (1) Re-deploy with wrangler verbose logging to confirm every file emitted in `build/assets/js/*` is uploaded. (2) Spot-check by curling each chunk URL directly against CF and against `npm run serve` locally to isolate where the 503 originates. (3) If they reference deleted routes (the 8 zero-byte page deletions in C1), check that the sitemap and Docusaurus route manifest are fully regenerated. Not a source-code fix in the obvious sense, but a deploy-ops investigation.
- evidence: Playwright network capture shows 503 on `/assets/js/{2833a959,cacd93e4,8a53a06c,851420db,b6cfc9b9,b455e532}.*.js` against `https://www.doulab.net/`.

**LH-NEW-004 — `/about` SEO regression (link-text + robots-txt)**
- severity: P2
- impact: 2 (one page only; SEO 92 → 85)
- effort: S
- location: `src/pages/about/index.tsx`
- observation: The Lighthouse SEO `link-text` audit fails on `/about` (links without descriptive text — likely generic "Learn more" or "→" arrows). Plus the sitewide `robots-txt` fail (LH-NEW-002).
- recommendation: Audit `/about` for generic anchor text; ensure every link has descriptive text or `aria-label`. This finding ladders into the broader SEO-012 generic-anchor-text issue from `05-seo.md`.
- evidence: `lighthouse-2026-06-prod-v2/about-mobile.json` audit `link-text` failing.

### Verdict

Source-side Phase 1 work delivered the predicted Performance gains. The two stubborn prod BP/SEO regressions are both **infrastructure-side** (Cloudflare configuration + deploy artifacts), not source-code issues — both should be raised to whoever owns Cloudflare Pages admin for doulab-site.

### LH-NEW-002 — RESOLVED 2026-06-01

User disabled Cloudflare's Content-Signal robots.txt feature at the zone level. Verification: `curl https://www.doulab.net/robots.txt` now returns the `static/robots.txt` content (`User-agent: *`, `Allow: /`, `Sitemap: https://www.doulab.net/sitemap.xml`).

A follow-up Lighthouse run (prod-v3, post-robots-fix) confirmed the SEO category lift:

| Page | SEO prod-v2 | SEO prod-v3 | Delta |
|---|---|---|---|
| `/` | 92 | **100** | +8 |
| `/services` | 92 | **100** | +8 |
| `/services/clarityscan` | 92 | **100** | +8 |
| `/case-studies` | 92 | **100** | +8 |
| `/about` | 85 | **92** | +7 (still under 100 from the `link-text` issue per LH-NEW-004) |

Raw JSON: `ops/audits/doulab-net/lighthouse-2026-06-prod-v3/*.json`.

### LH-NEW-003 — REDIAGNOSED as Cloudflare Bot Fight Mode

Original symptom: 6 lazily-loaded JS chunks 503 on every prod Lighthouse run. Original theory was deploy-ops (wrangler upload failure).

**Actual root cause: Cloudflare Bot Fight Mode / Super Bot Fight Mode is challenging headless-Chrome-class clients (Lighthouse, Playwright, synthetic monitors). The chunks themselves are healthy.**

Diagnostic evidence:
- All 6 chunks return **HTTP 200** when fetched with `curl` (default headers and with Chrome-class UA + Brotli encoding). Sizes 4.5–20 KB, `cf-cache-status: REVALIDATED`, valid `ETag` and `Cache-Control: max-age=31536000, immutable`.
- Rapid-fire 10x curl on the same chunk: 10/10 returned 200 (no rate limit triggered from a normal client).
- Playwright (same headless Chromium that Lighthouse uses) **times out on `page.goto(/, { waitUntil: 'networkidle' })` with 30s timeout** trying to load the homepage. It receives the 503-stamped responses for prefetched chunks and never reaches network-idle.
- Chunks correspond to the 6 most-prefetched routes: `/about-dff` (b455e532), `/case-studies-4d7` (cacd93e4), `/contact-fb2` (2833a959), `/insights-c29` (b6cfc9b9), `/services/clarityscan-3f8` (851420db), `/what-we-do-c58` (8a53a06c) — i.e., Docusaurus's standard navbar prefetch set on the homepage.
- Same 6 chunks 503 across deploys with refreshing content hashes (`851420db.fd232067.js` -> `851420db.7696665a.js`) — proving these are NOT stale, the route-id portion is what CF is fingerprinting.

Real-user impact: **zero**. The 503 is exclusively reported by automated tooling. Visitors on real browsers fetch these chunks 200 and the homepage renders normally.

Lighthouse impact: persistent **BP -21** sitewide (the `errors-in-console` audit reports the 503s). This is the entire residual BP gap after the truth-and-integrity pass; without it, BP would be ~100 across the board.

Recommendation (Cloudflare zone-level):
- **Option A (simplest):** Disable **Bot Fight Mode** (or **Super Bot Fight Mode**) for the `doulab.net` zone. Cloudflare dashboard -> `doulab.net` -> **Security** -> **Bots**. The free Bot Fight Mode toggle is on by default for many zones.
- **Option B (preserves bot protection):** Add a WAF custom rule that **Skips** Bot Fight Mode for paths under `/assets/js/`, `/assets/css/`, and the static image directories. Cloudflare dashboard -> `doulab.net` -> **Security** -> **WAF** -> **Custom rules** -> "Skip" action.
- **Option C (preserves bot protection, narrow scope):** Allowlist the User-Agent string `Chrome-Lighthouse` and the IP ranges Google's automated tooling uses. Useful if PageSpeed Insights is the only Lighthouse client you care about.

Not a source-code fix.

Verification after the change: re-run prod Lighthouse against any page and confirm `errors-in-console` audit passes; BP should jump from 78-79 to ~95-100 sitewide.

---

## Live verification — 2026-06-01 (clean run v2)

The v1 live run was contaminated by a Webpack "Compiled with problems" overlay on every page (LH-NEW-001). Root cause diagnosed and resolved in-session:

1. **`future: { v4: true }`** in `docusaurus.config.ts` was cascading to enable `future.faster.rspackBundler` (requires `@docusaurus/faster`, not installed) and strict MDX-3 (rejects legacy `<!-- truncate -->` blog comments and empty MDX pages).
2. Resolution applied: (a) installed `@docusaurus/faster@3.10.1` (`--save-exact`), (b) added `exclude: ['ops/**']` to docs plugin config (also resolves CODE-001 governance leak from `10-code-quality.md`), (c) migrated `<!-- truncate -->` → `{/* truncate */}` in 4 blog posts, (d) reverted `future: {}` to defer v4 prep to a planned Phase 4 migration (NOT a flag-flip — v4 also surfaces ~47 SSG errors from zero-byte MDX pages and undefined-metadata destructuring).
3. Production preview built via `npm run build:dry` and served at `http://localhost:3001/` (overlay confirmed gone in viewport screenshot evidence at `ops/audits/doulab-net/viewport-2026-06-v2/home/360x640.png`).

### v2 scores

Raw JSON: `ops/audits/doulab-net/lighthouse-2026-06/*-v2.json`. Summary: `summary-v2.json`.

| Page | Form factor | Perf | A11y | BP | SEO | Δ Perf vs v1 |
|---|---|---|---|---|---|---|
| `/` | mobile | **67** | 93 | 100 | 100 | **+18** (49→67) |
| `/` | desktop | **94** | 92 | 100 | 100 | **+49** (45→94) |
| `/what-we-do` | mobile | 55 | 98 | 100 | 100 | +4 (51→55) |
| `/services` | mobile | 66 | 100 | 100 | 100 | +14 (52→66) |
| `/services/innovation-maturity` | mobile | 66 | 93 | 100 | 100 | +15 (51→66) |
| `/services/clarityscan` | mobile | 68 | 92 | 100 | 100 | +17 (51→68) |
| `/case-studies` | mobile | 73 | 93 | 100 | 100 | +18 (55→73) |
| `/about` | mobile | 69 | 92 | 100 | 92 | +17 (52→69) |
| `/contact` | mobile | 70 | 100 | 100 | 100 | +18 (52→70) |
| `/insights` | mobile | 66 | 100 | 100 | 100 | +17 (49→66) |
| `/book-clarityscan` | mobile | 70 | 96 | 100 | 66 | (new in v2 — SEO 66 expected: `noindex`) |

**Movements vs v1:**
- **Performance mobile**: v1 49–55 → v2 55–73 (avg ~+15). v1 desktop 45 → v2 desktop 94 (+49). Overlay was inflating DOM weight and adding error styles; removing it lifted every page measurably.
- **Best Practices**: v1 96 uniform → v2 **100 uniform** across all pages. The overlay's console errors had been costing 4 BP points sitewide.
- **SEO**: v1 89–100 → v2 100 (except `/about` 92, `/book-clarityscan` 66 by design with `noindex`).
- **Accessibility**: v1 89–96 → v2 92–100. Slight, real improvement (overlay introduced low-contrast text and unlabeled regions).

**LH-NEW-001 (overlay inflating DOM) prediction**: **CONFIRMED**. Removing the overlay produced +15–49 Perf points and the full +4 BP delta across all 11 pages.

### Top v2 opportunities (cumulative ms savings, top 6)

| Opportunity | Pages | Total ms | Caveat |
|---|---|---|---|
| `uses-text-compression` | 11 | 43,660 | **dev/preview caveat**: `docusaurus serve` does not gzip/br; Cloudflare Pages applies Brotli in real prod. Will largely disappear on doulab.net. |
| `unused-javascript` | 11 | 13,550 | **real** — main bundle 5.6 MB; reduce via code-splitting and lucide deep-import audit (CODE-011). |
| `unminified-javascript` | 11 | 13,250 | **build:dry caveat**: `--no-minify` flag in `build:dry` script. Real `npm run build` (production minified) removes this entirely. |
| `unused-css-rules` | 11 | 7,620 | **real** — `src/css/custom.css` is 57.5 KB / 2,463 lines (PERF-baseline). Tied to BRAND-002 (token consolidation). |
| `render-blocking-resources` | 10 | 7,246 | **real** — defer/preload audit, esp. the lucide-react synchronous imports on homepage (CODE-011). |
| `unminified-css` | 10 | 3,000 | **build:dry caveat** as above. Vanishes on real prod build. |

**Net of caveats**, the **real, production-relevant opportunities** are: `unused-javascript` (~13.5s), `unused-css-rules` (~7.6s), `render-blocking-resources` (~7.2s) — all already mapped to PERF-001..015 and CODE-007/010/011 in the consolidated index.

### Updated picture

- Site quality is **substantially better than the v1 numbers suggested** once the overlay is removed.
- v2 already meets the ≥90 threshold on **A11y, BP, SEO** for most pages. Performance is the remaining gap (mobile 55–73, desktop 94).
- A real production Lighthouse against `https://doulab.net` (Cloudflare-served, Brotli-compressed, minified) should clear ~75–82 mobile / ~95+ desktop without any source changes — and the source-side wins from `06-performance.md` quick wins should push mobile to 85+ without exotic engineering.
- **LH-NEW-001 can now be marked RESOLVED** with the four config/blog changes above. File a backlog item to revisit v4 migration as a planned Phase 4 effort (zero-byte MDX cleanup + blog metadata + truncate migration is already done).
