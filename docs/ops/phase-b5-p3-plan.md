# Phase B5-P3 Plan - Performance deep pass

## Target metrics
- Reduce JS/CSS payload or runtime overhead without changing IA/UX.
- Focus on low-risk image decode improvements and render scheduling.

## Proposed changes (2-4 max)
1) Add `decoding="async"` to below-the-fold images that currently omit it.
   - Risk: Low
   - Rollback: revert attribute additions.

## Baseline evidence (from latest build output)
- build size total: 15444649 bytes (14.73 MB)
- top assets (largest 10): see notes for list

## Rollback plan
- Revert the perf/site commit and re-run build/verify.
