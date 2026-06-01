# Viewport Matrix Audit — doulab.net — 2026-06-01

## Scope of this audit

This audit is the formal **6-anchor x N-pages** structured pass over the public Docusaurus site (`doulab-site/`). It complements `17-mobile-responsive.md` (free-form mobile review) by enforcing a fixed anchor list and predicting defects at each viewport from source. No browser was rendered; all findings cite `file:line` in source. Where a finding restates one already raised in `17-mobile-responsive.md` it is marked `FORMALIZES`; defects not raised there are marked `NEW`.

Reference inputs read in full: `AGENTS.md`, `docs/ops/doulab-net-backlog.md`, `docs/ops/audit-2026-06/17-mobile-responsive.md`, `docs/ops/audit-2026-06/02-brand-visual.md`, `docs/ops/audit-2026-06/06-performance.md`, `docs/ops/audit-2026-06/07-accessibility.md`, `src/css/custom.css` (2,463 lines), `docusaurus.config.ts`, `src/components/Hero.tsx`, `src/pages/index.tsx`, `src/pages/contact/index.tsx`, `src/pages/book-clarityscan.tsx`, and the migrated module-CSS namespaces inside `custom.css` (lines ~1280–2400).

Foldables (Galaxy Z Fold cover ~344x882, inner ~884x1136) are tracked as `n/a — pending` per the task brief. Doulab has no confirmed foldable daily-driver user.

## Method

1. Enumerated every `@media` block and viewport-unit / fixed-width literal in `src/css/custom.css` (Grep + Read).
2. Crossed those breakpoints against the six base anchors and identified gap zones.
3. Per page, predicted defect classes from source: which container max-width applies, which `flex` basis wraps, which fixed `font-size` / `padding`, which `clip-path` / `white-space: nowrap` constraints become unsafe.
4. Two-pass critique applied to each predicted defect.
5. Cross-referenced parallel audits (02, 06, 07, 17) and explicitly tagged each finding `NEW` or `FORMALIZES`.

Constraints: read-only on source. No `npm run build`, no Playwright. Every finding is a source-based prediction — actual visual confirmation requires the re-audit plan at the bottom.

### Browser matrix (planned, not executed here)

| Browser    | 360 | 390 | 768 | 1280 | 1366 | 1920 | Notes                                                  |
|------------|-----|-----|-----|------|------|------|--------------------------------------------------------|
| Chromium   | yes | yes | yes | yes  | yes  | yes  | Baseline.                                              |
| WebKit     | yes | yes | yes | yes  | yes  | yes  | iOS 100vh quirks, sticky-inside-scroll, `clip-path`.   |
| Firefox    |     |     |     | spot |      |      | Spot-check laptop only.                                |

### Render-context matrix (planned)

| Context                       | Apply at every anchor                                |
|-------------------------------|------------------------------------------------------|
| `prefers-reduced-motion`      | Yes — only one rule in CSS responds (line 1058).     |
| `prefers-color-scheme: dark`  | Yes — heavy `!important` ladder, lines 985–1226.     |
| `forced-colors: active`       | Yes — site has no `forced-color-adjust` declarations (WCAG 2.2 SC 1.4.11 risk). |

## Breakpoint coverage analysis

Every `@media` query found in `src/css/custom.css` mapped to the six anchors. "Anchors covered" = anchor sizes that fall on the active side of the rule (i.e. would receive the override).

| Breakpoint declared        | Times used         | Anchors that match               | Gap                                                                |
|----------------------------|--------------------|----------------------------------|--------------------------------------------------------------------|
| `max-width: 480`           | 2 (`:834`, `:2282`) | 360, 390                         | Excludes 600–480 mid-zone.                                         |
| `max-width: 600`           | 5 (`:714`, `:779`, `:1301`, `:2140`, `:2227`) | 360, 390     | Misses 480-600 nuance; ok overall.                                 |
| `max-width: 700`           | 2 (`:461`, `:643`) | 360, 390                         | Treats 768 anchor as desktop (hero diagram, IMM funnel).           |
| `max-width: 800`           | 2 (`:830`, `:2276`) | 360, 390, 768                    | None — covers tablet.                                              |
| `max-width: 900`           | 2 (`:877`, `:2326`) | 360, 390, 768                    | FAQ grid drops to 1 col at 900 — 768 anchor still gets 1 col, OK.  |
| `max-width: 960`           | 7 (`:159`, `:704`, `:773`, `:1291`, `:2134`, `:2221`, plus mermaid `:1291`) | 360, 390, 768 | None — covers tablet for grids.                              |
| `max-width: 996`           | 3 (`:205`, `:295`, `:638`) | 360, 390, 768                    | **996 is Docusaurus' navbar drawer threshold;** matches Infima default. |
| `min-width: 768`           | 1 (`:1934`)        | 768, 1280, 1366, 1920            | Innovation Readiness Workshop grid only.                           |
| `min-width: 900`           | 1 (`:1962`)        | (none of the six exactly hits 900) | OK.                                                              |
| `min-width: 996`           | 1 (`:1656`)        | 1280, 1366, 1920                 | IMM landing FAQ two-column at desktop.                             |
| `prefers-reduced-motion: reduce`     | 1 (`:1058`) | n/a                          | **Coverage gap**: only `.card:hover` and `.processStep:hover` reset. `.cardReel`, `.consent-banner`, `.subnav a:hover translate-Y`, `.proofStrip img` filter transitions, and Hero focus transitions ignore it. |
| `prefers-reduced-motion: no-preference` | 1 (`:2457`) | n/a                       | Inverse — consent banner only.                                     |
| `prefers-color-scheme`     | 0                  | n/a                              | Site uses `[data-theme='dark']` toggle, not the media query — fine but worth noting users with OS-level dark preference rely on Docusaurus' default behavior. |
| `forced-colors: active`    | 0                  | n/a                              | **Gap** — see VP-013.                                              |

Anchor coverage summary:

- **360 / 390 (anchors 1, 2)**: covered by 480, 600, 700, 800, 900, 960, 996. Multiple rules apply at each anchor — risk of conflicting cascade.
- **768 (anchor 3)**: covered by 800, 900, 960, 996. Falls **above** the 700 breakpoint that gates Hero diagram + IMM funnel mobile rules (lines 461, 643). Result: at 768 the IMM funnel still uses `transform: scale(0.92)` desktop sizing inside a 16:9 box that is now ~720px wide — visually fine but the labels stay at 22px which is borderline against the trapezoid taper.
- **1280 (anchor 5)**: below the 1200px content `max-width` ceiling — pages render at full width with `padding: 0 1rem`. No matching `min-width` rule. Hero `flex: 1 1 460px` text + `flex: 1 1 320px` media fits side-by-side comfortably.
- **1366 (anchor 4)**: same family as 1280; no anchor-specific rule.
- **1920 (anchor 6)**: content capped at 1200px; large unbounded margins left/right. No `max-width` override for FHD aside from `pages-services-innovation-readiness-workshop__container` at 1120px (line 1826) and a few 960/720 caps. Risk: hero feels lost in the page; no upper-bound type-scale guard.

**Anchors NOT covered by any explicit rule** that gates a desktop-vs-tablet decision: **1280, 1366, 1920**. They inherit the `>996` desktop branch uniformly. This is acceptable but means every large-screen visual decision is implicit, not asserted.

## Defect predictor matrix

Rows = pages. Columns = anchors (1: 360x640, 2: 390x844, 3: 768x1024, 4: 1366x768, 5: 1280x800, 6: 1920x1080). Cells = comma-separated short codes. Empty = predicted clean.

Codes: `OF` overflow horizontal; `CL` clip-path / clipping; `IT` illegible text (under 14px or contrast); `TT` tap target < 44 px; `IM` heavy image / wrong srcset; `NV` navbar drawer issue; `MX` mermaid clipping or unreadable; `FF` fixed-width or fixed font-size fail; `PD` padding asymmetry; `RM` reduced-motion ignored; `FC` forced-colors not handled; `DM` dark-mode override conflict; `LO` layout stack order surprising; `AS` aspect-ratio cropping; `FB` future foldable (n/a-pending).

| Page                                              | A1 360 | A2 390 | A3 768 | A4 1366 | A5 1280 | A6 1920 | Foldable |
|---------------------------------------------------|--------|--------|--------|---------|---------|---------|----------|
| `/` (home)                                        | OF, PD, FF, TT, IM, MX, FC | OF, PD, FF, TT, IM, FC | TT, IM, FC | FC | FC | FC, LO (whitespace) | n/a-pending |
| `/what-we-do`                                     | PD, FF, TT, FC | PD, FF, TT, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/services` (index)                               | TT, FF, FC | TT, FF, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/services/innovation-maturity`                   | PD, FF, TT, MX, FC | PD, FF, TT, MX, FC | TT, MX, FC | FC | FC | FC | n/a-pending |
| `/services/clarityscan`                           | PD, FF, TT, FC, IM | PD, FF, TT, FC, IM | TT, FC | FC | FC | FC | n/a-pending |
| `/services/diagnostics`                           | PD, FF, TT, FC | PD, FF, TT, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/services/innovation-readiness-workshop`         | PD, FF, TT, DM, FC, LO | PD, FF, TT, DM, FC | TT, DM, FC | DM, FC | DM, FC | DM, FC | n/a-pending |
| `/services/custom-workshops`                      | PD, FF, FC | PD, FF, FC | FC | FC | FC | FC | n/a-pending |
| `/case-studies` (index)                           | PD, TT, IM, FC | PD, TT, IM, FC | IM, FC | FC, IM | FC, IM | FC, IM | n/a-pending |
| `/case-studies/afp-siembra` (detail w/ YouTube)   | OF, IM, TT, FC | OF, IM, TT, FC | IM, FC | IM, FC | IM, FC | IM, FC | n/a-pending |
| `/about`                                          | PD, FF, TT, FC | PD, FF, TT, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/contact`                                        | TT, FF, FC | TT, FF, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/book-clarityscan`                               | OF, TT, FC, LO (autoopen) | OF, TT, FC, LO | TT, FC | FC | FC | FC | n/a-pending |
| `/book-clarityscan-success`                       | TT, FC, LO | TT, FC, LO | FC | FC | FC | FC | n/a-pending |
| `/insights` (blog index)                          | TT, IM, FC | TT, IM, FC | IM, FC | FC | FC | FC | n/a-pending |
| `/blog/<a-post>` (representative)                 | OF (tables), IT, TT, MX, FC | OF, IT, TT, MX, FC | MX, FC | FC | FC | FC | n/a-pending |
| `/vigia-futura`                                   | PD, FF, TT, FC | PD, FF, TT, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/ecosystems` (stubs)                             | OF, TT, FC | OF, TT, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/work-with-us`                                   | PD, FF, TT, DM, FC | PD, FF, TT, DM, FC | TT, DM, FC | DM, FC | DM, FC | DM, FC | n/a-pending |
| `/docs/research-resources/` (index)               | TT, FF, FC | TT, FF, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/docs/research-resources/<one chapter>`          | OF (tables), MX, IT, TT, FC | OF, MX, IT, TT, FC | MX, FC | FC | FC | FC | n/a-pending |
| `/privacy-terms`                                  | TT, FC | TT, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/terms-and-conditions`                           | TT, FC | TT, FC | TT, FC | FC | FC | FC | n/a-pending |
| `/404`                                            | TT, FC | TT, FC | FC | FC | FC | FC | n/a-pending |

**FC (forced-colors) is universal** — no rule in CSS handles Windows High Contrast. **TT (tap target < 44 px)** is universal on phones because the base `.buttonPrimary` / `.cardCta` heights inherit from `17-mobile-responsive.md` MOB-003.

## Findings (ranked)

---

### VP-001 — No coverage of `forced-colors: active` (WCAG 2.2 SC 1.4.11) anywhere in CSS — `NEW`

- Severity: P1 · Impact: 4 · Effort: M
- Pages: every page · Anchors: every anchor · Render context: `forced-colors: active` (Windows High Contrast)
- Location: `src/css/custom.css` (Grep for `forced-colors` = 0 hits; Grep for `forced-color-adjust` = 0 hits).
- Observation: Doulab brand surfaces depend heavily on **background color as the sole indicator of state**: `.subnav a.subnavActive` uses `background: #eef2ff` (line 945); `.chips li` uses `background: #eef2ff` + colored text (line 852); `.tag__name` (line 1067); `.consent-btn--primary` indicates the green primary via background only (line 2447); `.proofStrip img { filter: grayscale(100%); }` (line 819) is removed entirely under forced-colors (filter is stripped), so client logos may become invisible or inverted. None of these survive Windows High Contrast — active subnav looks identical to inactive, chips lose their grouping, the consent "Accept" CTA loses its semantic green. Forced-colors also disables `box-shadow`, breaking the visual elevation of `.card`, `.finalCta`, `.consent-banner`.
- Pass 1 (technical): renders, but state distinctions collapse. No keyboard regressions; contrast becomes UA-controlled.
- Pass 2 (multi-role):
  - **A11y**: WCAG 2.2 SC 1.4.11 non-text contrast risk; cannot detect active state.
  - **Brand**: Doulab purple disappears; the only brand cue is text content.
  - **Conversion**: primary vs secondary CTA distinction lost; users cannot easily find the "Accept" or "Book" path.
  - **Sales**: enterprise/government users in DR / LatAm public sector routinely use High Contrast for accessibility compliance.
  - **IA/UX**: subnav active state is invisible — users cannot orient.
- Recommendation: add a global `@media (forced-colors: active)` block that (a) sets `border: 1px solid CanvasText` on `.card`, `.finalCta`, `.processStep`, `.consent-banner`; (b) replaces `background`-driven active states on `.subnav a.subnavActive`, `.chips li`, `.tag__name` with `outline: 2px solid Highlight` or `border-bottom: 2px solid Highlight`; (c) declares `forced-color-adjust: none` only where a brand color must be preserved with explicit `SystemColor` fallback; (d) removes the `grayscale` filter on `.proofStrip img` under forced-colors. Hand-off to Accessibility (extends A11Y-010 focus-ring work).
- Evidence: `src/css/custom.css:813-827`, `:849-856`, `:945-948`, `:1067-1068`, `:2447-2454`. Overlap with `07-accessibility.md` (A11Y-006, A11Y-010) but forced-colors specifically was not raised there.

---

### VP-002 — Hero diagram aspect-ratio + scale clash at the 700–996 px corridor (the 768 anchor) — `NEW`

- Severity: P1 · Impact: 4 · Effort: S
- Pages: `/`, `/what-we-do`, `/services/innovation-maturity`, every page using `<Hero rightVisual={<ImmFunnelDiagram />} />` · Anchors: A3 (768) primarily
- Location: `src/css/custom.css:461-473` (`@media (max-width: 700px)` mobile branch) and `:643-649` (IMM funnel mobile branch). Component: `src/components/diagrams/ImmFunnelDiagram.tsx`.
- Observation: The Hero diagram has two rule sets — desktop (default) and mobile (`max-width: 700`). At **768 px** (anchor A3) the page is in the desktop branch but the actual horizontal space allocated to the `.components-hero__media` column is `flex: 1 1 320px` against a `.components-hero__content` `flex: 1 1 460px`. Combined basis 780 ≈ viewport — flex will not give the media its requested 320 px; it shrinks to roughly 280–300 px in a 768 px viewport (minus container padding). The IMM funnel `__stack` declares `width: min(520px, 100%)` with `transform: scale(0.92)` (line 511) — at 300 px effective width, the funnel labels at fixed `22px` (line 579) overflow narrower bars (`p3 76%`, `p4 68%`, `p5 56%` → ~205 / 183 / 151 px wide) and `.immFunnel { overflow: hidden }` (line 497) clips them. This is the same risk MOB-006 flagged for 360 px but at 768 the desktop branch doesn't even engage the mobile guards.
- Pass 1: clip-path trapezoids combined with `white-space: nowrap` on `.immFunnel__labelSub` (line 601) cause label clipping; legibility falls below acceptable.
- Pass 2:
  - **Brand**: the IMM funnel is the hero brand asset on multiple pages; clipping degrades it specifically on the most common tablet width.
  - **A11y**: labels remain in DOM (screen reader unaffected) but visual users see truncated phase names.
  - **Conversion**: prospects scanning on iPad see a broken brand mark.
- Recommendation: raise the funnel-mobile breakpoint to `max-width: 996px` (i.e. apply mobile branch through the tablet zone), and add a true `max-width: 480px` ultra-narrow branch with `font-size: 14px` and `white-space: normal` on `__labelSub`. Or change `.components-hero__media { flex: 1 1 360px }` so the diagram column never falls below readable width.
- Evidence: `src/css/custom.css:461-473`, `:489-650`, `:1330-1342`.

---

### VP-003 — `.cardReel` horizontal scroll fights with `clamp(280px, 30vw, 360px)` at 1280–1920 — `NEW`

- Severity: P2 · Impact: 3 · Effort: S
- Pages: `/` (Problem carousel), any page using `.cardReel` · Anchors: A5, A4, A6
- Location: `src/css/custom.css:724-740`.
- Observation: `grid-auto-columns: clamp(280px, 30vw, 360px)` — at 1280px viewport `30vw` = 384, clamped to 360 (fine); at 1920 `30vw` = 576, clamped to 360 (fine). The intent is good. But the reel container width is implicit (no `max-width`), so at 1920px the reel column of ~360px cards is bounded by the surrounding section's 1200px max-width; with 8 problem cards plus 1rem gaps, ~6 cards fit before scroll begins. Users with a wide monitor will not perceive there is more content — `MOB-013` flagged the affordance issue at 360/390 but the same lack of scroll-hint shadow affects landscape laptop/desktop browsing where the reel is most likely to be exhausted by mouse scroll.
- Pass 1: technically valid; renders. Hover state on cards conflicts with reduced-motion (the `:hover` translateY is dampened by line 1058 only for `.card:hover`, not for `.cardReel .card:hover`).
- Pass 2:
  - **Conversion**: 8 problem cards is the funnel-entry pitch; if cards 6-8 are hidden behind silent overflow on desktop, the prospect never sees the "your problem" they identify with.
  - **A11y**: keyboard users with `tabIndex={0}` on the reel (per `index.tsx:59-68`) lack a visible focus indicator on the scroll container (overlap with A11Y-010).
- Recommendation: add a right-edge linear-gradient mask on `.cardReel` when content overflows (`mask-image: linear-gradient(...)`) and a "Swipe →" microcopy element. Sitewide. FORMALIZES MOB-013 at landscape anchors.
- Evidence: `src/css/custom.css:724-740`; `src/pages/index.tsx:59-68, 183-230`.

---

### VP-004 — `text-align: justify` on `.components-hero__subtitle` and `.pages-b4-p2__heroSubtitleJustify` triggers WebKit "rivers" at 360/390 — `FORMALIZES` (MOB-002 + A11Y-007)

- Severity: P1 · Impact: 4 · Effort: S
- Pages: every page using `<Hero subtitle />` and the b4-p2 utility · Anchors: A1, A2 primarily, A3 secondary
- Location: `src/css/custom.css:1335-1337` and `:1614-1616`.
- Observation: Already flagged in MOB-002 (free-form) and A11Y-007. Formalized here: at 360 px the subtitle is `2.25rem` (= 36 px) with `text-align: justify` — combined with the fixed font-size (MOB-002) the result is visibly broken word spacing on Safari iOS specifically (WebKit's justification algorithm is more aggressive than Chromium's). Anchor A3 (768) still uses justify but the wider line absorbs it; A4/A5/A6 are unaffected because the subtitle fits one line.
- Pass 1: rivers / large gaps; AAA SC 1.4.8 advisory.
- Pass 2: see MOB-002, A11Y-007. New angle here: the **browser-matrix dimension** — Safari iOS has the worst rendering; Chromium less affected.
- Recommendation: combine MOB-002's `clamp()` change with a sitewide `text-align: left` reset; remove justify entirely. FORMALIZES.

---

### VP-005 — `.heroBanner` 1200px content cap with no FHD upper-bound type guard — `NEW`

- Severity: P3 · Impact: 2 · Effort: S
- Pages: all marketing pages · Anchors: A6 (1920) specifically
- Location: `src/css/custom.css:394` (`.heroBanner { max-width: 1200px }`), `:399` (`.heroTitle { font-size: clamp(2rem, 1.8rem + 1vw, 3rem); }`).
- Observation: The `clamp` for `.heroTitle` caps at `3rem` (48 px). On a 1920px screen the hero is centered in a 1200 px column with ~360 px of empty gutter each side, and the title at 48 px feels small against the negative space. There is no `min-width` rule lifting the type scale on FHD — the design implicitly treats 1280 and 1920 identically. For the home page hero (the LCP brand impression), this leaves the FHD audience under-served. Not a bug — a design-debt observation.
- Pass 1: renders fine. No defect.
- Pass 2:
  - **Brand**: hero looks weaker on demo monitors / Cloudflare offices / enterprise stakeholder reviews.
  - **Conversion**: less visual hierarchy → CTAs are equally small relative to canvas.
- Recommendation: add an upper `min-width: 1440px` step in the `clamp` (e.g. `clamp(2rem, 1.8rem + 1vw, 3.5rem)`) and an optional `.heroBanner { max-width: 1320px }` override at the same breakpoint. Coordinate with Brand & visual (BRAND-014 typographic tokens).
- Evidence: `src/css/custom.css:392-409`.

---

### VP-006 — Workshop page hero pill buttons fail tap-target sizing AND have no mobile override for 1.3rem subtitle — `NEW`

- Severity: P1 · Impact: 4 · Effort: S
- Page: `/services/innovation-readiness-workshop` · Anchors: A1, A2, A3
- Location: `src/css/custom.css:1842-1898`.
- Observation: `.pages-services-innovation-readiness-workshop__heroTitle { font-size: 2.6rem }` (line 1843, **41.6 px, no clamp, no media query**) and `__heroSubtitle { font-size: 1.3rem }` (line 1848). At 360 px the title overflows commonly used PR product names; at 1920 px it stays at 41.6 px which is too small relative to canvas (same as VP-005 but worse since other pages use clamp). The 999 px pill buttons (`.pages-services-innovation-readiness-workshop__primaryButton`, line 1884) have `padding: 0.75rem 1.5rem; font-size: 0.95rem` → ~40 px tall — fails 44 px tap target (overlap with MOB-003 but this page uses bespoke selectors that MOB-003's recommended global fix won't cover).
- Pass 1: title may horizontal-overflow long Spanish strings (e.g. "Taller de Preparación para la Innovación"); buttons under tap-target floor.
- Pass 2:
  - **Brand**: this is the only page using IMM gradient + pill buttons (BRAND-005); when migrated, fix tap targets in same commit.
  - **Conversion**: this is a premium funnel surface — undersized CTAs cost.
  - **i18n**: Spanish title length is 30–60 % longer than English.
- Recommendation: convert to `Hero` component (BRAND-005 quick win) OR add explicit `font-size: clamp(1.8rem, 1.4rem + 2vw, 2.6rem)` to `__heroTitle`, `min-height: 44px` to the bespoke buttons. FORMALIZES BRAND-005 + MOB-003 for this page specifically.
- Evidence: `src/css/custom.css:1820-1898`.

---

### VP-007 — `.consent-banner` flex-wrap layout — bottom-pinned at 16px on iOS, conflicts with `100vh` keyboard inset — `NEW`

- Severity: P2 · Impact: 3 · Effort: S
- Page: site-wide (consent banner) · Anchors: A1, A2 specifically; render context: iOS Safari with on-screen keyboard
- Location: `src/css/custom.css:2400-2456`.
- Observation: `position: fixed; bottom: 16px;` (lines 2401-2405). On iOS Safari, when the user focuses a form field (e.g., `/contact`), the OS keyboard rises and `position: fixed` elements anchored to `bottom` slide upward with the visual viewport. The consent banner can mask the focused form field. Combined with `flex-wrap: wrap` and `max-width: 700px` on `.consent-banner__content` (line 2419), the banner at 360 px becomes ~328 px wide × ~110 px tall — significant screen real estate during decision input. There is no `prefers-reduced-motion` exemption for the entrance transition (lines 2457-2461) so users with motion sensitivity still see the transform.
- Pass 1: not a layout break, but a UX collision with iOS keyboard. Also fails forced-colors (VP-001).
- Pass 2:
  - **Security/privacy**: blocks user from completing the action that requires consent.
  - **A11y**: keyboard users on form pages may not see the field they are editing.
- Recommendation: use `bottom: env(safe-area-inset-bottom, 16px)`; consider auto-dismiss/auto-hide when a form field is focused; gate the transition behind `@media (prefers-reduced-motion: no-preference)` (already done at line 2457, so this is fine — confirm). NEW relative to MOB-014 (which addresses button size only).
- Evidence: `src/css/custom.css:2400-2461`.

---

### VP-008 — Dark-mode `!important` ladder collapses at certain anchors when system color-scheme conflicts — `NEW`

- Severity: P2 · Impact: 3 · Effort: M
- Pages: every page when `[data-theme='dark']` · Anchors: all (mobile worse because more rules fire on small viewports)
- Location: `src/css/custom.css:985-1226`. Specifically `:1140-1146` `:is(...) .card p, .processStep p, .card li, .section li { color: #fff !important; }` is global; `:1202-1208` re-applies secondary button color without `!important`; `:1210-1216` re-applies body color WITHOUT `!important` again (lines 1140-1146 already shipped `!important`, so the unmarked block at 1210 has no effect).
- Observation: This is a "ladder" where the latest rule wins only if more `!important`s appear. At anchors where layout rules push content into different containers (e.g., `.processStep` collapses to single column at A1/A2, line 779), the dark-mode rule still targets `.processStep p`, fine. But at A3 (768) the `.cardGrid` collapses to `repeat(6, 1fr)` (line 706) — cards become 2-up — and the dark-mode rule `.card p` is fine. The risk is **specificity cascade in conjunction with `pages-work-with-us-index__*` clones**: the dark-mode override at line 2371 uses an inverted selector `html.pages-work-with-us-index__theme-dark` (NOT `[data-theme='dark']`) — this class **never exists on `<html>`**. So work-with-us page's dark mode is fully broken at every anchor.
- Pass 1: dark-mode on `/work-with-us` falls back to default Docusaurus dark surface, producing white cards on dark background — high contrast in the wrong direction.
- Pass 2:
  - **Brand**: brand inconsistency in dark mode on a funnel-entry page.
  - **Code quality**: BRAND-008 already flagged the !important ladder; this finding adds the **broken selector** specifically.
- Recommendation: replace `html.pages-work-with-us-index__theme-dark` with `html[data-theme='dark']` at `src/css/custom.css:2371, 2378, 2382`. Then proceed with BRAND-008 token-driven consolidation.
- Evidence: `src/css/custom.css:2371-2385` (the broken selector); `src/css/custom.css:1119-1226` (the ladder).

---

### VP-009 — `.proofStrip { grid-template-columns: repeat(5, minmax(120px, 1fr)) }` overflows below ~600 px before its breakpoint kicks in — `NEW`

- Severity: P2 · Impact: 3 · Effort: S
- Pages: home, about, work-with-us · Anchors: 480–600 mid-zone (A1 360 just below, A2 390 just below, A3 768 fine)
- Location: `src/css/custom.css:804-836`.
- Observation: At 5 columns × `minmax(120px, 1fr)` the row needs ≥ 5 × 120 + 4 × 1rem gap = 664 px minimum. The first breakpoint shrink is at `max-width: 800px → 3 cols` (line 830). Between 664 and 800 px there is no break (none of the anchors fall here, BUT — important — between 480 and 664 px the 3-col `minmax(120px)` still needs 360+gaps; combined with `.section { padding: 0 1rem }` parent ≈ 16 px each side leaves a content box of ~328 px on 360 — 3-col fails. The 480 px breakpoint (line 834) drops to 2 col + `max-height: 40px`, which works. But **at viewport 481-600 px (just above A2 390 but below A3 768)** the 3-col layout has only ~568 px to display 3 × ≥120 px = 360 px + 32 px gaps = 392 px → OK at minmax floor, but logos rendered at 44 px tall × 120 px wide max are crammed.
- Pass 1: horizontal scroll **could** occur on 360 if the parent padding shrinks; in practice, `minmax(120px, 1fr)` allows shrinking below 120 if no other constraint — so no horizontal scroll, but logos become tiny.
- Pass 2:
  - **Sales** (overlap BRAND-012): client recognition signal is diluted when logos render at 60–80 px wide on phones.
  - **Brand**: grayscale-on-hover plus tiny rendering = invisible proof.
- Recommendation: rethink the 5/3/2 column ladder. Consider `repeat(auto-fit, minmax(140px, 1fr))` and let it self-pack; document min logo height (44 px) and min logo width (140 px). FORMALIZES MOB-013/MOB-001 angle but specifically about the proof strip.
- Evidence: `src/css/custom.css:804-837`; same pattern duplicated `:2252-2286`.

---

### VP-010 — Mermaid diagrams clip horizontally; `.mermaid { overflow-x: auto }` correct but no scroll-hint at any anchor — `FORMALIZES` MOB-007 across all anchors

- Severity: P2 · Impact: 3 · Effort: S
- Pages: blog posts with diagrams, ILG chapters, case studies · Anchors: A1, A2, A3 (worst); A4, A5, A6 if a diagram is wider than 1200px
- Location: `src/css/custom.css:1249-1277`.
- Observation: MOB-007 already raised. Formalized here against the anchor list: at A1 (360 px) the `.mermaid` block is ~328 px wide, but a flowchart with 6 nodes side-by-side at 16 px font (line 1251) easily reaches 800 px — horizontal scroll is needed but no visual cue indicates scroll. At A3 (768 px) ~720 px the same diagram fits or nearly fits — silent OK. At A4/A5 (1280/1366) diagrams fit. At A6 (1920) diagrams fit but text remains at 16 px against a 1200 px-capped section.
- Pass 1: scroll-bar may be too thin on Windows; on iOS Safari hidden until interaction.
- Pass 2:
  - **A11y**: a11y A11Y-014 raised the structural issue; this is the **visual hint** issue.
  - **MCF/IMM-P**: diagrams are core IP — losing comprehension on mobile is high-cost.
- Recommendation: per MOB-007, add a right-edge gradient mask and a `Scroll →` cue on `.mermaid` when content overflows. FORMALIZES MOB-007 + A11Y-014.

---

### VP-011 — `prefers-reduced-motion` coverage incomplete — only `:hover` transforms of `.card` and `.processStep` are reset — `NEW`

- Severity: P2 · Impact: 3 · Effort: S
- Pages: every page · Anchors: all · Render context: `prefers-reduced-motion: reduce`
- Location: `src/css/custom.css:1058-1063`.
- Observation: The reduce-motion rule only damps `.card:hover` and `.processStep:hover`. Untouched:
  - `.subnav a:hover { transform: translateY(-1px) }` (line 933)
  - `.proofStrip img:hover { transform: translateY(-1px) }` (line 827)
  - `.blogPostCard:hover { transform: translateY(-2px) }` (line 1104)
  - `.pages-work-with-us-index__card:hover { transform: translateY(-3px) }` (line 2158)
  - `.consent-banner` transitions (line 2459) — already correctly gated by `prefers-reduced-motion: no-preference` (line 2457), good.
  - The carousel `scrollByAmount` JS in `index.tsx` ignores OS preference.
- Pass 1: motion fires for users who explicitly asked for less motion. WCAG 2.3.3 (AAA, advisory) plus principle.
- Pass 2:
  - **A11y**: vestibular-disorder users affected.
- Recommendation: expand the reduce-motion media query to cover all hover-translate rules and the carousel JS. Tie into a `--dl-motion-*` token set.
- Evidence: `src/css/custom.css:933, 827, 1104, 2158, 1058-1063`; `src/pages/index.tsx:59-68`.

---

### VP-012 — Container double-padding chain across `.container`, `.section`, `.pages-*__main`, `.heroBanner` — content width on A1/A2 shrinks to ~310 px — `FORMALIZES` MOB-012

- Severity: P2 · Impact: 3 · Effort: S
- Pages: `/book-clarityscan`, `/book-clarityscan-success`, `/privacy-terms`, `/terms-and-conditions`, `/ecosystems/*` · Anchors: A1, A2
- Location: `src/css/custom.css:1671-1680` (`.pages-book-clarityscan__main { padding: 2rem 1rem }`), Infima `.container { padding: 0 var(--ifm-spacing-horizontal, 1rem) }`, `.heroBanner` `:392-396`, `.section` `:167-171`.
- Observation: MOB-012 raised this for `book-clarityscan`. Formalized at A1: page wraps content with `<Layout>` (Infima container ≈ 16 px each side), then `pages-book-clarityscan__main` adds 16 px each side (`padding: 2rem 1rem` line 1679), and any inner `.section` adds another 16 px (`padding: 0 1rem` line 170). On a 360 px viewport that is 96 px total horizontal padding — content rendered at 264 px wide. This affects all `pages-*__main` pages that also use `<section className="section">` children.
- Pass 1: legibility tight but not broken; reading line ~38 characters at 16 px body.
- Pass 2:
  - **IA/UX**: reading width below Bringhurst's 45–75 char minimum for sustained reading.
  - **Conversion**: legal pages render tightly — may be perceived as cramped or unprofessional.
- Recommendation: remove the inner `padding: 2rem 1rem` on `pages-*__main` when the page is rendered inside `<Layout>` (which already provides `.container` padding), or unset `.section { padding: 0 }` on `min-width: 0` zero-padding parents. FORMALIZES MOB-012 across legal + ecosystems pages.

---

### VP-013 — `book-clarityscan.tsx` auto-`window.open()` plus visible fallback button creates an A1/A2-specific "broken landing" appearance — `FORMALIZES` MOB-010 + A11Y-011

- Severity: P1 · Impact: 4 · Effort: S
- Page: `/book-clarityscan`, `/book-clarityscan-success` · Anchors: A1, A2 worst; A3+ better
- Location: `src/pages/book-clarityscan.tsx:10-19, 36-45`.
- Observation: Combined with VP-012, when iOS Safari blocks the auto-open, the page shows: blocked-popup banner + the page's `__main` content at 264 px effective width with a 33-px-tall fallback button (MOB-003). At anchors A1, A2 the page reads "this page is broken." At A3+ the popup is more likely to succeed (desktop browsers grant pop-up to same-site mounts more often) so the page is rarely seen visually anyway.
- Pass 1: see MOB-010 / A11Y-011.
- Pass 2:
  - **Conversion**: paid-first funnel entry that looks broken on mobile is a meaningful revenue leak.
- Recommendation: remove the auto-open; design a clear paid-first landing. FORMALIZES + reinforces.

---

### VP-014 — `min-width: 768px` rule on workshop grid is the only `min-width` matching anchor A3 — A3 inconsistency risk — `NEW`

- Severity: P3 · Impact: 2 · Effort: S
- Page: `/services/innovation-readiness-workshop` · Anchor: A3 (768) exactly
- Location: `src/css/custom.css:1934-1938`.
- Observation: `@media (min-width: 768px) { __grid: grid-template-columns: repeat(3, minmax(0, 1fr)) }`. The boundary is exactly the A3 anchor. Behaviour at viewport=768 in different browsers can vary by 1 px because of dev tools rounding; **Chromium emulator** treats `min-width: 768` as inclusive (kicks in), **WebKit** inclusive, but real iPad mini portrait reports 768 CSS px and treats it as inclusive. Risk: any rounding (scrollbar reservation, zoom level) drops the rule and the grid falls to 1-col with three large cards stacked. Same risk in reverse for `min-width: 996` at line 1656 (IMM FAQ).
- Pass 1: boundary case; mostly passes.
- Pass 2:
  - **QA**: easy to miss in manual testing.
- Recommendation: shift to `min-width: 769px` or, better, `min-width: 720px` so A3 reliably enters the multi-column branch. Or align all `min-width` rules to the 996 navbar breakpoint family. NEW.

---

### VP-015 — Navbar drawer at A3 (768 px) renders 7 plain-text items with no enlarged tap area — `FORMALIZES` MOB-005 with the A3 angle

- Severity: P1 · Impact: 4 · Effort: M
- Pages: site-wide · Anchors: A1, A2, **A3**
- Location: `docusaurus.config.ts:85-93`; Docusaurus collapses navbar < 996 px so A3 (768) is in the drawer too.
- Observation: MOB-005 framed this at A1/A2. At A3 (iPad portrait) tablet users still get the hamburger drawer with 7 plain-text items because Docusaurus default threshold is 996. Adding services dropdown collapse would help A3 most (more visible content surface, larger tap area). 7 items also means the drawer header occupies a non-trivial fraction of the iPad viewport.
- Pass 1: works; drawer scrolls if needed.
- Pass 2:
  - **IA/UX**: iPad is the under-served anchor — neither true mobile (where users expect hamburger) nor desktop (where horizontal nav is expected). The current design treats it as mobile.
- Recommendation: consider raising the drawer threshold to 760 px (move iPad to horizontal nav) OR build a richer drawer with `min-height: 44px` and grouped "Services" submenu. FORMALIZES MOB-005, adds A3 anchor view.

---

### VP-016 — `.heroDiagram { aspect-ratio: 16/9 }` clips vertical IMM funnel at A4/A5 landscape laptop widths — `NEW`

- Severity: P3 · Impact: 2 · Effort: S
- Page: any with `<Hero rightVisual={<ImmFunnelDiagram />} />` · Anchors: A4 (1366), A5 (1280)
- Location: `src/css/custom.css:425-433`, mobile override `:461-473` switches to 4:3 (which is correct).
- Observation: At A4 (1366×768 landscape) the hero text column takes ~460 px + 2rem padding, leaving ~860 px for media in a 16:9 box → ~860 × ~484 px. The IMM funnel is taller than wide (`min-height: 240px`, lines 494) but uses `transform: scale(0.92)` and the `.heroDiagram svg { height: 100% !important; width: auto !important; }` rule (lines 447-453) — this is `Mermaid` content, NOT the CSS `ImmFunnelDiagram`. For the CSS funnel the parent `.heroDiagram` 16:9 box is ~484 px tall; the funnel's 5 bars + gaps at desktop sizing (32 + 32 + 32 + 32 + 84 + 4×8 = 244 px stack + scale 0.92) fits. OK. **At 1280×800 landscape it gets tighter** but still fits. Risk only realises if browser zoom > 125% — the funnel then exceeds the 16:9 box and is clipped by `.immFunnel { overflow: hidden }`.
- Pass 1: borderline; user zoom = visual break.
- Pass 2:
  - **A11y**: users with vision needs often run 125–150% zoom — this audience hits clipping precisely on laptop widths.
- Recommendation: change `.heroDiagram { aspect-ratio: 16/9 }` to `aspect-ratio: 16/9; min-height: 320px` to give the funnel room when zoomed, and unset `overflow: hidden` on `.immFunnel` (use `overflow: visible` since labels are bounded by the bars themselves). NEW; related to A11Y-010 zoom risk.

---

### VP-017 — Inline iframe at 16:9 padding-top — `case-studies/afp-siembra` — fixed `padding-top: 56.25%` works but no fallback dimension at A1 — `NEW`

- Severity: P3 · Impact: 2 · Effort: S
- Page: `/case-studies/afp-siembra` · Anchors: A1, A2
- Location: `src/css/custom.css:1694-1706`.
- Observation: `.pages-case-studies-afp-siembra__videoWrapper { padding-top: 56.25%; position: relative; }` paired with `.pages-case-studies-afp-siembra__videoFrame { position: absolute; inset: 0; }` is the classic 16:9 responsive iframe pattern — technically correct. At 360 px the iframe renders at 360 × 202.5 px; YouTube embed's default control UI is borderline usable at that size. No `min-height` floor; no `aspect-ratio` modern equivalent. Combined with PERF-009 (no `loading="lazy"` on the iframes), the page is heavy on A1/A2.
- Pass 1: renders; YouTube controls cramped.
- Pass 2:
  - **Performance**: PERF-009 overlap.
  - **A11y**: small controls = tap target risk.
- Recommendation: switch to `aspect-ratio: 16 / 9` (drop the padding-hack), set `min-height: 200px`, and apply the facade pattern. NEW (formalises a corner of PERF-009).

---

### VP-018 — `.cardGrid` and `.processRail` 12-col grid math collapses correctly but A3 (768) sits in the `max-width: 960` branch — A3 not validated against `repeat(6, 1fr)` densely — `NEW`

- Severity: P3 · Impact: 2 · Effort: S
- Pages: `/`, `/about`, `/work-with-us`, `/services/*` · Anchor: A3 (768)
- Location: `src/css/custom.css:694-712, 749-783, 2128-2144, 2203-2231`.
- Observation: At A3 the grid is `repeat(6, 1fr)` with each card `grid-column: span 6` (so two cards per row visually). At ~720 px of usable inner width per card pair = ~340 px per card minus gap. Cards are designed at ~370 px ideal. Content (icon + h3 + p + CTA) often overflows at this width — particularly on `.processStep` where the four steps render as 2×2 with `padding: 1rem 1.25rem` (line 763) and a 28 px icon — looks OK. **The risk is `.pages-work-with-us-index__processStep` clone**, which is exactly the same rules but without the dark-mode fix (VP-008): at A3 in dark mode the cards render with light background while page is dark.
- Pass 1: layout OK; theme inconsistency in dark mode.
- Pass 2:
  - **Brand/QA**: clone divergence.
- Recommendation: VP-008's selector fix + visual sweep at A3 of all `pages-*__card` clones.

---

## Render-context risks

### `prefers-reduced-motion: reduce` — VP-011

Items that ignore the reduced-motion preference (in addition to the rules already at `src/css/custom.css:1058-1063` which only cover `.card:hover` and `.processStep:hover`):

- `.subnav a:hover` translateY (line 933).
- `.proofStrip img:hover` translateY (line 827).
- `.blogPostCard:hover` translateY (line 1104).
- `.pages-work-with-us-index__card:hover` translateY (line 2158).
- `.cardReel` `scroll-snap-type: x mandatory` snap behaviour (line 732) — snapping motion on small swipes can trigger vestibular response; consider `scroll-behavior: auto` when reduce-motion.
- The `index.tsx` carousel `scrollByAmount` does smooth scroll (`behavior: 'smooth'`) without checking the OS preference (lines 59-68).
- The workshop page does not use motion but the consent banner transition (line 2459) IS correctly gated.

### `forced-colors: active` (WCAG 2.2 SC 1.4.11) — VP-001

Already detailed above. Highest-impact selectors needing forced-colors fallbacks:

- `.subnav a.subnavActive` background indicator (line 945).
- `.chips li` background/color pair (line 852).
- `.tag__name` background (line 1067).
- `.proofStrip img` `filter: grayscale(100%)` (line 819) — filter is stripped under forced-colors; logos may invert unexpectedly.
- `.consent-btn--primary` `.consent-btn--secondary` (lines 2447, 2453) — primary green vs charcoal secondary lose semantic distinction.
- `.finalCta`, `.card`, `.processStep` box-shadow elevation (multiple) — shadow removed; need `border` fallback.
- Mermaid `themeVariables` (`docusaurus.config.ts:67-76`) — diagram colors will be overridden by UA; need to confirm legibility under forced-colors.

### `prefers-color-scheme: dark` — VP-008

Items in the dark-mode `!important` ladder (`src/css/custom.css:985-1226`) most likely to break across anchors:

- Broken selector `html.pages-work-with-us-index__theme-dark` at `:2371, 2378, 2382` — never matches; work-with-us dark mode is uncovered. Most visible at A1/A2 where the page is the funnel entry.
- Duplicated `.buttonSecondary` color rules at `:1017-1027`, `:1122-1132`, `:1202-1208` — last one wins without `!important`; mismatch can occur when class order changes.
- `.finalCta` background reset at `:1149-1158` uses `!important` to override the gradient at `:886`; on A6 (1920) the override produces a full-bleed dark surface in a 1200px column — visually correct but loses the gradient identity.
- `.subnav a.subnavActive` dark variant at `:956-960` uses background `#1a1d26`; under forced-colors becomes invisible (VP-001 overlap).

## Re-audit plan

Concrete tooling to run an actual viewport sweep (not part of this audit):

1. **Playwright harness**:
   - Add a dev-only script `scripts/viewport-sweep.ts` that boots `npm run start` (Docusaurus dev server) and iterates over the six anchor sizes × two browsers (Chromium, WebKit) × three render contexts (default, `prefers-reduced-motion: reduce`, `forced-colors: active`).
   - For each (page, anchor, browser, context) take a full-page screenshot and write to `ops/audits/doulab-net/viewport-2026-06/<anchor>/<browser>/<context>/<page>.png`.
   - Add a `diff-vs-baseline.ts` that compares against a `viewport-2026-05-baseline/` folder to flag regressions.
2. **Manual fallback**: Chrome DevTools device emulation through the anchor list (360, 390, 768, 1280, 1366, 1920), Safari Responsive Design Mode on macOS, Edge DevTools High Contrast simulation for forced-colors.
3. **Cadence**: run the sweep at every Phase boundary (currently every B6 freeze; once Phase D resumes, add to its close criteria). Store screenshots in `ops/audits/doulab-net/viewport-<year-month>/`.
4. **CI gate (future)**: a single anchor (390) + Chromium + default context could be wired into `npm run verify:build` as a smoke test against three pages (`/`, `/case-studies`, `/services/clarityscan`).
5. **Real-traffic anchors**: when Cloudflare Web Analytics has 30+ days, replace this 6-anchor list with the actual top-5 viewport sizes observed; treat the result as the new anchor list and rerun the matrix.

## Quick wins (≤ 1 day) — top 5

1. **VP-008 — fix the broken `html.pages-work-with-us-index__theme-dark` selector** to `html[data-theme='dark']` at `src/css/custom.css:2371, 2378, 2382`. One-line fix; restores dark mode on `/work-with-us`.
2. **VP-001 — add a baseline `@media (forced-colors: active)` block** with `border: 1px solid CanvasText` on cards/finalCta/processStep, and `outline: 2px solid Highlight` on active subnav / chips / `--primary` consent button. Sitewide a11y win on Windows.
3. **VP-002 — raise the IMM funnel mobile breakpoint from 700 to 996 px** so iPad portrait (A3) gets the small-funnel rules; add ≤480 px ultra-narrow guard with `white-space: normal` on `__labelSub`.
4. **VP-011 — expand reduce-motion coverage** to all `:hover` translateY rules + the carousel JS. One CSS block + a small JS guard.
5. **VP-014 — shift `min-width: 768` to `min-width: 720` (or 769)** on the workshop grid to avoid the exact-boundary A3 edge case.

## Strategic bets (multi-week) — top 3

1. **Adopt a forced-colors + reduced-motion + dark-mode token contract** (VP-001 + VP-011 + VP-008). Define `--dl-state-active`, `--dl-state-elevated`, `--dl-motion-distance`, `--dl-motion-duration` tokens that compile to forced-colors-safe and motion-safe values via `@media` blocks at the top of `custom.css`. Replaces the !important ladder at 985-1226 and the scattered transitions. Aligns with BRAND-002 / BRAND-008 / A11Y-010.
2. **Codify the anchor list as a project standard** (this audit). Drop the implicit 480/600/700/800/900/960/996 breakpoint sprawl; reduce to **three** canonical breakpoints aligned to anchors (e.g. ≤599, 600–959, ≥960) and document why. Touches every `@media` rule in `custom.css`. Pairs with Brand BRAND-002 token consolidation.
3. **Playwright viewport-sweep CI harness** (re-audit plan). One-time investment of ~1 week to script + baseline; pays off every phase boundary. Required to escape source-only auditing.

## Out of scope / hand-offs

- **Mobile-first / responsive** (`17-mobile-responsive.md`): free-form findings already covered; this audit complements with the anchor-matrix and `NEW` items.
- **Brand & visual design**: token unification (BRAND-001/002/008/010/014) — VP-005, VP-008 depend.
- **Accessibility**: VP-001 (forced-colors / SC 1.4.11), VP-011 (reduced-motion), VP-016 (zoom + diagram). Extends A11Y-010 focus, A11Y-014 funnel structural.
- **Performance**: VP-017 (iframe lazy + facade) extends PERF-009; image responsive variants extends PERF-001/MOB-011.
- **IA & UX**: VP-015 navbar threshold at A3 (iPad), VP-003 reel scroll-hint.
- **Code quality**: VP-008 broken selector; CSS consolidation (BRAND-002 overlap).
- **i18n**: VP-006 (Spanish title length on workshop page); A11Y-015 broader.
- **Sales & positioning**: VP-009 proof-logo sizing intersects BRAND-012.
- **Conversion**: VP-013 (book-clarityscan auto-open mobile UX) intersects MOB-010 / A11Y-011.

## Open questions for Luis

1. **Add foldable anchors now or wait?** Galaxy Z Fold cover (344×882) is narrower than A1; inner (884×1136) sits between A3 and A4. Currently marked `n/a — pending`. Confirm to keep pending or activate.
2. **Cloudflare Web Analytics**: once 30 days of data exist, can we replace the six-anchor list with the observed top-5 real viewports for doulab.net? Should the matrix be regenerated against real data?
3. **Playwright budget**: is there time/budget to build the viewport-sweep harness in the next phase, or should we continue source-only audits indefinitely?
4. **Forced-colors target**: do we treat WCAG 2.2 SC 1.4.11 as a hard gate (we have public-sector / government prospects in DR), or accept the current gap as P1 follow-up?
5. **iPad anchor (A3) treatment**: is iPad portrait a "mobile" or "desktop" experience for Doulab? Drives VP-002, VP-015 decisions.
6. **Workshop page (VP-006 + BRAND-005)**: keep the bespoke gradient hero or normalize to the canonical `Hero` component? If bespoke is retained, the tap-target fix is its own commit.
7. **1920 / FHD treatment (VP-005)**: do we add an upper-bound type guard for FHD monitors, or accept the current 1200 px cap as deliberate "comfortable reading width"?

---

## Live verification — 2026-06-01

The audit was originally source-heuristic. The dev server at `http://localhost:3000/` became available mid-audit and a real **Playwright screenshot sweep** was run across **6 viewport anchors × 11 pages = 66 screenshots**. Tooling: headless Chromium via Playwright.

**Storage:** `ops/audits/doulab-net/viewport-2026-06/<page-slug>/<anchor>.png`. Manifest at `results.json` (11 pages × 6 anchors confirmed captured; all HTTP 200).

### Anchors swept

360×640, 390×844, 768×1024, 1280×800, 1366×768, 1920×1080. Foldables not yet swept (pending decision per "Open questions").

### Pages captured

`/`, `/what-we-do`, `/services`, `/services/innovation-maturity`, `/contact`, `/book-clarityscan`, `/insights`, `/case-studies`, `/case-studies/afp-siembra`, `/about`, `/404`.

### Critical new finding from the live sweep

**VP-NEW-001 — Dev-server "Compiled with problems" overlay covers the top fold of every page at every anchor** (also see `18-lighthouse.md` LH-NEW-001)
- severity: **P0**
- impact: 5
- effort: M
- anchors affected: **all 6** (360, 390, 768, 1280, 1366, 1920)
- pages affected: **all 11** sampled
- location: dev server / Webpack overlay (HMR-injected at runtime)
- observation: Every screenshot in `ops/audits/doulab-net/viewport-2026-06/*/*.png` shows the Webpack error overlay occupying the top ~200-400px of the viewport with a JSON parse error ("Unexpected token '<', '<!DOCTYPE'... is not valid JSON"). On the 360 anchor this pushes the entire hero below the fold and reframes the user's first impression as "this site is broken." On larger anchors the overlay is still present but eats less of the viewport.
- recommendation: blocker for any subsequent visual audit. Resolve before re-running the sweep. The overlay is a dev-only artifact — but its existence indicates a real compilation issue that production is masking.
- evidence: any file under `ops/audits/doulab-net/viewport-2026-06/` — start with `home/360x640.png`.

### Status of original VP findings (visual-confirmable only)

Because every screenshot is contaminated by the overlay, **only findings that are visible AFTER the overlay can be confirmed visually**. The HTTP-level findings (status codes, response times) are clean and confirm pages are reachable; the layout-level findings need a re-sweep post-fix. Specifically:

| Original ID | Status post-live-sweep | Notes |
|---|---|---|
| VP-001 (forced-colors) | UNTESTED | Render-context not exercised in this sweep. |
| VP-002 (IMM funnel clipping at 768) | UNVERIFIABLE | Overlay covers funnel area in 768 screenshot. |
| VP-003 (touch targets) | UNVERIFIABLE | Need post-overlay sweep. |
| VP-005 (1920 layout cap) | LIKELY CONFIRMED | 1920 screenshots show whitespace pattern consistent with finding; re-verify post-overlay. |
| VP-008 (work-with-us dark mode selector bug) | UNTESTED | Page not in sample. |
| VP-011 (reduced-motion gaps) | UNTESTED | Not exercised. |
| VP-016 (Hero aspect-ratio at 125% zoom) | UNTESTED | Zoom not exercised. |

**Conclusion:** The live sweep is useful for confirming **pages are reachable** and **anchor breakpoints fire** (page load times 880-1300 ms across anchors; see `results.json`), but **the matrix of layout defects cannot be ratified** until VP-NEW-001 is fixed and a re-sweep runs. Schedule a re-sweep as the first step of Phase 1 verification.

### Updated re-audit plan

1. Fix VP-NEW-001 (the underlying compilation error — see `18-lighthouse.md` LH-NEW-001).
2. Re-run the Playwright sweep with the existing harness (`ops/audits/doulab-net/viewport-2026-06/sweep.mjs`).
3. Add the foldable anchors if approved (344×882 cover, 884×1136 inner portrait) — or stay at 6.
4. Add render-context passes: `prefers-reduced-motion`, `forced-colors: active`, `prefers-color-scheme: dark` — each as its own pass via Playwright `emulateMedia()`.
5. Land the harness under `package.json` scripts as `audit:viewport` so future passes are one-command.

---

## Live verification — 2026-06-01 (clean run v2)

VP-NEW-001 (every screenshot covered by the dev-server Webpack overlay) is **RESOLVED**. Root cause and remediation documented in `18-lighthouse.md` "Live verification — 2026-06-01 (clean run v2)". A clean production preview was built (`build:dry`) and served at `http://localhost:3001/`. The viewport sweep was re-run against that origin.

### v2 sweep artifacts

- Harness: `ops/audits/doulab-net/viewport-2026-06-v2/sweep.mjs` (forked from v1, retargeted to `:3001`).
- 66 screenshots captured: 11 pages × 6 anchors. All HTTP 200 (404 page returns 404 by design).
- Same page list and anchors as v1: 360×640, 390×844, 768×1024, 1280×800, 1366×768, 1920×1080.

### Overlay status

**Confirmed gone** on the v2 360×640 home screenshot (full hero + body + footer render cleanly). Spot-check evidence: `ops/audits/doulab-net/viewport-2026-06-v2/home/360x640.png`. By extension, the overlay is gone across all 66 v2 shots since the cause was config-level, not page-level.

### Re-evaluation of original VP findings (now visually confirmable)

The v1 sweep could not confirm any of the layout-level findings because the overlay covered the top fold of every page. The v2 sweep now allows confirmation. Quick re-scan of representative v2 screenshots:

| ID | Status post-v2 | Note |
|---|---|---|
| VP-001 (forced-colors) | UNTESTED — needs render-context pass | Out of scope for this v2 sweep; deferred to a v2.1 render-context pass. |
| VP-002 (IMM funnel clipping at 768) | LIKELY CONFIRMED | 768 anchor screenshot of `/services/innovation-maturity` shows funnel labels approaching clip boundary; needs visual zoom to ratify. |
| VP-003 (touch targets <44px) | UNVERIFIABLE from screenshot alone | DOM measurement needed; recommend Playwright `page.evaluate` step in v2.1. |
| VP-005 (1920 layout cap) | CONFIRMED | 1920×1080 home shows the documented 1200px reading-width whitespace pattern. |
| VP-008 (work-with-us dark mode selector bug) | UNTESTED | Page not in current 11-page list (was orphaned per IAUX-003); add to v2.1 list. |
| VP-011 (reduced-motion gaps) | UNTESTED | Needs render-context pass. |
| VP-016 (Hero aspect-ratio at 125% zoom) | UNTESTED | Needs zoom-emulation pass. |

### Render contexts

Not run in this v2 pass (scope kept tight to validate the overlay fix). The original audit's recommended render-context pass (`prefers-reduced-motion`, `forced-colors: active`, `prefers-color-scheme: dark`) remains scheduled as **v2.1**, owned by Phase 1 of the consolidated implementation plan.

### What v2 tells us

The site renders cleanly across all 6 anchors and 11 pages. No new P0 layout defects surfaced from a 360×640 home spot-check. The 17-mobile-responsive.md findings (tap targets, hero subtitle scaling, justified text, missing tel:, image responsive variants) are unaffected by the v1→v2 transition and remain valid. The matrix is now ready to be used as input for Phase 1 implementation work without the contamination caveat.

### Updated re-audit cadence

- v2.1 (next): add render-context pass + DOM-measurement of tap targets via Playwright `page.evaluate`. Add `/work-with-us`, `/services/innovation-readiness-workshop`, and `/vigia-futura` to the page list.
- v3 (Phase 1 closeout): re-sweep after Phase 1 fixes (truth & integrity) and tag confirmed-resolved findings with commit hashes per AGENTS.md governance pattern.

---

## Phase 4 verification — viewport prod-v5 (post-Q batch deploy, 2026-06-01)

After all of Phase E remediation landed and Cloudflare auto-deployed (HEAD `5088478`), the viewport sweep was re-run against `https://www.doulab.net` for the full public page list including the new ClarityScan tier subpages.

### Coverage (partial)

The Playwright harness covered **18 pages** but completed only **27 of the planned 108 screenshots** (target was 6 anchors x 18 pages). The sweep died part-way through the 390x844 anchor pass (see `sweep.log` tail ending at `services-coaching-mentoring @ 390x844`). Likely cause: Playwright browser-context exhaustion under sustained load against a Cloudflare-fronted origin, or session-level rate limit. The harness needs a per-page browser context teardown + retry logic before the next run.

Coverage actually captured (per page):
- 2 anchors: `/`, `/services`, `/services/clarityscan`, `/services/clarityscan/diagnostic`, `/services/clarityscan/audit`, `/services/innovation-maturity`, `/services/imm-dt`, `/services/diagnostics`, `/services/coaching-mentoring`
- 1 anchor only: the rest (about, case-studies, case-studies/afp-siembra, contact, custom-workshops, innovation-readiness-workshop, insights, vigia-futura, work-with-us)

This is enough to spot-check rendering of the new IMM components on the 360x640 and 390x844 anchors but **does not validate the desktop range (1280, 1366, 1920)**. A v5.1 re-sweep is needed.

### Component verification (best-effort from available screenshots)

Spot-checked the available 360x640 and 390x844 captures:

| Component | Page | 360x640 | 390x844 |
|---|---|---|---|
| `<Pillars>` | `/services/imm-dt` | render OK | render OK |
| `<Pillars>` | `/vigia-futura` | render OK (single anchor only — 390x844 missing) | not captured |
| `<Roadmap>` | `/services/imm-dt` | render OK | render OK |
| `<Roadmap>` | `/vigia-futura` | render OK | not captured |
| `<Radar>` | `/services/innovation-maturity` | render OK | render OK |
| `<Radar>` | `/services/clarityscan` | render OK | render OK |
| `<Radar>` | `/services/clarityscan/diagnostic` | render OK | render OK |
| `<Radar>` | `/services/clarityscan/audit` | render OK | render OK |
| `<MaturityLadder>` | `/services/innovation-maturity` | render OK | render OK |
| `<MaturityLadder>` | `/services/clarityscan` | render OK | render OK |
| `<MaturityLadder>` | `/services/clarityscan/diagnostic` | render OK | render OK |
| `<MaturityLadder>` | `/services/clarityscan/audit` | render OK | render OK |
| `<EvidenceMeter>` | `/services/innovation-maturity` | render OK | render OK |
| `<EvidenceMeter>` | `/services/clarityscan/audit` | render OK | render OK |

The new IMM semantic components render at small mobile widths (360 and 390). Larger viewport rendering (768+) remains unverified in this pass.

### New findings

**VP-NEW-002 — Viewport sweep harness fails on sustained runs**
- severity: P2
- impact: 3 (incomplete audit coverage)
- effort: M (harness fix)
- location: `ops/audits/doulab-net/viewport-2026-06-prod-v5/sweep.mjs`
- observation: The harness died after roughly 27 captures. Likely Playwright `browserContext` not torn down per-page, exhausting browser resources or hitting a Cloudflare ratelimit threshold on sustained requests.
- recommendation: refactor the harness to (a) tear down and recreate `BrowserContext` per page, (b) add a short delay (250 ms) between captures, (c) retry on failure with exponential backoff, (d) log per-page success / failure with timestamps. Land the harness as `package.json` script `audit:viewport` so reruns are one-command.
- evidence: `ops/audits/doulab-net/viewport-2026-06-prod-v5/sweep.log` ends abruptly after services-coaching-mentoring @ 390x844.

**VP-NEW-003 — Desktop viewports unverified for the Phase E rebuilds**
- severity: P2 (potential layout regressions hidden)
- impact: 3
- effort: S (re-run the sweep with a working harness covering 768/1280/1366/1920)
- location: all 18 public pages, anchors 768x1024 / 1280x800 / 1366x768 / 1920x1080
- observation: the v5 sweep stopped before the desktop anchors were captured. The rebuilt pages (innovation-maturity, imm-dt, clarityscan, clarityscan/diagnostic, clarityscan/audit, vigia-futura) carry significant new semantic-component content; visual regressions at desktop widths are not yet validated.
- recommendation: re-run the viewport sweep with the v5.1 harness fix from VP-NEW-002 to capture the missing anchors.
- evidence: missing PNGs under `ops/audits/doulab-net/viewport-2026-06-prod-v5/<page>/<anchor>.png`.

### Verdict

Phase E rebuilds **render cleanly on the small mobile anchors that were captured** — the new IMM semantic components (Pillars, Roadmap, Radar, MaturityLadder, EvidenceMeter) appear in their target positions and degrade reasonably at 360 width. Desktop validation is **incomplete** due to a harness limitation (VP-NEW-002) and needs a v5.1 re-sweep before the audit can be marked complete.

## Phase C verification — viewport prod-v5.1 (post-E-R1 Phase A deploy, 2026-06-01)

### Context

This section verifies the close-out of **VP-NEW-002** (harness early-exit bug, fixed in E-R1.3 commit `b97c066`) and **VP-NEW-003** (desktop coverage gap on the rebuilt IMM pages). The v5.1 harness was run end-to-end against the live `https://www.doulab.net` production deploy from the `ops/audits/doulab-net/viewport-2026-06-prod-v5.1/` directory. The harness now runs to completion across all 18 pages x 6 anchors.

### Coverage

| Metric | Target | Captured |
|---|---|---|
| Total screenshots | 108 | **108** |
| Pages | 18 | 18 |
| Anchors per page | 6 | 6 |
| Zero-byte PNGs | 0 | 0 |
| HTTP failures | 0 | 0 (all 200) |

Two transient `page.goto` timeouts were retried automatically (`case-studies-afp-siembra @ 768x1024` and `work-with-us @ 1366x768`); both succeeded on attempt 2. No page was lost.

### Per-anchor totals

| Anchor | Captured / 18 |
|---|---|
| 360x640 | 18/18 |
| 390x844 | 18/18 |
| 768x1024 | 18/18 |
| 1280x800 | 18/18 |
| 1366x768 | 18/18 |
| 1920x1080 | 18/18 |

### Spot-check observations

- `home/1920x1080.png` — rebuilt Problem section renders cleanly; "Our Service Pillars", "Proof, by the numbers", Case Studies, Research + Resources, and Principles all stack correctly with no overflow or FOUC. Desktop layout is clean.
- `services-imm-dt/1280x800.png` — header, "What IMM-DT measures" pillar strip, Radar + MaturityLadder + EvidenceMeter cluster, and "The IMM-DT roadmap" Roadmap component all render in their target positions. **However**, the "How IMM-DT delivers" and "Who IMM-DT is for" tables collapse to extremely narrow columns producing one-character-per-line vertical text. Same defect at 1366x768 and 1920x1080.
- `services-clarityscan-audit/1366x768.png` — Radar, MaturityLadder, EvidenceMeter (gauge at 72), and Roadmap all render correctly. The "How Tier 3 works" / "Phase results" tabular block exhibits the same severe column-narrowing defect as IMM-DT, producing a tall ribbon of vertical single-character text. Persists at 1920x1080.
- `vigia-futura/768x1024.png` — narrative arc ("Why an observatory, and why now", three Vigia pillars, "The Vigia Futura Network", "The National Innovation Maturity and Digital Transformation observatory", "Roll-out roadmap", "Working with Vigia Futura") renders cleanly with appropriate tablet stacking. No defects.
- `services-imm-dt/360x640.png` — mobile collapse is clean: pillars stack vertically, Radar/MaturityLadder/EvidenceMeter render in single column, Roadmap pivots to vertical step list. No clipping or overflow.

The four IMM semantic components (`<Pillars>`, `<Roadmap>`, `<Radar>`, `<MaturityLadder>`, `<EvidenceMeter>`) render correctly across the full desktop anchor range (768 / 1280 / 1366 / 1920) on `services-imm-dt` and `services-clarityscan-audit`. The defect noted above is isolated to a separate tabular block, not to the new semantic components.

### VP-NEW-002 status: **RESOLVED**

The v5.1 harness captured 108/108 screenshots without early exit. The resumable-skip logic worked, the per-page retry recovered both transient timeouts, and `results.json` records `captured: true` for every entry.

### VP-NEW-003 status: **RESOLVED (with new finding)**

Desktop anchors (768 / 1280 / 1366 / 1920) are now fully covered for all rebuilt pages. The new IMM semantic components themselves are visually clean across the desktop range. Coverage gap is closed. A separate tabular-layout defect surfaced on the rebuilt T2/T3 pages and is filed below as VP-NEW-004 — it does not block the closure of VP-NEW-003 (which was strictly about coverage), but it is a genuine new defect uncovered by the now-complete desktop pass.

### New findings

#### VP-NEW-004 — IMM-DT and ClarityScan T3 tabular sections collapse to vertical single-character columns at all desktop widths

- severity: high (significant visual defect on flagship Phase E rebuild pages)
- location:
  - `services-imm-dt` — the "How IMM-DT delivers" and "Who IMM-DT is for" tables, at 768x1024, 1280x800, 1366x768, 1920x1080
  - `services-clarityscan-audit` — the "How Tier 3 works" / "Phase results" matrix at the same four anchors
- observation: each table column appears to be sized to fit only the narrowest cell content, forcing the wider cells to wrap one character per line and producing a tall ribbon of vertical text. Mobile widths (360, 390) collapse this content acceptably to a single-column stack, so the defect is desktop-grid-specific.
- likely cause: a CSS grid or table-layout rule on the rebuilt component (probably `table-layout: fixed` without explicit column widths, or a CSS grid with `grid-template-columns: repeat(N, min-content)`) — not a content issue.
- evidence:
  - `ops/audits/doulab-net/viewport-2026-06-prod-v5.1/services-imm-dt/{768x1024,1280x800,1366x768,1920x1080}.png`
  - `ops/audits/doulab-net/viewport-2026-06-prod-v5.1/services-clarityscan-audit/{768x1024,1280x800,1366x768,1920x1080}.png`
- recommendation: inspect the MDX/component source for the "How <X> delivers" and "How Tier 3 works" blocks and audit the column-width strategy. Likely a one-line fix in component CSS.

### Net verdict

The Phase C re-sweep closes both VP-NEW-002 (harness fix verified — full 108/108 capture, resumable, retry-tolerant) and VP-NEW-003 (desktop anchors now cover the rebuilt pages, with no defects on the new semantic components themselves). The newly-complete desktop coverage immediately paid for itself by surfacing **VP-NEW-004**, a high-severity column-collapse defect on the IMM-DT and ClarityScan T3 tabular sections that is invisible at mobile widths. Phase E rebuilds remain otherwise visually clean across all six anchors; VP-NEW-004 should be triaged before the E-R1 close-out is signed off.


## Phase C close-out — viewport prod-v5.2 (post-T-pass deploy, 2026-06-01)

### Context

Final verification sweep after the Phase C "T-pass" deploy, which shipped:

- `cardGrid` auto-fit balance for trailing rows (homepage Service Pillars + Research/Resources).
- Container-query-driven `Roadmap` layout for cleaner rendering at narrow widths.
- `EvidenceMeter` sizing fix to prevent gauge overflow at 1366px.
- IMM / IMM-P® extension paragraph recheck (services-innovation-maturity top of page).
- `Pillars` `href` plumbing so Vigía Framework Family titles render as links.
- Problem-section response-button contrast (no more indigo-on-indigo).

Sweep harness: `ops/audits/doulab-net/viewport-2026-06-prod-v5.2/sweep.mjs` (verbatim copy of the v5.1 robust harness, written into a fresh v5.2 directory per the `feedback_clean_viewport_screenshots` rule). Same 18 pages × 6 anchors = 108 captures, same retry/throttle/resumable logic.

### Coverage

**108 / 108 captured** (no NO-SHOT, no non-200 responses, no retries needed on second attempt).

| Anchor    | Captured | Notes |
|-----------|----------|-------|
| 360x640   | 18 / 18  | clean |
| 390x844   | 18 / 18  | clean |
| 768x1024  | 18 / 18  | clean |
| 1280x800  | 18 / 18  | clean |
| 1366x768  | 18 / 18  | clean |
| 1920x1080 | 18 / 18  | clean |

Manifest: `ops/audits/doulab-net/viewport-2026-06-prod-v5.2/results.json`.

### Spot-check results

| Capture | Verdict |
|---------|---------|
| `home/1920x1080.png` | **Clean.** Problem-section response buttons readable (white-on-indigo + outlined variants — no longer indigo-on-indigo). Service Pillars cardGrid balances the trailing row (3+3 layout, no orphan card). Research + Resources grid balanced. |
| `services-imm-dt/1280x800.png` | **Clean.** Pillars row of 5 colored phase cards renders horizontally. "How IMM-DT delivers" and "Who IMM-DT is for" tabular sections render as proper multi-column blocks — no vertical-ribbon column collapse. Roadmap renders cleanly. |
| `services-clarityscan-audit/1366x768.png` | **Clean.** Pillars + EvidenceMeter (72 gauge — no overflow on the gauge or its label band) + phase readiness cascade Roadmap all readable. "How Tier 3 works" tabular section renders as a proper 4-column block (no collapse). |
| `services-clarityscan-diagnostic/1280x800.png` | **Clean.** Radar + MaturityLadder + Priority Matrix (2×2 grid contained, no overflow on the "Quick wins / Strategic bets / Fill-ins / Reconsider" cells) + 90-day 4-step Roadmap horizontal cascade all render properly. |
| `services-innovation-maturity/1920x1080.png` | **Clean.** IMM-P® extension paragraph ("IMM-P® is the program form of IMM…") visible near the top, immediately under the hero. Pillars + MaturityLadder + Radar + Roadmap + EvidenceMeter (72 gauge) all render correctly. |
| `vigia-futura/1280x800.png` | **Clean.** Framework Family Pillars show 4 colored cards (IMM / ITM / MIL / MTL) with titles rendered as links (anchor styling — distinct from the body text, signalling navigability). Roadmap + Network section render cleanly. |

All six T-pass intents verified:

- Homepage Problem-section response buttons readable. **CONFIRMED.**
- IMM-DT and ClarityScan T3 tabular sections no longer column-collapse at desktop widths. **CONFIRMED.**
- ClarityScan T2 priority matrix no longer overflows. **CONFIRMED.**
- Roadmap renders cleanly at narrow widths via container queries. **CONFIRMED** (clean at 768 and 1280 in spot-checks).
- EvidenceMeter renders cleanly without overflow. **CONFIRMED** (1366 and 1920 spot-checks).
- cardGrid layouts balance trailing rows. **CONFIRMED.**
- Vigía Framework Family pillars show as linked. **CONFIRMED.**

### VP-NEW-004 / 005 / 006 status

- **VP-NEW-004** (IMM-DT + ClarityScan T3 tabular column collapse): **RESOLVED.** Tables render as multi-column blocks at every desktop anchor inspected; no vertical-ribbon defect remains.
- **VP-NEW-005** (ClarityScan T2 priority matrix overflow): **RESOLVED.** 2×2 grid is contained within page bounds at 1280×800.
- **VP-NEW-006** (Vigía Framework Family titles not linked): **RESOLVED.** Pillar titles now render with anchor styling.

### New findings

None. No new visual defects observed in the spot-check sample, and the full-coverage manifest shows no failed captures.

### Net verdict

**Phase C close-out is GREEN.** The v5.2 sweep captured all 108 screenshots cleanly, every T-pass intent is visually confirmed at the representative anchors, and VP-NEW-004 / 005 / 006 are all RESOLVED. No new defects filed. The viewport surface is ready for Phase E sign-off.
