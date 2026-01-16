# Phase B6 Closeout - Doulab.net Freeze

Date: 2026-01-16
Release: v0.9.0

## Scope
- Freeze production site for Phase B6 after B1-B5 delivery.
- No ES/i18n work included in this phase.

## Deferred items
- ES localization (manual i18n plan remains deferred).
- Any future B5 or B6 follow-on performance work beyond low-risk tweaks.

## Phase status (B1-B6)
- B1: Completed (audits, routes/IA, booking inventory, locale scan, component parity).
- B2: Completed (PageHeader/CardGrid, docs-only EntityHeader/DocBadges).
- B3: Completed (booking.doulab.net normalization).
- B4: Completed (UX consistency passes, inline styles removed).
- B5: Completed (baseline capture, low-risk performance tweaks).
- B6: Completed (freeze, version bump, release notes, closeout artifact).

## Booking canonical routes (confirmed)
- https://booking.doulab.net/
- https://booking.doulab.net/discovery
- https://booking.doulab.net/clarityscan
- https://booking.doulab.net/advisory
- https://booking.doulab.net/hdworkshop
- https://booking.doulab.net/fdworkshop

## Compliance snapshot
- Security headers managed in repo via `static/_headers` (baseline HSTS, Referrer-Policy, Permissions-Policy, nosniff).
- GDPR/CH compliance notes documented in `docs/ops/gdpr-compliance.md`.
- Legal naming rule enforced: Santiago Arias Consulting ("Doulab"), address Mettlenstrasse 45, 8193 Eglisau, Switzerland.

## Verifier parity snapshot
- Scripts present: `build:cf`, `verify:build`, `normalize:check`, `typecheck`.
- Hooks enforce `normalize:check` and `verify` on push.

## Build discipline evidence
- Logs:
  - `ops/audits/doulab-net/logs/build-cf.log`
  - `ops/audits/doulab-net/logs/verify-build.log`

## Rollback guidance
- Prior release: v0.8.0.
- Rollback: revert to the v0.8.0 commit/tag (if tagged) and redeploy the Cloudflare Pages build.

## Attestation
- Phase B6 freeze completed without changing booking routes or adding trackers.
