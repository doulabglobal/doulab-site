# Phase B4-P3.2 Notes - UX consistency + accessibility micro-polish

## Baseline
- Inline style count (rg `style={{}}` in src): 45

## Scope (planned)
- Pages: `src/pages/contact/index.tsx`, `src/pages/insights/index.tsx`, `src/pages/vigia-futura/index.tsx`
- Utility/support: `src/pages/work-with-us/index.tsx`
- Case study: `src/pages/case-studies/ogtic-redlab.tsx`
- Services subtree: no changes in this pass unless required for a11y parity.

## Checklist
- Inline style count reduced by at least 10.
- Single H1 per page remains intact.
- Icon-only links/buttons have accessible labels (if present).
- External links opening new tabs use `rel="noopener noreferrer"`.
- Focus-visible styles present on primary CTAs or subnav links.

## Pages/components to touch
- `src/pages/vigia-futura/index.tsx` (remove inline styles, add focus-visible on subnav)
- `src/pages/work-with-us/index.tsx` (remove inline styles)
- `src/pages/case-studies/ogtic-redlab.tsx` (remove inline styles)
