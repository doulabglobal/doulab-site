---
title: "Audit 2026-07 — Bilingual full re-audit (consolidated index)"
status: in-progress
---

# Audit 2026-07 — Bilingual full re-audit

## Why this audit

Per the [`feedback_full_audit_at_backlog_end`](../../../../memory) rule: when the active backlog drains, rerun the full 19-role audit. The prior audit was [audit-2026-06](../audit-2026-06/00-index.md). Since then:

- F-batch closed (F-1 through F-5 RESOLVED; F-2 expanded with dark-mode + display/interaction follow-ups).
- E-K1 source-side `<picture>` wiring closed.
- **E-I2 ES launch landed**: bilingual site live at `/` (EN) and `/es/*` (ES) as of commit `eb1c8c8`. 48 ES translation files mirror the EN content.
- E-V4 Docusaurus v4 future flag trial reverted — filed for separate investigation.

This audit's scope is **bilingual**: every role assesses both the EN and ES surfaces. Viewport + Lighthouse capture both locales.

## Methodology

19 roles, fanned out in parallel per [`doulab-audit-role-set`](../../../../memory). Each role writes a uniform-contract markdown file (Scope / Method / Findings / Quick wins / Strategic bets / Out-of-scope handoffs / Open questions). After all 19 land, this file is rewritten as the consolidated index (cross-role themes, top-30, deduped quick wins, deduped strategic bets, P0 list, deduped open questions, 4-phase implementation phasing).

## Live verification artifacts (this pass)

- **Viewport sweep**: `ops/audits/doulab-net/viewport-2026-07-prod-v1/` — 18 pages × 6 anchors × 2 locales = 216 captures (target). Harness: `sweep.mjs` (extended from v5.2 with a `locale` dimension; serves from local prod at `http://127.0.0.1:4173`).
- **Lighthouse**: `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/` — 18 mobile + 4 desktop × 2 locales = 44 runs (target). Harness: `run.mjs`.

## Role files

| # | Role | File |
|---|---|---|
| 01 | IA & UX strategist | [01-ia-ux.md](01-ia-ux.md) |
| 02 | Brand & visual design | [02-brand-visual.md](02-brand-visual.md) |
| 03 | Content & copy strategist | [03-content-copy.md](03-content-copy.md) |
| 04 | Conversion / lead-gen | [04-conversion.md](04-conversion.md) |
| 05 | SEO & discoverability | [05-seo.md](05-seo.md) |
| 06 | Performance & frontend engineering | [06-performance.md](06-performance.md) |
| 07 | Accessibility (WCAG 2.2 AA) | [07-accessibility.md](07-accessibility.md) |
| 08 | Security & privacy | [08-security-privacy.md](08-security-privacy.md) |
| 09 | Analytics & measurement | [09-analytics.md](09-analytics.md) |
| 10 | Code quality & architecture | [10-code-quality.md](10-code-quality.md) |
| 11 | Blog & editorial | [11-blog-editorial.md](11-blog-editorial.md) |
| 12 | i18n readiness (EN→ES parity) | [12-i18n.md](12-i18n.md) |
| 13 | MCF / IMM-P® domain expert | [13-mcf-imm-domain.md](13-mcf-imm-domain.md) |
| 14 | Behavioral economics | [14-behavioral-economics.md](14-behavioral-economics.md) |
| 15 | Behavioral psychology / persuasion ethics | [15-behavioral-psychology.md](15-behavioral-psychology.md) |
| 16 | Sales & positioning (buyer-journey) | [16-sales-positioning.md](16-sales-positioning.md) |
| 17 | Mobile-first / responsive | [17-mobile-responsive.md](17-mobile-responsive.md) |
| 18 | Lighthouse (predicted + live) | [18-lighthouse.md](18-lighthouse.md) |
| 19 | Viewport matrix (6 anchors × 2 locales) | [19-viewport-matrix.md](19-viewport-matrix.md) |

## Consolidation (TBD — to be written after role files land)

- Cross-role themes (≥3 roles)
- Top-30 by impact/effort
- Deduped quick wins
- Deduped strategic bets
- P0 list
- Deduped open questions
- 4-phase implementation phasing
