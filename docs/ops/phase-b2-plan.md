# Phase B2 Plan (Pass 1)

## Objective
Introduce shared UI primitives and remove the highest-risk inline styles while keeping scope minimal and visuals stable.

## Pass 1 will change
- Add `PageHeader` component for `src/pages/*` (non-docs) and apply to up to 3 pages.
- Add `CardGrid` component for consistent grid structure and apply to 1–2 pages.
- Remove inline styles from shared components (`src/components/*`) with CSS modules (target: Hero + FinalCta).

## Pass 1 will NOT change
- No EntityHeader/DocBadges for `src/pages/*` (docs-only patterns remain docs-only).
- No i18n/ES scaffolding.
- No booking link updates (Phase B3 already closed).
- No Cloudflare configuration changes.
- No verifier weakening.

## Acceptance criteria checklist
- PageHeader created and applied to ≤ 3 pages.
- CardGrid component created and applied to ≤ 2 pages.
- Inline styles reduced by at least 5 occurrences (report before/after counts).
- No new inline styles introduced.
- build:cf and verify:build pass.
- Backlog updated with completed items and commit hash placeholders.

## Rollback strategy
- Revert commits with `git revert <hash>` in reverse order.
