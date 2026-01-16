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
- Commits: f6930624a8c3f96b1ad839b05d95ac5124c66c11

### B-P2-06
- Description: Hardening Pass 3 baseline security + GDPR/CH compliance + 404 noindex.
- Rationale: Improve security posture and compliance transparency without breaking site behavior.
- Acceptance criteria:
  - `static/_headers` updated with baseline headers (HSTS, Permissions-Policy, Referrer-Policy, nosniff).
  - GDPR/CH compliance baseline documented and reflected in privacy/terms pages.
  - 404 includes `noindex,follow` and maintains helpful navigation.
  - Dependency prune proof recorded (no removals unless proven safe).
- Status: Completed (Hardening Pass 3)
- Commits: 0275390eafe46a129ab1bb283c60ce11b3a5daf4, 9de859c0484128e9876910fb09bde32684235b9a

## P3

### B-P3-01
- Description: Versioning rule for phase closeouts.
- Rationale: Align releases with documented phase outcomes.
- Acceptance criteria:
  - `package.json` version bumped only after successful phase closeouts.
  - Release notes reflect the phase completion.
- Commits: TBD

### B-P3-02
- Description: Fix missing `check:links` script target.
- Rationale: `npm run check:links` currently fails because `scripts/check-anchors.mjs` is missing.
- Acceptance criteria:
  - Either restore `scripts/check-anchors.mjs` from a known-good version, or
  - Update package scripts to remove/replace the missing script reference.
- Commits: TBD

## Phase B4 (UX polish, whole-site)

### B4-P1
- Description: Core nav + primary marketing pages polish.
- Rationale: Align top marketing routes with consistent headers, cards, and CTA hierarchy.
- Acceptance criteria:
  - No more than five pages modified in the pass.
  - Inline styles reduced on touched pages.
  - CTA/Next steps blocks consistent.
- Status: Completed (B4-P1)
- Commits: d8dc48636704f123517b3fee15879dfa6b923609, 530c64cd8c9649169151526dacc0ed7ee6b934e8

### B4-P2
- Description: Services subtree polish (`/services/*`).
- Rationale: Make services pages consistent and reduce duplication.
- Acceptance criteria:
  - Card grids and CTA blocks normalized across services pages.
  - Inline styles reduced on touched pages.
- Status: Completed (B4-P2)
- Commits: d555d01f6f1b2567843b4c030d9cc60f14f7b8d6, 55ab35f2b0d682c650d01deab4ac93a7ed87edc5

### B4-P3
- Description: Utility/legal/support pages polish.
- Rationale: Improve readability and consistency on lower-traffic, critical pages.
- Acceptance criteria:
  - Consistent header/section patterns across legal/support pages.
  - Inline styles reduced on touched pages.
- Commits: TBD

### B4-P3.1
- Description: Consolidate legal pages (privacy/terms) with a canonical route and forward page.
- Rationale: Reduce user confusion and ensure a single source of truth for legal content.
- Acceptance criteria:
  - `/privacy-terms` is canonical with anchors for privacy, analytics, bookings, terms, contact.
  - `/terms-and-conditions` remains route-safe and forwards users to the canonical page.
  - No inline styles added.
- Status: Completed (B4-P3.1)
- Commits: b61d5c9a94edb64f5f40aefbfdc030990a1562a2, 63fcd20c57e092a1590ce8682712223a76a342b3, 8684817966320351e92fe86aaf6b69437706052a

### B4-P4
- Description: Docs landing pages polish (docs-only components allowed).
- Rationale: Align docs entry points with consistent navigation and hierarchy.
- Acceptance criteria:
  - Docs landing pages use consistent headers and CTAs.
  - No docs-only components used in `src/pages/**`.
- Commits: TBD
