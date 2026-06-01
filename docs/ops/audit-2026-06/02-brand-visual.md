# Brand & Visual Design Audit — doulab.net — 2026-06-01

## Scope of this audit
This audit reviews the brand and visual design layer of `doulab-site` (Docusaurus v3, v0.9.0, Cloudflare Pages): design tokens, color palette, typography stack, spacing/hierarchy, hero and CTA treatments, imagery system, logo usage, Mermaid styling, badge/card/subnav primitives, and cross-page consistency. The IMM design system (`..\IMM\doulab-imm-system.css`, `..\IMM\design-system-spec.md`, `..\IMM\CLAUDE.md`) is used as a reference for brand-family coherence only — no IMM changes are proposed. The NNY blog hero system (`docs/ops/design-nny-hero-language.md`) is treated as LOCKED and only assessed for surrounding alignment, never for redesign.

Out of scope: information architecture, copy, conversion mechanics, SEO, performance, accessibility regressions beyond visible color/contrast, analytics, security, code refactor patterns, and editorial tone. These are routed to siblings/hand-offs.

## Method
1. Read `AGENTS.md`, the canonical backlog, the NNY lock, the IMM spec, the IMM stylesheet header, `docusaurus.config.ts`, `src/css/custom.css` (full, 2464 lines), `src/pages/index.tsx`, `src/theme/` overrides, and each requested component (`Hero`, `FinalCta`, `PageHeader`, `CardGrid`, `CaseStudyCards`, `EntityHeader`, `DocBadges`).
2. Catalogued every color literal, token reference (`var(--*)`), gradient, font-family declaration (none present), shadow, and radius in `custom.css`.
3. Cross-referenced site tokens against IMM canonical accents (`#38249a`, `#964590`, `#72c53c`, `#484854`) and the NNY accent set (`#964590`, `#72c53c`).
4. Searched `src/**` for residual inline styles, undeclared `--ifm-color-primary` overrides, font stack declarations, and brand-color literals.
5. Inspected `static/img/` for image system shape (hero AVIF/WEBP/JPG triplets, logo variants, social cards).
6. No build, dev server, or screenshotting was performed — analysis is source-only per task constraints.

## Findings (ranked)

### BRAND-001 — Two competing primary colors; IMM brand accents absent from the site palette
- Severity: P0
- Impact: 5
- Effort: M
- Location: `src/css/custom.css:3` (`--dl-indigo: #4f46e5`), `src/css/custom.css:367, 373-374, 378, 383, 939, 1545, 2012` (`var(--ifm-color-primary)` — never overridden anywhere in the repo, defaults to Infima green `#2e8555`); `docusaurus.config.ts` (no `colorMode`/primary override block).
- Observation: The Doulab brand, as locked in IMM (`IMM\doulab-imm-system.css:86,92-95`), is built on `#38249a` deep indigo, `#964590` purple, `#72c53c` green, `#484854` charcoal. The website ships with a different indigo (`#4f46e5`, Tailwind "indigo-600") via `--dl-indigo` for buttons, hovers, focus, footer, chips. Simultaneously, `--ifm-color-primary` is never set in `src/css/custom.css` or `docusaurus.config.ts`, so Docusaurus' default Infima green (`#2e8555`) drives `.btn-primary` (line 367), focus outlines (lines 378, 383, 939, 2012), the in-page-link `problemCard` underline color (line 1545), and Docusaurus' own native admonitions/pagination. Result: three primaries (Infima green, `#4f46e5`, and IMM's `#38249a` which only appears in the consent banner at line 2448 and one workshop hero at line 1833). The site does not belong to the IMM brand family by token.
- Recommendation: Define a single Doulab token layer in `:root` of `src/css/custom.css` that (a) sets `--ifm-color-primary` and its 5 dark/light Infima ramps to `#38249a`, (b) re-points `--dl-indigo` to `#38249a` and `--dl-indigo-dark` to a darker shade (e.g. `#2a1b73`), (c) introduces `--dl-purple: #964590`, `--dl-green: #72c53c`, `--dl-charcoal: #484854` as canonical secondary/accent tokens, (d) keeps dark-mode variants aligned. Validate footer (`.footer` line 965), focus rings, and `.btn-primary` shift together. Burn-down of `#4f46e5` literal — currently appears in `--dl-indigo` at lines 3 and 2030.
- Evidence: `src/css/custom.css:3,2030`, `src/css/custom.css:367-385`, `IMM\doulab-imm-system.css:86,92-95`, `IMM\CLAUDE.md` (Doulab IMM Theme v1.0 LOCKED — accent tokens), Grep `--ifm-color-primary:` across `doulab-site` returned zero declarations.

### BRAND-002 — Token system is duplicated, not reused, across migrated module CSS
- Severity: P1
- Impact: 5
- Effort: M
- Location: `src/css/custom.css:2029-2037` redeclares `:root { --dl-indigo, --dl-indigo-dark, --dl-gray-700, --dl-gray-600, --dl-border, --dl-bg-soft, --dl-white }` identical to the top-of-file declaration at lines 2-10; `src/css/custom.css:2040-2376` re-implements full hero/section/card/process/proof/chips/FAQ/finalCTA/subnav as `.pages-work-with-us-index__*` clones of the canonical `.heroBanner`, `.section`, `.card`, `.processStep`, `.proofStrip`, `.chips`, `.faqGrid`, `.finalCta` declared at lines 392-900.
- Observation: Phase B-P2 / D16 consolidated modules into `custom.css` but did so by inlining each module's CSS with namespaced class names, producing parallel design systems instead of single primitives. Result: any token change (e.g. moving to IMM `#38249a`) has to be applied in 2-N places; the `pages-services-innovation-readiness-workshop__*` block (lines 1820-1998) is its own white-background page with a custom gradient hero (`#38249a → #964590 → #72c53c`, line 1833) that visually clashes with every other service page. Similar duplicate clones exist for case studies, legal pages, vigia-futura subnav, and b4-p1/b4-p2 utilities (lines 1473-2024).
- Recommendation: Collapse the namespaced clones into the canonical primitives. Either (a) replace the namespace classes in TSX with the existing utility class names (`.heroBanner`, `.section`, `.card`), or (b) reduce the namespaced rules to layout-only deltas (e.g. `order: -1`) and remove the redeclared color/border/shadow/radius rules. Single source of truth: top-of-file token block + utility classes 167-1080. Remove the duplicate `:root` block at line 2029.
- Evidence: `src/css/custom.css:2-10` vs `src/css/custom.css:2029-2037`; `src/css/custom.css:392-422` (.heroBanner) vs `src/css/custom.css:2040-2071` (.pages-work-with-us-index__heroBanner); `src/css/custom.css:1820-1998` (workshop page) is entirely off-system.

### BRAND-003 — Marketing hero system is image-led and literal; violates IMM "restraint" brand voice
- Severity: P1
- Impact: 4
- Effort: M
- Location: `src/components/Hero.tsx:69-84`, `src/pages/index.tsx:704-719` (`/img/people-collage` collage), `static/img/` (hero-cases, hero-insights, clarityscan-hero, coaching-hero, contact-hero, diagnostics-hero, services-hero, vigia-futura-hero, work-with-us-hero, workshops-hero — all photographic JPG/PNG/WEBP/AVIF triplets), `src/css/custom.css:392-423`.
- Observation: The marketing hero pattern is "title left, large photographic image right" (Hero.tsx component layout, lines 100-179). The home `people-collage` is a literal photo of people — exactly the kind of literal stock imagery the NNY blog system disallows for editorial content (`design-nny-hero-language.md:53` "No literal stock photography"). While NNY is scoped to blog/editorial, the disconnect between the marketing hero voice (busy photographic) and the editorial voice (architectural minimalism with `#964590`/`#72c53c` accents) signals two brands. Additionally `heroSubtitle` (line 404) is `2.25rem` and colored `var(--dl-indigo)` — a giant non-IMM-purple subtitle competing with the H1.
- Recommendation: Strategic. Define a marketing-hero token language that sits in the same family as NNY: smaller subtitles, generous negative space, optional diagrammatic right-rail (the `rightVisual` slot already exists, Hero.tsx:44, used by IMM funnel), and reserve photography for case studies. Either (a) standardize on diagrammatic/abstract right-rail across all marketing heroes, or (b) accept photographic heroes but treat them as a stylistic exception scoped to home + about + work-with-us, and document the boundary. Reduce `.heroSubtitle` from 2.25rem to ~1.25rem (subtitle, not co-headline). Reroute its color away from the indigo CTA color to avoid conflating "subtitle" with "link".
- Evidence: `src/css/custom.css:404-409`, `src/components/Hero.tsx:100-179`, `docs/ops/design-nny-hero-language.md:24-65`, `static/img/people-collage.*`.

### BRAND-004 — Mermaid theme tokens drift from Doulab brand palette
- Severity: P1
- Impact: 4
- Effort: S
- Location: `docusaurus.config.ts:60-80` (mermaid themeVariables); `src/css/custom.css:1249-1277` (Mermaid CSS).
- Observation: Mermaid primary/border colors are slate (`#1F2A44`, `#0D1117`, `#F8F9FB`); secondary is mint (`#E6FAFB`); tertiary/notes are amber (`#FFF3D1`). None of these are Doulab/IMM brand colors. By contrast, the IMM system reserves `indigo #38249a` for structure/governance, `purple #964590` for hypotheses, `green #72c53c` for validation, `slate` for neutral, `amber` for caution (`IMM\design-system-spec.md:205-211`). The site's Mermaid diagrams therefore read as a third visual language — neither marketing nor IMM.
- Recommendation: Re-token Mermaid to the IMM semantic palette: `primaryColor` light-grey background, `primaryBorderColor: #38249a`, `primaryTextColor: #0d1117`, `secondaryColor` tinted purple (e.g. `#f3eaf3` for purple-bg nodes), `tertiaryColor` tinted green for validation nodes, `noteBkgColor` amber retained for caution. Add a `themeCSS` override or per-diagram classDef recipes in `phase-b8-p1-diagram-system.md`. Verify dark mode (line 1264) keeps text readable against `#0f1117`.
- Evidence: `docusaurus.config.ts:67-76`, `IMM\design-system-spec.md:205-211`, `src/css/custom.css:1249-1277`.

### BRAND-005 — Workshop page hero is a one-off gradient that breaks visual consistency
- Severity: P1
- Impact: 4
- Effort: S
- Location: `src/css/custom.css:1831-1898`, `src/pages/services/innovation-readiness-workshop.tsx`.
- Observation: The `Innovation Readiness Workshop` page hero uses `linear-gradient(135deg, #38249a 0%, #964590 40%, #72c53c 100%)` over a white page background (`page: #ffffff` line 1822) with white "pill" buttons (`border-radius: 999px`, line 1884) — a CTA shape that exists nowhere else on the site. Every other service page (`clarityscan`, `custom-workshops`, `innovation-maturity`, `coaching-mentoring`, `diagnostics`) uses the standard `.heroBanner` + `.buttonPrimary` (rounded 0.5rem rectangles, `--dl-indigo` fill). This single page therefore reads as belonging to a different brand and contains the only sustained use of the actual IMM accent colors on the public marketing surface.
- Recommendation: Migrate the workshop page to the canonical `Hero` component and the canonical `.buttonPrimary` rounded-rectangle button. If the gradient hero is intentional (a "premium" surface), promote it to a reusable `HeroGradient` variant of `Hero` and apply it consistently to all top-of-funnel service pages. Eliminate the 999px pill buttons. Reuse the IMM accent gradient as a brand asset elsewhere (e.g. above the final CTA strip) instead of one orphan page.
- Evidence: `src/css/custom.css:1831-1898`; `src/css/custom.css:659-685` (canonical button shape `.buttonPrimary` `border-radius: .5rem`).

### BRAND-006 — Hero `.heroSubtitle` is functionally an H1, weakening typographic hierarchy
- Severity: P2
- Impact: 4
- Effort: S
- Location: `src/css/custom.css:398-414`, `src/pages/index.tsx:705-707`.
- Observation: `.heroTitle` is `clamp(2rem, 1.8rem + 1vw, 3rem)` (line 399). `.heroSubtitle` is a fixed `2.25rem` weight 500 in `--dl-indigo` (lines 404-409). On viewports under ~1200px the subtitle is the same size or larger than the title, dyed in the CTA color — readers cannot tell which is the page identity. The same pattern repeats in `.pages-work-with-us-index__heroSubtitle` (line 2052: `2rem`). IMM body is locked at `32px Roboto` boardroom-grade and avoids `clamp()`/`vw` scaling (`IMM\CLAUDE.md` §7).
- Recommendation: Reduce `.heroSubtitle` to a clear secondary tier: `font-size: clamp(1.05rem, 1rem + .5vw, 1.35rem)`, weight 500, color `--dl-gray-700` (or a muted purple `#7a4d7a`). Add a global `--dl-text-h1`, `--dl-text-h2`, `--dl-text-eyebrow`, `--dl-text-body` token scale and apply across `PageHeader`, `Hero`, `EntityHeader` (currently each defines its own sizes inline).
- Evidence: `src/css/custom.css:398-414, 2046-2057`, `IMM\CLAUDE.md` §7 Typography System.

### BRAND-007 — No font-family declared anywhere; site relies on Docusaurus' default system stack
- Severity: P2
- Impact: 4
- Effort: S
- Location: Grep `font-family` in `src/css/custom.css` returns zero matches; no `--ifm-font-family-base` override anywhere in repo.
- Observation: IMM is locked on Roboto (`IMM\CLAUDE.md` §7). NNY blog hero canon names Inter as canonical grotesk plus Canela/Lyon/Freight Text for editorial serif (`design-nny-hero-language.md:33-39`). The website inherits Docusaurus' default `system-ui` stack, which renders as San Francisco on macOS, Segoe UI on Windows, Roboto on Android — three different visual identities for the same brand surface. Mermaid forces `Inter, ui-sans-serif, ...` (`docusaurus.config.ts:64`) so diagrams disagree with body text.
- Recommendation: Adopt Inter as the canonical site sans (aligns with NNY canon and with Mermaid). Override `--ifm-font-family-base: 'Inter', ...` and add preconnect/self-hosted font loading. Reserve Roboto for IMM decks; reserve an editorial serif (Canela/Lyon/Freight) for NNY hero text only, behind a `.nnyHero h1` selector. Document the three-font role split (marketing/UI = Inter; decks = Roboto; editorial hero = serif).
- Evidence: `src/css/custom.css` (no font-family declarations), `docusaurus.config.ts:64`, `design-nny-hero-language.md:31-39`, `IMM\CLAUDE.md` §7.

### BRAND-008 — Dark-mode rules carry heavy `!important` ladder and selector duplication
- Severity: P2
- Impact: 3
- Effort: M
- Location: `src/css/custom.css:985-1226` (multiple dark-mode blocks for `.card`, `.processStep`, `.finalCta`, `.buttonSecondary`, `.dl-buttonSecondary`, `.subnav`, etc.), plus duplicate appended block 1119-1226 explicitly titled "Doulab dark-mode refinements (append last)".
- Observation: Many dark-mode rules are declared 2-3 times with progressively more `!important` markers. Examples: `.buttonSecondary` colors at lines 1017-1027, 1122-1132, 1202-1208 (three versions, two with `!important`); `.finalCta` dark at 1009-1015 and 1149-1158 (the latter overrides the former with `!important`); body-copy color cascades at 996-1002, 1134-1146, 1210-1216. This is a brittle override stack symptomatic of patching dark-mode regressions without consolidating tokens.
- Recommendation: Replace per-selector dark overrides with a `[data-theme='dark']` token block that resets `--dl-text`, `--dl-text-muted`, `--dl-surface`, `--dl-surface-soft`, `--dl-border`, `--dl-shadow`. Then have all components consume those tokens. Remove `!important` from all 1119-1226 rules once token-driven. This will also resolve the legacy `html.theme-dark` vs `html[data-theme='dark']` selector mismatch documented in D9.
- Evidence: `src/css/custom.css:985-1226`, especially the explicit "append last" comment at line 1119.

### BRAND-009 — Logo system is single-asset; no horizontal/icon/dark variants registered
- Severity: P2
- Impact: 3
- Effort: S
- Location: `static/img/logo.svg` (single 43,730-token SVG), `docusaurus.config.ts:84` `logo: { alt: 'Doulab Logo', src: 'img/logo.svg' }`, footer in `--dl-indigo` (`#4f46e5`) at `src/css/custom.css:965` — same color the logo will render against.
- Observation: One logo file is reused everywhere. There is no documented dark-mode variant (`srcDark`), no monochrome/inverted variant, no compact mark for favicon parity (`favicon.ico` exists separately). The footer applies the indigo background under the logo via the navbar/footer-light fallthrough; the navbar logo on a white surface and the same logo on the indigo footer cannot both be optimal without a swap. Logos folder `static/img/logos/optimized` contains client logos (afpsiembra, alpha, fundapec, mentorpill, ogtic, pharmakun, su, cven) — well-organized — but the Doulab mark itself has no system.
- Recommendation: Produce `logo.svg` (color on light), `logo-dark.svg` (color on dark / footer / hero overlays), `logo-mono.svg` (single-tone for grayscale contexts), and a 32×32 favicon-grade mark. Wire `logo: { src: 'img/logo.svg', srcDark: 'img/logo-dark.svg' }` in `docusaurus.config.ts`. Document logo clearspace and minimum size in `docs/ops/brand-guide.md` (new). Coordinate with IMM's locked logo slot rules (`IMM\CLAUDE.md` §6) so a single SVG works for both.
- Evidence: `docusaurus.config.ts:84`, `static/img/logo.svg`, `IMM\CLAUDE.md` §6.

### BRAND-010 — Spacing/radius/shadow scale is implicit; values are literal in every component
- Severity: P2
- Impact: 3
- Effort: M
- Location: Radius literals: `0.5rem`, `0.75rem`, `12px`, `16px`, `1rem`, `999px` distributed across `src/css/custom.css` (e.g. lines 51, 83, 215, 304, 329, 421, 888, 1077-1090, 1242, 1262, 1884, 2069, 2150, 2217, 2317, 2337). Shadows likewise: `0 2px 6px rgba(0,0,0,.06)`, `0 4px 14px rgba(0,0,0,.06)`, `0 6px 14px rgba(0,0,0,.1)`, `0 8px 18px rgba(0,0,0,.08)`, `0 8px 24px rgba(0,0,0,.06)`, `0 10px 24px rgba(0,0,0,.08)`, `0 10px 30px rgba(0,0,0,.25)`.
- Observation: No `--dl-radius-sm/md/lg`, no `--dl-shadow-card/popover/elevated`, no `--dl-space-1..6`. Each migrated module re-picks a value. Result: cards radius 12-16px, buttons 0.5-0.75rem, consent banner 14px, workshop buttons 999px — five different rounded vocabularies. Same scatter for shadows (seven distinct elevation recipes). IMM solves this with explicit "border radius scale" and "elevation scale" in its foundation layer (`IMM\design-system-spec.md:125-138`).
- Recommendation: Add a tokens block: `--dl-radius-xs:.375rem; --dl-radius-sm:.5rem; --dl-radius-md:.75rem; --dl-radius-lg:1rem; --dl-radius-xl:16px; --dl-radius-pill:999px;` and `--dl-elev-1, --dl-elev-2, --dl-elev-3` for shadows. Replace literals progressively, starting with `.card`, `.heroImage`, `.finalCta`, `.buttonPrimary`, `.subnav a`.
- Evidence: `src/css/custom.css` literals enumerated above, `IMM\design-system-spec.md:125-138`.

### BRAND-011 — Badge/chip system has two visual languages that drift apart
- Severity: P3
- Impact: 3
- Effort: S
- Location: `.badge` at `src/css/custom.css:1038-1049` (rectangular, indigo tint, 0.5rem radius); `.chips li` at `src/css/custom.css:849-856` (pill, 999px, identical color scheme); `.components-docs-docbadges__badge` at `src/css/custom.css:1430-1440` (pill 999px, grey tint, uppercase letter-spacing) used by `DocBadges.tsx`.
- Observation: Three distinct chip/badge styles for what is functionally the same component (a metadata tag). Doc badges are grey uppercase pills; page chips are coloured indigo pills; legacy `.badge` is a coloured rectangle. The `.components-docs-docbadges__badge` rule also references undefined token `--dl-gray-300` and `--dl-gray-200` (lines 1435, 1446) — these are not declared in the `:root` block (only `--dl-gray-600` and `--dl-gray-700` are defined at lines 5-6).
- Recommendation: Pick one chip pattern (recommend the DocBadges uppercase pill for metadata, indigo `.chips` pill for taxonomic tags). Add `--dl-gray-200: #e5e7eb; --dl-gray-300: #d1d5db;` to the `:root` token block. Retire `.badge` rectangle or repurpose it as a "status" badge with semantic color (success/warning/danger) using the IMM semantic palette.
- Evidence: `src/css/custom.css:849-856, 1038-1049, 1430-1446`, `IMM\design-system-spec.md:205-211`.

### BRAND-012 — Proof-logo strip is grayscale-on-hover, but client brand recognition is part of the value proposition
- Severity: P3
- Impact: 2
- Effort: S
- Location: `src/css/custom.css:813-827`, `static/img/logos/optimized/`.
- Observation: Proof logos are forced `filter: grayscale(100%); opacity: .9` until hover (line 819). On a marketing surface where the credibility argument depends on recognizing clients (OGTIC, AFP Siembra, Fundapec, Alpha Inversiones, Cven, Pharmakun, Su, Mentorpill), grayscale flattens the signal. The hover-to-reveal interaction also fails on touch devices and on print.
- Recommendation: Test full-color logos at reduced max-height (e.g. 36-40px) with a small opacity (0.85→1 on hover). If grayscale is retained for visual calm, ensure logos are color in their card-detail contexts (case studies pages) and document this rule.
- Evidence: `src/css/custom.css:813-827`, `LOG-PENDING-01` in `docs/ops/doulab-net-backlog.md:1115-1119`.

### BRAND-013 — `--dl-gray-200` and `--dl-gray-300` referenced but undeclared (broken token)
- Severity: P3
- Impact: 2
- Effort: S
- Location: `src/css/custom.css:1435` (`border: 1px solid var(--dl-gray-300)` in DocBadges), `src/css/custom.css:1445` (`border-bottom: 1px solid var(--dl-gray-200)` in EntityHeader).
- Observation: `:root` only declares `--dl-gray-600` and `--dl-gray-700` (lines 5-6). Referenced `--dl-gray-200` / `--dl-gray-300` fall back to the CSS-level default (currentcolor for some properties or unset), producing inconsistent rendering across browsers and breaking visual separation in `EntityHeader` and `DocBadges` (used on docs/research pages).
- Recommendation: Declare the missing tokens: `--dl-gray-100: #f3f4f6; --dl-gray-200: #e5e7eb; --dl-gray-300: #d1d5db; --dl-gray-400: #9ca3af; --dl-gray-500: #6b7280;` in the `:root` block at the top of `custom.css`. Audit any other undeclared `var(--dl-*)` references.
- Evidence: `src/css/custom.css:2-10` declares only `--dl-indigo`, `--dl-indigo-dark`, `--dl-gray-700`, `--dl-gray-600`, `--dl-border`, `--dl-bg-soft`, `--dl-white`; `src/css/custom.css:1435,1445` reference undeclared tokens.

### BRAND-014 — `FinalCta` and `Hero` components style their headings via the wrapping `.finalCta` / `.heroBanner` rather than via `PageHeader`-style tokens, so heading hierarchy diverges across templates
- Severity: P3
- Impact: 2
- Effort: M
- Location: `src/components/FinalCta.tsx:90-95`, `src/components/Hero.tsx:103-114`, `src/components/PageHeader/PageHeader.tsx:59`, `src/components/docs/EntityHeader.tsx:14-22`, `src/css/custom.css:883-900, 398-415, 1383-1397, 1444-1470`.
- Observation: Four different H1/H2 layout systems: `PageHeader` (eyebrow + h1 + subtitle + meta + actions), `Hero` (h1 + heroSubtitle + heroText + ctas), `EntityHeader` for docs (eyebrow + h1 + subtitle + badges + meta), `FinalCta` (just h2 + p). They share no typographic tokens — each component re-picks `font-size`, `line-height`, and `color`. The `PageHeader` `__title` has no font-size at all (line 1390 just sets `margin: 0`), so it inherits Docusaurus' default h1, while `.heroTitle` is `clamp(2rem,1.8rem+1vw,3rem)` and `.dl-finalCta h2` has no size either.
- Recommendation: Define semantic typography tokens (`--dl-text-display`, `--dl-text-h1`, `--dl-text-h2`, `--dl-text-eyebrow`, `--dl-text-body`, `--dl-text-microcopy`) and apply them inside each of the four heading components so the same role looks identical across the site. Confirm visual rhythm: eyebrow at .8rem caps, h1 at clamp(2rem→3rem), h2 at clamp(1.5rem→2rem), subtitle at clamp(1.05rem→1.35rem).
- Evidence: Component files and CSS lines above.

## Quick wins (≤ 1 day) — top 5
1. **Set `--ifm-color-primary` and Doulab brand tokens to IMM canon.** Add a `:root` block defining `--ifm-color-primary: #38249a` (plus its 5 dark / 5 light Infima ramps) and re-point `--dl-indigo` to `#38249a`, `--dl-indigo-dark` to a deeper shade, then declare `--dl-purple: #964590; --dl-green: #72c53c; --dl-charcoal: #484854`. Resolves BRAND-001 in one commit. (`src/css/custom.css:2-10`)
2. **Declare missing grey tokens** `--dl-gray-100..500` in the same `:root` block to repair broken DocBadges/EntityHeader borders. Resolves BRAND-013. (`src/css/custom.css:2-10` → `1435,1445`)
3. **Re-token Mermaid themeVariables to brand palette** (`primaryBorderColor: '#38249a'`, secondary tint `#f3eaf3`, tertiary tint `#eef7e3`). Resolves BRAND-004. (`docusaurus.config.ts:67-76`)
4. **Reduce `.heroSubtitle` size and recolor.** Drop from `2.25rem`/indigo to `clamp(1.05rem,1rem+.5vw,1.35rem)` weight 500, color `--dl-gray-700`. Fixes hierarchy clash on home + work-with-us. Resolves BRAND-006. (`src/css/custom.css:404-409, 2052-2057`)
5. **Add `logo: { srcDark: 'img/logo-dark.svg' }` and ship a dark-surface variant** so the footer (currently `--dl-indigo` background) and the navbar render the mark optimally. Half-day asset work. Partially resolves BRAND-009. (`docusaurus.config.ts:84`)

## Strategic bets (multi-week) — top 3
1. **Consolidate the design system into a token-driven core.** Build a `tokens.css` (colors, type scale, spacing scale, radius scale, elevation scale, motion scale) at the IMM foundation level, then refactor every namespaced `pages-*__*` and `components-*__*` clone in `custom.css` to consume those tokens. Remove the duplicate `:root` at line 2029, retire the workshop-page bespoke gradient hero or promote it to a system variant, eliminate the three-tier dark-mode override ladder. Addresses BRAND-002, BRAND-005, BRAND-008, BRAND-010, BRAND-011 together. (~2-3 weeks, requires phase plan.)
2. **Codify a "Doulab Marketing Visual Language" doc paired with the NNY editorial lock and the IMM deck lock.** Three locked design systems with explicit boundaries: marketing (this site), editorial (NNY blog heroes), presentations (IMM decks). Each names its primary font, accent set, hero/CTA grammar, imagery rules, and forbidden patterns. Without this, every audit re-discovers the same drift. Addresses BRAND-003, BRAND-007.
3. **Adopt Inter as the site-wide canonical sans, with self-hosted woff2 and font-display: swap.** Aligns marketing UI with the NNY canonical grotesk and with the Mermaid diagram font. Touches typography, performance (LCP), and brand identity simultaneously — coordinate with Performance & frontend hand-off. Addresses BRAND-007.

## Out of scope / hand-offs (name role exactly)
- IA & UX strategist: navbar/footer information density, subnav patterns, sidebar wiring after token changes.
- Content & copy: hero subtitle/title wording across pages, badge taxonomy.
- Conversion / lead-gen: CTA hierarchy, button color psychology, gradient-hero A/B implications on workshop page.
- SEO: og:image variants and dimensions when re-rendering hero imagery.
- Performance & frontend: self-hosted Inter, font-display strategy, CLS implications of token-driven type scale changes, mermaid theme bundle size.
- Accessibility: re-verify AA contrast after switching primary to `#38249a` on white surfaces and on the footer; verify focus rings against new indigo; verify dark-mode contrast after consolidating the override ladder.
- Security & privacy: consent banner color review when palette consolidates.
- Analytics: data-cta attribute coverage unaffected by visual changes (confirm).
- Code quality & architecture: collapse of namespaced `pages-*__*` clones into utility classes; CSS file split (tokens vs primitives vs components vs pages).
- Blog & editorial: confirm NNY hero variants render unchanged after token consolidation; confirm CTA cards inside posts inherit new tokens cleanly.
- i18n readiness: type-scale tokens must work for Spanish/longer strings; eyebrow uppercase tracking rule.
- MCF/IMM-P domain expert: Mermaid classDef recipes mapped to IMM semantic colors (indigo structure / purple hypothesis / green validation / amber risk / red blocker).
- Behavioral economics: choice architecture of dual-CTA blocks (primary + secondary), gradient hero perceived premium effect.
- Behavioral psychology: color associations of `#38249a` (authority) vs `#4f46e5` (tech/SaaS) for prospect first impressions.
- Sales & positioning: client-logo grayscale vs full-color trade-off (BRAND-012).
- Mobile-first / responsive: re-verify hero stacking after `.heroSubtitle` resize; verify `proofStrip` at `repeat(3, 1fr)` / `repeat(2, 1fr)` breakpoints with full-color logos.

## Open questions for Luis
1. Brand source of truth: should the website align with the **IMM locked palette** (`#38249a/#964590/#72c53c/#484854`), or is the current `#4f46e5` ("Doulab Indigo lite") an intentional marketing-surface brand that diverges from decks? If intentional, the divergence needs a documented rationale.
2. Font strategy: adopt **Inter** site-wide (aligns with NNY canon and Mermaid), keep Roboto (aligns with IMM decks), or keep the current default system stack (no identity)? Recommend Inter; please confirm.
3. Imagery direction: should marketing heroes move toward the **diagrammatic/abstract NNY-adjacent direction** (the IMM funnel right-rail is the existing precedent), or stay photographic with curated stock?
4. Workshop page (`/services/innovation-readiness-workshop`): keep the **bespoke gradient hero** as a promoted variant for premium services, or normalize to the canonical `Hero` component?
5. Logo system: do you want a **dedicated brand guide doc** (clearspace, sizes, color/mono/dark variants), or is the current single `logo.svg` sufficient indefinitely?
6. Proof-logo treatment: keep **grayscale-on-hover** (visual calm) or move to **full color** (recognition signal)?
7. Dark-mode contrast targets: AAA on body copy, or current AA? Affects token values when consolidating BRAND-008.
8. Are case-study card images intended to remain photographic, or move toward illustrated/diagrammatic to match a possible hero-system shift (BRAND-003)?
