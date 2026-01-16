# Performance Baseline (Hardening Pass 2)

## Lighthouse baseline (PDF)
- Performance: 71
- Accessibility: 93
- Best Practices: 73
- SEO: 92

### Notes
- Lighthouse explicitly warns: “Chrome extensions affected this Lighthouse run. Try running in incognito.”
- Key metrics observed:
  - Total Blocking Time (TBT): ~1,150 ms
  - Cumulative Layout Shift (CLS): 0

### PDF archive
- `ops/audits/doulab-net/lighthouse-2026-01-15.pdf`

## Pass 2 goal
Visibility and regression prevention (no optimization work yet).

## Dependency pruning (proof snippets)
- Removed `@fontsource/inter` (unused).
- Proof (pre-removal `rg -n "@fontsource/inter" -S`):
  - `package.json:39:    "@fontsource/inter": "^5.2.6",`
  - `package-lock.json:15:        "@fontsource/inter": "^5.2.6",`
