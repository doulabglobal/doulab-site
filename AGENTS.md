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
- Current version: v0.9.0
- Latest merged hardening commits: f6930624, fd90198a, 55c258b, 0275390, 9de859c
- Current phase status: Phase C1 IN PROGRESS
- B4-P3.1 pages: `src/pages/privacy-terms.tsx`, `src/pages/terms-and-conditions.tsx`
- B4-P3.1 patterns: Legal layout module, forward page for terms, explicit heading anchors on canonical privacy page.
- B4-P3.1 commits: b61d5c9a94edb64f5f40aefbfdc030990a1562a2, 63fcd20c57e092a1590ce8682712223a76a342b3, 8684817966320351e92fe86aaf6b69437706052a, 503a34fd40683d1000d725ea696fcc812fe3a236
- B4-P3.2 pages: `src/pages/vigia-futura/index.tsx`, `src/pages/work-with-us/index.tsx`, `src/pages/case-studies/ogtic-redlab.tsx`
- B4-P3.2 patterns: Subnav focus-visible styles, centered CTA rows, microcopy spacing via CSS modules.
- B4-P3.2 commits: dd32342423ecaa54484035c6205be6184dd925de, 6d2d63a, 341b38b804433599dde6278e64577a030034be8f, fe7d46ae1e51d252fa898c647143f34d4cefb073
- B4-P3.3 pages: `src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`, `src/pages/ecosystems/redlab.tsx`, `src/pages/ecosystems/red-incubadoras.tsx`, `src/pages/case-studies/index.tsx`, `src/pages/case-studies/alpha-inversiones.tsx`, `src/pages/case-studies/fundapec.tsx`, `src/pages/case-studies/afp-siembra.tsx`
- B4-P3.3 patterns: Container spacing moved to CSS modules, case study breadcrumbs/microcopy/video wrappers normalized, CaseStudyCards image styling centralized.
- B4-P3.3 commits: fb38bd82c9e1afd500f51b93c213cf2ced0289ab, e5fea86e2192528933cf3fc6c9cc6d44dd261bbc, 899cc03e604077130f1b3ee6755b22ac23191487
- B4-P4 docs-only polish: releases header updated date + notes.
- B4-P4 commit: 63adcc9f56f8aee3b2919e031bcb97dc126eabe6
- B5-P1 baseline: performance and runtime baseline captured (docs-only).
- B5-P1 commit: 4f84f4b09e154791fe3102f68c34c07d9dc88b97
- B5-P2 quick wins: add async decoding to below-the-fold case study diagrams.
- B5-P2 commits: 6dcc3cdbaed533c673132c3d420a253dad271d09, 27568e4844d8060ab9d3f8828b866e4035bff321
- B5-P3 improvements: async decode on below-the-fold images across case studies and marketing pages.
- B5-P3 commits: 63e416d3dd9ac4717dba2ab7a5c8e872f6aafdb0, cd423d1493d24c54a2d508d91b048270a3c13c82, a06dadef26faf034c91d80b916b42fd27fad19f5 (notes correction / scope accuracy)
- B6 freeze: v0.9.0 release bump + closeout artifact.
- B6 commits: 0ff76f9, 91b6308
- B7 plan commit: 1fefcae6d339e1e38aad2b740e39573ebf03ab4e
- B7-P1 commits: 676ca32ac51ed0d7876b225c05b79ef9f705c24f, cdaab4a5e05f94c48b9eed9b18d54819b0dfdfe7
- B7-P2 commits: 14c7111581ade04f2fbef2b48c793444c0905ccf, 4e88916f1c47d6bf1db31014df43442274fa5bd9
- B8-P1 commit: 5146519c30a053b51393a353bb1fb1fd7c848fa2
- B8-P2 commits: bbb57f62051fe4f2b27f1aa8dba8782b44e047fb, 309fbb3aa4d32a3184f64b10bd2284d29d255b98
- B8-P3 closeout: 5c919e0d0d7a47f1f29ff02d0f1571d6b7f93c5d (N/A; covered by B8-P2)
- B-P0-01 commits: ded5a80ee8600205f512abef40decbd50d7d8169, f0a8a20f4a5a085eacdba15202bbccaf1e0f0751
- B-P2-02 commit: f37ff61b9bb1b158875bd10e3d8c227a3dd1b2fa
- B-P2-03 commit: f3f42b3a2e9b38cf2b6a638edcd99681168be745
- B-P3 commits: e417e49, f81cdc3
- Next pass: Phase C1 implementation (awaiting instruction)

## Phase C — Information Architecture & Maintainability

### C1 — Case Studies IA Implementation (IN PROGRESS after this commit)
- Reorder case study sections per canonical structure:
  Hero → Snapshot → Context → Problem → Approach → Delivery → Results → Diagrams → CTA
- Ensure diagrams:
  - Are referenced from narrative
  - Appear after Results by default
- Add missing sections where flagged by Phase C0 audit
- Files in scope:
  - src/pages/case-studies/**
- Evidence:
  - docs/ops/phase-c0-case-studies-ia-audit.md

### C2 — Anchor & In-Page Navigation Normalization (NOT STARTED)
- Normalize anchor usage across pages
- Align deep links with heading IDs
- Optional anchor policy documentation

### C3 — CSS Consolidation (Safe Path Only) (NOT STARTED)
- Consolidate global tokens & utilities into custom.css
- Explicitly exclude component/page CSS modules

### C4 — Accessibility Micro-Fixes (NOT STARTED)
- Contrast fixes (problem cards)
- Non-color link affordances

### C5 — SEO Clarifications (NOT STARTED)
- Decide on custom robots.txt directives
- Document intentional Lighthouse warnings if retained

### C6 — CTA Card Pattern (NOT STARTED)
- Replace standalone CTA-style text blocks with a reusable card-based UI pattern
- Applies sitewide (case studies, services, insights)
- Canonical placement:
  - After Results
  - Before final CTA
- Out of scope:
  - Visual redesign
  - Copy rewrites beyond structural adaptation

### Phase C Push Policy
- No push until all Phase C items are complete
- Single consolidated push at Phase C closeout

## Next decision
- Await instruction to begin Phase C1 implementation.
