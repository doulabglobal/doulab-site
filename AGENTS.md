# Doulab Website Ops — AGENTS

This file defines workflow, guardrails, backlog tracking, and commit discipline for Doulab website operations in this repo.

## Non-negotiable rules
- Build discipline: any structural/content/styling change must run `npm run build:cf` and `npm run verify:build`.
- STOP rules: unexpected files, broken links, encoding drift, or scope creep -> stop and report before proceeding.
- No silent changes: always report what changed, files touched, and build/verify status.
- Verifier integrity: never weaken, skip, or bypass verifiers.
- Phased execution: follow Phase B1–B6 sequencing; do not jump phases without explicit approval.
- Frozen surfaces: do not modify `clients.doulab.net` (it is frozen).

## Task acceptance criteria
All CODEX tasks must include explicit acceptance criteria in the request or in the response plan.

## Backlog (tracked) — Phase B1
Each item must link to commit hash(es) upon completion.

### P0
- Remove or gate `/markdown-page`.
- Fix placeholder booking link `https://outlook.office.com/book/REPLACE_ME`.

### P1
- Define canonical booking.doulab.net entrypoints and refactor booking policy.
- CI Node pinning + Cloudflare Pages script parity.

### P2
- EntityHeader + DocBadges introduction.
- Remove inline styles plan.
- ES i18n manual plan (no Docusaurus scaffold command).

### P3
- Versioning rule: update `package.json` version after successful phase closeouts.

## Commit Log
- 7cf8c4704e73986186dd56e3caf50b6769536bbc — chore(build): add build:cf + verify:build scripts for Cloudflare parity
- Rule: every completed backlog item must be linked to commit hash(es).

## Versioning policy
- Follow semantic versioning: MAJOR for breaking changes, MINOR for new features, PATCH for fixes.
- Bump `package.json` version only on successful phase closeouts.
- B6 freeze must tag a release version (if tags are used).
