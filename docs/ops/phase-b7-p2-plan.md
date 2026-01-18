# Phase B7-P2 Plan - Image Loading/Decoding Consistency

## Objective
- Reduce render-blocking cost by fixing remaining `<img>` tags missing `loading="lazy"`.
- Standardize image attributes to minimize CLS and improve decoding behavior.

## Scope
- Allowed: `src/**` (only image attribute fixes), docs/ops plan/notes, logs, AGENTS/backlog mapping.
- Not allowed: layout refactors, image re-encoding, unrelated cleanup, IA changes.

## Acceptance criteria
- `<img>` without `loading="lazy"` goes from 10 to 0 for non-hero images.
- Eager images allowed only for true hero/LCP (no more than two total), documented in notes.
- Every `<img>` has `decoding="async"` and explicit width/height (or documented exception).
- `npm run build:cf` and `npm run verify:build` pass with logs updated.

## Baseline evidence
- Missing `loading="lazy"` count: 10
- Command:
  - `rg -n "<img\\b(?![^>]*loading=)" src -S --pcre2`

## Planned approach
- Add `loading="lazy"` to non-hero images in pages/components.
- For hero/LCP images, keep eager load and add `fetchPriority="high"` plus width/height and `decoding="async"`.
- Record before/after counts and exceptions in notes.
