# Accessibility Audit — doulab.net — 2026-06-01

## Scope

WCAG 2.2 Level AA review of the public Docusaurus site (`doulab-site/`). Read-only audit of:

- Sitewide chrome (`docusaurus.config.ts`, `src/theme/Root.tsx`, `src/theme/NotFound/Content/index.tsx`).
- Global styles and design tokens (`src/css/custom.css`).
- Shared React components (`src/components/Hero.tsx`, `FinalCta.tsx`, `PageHeader/PageHeader.tsx`, `CardGrid/CardGrid.tsx`, `ConsentBanner.tsx`, `case-studies/CaseStudyCards.tsx`, `diagrams/ImmFunnelDiagram.tsx`, `docs/EntityHeader.tsx`, `docs/DocBadges.tsx`).
- Page templates (`src/pages/index.tsx`, `src/pages/contact/index.tsx`, `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`, `src/pages/404.tsx`).
- Configuration: `i18n.defaultLocale = 'en'` (`docusaurus.config.ts:20`).

Out of scope: live DOM/axe runs, color-picker contrast on rendered surfaces (analysis is from CSS tokens only), MDX-by-MDX deep dive across all blog posts, third-party domains (`booking.doulab.net`, Stripe Checkout), Cloudflare-edge headers.

## Method

Static review against WCAG 2.2 AA success criteria. For each finding the audit cites file path and line number(s) where the source supports it, the SC number, the observed pattern, and a recommendation. Contrast judgements are drawn from declared CSS color values (e.g. `--dl-indigo: #4f46e5`, hex literals in `custom.css`) and are flagged as "assumed" where the rendered cascade cannot be confirmed without an in-browser check.

Pages exercised include: Home (`src/pages/index.tsx`), Contact (`src/pages/contact/index.tsx`), Book ClarityScan (`src/pages/book-clarityscan.tsx`), 404 (`src/pages/404.tsx`), Hero / FinalCta / PageHeader / CardGrid components, and the IMM funnel diagram component.

## Findings (ranked)

---

### A11Y-001 — No skip-link / "skip to content" mechanism in custom theme

- Severity: High
- Impact: 5
- Effort: S
- WCAG: 2.4.1 Bypass Blocks (A)
- Location: `src/theme/Root.tsx:1-10`; absence verified by grep across `src/**` for `skip|skipToContent|skip-to` returning no source matches.
- Observation: `Root.tsx` is a transparent pass-through (`return <>{children}</>;`). Docusaurus ships a default `SkipToContent` only when `<Layout>` is used with the upstream theme; the project does not override or augment it, but the project also relies entirely on `<Layout>` from `@theme/Layout`. There is no project-level guarantee that the skip target (`#main` / `#docusaurus_skipToContent_fallback`) reaches the actual `<main>` content — pages such as `src/pages/index.tsx:721` place `<Hero>` *outside* `<main>` (Hero is rendered before `<main>` on line 704). Keyboard users activating skip-to-content will land below the hero and miss the H1.
- Recommendation: (1) Move `<Hero>` inside `<main>` on `index.tsx` and any page that mirrors the pattern, or (2) ensure the skip target wraps the H1. Add a project-level explicit `<a className="skip-to-content" href="#main">` in `Root.tsx` (or override `@theme/SkipToContent`) and add a `:focus` style in `custom.css`.
- Evidence: `src/pages/index.tsx:703-721` shows `<Hero ... />` rendered as a sibling preceding `<main>`. No skip-link CSS exists in `custom.css`.

---

### A11Y-002 — H1 outside `<main>` on home page (and ambiguous landmarks)

- Severity: High
- Impact: 4
- Effort: S
- WCAG: 1.3.1 Info & Relationships (A); 2.4.6 Headings & Labels (AA)
- Location: `src/pages/index.tsx:703-721`; Hero renders `<h1 id="page-hero-title">` (`src/components/Hero.tsx:103`) at the top of the document but the `<main>` element opens on line 721.
- Observation: Screen-reader users navigating by landmarks will land in `<main>` and not encounter the page's only H1. This also breaks `aria-labelledby` patterns that downstream tools expect (`main` should contain the page title).
- Recommendation: Wrap the Hero inside `<main>` (single `<main>` per page), or move the H1 into a header region clearly described as the page banner. Verify all pages — Contact (`src/pages/contact/index.tsx:69-94`) has Hero inside `<main>` correctly, so the home page is the outlier.

---

### A11Y-003 — `role="region"` on FinalCta without distinct accessible name pattern

- Severity: Medium
- Impact: 3
- Effort: S
- WCAG: 1.3.1 (A); 4.1.2 Name, Role, Value (A)
- Location: `src/components/FinalCta.tsx:82-89`.
- Observation: The component sets `role="region"` on `<section>` plus `aria-labelledby`. `role="region"` on a `<section>` is redundant but harmless; however when multiple FinalCtas appear on the same page (e.g., embedded in MDX cases plus the sitewide one) they all surface in the landmarks rotor as identical "Ready to talk?" or "Ready to make innovation repeatable?" regions, hurting orientation.
- Recommendation: Drop the explicit `role="region"`; rely on `<section aria-labelledby>`. Vary `title` per page or scope the FinalCta inside the page's `<main>` only once.

---

### A11Y-004 — Carousel arrow keys hijack focus context without "live region" expectation

- Severity: Medium
- Impact: 3
- Effort: M
- WCAG: 2.1.1 Keyboard (A); 4.1.2 (A); 2.4.3 Focus Order (A)
- Location: `src/pages/index.tsx:59-68, 183-230`.
- Observation: The "Problem" reel sets `role="group"` with `aria-roledescription="carousel"` and binds ArrowLeft/ArrowRight to `scrollByAmount`. Each child card is also `role="group" aria-roledescription="slide"` but slides are not labelled, no current-slide indicator is provided, and the Prev/Next buttons are not associated to a `aria-controls` target that has focus management. Users tabbing into the reel cannot tell which slide is current; the focused element does not change as the reel scrolls, so screen readers announce nothing on Prev/Next activation.
- Recommendation: Either remove the carousel `aria-roledescription` and treat it as a plain scroll container (preferred — `tabIndex={0}` plus `aria-label` is enough), or add a labelled per-slide `aria-label`, a visible "slide n of 8" status, and move focus / set `aria-current="true"` on the active slide.

---

### A11Y-005 — Color-only affordance for inline links inside problem cards and microcopy

- Severity: Medium
- Impact: 4
- Effort: S
- WCAG: 1.4.1 Use of Color (A)
- Location: `src/pages/index.tsx:208-210` (`<a href={item.sourceHref} target="_blank" ...>` plain, no underline class); also `.card h3 a` rule at `src/css/custom.css:234-237` removes underline (`text-decoration: none`) and only restores it on hover.
- Observation: Source links and card-title links rely on color or hover-state alone to distinguish them from surrounding text. Backlog item D0 already flagged "links rely on color" from Lighthouse 2026-01-19.
- Recommendation: Apply a persistent non-color affordance (`text-decoration: underline; text-decoration-thickness: from-font; text-underline-offset: 2px`) to in-body links inside `.card p` and `.card h3 a`. The `.pages-b4-p1__problemCard a` rule (`custom.css:1544-1549`) already does this — extend the rule sitewide.

---

### A11Y-006 — Indigo brand token contrast under AA scrutiny

- Severity: Medium
- Impact: 4
- Effort: M
- WCAG: 1.4.3 Contrast (Minimum) (AA); 1.4.11 Non-text Contrast (AA)
- Location: `src/css/custom.css:3-4` (`--dl-indigo: #4f46e5`), used as link/button color in many places (`custom.css:81, 138, 149, 670, 906, 909, 1247-1248`).
- Observation: `#4f46e5` on white = ~5.79:1 (passes AA for normal text); however the brand uses indigo for `--ifm-color-primary` references such as link text on light gray surfaces (`#f9fafb`, `--dl-bg-soft #f9f9f9`) and on chip backgrounds `#eef2ff` with `color: #3730a3` (`custom.css:851-855`). `#3730a3` on `#eef2ff` ≈ 9.5:1 — passes. But `#0B5ED7` text on white-on-coloured trapezoids in the IMM funnel (`custom.css:564-569`) uses `color: #0b0f19` on `#FF8A00` (≈ 8.5:1, passes) and white on `#57C000` (≈ 2.6:1, FAIL). Bar `--p2b` and `--p3` mix in a way that the green-on-dark and orange-on-dark combinations are AA-borderline.
- Recommendation: Re-verify each funnel bar: `--p2b` (green `#57C000`) currently sets text to `#0b0f19` which is fine; but `--p4`/`--p5` (`#F26B5E`) keep default white text which on `#F26B5E` is ≈ 3.1:1 — borderline for non-large text. Change to a darker shade or enlarge label size. Provide a textual alternative below the diagram since it is decorative-only beyond the role="img" label.

---

### A11Y-007 — `text-align: justify` on hero subtitle harms readability

- Severity: Low
- Impact: 2
- Effort: S
- WCAG: 1.4.8 Visual Presentation (AAA, advisory at AA)
- Location: `src/css/custom.css:1335-1337` (`.components-hero__subtitle { text-align: justify; }`), `custom.css:1614-1616` (`.pages-b4-p2__heroSubtitleJustify`).
- Observation: Justified text creates uneven word spacing ("rivers") that disproportionately impacts users with cognitive or low-vision profiles. Although AAA, this is a quick win.
- Recommendation: Switch to `text-align: left` (or `start`).

---

### A11Y-008 — `<picture>` source attribute capitalization in source code

- Severity: Low
- Impact: 1
- Effort: S
- WCAG: 4.1.1 Parsing (obsolete in 2.2 but worth noting); 1.3.1 (A)
- Location: `src/components/Hero.tsx:71-72`, `src/components/case-studies/CaseStudyCards.tsx:23-24`, `src/pages/index.tsx:477-479, 546`.
- Observation: All `<picture>` blocks use `srcSet` (React-correct). `alt` text is provided on `<img>`. However `aria-label="IMM phases diagram"` on the wrapper at `Hero.tsx:172` collides with the inner `ImmFunnelDiagram`'s own `role="img" aria-label="IMM-P program phases funnel diagram"` (`ImmFunnelDiagram.tsx:13`) — nested image roles with conflicting names.
- Recommendation: Remove `aria-label` from the wrapper `<div className="heroDiagram">` since the inner component already exposes the right name. Or, make the wrapper a presentation-only element (`role="presentation"`).

---

### A11Y-009 — Decorative blog hero images have meaningless alt text

- Severity: Medium
- Impact: 3
- Effort: S
- WCAG: 1.1.1 Non-text Content (A)
- Location: `src/pages/index.tsx:548` (`alt={`Blog, ${post.title}`}`).
- Observation: Blog-card thumbnails get `alt="Blog, <title>"`. The same title is the H3 immediately below. This duplicates the accessible name and is read twice by screen readers. The image is decorative for the card (the title link is the actionable text).
- Recommendation: Either set `alt=""` (decorative) since the card title H3 is adjacent, or remove the "Blog, " prefix and let the alt match the title (still duplicates — `alt=""` is the correct choice here).

---

### A11Y-010 — Focus indicator visibility and contrast on dark mode

- Severity: Medium
- Impact: 3
- Effort: S
- WCAG: 2.4.7 Focus Visible (AA); 1.4.11 Non-text Contrast (AA); 2.4.11 Focus Not Obscured (AA, new in 2.2)
- Location: `src/css/custom.css:377-385, 938-941`. Focus ring uses `outline: 3px solid var(--ifm-color-primary)` with `outline-offset: 2px`.
- Observation: In dark mode, `--ifm-color-primary` is brand indigo; against the dark surface `#0f1117` or `#111318` (`custom.css:986-989, 1264-1266`), indigo `#4f46e5` ≈ 5.8:1 — acceptable. However `.pages-b4-p1__problemCard a:focus-visible` uses `2px` outline (`custom.css:1551-1554`) — that is below the 3px sitewide standard and may be obscured by `box-shadow` hover. Also some focusable controls (the scroll-snap `.cardReel`, `tabIndex={0}`) have no visible focus indicator at all because `:focus-visible` defaults only apply to anchors and buttons in `custom.css:382-385`.
- Recommendation: Add a global `:focus-visible` style for all interactive elements including `[tabindex]`. Normalize outline width to `3px` everywhere. Add `:focus-visible { scroll-margin-top: 5rem }` (or similar) to mitigate the new 2.4.11 obscured-by-sticky-header risk.

---

### A11Y-011 — `book-clarityscan.tsx` auto-opens a new tab on mount (unexpected pop-up)

- Severity: Medium
- Impact: 3
- Effort: S
- WCAG: 3.2.1 On Focus (A); 3.2.5 Change on Request (AAA, advisory); 2.5.5 Target Size (AA, indirect)
- Location: `src/pages/book-clarityscan.tsx:10-19`.
- Observation: A `useEffect` calls `window.open(CLARITYSCAN_BOOKING_URL, '_blank', ...)` on mount. This violates user expectation: navigating to `/book-clarityscan` triggers a pop-up without an explicit user action. Many browsers block this; assistive tech users will lose context with focus left on the originating page while a new tab opens silently. The same pattern repeats in `book-clarityscan-success.tsx:9-17`.
- Recommendation: Remove the auto-open. The page already shows an explicit "Open booking in a new tab" button (`book-clarityscan.tsx:36-45`); make that the only entry point. If preserving the convenience, gate it on a saved user preference, not first paint.

---

### A11Y-012 — `<a target="_blank">` without textual / icon cue that link opens in new window

- Severity: Low
- Impact: 2
- Effort: S
- WCAG: 3.2.2 On Input (A, indirect); G201 advisory
- Location: many — e.g. `src/pages/index.tsx:208-210, 497-503`, `src/pages/contact/index.tsx:113-120, 132-141`, `src/components/FinalCta.tsx:49-58`, `src/components/Hero.tsx:119-127`.
- Observation: External CTAs use `target="_blank" rel="noopener noreferrer"` correctly but never indicate to the user (visually or in `aria-label`) that the link opens in a new tab. WCAG itself only advises this, but the project uses booking.doulab.net heavily and screen-reader users benefit from the cue.
- Recommendation: Append " (opens in new tab)" inside `aria-label` for external CTAs, and consider a small visual external-link glyph (already in the Lucide library).

---

### A11Y-013 — `aria-describedby` referencing element that does not exist for `secondaryCta`-less FinalCta

- Severity: Low
- Impact: 2
- Effort: S
- WCAG: 1.3.1 (A); 4.1.2 (A)
- Location: `src/components/FinalCta.tsx:80, 88`.
- Observation: `aria-describedby={noteId}` is rendered conditionally as `undefined` when there is no `ctaNote`. React will skip the attribute, so this is technically safe, but mixing `ariaLabelledbyId` (no prefix) and a generated `noteId` based on `id ?? 'finalCta'` can collide if more than one FinalCta on a page omits `id`. `React.useId()` mitigates but the legacy fallback `finalCta-title-…` is not guaranteed unique across MDX-embedded copies.
- Recommendation: Always derive both IDs from `React.useId()` and drop the `id ?? 'finalCta'` prefix collision risk; or require `id` as a non-optional prop.

---

### A11Y-014 — IMM funnel diagram presents structural data with no accessible alternative

- Severity: Medium
- Impact: 3
- Effort: M
- WCAG: 1.1.1 Non-text Content (A); 1.3.1 (A)
- Location: `src/components/diagrams/ImmFunnelDiagram.tsx:12-43`. Used inside Hero as `rightVisual` (`src/components/Hero.tsx:170-178`).
- Observation: The funnel renders five stacked `<div>` "bars" purely visually; the only accessible name is the wrapper `aria-label="IMM-P program phases funnel diagram"`. The phase names (FOUNDATIONS, STRUCTURED DISCOVERY & VALIDATION, EFFICIENCY, SCALING, CONTINUOUS IMPROVEMENT) are inside the divs as plain text and *are* read by screen readers, but they appear without semantic order, headings, or a list element. Their visual narrowing (which encodes a "funnel" progression metaphor) is lost. A user listening with a screen reader hears five labels with no sequence indication.
- Recommendation: Wrap the bars in an ordered list (`<ol>` with each phase as `<li>`), keep the wrapper as `role="img"` with a longer description (or `aria-describedby` pointing to a visually hidden but readable description that says "Phase 1 of 5: Foundations …"). Mermaid is not in play here — it is a hand-built CSS diagram.

---

### A11Y-015 — Lang attribute correct, but no `lang` switching mechanism (future Spanish content)

- Severity: Low
- Impact: 2
- Effort: M
- WCAG: 3.1.1 Language of Page (A); 3.1.2 Language of Parts (AA)
- Location: `docusaurus.config.ts:20` (`i18n: { defaultLocale: 'en', locales: ['en'] }`).
- Observation: HTML `lang="en"` is correctly emitted by Docusaurus from this config. However Spanish proper nouns ("Vigía Futura", page subtitle, IMM phase names, references like "Fundapec") appear inline without `lang="es"` annotations. Backlog item B-P2-03 plans manual ES i18n; once that ships, every Spanish phrase inside an English page (and vice versa) needs `<span lang="es">`.
- Recommendation: Add `lang="es"` to recurring Spanish proper nouns now (e.g., `<span lang="es">Vigía Futura</span>` in `docusaurus.config.ts:104` footer label and on the `/vigia-futura` page). Plan a sitewide review when ES locale opens.

## Quick wins — top 5

1. **A11Y-001 / A11Y-002**: Move `<Hero>` inside `<main>` on `src/pages/index.tsx` and audit every page that mirrors the pattern. Single-line PR for index; cascading audit elsewhere. Restores skip-to-content semantics.
2. **A11Y-005**: Add `text-decoration: underline; text-underline-offset: 2px` to `.card p a` and `.card h3 a` in `custom.css`. Removes the color-only affordance flagged by Lighthouse D0.
3. **A11Y-009**: Set `alt=""` on blog thumbnails in `src/pages/index.tsx:548`. Eliminates double-announcement.
4. **A11Y-011**: Delete the `useEffect` window.open in both `book-clarityscan*.tsx` files. Preserves the user-initiated CTA already present.
5. **A11Y-007**: Replace `text-align: justify` in `custom.css:1336` and `:1615` with `text-align: left`.

## Strategic bets — top 3

1. **A11Y-014 (Diagrams as data)**: Define a project standard for hand-built CSS/SVG diagrams: an outer `role="img"` with a short `aria-label`, plus a structured fallback (`<ol>` or `<table>`) that is visually hidden but available to AT. Apply to IMM funnel today, MicroCanvas and ecosystem diagrams next. Builds toward WCAG 1.1.1 and supports SEO copy.
2. **A11Y-010 (Focus system)**: Establish a single sitewide focus design token (`--dl-focus-ring`) used by all interactive elements including `[tabindex]`, custom carousels, and details/summary. Add WCAG 2.4.11 (Focus Not Obscured) handling for the sticky navbar via `scroll-margin-top` on heading anchors. Aligns with C2/C4 backlog.
3. **A11Y-015 (Bilingual semantics)**: Before ES i18n launches (B-P2-03), introduce a content lint rule (or a small `<Lang>` wrapper component) that enforces `lang="es"` annotation for embedded Spanish phrases. Cheap to retrofit now; expensive after dual-locale build.

## Out of scope / hand-offs

- **Brand & visual** — A11Y-006 funnel palette and A11Y-010 focus-ring color choice; sign-off on dark-mode indigo on dark backgrounds.
- **IA & UX** — A11Y-002 Hero-in-`<main>` placement decision; A11Y-004 carousel pattern (consider removing the carousel entirely).
- **Content & copy** — A11Y-009 blog thumbnail decorative status; A11Y-012 "(opens in new tab)" copy convention.
- **Conversion** — A11Y-011 auto-open behaviour on `/book-clarityscan` (was a conversion choice in Phase C16).
- **i18n** — A11Y-015 ES tagging plan before locale flip.
- **MCF/IMM-P** — A11Y-014 IMM funnel structural alternative; canonical accessible representation.
- **Performance** — Focus-style additions should not regress LCP; coordinate with Phase B7 work.
- **Code quality** — A11Y-013 prop API tightening on FinalCta (require `id`); A11Y-003 redundant `role="region"`.
- **Blog & editorial** — NNY hero alt-text convention; ensure MDX writers know `alt=""` is correct for decorative hero images.
- **Security & privacy** — none directly; `noopener noreferrer` is already in place on external CTAs.
- **Analytics, SEO, Mobile-first, Sales, Behavioral economics, Behavioral psychology** — no direct hand-offs in this audit; mobile target-size (WCAG 2.5.8) was not measured here (read-only).

## Open questions for Luis

1. Is the home Hero intentionally outside `<main>` (visual-design constraint), or can it move inside without disturbing the LCP preload path?
2. Should the `/book-clarityscan` auto-redirect be preserved as a deliberate UX (paid-first funnel) or removed? It conflicts with WCAG 3.2.1 expectations.
3. Spanish phrases in English chrome ("Vigía Futura"): annotate now as `lang="es"`, or wait for B-P2-03 ES rollout?
4. Should the IMM funnel diagram remain a CSS-only visual, or be promoted to a proper accessible component (with structured fallback) site-wide?
5. Is there an existing decision on the AA contrast target for the indigo brand color on coloured cards / chips, or should this audit propose a hardened token list?
6. The "Problem" carousel on the home page: keep as a true ARIA carousel (with full keyboard / focus management) or downgrade to a plain horizontally-scrolling list?
