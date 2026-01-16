# Phase B4-P2 Notes (Baseline)

## Baseline measurements
- Inline style count (src/pages + src/components): 69

## Services subtree inventory
- `src/pages/services/clarityscan.tsx`
- `src/pages/services/coaching-mentoring.tsx`
- `src/pages/services/custom-workshops.tsx`
- `src/pages/services/diagnostics.tsx`
- `src/pages/services/index.tsx`
- `src/pages/services/innovation-maturity.tsx`
- `src/pages/services/innovation-readiness-workshop.tsx`

## Page observations (best-effort)
### `src/pages/insights/index.tsx`
- H1: none in source (Hero component likely renders H1).
- CTA blocks: 18 (heroCtas + card CTAs + FinalCta).
- Duplications: subnav inline layout styles; repeated CTA row margin styles.

### `src/pages/services/index.tsx`
- H1: none in source (Hero component likely renders H1).
- CTA blocks: 8 (heroCtas + card CTAs + final CTA).
- Duplications: none noted.

### `src/pages/services/clarityscan.tsx`
- H1: none in source (Hero component likely renders H1).
- CTA blocks: 2 (heroCtas + final CTA).
- Duplications: microcopy margin inline.

### `src/pages/services/coaching-mentoring.tsx`
- H1: none in source (Hero component likely renders H1).
- CTA blocks: 6 (heroCtas + card CTAs + final CTA).
- Duplications: microcopy margin inline.

### `src/pages/services/custom-workshops.tsx`
- H1: none in source (Hero component likely renders H1).
- CTA blocks: 8 (heroCtas + card CTAs + final CTA).
- Duplications: inline order in layout.

### `src/pages/services/diagnostics.tsx`
- H1: Hero uses a literal `<h1>`.
- CTA blocks: 10 (heroCtas + card CTAs + final CTA).
- Duplications: inline layout styles in hero + CTA alignment + note text.

### `src/pages/services/innovation-maturity.tsx`
- H1: none in source (Hero component likely renders H1).
- CTA blocks: 2 (heroCtas + final CTA).
- Duplications: microcopy margin and FAQ grid inline styles.

### `src/pages/services/innovation-readiness-workshop.tsx`
- H1: Hero uses a literal `<h1>`.
- CTA blocks: 0 (heroCtas in other sections, no direct H1 CTA).
- Duplications: no inline styles detected.
