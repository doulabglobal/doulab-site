# Phase B5-P2 Notes - Performance quick wins

## Evidence (read-only)
- Command: `rg -n "<img" src/pages src/components -S`
- Findings: diagram images in case study pages are below-the-fold and do not specify `decoding="async"`.

## Planned changes
- Add `decoding="async"` to process diagram images in:
  - `src/pages/case-studies/ogtic-redlab.tsx`
  - `src/pages/case-studies/alpha-inversiones.tsx`
  - `src/pages/case-studies/fundapec.tsx`
  - `src/pages/case-studies/afp-siembra.tsx`

## Why (proof-based)
- Async decoding lets the browser decode images off the main thread when possible, reducing render-blocking risk for below-the-fold diagrams.

## After changes
- Applied `decoding="async"` to the four diagram images above.
