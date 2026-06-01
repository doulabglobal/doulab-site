# Security & Privacy Audit — doulab.net — 2026-06-01

## Scope
- HTTP response headers as configured in `static/_headers` (source of truth per `AGENTS.md:21`).
- CSP posture: directives, inline allowances, third-party endpoints (Cloudflare Insights, YouTube-nocookie).
- Cross-origin isolation headers: COOP / COEP / CORP.
- Referrer-Policy, Permissions-Policy, frame-ancestors / X-Frame-Options.
- GDPR / Swiss nFADP alignment: privacy & terms copy vs. actual implementation.
- Cookie usage and consent posture (Cloudflare Web Analytics, no GA/GTM).
- Form / data-collection pathways: `book-clarityscan`, `contact`, Stripe checkout, Microsoft Bookings via `booking.doulab.net`.
- Third-party embeds (YouTube), external links `rel`, RSS/Atom endpoints.
- Subresource integrity (SRI), inline `<script>` usage (JSON-LD + `dangerouslySetInnerHTML`).
- Secrets / credentials in repo, `.gitignore` hygiene.
- License / legal pages (`privacy-terms`, `terms-and-conditions`).

Out of scope: live runtime probing of doulab.net (no curl/HTTP requests); penetration testing of Cloudflare Pages, Stripe, Microsoft Bookings, or Google Calendar; review of `clients.doulab.net` (frozen per `AGENTS.md:11`); review of `ops/audits/**` immutable evidence.

## Method
- Read canonical references: `AGENTS.md`, `docs/ops/security-headers-review.md`, `docs/ops/gdpr-compliance.md`, `docs/ops/hardening-plan.md`, `docs/ops/hardening-pass-3-plan.md`, `docs/ops/doulab-net-backlog.md`.
- Read header file: `static/_headers` (lines 1-16).
- Read consent & root injection: `src/theme/Root.tsx`, `src/components/ConsentBanner.tsx`.
- Read legal pages: `src/pages/privacy-terms.tsx`, `src/pages/terms-and-conditions.tsx`.
- Read form/redirect surfaces: `src/pages/book-clarityscan.tsx`, `src/pages/contact/index.tsx`, `src/constants/urls.ts`.
- Read Docusaurus config (`docusaurus.config.ts`) for inline scripts, third parties, RSS settings.
- Repo-wide greps: `target="_blank"` audit, `dangerouslySetInnerHTML`, `iframe`, `integrity=`, secret patterns, `youtube|vimeo`, `fetch(`, `gtag|GTM|fbq`.
- Reviewed YouTube-nocookie embeds in `src/pages/case-studies/afp-siembra.tsx`.
- Built findings on top of Hardening Pass 3 (already-enforced headers); no duplication of resolved items.

## Findings (ranked)

### SEC-001 — `Cross-Origin-Embedder-Policy` (COEP) and `Cross-Origin-Resource-Policy` (CORP) not set
- Severity: Medium
- Impact: 3/5
- Effort: M
- Location: `static/_headers:1-9`
- Observation: Header block sets `Cross-Origin-Opener-Policy: same-origin` but does not set COEP or CORP. `docs/ops/security-headers-review.md:24` already identifies `Cross-Origin-Resource-Policy: same-origin` for static assets as a recommendation, gated on validating third-party embeds. Without COEP/CORP, cross-origin isolation is incomplete, and assets remain embeddable cross-origin (e.g., images and JSON can be hot-linked or rendered in third-party `<iframe>` contexts where `frame-ancestors` would not apply, e.g., subresources).
- Recommendation: Add `Cross-Origin-Resource-Policy: same-origin` globally and override to `cross-origin` for `/img/*` and `/assets/*` if external embedding of public images is desired. Do NOT add `Cross-Origin-Embedder-Policy: require-corp` globally yet: the YouTube-nocookie embeds in `src/pages/case-studies/afp-siembra.tsx:261-283` will break under `require-corp` without `crossorigin` attribution. Stage COEP behind explicit testing.
- Evidence: `static/_headers:1-9`; embeds `src/pages/case-studies/afp-siembra.tsx:261`, `:275`.

### SEC-002 — CSP retains `'unsafe-inline'` for both `script-src` and `style-src`
- Severity: Medium
- Impact: 3/5
- Effort: L
- Location: `static/_headers:4`
- Observation: Current CSP allows `'unsafe-inline'` for scripts because Docusaurus emits inline runtime/hydration scripts and ld+json blocks. JSON-LD blocks are used widely (e.g., `src/pages/contact/index.tsx:55-56`, `src/pages/case-studies/afp-siembra.tsx:85-88`, plus `dangerouslySetInnerHTML` JSON-LD in `src/pages/work-with-us/index.tsx:42-48`). `'unsafe-inline'` for scripts neutralizes most of the XSS-mitigation value of CSP.
- Recommendation: Per AGENTS rule (`AGENTS.md:22`): publish a parallel `Content-Security-Policy-Report-Only` directive using `'strict-dynamic'` plus a per-deploy nonce or sha256-hash list for inline scripts. Keep enforced CSP unchanged until the report-only run produces zero violations. JSON-LD blocks can be hashed (they are static) or moved to external JSON manifests linked via `<link rel="alternate" type="application/ld+json">` if hashing proves brittle. Do not enable enforcement until tested safe.
- Evidence: `static/_headers:4`; inline JSON-LD usage at `src/pages/contact/index.tsx:55`, `src/pages/work-with-us/index.tsx:42`.

### SEC-003 — `frame-src` permits `https://www.youtube.com` while embeds use `youtube-nocookie.com` exclusively
- Severity: Low
- Impact: 2/5
- Effort: S
- Location: `static/_headers:4`
- Observation: CSP lists both `https://www.youtube-nocookie.com` and `https://www.youtube.com` in `frame-src`. All actual embeds use the no-cookie origin (`src/pages/case-studies/afp-siembra.tsx:261-283`). Keeping `www.youtube.com` widens the attack surface and weakens the privacy-first stance, since any future regression that embeds the tracking origin would silently succeed and set cookies.
- Recommendation: Remove `https://www.youtube.com` from `frame-src`. Keep `https://www.youtube-nocookie.com` only. Add a verifier rule in `npm run verify:build` that greps for `youtube.com/embed` in `build/` and fails the build if found.
- Evidence: `static/_headers:4`; `src/pages/case-studies/afp-siembra.tsx:62`.

### SEC-004 — `Permissions-Policy` is missing newer directives (interest-cohort, browsing-topics, attribution-reporting)
- Severity: Low
- Impact: 2/5
- Effort: S
- Location: `static/_headers:9`
- Observation: `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()` is solid but omits the Privacy Sandbox / FLoC-era opt-outs that align with the documented privacy-first stance (`README.md` reference in `hardening-pass-3-plan.md:42`).
- Recommendation: Append `, interest-cohort=(), browsing-topics=(), attribution-reporting=(), join-ad-interest-group=(), run-ad-auction=(), private-state-token-issuance=(), private-state-token-redemption=(), accelerometer=(), gyroscope=()`. Note: `accelerometer` / `gyroscope` are requested by the YouTube `allow=` attribute (`src/pages/case-studies/afp-siembra.tsx:265`, `:279`); setting them to `()` will silently break those features on those embeds — either omit them from Permissions-Policy or change the YouTube `allow=` to drop them.
- Evidence: `static/_headers:9`; `src/pages/case-studies/afp-siembra.tsx:265`.

### SEC-005 — No Subresource Integrity (SRI) on inline-bundled assets; not applicable to third-party scripts (none loaded)
- Severity: Informational
- Impact: 1/5
- Effort: N/A
- Location: repo-wide grep `integrity=` returns no files.
- Observation: There are no remote `<script src=...>` tags pulling third-party JavaScript (Cloudflare Insights is injected by Cloudflare at the edge, not by the app). The Stripe path uses `buy.stripe.com` as a navigation target (`target="_blank"`), not a script include. SRI is therefore not currently applicable — but this should be documented to prevent future regressions.
- Recommendation: Add a one-line note in `docs/ops/security-headers-review.md` stating that any future `<script src="https://...">` must include `integrity=` and `crossorigin="anonymous"`. Encode this as a verifier check in `npm run verify:build`.
- Evidence: Grep `integrity=` returned no matches across the repo.

### SEC-006 — Privacy & Terms copy lists Stripe as a processor but `gdpr-compliance.md` qualifies it as "if applicable"
- Severity: Low
- Impact: 2/5
- Effort: S
- Location: `src/pages/privacy-terms.tsx:88-95`, `docs/ops/gdpr-compliance.md:23`
- Observation: `gdpr-compliance.md:23` says "Stripe Checkout for payments (if applicable to fixed-fee services)" while `privacy-terms.tsx:88-90` flatly declares Stripe processes payments and `src/constants/urls.ts:5-6` confirms a live Stripe payment link is in production use. The "if applicable" hedge in the internal compliance doc is now out of sync with shipping reality, which weakens the audit trail.
- Recommendation: Update `docs/ops/gdpr-compliance.md` to state Stripe is an active processor for ClarityScan payments (no hedge). Cross-reference the live URL `https://buy.stripe.com/28E00jdhCanL5Hb3xmcZa00`.
- Evidence: `docs/ops/gdpr-compliance.md:23`; `src/constants/urls.ts:5-6`; `src/pages/privacy-terms.tsx:88-95`.

### SEC-007 — `terms-and-conditions.tsx` is a stub redirector but is still served as a standalone page
- Severity: Low
- Impact: 2/5
- Effort: S
- Location: `src/pages/terms-and-conditions.tsx:1-30`
- Observation: The page exists, sets `noindex,follow`, but its canonical points at `/privacy-terms` (line 15). Two URLs offering legal content (one stub, one real) increases the risk of inconsistent updates: a future edit to terms could land on the stub and never reach `privacy-terms`. The stub is useful as a redirect-target only.
- Recommendation: Either (a) replace with a server-side redirect via `static/_redirects` (Cloudflare Pages syntax: `/terms-and-conditions /privacy-terms#terms 301`) and delete the React page, or (b) leave the stub but add an explicit comment header marking it as canonical-of-`/privacy-terms` and forbid edits.
- Evidence: `src/pages/terms-and-conditions.tsx:15-30`.

### SEC-008 — Inline `dangerouslySetInnerHTML` for JSON-LD widens CSP debt
- Severity: Low
- Impact: 2/5
- Effort: S
- Location: `src/pages/work-with-us/index.tsx:42-48`
- Observation: All other JSON-LD blocks use the `<script type="application/ld+json">{JSON.stringify(...)}</script>` pattern (which React serializes safely). This file uses `dangerouslySetInnerHTML` with the eslint-disable line. While the payload is a static literal (not user-controlled), the pattern is inconsistent and harder to allowlist by sha256 hash if/when SEC-002 is implemented.
- Recommendation: Refactor to match the JSX-children pattern used elsewhere. No functional change; reduces future CSP hashing surface and removes the eslint-disable.
- Evidence: `src/pages/work-with-us/index.tsx:42-48`; consistent pattern in `src/pages/contact/index.tsx:55-56`.

### SEC-009 — Contact page collects no PII via form, but copy promises "we reply within 2 business days" — no SLA evidence trail
- Severity: Low
- Impact: 1/5
- Effort: S
- Location: `src/pages/contact/index.tsx:74`
- Observation: The contact page has zero forms (good — no input fields, no localStorage, no third-party form processor). Every CTA is either a `mailto:` or a navigation to `booking.doulab.net`. From a privacy-engineering perspective this is excellent. However, the 2-business-day reply promise is a public commitment with no operational record, and "Send a short brief" (line 124-142) routes to `booking.doulab.net/briefing` (Microsoft Bookings), which is itself a form that collects PII — this is correctly disclosed in `privacy-terms.tsx:91-95` only as Google Calendar, not Microsoft Bookings.
- Recommendation: Update `privacy-terms.tsx:91-95` and `gdpr-compliance.md:22` to disclose Microsoft Bookings as a processor (it is now the actual booking surface per the `phase-c11` audit and `booking.doulab.net` configuration), not Google Calendar. This is the largest GDPR accuracy gap found.
- Evidence: `src/pages/contact/index.tsx:115`, `:135`; `src/pages/privacy-terms.tsx:91-95`; `docs/ops/phase-c11-service-conversion-audit.md` references Microsoft Bookings.

### SEC-010 — `book-clarityscan.tsx` auto-opens external URL on mount; `window.open` blocked in some browsers is acceptable, but no `referrer` strip
- Severity: Low
- Impact: 1/5
- Effort: S
- Location: `src/pages/book-clarityscan.tsx:10-19`
- Observation: `window.open(url, '_blank', 'noopener,noreferrer')` is used correctly. The fallback `<a>` element (line 36-44) also uses `rel="noopener noreferrer"`. No issue with the link hardening. However, the global Referrer-Policy is `strict-origin-when-cross-origin` (`static/_headers:7`), which still leaks the bare origin `https://doulab.net` to Microsoft Bookings. For booking flows this is fine, but it is worth documenting.
- Recommendation: No change. Document in `security-headers-review.md` that the Referrer-Policy intentionally leaks origin (not path) to booking and Stripe destinations to support their fraud / abuse signals.
- Evidence: `src/pages/book-clarityscan.tsx:14`, `:40`; `static/_headers:7`.

### SEC-011 — `connect-src` covers Cloudflare Insights but not the in-app RSS fetches (which are same-origin and already covered by `'self'`)
- Severity: Informational
- Impact: 1/5
- Effort: N/A
- Location: `static/_headers:4`; `src/pages/index.tsx:372`; `src/pages/insights/index.tsx:91`, `:102`
- Observation: Client-side `fetch('/blog/rss.xml', ...)` and `fetch('/blog/atom.xml', ...)` are same-origin and satisfied by `default-src 'self'` / `connect-src 'self'`. The RSS/Atom endpoints are generated by Docusaurus (`docusaurus.config.ts:44`). These are public feed surfaces — no PII concerns.
- Recommendation: No change. Note this in the audit as positively confirmed: CSP correctly does not need any wildcard fetch origins.
- Evidence: `static/_headers:4`; `docusaurus.config.ts:44`.

### SEC-012 — No top-level `LICENSE` file in repo (only `node_modules/*/LICENSE`)
- Severity: Low
- Impact: 2/5
- Effort: S
- Location: repo root
- Observation: Glob for `LICENSE*` at the repo root returns no file (only dependency licenses inside `node_modules`). The site footer (`docusaurus.config.ts:136`) asserts copyright and trademark claims, and the codebase contains proprietary methodology references (ClarityScan®, IMM-P®, MicroCanvas®). Absence of a license file means the GitHub source mirror at `https://github.com/doulabglobal/doulab-site` (referenced in `docusaurus.config.ts:40`) is implicitly "all rights reserved" — possibly correct, but not stated.
- Recommendation: Add `LICENSE` (proprietary "All rights reserved" notice) and optionally a separate `LICENSE-content.md` for blog/docs content (e.g., CC-BY-NC-4.0) and `LICENSE-code.md` for code (proprietary). Decide deliberately rather than relying on default copyright.
- Evidence: Glob `LICENSE*` returns only `node_modules/**`.

### SEC-013 — Secrets scan clean; one false positive in research docs
- Severity: Informational
- Impact: 1/5
- Effort: N/A
- Location: `docs/research-resources/innovation-lab-guide/11-references.mdx` (false positive: word "password" or "key" appears in prose)
- Observation: Repo-wide regex scan for `(sk_live|sk_test|pk_live|api[_-]?key|secret|password|AKIA|BEGIN RSA|BEGIN PRIVATE)` matched only `package-lock.json` (npm lockfile integrity sha512 strings — expected) and one references doc (textual mention). No live credentials, tokens, or private keys in tracked source.
- Recommendation: No change. Add a `gitleaks` or `trufflehog` pre-commit hook (the `.husky` directory already exists) to maintain this invariant going forward.
- Evidence: Grep matches limited to `package-lock.json` and `docs/research-resources/innovation-lab-guide/11-references.mdx`.

### SEC-014 — `frame-ancestors 'none'` and `X-Frame-Options: DENY` both set (redundant but correct)
- Severity: Informational
- Impact: 1/5
- Effort: N/A
- Location: `static/_headers:4`, `static/_headers:5`
- Observation: Belt-and-suspenders. Modern browsers honor `frame-ancestors`; legacy ones use XFO. Correctly configured.
- Recommendation: No change. Worth recording as positively confirmed against the audit checklist.
- Evidence: `static/_headers:4-5`.

## Quick wins — top 5
1. SEC-003: Remove `https://www.youtube.com` from `frame-src` (keep only `youtube-nocookie.com`). One-line `static/_headers` edit.
2. SEC-009: Update `privacy-terms.tsx:91-95` and `gdpr-compliance.md:22` to name Microsoft Bookings as the booking processor instead of (or alongside) Google Calendar. Accuracy fix; protects against complaints.
3. SEC-006: Remove "if applicable" hedge in `gdpr-compliance.md:23` re: Stripe — Stripe is a live processor.
4. SEC-004: Append modern Privacy-Sandbox opt-outs (`interest-cohort=()`, `browsing-topics=()`, `attribution-reporting=()`, etc.) to `Permissions-Policy`. Be careful about `accelerometer`/`gyroscope` because of YouTube embed `allow=` (see SEC-004 note).
5. SEC-012: Add a top-level `LICENSE` file (proprietary "All rights reserved") so the public GitHub mirror has explicit terms.

## Strategic bets — top 3
1. SEC-002 (CSP hardening, Report-Only first): Stand up `Content-Security-Policy-Report-Only` with `'strict-dynamic'` + per-deploy nonces, route reports to a Cloudflare Worker endpoint, and drive `'unsafe-inline'` out of `script-src` over 2-3 deploys. This is the single biggest XSS-defense improvement available. Per `AGENTS.md:22`, must remain report-only until proven safe.
2. SEC-001 (Cross-origin isolation, staged): Land `Cross-Origin-Resource-Policy: same-origin` for HTML + same-origin assets, with `cross-origin` override for `/img/*` only if public hotlinking is desired. Defer `COEP: require-corp` until YouTube embeds are wrapped (or replaced with privacy-respecting facades).
3. SEC-008 + SEC-002 coupling: Refactor all JSON-LD to a single normalized component that emits structured-data blocks whose sha256 hashes can be enumerated at build time and emitted into the `static/_headers` CSP — this is what unlocks dropping `'unsafe-inline'` from `script-src` without per-deploy nonce plumbing.

## Out of scope / hand-offs
- Form UX, briefing intake, conversion friction → **Conversion**, **IA & UX**.
- Public copy accuracy on processor names beyond legal/privacy text → **Content & copy**.
- Build verifier additions (grep for `youtube.com/embed`, `integrity=` enforcement, secrets pre-commit) → **Code quality**.
- Cloudflare Pages redirect rules vs React stub for `/terms-and-conditions` → **Code quality**, **SEO**.
- Cookieless Cloudflare Web Analytics behavior, instrumentation extension via Zaraz → **Analytics**.
- Stripe checkout language localization and tax-display rules → **i18n**, **Sales**.
- Trademark / registered-mark legal review (MicroCanvas®, IMM-P®, ClarityScan®) → not security; refer to **Brand & visual** and external counsel.
- Editorial CC license decision for blog/docs content → **Blog & editorial**.

## Open questions for Luis
1. Is the booking processor for `booking.doulab.net` paths actually **Microsoft Bookings** (as several internal docs suggest) or **Google Calendar appointment links** (as `gdpr-compliance.md:22` and `privacy-terms.tsx:91-95` claim)? Both cannot be correct simultaneously and the public privacy text must match reality.
2. Should the public GitHub mirror at `github.com/doulabglobal/doulab-site` (referenced via `editUrl` in `docusaurus.config.ts:40`) carry a permissive license (CC-BY-NC for content?) or remain default copyright? This affects how external contributors can engage and how AI training crawlers should be treated.
3. Is there appetite to ship `CSP-Report-Only` to Cloudflare with a Worker-backed report endpoint, or should CSP tightening wait until v1.0? (Per `AGENTS.md:22`, enforcement must wait for a tested policy regardless.)
4. Should the YouTube case-study embeds (`src/pages/case-studies/afp-siembra.tsx:261-283`) be converted to click-to-load facades to fully eliminate `youtube-nocookie.com` from the default CSP `frame-src`? Privacy-first stance argues yes.
5. Confirm the `Permissions-Policy` newer-directive list is acceptable given the YouTube `allow=accelerometer; ...; gyroscope; ...` attribute — adding `accelerometer=()` and `gyroscope=()` to Permissions-Policy will disable those capabilities even when the iframe requests them.
