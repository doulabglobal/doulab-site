---
role: Brand & visual design
auditor: claude-subagent
date: 2026-06-02
audit: 2026-07
---

## Scope

Visual hierarchy, brand consistency, color tokens, typography, hero treatment, dark-vs-light parity, card-grid balance, and bilingual visual rhythm (EN vs ES). Inputs: `src/css/custom.css` (tokens, dark-mode overrides, F-2 close-out block), and a constrained PNG sample under `ops/audits/doulab-net/viewport-2026-07-prod-v1/{en,es}/`.

Out of scope for this role (handled by peers): IA/navigation labels (01), copy quality (03), conversion CTAs (04), accessibility contrast formalization (07), Lighthouse perf (18).

## Method

1. Re-read brand-token foundations: `src/css/custom.css` lines 29-87 (root tokens + dark-mode primary siblings) and lines 1092-1160 (dark-theme card / hero / button overrides, incl. F-2 close-out at 1115-1130).
2. Cross-checked the IMM canon tokens cited in CLAUDE.md (`--ifm-color-primary: #38249a`, `--dl-green`, `--dl-purple`, `--dl-amber`, `--dl-red`, `--dl-slate`) against the declared values: all match (BRAND-001/013/014 from audit-2026-06 remain RESOLVED).
3. Reviewed a constrained 8-PNG sample (EN + ES at canonical viewports for home, services/IMM, case-studies, vigia-futura) to spot-check rendered output and bilingual rhythm.
4. Did not re-litigate findings that audit-2026-06 closed: BRAND-001 (primary realignment), BRAND-002 (CSS bundle dedupe), BRAND-007 (Roboto sitewide), BRAND-013 (DocBadges tokens), BRAND-014 (semantic token foundation).

## Findings

| ID | Severity | Impact | Effort | Location | Observation | Recommendation | Evidence |
|----|----------|--------|--------|----------|-------------|----------------|----------|
| BRAND-101 | P2 | 3 | S | `src/css/custom.css:142` | Hover border on `.dl-cards > li` is hardcoded `rgba(79,70,229,.35)` — that's the old Tailwind indigo, NOT the IMM canonical `#38249a`. Surviving residue of pre-BRAND-001 palette in a hover state. | Replace with `rgba(56,36,154,.35)` or, better, `color-mix(in srgb, var(--dl-indigo) 35%, transparent)`. | source review |
| BRAND-102 | P2 | 3 | S | `src/css/custom.css:1169-1172`, `1190-1192` | `.badge` and `.tag__name` light-mode swatches use `#eef2ff` bg + `#3730a3` text — both Tailwind indigo-50 / indigo-800, not derived from `--dl-indigo`/`--ifm-color-primary`. Same drift class as BRAND-101: visual badges read slightly bluer than brand. | Re-derive from indigo token (e.g. bg `color-mix(in srgb, var(--dl-indigo) 8%, white)`, text `var(--dl-indigo-dark)`), or define `--dl-badge-bg`/`--dl-badge-fg` tokens and reuse. | source review |
| BRAND-103 | P3 | 2 | S | `src/css/custom.css:149` | `.dl-cards h3` color hardcoded to `#000` rather than `var(--ifm-heading-color)` or a token. In light mode this is fine; in dark mode the doc-cards override at 1154-1158 changes the background to `#111318` but does NOT reset `h3` color, so cards risk black-on-near-black headings in nested doulabDoc contexts. | Replace `color:#000` with `var(--ifm-heading-color)` (Infima already resolves to white in dark), or add a dark-mode override matching `.card h3` at line 1111. | source review |
| BRAND-104 | P3 | 2 | S | `src/css/custom.css:1093-1097` | Dark-mode card surface is hardcoded `#111318` (and other dark surfaces follow: `#111318`, `#0f1220`, `#0b0e19`, `#1a1d26`). Functional, but no token name — every future dark-surface tweak hunts six call sites. | Introduce `--dl-dark-surface`, `--dl-dark-surface-elev`, `--dl-dark-border` tokens in the dark-theme block and refactor. Pure token hygiene; no visual change. | source review |
| BRAND-105 | P1 | 4 | S | Homepage + case-studies hero subtitle | **CONFIRMED in screenshots.** The hero subtitle on `/` and `/case-studies` is rendered with `text-align: justify` (or equivalent). In EN at 1366 width: "Real    projects.    Clear    checkpoints." shows visible inter-word gaps; in ES at 1366 width: "Proyectos reales. Puntos de control claros." shows the same. At 1920 the effect is muted but still present. Justified display text looks broken at hero scale and contradicts the rest of the site's left-aligned hierarchy. | Remove `text-align: justify` from the hero subtitle component (likely a CSS module on the homepage hero / case-studies hero). Left-align. Optionally add `text-wrap: balance` for cleaner wrap. | `viewport-2026-07-prod-v1/en/home/1920x1080.png`, `…/es/home/1920x1080.png`, `…/en/case-studies/1366x768.png`, `…/es/case-studies/1366x768.png` |
| BRAND-106 | P2 | 3 | S | Homepage hero, ES | **CONFIRMED.** ES homepage hero subtitle wraps to 3 lines vs EN's 2 lines at 1920x1080. Header block grows ~30% taller in ES; CTAs still visible but the hero feels heavier. No card-grid breakage below. | Apply `text-wrap: balance` + `max-inline-size: ~52ch` to `.heroSubtitle` so the line break feels deliberate in both languages, or tighten the ES source ("Arquitectura de innovación, prospectiva y coaching para dar forma al mañana." → cut "para dar forma" or rephrase). | `viewport-2026-07-prod-v1/en/home/1920x1080.png` vs `…/es/home/1920x1080.png` |
| BRAND-107 | P1 | 4 | S | `/es/case-studies` project-card CTAs | **CONFIRMED.** Spanish case-studies page shows EN button label "Read the case →" on every project card while the surrounding chrome (sector, capabilities, description) is properly translated. Brand integrity issue: mixed-language CTA inside an otherwise-Spanish card. Also conversion-blocking, but primary symptom is visual/brand inconsistency. | Translate the CTA via the i18n catalogue (e.g. "Leer el caso →"). Likely a hardcoded string in the case-studies index component rather than a JSON entry. **Hand-off candidate**: i18n (12) owns the fix, brand flags it. | `viewport-2026-07-prod-v1/es/case-studies/1366x768.png` |

(Findings 101-104 derive from source review without screenshots. 105-107 are sample-set spot-checks and have been visually confirmed.)

## Quick wins (top 5)

1. **BRAND-105** — kill `text-align: justify` on hero subtitles. Highest visible-quality return for the least code. One-line CSS fix.
2. **BRAND-107** — translate the "Read the case →" CTA on `/es/case-studies` (hand-off to i18n but flag-of-record stays here).
3. **BRAND-101** — swap stale Tailwind indigo in `.dl-cards > li:hover` border for the IMM canonical token.
4. **BRAND-102** — re-derive `.badge` / `.tag__name` swatches from `--dl-indigo` (light + dark, two selectors each).
5. **BRAND-106** — add `text-wrap: balance` + `max-inline-size` cap to `.heroSubtitle` so ES wraps gracefully without overflow.

## Strategic bets (top 3)

1. **Promote the IMM semantic palette into the doc surface.** Tier-1 tokens (`--dl-purple`/`--dl-green`/`--dl-amber`/`--dl-red`) are declared but underused outside IMM docs. A small set of utility classes (`.dl-state--validated`, `.dl-state--risk`, `.dl-state--open`) would let editors mark content states consistently across both languages without reaching for hex.
2. **Codify a dark-mode surface scale** (`surface-0`/`surface-1`/`surface-2` + matching borders) to replace the six ad-hoc `#0b0e19 / #0f1220 / #111318 / #1a1d26` values now sprinkled through the dark block. Sets up a clean Tier-2 spec doc.
3. **Bilingual hero contract.** Define a measurable rule — e.g. "hero subtitle MUST fit in two visual lines at >=1280px in both EN and ES" — and add a viewport-audit assertion. Prevents BRAND-105 from regressing each time ES copy is retranslated.

## Out of scope / handoffs

- **Contrast ratios** of the new dark-mode primary siblings (`#8a7ad6` etc.) against `#111318` card surfaces → A11Y (07).
- **ES copy length** itself, where it causes wrap issues → Content/Copy (03) + i18n (12).
- **Navbar hover green** functional correctness (already shipped via F-2 close-out) → confirmed visually here; deeper interaction-state audit belongs to UX (01).
- **Mermaid font** consistency in rendered diagrams → handoff to 10 (code/build) if a diagram surface breaks Roboto.

## Open questions for Luis

1. Are `.dl-cards` (the docs cards at `src/css/custom.css:117-156`) still in active use, or has the doulabDoc surface been superseded by the homepage `.card` system? If superseded, BRAND-101/102/103 collapse into a deletion.
2. Should the Tier-1 IMM semantic tokens (`--dl-purple/green/amber/red`) gain lightened/darkened siblings now, or stay deferred until a real consumer appears? (Current CSS comment explicitly defers them.)
3. For BRAND-105/106: if ES hero copy commonly runs longer, do you prefer (a) tightening the Spanish source strings or (b) a global `text-wrap: balance` + width cap? Either works; (a) is editorial, (b) is engineering.
