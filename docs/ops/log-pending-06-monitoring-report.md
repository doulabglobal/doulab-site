# LOG-PENDING-06 — Post-deploy monitoring report

Date: 2026-06-02. Closes LOG-PENDING-06; also reconciles D0 / D1 from Phase D intake.

## Source data

- 44 Lighthouse JSONs captured from production (`https://www.doulab.net/...`) in `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/` (Phase F-6 sweep).
- Live `curl` checks against `www.doulab.net` for robots and asset headers (this session).
- CF Pages config: `static/_headers` + `functions/_middleware.ts`.

## Headline metrics (44 URLs, EN + ES, mobile + desktop)

| Metric | Avg | Good threshold | Pass rate |
|---|---|---|---|
| Performance score | 71.9 | ≥ 90 | 8 of 44 (all desktop) |
| Accessibility score | 94.7 | ≥ 90 | 34 of 44 |
| LCP | 5.45 s | < 2.5 s | 8 of 44 (all desktop) |
| CLS | 0.011 | < 0.1 | 43 of 44 |
| TBT | varies | < 200 ms | mobile mostly fails |

**Desktop is healthy across the board** — perf 96-97, LCP 1.2-1.5 s, CLS ~0.001.

**Mobile is the open issue** — LCP 5.9-7.2 s on every public surface. CLS is fine.

## Outstanding finding: mobile LCP plateau

Every mobile page lands LCP at 6 s ± 0.5 s. This is a **systemic** signature — not a per-page problem. Most likely causes (ranked):

1. **Hero image LCP is the candidate element on every page** but the image is already preloaded, served as avif/webp/png, and dimensioned. The 6 s plateau suggests render-blocking JS is delaying the first paint, not the image itself.
2. **Docusaurus client hydration bundle** is the most likely render-blocker. The blog-tag and case-studies-card components inflate the home-page bundle.
3. **Cloudflare Pages edge cold-start** can add 200-500 ms on first paint for low-traffic locales.
4. **Mobile network simulation** in Lighthouse (Slow 4G, 4x CPU throttle) amplifies all of the above. Real-world LCP on a fast mobile network is likely 2-3 s lower.

Single outlier on **CLS**: `services-diagnostics-es-mobile = 0.239` (above 0.1). All others ≤ 0.053. Worth targeted inspection.

## Cloudflare Pages cache configuration — assessment

`static/_headers` ships:

- `/*` — `Cache-Control: no-cache` (HTML, correctly bypassing CDN cache to let the worker / nonce middleware run fresh).
- `/assets/*` — `public, max-age=31536000, immutable` (one year, immutable hash-named assets).
- `/img/*` — `public, max-age=31536000` (one year, but mutable — fine for static hero images that can be invalidated by URL change).

**Production confirmation** (curl on `https://www.doulab.net/img/services-hero.webp`):
- `Cache-Control: public, max-age=31536000` ✓
- `Server: cloudflare` ✓
- `cf-cache-status: MISS` on this request (expected for first-fetch from this edge POP; subsequent requests hit `HIT`).

**Security headers** (also confirmed):
- Enforced CSP with nonce injection via `functions/_middleware.ts`.
- Report-Only CSP without `unsafe-inline` (monitoring-only until JSON-LD hashing lands).
- HSTS (1 year + subdomains), X-Frame-Options DENY, COOP same-origin, Referrer-Policy strict-origin-when-cross-origin, X-Content-Type-Options nosniff, Permissions-Policy locking camera/mic/geo/payment/usb.

No action needed on the cache or header layer.

## D0 / D1 reconciliation (Lighthouse 2026-01-19 findings vs current state)

| Original finding | 2026-01 status | 2026-06 state |
|---|---|---|
| robots.txt invalid (`Content-Signal: search=yes,ai-train=no`) | Blocked (source unknown) | **RESOLVED**: valid `static/robots.txt` shipped with sitemap_index link; old directive gone. Verified live via curl. |
| CSP Trusted Types missing | True | Still missing — accepted-benign for current threat model. Filing as low-priority future. |
| CSP `script-src 'unsafe-inline'` | True | Resolved on HTML responses via per-request `functions/_middleware.ts` nonce injection; baseline fallback retains `'unsafe-inline'` for non-HTML / middleware-disabled paths only. Report-Only CSP drops `'unsafe-inline'` entirely. |
| Accessibility: `.problemCard` contrast | Failing | **RESOLVED** in F-2 + G-9 sweeps. Current a11y avg 94.7, only IMM-DT family below 90 (target for follow-up). |
| Links rely on color | Failing | **RESOLVED** in G-9 prose-link underline carve-out (Wave A). |
| Identical links same purpose | Failing | Partially resolved via cardCta normalization. Spot-checks needed in next audit. |
| Deprecated API warning | True | Source unknown from 2026-01 report; current builds clean per `npm run verify`. |
| Asset 503s | True | Likely transient CF rate-limit; no occurrences in current production headers. |
| Render-blocking requests | True | Still relevant — primary contributor to mobile LCP plateau (see above). |
| Unused JS estimate | True | Still relevant — Docusaurus client bundle could be code-split further. Tied to mobile LCP. |
| Missing explicit image width/height | True | **RESOLVED** for Hero usages (LOG-PENDING-02 unified at 1600×900); other inline `<img>` instances should be spot-checked. |

**Net:** D0 and D1 can be closed. Two follow-ups carry: (a) Trusted Types adoption and (b) mobile LCP investigation (render-blocking JS + bundle splitting).

## Recommended next moves (not in scope here)

1. Open a `lcp-mobile-investigation` work item: capture a Lighthouse trace for `/services/clarityscan` mobile, identify the longest task in the main thread, decide whether to defer `<Mermaid>` or `lucide-react` icon imports.
2. Trusted Types adoption: ship `require-trusted-types-for 'script'` directive in Report-Only mode; observe browser violations over a week before promoting.
3. CLS outlier on `services-diagnostics-es-mobile`: inspect the page in mobile viewport to find the late-shifting element.

## Addendum (2026-06-02): prod-vs-local correction

The 44 JSONs above (`lighthouse-2026-07-prod-v1/`) were captured against `npm run serve --port=4173`, NOT the actual Cloudflare-served production site. Local serve does not gzip / brotli responses, so `uses-text-compression` shows ~2.25 s of phantom "savings" that Cloudflare handles automatically in prod. Re-ran Lighthouse against `https://www.doulab.net/services/clarityscan` mobile (simulate throttling) for ground truth:

| Metric | Local serve (audit-2026-07) | Prod (Cloudflare) | Delta |
|---|---|---|---|
| Performance | 54 | 83 | +29 |
| LCP | 6.38 s | 4.08 s | -2.30 s |
| FCP | 4.59 s | 2.34 s | -2.25 s |
| TBT | 404 ms | 94 ms | -310 ms |
| CLS | 0.001 | 0.001 | — |
| `uses-text-compression` savings | 2250 ms | 0 ms (handled) | full close |
| `unused-javascript` savings | 600 ms | 160 ms | -440 ms |

**Net**: real-world prod mobile LCP on /services/clarityscan is **4.08 s** — still above the 2.5 s "good" threshold but materially better than the local audit suggested. Prod perf score 83.

Top remaining opportunities (real-world):
- `render-blocking-resources`: 1.35 s. The site CSS (`styles.*.css`) and main JS bundle block first paint. Candidate fixes: inline critical CSS via Docusaurus customFields/swizzle, async-load main.js (Docusaurus controls this — needs theme override).
- `unused-javascript`: 160 ms. Code-split per route, particularly Mermaid + lucide-react.
- `unused-css-rules`: 160 ms. The G-batch and audit work already trimmed `custom.css`; further reduction requires moving per-page rules out of the global sheet.

**Operational note for future Lighthouse passes**: capture against the live URL, not local serve, OR document the compression caveat in the artifact name. The `lighthouse-2026-07-prod-v1` directory should arguably be renamed `lighthouse-2026-07-local-v1` to reflect reality.
