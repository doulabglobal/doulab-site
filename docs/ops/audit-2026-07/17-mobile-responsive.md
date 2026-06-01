---
title: "Mobile-first / responsive audit — doulab.net — 2026-07 (bilingual)"
role: 17-mobile-responsive
auditor: mobile-responsive
date: 2026-06-02
locale_scope: ["en", "es"]
status: complete
---

# Mobile-first / responsive audit (bilingual) — 2026-07

## Scope

Read-only responsive audit of doulab.net at the three mobile/tablet anchors of the viewport sweep — `360x640`, `390x844`, `768x1024` — across both locales. Focus: layout integrity, tap-target sizing, mobile navigation, hero CTA stacking (per F-3: side-by-side desktop, may stack mobile), IMM component responsiveness, and ES-specific overflow / wrap / justified-text defects driven by longer Spanish strings. Source files cross-checked: `src/css/custom.css`, `src/components/Hero.tsx`, `src/components/HeroPair.tsx`.

## Method

- Source pass: enumerated every `@media (max-width: …)` block in `src/css/custom.css` (26 blocks across breakpoints 480 / 600 / 700 / 800 / 900 / 960 / 996 px) plus `min-width: 768/900/996` blocks, and audited which utilities have a mobile override and which do not.
- Image pass: a constrained sample of 10 PNGs from `ops/audits/doulab-net/viewport-2026-07-prod-v1/` — five EN/ES pairs at three anchors covering contact, home, IMM, case-studies, ClarityScan.
- ES-specific: confirmed defects that are invisible in EN because the EN string is shorter or single-line.
- Out-of-scope (owned by other roles): Lighthouse mobile scores (→ 18), tap-target colour contrast (→ 07), copy length itself (→ 03), parity content drift (→ 12).

## Findings

ID prefix: `MOBL-`. Severity P0 (broken) / P1 (high-impact) / P2 (medium) / P3 (polish). Impact 1-5. Effort S/M/L.

---

### MOBL-001 — Hero subtitle and H1 use `text-align: justify` with no mobile override; produces catastrophic word-rivers on short lines at 360-390 px in BOTH locales (worse in ES)

- Severity: P0
- Impact: 5
- Effort: S
- Location: `src/css/custom.css:1459-1461` (`.components-hero__subtitle { text-align: justify; }`) and `src/css/custom.css:1744-1746` (`.pages-b4-p2__heroSubtitleJustify { text-align: justify; }`). Neither rule is overridden inside any `@media (max-width: …)` block.
- Evidence: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/contact/390x844.png` — "Agenda una llamada" / contact-page subtitle renders with visible river gaps between words; EN counterpart `ops/audits/doulab-net/viewport-2026-07-prod-v1/en/contact/390x844.png` is unaffected because the EN string flows differently and fills the line. Same root cause is visible on the ES home subtitle at `es/home/360x640.png`.
- Why it hurts: `text-align: justify` distributes leftover space across word-gaps. On a 360-390 px column, **any** short multi-word line (2-3 tokens) gets stretched so a single gap can span 30-40% of the column width. ES is hit harder because the typical ES sentence is longer and wraps to more short lines; but EN is **not** safe — see MOBL-009 where EN "Real    projects. Clear    checkpoints." has 80 px rivers between word pairs. Confirmed in evidence at: ES /contact 390x844 (H1 "Agenda una llamada de descubrimiento"), ES /home 360x640 (H1+subtitle), ES /services/innovation-maturity 390x844 (H1 "IMM-P® es el modelo"), ES /case-studies 360x640, and EN /case-studies 360x640.
- Recommendation: Inside the existing `@media (max-width: 700px)` block, set:
  ```css
  .components-hero__subtitle,
  .pages-b4-p2__heroSubtitleJustify,
  .hero__title,
  .hero__subtitle { text-align: left; hyphens: auto; }
  ```
  Also confirm via DevTools whether the contact / case-studies H1 inherits justify from the subtitle class or from a page-level rule — the H1 also needs the override (MOBL-006, MOBL-009 evidence). This is a sub-10-line CSS fix and removes the single most visible mobile defect across both locales.

---

### MOBL-002 — `text-align: justify` is applied to multiple non-hero copy blocks with no mobile override; same gap defect can recur on any narrow ES paragraph

- Severity: P2
- Impact: 3
- Effort: S
- Location: `src/css/custom.css:1460, 1745` plus the broader pattern (Grep shows `text-align: justify` only in those two selectors today, but the architectural rule is missing).
- Observation: There is no global "mobile resets justify to left" rule. Any future component that opts into `text-align: justify` will inherit the same defect on narrow viewports. Given the site is bilingual and ES strings are systematically longer, this is a recurring-bug surface, not a one-off.
- Recommendation: Add a single global mobile guard, e.g.
  ```css
  @media (max-width: 700px) {
    [class*="hero__subtitle"],
    [class*="heroSubtitleJustify"],
    .text-justify-md-up { text-align: left; }
  }
  ```
  Document the rule in `docs/ops/doulab-net-backlog.md` so any new `justify` usage is wrapped behind a `-md-up` utility.

---

### MOBL-003 — Hero CTA pair has no enforced side-by-side-on-desktop rule; behaviour relies on flex-wrap defaults, risking F-3 violation regressions

- Severity: P2
- Impact: 3
- Effort: S
- Location: `src/components/Hero.tsx`, `src/components/HeroPair.tsx`; CTA container styled via `src/css/custom.css` `.cardCTA` / hero CTA utility classes.
- Observation: Per the [`feedback_card_cta_layout`](../../../../memory) and F-3 rules, two CTAs on a card render side-by-side on desktop and may stack on mobile. The current hero CTA pair achieves this implicitly via `flex-wrap: wrap` on the parent — meaning the breakpoint is "whenever the buttons no longer fit" rather than a defined viewport. With longer ES button labels ("Solicita un ClarityScan", "Agenda una llamada de descubrimiento") the wrap point moves up and can stack the buttons at tablet sizes (768-900 px) where the EN site still shows them side by side. Asymmetric behaviour between locales is a parity bug.
- Recommendation: Define explicit rules — `display: flex; gap: 0.75rem;` with `flex-wrap: nowrap` above 768 px and `flex-wrap: wrap` below. Set a min-width on each button so they degrade together, not one-at-a-time. Validate against the longest ES strings.

---

### MOBL-004 — Mobile breakpoint set is irregular (480 / 600 / 700 / 800 / 900 / 960 / 996), no single tablet/phone token

- Severity: P3
- Impact: 2
- Effort: M
- Location: `src/css/custom.css` — 26 `max-width` media queries spanning seven distinct pixel values.
- Observation: Source review counted media queries at 480, 600, 700, 800, 900, 960, 996. There is no shared design-token boundary; each component picked its own cutoff. This makes responsive regressions easy to introduce (a new component might pick 768 and behave differently than its siblings) and makes audits harder because the breakpoint matrix has no canonical anchors. The audit sweep anchors are 360 / 390 / 768 / 1280 / 1366 / 1920, none of which map cleanly to the CSS cutoffs.
- Recommendation: Define three breakpoint tokens (e.g. `--bp-sm: 600px`, `--bp-md: 900px`, `--bp-lg: 1200px`), and migrate existing media queries to the nearest token in one pass. Strategic, can be deferred.

---

### MOBL-005 — `min-width: 996px` cutoff (custom.css:1786) leaves a "no-mans-land" between 900 and 996 px that is below the desktop nav threshold

- Severity: P3
- Impact: 2
- Effort: S
- Location: `src/css/custom.css:1786` (`@media (min-width: 996px) { … }`) — Docusaurus uses 996 px as its mobile-nav cutoff.
- Observation: Several layout rules only activate at 996 px+, but content rules use 900 px and 960 px. Devices in the 900-996 range (some Android tablets, small laptops) render with desktop nav not yet active but desktop-only layout rules also not yet active. Worth verifying at 960 px in a future capture.
- Recommendation: Either align all "desktop activation" rules to the Docusaurus 996 px nav cutoff, or harmonize per MOBL-004.

---

### MOBL-006 — ES contact 390x844: H1 "Agenda una llamada de descubrimiento de 20 minutos." renders with catastrophic justify-gaps (~50-80 px between words) — IMAGE-CONFIRMED

- Severity: P0
- Impact: 5
- Effort: S
- Location: `/es/contact` H1 and lead subtitle; styled via the page hero subtitle utility (see MOBL-001).
- Evidence: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/contact/390x844.png` — H1 wraps to 3 lines: line 1 = "Agenda    una    llamada" with wide rivers; line 2 = "de descubrimiento de"; line 3 = "20 minutos." The justify algorithm stretches the 2 inter-word gaps on each short line to fill the 390 px column, producing rivers that visually break the H1 into disconnected words. EN counterpart `ops/audits/doulab-net/viewport-2026-07-prod-v1/en/contact/390x844.png` renders "Book a 20-minute discovery call." cleanly because the EN H1 is shorter, breaks into 2 lines, and the lines fill more naturally. This is the single most user-visible mobile defect in the ES surface.
- Recommendation: Resolved by MOBL-001 CSS fix; verify the H1 itself is covered by the selector (it may need its own rule if not under `.components-hero__subtitle`). Re-capture both locales after fix.

---

### MOBL-007 — ES home 360x640: hero H1 + subtitle both justified, primary CTA "Solicita un ClarityScan" pushed below the fold — IMAGE-CONFIRMED

- Severity: P1
- Impact: 4
- Effort: S
- Location: `src/pages/index.tsx` (and ES counterpart at `i18n/es/docusaurus-plugin-content-pages/index.tsx`), hero block; styled by `.components-hero__subtitle`.
- Evidence: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/home/360x640.png` — H1 "Innovación, Foresight y …" is justified with visible rivers on the 360 px column; subtitle "Arquitectura de innovación, prospectiva y coaching para dar forma al mañana" wraps to ~6 justified lines, all with rivers; the primary CTA sits well below the 640 px fold. EN counterpart `ops/audits/doulab-net/viewport-2026-07-prod-v1/en/home/360x640.png` shows the same justify rule but tighter packing because EN strings are shorter; CTA is still below the fold in EN too.
- Recommendation: (a) Apply MOBL-001 left-align fix to recover the rivers; (b) trim the ES subtitle for mobile (e.g. "Arquitectura de innovación, prospectiva y coaching"); (c) reduce hero vertical padding at <= 480 px so the primary CTA lifts above the 640 px fold in both locales.

---

### MOBL-008 — ES IMM page 390x844: H1 "IMM-P® es el modelo. IMM-P® es el programa." renders heavily justified; framework cards render cleanly — IMAGE-CONFIRMED

- Severity: P1
- Impact: 4
- Effort: S
- Location: `src/pages/services/innovation-maturity.tsx` + `i18n/es/.../innovation-maturity.tsx`.
- Evidence: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/services-innovation-maturity/390x844.png` — the dual H1 sentence "IMM-P® es el modelo. IMM-P® es el programa." breaks across two lines, both justified, with the second line "IMM-P® es el programa." stretched to fill the column (rivers between every token). Sub-lead "Mide la madurez en innovación. Luego sobre la escalera, punto de control por punto de control." inherits the same defect. The lower-page framework component cards and IMM-P stairs visual render cleanly at this width — card heights look balanced and no overflow. So the defect is concentrated in the hero.
- Recommendation: MOBL-001 fix covers the hero; the framework-card region is OK as-is. Re-capture after fix to confirm.

---

### MOBL-009 — Case-studies index 360x640 BOTH locales: justify defect on H1 + subtitle; EN "Real    projects. Clear    checkpoints." has rivers as bad as ES — IMAGE-CONFIRMED, NOT ES-SPECIFIC

- Severity: P0
- Impact: 5
- Effort: S
- Location: `src/pages/case-studies/index.tsx` + `i18n/es/.../case-studies/index.tsx`; hero block.
- Evidence:
  - `ops/audits/doulab-net/viewport-2026-07-prod-v1/en/case-studies/360x640.png` — EN H1/subtitle "Real    projects. Clear    checkpoints. Measurable    results." with ~80 px rivers between "Real" and "projects", "Clear" and "checkpoints" — the words look orphaned. This invalidates the "ES-only" framing of the justify bug: short EN three-word lines hit the same defect.
  - `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/case-studies/360x640.png` — same pattern on ES "Casos de éxito" / "Proyectos reales. Puntos de control claros. Resultados medibles." — every word-pair stretched.
  - The case-study cards below the hero (AFP Siembra, Alpha Inversiones, FUNDAPEC, OGTIC) render at consistent heights, single-column at 360 px, with CTA "Read the case" pinned at bottom. Card grid behaviour is correct.
- Implication: MOBL-001 should NOT be scoped to ES only. Apply the `text-align: left` mobile override globally; both locales benefit.
- Recommendation: Promote MOBL-001 to a sitewide mobile-typography fix; document in backlog. Card grid needs no change.

---

### MOBL-010 — ES ClarityScan 768x1024 tablet: layout is functional, hero justifies cleanly at 768 px width (justify bug is narrow-column-only) — IMAGE-CONFIRMED

- Severity: P3
- Impact: 2
- Effort: -
- Location: `src/pages/services/clarityscan.tsx` + ES mirror.
- Evidence: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/services-clarityscan/768x1024.png` — at 768 px, ES H1 "ClarityScan" + lead "Un diagnóstico por niveles de madurez en innovación y prospectiva. Ve dónde estás. Decide qué hacer a continuación." renders cleanly (no visible rivers), confirming the justify defect is narrow-column-specific and largely disappears at >= 700 px. Tier-card region lays out as 2x2 with the 4th item (or summary) below — no broken orphan. "¿Para quién es?" audience tiles render as a 4-up grid that stays balanced. No collisions observed between hero CTA and any pricing badge.
- Bounds the scope of MOBL-001: the justify fix must activate **below** ~700 px (matching the existing `max-width: 700px` breakpoint); above that, the current `text-align: justify` actually reads cleanly.
- Recommendation: Confirms the proposed `@media (max-width: 700px)` scope in MOBL-001 / MOBL-002 is correct. No change needed at 768x1024.

---

## Quick wins (S effort, ship in one PR)

1. **MOBL-001 / MOBL-002**: Add `@media (max-width: 700px) { .components-hero__subtitle, .pages-b4-p2__heroSubtitleJustify { text-align: left; } }` plus the global `[class*="hero__subtitle"]` guard. ~4 lines of CSS, removes the single most visible ES mobile defect.
2. **MOBL-003**: Explicit `flex-wrap` rules on hero CTA pair to lock side-by-side above 768 px regardless of ES string length.
3. **MOBL-007**: Verify hero CTA above the fold at 360x640 after MOBL-001 ships; trim ES subtitle if still below the fold.
4. **MOBL-008 / MOBL-009**: Add `min-height` to card title rows and `flex: 1 1 auto` to CTA rows so EN/ES card grids stay balanced per the card-height rule.

## Strategic bets (M-L effort, deferred)

- **MOBL-004**: Migrate 26 ad-hoc media-query cutoffs to a 3-token system (`--bp-sm/md/lg`). Reduces future responsive regressions; cleanup PR, low risk.
- **MOBL-005**: Align all "desktop activation" rules to the Docusaurus 996 px nav cutoff so there is no 900-996 px no-mans-land.

## Out-of-scope handoffs

- **Tap-target sizing / contrast** → role 07 (accessibility). Did not measure 44x44 minimums in this pass.
- **Mobile Lighthouse scores** → role 18.
- **ES copy length itself** (whether the ES subtitle should be shortened editorially) → role 03 / role 12.
- **Mobile-nav burger menu interaction** → role 01 (IA / UX) for any nav-IA findings; this pass only checked layout.
- **Font / typography choices** → role 02; the [`feedback_typography`](../../../../memory) rule (Roboto sitewide) is upheld at all anchors examined.

## Open questions

1. Should the audit sweep add a 414x896 anchor (iPhone Plus class) to catch mid-mobile defects between 390 and 768?
2. Is there an editorial decision to keep `text-align: justify` on desktop hero subtitles (it currently produces clean type at >= 800 px), or should we remove it entirely sitewide?
3. Are there other components beyond `.components-hero__subtitle` and `.pages-b4-p2__heroSubtitleJustify` that opt into justify via inline style or markdown rendering? A grep against compiled output (not source) would confirm.
