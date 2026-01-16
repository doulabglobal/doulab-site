# Doulab.net Backlog (Phase B1)

Each item includes ID, description, rationale, acceptance criteria, and commit mapping placeholder.

## P0

### B-P0-01
- Description: Remove or gate `/markdown-page`.
- Rationale: Sample page should not ship in production IA unless intentionally kept.
- Acceptance criteria:
  - `/markdown-page` is removed from production routes or explicitly gated behind a non-public mechanism.
  - Routes audit reflects the change.
- Commits: TBD

### B-P0-02
- Description: Fix placeholder booking link.
- Rationale: Placeholder link is broken and harms conversions.
- Acceptance criteria:
  - No placeholder booking URL remains in repo.
  - Booking inventory shows only valid booking URLs.
- Commits: cc5da1010de433adbb6153d350a709b931c073c1

## P1

### B-P1-01
- Description: Define canonical booking.doulab.net entrypoints and refactor booking policy.
- Rationale: Mixed booking providers create inconsistent user experience and tracking.
- Acceptance criteria:
  - A single canonical booking domain or entrypoint is documented and implemented.
  - All booking CTAs point to the canonical entrypoint.
- Commits: 27bc2bd61d3c81da6b55bc804bd45f1c12fce0e4, cc5da1010de433adbb6153d350a709b931c073c1

### B-P1-02
- Description: CI Node pinning + Cloudflare Pages script parity.
- Rationale: Ensure CI uses a deterministic Node version and build parity with CF.
- Acceptance criteria:
  - CI configuration pins Node version compatible with package.json engines.
  - Cloudflare build scripts match repo scripts (`build:cf`, `verify:build`).
- Commits: 7cf8c4704e73986186dd56e3caf50b6769536bbc

## P2

### B-P2-01
- Description: Introduce EntityHeader + DocBadges patterns.
- Rationale: Standardized headers/badges improve consistency across pages.
- Acceptance criteria:
  - Components exist and are used on applicable pages.
  - Component parity scan shows expected usage.
- Commits: feaee1f1d791360745700df132eda04bb37f8e02, 4aad69da2f93c32393a37109567479f13b8adfcc

### B-P2-02
- Description: Remove inline styles plan.
- Rationale: Inline styles are hard to maintain and bypass theming consistency.
- Acceptance criteria:
  - Plan documented (scope, order, and refactor guidelines).
  - Inline styles inventory updated with a burn-down list.
- Commits: TBD

### B-P2-03
- Description: ES i18n manual plan (no Docusaurus scaffold).
- Rationale: Ensure bilingual rollout without scaffolding automation.
- Acceptance criteria:
  - Manual i18n structure and routing conventions defined.
  - No Docusaurus scaffold command used.
- Commits: TBD

### B-P2-04
- Description: Pass 1 UI primitives (PageHeader + CardGrid) and targeted inline style removal.
- Rationale: Establish shared patterns and reduce inline styling risk with minimal surface change.
- Acceptance criteria:
  - PageHeader applied to ≤ 3 pages in src/pages.
  - CardGrid applied to ≤ 2 pages in src/pages.
  - Inline styles reduced by at least 5 occurrences in src/components.
  - No new inline styles introduced.
- Status: Completed (Pass 1)
- Commits: 98d0e0a724c40b0664d9c837473a3535a1f274ea, 44285372c6595c9b3d7093bc24023920c9f88b32

### B-P2-05
- Description: Lighthouse baseline recorded + PDF archived.
- Rationale: Preserve baseline evidence and enable regression tracking.
- Acceptance criteria:
  - Baseline scores recorded in `docs/ops/performance-baseline.md`.
  - PDF archived under `ops/audits/doulab-net/` with deterministic filename.
- Status: Completed (Hardening Pass 2)
- Commits: TBD

## P3

### B-P3-01
- Description: Versioning rule for phase closeouts.
- Rationale: Align releases with documented phase outcomes.
- Acceptance criteria:
  - `package.json` version bumped only after successful phase closeouts.
  - Release notes reflect the phase completion.
- Commits: TBD
