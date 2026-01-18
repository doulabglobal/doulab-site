# Phase B7-P2 Notes - Image Loading/Decoding Consistency

## Scope
- Image loading/decoding attribute fixes only.
- No layout refactors or image re-encoding.

## Files changed
- `src/components/Hero.tsx`
- `src/components/case-studies/CaseStudyCards.tsx`
- `src/pages/index.tsx`
- `src/pages/services/index.tsx`
- `src/pages/services/diagnostics.tsx`
- `src/pages/about/index.tsx`
- `src/pages/contact/index.tsx`
- `src/pages/insights/index.tsx`
- `src/pages/what-we-do/index.tsx`
- `src/pages/work-with-us/index.tsx`
- `src/pages/vigia-futura/index.tsx`
- `src/pages/services/clarityscan.tsx`
- `src/pages/services/custom-workshops.tsx`
- `src/pages/services/coaching-mentoring.tsx`
- `src/pages/services/innovation-maturity.tsx`
- `src/pages/case-studies/index.tsx`
- `src/pages/case-studies/alpha-inversiones.tsx`
- `src/pages/case-studies/afp-siembra.tsx`
- `src/pages/case-studies/fundapec.tsx`
- `src/pages/case-studies/ogtic-redlab.tsx`

## Metrics
- Missing `loading="lazy"` count (before): 10
- Missing `loading="lazy"` count (after): 0
- Command:
  - `rg -n "<img\\b(?![^>]*loading=)" src -S --pcre2`

## Eager/LCP exceptions (allowed)
- `src/pages/index.tsx` (home hero)
- `src/pages/services/index.tsx` (services hero)

## Notes
- All `<img>` tags now include `loading` (lazy or eager), `decoding="async"`, and explicit width/height.
- Diagnostics hero image switched to lazy to keep eager exceptions at two total.
