# Phase B5-P2 Plan - Performance quick wins (low-risk)

## Target metrics
- Reduce LCP/INP/CLS risk by improving image decoding behavior and limiting main-thread blocking.

## Proposed changes (2-4 max)
1) Add `decoding="async"` to non-hero diagram images in case study pages.
   - Risk: Low
   - Rollback: revert attribute additions.

## Constraints
- No new plugins or build pipeline changes.
- No security header or CSP changes.
- No analytics or tracker additions.

## Evidence to collect
- Scan for non-hero images missing `decoding="async"` and confirm they are below-the-fold.
- Record file paths and line numbers as proof.
