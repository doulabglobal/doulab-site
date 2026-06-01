# Mobile-first / Responsive Audit — doulab.net — 2026-06-01

## Scope

Source-only audit of responsive behavior for doulab.net (Docusaurus v3 default theme + custom CSS, plus a minimal swizzle of `NotFound`). The audit examines breakpoints, touch target sizing, tap-to-call / tap-to-mail affordances, mobile navbar usability, hero scaling, image responsiveness, font sizing, Mermaid diagrams on small screens, table overflow, footer collapse, the `ImmFunnelDiagram` on small viewports, and form/CTA usability on the `book-clarityscan` and `contact` pages. Read-only; no rendering performed. Viewports considered: 360 / 390 / 768 / 1024.

## Method

- Read `doulab-site/AGENTS.md`, `docs/ops/doulab-net-backlog.md`.
- Read `src/css/custom.css` end to end (2,464 lines), inventoried every `@media` query and mobile-relevant rule.
- Read marketing primitives: `src/components/Hero.tsx`, `FinalCta.tsx`, `PageHeader/PageHeader.tsx`, `CardGrid/CardGrid.tsx`, `case-studies/CaseStudyCards.tsx`, `diagrams/ImmFunnelDiagram.tsx`.
- Read `src/pages/book-clarityscan.tsx`, `src/pages/contact/index.tsx`.
- Read `docusaurus.config.ts` to count navbar items and footer columns.
- Spot-checked `static/img/` for responsive variants (avif/webp/jpg + width descriptors).
- Cross-referenced `tel:` / `mailto:` usage via Grep.

Constraints: no DOM, no Lighthouse, no live measurement; findings rest on CSS/JSX source. Where a finding depends on shipped DOM we say so.

## Findings (ranked)

### MOB-001 — Hero two-column layout keeps a 2rem right-padding on the text column with no mobile override
- Severity: high. Impact: 4. Effort: S. Viewports: 360 / 390 (also 768 when content is short).
- Location: `src/css/custom.css:1330-1333` (`.components-hero__content { flex: 1 1 460px; padding-right: 2rem; }`); also `src/css/custom.css:1606` (`.pages-b4-p2__heroCopy`). Used by `src/components/Hero.tsx:101-102`.
- Observation: `flex: 1 1 460px` forces the text column to wrap below the media when viewport < ~460px + media basis, which is correct. However `padding-right: 2rem` is never reset for the wrapped/stacked state, leaving asymmetric horizontal padding on phones (text inset 2rem on the right but only the `.heroBanner` 1rem on the left). Result: title/body shifted left, reduced reading width on 360–390 px screens.
- Recommendation: add `@media (max-width: 700px) { .components-hero__content, .pages-b4-p2__heroCopy { padding-right: 0; } }` and verify visually after build.
- Evidence: `src/css/custom.css:1330`, `src/css/custom.css:1606`.

### MOB-002 — `.heroSubtitle` is a hard 2.25rem with no fluid scaling
- Severity: high. Impact: 4. Effort: S. Viewports: 360 / 390.
- Location: `src/css/custom.css:404-409`.
- Observation: While `.heroTitle` uses `clamp(2rem, 1.8rem + 1vw, 3rem)`, the subtitle is fixed at 36 px and is rendered on most marketing heroes (Hero.tsx:105). On a 360 px viewport a subtitle like "Book a 20-minute discovery call." overflows visual hierarchy and frequently wraps to 3 lines, pushing CTAs below the fold. The `.components-hero__subtitle { text-align: justify; }` rule (`src/css/custom.css:1336`) compounds this on narrow screens, producing rivers and excessive word spacing.
- Recommendation: `font-size: clamp(1.25rem, 1rem + 2vw, 2.25rem)`; drop `text-align: justify` below 700 px or remove it entirely (justification at narrow widths is an anti-pattern for readability).
- Evidence: `src/css/custom.css:404`, `src/css/custom.css:1336-1337`.

### MOB-003 — Primary, secondary, and card CTAs fall below the 44×44 px tap-target minimum
- Severity: high. Impact: 5. Effort: S. Viewports: all (especially 360 / 390).
- Location: `src/css/custom.css:659-685` (`.buttonPrimary` / `.buttonSecondary` use `padding: .6rem 1rem` and `font-size: .95rem`); `src/css/custom.css:333-346` (`.cardCta` uses `padding: .5rem .9rem; font-size: .92rem`); `.dl-cardCta` `src/css/custom.css:77-87` identical.
- Observation: Computed height ≈ 14.4 px font + 19.2 px vertical padding ≈ 33.6 px (cardCta ≈ 30 px). WCAG 2.2 (2.5.8) recommends ≥ 24×24 CSS px and the iOS/Android HIG recommend 44 px. Only `.customWorkshopsFormats .cardFooter .cardCta` enforces `min-height: 44px` (`src/css/custom.css:1084-1091`). Site-wide CTAs do not.
- Recommendation: add to base `.buttonPrimary,.buttonSecondary,.cardCta,.dl-buttonPrimary,.dl-buttonSecondary,.dl-cardCta { min-height: 44px; display: inline-flex; align-items: center; }`. Verify it does not break the workshop card override.
- Evidence: `src/css/custom.css:333`, `:659`, `:1084`.

### MOB-004 — No tap-to-call / tap-to-email anywhere on the site
- Severity: medium. Impact: 4. Effort: S. Viewports: all (mobile).
- Location: site-wide; only `mailto:` instances are in `src/pages/privacy-terms.tsx` (legal/DPO), and the `Email` link in the footer (`docusaurus.config.ts:120`). No `tel:` links exist (Grep on `src/**`).
- Observation: Contact page (`src/pages/contact/index.tsx`) intentionally avoids forms but also avoids a `mailto:hello@doulab.net` or `tel:` link, even though the page advertises `EMAIL = 'hello@doulab.net'` (line 17) and renders only booking CTAs. For Latin American/Caribbean mobile users used to tapping a phone or email row, this is a missed low-friction path. The Phone icon on the Contact page (`PhoneCall` from lucide) is decorative, not actionable (line 7, 185).
- Recommendation: add an explicit tap-to-email row on Contact (`<a href="mailto:hello@doulab.net">`) with the `Mail` icon already imported; consider a `tel:` row if a published number exists. Keep booking as primary.
- Evidence: `src/pages/contact/index.tsx:7-17`, `src/pages/contact/index.tsx:104-158`.

### MOB-005 — Navbar has seven items, no mobile breakpoint customization
- Severity: medium. Impact: 3. Effort: M. Viewports: 360 / 390 / 768.
- Location: `docusaurus.config.ts:85-93`.
- Observation: Home / What we do / Case Studies / Insights / About / Contact / GitHub = 7 items. Docusaurus default uses the built-in hamburger drawer below 996 px, so the count fits visually, but on 360 px the drawer items are stacked plain text with no large-tap touch padding override. The "GitHub" external item is the lowest-value entry for mobile conversion users; consuming a slot in the drawer.
- Recommendation: hide GitHub from mobile drawer (e.g., `mobile: false` is not supported by classic theme — move GitHub into footer only). Consider grouping nav into a "Services" dropdown to reduce drawer length. Add `.navbar-sidebar__item .menu__link { min-height: 44px; }` override in `custom.css` to widen tap targets in the drawer.
- Evidence: `docusaurus.config.ts:82-94`.

### MOB-006 — `ImmFunnelDiagram` clip-path trapezoids degrade on narrow viewports; mobile breakpoint partial
- Severity: medium. Impact: 3. Effort: M. Viewport: 360–480.
- Location: `src/css/custom.css:489-650`; component `src/components/diagrams/ImmFunnelDiagram.tsx`.
- Observation: At ≤700 px the rule `.immFunnel__stack { width: 100%; transform: scale(0.98); }` and `.immFunnel__bar { height: 52px }` apply, but the per-bar width percentages (`p3 76%`, `p4 68%`, `p5 56%` at lines 542-544) are unchanged. On 360 px the smallest bar becomes ~200 px wide with 22 px uppercase bold label and a `<span class="immFunnel__labelSub">` set `white-space: nowrap; font-size: 22px` (`:595-602`) which will overflow horizontally inside `.immFunnel { overflow: hidden }` (`:498`), clipping "IMPROVEMENT". The `.immFunnel__bar--p2 .immFunnel__labelSub` "& VALIDATION" has the same risk.
- Recommendation: at `max-width: 480px` set `.immFunnel__labelSub { white-space: normal; font-size: 14px; }`, scale label font with `clamp`, and raise `p4`/`p5` widths to ≥ 75% to preserve readable inside-bar text. Confirm `overflow: hidden` no longer clips.
- Evidence: `src/css/custom.css:489-650`, `src/components/diagrams/ImmFunnelDiagram.tsx:20-40`.

### MOB-007 — Mermaid surface has `overflow-x: auto` but raw SVG width forced to `auto` on hero diagrams; non-hero diagrams can still trigger horizontal page scroll
- Severity: medium. Impact: 3. Effort: S. Viewports: 360 / 390.
- Location: `src/css/custom.css:1249-1277` (`.mermaid svg { max-width: 100%; height: auto; }` and container `overflow-x: auto`).
- Observation: The base `.mermaid` block (`:1256-1262`) is correctly set to scroll horizontally with `border-radius: 12px; padding: 1rem`. However, the inner `.mermaid svg` rule sets `max-width: 100%` — when Mermaid renders large flowcharts, text labels render at 16 px (`:1250-1253`) and may overflow nodes, making the diagram unreadable rather than overflowing the scroll container. Combined with `overflow-x: auto` on the wrapper, this is workable, but users will not perceive that horizontal scroll is available (no scroll-hint affordance).
- Recommendation: add a scroll-hint shadow on `.mermaid` when content overflows; reduce Mermaid text size to 13–14 px below 700 px via a CSS override; add `aria-label="Diagram, scroll horizontally to view"` on Mermaid wrappers (would require a small swizzle of the Mermaid render component or a wrapper).
- Evidence: `src/css/custom.css:1249-1277`.

### MOB-008 — Tables have no responsive overflow strategy
- Severity: medium. Impact: 3. Effort: S. Viewports: 360 / 390 / 768.
- Location: site-wide. Grep on `custom.css` for `table` returns zero matches. Docusaurus default `table` styling does not wrap in a scroll container.
- Observation: Any MDX page (Innovation Lab Guide chapters, blog) that uses pipe-tables will overflow the viewport on phones with no horizontal scroll affordance — the page itself scrolls horizontally, breaking the rest of the layout.
- Recommendation: add to `custom.css`:
  `.markdown table { display: block; overflow-x: auto; max-width: 100%; }` or wrap tables in a `.tableWrap` utility. Pair with a thin scrollbar style on mobile.
- Evidence: `src/css/custom.css` (no `table` rules).

### MOB-009 — Footer has 4 columns and no mobile-specific collapse rules
- Severity: low. Impact: 2. Effort: S. Viewports: 360 / 390.
- Location: `docusaurus.config.ts:96-137`; `src/css/custom.css:963-983` (footer color only).
- Observation: Footer relies entirely on Docusaurus default responsive behavior (stacks at < 996 px). Column titles ("What we do", "Docs", "Connect", "More") render as one-line links each (15 items total). On 360 px this becomes a long vertical list, which is acceptable but the `Sitemap`, `RSS (XML)`, `Atom (XML)` are low-value mobile links and add 3 rows of scroll. The `Email` `mailto:hello@doulab.net` link is the only tap-to-email on the entire site (good), but is buried.
- Recommendation: collapse footer "More" into a `<details>` on small viewports, or reduce link inventory. Promote `mailto:` and add `tel:` if available.
- Evidence: `docusaurus.config.ts:96-137`.

### MOB-010 — `book-clarityscan` page auto-opens `window.open()` without user gesture and offers a fallback button — popup-blocker behavior unverified
- Severity: high. Impact: 4. Effort: S. Viewports: all (mobile most affected).
- Location: `src/pages/book-clarityscan.tsx:10-19`.
- Observation: `useEffect` calls `window.open(CLARITYSCAN_BOOKING_URL, '_blank', 'noopener,noreferrer')` immediately on mount. iOS Safari and most mobile browsers block popups that are not in response to a user gesture. The fallback `<a class="buttonPrimary">` exists (line 36-45) and inherits the 33 px height (see MOB-003), making the recovery target small.
- Recommendation: remove the auto-`window.open()`, and render the page as a clear paid-first booking landing with a single large primary CTA (≥ 44 px). The current pattern penalizes mobile users with a popup-block warning and a small fallback button.
- Evidence: `src/pages/book-clarityscan.tsx:10-49`.

### MOB-011 — Hero `<picture>` uses `sizes="(max-width: 600px) 100vw, 600px"` but `srcSet` only provides one file per format (no width descriptors)
- Severity: medium. Impact: 3. Effort: M. Viewports: all.
- Location: `src/components/Hero.tsx:55, 71-83, 90-96`; `src/pages/contact/index.tsx:60-66`.
- Observation: The preload `imageSrcSet` is `${avif} 1x, ${webp} 1x, ${jpg} 1x` and each `<source srcSet={file}>` lists a single URL. There is no width descriptor (e.g., `hero-480.avif 480w, hero-960.avif 960w`), so the browser always downloads the full-resolution image regardless of device width. On a 360 px screen this wastes 4–6× the necessary bytes. Latin American / Caribbean mobile users on metered networks are most affected.
- Recommendation: generate 480 / 800 / 1200 / 1600 wide variants per format and emit `srcSet="…480.avif 480w, …800.avif 800w, …1200.avif 1200w"` plus a real `sizes`. This is a build-time asset step, hence M effort.
- Evidence: `src/components/Hero.tsx:55-95`, `static/img/` listing.

### MOB-012 — `.heroBanner` keeps `padding: 2rem 1rem` on mobile, but inside the `Layout`'s `container` paddings can double-pad
- Severity: low. Impact: 2. Effort: S. Viewports: 360 / 390.
- Location: `src/css/custom.css:392-396`; pages like `src/pages/book-clarityscan.tsx:30` use `className={`container ${'pages-book-clarityscan__main'}`}` adding `padding: 2rem 1rem` on top of Infima's `.container` horizontal gutters.
- Observation: Effective horizontal padding on mobile becomes ~32 px (Infima container ~16 px + page module 16 px), reducing line length to roughly 328 px on a 360 px viewport. Acceptable but tight; reading width is squeezed on `book-clarityscan-success`, `legal`, `ecosystems/*` pages that use both `container` and `pages-*__main` padding.
- Recommendation: pick one (the `pages-*__main` or `container`); remove the module padding when wrapping in `container`.
- Evidence: `src/css/custom.css:1671-1681`, `:1777-1797`.

### MOB-013 — `.cardReel` horizontal scroll on home page lacks visible scroll affordance
- Severity: low. Impact: 2. Effort: S. Viewports: 360 / 390 / 768.
- Location: `src/css/custom.css:725-740`.
- Observation: `grid-auto-columns: clamp(280px, 30vw, 360px)` with `overflow-x: auto` and snap mandatory works, but no visual chevron, fade, or shadow indicates more cards exist off-screen. Mobile users frequently miss horizontal scroll reels on first paint.
- Recommendation: add a right-edge linear-gradient fade or a small "Swipe →" microcopy hint; keep the snap behavior.
- Evidence: `src/css/custom.css:724-740`.

### MOB-014 — Consent banner uses `flex-wrap: wrap` but action buttons are 10×14 px padding (~36 px tall), failing tap target minimum
- Severity: medium. Impact: 3. Effort: S. Viewports: 360 / 390.
- Location: `src/css/custom.css:2400-2456`.
- Observation: `.consent-btn { padding: 10px 14px; font-size: 13px; }` resolves to ~38 px tall. On 360 px the banner uses `left:16px; right:16px; bottom:16px` and wraps the actions below the content (good), but the buttons themselves and the close interaction are below 44 px. Privacy-critical control should be easy to hit.
- Recommendation: `min-height: 44px; padding: 12px 16px`; ensure focus-visible outline.
- Evidence: `src/css/custom.css:2439-2455`.

### MOB-015 — `.faqGrid` collapses to 1 column at 900 px but `<summary>` styling has no min-height; entire FAQ row often <40 px tall
- Severity: low. Impact: 2. Effort: S. Viewports: 360 / 390.
- Location: `src/css/custom.css:858-881`.
- Observation: `.faqGrid summary { cursor: pointer; font-weight: 600 }` with `padding: .75rem 1rem` (~12 px + line-height) makes the tap target borderline at typical body font (~32–36 px effective). Easy to mis-tap on small screens, especially adjacent rows.
- Recommendation: `.faqGrid summary { min-height: 44px; display: flex; align-items: center; }`.
- Evidence: `src/css/custom.css:865-875`.

## Quick wins — top 5

1. **MOB-003**: add `min-height: 44px` + `inline-flex; align-items: center` to all primary/secondary/cardCta buttons in one CSS block. Sitewide tap-target compliance with one diff.
2. **MOB-002**: replace `.heroSubtitle` fixed 2.25rem with `clamp(1.25rem, 1rem + 2vw, 2.25rem)` and remove `text-align: justify` on `.components-hero__subtitle`.
3. **MOB-001**: add a `max-width: 700px` reset of `padding-right: 0` on `.components-hero__content` and `.pages-b4-p2__heroCopy`.
4. **MOB-008**: add `.markdown table { display: block; overflow-x: auto; }` and a `.tableWrap` utility.
5. **MOB-010**: remove the auto `window.open()` from `book-clarityscan.tsx`; make the page a true paid-first landing with one big CTA.

## Strategic bets — top 3

1. **Responsive image pipeline (MOB-011)**: generate width-keyed variants (480/800/1200/1600) for hero and case-study imagery and emit proper `srcSet` with `w` descriptors. Material bandwidth saving for LATAM/Caribbean mobile.
2. **Mermaid + diagram mobile strategy (MOB-006, MOB-007)**: define a mobile diagram contract — fluid text scaling, scroll-hint shadow, optional fallback static SVG for very narrow viewports — and apply it to `ImmFunnelDiagram` and all `.mermaid` blocks. Improves comprehension on the most-shared content.
3. **Navbar IA review for mobile (MOB-005)**: rationalize drawer to ~5 high-conversion entries, move utility links (GitHub) to footer, widen tap targets, and re-test with a real device. Affects conversion across the funnel.

## Out of scope / hand-offs

- Mailto/CTA conversion strategy (booking vs mailto vs tel): Conversion, Sales.
- Tap-to-call decision (do we publish a phone number, and in which region): Sales, Brand & visual.
- IA collapse of navbar items into a Services dropdown: IA & UX.
- Footer link inventory and `<details>` collapse: IA & UX, Content & copy.
- Responsive image variants build step (sharp/Pages build): Performance, Code quality.
- Tap-target accessibility audit (WCAG 2.5.8): Accessibility.
- Latin America / Caribbean network-cost analysis (justifies MOB-011 priority): Performance, Analytics.
- Mermaid swizzle for scroll-hint and aria-label: Code quality, Accessibility.
- Consent banner button sizing & focus: Security & privacy, Accessibility.
- ClarityScan paid-first flow re-design on mobile (MOB-010): Conversion, Sales.

## Open questions for Luis

1. Do we publish a phone number anywhere? If yes, in which locale, and should it appear on Contact and in the footer as a `tel:` link?
2. Is removing GitHub from the mobile drawer acceptable, or do we want to keep it for developer audiences (and just demote it visually)?
3. For `book-clarityscan.tsx`, can we drop the auto-`window.open()` and turn the page into a clear paid-first landing, or is the auto-open intentional for desktop conversion?
4. Is there budget to add a build-time responsive image step (sharp / Pages plugin) for `srcSet` with width descriptors?
5. Are tables expected in marketing pages, blog, and the Innovation Lab Guide chapters? (If yes, MOB-008 priority rises.)
6. Should the IMM funnel diagram have a mobile-only simplified variant (e.g., vertical pill stack without trapezoid clip-paths)?
7. Confirm WCAG target: 24×24 (2.2 minimum) or 44×44 (HIG / 2.1 AAA)? Drives MOB-003 / MOB-014 / MOB-015 scope.
