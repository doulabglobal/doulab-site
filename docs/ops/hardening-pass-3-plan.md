# Hardening Pass 3 Plan

## Scope
- Enforce baseline security headers in the Cloudflare Pages headers file.
- Document GDPR/CH compliance baseline and align public privacy copy.
- Add noindex to 404.
- Produce proof-based dependency hygiene notes (no removals without proof).
- Update governance artifacts (backlog + AGENTS).

## Files expected to change
- `static/_headers`
- `docs/ops/security-headers-review.md`
- `docs/ops/gdpr-compliance.md`
- `docs/ops/deps-prune-proof.md`
- `docs/ops/404-spec.md`
- `src/pages/privacy-terms.tsx`
- `src/pages/terms-and-conditions.tsx`
- `src/pages/404.tsx`
- `docs/ops/doulab-net-backlog.md`
- `AGENTS.md`

## Acceptance criteria
- Security headers updated in `static/_headers` with valid syntax.
- `docs/ops/security-headers-review.md` includes Pass 3 enforced rules and rationale.
- `docs/ops/gdpr-compliance.md` created and aligned with actual implementation.
- Privacy/terms copy reflects reality (no false claims; booking note included).
- 404 includes noindex and keeps current navigation links.
- `docs/ops/deps-prune-proof.md` created (removals only with proof; otherwise "kept").
- `docs/ops/doulab-net-backlog.md` and `AGENTS.md` updated for this pass.
- `npm run build:cf` and `npm run verify:build` pass.

## Baseline evidence
### Header rules source
- Source of truth: `static/_headers`.
- Build artifacts also contain `_headers` (e.g., `build*/_headers`), but they are outputs, not edited.

### Tracker scan summary
- No analytics/tracking scripts found in `src/**` or `docs/**`.
- References only:
  - `src/pages/privacy-terms.tsx` mentions "Plausible Analytics" (needs alignment).
  - `src/theme/Root.tsx` comment notes GTM/GA removal.
  - `README.md` states "Cloudflare Web Analytics only."
- No analytics configuration found in `docusaurus.config.ts`.
