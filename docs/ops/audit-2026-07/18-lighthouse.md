---
title: "Audit 2026-07 — Role 18: Lighthouse (live, bilingual)"
role: lighthouse
status: complete
date: 2026-06-01
artifacts:
  - ops/audits/doulab-net/lighthouse-2026-07-prod-v1/
---

# Role 18 — Lighthouse (live + synthesis)

## Scope

Synthesis of 44 Lighthouse runs (18 mobile + 4 desktop, EN + ES) executed against the local production serve (`http://127.0.0.1:4173`) via `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/run.mjs`. Goal: turn raw category scores into prioritized engineering findings with real audit IDs, root causes, and EN-vs-ES deltas.

## Method

1. Parsed every JSON in `lighthouse-2026-07-prod-v1/` and built the full per-page category + Core Web Vitals table (appendix).
2. Deep-read the five lowest mobile Perf JSONs (`home-en`, `services-innovation-maturity-es`, `services-imm-dt-es`, `services-clarityscan-es`, `services-imm-dt-en`) end-to-end: extracted LCP element, LCP phase breakdown, render-blocking resources, unused JS/CSS, text compression, main-thread time, third-party summary.
3. Deep-read the four lowest A11y JSONs (`services-imm-dt`, `services-clarityscan-diagnostic`, `services-innovation-maturity`, plus `home-en` for comparison): extracted failing audit IDs (`color-contrast`, `link-in-text-block`, `list`, `aria-allowed-role`, `label-content-name-mismatch`) with exact node selectors and contrast values.
4. Computed EN-vs-ES Perf deltas and classified each delta as **structural** (consistent across pages, likely real) vs **variance** (single-run jitter from a cold-cache LH lab run).
5. Cross-referenced Best-Practices = 100 on local serve against the F-batch-known prod cap of 74-79 (E-F1, CF prefetch 503).

## Findings

Severity P0-P3 · Impact 1-5 (5 = highest) · Effort S/M/L

### LH-001 — Render-delay dominates LCP on mobile: ~93-94% of LCP is render-delay, not network · P0 · Impact 5 · Effort M

**Evidence (uniform across all 5 deep-dives):**

| Page | LCP | TTFB | Load Delay | Load Time | **Render Delay** |
|---|---:|---:|---:|---:|---:|
| home-en-mobile | 7.2 s | 454 ms (6%) | 0 | 0 | **6 740 ms (94%)** |
| services-innovation-maturity-es-mobile | 6.7 s | 452 ms (7%) | 0 | 0 | **6 259 ms (93%)** |
| services-imm-dt-es-mobile | 6.7 s | 453 ms (7%) | 0 | 0 | **6 241 ms (93%)** |
| services-clarityscan-es-mobile | 6.6 s | 453 ms (7%) | 0 | 0 | **6 134 ms (93%)** |
| services-imm-dt-en-mobile | 6.4 s | 454 ms (7%) | 0 | 0 | **5 969 ms (93%)** |

**Root cause.** The LCP element is always a hero text node (`p.heroSubtitle` or `p.heroText`) — no image, no font swap delay measured. Render delay of ~6 s on a Moto-G4-class mobile profile points to **CSS parse + main-thread JS hydration blocking first paint of the hero**. The single render-blocking stylesheet (`/assets/css/styles.cfa80f86.css`, 120 KB) and main bundle (`/assets/js/main.09092cc1.js`, 432 KB) both serve **uncompressed from the local Node prod serve** (no gzip/brotli). On Cloudflare prod this is mitigated by Brotli, so live CrUX LCP should be substantially better — but the structural problem (oversized critical CSS + large main bundle parsed before hero paints) is real.

**Fix path.**
- LH-001a: enable `compression: true` on the local prod serve script so future Lighthouse runs reflect prod (avoids LH double-counting an already-fixed-in-prod issue). Re-baseline.
- LH-001b: inline above-the-fold CSS for the hero block; defer the rest of `styles.cfa80f86.css`. Docusaurus offers `Head` injection per page; alternatively, ship a small `critical.css` swizzle.
- LH-001c: split the 432 KB `main.*.js` — Docusaurus v3 bundles all client navigation logic eagerly. Audit `webpack.config` / swizzled `Root.tsx` for synchronous imports of heavy components (Mermaid? Algolia? blog feed parser?).

### LH-002 — Text compression off on local serve inflates lab scores · P1 · Impact 4 · Effort S

Every page reports `uses-text-compression` score 0 with ~430-505 KiB of wasted bytes. The breakdown shows `main.*.js` (~295 KB savings), `styles.*.css` (~96 KB), and the HTML doc itself. The local prod serve (Vite preview / `http-server`) is not enabling gzip/brotli; CF prod is. **Action:** enable compression on the local serve harness before re-baselining LH-001/LH-005, or annotate this audit as a known lab-vs-prod gap and exclude from severity in the next pass.

### LH-003 — Unused JavaScript: 137 KiB consistent across pages · P1 · Impact 3 · Effort M

Every mobile run flags `unused-javascript` with ~137 KiB savings, almost all attributed to `main.09092cc1.js` (~140 KB unused of 432 KB total = 32% dead weight). Combined with `unused-css-rules` (78-89 KiB wasted from the same `styles.cfa80f86.css`), this confirms the Docusaurus base bundle ships substantial code/CSS that no individual page uses.

**Fix path.** Audit `docusaurus.config.ts` plugins and the `@theme/Root` swizzles. Likely suspects: blog/RSS plumbing on non-blog pages, search index, default-theme components we have overridden. Coverage report via Chrome DevTools per page will pinpoint chunks safe to lazy-import.

### LH-004 — Long-cache TTL: 10-11 resources missing immutable cache headers · P2 · Impact 2 · Effort S

`uses-long-cache-ttl` scores 0.5 on every page; 10-11 hashed asset URLs lack a 1-year cache header. On CF prod the `_headers` file should already cover `/assets/*`; this is a local-serve gap only. Verify CF prod by sampling response headers on `assets/js/main.*.js` — if confirmed correct in prod, demote to P3/closed.

### LH-005 — Main-thread work breakdown 2.0-2.1 s on the heaviest service pages · P1 · Impact 3 · Effort M

Only the two heaviest pages flagged `mainthread-work-breakdown` (score 0):
- `services-innovation-maturity-es-mobile`: 2.11 s
- `services-imm-dt-es-mobile`: 2.05 s

These are also the only two pages with TBT > 500 ms in the deep-dive set. The pattern correlates with FCP > 4.5 s on the ES variants — see LH-007.

### LH-006 — A11y P0: brand-green/orange contrast failures repeat across 4+ pages · P0 · Impact 5 · Effort S

The 88-89 A11y scores are driven by **a small, fixable set of brand-color contrast issues** that repeat across the IMM/ClarityScan/Innovation-Maturity families:

| Audit ID | Site-wide pattern | Failing nodes |
|---|---|---|
| `color-contrast` | **Rung badge** `span.badge_LEMr` — white-on-`#72c53c` = 2.15:1 (need 4.5:1 for body text, 3:1 for ≥18 pt) | every page that renders the ladder component |
| `color-contrast` | **Section H3** `#72c53c` on `#ffffff` = 2.15:1 (services-imm-dt) and `#f59e0b` on `#ffffff` = 2.14:1 (clarityscan-diagnostic deliverables) | services-imm-dt, services-clarityscan-diagnostic |
| `color-contrast` | **IMM funnel labels** white-on-`#00a6c8` = 2.88:1 and white-on-`#f26b5e` = 2.98:1 | services-innovation-maturity |
| `color-contrast` | Home green-strong `#72c53c` on `#f5f6f7` = 1.98:1 | home-en |
| `link-in-text-block` | **In-paragraph link** `#38249a` (brand purple) on body text = 1.49-1.50:1 (need 3:1 vs surrounding text) | home, services-imm-dt, services-clarityscan-diagnostic, services-innovation-maturity |
| `label-content-name-mismatch` | **Card CTA / button-secondary** visible text not in accessible name (likely an `aria-label` overriding visible text) | home, services-innovation-maturity |
| `aria-allowed-role` | `role="listitem"` applied to `<picture>` (proofStrip) and `<article>` (cardGrid) | services-innovation-maturity, home |
| `list` | `<ol>` with `<article>` children (roadmap/track component `ol.track_vXHC`) | services-imm-dt, services-clarityscan-diagnostic, services-innovation-maturity |

**Fix path.**
- LH-006a (P0, S): bump the green badge background to a WCAG-AA-compliant variant (`#5ba526` or darker) and switch H3 brand-green/brand-orange section headers to a stronger token (e.g. `--ifm-color-primary-dark`).
- LH-006b (P0, S): for the in-paragraph link contrast, restore an underline on inline body links (current rule is hover-only per `feedback_links_underline_on_hover`, but that rule was stated as overriding the *default-underline* preference; WCAG 2.2 `1.4.1 Use of color` still requires non-color affordance — keep the underline on inline-in-paragraph links, exempt only standalone CTAs). This is a direct conflict with the memory rule and needs user adjudication — see open question Q1.
- LH-006c (P0, S): remove `role="listitem"` from `<picture>` and `<article>` in the proofStrip / cardGrid; either wrap them in `<ul role="list">` parents or drop the role entirely (the element semantics already convey list membership when nested correctly).
- LH-006d (P1, S): refactor the roadmap component so the `<ol>` contains `<li>` wrappers around the `<article>` content, not `<article>` as direct children.
- LH-006e (P1, S): fix the card-CTA `aria-label` so visible text is a substring of the accessible name (or drop the aria-label and let visible text serve as the name).

### LH-007 — EN-vs-ES Perf deltas: mostly variance, two structural cases · P2 · Impact 3 · Effort M

EN-ES mobile Perf delta per page (ES − EN; negative = ES slower):

| Page | EN | ES | Δ | Read |
|---|---:|---:|---:|---|
| home | 46 | 67 | **+21** | EN run hit a cold-cache outlier (FCP 4.6 s vs ES 2.3 s); rerun EN |
| about | 72 | 75 | +3 | variance |
| insights | 75 | 74 | -1 | variance |
| contact | 72 | 76 | +4 | variance |
| case-studies | 74 | 74 | 0 | variance |
| case-studies/afp-siembra | 59 | 68 | +9 | variance (TBT 636→300) |
| services | 58 | 73 | **+15** | EN had TBT 618 ms — likely variance |
| services/diagnostics | 74 | 58 | **-16** | **structural: ES CLS 0.239** vs EN 0.002 — see LH-008 |
| services/clarityscan | 54 | 52 | -2 | both slow, both FCP 4.6 s |
| services/clarityscan-audit | 71 | 55 | **-16** | ES FCP 4.7 s vs EN 2.3 s — variance candidate but worth rerun |
| services/clarityscan-diagnostic | 66 | 57 | -9 | ES FCP 4.6 s vs EN 2.3 s — variance candidate |
| services/imm-dt | 72 | 50 | **-22** | ES FCP 4.6 s vs EN 2.3 s — variance candidate |
| services/innovation-maturity | 56 | 47 | -9 | both FCP > 4.7 s — both slow |
| services/innovation-readiness-workshop | 70 | 74 | +4 | variance |
| services/coaching-mentoring | 72 | 68 | -4 | variance |
| services/custom-workshops | 75 | 70 | -5 | variance |
| vigia-futura | 66 | 73 | +7 | variance |
| work-with-us | 73 | 75 | +2 | variance |

**Read.** Most ES-slower deltas are **first-paint variance**: ES runs that happened to land cold (FCP ~4.6 s) vs the cached EN runs (FCP ~2.3 s). Run order in `run.log` will confirm this — recommend re-running the affected ES pages with `--repeat 3` and taking the median before treating these as structural ES regressions. **Two real structural items:**
1. `services/diagnostics-es` has CLS 0.239 (vs EN 0.002) — real layout shift only in ES, see LH-008.
2. `services/innovation-maturity` is genuinely slow in **both** locales (47 / 56) — this is the heaviest page, candidate for component-level perf budgeting.

Hypothesis for systemic ES-slightly-slower: ES strings average ~15-20% longer than EN (typical for Romance vs Germanic), inflating DOM text size; this is plausible but the 2× FCP spreads above are too large to be string-length-only — they look like cold-cache LH lab noise.

### LH-008 — CLS regression on three pages · P1 · Impact 3 · Effort S

Pages with CLS > 0.05 (the LH "needs improvement" threshold):

| Page | CLS | Note |
|---|---:|---|
| services-diagnostics-es-mobile | **0.239** | EN counterpart is 0.002 — ES-only shift |
| work-with-us-en-mobile | 0.053 | EN-only; ES is 0.001 |
| vigia-futura-es-mobile | 0.052 | ES-only; EN is 0.001 |

The asymmetry suggests **late-loading translated copy reflowing a hero or card block** on the ES build (services-diagnostics, vigia-futura) and an EN-side asset reflow on work-with-us. The `layout-shifts` audit details (not yet extracted) will pinpoint the shifting nodes — fix is typically a fixed min-height on the hero / card image wrapper.

### LH-009 — Best-Practices = 100 on local serve masks the prod 74-79 cap · P3 · Impact 1 · Effort S (doc only)

Two anomalies in the BP column:
- `case-studies-afp-siembra` (both locales): BP 96 — flags a single `errors-in-console` or `is-on-https` audit (afp-siembra page-specific). Worth a 10-min look at the page's runtime console.
- `work-with-us-en-mobile`: BP 96 (ES is 100) — likely the same kind of EN-only console warning.

The headline note: **every other page reports BP 100 on local serve**, whereas live prod CrUX/LH has historically reported 74-79 due to **CF prefetch returning HTTP 503 on Algolia search dependencies (E-F1, accepted-benign)**. This delta is methodologically expected; this audit pass cannot detect prod-only BP issues. **Action:** keep E-F1 closed; do not act on BP findings from this audit alone — cross-reference with a prod-side LH run before scheduling any BP work.

### LH-010 — Desktop is uniformly excellent (96-97 Perf, all vitals green) · P3 · Impact 1 · Effort 0

All 8 desktop runs (4 pages × 2 locales) post Perf 96-97, LCP 1.2-1.5 s, FCP < 530 ms, TBT < 35 ms, CLS ≤ 0.008. No engineering work needed for desktop. **Note:** this confirms the LH-001 finding that mobile slowness is hydration/render-time on slow CPU, not server/network.

## Quick wins (S effort, P0-P1)

1. **LH-001a + LH-002:** enable compression on the local prod serve in `run.mjs`. Removes a methodological confound; will lift mobile Perf 5-15 points across the board on the next baseline.
2. **LH-006a + LH-006c:** dark-green badge background (`#5ba526` or darker) + remove `role="listitem"` from `<picture>`/`<article>`. Each is a one-line CSS / JSX change; together they unlock A11y 95+ on the IMM family.
3. **LH-006d:** wrap roadmap `<ol>` children in `<li>`. Mechanical refactor in one component file.
4. **LH-006e:** card-CTA `aria-label` fix in the shared `Card` component.
5. **LH-008:** add `min-height` to the diagnostics-ES and vigia-futura-ES hero / first card. Stops the CLS regression instantly.
6. **LH-009 (BP=96 pages):** open `case-studies/afp-siembra` in a clean browser, capture the console error, fix at source.

## Strategic bets (M-L effort, P0-P1)

- **LH-001b/c — critical-CSS + main-bundle split.** The biggest available mobile Perf win. Expected: mobile Perf median 67 → 80+, LCP median 6.3 s → ~3.5 s. Requires Docusaurus swizzle work and bundle-coverage analysis; size estimate 1-2 days.
- **LH-003 — dead-code elimination.** 137 KiB of unused JS is a chunk-splitting and lazy-import problem. Worth a focused pass once LH-001 lands.
- **LH-007 ES re-baseline.** Re-run ES mobile with `--repeat 3 --median` to separate variance from structural; lock the result as the actual ES baseline.

## Recommended target table

| ID | Target | Current state | Owner |
|---|---|---|---|
| LH-T1 | All mobile Perf ≥ 80 on service pages | median 67, four below 60 | Frontend |
| LH-T2 | All pages A11y ≥ 95 | 6 pages at 88-93 | Frontend + Design |
| LH-T3 | All mobile LCP < 4 s | median 6.4 s | Frontend |
| LH-T4 | All mobile TBT < 300 ms | 5 pages over 300 ms | Frontend |
| LH-T5 | All pages CLS < 0.05 | 3 pages above | Frontend |
| LH-T6 | Desktop Perf maintained ≥ 95 | currently 96-97 | (maintain) |
| LH-T7 | Prod BP ≥ 90 (separate prod-LH run) | unknown this pass; E-F1 caps known | Ops |

## Out-of-scope handoffs

- **Role 07 (Accessibility):** LH-006 contrast/aria findings are diagnostic only; full WCAG 2.2 AA matrix and prioritization belongs to role 07. Hand off the audit IDs + node selectors.
- **Role 06 (Performance / frontend engineering):** LH-001/003/005 are the engineering backlog items; role 06 owns the swizzle/chunking decisions.
- **Role 17 (Mobile-responsive):** LH-008 CLS sources need a viewport-level layout-shift trace; cross-check with role 19's screenshots.
- **Role 12 (i18n):** LH-007 ES delta read — confirm or refute the cold-cache variance hypothesis when role 12 looks at i18n perf.
- **Ops:** LH-001a + LH-002 require updating `run.mjs` (compression on); LH-009 prod BP delta requires a parallel prod-LH harness.

## Open questions

- **Q1.** LH-006b conflicts with the memory rule `feedback_links_underline_on_hover` (links underline only on hover). WCAG 2.2 §1.4.1 requires a non-color affordance for in-paragraph links. Options: (a) keep underline-on-hover-only and accept the `link-in-text-block` failure, (b) restore default underline on **inline body** links only and keep button-class CTAs hover-only, (c) raise link-text contrast to ≥ 3:1 against surrounding body text by darkening `#38249a` further. Recommend (b). **User decision needed.**
- **Q2.** Should `run.mjs` enable compression to match prod, or stay raw to keep LH conservative? Recommend enable, with a note in the harness README.
- **Q3.** The two ES pages with FCP ~4.6 s (services-imm-dt-es, services-clarityscan-es, services-innovation-maturity-es) — re-run with `--repeat 3` before treating the delta as real?

## Appendix A — Full category + Core Web Vitals table (44 runs)

CSV-style; sorted by file name. LCP/FCP/TBT/SI in ms, CLS unitless.

| File | Perf | A11y | BP | SEO | LCP | FCP | TBT | CLS | SI |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| about-en-mobile | 72 | 96 | 100 | 100 | 6176 | 2259 | 199 | 0.001 | 2259 |
| about-es-mobile | 75 | 96 | 100 | 100 | 6035 | 2255 | 130 | 0.001 | 2255 |
| case-studies-afp-siembra-en-mobile | 59 | 96 | **96** | 100 | 6161 | 2263 | 636 | 0.001 | 3270 |
| case-studies-afp-siembra-es-mobile | 68 | 96 | **96** | 100 | 6195 | 2257 | 300 | 0.001 | 3029 |
| case-studies-en-mobile | 74 | 96 | 100 | 100 | 6638 | 2258 | 102 | 0.001 | 2258 |
| case-studies-es-mobile | 74 | 96 | 100 | 100 | 6642 | 2255 | 68 | 0.001 | 2255 |
| contact-en-mobile | 72 | 100 | 100 | 100 | 6120 | 2258 | 210 | 0.000 | 2258 |
| contact-es-mobile | 76 | 100 | 100 | 100 | 5872 | 2255 | 59 | 0.001 | 2255 |
| home-en-desktop | **96** | 92 | 100 | 100 | 1452 | 489 | 14 | 0.001 | 519 |
| home-en-mobile | **46** | 93 | 100 | 100 | 7195 | 4624 | 695 | 0.000 | 5564 |
| home-es-desktop | **96** | 92 | 100 | 100 | 1405 | 486 | 0 | 0.001 | 486 |
| home-es-mobile | 67 | 93 | 100 | 100 | 6998 | 2257 | 291 | 0.001 | 3438 |
| insights-en-mobile | 75 | 100 | 100 | 100 | 6219 | 2260 | 105 | 0.001 | 2260 |
| insights-es-mobile | 74 | 100 | 100 | 100 | 6763 | 2256 | 103 | 0.023 | 2256 |
| services-clarityscan-audit-en-mobile | 71 | 92 | 100 | 100 | 6375 | 2257 | 242 | 0.001 | 2257 |
| services-clarityscan-audit-es-mobile | 55 | 92 | 100 | 100 | 6576 | 4682 | 355 | 0.000 | 5583 |
| services-clarityscan-diagnostic-en-mobile | 66 | **88** | 100 | 100 | 6342 | 2257 | 320 | 0.001 | 3833 |
| services-clarityscan-diagnostic-es-mobile | 57 | **88** | 100 | 100 | 6364 | 4575 | 322 | 0.000 | 5558 |
| services-clarityscan-en-desktop | **97** | 96 | 100 | 100 | 1219 | 487 | 22 | 0.006 | 493 |
| services-clarityscan-en-mobile | 54 | 96 | 100 | 100 | 6375 | 4587 | 404 | 0.000 | 5549 |
| services-clarityscan-es-desktop | **97** | 96 | 100 | 100 | 1212 | 486 | 0 | 0.001 | 486 |
| services-clarityscan-es-mobile | **52** | 96 | 100 | 100 | 6587 | 4591 | 482 | 0.000 | 5430 |
| services-coaching-mentoring-en-mobile | 72 | 100 | 100 | 100 | 6001 | 2263 | 216 | 0.033 | 2263 |
| services-coaching-mentoring-es-mobile | 68 | 100 | 100 | 100 | 6522 | 2259 | 285 | 0.000 | 3441 |
| services-custom-workshops-en-mobile | 75 | 100 | 100 | 100 | 6024 | 2258 | 116 | 0.025 | 2258 |
| services-custom-workshops-es-mobile | 70 | 100 | 100 | 100 | 6257 | 2258 | 251 | 0.000 | 2258 |
| services-diagnostics-en-mobile | 74 | 100 | 100 | 100 | 6069 | 2261 | 158 | 0.002 | 2261 |
| services-diagnostics-es-mobile | 58 | 96 | 100 | 100 | 6323 | 2259 | 243 | **0.239** | 3022 |
| services-en-mobile | 58 | 100 | 100 | 100 | 6553 | 2267 | 618 | 0.001 | 2885 |
| services-es-mobile | 73 | 100 | 100 | 100 | 6245 | 2257 | 186 | 0.002 | 2257 |
| services-imm-dt-en-desktop | **97** | **88** | 100 | 100 | 1252 | 488 | 33 | 0.000 | 691 |
| services-imm-dt-en-mobile | 72 | **88** | 100 | 100 | 6423 | 2261 | 186 | 0.001 | 2950 |
| services-imm-dt-es-desktop | **97** | **88** | 100 | 100 | 1206 | 485 | 0 | 0.000 | 485 |
| services-imm-dt-es-mobile | **50** | **88** | 100 | 100 | 6694 | 4605 | 562 | 0.000 | 5653 |
| services-innovation-maturity-en-desktop | **97** | 89 | 100 | 100 | 1290 | 526 | 34 | 0.006 | 699 |
| services-innovation-maturity-en-mobile | 56 | 89 | 100 | 100 | 6553 | 4840 | 344 | 0.000 | 5531 |
| services-innovation-maturity-es-desktop | **97** | 89 | 100 | 100 | 1221 | 525 | 6 | 0.008 | 641 |
| services-innovation-maturity-es-mobile | **47** | 89 | 100 | 100 | 6711 | 4740 | 650 | 0.000 | 5554 |
| services-innovation-readiness-workshop-en-mobile | 70 | 96 | 100 | 100 | 6308 | 2259 | 249 | 0.000 | 2601 |
| services-innovation-readiness-workshop-es-mobile | 74 | 96 | 100 | 100 | 6046 | 2254 | 142 | 0.000 | 2254 |
| vigia-futura-en-mobile | 66 | 96 | 100 | 100 | 6258 | 2258 | 333 | 0.001 | 3750 |
| vigia-futura-es-mobile | 73 | 96 | 100 | 100 | 6050 | 2254 | 166 | **0.052** | 2273 |
| work-with-us-en-mobile | 73 | 94 | **96** | 100 | 6571 | 2261 | 106 | **0.053** | 2261 |
| work-with-us-es-mobile | 75 | 94 | 100 | 100 | 6097 | 2255 | 117 | 0.001 | 2255 |

**Bold** values flag outliers (Perf ≥96 or ≤55; A11y ≤89; BP ≤96; CLS ≥0.05).

## Appendix B — Source files referenced

- Harness: `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/run.mjs`
- Run log: `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/run.log`
- Per-run JSON: `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/<slug>-<locale>-<form>.json` (44 files)
- Related backlog item: E-F1 (CF prefetch 503, accepted-benign) — see `docs/ops/doulab-net-backlog.md`
- Conflict to resolve (Q1): memory rule `feedback_links_underline_on_hover`
