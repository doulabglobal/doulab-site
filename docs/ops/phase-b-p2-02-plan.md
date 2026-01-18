# Phase B-P2-02 Plan - Remove Inline Styles Plan

## Scope boundary
- Allowed: `docs/ops/phase-b-p2-02-plan.md`, `docs/ops/phase-b-p2-02-notes.md`, build/verify logs, AGENTS/backlog mapping.
- Not allowed: `src/**`, `static/**`, configs, dependencies.

## Objective
- Define a documented plan to remove inline styles in a controlled, scoped sequence.

## Acceptance criteria
- Plan document defines scope, sequence, and criteria for removal work.
- Notes document records what changed in this pass (docs-only).
- `npm run build:cf` and `npm run verify:build` pass; logs updated.

## Planned approach
1) Inventory inline styles by component and page (rg-based list).
2) Prioritize shared components and high-traffic pages.
3) Replace inline styles with CSS modules in small batches.
4) Validate visuals and run build/verify after each batch.

## Gates
- `npm run build:cf`
- `npm run verify:build`
