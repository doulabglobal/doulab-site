# Security & Privacy Audit — doulab.net — 2026-07-XX (bilingual)

## Scope

- HTTP response headers as configured in `static/_headers` (source of truth per `AGENTS.md:21`) AND runtime overrides in `functions/_middleware.ts`.
- CSP posture across **both locales**: enforced policy with per-request nonce (HTML responses), Report-Only policy for monitoring, coverage of `/es/*` routes by the Cloudflare Pages Function.
- Inline-style / inline-script handling (E-R2 stream) and residual `style-src-attr` debt accepted-benign in audit-2026-06.
- Cross-origin / framing headers: HSTS, XFO, COOP, frame-ancestors, Referrer-Policy, Permissions-Policy, X-Content-Type-Options.
- Third-party integrations: Stripe Checkout (`buy.stripe.com`), Cloudflare Web Analytics (`static.cloudflareinsights.com`), YouTube-nocookie, `booking.doulab.net` (Microsoft Bookings per Phase C11).
- Bilingual privacy posture: `src/pages/privacy-terms.tsx` (EN) vs `i18n/es/docusaurus-plugin-content-pages/privacy-terms.tsx` (ES); EN/ES stubs at `terms-and-conditions.tsx`; legal equivalence and ES "lawful basis" parenthetical preservation per ES-B/A4.
- GDPR / Swiss nFADP (FADP) compliance, cookies, data subject rights, processor disclosure accuracy.

**Out of scope**: live runtime header probing of doulab.net (no curl); penetration testing of Cloudflare, Stripe, Microsoft Bookings, Google; review of `clients.doulab.net` (frozen). E-R2.2 residual inline-style violations accepted-benign per audit-2026-06.

## Method

- Read `static/_headers` (current production header block, including the E-R2.2b `style-src-attr` sha256).
- Read `functions/_middleware.ts` (the per-request CSP-nonce middleware) and traced its effective contract against `_headers`.
- Read **both** EN and ES `privacy-terms.tsx` files side-by-side; diffed processor names, lawful-basis section, retention, rights, dispute-resolution wording.
- Read both EN and ES `terms-and-conditions.tsx` stubs; verified each is a forwarder to `/privacy-terms#…`.
- Read `static/_redirects` to confirm whether the stubs are server-redirected (they are not).
- Cross-referenced against audit-2026-06 SEC-001 through SEC-014 to identify residual items still unresolved (so they get re-filed, not re-investigated) vs items resolved (SEC-002 Report-Only landed via middleware + `_headers`; the SVG-sprite `style-src-attr` hash landed as accepted-benign).
- Cross-referenced `docs/ops/gdpr-compliance.md` against shipping privacy-terms text in both locales.
- Confirmed Cloudflare Pages Function routing: `functions/_middleware.ts` runs on **every** request by default (top-level `_middleware`), so it applies uniformly to `/`, `/es/*`, `/blog/*`, etc.; the locale prefix is path data, not a routing boundary.

## Findings (ranked)

### SEC-101 — Privacy-terms still names "Google Calendar appointment links" in BOTH locales while the live processor is Microsoft Bookings (re-file of SEC-009; bilingual scope)
- Severity: P1
- Impact: 4/5
- Effort: S
- Location: `src/pages/privacy-terms.tsx:91-95, 113-115, 144-155, 247-249`; `i18n/es/docusaurus-plugin-content-pages/privacy-terms.tsx:91-94, 112-115, 144-155, 246-249`; `docs/ops/gdpr-compliance.md:10, 22`.
- Observation: All `booking.doulab.net/*` paths (clarityscan, discovery, hdworkshop, fdworkshop, briefing) are served by **Microsoft Bookings** per Phase C11 audit and per the audit-2026-06 cross-role finding T14. Yet the public Privacy & Terms page — both `/privacy-terms` (EN) and `/es/privacy-terms` (ES) — repeats four times that "booking.doulab.net redirects to Google Calendar appointment links," and lists "Google Calendar appointment links" in the data-sharing section. ES mirrors the same wrong processor name ("enlaces de citas de Google Calendar"). `docs/ops/gdpr-compliance.md` likewise still says Google Calendar (lines 10 and 22). This is the single largest GDPR/FADP accuracy gap on the site and is now a **bilingual** misstatement, doubling the surface area of the original SEC-009.
- Recommendation: Replace every "Google Calendar appointment links" occurrence in both `privacy-terms.tsx` files and `gdpr-compliance.md` with "Microsoft Bookings (Microsoft 365)." Update the EN "Bookings" subsection (line 113) and the parallel ES section (line 113) to read: "Booking requests made on booking.doulab.net are processed by Microsoft Bookings (Microsoft 365)." Update the "Data Sharing & Transfers" paragraph in both locales accordingly. Keep wording legally equivalent across EN and ES.
- Evidence: `src/pages/privacy-terms.tsx:92-94`, `:113-115`, `:151-153`, `:247-249`; ES counterpart `i18n/es/docusaurus-plugin-content-pages/privacy-terms.tsx:92-94`, `:112-115`, `:149-153`, `:246-249`; `docs/ops/gdpr-compliance.md:10, 22`; `src/constants/urls.ts:2-3`.

### SEC-102 — Stripe disclosed in privacy-terms (EN+ES) but `gdpr-compliance.md` still hedges "if applicable" (re-file of SEC-006; verify ES parity)
- Severity: P2
- Impact: 2/5
- Effort: S
- Location: `docs/ops/gdpr-compliance.md:23`; `src/pages/privacy-terms.tsx:87-90`, `:151`; ES `privacy-terms.tsx:87-90`, `:150`.
- Observation: Public copy in both locales states unconditionally that Stripe Checkout processes payments for ClarityScan; ES wording matches EN ("Stripe Checkout procesa los pagos por servicios de tarifa fija"). The internal `gdpr-compliance.md:23` ("Stripe Checkout for payments (if applicable to fixed-fee services)") still hedges. Cross-reference the live `https://buy.stripe.com/28E00jdhCanL5Hb3xmcZa00` in `src/constants/urls.ts` confirms Stripe is live. The audit-trail mismatch persists from 2026-06.
- Recommendation: Remove "if applicable" from `gdpr-compliance.md:23`; add the live Stripe payment-link host as evidence.
- Evidence: `docs/ops/gdpr-compliance.md:23`; `src/pages/privacy-terms.tsx:87-90`; ES `privacy-terms.tsx:87-90`.

### SEC-103 — Privacy-terms (EN+ES) silent on Cloudflare Pages Functions runtime / nonce middleware processing
- Severity: P2
- Impact: 2/5
- Effort: S
- Location: `src/pages/privacy-terms.tsx:144-155`; ES `privacy-terms.tsx:144-155`; `functions/_middleware.ts`.
- Observation: Since `eb1c8c8` and the E-R2 stream, every HTML response is intercepted by a Cloudflare Pages Function (`functions/_middleware.ts`) that reads the response body, generates a per-request random nonce, and rewrites headers. This is functionally inert from a privacy standpoint (no request body is read, no PII is logged), but the Privacy section's data-sharing paragraph names Cloudflare Pages only as "hosting and analytics" — it does not mention that Cloudflare also executes per-request server-side logic on visitor HTML responses. A privacy-engineering reviewer or DPA would expect this disclosed in the processor description.
- Recommendation: In both EN and ES privacy-terms data-sharing paragraphs, expand "Cloudflare Pages (hosting and analytics)" to "Cloudflare Pages (hosting, analytics, and edge HTML processing for security headers)." No legal substance changes; matches reality.
- Evidence: `functions/_middleware.ts:37-89`; `src/pages/privacy-terms.tsx:151`; ES `privacy-terms.tsx:149`.

### SEC-104 — CSP `frame-src` still allowlists `https://www.youtube.com` even though all live embeds use `youtube-nocookie.com` (re-file of SEC-003)
- Severity: P2
- Impact: 2/5
- Effort: S
- Location: `static/_headers:10`; `functions/_middleware.ts:74`.
- Observation: Both the baseline `_headers` enforced CSP and the runtime middleware-built CSP list `https://www.youtube.com` alongside `https://www.youtube-nocookie.com` in `frame-src`. The 2026-06 audit found that **all** embeds use the no-cookie origin (`src/pages/case-studies/afp-siembra.tsx:261-283`), so the cookied origin is dead weight that weakens the privacy-first stance and would silently re-enable cookie-setting if a future regression embeds the wrong origin. Bilingual scope: case-study page mirrors in ES also use no-cookie origin (verify in i18n tree).
- Recommendation: Drop `https://www.youtube.com` from `frame-src` in **both** the `_headers` baseline and the middleware-built CSP. Add a `verify:build` grep that fails the build if `youtube.com/embed` appears under `build/` or `build/es/`.
- Evidence: `static/_headers:10`; `functions/_middleware.ts:74`.

### SEC-105 — `Permissions-Policy` missing modern Privacy-Sandbox / FLoC opt-outs (re-file of SEC-004)
- Severity: P2
- Impact: 2/5
- Effort: S
- Location: `static/_headers:26`.
- Observation: Current `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()` is solid but omits `interest-cohort=()`, `browsing-topics=()`, `attribution-reporting=()`, `join-ad-interest-group=()`, `run-ad-auction=()`, `private-state-token-issuance=()`, `private-state-token-redemption=()`. Adding these signals to browsers and ad networks that doulab.net opts out of Privacy Sandbox cohorting, matching the public "we do not use marketing or advertising cookies" claim in both EN and ES privacy-terms.
- Recommendation: Append the seven Privacy-Sandbox directives above. **Do NOT** add `accelerometer=()` / `gyroscope=()` — those would silently break the YouTube case-study embeds whose `allow=` attribute requests them (`src/pages/case-studies/afp-siembra.tsx:265, 279`). Document the omission as an intentional carve-out for media embeds.
- Evidence: `static/_headers:26`; `src/pages/case-studies/afp-siembra.tsx:265`.

### SEC-106 — `terms-and-conditions` stub pages (EN+ES) are still serve-able instead of being redirected (re-file of SEC-007; bilingual scope)
- Severity: P3
- Impact: 1/5
- Effort: S
- Location: `src/pages/terms-and-conditions.tsx`; `i18n/es/docusaurus-plugin-content-pages/terms-and-conditions.tsx`; `static/_redirects`.
- Observation: Both EN (`/terms-and-conditions`) and ES (`/es/terms-and-conditions`) still ship a built React stub page that links forward to `/privacy-terms#…`. The stub's `canonical` correctly points to `/privacy-terms`, but the page itself renders, so search engines and direct-link users still land on a hand-off page. `static/_redirects` covers `/what-we-do` but not `/terms-and-conditions`. The bilingual launch doubled the surface: two stubs to keep in sync.
- Recommendation: Add to `static/_redirects`:
  ```
  /terms-and-conditions /privacy-terms#terms 301
  /es/terms-and-conditions /es/privacy-terms#terms 301
  ```
  Then delete both stub `.tsx` files. Eliminates the dual-source-of-truth risk that a future legal edit lands on the stub.
- Evidence: `src/pages/terms-and-conditions.tsx:21-44`; ES counterpart lines 21-44; `static/_redirects:1-8`.

### SEC-107 — `frame-ancestors` set but `X-Frame-Options` is `DENY` while privacy-terms is `noindex,follow` — verify legal pages are framable internally (informational)
- Severity: P3
- Impact: 1/5
- Effort: S
- Location: `static/_headers:22`; `src/pages/privacy-terms.tsx:19` (`noindex,follow`); ES counterpart line 19.
- Observation: Belt-and-suspenders framing protection is correct and intentional. The legal pages also carry `noindex,follow` in both EN and ES, which is fine for privacy/terms (we want crawlers to discover the links but not index the page itself). No issue; documenting as positive confirmation. Equivalence across locales is preserved.
- Recommendation: No change.
- Evidence: `static/_headers:22, 4-5`; `src/pages/privacy-terms.tsx:19`; ES `:19`.

### SEC-108 — ES "lawful basis" parenthetical preserved per ES-B/A4 (positive confirmation)
- Severity: P3 (informational)
- Impact: 1/5
- Effort: N/A
- Location: `i18n/es/docusaurus-plugin-content-pages/privacy-terms.tsx:134`.
- Observation: Per ES-B/A4 the ES section 3 heading reads "Bases legales para el tratamiento (lawful basis)" — the EN technical term is preserved in a parenthetical so Spanish-speaking DPAs and corporate counsel familiar with the GDPR English vocabulary recognize the section. **Confirmed present** in the shipping ES file. EN counterpart at line 134 reads "3. Legal Bases for Processing" — semantically equivalent and legally aligned with the GDPR Art. 6 framework. Both locales correctly enumerate the same four lawful bases: (a) contract performance, (b) legitimate interests, (c) legal obligation, (d) consent.
- Recommendation: No change. Lock as legally equivalent.
- Evidence: ES `privacy-terms.tsx:132-141`; EN `privacy-terms.tsx:132-141`.

### SEC-109 — ES privacy-terms uses unitalicized English terms ("engagement", "insights", "checkout", "retainers", "playbooks", "framework") without ES glossing
- Severity: P3
- Impact: 1/5
- Effort: S
- Location: `i18n/es/docusaurus-plugin-content-pages/privacy-terms.tsx:75, 126, 271, 276, 243, 305`.
- Observation: Six English business terms appear bare in the ES legal text. For a legal document, mixing untranslated English vocabulary is not a hard compliance issue, but it weakens enforceability if a Spanish-speaking court has to interpret "retainers" or "playbooks" without a parenthetical gloss. Examples: "Datos de engagement" (line 75), "insights agregados y anonimizados" (line 126), "los programas a medida o retainers" (line 276).
- Recommendation: Either (a) translate to ES with the EN term in parentheses ("Datos de compromiso (engagement)") — matches the SEC-108 pattern — or (b) leave as-is but note the convention in `docs/ops/i18n-glossary.md`. Hand off to **Content & copy** / **i18n** for the final call; this audit only flags the legal-enforceability angle.
- Evidence: see Locations.

### SEC-110 — CSP middleware correctly applies to `/es/*` (positive confirmation; bilingual coverage check)
- Severity: P3 (informational)
- Impact: 2/5
- Effort: N/A
- Location: `functions/_middleware.ts:37-40`.
- Observation: `functions/_middleware.ts` is at the **top-level** `functions/` directory with the name `_middleware.ts` — Cloudflare Pages routes this as the global middleware that runs on **every** request before any other handler. There is no path-prefix logic that would exclude `/es/*`. The nonce injection and CSP header override therefore apply uniformly to both EN and ES HTML responses. The only filter is `content-type` starts with `text/html`, which is satisfied by both locales' rendered HTML.
- Recommendation: No change. Lock as confirmed bilingual coverage. Optionally add an explicit test (e.g. `verify:build` step that fetches a sample `/` and `/es/` URL from the local prod server and asserts both have a `'nonce-...'` token in their `Content-Security-Policy` header).
- Evidence: `functions/_middleware.ts:37-89`; Cloudflare Pages Functions routing convention.

### SEC-111 — Report-Only CSP has no `report-uri` / `report-to` endpoint configured (re-file of TODO in `_headers:13`)
- Severity: P2
- Impact: 3/5
- Effort: M
- Location: `static/_headers:13, 21`.
- Observation: The Report-Only CSP exists and is now meaningfully tightened (drops `'unsafe-inline'` from `script-src` and `style-src`, adds a `style-src-attr` sha256 hash for the SVG sprite). But the comment at line 13 confirms no reporting endpoint exists: violations surface **only** via browser DevTools or Cloudflare Pages logs — neither of which gives the team an aggregated cross-visitor signal. After 5+ months in production the team has no quantitative evidence of which inline patterns are still firing and from which routes/locales. SEC-002 ENFORCE step (`doulab-net-backlog.md:373`) cannot complete without this data.
- Recommendation: Stand up a Cloudflare Worker (or Pages Function under `/functions/csp-report.ts`) that accepts POST `application/csp-report` and `application/reports+json` bodies, parses, samples, and forwards to a log sink (Cloudflare Logs, Workers Analytics, or just `console.log` aggregated via `wrangler tail`). Then add to both the Report-Only and (eventually) enforced CSP: `Reporting-Endpoints: default="https://doulab.net/csp-report"` and `report-to default; report-uri https://doulab.net/csp-report`. Sample reports for 2-4 weeks separately for EN and ES routes (group by `document-uri`) before promoting any directive to enforced.
- Evidence: `static/_headers:13`.

### SEC-112 — Middleware does NOT nonce inline `<style>` blocks; `style-src` still requires `'unsafe-inline'` in the enforced policy
- Severity: P2
- Impact: 2/5
- Effort: M
- Location: `functions/_middleware.ts:24-27, 70`.
- Observation: The middleware header comment explicitly acknowledges that style nonces only apply to `<style>` elements (`style-src-elem`), not to inline `style="..."` attributes (`style-src-attr`), and that Docusaurus emits both. The enforced `style-src` therefore stays at `'self' 'unsafe-inline'`. The Report-Only policy at `_headers:21` tightens to `'self'` + a hash for the SVG sprite, but until the upstream `style="..."` attributes are eliminated, the enforced policy must keep `'unsafe-inline'` for style. This is the documented E-R2 stream-1 work and audit-2026-06 E-R2.2 history accepted-benign — **not re-filed as a finding**, but noted here for completeness of the CSP coverage picture.
- Recommendation: No new action. Track under existing E-R2 stream. If/when Docusaurus 4 reduces the inline-style emission, revisit.
- Evidence: `functions/_middleware.ts:24-27`; `static/_headers:14-21`.

### SEC-113 — HSTS lacks `preload` directive; eligible for browser preload list
- Severity: P3
- Impact: 2/5
- Effort: S
- Location: `static/_headers:3`.
- Observation: `Strict-Transport-Security: max-age=31536000; includeSubDomains` is correct and one year long. Adding `preload` and submitting `doulab.net` to https://hstspreload.org would protect first-visit visitors who type `doulab.net` without `https://`. The site is already HTTPS-only (Cloudflare Pages) and serves `*.doulab.net` subdomains via Cloudflare; eligibility is met. Caveat: HSTS preload is **practically irreversible** — removal takes 6-12 weeks of browser-release cycles. Should be a deliberate decision, not a casual flip.
- Recommendation: Decide deliberately. If yes, append `; preload` to the HSTS header AND submit at hstspreload.org. If no, document the decision in `docs/ops/security-headers-review.md`.
- Evidence: `static/_headers:3`.

## Quick wins — top 5

1. **SEC-101** (P1): Fix Microsoft Bookings vs Google Calendar text in BOTH EN and ES `privacy-terms.tsx` and in `gdpr-compliance.md`. Largest accuracy gap; bilingual surface; one tightly scoped edit.
2. **SEC-104** (P2): Drop `https://www.youtube.com` from `frame-src` in `_headers` AND `functions/_middleware.ts`. Two-line edit.
3. **SEC-102** (P2): Remove "if applicable" from `gdpr-compliance.md:23` Stripe line.
4. **SEC-105** (P2): Append Privacy-Sandbox opt-outs to `Permissions-Policy` (avoid `accelerometer` / `gyroscope` to preserve YouTube embeds).
5. **SEC-106** (P3): Add the two `/terms-and-conditions` 301s to `_redirects` and delete the EN+ES stub `.tsx` files.

## Strategic bets — top 3

1. **SEC-111** (CSP reporting endpoint): Stand up `/functions/csp-report.ts` and wire `report-to`/`report-uri` into both CSPs. Without this, the Report-Only policy gives no actionable signal and SEC-002 ENFORCE remains permanently blocked. Sample separately for `/` and `/es/*` to verify locale parity.
2. **SEC-103 + SEC-101 together**: Update the bilingual privacy-terms data-sharing paragraph in a single coordinated edit to (a) correct Google Calendar → Microsoft Bookings AND (b) disclose Cloudflare Pages Functions edge HTML processing. Same file, same paragraph, two corrections — atomic legal-accuracy pass.
3. **SEC-105 → SEC-111 → SEC-002 ENFORCE pipeline**: Land the small Permissions-Policy tightening now, the reporting endpoint next, then drive a 2-4 week soak cycle for the Report-Only CSP, then promote to enforced. This is the only path to actually dropping `'unsafe-inline'` from `script-src` in the enforced policy.

## Out of scope / hand-offs

- ES vocabulary normalization ("engagement", "retainers", "playbooks") in legal text — **Content & copy**, **i18n**.
- Editorial decision on EN-in-parentheses convention site-wide — **Content & copy**, **i18n** (already pattern-matched at SEC-108).
- `verify:build` grep additions (no `youtube.com/embed`, no future `<script src="https://...">` without `integrity=`, secrets pre-commit) — **Code quality**.
- Cloudflare Pages Function for CSP reporting — **Code quality**, **Performance**.
- Cloudflare Web Analytics behavior, cookieless guarantee verification, Zaraz instrumentation review — **Analytics**.
- Stripe Checkout localization (currency display, ES UI on Stripe-hosted page) — **i18n**, **Sales & positioning**.
- Trademark / ® registration status of ClarityScan, IMM-P®, MicroCanvas® — external counsel; not a security finding.

## Open questions for Luis

1. **Microsoft Bookings vs Google Calendar — confirmation needed.** Audit-2026-06 raised this; the privacy-terms text in both locales still says Google Calendar. Before SEC-101 lands, confirm: is **every** `booking.doulab.net/*` path now Microsoft Bookings, or are some still Google Calendar appointment links? Definitive answer drives the EN+ES edit.
2. **Cloudflare Pages Functions disclosure.** Is Doulab comfortable disclosing in public privacy-terms that Cloudflare executes per-request edge logic on HTML responses (SEC-103)? Legal-team / DPA call.
3. **CSP reporting endpoint scope.** Should the report endpoint be a same-origin `/csp-report` (counts as Doulab data and falls under Doulab's privacy-terms), or routed to a third-party (Sentry, Report URI, Cloudflare Logpush)? Choice affects SEC-111 effort and the privacy-terms disclosure.
4. **HSTS preload (SEC-113).** Acceptable to commit `doulab.net` to the HSTS preload list given the practical irreversibility? If yes, also confirm all subdomains (`clients.doulab.net`, `booking.doulab.net`, `app.doulab.net` if present) are HTTPS-only forever.
5. **ES legal vocabulary convention.** Confirm the SEC-108 "EN-in-parens" pattern (e.g., "Bases legales para el tratamiento (lawful basis)") is the desired site-wide convention; if so, SEC-109 becomes a concrete normalization pass.
6. **Permissions-Policy carve-outs for YouTube.** Confirm we keep `accelerometer` / `gyroscope` unset (allowing YouTube embeds to use them) rather than disabling them globally — this is a deliberate carve-out for the case-study pages.
