# Hardening Plan (Pass 1)

## Cloudflare build settings
- Recommendation: avoid duplicate `npm ci` in Cloudflare; rely on CI or one install step to reduce build time and cache churn.
- Ensure build command uses `npm run build:cf` and verify command uses `npm run verify:build`.

## GitHub Actions gates
- Add CI workflow to run:
  - `npm ci`
  - `npm run normalize:check`
  - `npm run verify:build`
- Use Node version aligned with `package.json` engines (`>=20.16.0 <23`).

## Dependency/vulnerability triage
- Run `npm audit` and document findings.
- Apply targeted upgrades only (no blanket `npm audit fix`).
- Keep a short list of residual issues with owner + next action.

## GDPR baseline checklist
- Tracking: ensure privacy-first analytics only, no third-party trackers without consent.
- Privacy docs: keep `privacy-terms` and `terms-and-conditions` current.
- Security headers: review `static/_headers` for CSP, HSTS, Referrer-Policy, and X-Content-Type-Options.

## Acceptance criteria
- CI workflow exists and runs normalize:check + verify:build.
- Docusaurus deprecation warning for broken markdown links removed.
- baseline-browser-mapping warning removed or explicitly documented.
- Audit/vulnerability status documented (before/after or decision).
- build:cf and verify:build pass.

## Implementation notes (this pass)
- Docusaurus config: moved `onBrokenMarkdownLinks` to `markdown.hooks.onBrokenMarkdownLinks`.
- CI: added `.github/workflows/ci.yml` running normalize:check and verify:build.
- Dependencies: added `baseline-browser-mapping@2.9.14` and overrides for transitive advisories.
- Audit: before 6 vulns (high/moderate), after 0 (npm audit).
