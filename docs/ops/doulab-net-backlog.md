# Doulab.net Backlog (Phase B1)

Phase B status: CLOSED (final commit hashes confirmed).
Phase C status: C9/C10 complete; C3/C5/C11 pending.
Phase D status: D0 intake; D1 blocked; D2-D9 complete (mapped).

Each item includes ID, description, rationale, acceptance criteria, and commit mapping placeholder.

## P0

### B-P0-01
- Description: Remove or gate `/markdown-page`.
- Rationale: Sample page should not ship in production IA unless intentionally kept.
- Acceptance criteria:
  - `/markdown-page` is removed from production routes or explicitly gated behind a non-public mechanism.
  - Routes audit reflects the change.
- Status: Completed (B-P0-01)
- Commits: ded5a80ee8600205f512abef40decbd50d7d8169, f0a8a20f4a5a085eacdba15202bbccaf1e0f0751

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
- Status: Completed (B-P2-02)
- Commits: f37ff61b9bb1b158875bd10e3d8c227a3dd1b2fa

### B-P2-03
- Description: ES i18n manual plan (no Docusaurus scaffold).
- Rationale: Ensure bilingual rollout without scaffolding automation.
- Acceptance criteria:
  - Manual i18n structure and routing conventions defined.
  - No Docusaurus scaffold command used.
- Status: Completed (B-P2-03)
- Commits: f3f42b3a2e9b38cf2b6a638edcd99681168be745

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

### B-P3-03
- Description: Hardening Pass 3 (headers + GDPR copy review).
- Rationale: Reduce security/compliance risk before Phase B closeout.
- Acceptance criteria:
  - CSP enforced or documented; Referrer-Policy, Permissions-Policy, X-Content-Type-Options, HSTS, and clickjacking protection set.
  - Privacy/analytics disclosure aligns with Cloudflare Web Analytics and booking flow; no new legal claims.
  - `build:cf` and `verify:build` logs updated.
- Status: Completed (B-P3)
- Commits: e417e49, f81cdc3

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
- Commits: b61d5c9a94edb64f5f40aefbfdc030990a1562a2, 63fcd20c57e092a1590ce8682712223a76a342b3, 8684817966320351e92fe86aaf6b69437706052a, 503a34fd40683d1000d725ea696fcc812fe3a236

### B4-P3.2
- Description: UX consistency + accessibility micro-polish (plan + baseline).
- Rationale: Define scope and measurements before applying site-wide a11y polish.
- Acceptance criteria:
  - Plan document created with scope, baseline, and checks.
  - No site code changes in the plan-only fix.
- Status: Completed (B4-P3.2)
- Commits: dd32342423ecaa54484035c6205be6184dd925de, 6d2d63a, 341b38b804433599dde6278e64577a030034be8f, fe7d46ae1e51d252fa898c647143f34d4cefb073

### B4-P3.3
- Description: Final UX consistency + Lighthouse delta readiness (plan + baseline).
- Rationale: Capture scope and measurements before the last a11y/consistency polish.
- Acceptance criteria:
  - Notes document created with baseline and checklist.
  - No site code changes in the plan-only fix.
- Status: Completed (B4-P3.3)
- Commits: fb38bd82c9e1afd500f51b93c213cf2ced0289ab, e5fea86e2192528933cf3fc6c9cc6d44dd261bbc, 899cc03e604077130f1b3ee6755b22ac23191487

### B4-P4
- Description: Docs landing pages polish (docs-only components allowed).
- Rationale: Align docs entry points with consistent navigation and hierarchy.
- Acceptance criteria:
  - Docs landing pages use consistent headers and CTAs.
  - No docs-only components used in `src/pages/**`.
- Commits: 63adcc9f56f8aee3b2919e031bcb97dc126eabe6

## Phase B5 (Performance baseline)

### B5-P1
- Description: Performance and runtime baseline capture (docs-only).
- Rationale: Record current toolchain, build/verify timing, and build artifact sizes.
- Acceptance criteria:
  - Baseline document created under `docs/ops/phase-b5-p1-baseline.md`.
  - build:cf and verify:build executed with logs captured.
  - No code or config changes.
- Status: Completed (B5-P1)
- Commits: 4f84f4b09e154791fe3102f68c34c07d9dc88b97

### B5-P2
- Description: Performance quick wins (low-risk, proof-based).
- Rationale: Reduce decode cost for below-the-fold diagrams without altering IA or tooling.
- Acceptance criteria:
  - Plan and notes created under `docs/ops/phase-b5-p2-plan.md` and `docs/ops/phase-b5-p2-notes.md`.
  - Low-risk image decoding tweaks applied and documented.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B5-P2)
- Commits: 6dcc3cdbaed533c673132c3d420a253dad271d09, 27568e4844d8060ab9d3f8828b866e4035bff321

### B5-P3
- Description: Performance deep pass (proof-based improvements).
- Rationale: Reduce decode overhead and document bundle-size signals without UX/IA changes.
- Acceptance criteria:
  - Plan and notes created under `docs/ops/phase-b5-p3-plan.md` and `docs/ops/phase-b5-p3-notes.md`.
  - Low-risk performance tweaks applied and documented with before/after signals.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B5-P3)
- Commits: 63e416d3dd9ac4717dba2ab7a5c8e872f6aafdb0, cd423d1493d24c54a2d508d91b048270a3c13c82, a06dadef26faf034c91d80b916b42fd27fad19f5 (notes correction)

## Phase B6 (Freeze & Version)

### B6-Freeze
- Description: Freeze site at new release and record closeout artifact.
- Rationale: Lock B1-B5 outputs with auditable release notes and closeout record.
- Acceptance criteria:
  - Version bump committed (v0.9.0).
  - Release notes updated and closeout artifact created.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B6)
- Commits: 0ff76f9, 91b6308

## Phase B7 (Planning)

### B7-Plan
- Description: Post-freeze roadmap definition (plan-only).
- Rationale: Define objectives, scope boundaries, and acceptance criteria for the next phase.
- Acceptance criteria:
  - Plan created under `docs/ops/phase-b7-plan.md`.
  - No code or config changes.
- Status: Completed (B7 plan)
- Commits: 1fefcae6d339e1e38aad2b740e39573ebf03ab4e

### B7-P1
- Description: Performance quick wins with measurable before/after metrics.
- Rationale: Reduce payload footprint with low-risk, reversible changes and documented evidence.
- Acceptance criteria:
  - Baseline metrics captured in `docs/ops/phase-b7-p1-notes.md`.
  - Low-risk asset pruning documented with proof.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B7-P1)
- Commits: 676ca32ac51ed0d7876b225c05b79ef9f705c24f, cdaab4a5e05f94c48b9eed9b18d54819b0dfdfe7

### B7-P2
- Description: Image loading/decoding consistency (lazy-loading + eager exceptions).
- Rationale: Reduce render-blocking cost and standardize image attributes without layout changes.
- Acceptance criteria:
  - `docs/ops/phase-b7-p2-plan.md` and `docs/ops/phase-b7-p2-notes.md` created.
- Missing `loading="lazy"` count reduced to 0 for non-hero images.
- Eager/LCP exceptions documented (no more than two).
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B7-P2)
- Commits: 14c7111581ade04f2fbef2b48c793444c0905ccf, 4e88916f1c47d6bf1db31014df43442274fa5bd9

## Phase B8 (Diagram system)

### B8-P1
- Description: Define canonical Mermaid diagram system and templates for case studies (docs-only).
- Rationale: Provide a consistent, diff-friendly diagram grammar before per-case diagrams.
- Acceptance criteria:
  - `docs/ops/phase-b8-p1-diagram-system.md` created with two canonical diagram types.
  - `docs/ops/phase-b8-p1-notes.md` created with scope and summary.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B8-P1)
- Commits: 5146519c30a053b51393a353bb1fb1fd7c848fa2

### B8-P2
- Description: Add Mermaid diagrams to case study pages using the B8-P1 system.
- Rationale: Replace static process images with consistent, auditable diagrams.
- Acceptance criteria:
  - Each target case study contains exactly two Mermaid diagrams (System Flow + Capability Progression).
  - Diagrams use the canonical grammar and admonition wrapper.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B8-P2)
- Commits: bbb57f62051fe4f2b27f1aa8dba8782b44e047fb, 309fbb3aa4d32a3184f64b10bd2284d29d255b98

### B8-P3
- Description: Remaining case study diagrams (AFP Siembra, Fundapec).
- Rationale: Close out remaining scope if any.
- Acceptance criteria:
  - No additional diagrams required; scope already satisfied by B8-P2.
  - Closeout recorded in `docs/ops/phase-b8-p3-closeout.md`.
- Status: Done (Covered by B8-P2; no remaining scope)
- Commits: 309fbb3aa4d32a3184f64b10bd2284d29d255b98, 7c56d5a5f3d9d8f696f6e6d6a1c7c1372b4a6e5e

## Phase C — Information Architecture & Maintainability

### C1
- Description: Case studies IA implementation (reorder sections, diagram placement, missing sections).
- Rationale: Align case study structure to an executive-first narrative and reduce floating diagrams.
- Acceptance criteria:
  - Case studies follow the canonical order (Hero -> Snapshot -> Context -> Problem -> Approach -> Delivery -> Results -> Diagrams -> CTA).
  - Diagrams are referenced in narrative and appear after Results by default.
  - Missing sections flagged in Phase C0 audit are added.
- Evidence: `docs/ops/phase-c0-case-studies-ia-audit.md`
- Status: Done
- Commits: afdebb4, 21c0bb0, 17cbaa9, 4382b81

### C2
- Description: Anchor & in-page navigation normalization.
- Rationale: Prevent broken deep links and improve navigability.
- Acceptance criteria:
  - Heading IDs align with in-page links.
  - Anchor usage normalized across pages.
- Status: Done
- Commits: 78fe9c9

### C3
- Description: CSS consolidation (safe path only).
- Rationale: Reduce styling drift while preserving component encapsulation.
- Acceptance criteria:
  - Global tokens/utilities consolidated into `custom.css`.
  - Component/page CSS modules remain untouched.
- Status: Not started
- Commits: TBD

### C4
- Description: Accessibility micro-fixes.
- Rationale: Address high-signal a11y gaps with low risk changes.
- Acceptance criteria:
  - Contrast fixes applied to problem cards.
  - Non-color link affordances added where needed.
- Status: Done
- Commits: 39bb2c2, 65ae797

### C5
- Description: SEO clarifications.
- Rationale: Remove ambiguity around intentional SEO decisions.
- Acceptance criteria:
  - Robots directives are explicit.
  - Known Lighthouse warnings are documented if retained.
- Status: Blocked (robots.txt missing; source unknown)
- Notes: robots.txt not found in repo; locate hosting/generation source before changes.
- Commits: TBD

### C6
- Description: CTA card pattern.
- Rationale: Replace standalone CTA-style text blocks with a reusable card-based UI pattern.
- Acceptance criteria:
  - CTA card pattern documented for use after Results and before final CTA.
  - Applies sitewide (case studies, services, insights).
  - No visual redesign or copy rewrites beyond structural adaptation.
- Status: Done
- Commits: bf55ba4

### C7
- Description: Terminology normalization (IMM-P®).
- Rationale: Ensure consistent registered mark usage across pages.
- Acceptance criteria:
  - IMM-Pr replaced with IMM-P® in src/pages.
- Status: Done
- Commits: c7052ce

### C8
- Description: Case study back-link placement normalization.
- Rationale: Standardize navigation placement and reduce mid-body link drift.
- Acceptance criteria:
  - Case studies include "← All case studies" near the top and only once.
- Status: Done
- Commits: c7052ce

### C9
- Description: ClarityScan® terminology normalization.
- Rationale: Ensure registered mark usage is consistent across pages.
- Acceptance criteria:
  - ClarityScanr replaced with ClarityScan® in src/pages.
- Status: Done
- Commits: 53a7723

### C10
- Description: CTA briefing cards button CTAs + visibility.
- Rationale: Improve CTA card visibility and ensure button-based link affordances.
- Acceptance criteria:
  - CTA card links render as buttons.
  - CTA cards have scoped visual prominence.
- Status: Done
- Commits: 53a7723

### C11
- Description: Service conversion workflow unification (analysis + implementation plan).
- Rationale: Reduce mailto-based CTAs and normalize conversion flows across services.
- Acceptance criteria:
  - Current-state audit and target workflow options documented.
  - Default and fallback workflow recommendations proposed.
- Evidence: `docs/ops/phase-c11-service-conversion-audit.md`
- Status: Not started
- Commits: TBD

### C12
- Description: Conversion UX spec + decision (default/fallback) and mailto replacement plan.
- Rationale: Establish an implementation-ready conversion model with consistent booking-first entrypoints.
- Acceptance criteria:
  - Unified conversion spec documented with default and fallback flows.
  - Mailto replacement plan defined for briefing and service CTAs.
  - Success/confirmation pattern defined beyond ClarityScan.
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: 46d5e21

### C13
- Description: Replace mailto conversion CTAs with booking /briefing (Phase 1).
- Rationale: Remove mailto as a conversion endpoint and standardize briefing CTAs.
- Acceptance criteria:
  - "Request a briefing" CTAs point to booking.doulab.net/briefing.
  - Booking architecture updated to reflect briefing route.
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: a0f745a

### C14
- Description: Services booking links canonicalization.
- Rationale: Ensure service CTAs route through booking.doulab.net canonical links.
- Acceptance criteria:
  - Primary service CTAs point to booking.doulab.net canonical routes.
  - No booking-intent CTAs link directly to provider URLs.
- Evidence: `docs/ops/booking-architecture.md`, `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: 96c2452, 79a9903

### C15
- Description: Replace conversion mailto CTAs with booking-first alternatives.
- Rationale: Remove mailto from conversion flows while preserving legal/privacy contacts.
- Acceptance criteria:
  - Conversion mailto CTAs replaced with booking.doulab.net routes.
  - Legal/privacy mailto links remain intact.
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: 6173b30

### C16
- Description: Restore ClarityScan® paid-first Stripe conversion flow.
- Rationale: Ensure fixed-fee ClarityScan follows payment-first before scheduling.
- Acceptance criteria:
  - ClarityScan CTAs point to Stripe Checkout payment link.
  - Booking step remains post-payment (success page -> scheduling).
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`, `docs/ops/booking-architecture.md`
- Status: Done
- Commits: 6173b30


## Phase D - Quality & Compliance Hardening

### D0
- Description: Lighthouse 2026-01-19 findings intake.
- Rationale: Capture audit findings and seed remediation backlog.
- Acceptance criteria:
  - SEO: robots.txt invalid due to unknown directive "Content-Signal: search=yes,ai-train=no".
  - Best Practices: CSP Trusted Types missing; script-src includes 'unsafe-inline'; no preload directive found.
  - Accessibility: contrast issues on .problemCard; links rely on color; identical links same purpose.
  - Best Practices/Console: deprecated API warning; asset 503s (observed in report).
  - Performance: render-blocking requests; unused JS estimate; missing explicit image width/height.
- Evidence: `ops/audits/doulab-net/lighthouse-2026-01-19.pdf`
- Notes: Derived from Lighthouse 13.0.1 report.
- Status: Intake
- Commits: 81a261d

### D1
- Description: robots.txt discovery + fix (invalid directive).
- Rationale: Resolve robots.txt validity error flagged by Lighthouse.
- Acceptance criteria:
  - Identify source of robots.txt / Content-Signal directive.
  - Remove invalid directive or document external source if not in repo.
- Status: Blocked (robots.txt not found; source unknown)
- Notes: robots.txt not found in repo; likely Cloudflare/edge-generated.
- Commits: 81a261d


### D2
- Description: Dark mode styling for the "Ready to make innovation repeatable?" CTA component.
- Rationale: Ensure CTA readability and contrast in dark mode.
- Acceptance criteria:
  - CTA surface and text are readable in dark mode without light-mode regressions.
- Status: Done
- Commits: 27c5348

### D3
- Description: Sitewide canonical booking link audit + normalization.
- Rationale: Ensure conversion CTAs use canonical booking routes.
- Acceptance criteria:
  - Booking CTAs point to canonical booking.doulab.net routes.
  - ClarityScan paid-first links remain Stripe Checkout.
- Status: Done
- Commits: 27c5348

### D4
- Description: Blog Mermaid/diagram theme parity (dark/light).
- Rationale: Ensure diagram readability across color modes.
- Acceptance criteria:
  - Mermaid diagrams render with readable contrast in light and dark.
- Status: Done
- Commits: 27c5348

### D5
- Description: Replace SQL/Sheets instrumentation example with diagram in clarityscan-decision-latency.
- Rationale: Use an illustrative diagram instead of SQL snippet.
- Acceptance criteria:
  - Section contains a Mermaid diagram that reflects the instrumentation flow.
- Status: Done
- Commits: 27c5348

### D6
- Description: Blog booking/service CTA link audit + consistency pass.
- Rationale: Remove stale booking links in blog entries.
- Acceptance criteria:
  - Blog conversion CTAs use canonical booking routes.
- Status: Done
- Commits: 27c5348

### D7
- Description: Remove "Edit this page" links across blog.
- Rationale: Keep blog UX focused on readers, avoid repo-only links.
- Acceptance criteria:
  - Blog posts no longer display "Edit this page" links.
- Status: Done
- Commits: c272c6c

### D8
- Description: Homepage dark-mode surface parity for "How we work" cards and final CTA.
- Rationale: Prevent white surfaces in dark mode and align with "Proof, by the numbers".
- Acceptance criteria:
  - "How we work" cards use dark surfaces in dark mode.
  - Final CTA uses a dark surface with readable text in dark mode.
- Status: Done
- Commits: c272c6c

### D9
- Description: Fix dark-mode selector mismatch (html.theme-dark vs html[data-theme='dark']).
- Rationale: Ensure dark-mode overrides apply consistently across Docusaurus.
- Acceptance criteria:
  - Dark mode selectors apply for both html.theme-dark and html[data-theme='dark'].
  - Process rail tiles and Final CTA render with dark surfaces.
- Notes: DOM attribute not verified; selectors updated to cover both cases.
- Status: Done
- Commits: d48006a
