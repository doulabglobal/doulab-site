# Phase B5-P3 Notes - Performance deep pass

## Baseline
- Build time (approx): server 8.12s / client 12.77s
- Build warnings: none observed in latest build log
- Build size total: 15444649 bytes (14.73 MB)
- Top 10 largest assets:
  - 0.88 MB  img/alpha-hero.png
  - 0.65 MB  img/ogtic-redlab-card.png
  - 0.56 MB  img/social/2025-09-12-clarityscan-decision-latency.png
  - 0.55 MB  img/work-with-us-hero.png
  - 0.51 MB  assets/js/2279.7ff960b1.js
  - 0.50 MB  img/clarityscan-hero.png
  - 0.48 MB  img/workshops-hero.png
  - 0.48 MB  img/afp-siembra-card.png
  - 0.42 MB  img/diagnostics-hero.png
  - 0.41 MB  assets/js/165.fcb7b6fa.js

## Evidence (read-only)
- Command: `rg -n "<img" src/pages src/components -S`
- Finding: multiple below-the-fold images lack `decoding="async"` (case study diagrams, homepage/insights/cards).

## Changes
- Added `decoding="async"` to below-the-fold images to reduce main-thread decode cost:
  - `src/pages/services/diagnostics.tsx`
  - `src/pages/work-with-us/index.tsx`

## Risks + rollback
- Risk: Low (standard image decoding hint).
- Rollback: revert the perf/site commit and rebuild.

## After (post-change size signals)
- Build size total: 15485357 bytes (14.77 MB)
- Top 10 largest assets:
  - 0.88 MB  img/alpha-hero.png
  - 0.65 MB  img/ogtic-redlab-card.png
  - 0.56 MB  img/social/2025-09-12-clarityscan-decision-latency.png
  - 0.55 MB  img/work-with-us-hero.png
  - 0.51 MB  assets/js/2279.7ff960b1.js
  - 0.50 MB  img/clarityscan-hero.png
  - 0.48 MB  img/workshops-hero.png
  - 0.48 MB  img/afp-siembra-card.png
  - 0.42 MB  img/diagnostics-hero.png
  - 0.41 MB  assets/js/165.fcb7b6fa.js

## Correction
- Previous note overstated the touched files. Actual updates were limited to:
  - `src/pages/services/diagnostics.tsx`
  - `src/pages/work-with-us/index.tsx`
