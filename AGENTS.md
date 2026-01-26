# Doulab Website Ops - AGENTS

This file defines workflow, guardrails, backlog tracking, and commit discipline for Doulab website operations in this repo.

## Non-negotiable rules
- Build discipline: any structural/content/styling change must run `npm run build:cf` and `npm run verify:build`.
- STOP rules: unexpected files, broken links, encoding drift, or scope creep -> stop and report before proceeding.
- No silent changes: always report what changed, files touched, and build/verify status.
- Verifier integrity: never weaken, skip, or bypass verifiers.
- Phased execution: follow Phase B1-B6 sequencing; do not jump phases without explicit approval.
- Frozen surfaces: do not modify `clients.doulab.net` (it is frozen).
- Governance mapping: when a task requires recording the commit hash in governance files, use two commits (implementation first, governance mapping second). Do not amend.
- Docs/ops manifest: `AGENTS.md` must list every file under `docs/ops/`; update the manifest whenever files are added or removed.
- Backlog source: do not duplicate backlog items, statuses, or commit IDs in `AGENTS.md`.

## Task acceptance criteria
All CODEX tasks must include explicit acceptance criteria in the request or in the response plan.

## Acceptance criteria / audit rules
- Legacy booking link checks exclude `ops/audits/**` (immutable evidence); enforce only in runtime source and active documentation (`src/**`, `docs/**`, configs/constants).
- Header source of truth is `static/_headers` (build `_headers` files are artifacts only).
- CSP changes should default to Report-Only unless a tested policy is confirmed safe; otherwise defer.

## Canonical references
- Canonical backlog (status + commits): `docs/ops/doulab-net-backlog.md`
- Lighthouse audit (2026-01-18): supporting evidence (non-blocking, informational post-B verification) - c10eca2

## Editorial Design Systems
- NNY hero banner rules (blog/editorial only): `docs/ops/design-nny-hero-language.md`
- Rule: No blog hero banner may be implemented outside the NNY system.

## Commit Log
- 7cf8c4704e73986186dd56e3caf50b6769536bbc - chore(build): add build:cf + verify:build scripts for Cloudflare parity
- Rule: every completed backlog item must be linked to commit hash(es).

## Versioning policy
- Follow semantic versioning: MAJOR for breaking changes, MINOR for new features, PATCH for fixes.
- Bump `package.json` version only on successful phase closeouts.
- B6 freeze must tag a release version (if tags are used).

## Per-pass governance updates (hard rule)
- Every pass MUST update:
  - `docs/ops/doulab-net-backlog.md` with completed items + commit hashes
  - `AGENTS.md` with current phase status and any new guardrails/clarifications
- Current version: v0.9.0
- Latest merged hardening commits: f6930624, fd90198a, 55c258b, 0275390, 9de859c
- Current phase status: Phase C IN PROGRESS

## Docs/Ops manifest (canonical references)
- docs/ops/404-spec.md
- docs/ops/booking-architecture.md
- docs/ops/booking-link-map.md
- docs/ops/deps-prune-proof.md
- docs/ops/design-nny-hero-language.md (locked)
- docs/ops/doulab-net-backlog.md
- docs/ops/gdpr-compliance.md
- docs/ops/hardening-pass-3-plan.md
- docs/ops/hardening-plan.md
- docs/ops/performance-baseline.md
- docs/ops/phase-b-p0-01-notes.md
- docs/ops/phase-b-p2-02-notes.md
- docs/ops/phase-b-p2-02-plan.md
- docs/ops/phase-b-p2-03-notes.md
- docs/ops/phase-b-p2-03-plan.md
- docs/ops/phase-b-p3-notes.md
- docs/ops/phase-b-p3-plan.md
- docs/ops/phase-b1-site-reevaluation.md
- docs/ops/phase-b2-plan.md
- docs/ops/phase-b4-p1-notes.md
- docs/ops/phase-b4-p2-notes.md
- docs/ops/phase-b4-p3-2-notes.md
- docs/ops/phase-b4-p3-2-plan.md
- docs/ops/phase-b4-p3-3-notes.md
- docs/ops/phase-b4-p3-legal-consolidation.md
- docs/ops/phase-b4-p4-notes.md
- docs/ops/phase-b4-ux-polish-plan.md
- docs/ops/phase-b5-p1-baseline.md
- docs/ops/phase-b5-p2-notes.md
- docs/ops/phase-b5-p2-plan.md
- docs/ops/phase-b5-p3-notes.md
- docs/ops/phase-b5-p3-plan.md
- docs/ops/phase-b6-closeout.md
- docs/ops/phase-b7-p1-notes.md
- docs/ops/phase-b7-p2-notes.md
- docs/ops/phase-b7-p2-plan.md
- docs/ops/phase-b7-plan.md
- docs/ops/phase-b8-p1-diagram-system.md
- docs/ops/phase-b8-p1-notes.md
- docs/ops/phase-b8-p2-notes.md
- docs/ops/phase-b8-p3-closeout.md
- docs/ops/phase-c0-case-studies-ia-audit.md
- docs/ops/phase-c11-service-conversion-audit.md
- docs/ops/phase-c12-conversion-ux-spec.md (Phase C12 UX specification and conversion evidence)
- docs/ops/phase-c-closeout.md (Phase C formal closeout document and evidence log)
- docs/ops/phase-d-closeout.md (Phase D formal closeout document and evidence log)
- docs/ops/security-headers-review.md
- ops/audits/doulab-net/lighthouse-2026-01-18.pdf (reference only)
- ops/audits/doulab-net/logs/build-cf.log (reference only)
- ops/audits/doulab-net/logs/verify-build.log (reference only)

Any new decision-relevant ops artifact must be added to this manifest.
