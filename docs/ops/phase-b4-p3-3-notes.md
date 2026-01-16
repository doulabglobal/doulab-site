# Phase B4-P3.3 Notes - Final UX consistency + Lighthouse delta pass

## Baseline
- Inline style count (rg `style={{}}` in src): 32

## Scope (planned)
- Pages: `src/pages/case-studies/alpha-inversiones.tsx`, `src/pages/case-studies/fundapec.tsx`, `src/pages/case-studies/afp-siembra.tsx`
- Shared component: `src/components/case-studies/CaseStudyCards.tsx`

## Checklist
- Inline style count reduced by at least 12 (target <= 20).
- Single H1 per page remains intact.
- Icon-only links/buttons have accessible labels (if present).
- External links opening new tabs use `rel="noopener noreferrer"`.
- Focus-visible styles present on primary CTAs or subnav links.

## Planned edits
- Replace inline styles on case study breadcrumbs, microcopy rows, and media containers with CSS modules.
- Replace inline styles on responsive video wrappers with CSS modules.
- Move CaseStudyCards image sizing into CSS module.
