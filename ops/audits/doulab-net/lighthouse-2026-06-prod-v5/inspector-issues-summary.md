# LH-NEW-007 — Inspector Issues Diagnostic (prod home)

- URL captured: https://www.doulab.net/
- Capture method: Playwright + CDP (`Audits.issueAdded`, `Network.responseReceived`, `Runtime.consoleAPICalled`, `Runtime.exceptionThrown`)
- Capture date: 2026-06-01
- Raw artifact: `inspector-issues-capture.json`

## Issues count by category

| Category | Count |
|---|---|
| ContentSecurityPolicyIssue | 33 |
| DeprecationIssue | 3 |
| PerformanceIssue | 1 |
| **Total CDP issues** | **37** |
| Network failures (status >= 400) | 7 (all 503 on `/assets/js/*.js`) |
| Console exceptions / error-level | 0 (capture observed none) |

### CSP issue breakdown (all `isReportOnly: true`)

| Directive | Violation type | Count | Blocked URL |
|---|---|---|---|
| `style-src-attr` | kInlineViolation | 29 | inline (style attribute on document elements) |
| `script-src-elem` | kInlineViolation | 4 | inline (inline `<script>` in document) |

All CSP violations originate at `https://www.doulab.net/` line 5 (the rendered HTML document), report-only mode — no script was actually blocked.

### Deprecation breakdown

| Type | Origin |
|---|---|
| SharedStorage | `cdn-cgi/challenge-platform/scripts/jsd/main.js` (Cloudflare) |
| PersistentQuotaType | `cdn-cgi/challenge-platform/scripts/jsd/main.js` (Cloudflare) |
| Fledge | `cdn-cgi/challenge-platform/scripts/jsd/main.js` (Cloudflare) |

### Performance issue

| Type | Origin |
|---|---|
| DocumentCookie | `cdn-cgi/challenge-platform/scripts/jsd/main.js` (Cloudflare) |

## Top 5 issues (by frequency)

1. **CSP `style-src-attr` inline violation** (x29)
   - Sample: report-only inline-style violation at document line 5
   - Affected resource: inline `style="..."` attributes in the rendered HTML
   - Likely root cause: Docusaurus / React components emit `style` attributes (theme color tokens, hero gradients, animated elements) that are not whitelisted by the report-only CSP `style-src-attr` directive.
   - Suggested fix: either add `'unsafe-inline'`/hashes to `style-src-attr` in the report-only CSP, or eliminate inline `style=` attributes (move to CSS classes); if report-only is intentional staging for a future enforced CSP, this is the work to complete first.

2. **CSP `script-src-elem` inline violation** (x4)
   - Sample: report-only inline-script violation at document line 5
   - Affected resource: inline `<script>` blocks injected into `<head>` (Docusaurus theme init / GA gtag bootstrap / hydration data)
   - Likely root cause: Docusaurus's color-mode bootstrap script and analytics snippets are inline.
   - Suggested fix: add per-build nonces (Cloudflare Pages middleware) or hashes for the known inline scripts before enforcing CSP.

3. **DeprecationIssue x3 (SharedStorage / PersistentQuotaType / Fledge)** (x3)
   - Sample: `StorageType.persistent is deprecated. Please use standardized navigator.storage instead.`
   - Affected resource: `https://www.doulab.net/cdn-cgi/challenge-platform/scripts/jsd/main.js`
   - Likely root cause: Cloudflare bot-management / JS Detection (`cdn-cgi/challenge-platform`) probes deprecated browser APIs.
   - Suggested fix: third-party (Cloudflare) — not actionable in our source; consider disabling JS Detection / Bot Fight Mode if BP score is critical, otherwise accept-benign.

4. **PerformanceIssue: DocumentCookie** (x1)
   - Sample: performance warning on `document.cookie` write
   - Affected resource: same Cloudflare `jsd/main.js`
   - Likely root cause: Cloudflare challenge platform reading/writing `document.cookie` synchronously.
   - Suggested fix: third-party — same as above; accept-benign.

5. **Network 503 on `/assets/js/*.js`** (x7)
   - Sample: `GET https://www.doulab.net/assets/js/2833a959.6d64363f.js -> 503`
   - Affected resource: Docusaurus prefetch chunks (route preloads for non-home pages)
   - Likely root cause: Cloudflare rate-limiting or origin returning 503 for prefetch requests (already observed in build-triage notes for this site). These are prefetches, so they do not break the page, but they surface in LH `errors-in-console`.
   - Suggested fix: disable Docusaurus link prefetch or cap concurrency; or whitelist `/assets/js/*` from Cloudflare rate-limit / bot rules. Likely the same root cause as the recurring `Cloudflare prefetch 503` referenced in `build-triage.md`.

## Cross-reference to Lighthouse `home-mobile.json` BP audits

| LH audit (score 0) | CDP correspondence |
|---|---|
| `inspector-issues` (issueType "Content security policy") | The 33 CSP report-only violations captured here. This is the **sole driver** of the `inspector-issues` failure. |
| `deprecations` (3 warnings) | The 3 DeprecationIssues (SharedStorage, PersistentQuotaType, Fledge), all from Cloudflare `cdn-cgi/challenge-platform/.../jsd/main.js`. |
| `errors-in-console` | The 7 network 503 prefetch failures (LH reports one representative item, CDP captured all seven). No JS exceptions or console.error() were observed from our code. |
| `csp-xss` (score 1, "High" severity advisories) | Not an issue per se; LH advises hardening `script-src` (currently uses `'unsafe-inline'`/host allowlist). Consistent with the inline-script CSP violations above. |

## Recommended next action (per issue)

| Issue | Verdict |
|---|---|
| `style-src-attr` inline violations (x29) | **Fix in source** — audit components for inline `style=` attrs OR widen report-only CSP (`docusaurus.config` / Cloudflare Pages headers). Single biggest BP win. |
| `script-src-elem` inline violations (x4) | **Fix in source** — adopt nonces or hashes for Docusaurus bootstrap + analytics inline scripts. |
| Cloudflare deprecation warnings (x3) | **Accept-benign** — third-party (`cdn-cgi/challenge-platform`); file as follow-up to evaluate disabling JS Detection / Bot Fight if BP score must reach 100. |
| Cloudflare DocumentCookie perf warning | **Accept-benign** — same third-party, no action. |
| Prefetch 503s on `/assets/js/*.js` (x7) | **File as follow-up** — already known (see `build-triage.md`); fix by disabling Docusaurus prefetch or relaxing Cloudflare rules. Drives `errors-in-console`. |

## Limitations of this capture

- CDP `Audits.issueAdded` reports only categories Chromium currently emits; some Lighthouse-classified issues (e.g., MixedContent, SameSiteCookie) were absent because the page truly has none — not a tool limitation.
- The page was loaded with `waitUntil: 'networkidle'` and a 3 s tail; very-late-firing issues (>3 s after idle) would be missed.
- Cloudflare may serve a different challenge flow to a headless Chromium than to real users; the 3 Cloudflare deprecations correspond to its bot-detection script and are reproducible across loads.
- No `console.error` / `Runtime.exceptionThrown` events were captured from first-party code, confirming the Lighthouse `errors-in-console` failure is driven entirely by network 503s, not by app-level JS errors.
