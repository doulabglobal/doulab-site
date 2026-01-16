# Doulab Website Ops - AGENTS

This file defines workflow, guardrails, backlog tracking, and commit discipline for Doulab website operations in this repo.

## Non-negotiable rules
- Build discipline: any structural/content/styling change must run `npm run build:cf` and `npm run verify:build`.
- STOP rules: unexpected files, broken links, encoding drift, or scope creep -> stop and report before proceeding.
- No silent changes: always report what changed, files touched, and build/verify status.
- Verifier integrity: never weaken, skip, or bypass verifiers.
- Phased execution: follow Phase B1-B6 sequencing; do not jump phases without explicit approval.
- Frozen surfaces: do not modify `clients.doulab.net` (it is frozen).

## Task acceptance criteria
All CODEX tasks must include explicit acceptance criteria in the request or in the response plan.

## Acceptance criteria / audit rules
- Legacy booking link checks exclude `ops/audits/**` (immutable evidence); enforce only in runtime source and active documentation (`src/**`, `docs/**`, configs/constants).
- Header source of truth is `static/_headers` (build `_headers` files are artifacts only).
- CSP changes should default to Report-Only unless a tested policy is confirmed safe; otherwise defer.

## Backlog (tracked) - Phase B1
Each item must link to commit hash(es) upon completion.

### P0
- Remove or gate `/markdown-page`.
- Fix placeholder booking link (redacted).

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
- Current version: v0.8.0
- Latest merged hardening commits: f6930624, fd90198a, 55c258b, 0275390, 9de859c
- Current phase status: B5-P3 complete
- B4-P3.1 pages: `src/pages/privacy-terms.tsx`, `src/pages/terms-and-conditions.tsx`
- B4-P3.1 patterns: Legal layout module, forward page for terms, explicit heading anchors on canonical privacy page.
- B4-P3.1 commits: b61d5c9a94edb64f5f40aefbfdc030990a1562a2, 63fcd20c57e092a1590ce8682712223a76a342b3, 8684817966320351e92fe86aaf6b69437706052a, 503a34fd40683d1000d725ea696fcc812fe3a236
- B4-P3.2 pages: `src/pages/vigia-futura/index.tsx`, `src/pages/work-with-us/index.tsx`, `src/pages/case-studies/ogtic-redlab.tsx`
- B4-P3.2 patterns: Subnav focus-visible styles, centered CTA rows, microcopy spacing via CSS modules.
- B4-P3.2 commits: dd32342423ecaa54484035c6205be6184dd925de, 6d2d63a, 341b38b804433599dde6278e64577a030034be8f, fe7d46ae1e51d252fa898c647143f34d4cefb073
- B4-P3.3 pages: `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`, `src/pages/ecosystems/redlab.tsx`, `src/pages/ecosystems/red-incubadoras.tsx`, `src/pages/case-studies/index.tsx`, `src/pages/case-studies/alpha-inversiones.tsx`, `src/pages/case-studies/fundapec.tsx`, `src/pages/case-studies/afp-siembra.tsx`
- B4-P3.3 patterns: Container spacing moved to CSS modules, case study breadcrumbs/microcopy/video wrappers normalized, CaseStudyCards image styling centralized.
- B4-P3.3 commits: fb38bd82c9e1afd500f51b93c213cf2ced0289ab, e5fea86e2192528933cf3fc6c9cc6d44dd261bbc, 899cc03e604077130f1b3ee6755b22ac23191487
- B5-P1 baseline: performance and runtime baseline captured (docs-only).
- B5-P1 commit: 4f84f4b09e154791fe3102f68c34c07d9dc88b97
- B5-P2 quick wins: add async decoding to below-the-fold case study diagrams.
- B5-P2 commits: 6dcc3cdbaed533c673132c3d420a253dad271d09, 27568e4844d8060ab9d3f8828b866e4035bff321
- B5-P3 improvements: async decode on below-the-fold images across case studies and marketing pages.
- B5-P3 commits: 63e416d3dd9ac4717dba2ab7a5c8e872f6aafdb0, cd423d1493d24c54a2d508d91b048270a3c13c82
- Next pass: B4-P4 (docs landing pages polish) or B5-P4 if defined

## Next decision
- Choose path:
  - Hardening Pass 3 (headers enforcement + GDPR copy review)
  - B4 UX polish (404 UX refinements + minor IA cleanup)
