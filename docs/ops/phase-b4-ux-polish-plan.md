# Phase B4 UX Polish Plan (Whole-Site, Phased)

## Scope
Phase B4 is a whole-site UX and styling polish, executed in controlled passes.

## Pass breakdown
### B4-P1: Core nav + primary marketing pages
- Focus: home and top marketing routes.
- Target batch: no more than five pages.
- Goal: consistent headers, card grids, and CTA hierarchy.

### B4-P2: Services subtree
- Focus: `/services/*` and related programs.
- Goal: consistent service cards, benefit framing, and next steps.

### B4-P3: Utility/legal/support pages
- Focus: contact, work-with-us, privacy/terms, booking success pages.
- Goal: consistent layout, headings, and reduced inline styles.

### B4-P4: Docs landing pages + polish
- Focus: docs landing pages; docs-only components allowed.
- Goal: consistent docs entry points, stable IA cues.

## Intended UI pattern changes
- Use shared PageHeader/Hero patterns (retain existing hero components).
- Replace inline styles with CSS modules (shared `ux-polish.module.css`).
- Normalize CTA rows spacing (single CSS class for alignment/margins).
- Standardize KPI typography and card footer layout via classes.

## Acceptance criteria (per pass)
- No more than five pages modified in the pass.
- No new inline `style={{ ... }}` added; reduce existing inline styles.
- PageHeader/Hero and CardGrid usage preserved or improved.
- CTA/Next steps blocks use consistent spacing and alignment.
- Build and verify pass.
- Backlog and AGENTS updated with pass status and commit mapping.

## Global acceptance for Phase B4
- All user-facing pages follow a consistent header + CTA hierarchy.
- Inline styles are removed where practical from `src/pages/**`.
- Card grids use consistent spacing and card footer layout.
- Accessibility: one H1 per page, heading order preserved.

## Commit plan
1) `docs(ops): fix b4 plan mdx parse + define whole-site b4 phased approach`
2) `refactor(ui): phase B4 ux polish pass 1 (pages listed in commit body)`
