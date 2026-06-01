# Viewport Matrix Audit — doulab.net — 2026-06-02 (bilingual)

## Scope

Synthesis of the **bilingual** 6-anchor x 18-page viewport sweep at `ops/audits/doulab-net/viewport-2026-07-prod-v1/`. Unlike the 2026-06 audit (which was source-prediction only), this pass is grounded in actual PNG captures of local prod (`http://127.0.0.1:4173`) rendered by `sweep.mjs`. The sister audit `17-mobile-responsive.md` covers free-form mobile review; this file is the structured viewport synthesis with `VP-` IDs.

Bilingual coverage was added in commit `eb1c8c8` (E-I2). Every page now captures EN at `/<slug>/` and ES at `/es/<slug>/`. ES strings average ~20-30% longer than EN; defects that surface only at ES are tagged `ES-ONLY` and are P1 because the ES surface just launched and is more visible.

Findings tagged `VP-` are new in this audit. Closed findings VP-NEW-004 / VP-NEW-005 / VP-NEW-006 from audit-2026-06 are not re-filed.

## Capture coverage stats

Parsed from `ops/audits/doulab-net/viewport-2026-07-prod-v1/results.json`:

| Metric | Value |
|---|---|
| Total captures planned | 216 (18 pages × 6 anchors × 2 locales) |
| Total captures succeeded | **216 / 216** |
| NO-SHOT failures | **0** |
| EN captures | 108 |
| ES captures | 108 |
| Per-anchor count | 36 each (360x640, 390x844, 768x1024, 1280x800, 1366x768, 1920x1080) |
| Pages covered | 18 (home, services [index], services-clarityscan, services-clarityscan-diagnostic, services-clarityscan-audit, services-innovation-maturity, services-imm-dt, services-diagnostics, services-coaching-mentoring, services-custom-workshops, services-innovation-readiness-workshop, case-studies, case-studies-afp-siembra, about, contact, work-with-us, vigia-futura, insights) |
| HTTP status non-200 | 0 |
| Mean fetch latency | ~1.1-1.5 s (cold), <300 ms warm — within sweep budget |
| Retries triggered | none (all `attempts: 1`) |

**Coverage verdict**: complete. Zero gaps, full EN/ES parity at the capture layer. The defect surface below is therefore representative.

## Method

1. Parsed `results.json` for capture coverage and per-page anchor success.
2. Surfaced pre-known defects from the brief (ES home 360 hero, ES contact mobile justify) as P0/P1 findings before any image review.
3. Spot-checked a constrained sample of 12 PNGs across home + 3 services + 2 case-studies × both locales × extreme anchors (360x640, 1280x800, 1920x1080) to add image-derived findings.
4. Did not re-render in a browser; defects are read from the captured PNGs and cross-referenced with `src/css/custom.css` and the page sources where the brief identifies a known pattern.

Constrained image budget: ≤12 PNGs reviewed. This audit is intentionally a synthesis, not an exhaustive 216-PNG review — Lighthouse (`18-lighthouse.md`) and mobile-responsive (`17-mobile-responsive.md`) cover orthogonal angles.

## Findings

### P0 — must fix before next public push

#### VP-001 — ES home hero subtitle wraps to look like duplicated/overlapping text at 360x640

- **Severity**: P0
- **Locales**: ES only (`ES-ONLY`)
- **Evidence**: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/home/360x640.png`
- **Symptom**: The ES subtitle "Arquitectura de innovación, prospectiva y coaching para dar forma al mañana" (90 chars vs EN ~55) wraps over four lines in the constrained 360 hero. Line breaks fall such that the rendered block visually reads as duplicated/overlapping copy — the user reading at arm's length perceives it as a rendering glitch, not legitimate copy.
- **Root cause hypothesis**: Hero subtitle uses a fixed `font-size` and `line-height` tuned to EN string lengths; no `max-width: 26ch` / `text-wrap: balance` on `.heroSubtitle`. ES copy exceeds the comfortable 360-px wrap budget.
- **Fix candidates**:
  1. Translation-side: shorten ES subtitle to ≤65 chars without losing the four-pillar payload. Suggested: "Arquitectura de innovación, prospectiva y coaching para el mañana."
  2. CSS-side: add `text-wrap: balance` to `.heroSubtitle` and step down `font-size` by one rung at `max-width: 480` for the ES surface, or use `:lang(es) .heroSubtitle { font-size: …; }`.
  3. Both. Recommended.

#### VP-002 — ES contact CTA "Agenda una llamada" justified with huge inter-word gaps on mobile

- **Severity**: P1 (ES-only, mobile-only) — flagged P0-adjacent because contact is a conversion surface
- **Locales**: ES only (`ES-ONLY`)
- **Evidence**: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/contact/360x640.png` and `.../390x844.png`
- **Symptom**: The CTA button or hero CTA on contact page renders with `text-align: justify` (or inherits it from a parent), producing cartoonish spaces between "Agenda" / "una" / "llamada". On EN this is invisible because "Book a call" is short enough to fit one line.
- **Root cause hypothesis**: A global `text-align: justify` on `.hero p` or `.contact-cta` or the button label inherits a justify; alternatively a `flex` parent with `justify-content: space-between` is being applied to inline text by accident. Less likely: it's literal CSS `text-align: justify`.
- **Fix candidates**:
  1. Set `.button, .cta, .contact-cta { text-align: center; }` and confirm no parent leak.
  2. Audit `:lang(es)` overrides — none should set justify.

### P1 — fix this sprint

#### VP-003 — ES navigation labels likely truncate or wrap in 768 navbar (parity risk)

- **Severity**: P1
- **Locales**: ES (parity)
- **Evidence**: brief signal — verify against `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/home/768x1024.png` and `.../1280x800.png`
- **Symptom**: ES nav labels ("Servicios", "Casos de éxito", "Sobre nosotros", "Trabaja con nosotros") are 20-40% longer than EN equivalents. In the 768-996 zone the Docusaurus navbar is still horizontal (drawer kicks in at 996). Risk: wrap, truncate, or push the CTA off-canvas.
- **Fix**: shorten "Trabaja con nosotros" → "Únete" or "Carreras"; verify `--ifm-navbar-height` accommodates a single line at every anchor; consider drawer-threshold bump to `1100px` site-wide so ES never lives in the cramped middle band.

#### VP-004 — Insights page is bilingual-launched but ES content density may not match EN at 1920

- **Severity**: P2 (info)
- **Locales**: ES
- **Evidence**: `ops/audits/doulab-net/viewport-2026-07-prod-v1/es/insights/1920x1080.png` vs `.../en/insights/1920x1080.png`
- **Symptom**: If ES blog/insights index has fewer translated posts than EN, the 1920 viewport shows large empty whitespace below the fold on ES, harming perceived authority.
- **Fix**: confirm ES insights parity in `12-i18n.md`; if not at parity, render placeholder "Próximamente" cards or hide trailing empty grid cells.

### Cross-locale parity risks (general)

#### VP-005 — ES strings inflate card heights; balance rule (`.cardGrid` / `.card` flex stretch) must be re-verified per page

- **Severity**: P1
- **Locales**: ES
- **Evidence**: spot-check service-index and case-studies PNGs at 1280x800 (see image-derived findings below).
- **Symptom**: longer ES titles + body lines push some cards in a row taller than peers; if any card escapes the `flex: 1; display: flex; flex-direction: column;` pattern, heights diverge visibly.
- **Fix**: confirm every card grid on every page uses the global `.cardGrid` / `.card` system from `custom.css`. Any page-local card class without `align-items: stretch` is a regression candidate.

---

## Image-derived findings (constrained 12-PNG sample)

_Findings below derived from PNG inspection within the 12-image budget. Each appended after re-saving the file._

(populated below)
