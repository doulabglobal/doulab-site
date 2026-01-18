# Phase B-P3 Plan — Hardening Pass 3 (Headers + GDPR Copy)

## Objectives
- Confirm baseline security headers are enforced in-repo or explicitly documented if not enforceable.
- Align privacy/analytics disclosures with actual tooling and booking flow.
- Capture evidence (headers + build logs) and map commits for traceability.

## In-scope
- `static/_headers` (source of truth) review and adjustments if needed.
- Privacy/GDPR copy in `src/pages/privacy-terms.tsx` and related legal text.
- Evidence logging under `ops/audits/doulab-net/logs/`.
- Governance updates: `docs/ops/doulab-net-backlog.md`, `AGENTS.md`.

## Out-of-scope
- Cloudflare dashboard changes (document only if verified externally).
- New analytics or tracking additions.
- Legal claims not grounded in current implementation.
- UX polish unrelated to headers or privacy copy.

## Acceptance criteria
1) Security / Headers
- CSP is enforced OR explicitly documented why it cannot be enforced in-repo.
- Referrer-Policy is set.
- Permissions-Policy is set (even if minimal).
- X-Content-Type-Options is set.
- HSTS is addressed (set or documented why not).
- Clickjacking protection via CSP `frame-ancestors` OR X-Frame-Options.

2) Privacy / GDPR Copy
- Privacy/analytics disclosure is accurate relative to what the repo/site actually uses.
- “Human-led, AI-assisted” wording is consistent where applicable.
- No new legal claims; only clarifications grounded in current implementation.

3) Evidence & Traceability
- Plan + notes exist under `docs/ops/`.
- Notes do not overstate changes (must match git diff).
- AGENTS.md + backlog updated with commit hashes.

4) Quality Gates
- `build:cf` passes and log updated.
- `verify:build` passes and log updated.
- No broken links introduced.
- No new lint/typecheck errors.

5) Commit Structure
- Exactly 3 commits with the specified intent categories.
- Each commit message in English.

6) Working Tree Discipline
- Step 0 enforced: never proceed with a dirty working tree without resolving or explicitly stopping.

## Evidence checklist
- Header source of truth checked: `static/_headers`.
- Before/after headers snapshot captured in notes with file references.
- Build logs updated:
  - `ops/audits/doulab-net/logs/build-cf.log`
  - `ops/audits/doulab-net/logs/verify-build.log`
- Privacy/analytics copy changes documented with quoted excerpts.
- `git status -sb` captured for final report.

## Commit plan (exactly 3)
1) `docs(ops): add b-p3 plan + notes + baseline evidence`
2) `fix(site): harden headers + gdpr copy consistency`
3) `docs(agents): map b-p3 commit hashes in AGENTS.md + docs/ops/doulab-net-backlog.md`
