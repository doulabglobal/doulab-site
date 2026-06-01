# Performance Audit — doulab.net — 2026-06-01

## Scope

Heuristic, source-only Performance and Frontend Engineering audit of the Doulab marketing site (Docusaurus 3.10 / React 18, Cloudflare Pages, mermaid 11.11, lucide-react). Focus: Core Web Vitals risks visible from source — bundle weight, image strategy, font loading, render-blocking, route code-splitting, CSS payload, prefetch/preload, third-party scripts, and mermaid cost.

No builds, no Lighthouse run. Reference baseline:
- `docs/ops/performance-baseline.md` (Lighthouse 2026-01-15 — Performance 71, TBT ~1,150 ms, CLS 0; affected by extensions)
- `ops/audits/doulab-net/lighthouse-2026-01-19.pdf` (D0 intake — render-blocking, unused JS, missing image dims flagged)
- Prior performance phases B5-P1/P2/P3, B7-P1/P2 (image decoding, lazy-load discipline)

Out of scope: actual runtime metrics, network waterfalls, CPU profiling, Cloudflare edge cache validation.

## Method

1. Read package.json (deps + scripts), docusaurus.config.ts (preset, themes, mermaid block), CSP/cache headers (`static/_headers`).
2. Inventory `static/img/` (file count, per-extension totals, top 30 by size).
3. Grep for image loading attributes (`loading`, `fetchPriority`, `decoding`), preload usage, third-party scripts/iframes, font references.
4. Inspect Hero pattern (`src/components/Hero.tsx`), homepage (`src/pages/index.tsx`) and the heaviest icon-importing pages.
5. Tally lucide-react imports (already deep-imported per-icon, good).
6. Audit mermaid surface (count of fenced blocks across docs/blog).
7. Sample CSS payload (`src/css/custom.css`).

## Findings (ranked)

### PERF-001 — Oversized PNG originals still shipped alongside AVIF/WebP

- Severity: high · Impact: 5 · Effort: S
- Location: `static/img/*.png` (41 PNG files totalling **~8.16 MB** vs **~437 KB** AVIF and **~561 KB** WebP across the same set)
- Observation: Total `static/img/` is ~11 MB with PNG accounting for ~74% of bytes. Many hero PNGs are 360 KB–580 KB while their AVIF/WebP siblings are 14–60 KB (e.g., `people-collage.png` 360,290 B vs `.webp` 16,578 B vs `.avif` 14,477 B; `work-with-us-hero.png` 580,761 B; `clarityscan-hero.png` 524,986 B; `workshops-hero.png` 507,617 B). The Hero `<picture>` correctly serves AVIF→WebP→PNG, so PNG is only the legacy fallback, but PNG is still the LCP preload `href` (`src/components/Hero.tsx:93`, `src/pages/index.tsx:696`) and `imageSrcSet` lists all three at `1x` (browsers may pick PNG when JPEG/WebP/AVIF parsing is ambiguous on some legacy UAs).
- Recommendation: (a) Replace LCP preload `href` to point at the WebP (universally supported in target browserslist) and drop PNG entries from `imageSrcSet`. (b) Re-encode PNG fallbacks as JPEG/optimized PNG via the existing `sharp-cli` devDep; current PNG sizes suggest no `pngquant`/oxipng pass was applied. (c) Consider removing PNG fallbacks entirely — browserslist `>0.5%, not dead, not op_mini all` has full WebP support; AVIF gap is the only reason to keep a fallback, and WebP suffices.
- Evidence: `find static/img -name "*.png" -printf '%s\n' | awk '{s+=$1}END{print s}'` = 8,158,505; AVIF total 436,655; WebP 561,316.

### PERF-002 — 2.5 MB hero PNG in Innovation Lab Guide with no AVIF/WebP variant

- Severity: high · Impact: 4 · Effort: S
- Location: `static/img/research/innovation-lab-guide/hero-nyy.png` (**2,492,242 B**)
- Observation: Single largest asset in the repo; no AVIF/WebP siblings detected by glob. If referenced on the guide landing (NNY hero), this is a LCP killer on that route and a sitemap-discoverable page.
- Recommendation: Generate AVIF + WebP variants via `sharp-cli`, target ≤80 KB WebP / ≤60 KB AVIF, and wrap in `<picture>`. Confirm the landing references the optimized variants.

### PERF-003 — Mermaid library shipped to every route, including non-diagram pages

- Severity: high · Impact: 4 · Effort: M
- Location: `docusaurus.config.ts:23,26` (`markdown.mermaid: true`, theme included); `package.json` `mermaid 11.11.0`
- Observation: Mermaid 11 minified is ~1 MB+ (parser + d3 + dagre subset). Docusaurus theme-mermaid lazy-loads mermaid on routes that render a fenced block, but the theme runtime adapter is part of the client bundle and the lazy chunk lands on first interactive diagram. Mermaid usage is concentrated in 13 markdown sources (`grep '```mermaid'` count = 36 fences across blog + ILG chapters + case studies). Marketing pages (home, services, contact) have no diagrams — they should not pay any mermaid cost.
- Recommendation: Verify (a) the mermaid chunk is route-split (Docusaurus theme-mermaid does this by default; confirm by inspecting `build/assets/js/*mermaid*` — should not appear in home/services entrypoints). (b) Static-render mermaid at build time using `@docusaurus/theme-mermaid` SSR pre-rendering or via `mdx-mermaid` SVG generation, eliminating runtime cost. (c) For case studies that have only one or two diagrams each, consider switching to pre-rendered SVG checked into `static/diagrams/` to remove mermaid from those chunks entirely.

### PERF-004 — CSS payload concentrated in a single 57 KB stylesheet

- Severity: medium · Impact: 3 · Effort: M
- Location: `src/css/custom.css` (57,471 B, 2,463 lines)
- Observation: Per D16 the team consolidated all CSS into `custom.css` (no more `.module.css`). Pro: predictable. Con: this single global stylesheet ships on every route; no critical-CSS extraction; many selectors are page-scoped (e.g., `.immFunnel__*`, case-study specific classes) but loaded everywhere. Render-blocking on cold cache; Lighthouse "unused JS/CSS" warning in D0 likely reflects this.
- Recommendation: (a) Audit for genuinely page-scoped rules and either inline them in their TSX pages (style tag in `<Head>` via Docusaurus) or split into `pageStyle.css` files loaded conditionally. (b) Run a coverage report against the home route to estimate unused CSS percent. (c) Consider re-introducing CSS-modules for component-local styles while keeping tokens/utilities in `custom.css` — D16 over-consolidated.

### PERF-005 — lucide-react: subset of fixes already correct, but home imports 15 icons synchronously

- Severity: medium · Impact: 3 · Effort: S
- Location: `src/pages/index.tsx:13–27` (15 icons), `src/pages/services/clarityscan.tsx` (6+ icons)
- Observation: Good practice: the codebase uses deep ESM imports (`lucide-react/dist/esm/icons/<name>`) — this avoids barrel re-export bloat (the original problem with lucide-react). 64 occurrences across 20 files. Each icon module is ~1–2 KB minified. The homepage imports 15 icons; some (`ChevronLeft/Right`) are only used in the "Problem reel" carousel below the fold.
- Recommendation: For carousel/below-fold icons (`ChevronLeft`, `ChevronRight`, `Eye`, `EyeOff`, `Frown`, `AlertOctagon`, `UserX`, `CircleSlash`, `FileWarning`, `AlertTriangle`), defer via `React.lazy` of the ProblemSection or import-on-mount. Keeps the home initial chunk leaner. Low effort — small absolute win (estimated 10–20 KB gzipped).

### PERF-006 — Every page issues an `<img>` LCP preload, even when image is below the fold

- Severity: medium · Impact: 3 · Effort: S
- Location: `src/components/Hero.tsx:88–98` always emits `<link rel="preload" as="image">` whenever `showImage`; `eager` prop only affects `loading`/`fetchPriority` on the `<img>` itself, not the preload tag
- Observation: Hero preloads run on ~12 routes (every page that uses `<Hero>`). When `eager={false}` (default for non-LCP pages — but homepage uses `eager`), the preload still fires, forcing the browser to fetch a hero image at high priority that is then lazy on the actual `<img>`. Conflicts with `loading="lazy"` semantics and wastes early-network budget.
- Recommendation: Gate the `<Head>` preload block on `eager === true`. Only the LCP hero (one per route) should be preloaded; others should rely on natural discovery + lazy loading. Already enforced for the homepage explicitly via `src/pages/index.tsx:693` — collapse to a single preload site-wide.

### PERF-007 — Preload `imageSrcSet` includes PNG at 1x alongside AVIF/WebP

- Severity: medium · Impact: 3 · Effort: S
- Location: `src/components/Hero.tsx:94`, `src/pages/index.tsx:697`
- Observation: `imageSrcSet={`${avif} 1x, ${webp} 1x, ${jpg} 1x`}` — three formats at the same DPR is wrong. The preload + `<picture>` decision is by `type`, not srcSet density. Listing PNG in the preload srcSet can cause browsers without AVIF that also lack WebP to pull PNG twice or pick PNG. Also conflicts with the `href={jpg}` fallback strategy.
- Recommendation: Replace with `imageSrcSet` using only the preferred format (WebP) with proper densities, and set `type="image/webp"` on the preload link (Chrome 73+). Or drop `imageSrcSet` and rely on `href` pointing to WebP.

### PERF-008 — Inline JSON-LD blocks duplicated across case-study and service pages

- Severity: low · Impact: 2 · Effort: S
- Location: `src/pages/about/index.tsx:105–107`, `src/pages/case-studies/*.tsx`, `src/pages/services/clarityscan.tsx`, etc. (15+ JSON-LD scripts)
- Observation: Each case study emits 2–4 `<script type="application/ld+json">` blocks (org + breadcrumb + case + sometimes video). These run inline and inflate HTML payload (estimated 2–6 KB per page added to first-byte HTML). Not render-blocking but contributes to TBT via parse time.
- Recommendation: Extract a `seoSchema` helper that emits one combined `@graph` JSON-LD per page (Google supports multi-entity graphs); reduces 3-4 script tags to 1 and shrinks HTML.

### PERF-009 — Two YouTube iframes embedded directly on AFP Siembra case study

- Severity: medium · Impact: 3 · Effort: S
- Location: `src/pages/case-studies/afp-siembra.tsx:262, 276` (two `youtube-nocookie.com/embed/...` iframes)
- Observation: Even `youtube-nocookie` is heavy on first load (~500 KB of JS, multiple subresources, ~1s TBT impact on slow networks). No `loading="lazy"` confirmed on the iframe attributes — Grep saw the URLs but not the attribute set. CSP already allows `frame-src https://www.youtube-nocookie.com`.
- Recommendation: (a) Add `loading="lazy"` to both iframes. (b) Better: facade pattern (poster image + play button → swap to iframe on click). Cuts AFP Siembra case-study weight by ~80%.

### PERF-010 — `gh-pages` retained as runtime dependency though deploy is Cloudflare Pages

- Severity: low · Impact: 1 · Effort: S
- Location: `package.json:41` (`"gh-pages": "^6.3.0"` in `dependencies`)
- Observation: `deps-prune-proof.md` flagged this as kept "to avoid breaking `docusaurus deploy`," but the canonical pipeline is Cloudflare Pages (`build:cf`). `gh-pages` is a CLI; it should be `devDependencies` at most, and ideally removed since site is "production-only on Cloudflare" per LOG-2025-08-27-04. It does not ship in the client bundle but inflates `node_modules` and CI install time.
- Recommendation: Move to `devDependencies` or remove. If removed, also delete the `deploy` script.

### PERF-011 — Browserslist production target is too permissive for modern image/JS features

- Severity: low · Impact: 2 · Effort: S
- Location: `package.json:74–78` (`">0.5%", "not dead", "not op_mini all"`)
- Observation: This target retains very old Safari/Edge versions, forcing Babel/SWC to emit more polyfills and prevents using untransformed modern syntax (optional chaining is fine; top-level await, native ES modules entries are not). Docusaurus 3 baseline already requires modern browsers; the broader target costs ~15–30 KB of polyfills in `vendors~main.*.js` with no business audience benefit.
- Recommendation: Tighten to e.g. `["last 2 versions", "not dead", "not op_mini all", "supports es6-module"]`. Validate with `npx browserslist` before/after; expect smaller polyfill chunk.

### PERF-012 — Mermaid `themeVariables` configured with site-wide font + theme overrides but no SSR pre-render

- Severity: medium · Impact: 3 · Effort: M
- Location: `docusaurus.config.ts:60–80`
- Observation: Rich mermaid theme config (fonts, colors, flowchart/sequence options) is fine, but means runtime mermaid must boot, apply theme, then render. Each diagram triggers a layout pass — visible on case studies and ILG chapters where 1–5 diagrams render. Compounds D4 (dark/light parity).
- Recommendation: Either accept runtime cost (current) or migrate to build-time SVG rendering. If kept runtime, ensure mermaid theme CSS variables are set BEFORE first paint via inline style in `<Head>` to avoid FOUC re-layout when mermaid swaps in.

### PERF-013 — No HTTP/2 preconnect or DNS-prefetch for external CTA hosts

- Severity: low · Impact: 2 · Effort: S
- Location: Site-wide; CTAs target `booking.doulab.net`, `buy.stripe.com` (per backlog C16), `www.youtube-nocookie.com`
- Observation: First click on a CTA pays DNS + TLS handshake cost. No `<link rel="preconnect">` to `booking.doulab.net` or `buy.stripe.com` in any source file (grep returned zero matches except the Hero self-preload).
- Recommendation: Add `<link rel="preconnect" href="https://booking.doulab.net" crossorigin>` and similar for Stripe on the homepage and service pages where conversion intent is highest. ~100–300 ms TTFB win on first conversion click.

### PERF-014 — Cache headers exist for `/assets/*` and `/img/*` but no fingerprinted vs static distinction

- Severity: low · Impact: 2 · Effort: S
- Location: `static/_headers:11–15`
- Observation: `/assets/*` (Docusaurus fingerprinted) gets `immutable, max-age=31536000`. `/img/*` gets `max-age=31536000` WITHOUT `immutable` — correct because filenames aren't fingerprinted. But `Cache-Control: no-cache` is set for the root (`/*`) which means HTML revalidates every request — fine. No explicit `s-maxage`/edge cache directive, so Cloudflare defaults apply.
- Recommendation: Consider `Cache-Control: public, max-age=0, s-maxage=300, stale-while-revalidate=86400` on `/*` HTML to let CF edge-serve cached HTML while still revalidating quickly. Big perceived-speed win for repeat anonymous traffic.

### PERF-015 — `feedOptions: { type: 'all' }` generates both RSS and Atom (small but doubled artifact)

- Severity: trivial · Impact: 1 · Effort: S
- Location: `docusaurus.config.ts:44`
- Observation: Both `rss.xml` and `atom.xml` generated; footer links both. Not a runtime perf issue but doubles a build artifact and crawler load.
- Recommendation: Decide which feed format is canonical (RSS is more compatible) and switch `type: 'rss'`. Update footer.

## Quick wins — top 5

1. **PERF-001 + PERF-007**: Re-encode PNG fallbacks (or drop them); fix LCP preload to target WebP only with correct `type`. One afternoon, biggest LCP/transfer-size lever.
2. **PERF-002**: Generate AVIF/WebP for the 2.5 MB ILG hero PNG. 15 minutes with `sharp-cli`.
3. **PERF-006**: Gate Hero `<Head>` preload on `eager` only. 5-line patch in `Hero.tsx`. Stops 11 wasteful preloads site-wide.
4. **PERF-009**: Add `loading="lazy"` to the two AFP Siembra YouTube iframes (and ideally facade them).
5. **PERF-013**: Add `<link rel="preconnect">` for `booking.doulab.net` (and Stripe) on home + services pages.

## Strategic bets — top 3

1. **Build-time mermaid SVG rendering** (PERF-003 + PERF-012). Removes ~1 MB JS from any route that has diagrams; eliminates FOUC re-layout. Investigate `remark-mermaid-dataurl` or pre-rendering via `@mermaid-js/mermaid-cli` in a build step. M effort, L payoff.
2. **CSS strategy revision** (PERF-004). Re-allow component-scoped CSS modules for page-specific surfaces while keeping `custom.css` as design-token + global utilities only. Pair with critical-CSS inlining for the homepage hero. M effort, M payoff (improves FCP and unused-CSS Lighthouse metric).
3. **Tighten browserslist + audit polyfill chunk** (PERF-011). Combined with a `@docusaurus/preset-classic` SWC migration if not already (Docusaurus 3.9+ supports Rspack), can shrink vendor chunk meaningfully. S–M effort, M payoff.

## Out of scope / hand-offs

- Image alt/aria-label quality of hero images → Accessibility
- robots.txt edge generation, Trusted Types CSP gap → SEO, Security & privacy
- Cloudflare Web Analytics beacon (`/cdn-cgi/rum`) and `cloudflareinsights.com` script — privacy/CSP review → Analytics, Security & privacy
- Mermaid dark-mode theme parity (D4 covered editorial side) → Brand & visual
- Booking/Stripe redirect chains affecting Time-to-Conversion → Conversion
- Mobile-specific image breakpoints (single `(max-width: 600px) 100vw, 600px` rule everywhere) → Mobile-first
- Footer link copy/labels → Content & copy
- `docs/research-resources/distributed-federated-agentic-ai copy.bk` and similar `.bk` files shipped in source tree → Code quality (stale; should be gitignored or removed)

## Open questions for Luis

1. Are PNG fallbacks actually required by any real audience traffic, or can we drop them and ship only AVIF + WebP? Cloudflare Web Analytics should give a UA breakdown.
2. Is `gh-pages` actually used by any deployment path, or can it be removed (PERF-010)?
3. Comfort level with build-time mermaid SVG rendering (PERF-003)? Trade-off: lose runtime dark-mode parity unless we render both themes, but huge perf win.
4. Is the NNY Innovation Lab Guide landing the LCP candidate that justifies the 2.5 MB hero (PERF-002), or can it be replaced with a lighter editorial header?
5. Stripe payment-link host — is it `buy.stripe.com` or `checkout.stripe.com`? Needed to scope PERF-013 preconnect targets.
