# Phase B-P2-03 Plan - ES i18n Manual Plan

## Scope boundary
- Allowed: `docs/ops/phase-b-p2-03-plan.md`, `docs/ops/phase-b-p2-03-notes.md`, build/verify logs, AGENTS/backlog mapping.
- Not allowed: `src/**`, `static/**`, configs, dependencies, or running Docusaurus scaffold commands.

## Objective
- Define a manual ES i18n plan without using Docusaurus scaffold automation.

## Acceptance criteria
- Plan defines manual i18n structure, routing conventions, and content workflow.
- Notes document records this pass (docs-only).
- `npm run build:cf` and `npm run verify:build` pass with logs updated.

## Planned approach
1) Define i18n folder structure and locale routing.
2) Specify translation workflow and ownership.
3) Identify highest-priority pages for ES coverage.
4) Document validation steps and rollout order.

## Gates
- `npm run build:cf`
- `npm run verify:build`
