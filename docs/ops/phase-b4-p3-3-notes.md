# Phase B4-P3.3 Notes - Final UX consistency + Lighthouse delta pass

## Baseline
- Inline style count (rg `style={{}}` in src): 32

## Scope (planned)
- Pages: `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`, `src/pages/ecosystems/redlab.tsx`, `src/pages/ecosystems/red-incubadoras.tsx`, `src/pages/case-studies/index.tsx`
- Shared component: none in this pass

## Checklist
- Inline style count reduced by at least 12 (target `<= 20`).
- Single H1 per page remains intact.
- Icon-only links/buttons have accessible labels (if present).
- External links opening new tabs use `rel="noopener noreferrer"`.
- Focus-visible styles present on primary CTAs or subnav links.

## Planned edits
- Replace inline styles on case study breadcrumbs, microcopy rows, and media containers with CSS modules.
- Replace inline styles on responsive video wrappers with CSS modules.
- Move CaseStudyCards image sizing into CSS module.

## Results
- Inline style count after changes: 0
- Pages updated:
  - `src/pages/book-clarityscan.tsx`: container padding moved to CSS module.
  - `src/pages/book-clarityscan-success.tsx`: container padding/max-width moved to CSS module.
  - `src/pages/ecosystems/redlab.tsx`: main layout styles moved to CSS module.
  - `src/pages/ecosystems/red-incubadoras.tsx`: main layout styles moved to CSS module.
  - `src/pages/case-studies/index.tsx`: microcopy spacing moved to CSS module.
  - `src/pages/case-studies/alpha-inversiones.tsx`: breadcrumb/microcopy/media centering moved to CSS module.
  - `src/pages/case-studies/fundapec.tsx`: breadcrumb/microcopy/media centering moved to CSS module.
  - `src/pages/case-studies/afp-siembra.tsx`: breadcrumb/microcopy/video wrappers moved to CSS module.
  - `src/components/case-studies/CaseStudyCards.tsx`: image sizing moved to CSS module.
