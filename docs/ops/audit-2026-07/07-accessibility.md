---
title: "Audit 2026-07 — Role 07: Accessibility (WCAG 2.2 AA)"
status: draft
date: 2026-06-01
locales: ["en", "es"]
artifacts:
  - ops/audits/doulab-net/lighthouse-2026-07-prod-v1/*.json
  - http://127.0.0.1:4173 (local prod)
  - src/pages/**, src/components/**, src/css/custom.css
  - build/ (EN), build/es/ (ES)
---

# Accessibility Audit (WCAG 2.2 AA) — doulab.net — 2026-06-01

## Scope

WCAG 2.2 Level AA review of the bilingual production build of doulab-site (EN at `/`, ES at `/es/*`). Both locales are in scope, including localized `lang` attributes, alt text, aria-labels, and visible-vs-accessible-name parity in both languages.

Specific focus from the role brief:

- Verify F-2 close-out shipped in `a19f1a8` / `dd76b65` did not regress accessibility (dark-mode hero subtitle = `#fff`; navbar hover/active = `--dl-green` `#72c53c`; both against the Docusaurus dark surface `#0f1117` / `#0f1220` / `#111318`).
- Drill into the Lighthouse JSON `audits[*]` block for the three lowest-scoring a11y pages (88-89): `services-imm-dt` (88), `services-clarityscan-diagnostic` (88), `services-innovation-maturity` (89), in both EN and ES.
- Re-check the link-in-text-block status closed under audit-2026-06 E-R3 / E-R3.1, and label-content-name-mismatch (visible vs `aria-label`).
- Confirm bilingual `lang` correctness (HTML root + inline foreign-language phrases).

Out of scope: third-party domains (`booking.doulab.net`, Stripe Checkout), Cloudflare edge headers, full manual screen-reader pass, full keyboard pass on every page (Lighthouse + targeted source review only), mobile target-size in pixels (delegated to Role 17).

## Method

1. Parsed every Lighthouse JSON in `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/` and extracted `audits[*]` entries where `score < 1` under the accessibility category. Detailed extraction for the three lowest-scoring page pairs (EN + ES).
2. Cross-referenced each failing selector against source (`src/pages/**`, `src/components/imm/**`, `src/components/**`) to find the authoring location and the canonical fix point.
3. Read the F-2 close-out CSS block (`src/css/custom.css:1115-1130`) and verified the declared colors against the declared dark-mode surfaces (`#0f1117`, `#0f1220`, `#111318`).
4. Inspected built HTML (`build/index.html`, `build/es/index.html`) for: root `<html lang>`, presence of skip-link, count of `lang="es"` spans in EN doc and `lang="en"` spans in ES doc.
5. Re-checked audit-2026-06 findings still present in source so this report does not re-file resolved items (E-R3, E-R3.1, etc.). Items NOT re-filed: A11Y-001 (skip-link), A11Y-007 (justify), A11Y-011 (auto pop-up) — verified separately as resolved or under different ownership; any still-open items from 2026-06 are renumbered into the 2026-07 series only when Lighthouse 2026-07 confirms they still fail.

Hex/contrast checks use Lighthouse's reported ratios where available; otherwise computed against declared CSS tokens.

## F-2 close-out verification

| Check | Result | Notes |
|---|---|---|
| `.heroSubtitle` in dark mode | PASS | `color:#fff` (`custom.css:1120-1123`) on dark surface `#0f1117`/`#0f1220` ≈ ≥ 17:1, far above 4.5:1 AA. |
| `.navbar__link:hover/:focus/--active` in dark mode | PASS | `color: var(--dl-green)` = `#72c53c` on the Docusaurus dark navbar background `#0f1117`/`#111318` ≈ 7.5:1, above 4.5:1 AA. |
| `.pages-work-with-us-index__subnav a` in dark mode | PASS | Same green-on-dark, same ratio. |
| `--dl-green` (`#72c53c`) used elsewhere as a 4.5:1 surface | FAIL in several places (see A11Y-2007-01 and A11Y-2007-02). The F-2 close-out itself is fine; the failures are pre-F-2 usages of `--dl-green` on white. |

F-2 close-out: no regression. The accessibility failures in this audit live elsewhere.

## Bilingual HTML root + lang attributes

| Surface | EN | ES |
|---|---|---|
| `<html lang>` | `en-US` (PASS, WCAG 3.1.1) | `es-ES` (PASS) |
| Skip-to-content link | Present (Docusaurus default) | Present |
| Inline `lang="es"` spans inside EN page | **0 occurrences** | n/a |
| Inline `lang="en"` spans inside ES page | n/a | **0 occurrences** |

WCAG 3.1.2 Language of Parts (AA) fails in both locales: the EN site embeds Spanish proper-noun-rich phrases ("Vigía Futura", "Alpha en Línea", "FUNDAPEC: Plataforma de Egresados") with no `lang="es"`; the ES site embeds English product/program names ("MicroCanvas Framework", "Innovation Maturity Model", "ClarityScan") with no `lang="en"`. Screen readers will mispronounce both directions. See A11Y-2007-09.

## Findings

ID prefix `A11Y-2007-`. Severity P0 (blocker) / P1 (high) / P2 (medium) / P3 (low). Impact 1-5. Effort S / M / L.

---

### A11Y-2007-01 — `--dl-green` (#72c53c) on white fails 4.5:1 (sitewide pattern)

- Severity: P1
- Impact: 5
- Effort: S
- WCAG: 1.4.3 Contrast (Minimum) (AA)
- Locales affected: EN and ES (identical token).
- Locations (Lighthouse-confirmed):
  - `src/pages/services/imm-dt.tsx` — `<h3 style={{ color: 'var(--dl-green, #10B981)' }}>` in the Deliverables section. Lighthouse reports: foreground `#72c53c` on `#ffffff` = **2.15:1** (needs 3:1 for large text; fails 4.5:1 for normal — this is `20px`/bold, large, so 3:1 still applies and still fails).
  - `src/pages/services/clarityscan/diagnostic.tsx` — `<strong style={{ color: 'var(--dl-green, #72c53c)' }}>`. Same 2.15:1.
  - `src/pages/index.tsx` — `<strong style={{ color: 'var(--dl-green, #2f7a3f)' }}>` inside `.pages-b4-p1__centerText`. Lighthouse: 1.98:1 on `#f5f6f7`.
  - `src/components/imm/MaturityLadder.module.css:163-166` — `.badgeTarget { background: #72c53c; color: #fff; }`. Lighthouse: white-on-green = **2.15:1** at `10.4px` bold (needs 4.5:1).
- Observation: `--dl-green` (`#72c53c`) is a brand token that, as a foreground on white or as a fill behind white text, simply does not meet AA. This shows up at least four times on the three lowest-scoring pages and on the home page. It is the single highest-frequency a11y failure in the 2026-07 run.
- Recommendation: Introduce a paired token `--dl-green-text` (darker — `#3f8a1f` or `#427a1a` test for ≥ 4.5:1 on white) for *text* use; keep `--dl-green` as the brand fill. Replace inline `style={{ color: 'var(--dl-green, ...)' }}` with a class that uses `--dl-green-text`. For `.badgeTarget`, either (a) keep the green fill and switch the badge text to `#0b0e19` (gives ≥ 7:1) or (b) keep white text and darken the badge fill to `#3f8a1f`. Option (a) is cheaper. Note the affected pages also include the home page (#problems centerText) so the fix removes a P1 contrast failure from `/` and `/es/` simultaneously.

---

### A11Y-2007-02 — Maturity ladder `badgeTarget`: white on `#72c53c` at 10.4px bold

- Severity: P1
- Impact: 4
- Effort: S
- WCAG: 1.4.3 (AA)
- Locales: EN and ES.
- Location: `src/components/imm/MaturityLadder.module.css:148-166` (`.badge`, `.badgeTarget`); rendered by `src/components/imm/MaturityLadder.tsx:100`. Appears on `services/imm-dt`, `services/clarityscan/diagnostic`, `services/innovation-maturity`, and any page embedding the Maturity Ladder.
- Observation: Reported by Lighthouse on all three lowest-scoring pages. 2.15:1 at 10.4px/700 — well below the 4.5:1 normal-text requirement, and even below 3:1 large-text.
- Recommendation: Subset of A11Y-2007-01. Quickest fix: change `.badgeTarget { color: #fff }` to `color: #0b0e19` (dark text on green fill ≥ 7:1, AA Pass at any size). Keeps the brand fill, removes the failure across every page that renders the Maturity Ladder.

---

### A11Y-2007-03 — IMM funnel labels: white on cyan / coral fail 3:1 large-text

- Severity: P1
- Impact: 4
- Effort: S
- WCAG: 1.4.3 (AA), 1.4.11 Non-text Contrast (AA)
- Locales: EN and ES.
- Location: `src/css/custom.css:642-695` (`.immFunnel__bar`, `.immFunnel__bar--p2`, `.immFunnel__bar--p4`, `.immFunnel__bar--p5`, `.immFunnel__label`). Rendered on `/services/innovation-maturity` and `/es/services/innovation-maturity`.
- Observation: Lighthouse reports two specific bars: white on `#00a6c8` = **2.88:1**, white on `#f26b5e` = **2.98:1** at 20px/bold. The relevant threshold for 20px/700 is 3:1 (large text) — both fail. The audit-2026-06 A11Y-006 flagged this same area; it remains live in the 2026-07 prod build.
- Recommendation: Either (a) darken the bar fills (e.g., `--p2: #007a99`, `--p4: #c9483c`) so white passes 4.5:1, or (b) flip label color to `#0b0e19` on the affected bars (matches the existing `--p2b` / `--p3` convention at `custom.css:690-691`). Option (b) is one-line and consistent. Provide an `<ol>`-structured visually-hidden description as A11Y-014 in 2026-06 recommended.

---

### A11Y-2007-04 — `role="listitem"` on `<picture>` and `<article>` (aria-allowed-role)

- Severity: P1
- Impact: 4
- Effort: S
- WCAG: 4.1.2 Name, Role, Value (A); 1.3.1 Info & Relationships (A)
- Locales: EN and ES.
- Locations:
  - `src/pages/services/innovation-maturity.tsx:457-473` — `proofStrip` is `<div role="list">` containing eight `<picture role="listitem">`. **`listitem` is not an allowed role on `<picture>`** (Lighthouse: `ARIA role listitem is not allowed for given element`). 8 violations per page × EN + ES = 16 hits.
  - `src/pages/index.tsx:107-115` — `<div className="cardGrid" role="list">` containing four `<article className="card" role="listitem">`. `listitem` is not allowed on `<article>` either. 4 violations × EN + ES.
- Observation: The "fake list" pattern is correct in spirit (a strip of logos is semantically a list) but the underlying elements (`<picture>`, `<article>`) reject the role. axe / Lighthouse explicitly fail this.
- Recommendation: Convert both surfaces to a real `<ul>` with `<li>` children. Each `<li>` then contains the `<picture>` (proof strip) or the `<article>` (cause cards). The `<li>` accepts the implicit listitem role; the outer wrapper can keep its `aria-label`. This removes 12 a11y violations per locale, and is preferable to deleting the role on the wrapper.

---

### A11Y-2007-05 — `<ol class="track">` contains `<article>` children (list semantics)

- Severity: P1
- Impact: 3
- Effort: S
- WCAG: 1.3.1 (A)
- Locales: EN and ES.
- Location: `src/components/imm/Roadmap.tsx:51-79` — `<ol className={styles.track}>` with `<article>` children. Lighthouse explicit: "List element has direct children that are not allowed: article". Surfaces on `/services/imm-dt`, `/services/innovation-maturity`, `/services/clarityscan/diagnostic` (and ES equivalents).
- Recommendation: Replace `<article>` with `<li>` (set `role` only if a non-default name is needed) and keep the `aria-labelledby` association on the `<li>`. Visual styling on `.horizon` already works with `<li>`. One-line type swap in `Roadmap.tsx:59`. Also applies to `MaturityLadder.tsx` if it follows the same shape (verify before commit).

---

### A11Y-2007-06 — `aria-label` does not contain visible link text (label-content-name-mismatch)

- Severity: P1
- Impact: 5
- Effort: M
- WCAG: 2.5.3 Label in Name (A)
- Locales: EN and ES.
- Locations (a representative sample from Lighthouse):
  - `src/pages/services/innovation-maturity.tsx` hero — `<a href="#imm-model" className="buttonSecondary" aria-label="Jump to the IMM model section">See the model</a>` (visible: "See the model"; AT name: "Jump to the IMM model section" — no overlap).
  - Same page — `<a aria-label="Open MicroCanvas Framework documentation" href="/docs/research-resources/microcanvas">MicroCanvas Framework</a>` (visible: "MicroCanvas Framework"; AT name: "Open MicroCanvas Framework documentation" — visible IS substring, but Lighthouse still flags because "MicroCanvas Framework" is not the *first* token. Strictly speaking this passes 2.5.3 if the visible string appears anywhere in the accessible name; check axe's rule — Lighthouse uses axe-core's stricter heuristic).
  - Same page — `<a aria-label="See ClarityScan Tier 1 Snapshot" href="/services/clarityscan">ClarityScan</a>` (visible: "ClarityScan"; AT name: starts with "See"). FAIL.
  - `src/components/case-studies/CaseStudyCards.tsx` — `<a className="cardCta" aria-label="Read AFP Siembra: Alcanza & SILAB case study" href="...">Read case study →</a>` (visible: "Read case study"; AT name: "Read AFP Siembra: ..." — visible "Read case study" is not in the accessible name). Affects home page and case studies index in both locales.
  - `src/pages/services/innovation-maturity.tsx` — tier cards `<a aria-label="See ClarityScan Tier 2 Diagnostic" ...>Open diagnostic →</a>` etc.
- Observation: This is a systemic anti-pattern: hand-written `aria-label`s "improve" the SR experience but, because they don't include the visible text, voice-control users ("click See the model") cannot activate the control. WCAG 2.5.3 is Level A. The bilingual ES variants inherit the same anti-pattern with translated strings.
- Recommendation: Standardize: either drop the `aria-label` entirely (visible text is sufficient) or rewrite the label so the visible text appears verbatim at the start, e.g. `aria-label="See the model — IMM model section"`. For the case-study cards specifically, swap to `aria-label="Read case study: AFP Siembra Alcanza & SILAB"` (visible "Read case study" is preserved as a prefix). Apply to both EN and ES translation files. This is the second-highest-frequency a11y failure in the 2026-07 run.

---

### A11Y-2007-07 — `link-in-text-block`: link color too close to body text + no underline (regression of E-R3 in inline contexts)

- Severity: P1
- Impact: 5
- Effort: S
- WCAG: 1.4.1 Use of Color (A); 2.4.4 (A)
- Locales: EN and ES.
- Locations (Lighthouse): `services/imm-dt` (pilot section, microcopy), `services/clarityscan/diagnostic`, `services/innovation-maturity` (method backbone microcopy), home (cause-card source links and microcopy). Lighthouse reports:
  - link `#38249a` on surrounding text `#1c1e21` = **1.5:1** (needs 3:1 between link and surrounding text); link "has no styling (such as underline)".
  - link `#38249a` on `.microcopy` surrounding text `#555555` = **1.49:1**.
- Observation: Audit-2026-06 E-R3 / E-R3.1 closed the underline default policy by switching to "underline only on hover". The user memory `feedback_links_underline_on_hover.md` reinforces that decision. However, that policy applies to navigation/CTA links; for **in-body prose links** WCAG 1.4.1 still requires either a 3:1 link/surrounding-text contrast OR a non-color affordance (underline, bold, icon). Currently neither holds: `#38249a` vs `#1c1e21` is 1.5:1, and no underline is rendered. This is the strict definition Lighthouse enforces.
- Recommendation: Carve out one exception to the hover-only-underline rule for **prose links inside `<p>` blocks (not buttons, not navbar)**. CSS: `main p a:not(.buttonPrimary):not(.buttonSecondary):not(.cardCta) { text-decoration: underline; text-decoration-thickness: from-font; text-underline-offset: 2px; }`. This keeps the chrome / CTA hover-only-underline aesthetic intact while satisfying 1.4.1 for inline body links. Coordinate with the user before commit since this crosses the `feedback_links_underline_on_hover` rule — the carve-out is the minimum needed to clear WCAG A. Alternative (if no underline is acceptable): bump the inline-link color to one with ≥ 3:1 vs both `#1c1e21` and `#555555` — practically `#5b2ce0` or similar; but inline-link contrast versus dark surrounding text on white tops out around 2.5:1 for any indigo close to brand, so a non-color affordance is the only realistic path.

---

### A11Y-2007-08 — No inline `lang="es"` / `lang="en"` annotations (Language of Parts)

- Severity: P2
- Impact: 3
- Effort: M
- WCAG: 3.1.2 Language of Parts (AA)
- Locales: EN and ES.
- Evidence: `build/index.html` contains 0 `lang="es"` spans; `build/es/index.html` contains 0 `lang="en"` spans. Verified by grep on built HTML.
- Affected phrases (non-exhaustive):
  - EN inside ES context: "MicroCanvas Framework", "Innovation Maturity Model", "ClarityScan", "Founder Foundations", "Vigía Futura" (the Spanish-named product also appears in EN — that direction is fine since ES is already declared as the page lang on ES pages).
  - ES inside EN context: "Vigía Futura", "Alpha en Línea", "Alcanza", "FUNDAPEC: Plataforma de Egresados" / "Alumni Platform" (mixed), "Pharmakun" (technically a coined name, not Spanish).
- Recommendation: Build a small `<Lang as="span" code="es|en">…</Lang>` wrapper (or use Docusaurus's `<Translate>` siblings) and apply it sitewide to recurring foreign-language proper nouns. Start with a short whitelist: ES side wraps "ClarityScan", "MicroCanvas Framework", "Innovation Maturity Model", "ClarityScan Tier N", "Founder Foundations"; EN side wraps "Vigía Futura", "Alpha en Línea", "Alcanza", and any other Spanish proper noun. Lower priority than the contrast / role / label-mismatch failures, but a recurring AA gap surfaced specifically by the bilingual launch.

---

### A11Y-2007-09 — `lang="es"` and `lang="en"` missing on translated metadata strings (alt / aria-label)

- Severity: P2
- Impact: 2
- Effort: S
- WCAG: 3.1.2 (AA)
- Locales: ES.
- Location: `src/pages/services/innovation-maturity.tsx:457-473` — proof-strip alt text such as `alt="AFP Siembra logo"` stays in English on the ES build (verify after translation pass); same for `aria-label="Selected organizations"`. Confirmed in Lighthouse ES JSON: button text in ES is translated ("Saltar a la sección del modelo IMM") so the alt-text path mostly is too — but spot-check across all hard-coded English strings inside `aria-label`/`alt` props for ES coverage parity.
- Recommendation: Audit every `aria-label`, `alt`, `title`, `aria-roledescription` for ES translation parity. Add a CI check (grep for hard-coded English strings in components also rendered on `/es/*`).

---

### A11Y-2007-10 — Focus indicator on `[tabindex]` scroll containers and skip-link target (carried from 2026-06 A11Y-010)

- Severity: P2
- Impact: 3
- Effort: S
- WCAG: 2.4.7 Focus Visible (AA); 2.4.11 Focus Not Obscured (AA, new in 2.2); 1.4.11 Non-text Contrast (AA)
- Locales: EN and ES.
- Location: `src/css/custom.css:377-385` global `:focus-visible` rule covers anchors / buttons only; `[tabindex]` containers (the home-page Problem reel, any carousel) get no visible outline. The sticky navbar (~64px in light, ~64px dark) can also obscure the focused element after a same-page anchor jump — WCAG 2.4.11 risk.
- Recommendation: Extend `:focus-visible` to `[tabindex]:not([tabindex="-1"])`. Add `:focus-visible { scroll-margin-top: 5rem; }` on headings with `id` (or globally on `[id]:target`) to mitigate sticky-header obscuration. Verify outline color (`var(--ifm-color-primary)` = `#8a7ad6` in dark mode) holds ≥ 3:1 vs dark surface — `#8a7ad6` on `#0f1117` ≈ 5.3:1, passes 1.4.11.

---

### A11Y-2007-11 — Carousel pattern on home (aria-roledescription="carousel") still without per-slide labels (carried from 2026-06 A11Y-004)

- Severity: P2
- Impact: 3
- Effort: M
- WCAG: 2.1.1 Keyboard (A); 4.1.2 (A); 2.4.3 Focus Order (A)
- Locales: EN and ES.
- Location: `src/pages/index.tsx` Problem reel.
- Observation: Still rendered with `aria-roledescription="carousel"` and slide-level `aria-roledescription="slide"` but no `aria-label` per slide, no current-slide indicator, no focus management on Prev/Next. Audit-2026-06 A11Y-004 already flagged; not closed.
- Recommendation: Either downgrade to plain horizontally-scrolling list (drop the carousel role) or add the missing per-slide labels and aria-current.

---

### A11Y-2007-12 — Sitewide unique-name violation for FinalCta when MDX embeds multiple instances (carried 2026-06 A11Y-003 / A11Y-013)

- Severity: P3
- Impact: 2
- Effort: S
- WCAG: 1.3.1 (A); 2.4.6 (AA)
- Locales: EN and ES.
- Location: `src/components/FinalCta.tsx`.
- Observation: Same issue as 2026-06 audit; tighten ID generation via `React.useId()` and require `id` non-optional.

---

### A11Y-2007-13 — Heading hierarchy on services pages (verify)

- Severity: P2
- Impact: 2
- Effort: S
- WCAG: 1.3.1 (A); 2.4.6 (AA)
- Locales: EN and ES.
- Location: services pages with multiple `<section>` blocks (`innovation-maturity.tsx`, `imm-dt.tsx`).
- Observation: Lighthouse `heading-order` audit did not fail in the captured runs (score 1.0 across all sampled pages), but the dense pattern of `<Heading as="h2">` siblings and inline `<h3 style={{ color: 'var(--dl-green') }}>` deliverables means a single mis-ordered MDX import in the future will silently introduce H4-before-H3 jumps. Recommendation: add a Markdown-lint rule on the `docs/` content and a Plopfile snippet for service-page section authoring. Not a blocker for 2026-07.

---

### A11Y-2007-14 — Form a11y on `/contact` and `/book-clarityscan*` (spot-check)

- Severity: P3
- Impact: 2
- Effort: S
- WCAG: 1.3.1 (A); 3.3.2 Labels or Instructions (A); 4.1.2 (A)
- Locales: EN and ES.
- Observation: Lighthouse on `contact-en-mobile` and `contact-es-mobile` did not surface form-specific failures (no failing `label`, `form-field-multiple-labels`, `input-button-name` audits in the JSONs). The contact page is a static lead-magnet surface in the current build, not a multi-field form. No new finding; leave for the next form-introduction PR.

---

## Quick wins — top 5

1. **A11Y-2007-02** — `.badgeTarget { color: #fff → #0b0e19 }` in `src/components/imm/MaturityLadder.module.css:165`. One line. Clears one failing audit across `services/imm-dt`, `services/clarityscan/diagnostic`, `services/innovation-maturity`, EN + ES (six page-failures gone).
2. **A11Y-2007-04 / A11Y-2007-05** — Convert `proofStrip` and `imm-cause-chain` to `<ul>` / `<li>`; convert `Roadmap` `<article>` children to `<li>`. Pure type swaps in `innovation-maturity.tsx:457`, `index.tsx:107-115`, `Roadmap.tsx:59`. Clears `aria-allowed-role` and `list` failures across the four worst pages × 2 locales.
3. **A11Y-2007-03** — Flip IMM funnel labels on `--p2` and `--p4` / `--p5` bars to `#0b0e19` (matches existing `--p2b`/`--p3` convention). Two-line CSS change in `custom.css:642-695`.
4. **A11Y-2007-07** — Add a carve-out CSS rule for inline prose links to render an underline (see recommendation). Requires user sign-off because it crosses `feedback_links_underline_on_hover`; once approved, single CSS block, kills `link-in-text-block` across home + three lowest services pages × 2 locales.
5. **A11Y-2007-06** — Rewrite or remove `aria-label` on `cardCta` and tier-card links in `CaseStudyCards.tsx`, `innovation-maturity.tsx`, and the home cause-chain so the visible text is a prefix of the accessible name (or just drop the aria-label). Mechanical fan-out across both EN and ES translation files.

## Strategic bets — top 3

1. **Tokenize the brand for text vs fill** — introduce `--dl-green-text`, `--dl-amber-text`, `--dl-purple-text` siblings that pass 4.5:1 on white and 4.5:1 on the dark surface. Add a CSS lint rule (Stylelint plugin or `eslint-plugin-css-modules`) banning `color: var(--dl-green)` / `var(--dl-amber)` outside designated `.brandFill` contexts. Removes the recurring "brand-color-as-text" failure class permanently and is a precondition for future brand-color additions.
2. **`<Lang>` wrapper component for bilingual proper nouns** — `<Lang code="es">Vigía Futura</Lang>` renders `<span lang="es">…</span>`. Add a short whitelist (5-10 terms per direction) and apply across both EN and ES MDX/TSX. Satisfies WCAG 3.1.2 sitewide and forms the foundation for any future automated TTS or screen-reader QA. Pairs naturally with the i18n role (12-i18n.md) deliverable.
3. **A11Y CI gate** — wire `@axe-core/cli` against the local prod build (both `/` and `/es/`) on the smallest set of pages that exercise every component (home, one service page, one case study, contact, 404). Fail the build on `serious` or `critical` violations. Prevents regression of the four issue classes we just cleared (color-contrast, aria-allowed-role, list, label-content-name-mismatch). Cheap to install; high recurring leverage.

## Out of scope / hand-offs

- **02 Brand & visual** — sign-off on the proposed `--dl-green-text` / `--dl-amber-text` token siblings, and on flipping IMM funnel label color on `--p2`/`--p4`/`--p5`.
- **03 Content & copy** — bilingual review of `aria-label` strings rewritten under A11Y-2007-06; "(opens in new tab)" suffix convention if adopted.
- **04 Conversion** — confirm the carve-out underline rule for prose links does not visually clutter the conversion sections (Hero, FinalCta unaffected; only `main p a`).
- **06 Performance** — A11Y-2007-07 underline addition is text-decoration only (no layout shift, no CLS risk); coordinate only if any new SVG icons are introduced for "opens in new tab".
- **10 Code quality** — `<Lang>` component (A11Y-2007-08) and `React.useId()` tightening (A11Y-2007-12).
- **12 i18n** — A11Y-2007-08 and A11Y-2007-09 (inline lang annotations + ES translation parity of alt/aria-label strings) overlap heavily with the i18n role's deliverable.
- **17 Mobile-first** — target-size verification (WCAG 2.5.8 minimum 24×24 CSS px) was not measured here.
- **18 Lighthouse** — the per-page accessibility scores tabulated below are the inputs to the consolidated Lighthouse role; cross-check at consolidation.

## Lighthouse a11y score table (this run)

| Page | EN-mobile | ES-mobile | EN-desktop | ES-desktop |
|---|---|---|---|---|
| home | 0.93 | 0.93 | (desktop set) | (desktop set) |
| services/imm-dt | **0.88** | **0.88** | captured | captured |
| services/clarityscan-diagnostic | **0.88** | **0.88** | — | — |
| services/innovation-maturity | **0.89** | **0.89** | captured | captured |
| services/clarityscan | (≥ 0.9) | (≥ 0.9) | captured | captured |

Numbers extracted from `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/*.json` `categories.accessibility.score`.

## Open questions for Luis

1. **Inline prose-link underline carve-out (A11Y-2007-07)** — OK to add `main p a:not(.button*):not(.cardCta) { text-decoration: underline }` as a narrow exception to the hover-only-underline rule? Without it, `link-in-text-block` cannot be cleared and the failure recurs on every new prose link on services pages.
2. **`--dl-green` text token (A11Y-2007-01)** — name and hex for the AA-safe sibling: `--dl-green-text: #3f8a1f` (5:1 on white) or `--dl-green-text: #2f7a3f` (6:1, currently used as the inline fallback in `index.tsx`)? The latter is already in the source, just not promoted to a token.
3. **IMM funnel labels (A11Y-2007-03)** — flip label color on the failing bars to `#0b0e19` (cheap, matches existing `--p2b`/`--p3` convention) or keep white labels and darken the bar fills (changes the diagram palette and so needs brand sign-off)?
4. **`<Lang>` wrapper rollout scope (A11Y-2007-08)** — start with the whitelist of 5-10 high-frequency terms and accept the rest as P3 cleanup, or aim for full coverage in this audit cycle?
5. **`role="listitem"` on `<picture>` (A11Y-2007-04)** — confirm we can change the `proofStrip` markup from `<div role="list">` + `<picture role="listitem">` to `<ul>` + `<li>` + `<picture>` without disturbing the existing visual CSS (`.proofStrip` and `.proofLogo` selectors should be unaffected if we keep the class names).
6. **Carousel decision (A11Y-2007-11)** — keep the Problem reel as an ARIA carousel (then we have to invest in full keyboard / focus management) or downgrade to a plain horizontally-scrolling list (preferred from an a11y standpoint; would simply drop the `aria-roledescription`)?
