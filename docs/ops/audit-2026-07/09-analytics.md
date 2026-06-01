# Analytics & Measurement Audit — doulab.net — 2026-07 (bilingual)

## Scope

Read-only audit of the measurement stack for the now-bilingual Docusaurus site
(`/` EN, `/es/*` ES, live since commit `eb1c8c8`). Covers: event-tagging
coverage and naming consistency for `data-cta` across both locales, funnel
instrumentation from page → CTA → Stripe / Microsoft Bookings → success,
conversion attribution, the ability of the analytics layer to treat **locale as
a dimension**, per-locale pageview tagging, A/B test infrastructure (or
absence), and error / 404 tracking. Specifically verifies the hard rule that
ES must preserve `data-cta` values **byte-identical** to EN (analytics keys,
not copy).

Out of scope: Cloudflare dashboard configuration (not in repo), server-side log
analysis, Stripe/Microsoft Bookings funnel data once the user leaves
doulab.net, SEO crawl/ranking analytics (covered by SEO hand-off), Core Web
Vitals (Performance hand-off), GDPR copy review (Security & privacy hand-off).

## Method

1. Inspected `docusaurus.config.ts` for analytics presets/plugins, i18n config,
   and CSP-relevant head tags.
2. Read `src/theme/Root.tsx` to confirm the privacy-first shim still has no
   client-side analytics.
3. Searched both `src/pages/**` and `i18n/es/docusaurus-plugin-content-pages/**`
   for `data-cta=` occurrences and compared the inventories.
4. Inspected the booking funnel pages
   (`src/pages/book-clarityscan.tsx`, `src/pages/book-clarityscan-success.tsx`),
   `src/pages/contact/index.tsx`, `src/pages/404.tsx`,
   `src/pages/work-with-us/index.tsx`, and the shared components
   (`Hero.tsx`, `FinalCta.tsx`, `PageHeader.tsx`,
   `case-studies/CaseStudyCards.tsx`, `WhitepaperCards.tsx`).
5. Inspected `static/_headers` and `functions/_middleware.ts` for the CSP
   surface that constrains any future analytics or event beacon.
6. Searched for any locale awareness in instrumentation
   (`useDocusaurusContext`, `currentLocale`, `htmlLang`, `data-locale`).
7. Searched for an A/B-test harness, feature-flag, or experimentation file
   (`experiment`, `variant`, `ab-test`, `flag`).
8. Cross-checked which ANLY-* items from `audit-2026-06/09-analytics.md` are
   still unresolved — the `docs/ops/analytics.md` file proposed by ANLY-001 and
   the `src/components/cta-events.ts` module proposed by ANLY-002 still do not
   exist. None of the prior ANLY findings appear in
   `docs/ops/doulab-net-backlog.md` as RESOLVED, so all are carried forward
   below as the baseline (re-statement, not re-filing).

## Findings (ranked)

### ANLT-001 — Locale is not a dimension in the analytics layer; EN and ES pageviews land as unrelated URLs with no shared key

- Severity: P1
- Impact: 5
- Effort: M
- Location: `docusaurus.config.ts:30-37` (i18n `defaultLocale: 'en'`,
  `locales: ['en', 'es']`); `src/theme/Root.tsx:8`; absence of any
  `useDocusaurusContext`, `currentLocale`, or `data-locale` reference under
  `src/`.
- Observation: With ES live, every page now exists at two URLs (`/contact` vs
  `/es/contact`). Cloudflare Web Analytics groups by path, so EN and ES of the
  same logical page show up as two unrelated rows. There is no locale tag on
  pageviews and no `data-locale` attribute on the rendered HTML body (the
  `<html lang>` set by Docusaurus is correct but CF Analytics does not capture
  it). Today the only way to answer "how is /contact performing in ES vs EN"
  is to manually pair URL prefixes in the dashboard. Any future event
  instrumentation will inherit the same blindness.
- Recommendation: When the `cta-events.ts` module from ANLT-002 (was ANLY-002)
  ships, derive locale once via either `document.documentElement.lang` or
  `location.pathname.startsWith('/es/') ? 'es' : 'en'` and include it as a
  property on every emitted event (`{ cta, locale, path }`). Separately,
  document a CF Analytics dashboard convention: when comparing a page across
  locales, sum `path` and `'/es' + path`. No code-side cost beyond the
  one-line derivation.
- Evidence: `docusaurus.config.ts:30-37`; `Grep useDocusaurusContext src/` →
  0 hits; `Grep data-locale src/` → 0 hits.

### ANLT-002 — `data-cta` taxonomy is broken in `work-with-us` (snake_case `wwu_*`, missing `cta.` prefix); ES copies the broken ids verbatim, doubling the impact

- Severity: P1
- Impact: 4
- Effort: S
- Location: `src/pages/work-with-us/index.tsx:121,131,151,170,306,315`
  (`wwu_start_clarityscan`, `wwu_start_clarityscan_book_online`,
  `wwu_start_workshop`, `wwu_start_call`, `wwu_footer_clarityscan`,
  `wwu_footer_contact`);
  `i18n/es/docusaurus-plugin-content-pages/work-with-us/index.tsx:121,131,151,170,306,315`
  (identical strings — correctly NOT translated, but still wrong).
- Observation: Every other page on the site uses
  `cta.<area>.<slot>.<intent>` (dot-delimited, `cta.*` prefix). The six
  `wwu_*` ids are snake_case, lack the `cta.` prefix, and the slot/intent
  are smashed together. This makes them un-groupable in any dashboard query
  that filters on `cta.*` or splits on `.`. ES preserved the broken keys
  verbatim — which is the correct *bilingual* discipline but locks the
  damage in twice.
- Recommendation: Rename to
  `cta.wwu.start.clarityscan`, `cta.wwu.start.clarityscan_book_online`,
  `cta.wwu.start.workshop`, `cta.wwu.start.call`,
  `cta.wwu.footer.clarityscan`, `cta.wwu.footer.contact`. Apply identically
  in both EN and ES files in the same commit. If any historical CF Analytics
  dashboards reference the old strings, leave a one-line comment in
  `docs/ops/analytics.md` (see ANLT-005) noting the 2026-07 rename date so
  the cutover is auditable.
- Evidence: `Grep "data-cta=" src/pages | Grep -v "cta\\."` returns only the
  six `wwu_*` lines.

### ANLT-003 — Docs pages use `docs.research.*` keys (no `cta.` prefix); ES mirror preserves them verbatim

- Severity: P2
- Impact: 3
- Effort: S
- Location: `docs/research-resources/index.mdx:45,56,78,93,110,127,152,153`;
  `i18n/es/docusaurus-plugin-content-docs/current/research-resources/index.mdx`
  same lines.
- Observation: The Research & Resources index uses a parallel
  `docs.research.<area>.<slug>` namespace instead of `cta.docs.research.*`.
  Whether this is intentional (separate "content engagement" vs "CTA"
  buckets) or accidental drift, it is not documented. A grep-based dashboard
  filter on `^cta\.` misses these entirely. ES preserves the keys, which is
  correct.
- Recommendation: Pick one of two paths in `docs/ops/analytics.md` (see
  ANLT-005): (a) document `docs.*` as a sibling taxonomy with stated intent
  ("content engagement, not conversion intent"); or (b) rename to
  `cta.docs.research.*` and normalize. Either is fine — what is not fine is
  silent drift. ES file edits must mirror EN.
- Evidence: `Grep "data-cta=" docs/` shows 8 keys, all `docs.research.*`.

### ANLT-004 — Bilingual `data-cta` parity holds (verified across 99 EN occurrences); ES correctly does NOT translate analytics keys

- Severity: informational (positive finding — verification only)
- Impact: n/a
- Effort: n/a
- Location: 99 EN occurrences under `src/pages/**` and 26 component
  occurrences under `src/components/**`; ES content-pages tree mirrors
  byte-identically.
- Observation: Spot-checked 30+ `data-cta` values across
  `index.tsx`, `about`, `contact`, `insights`, `services/*`,
  `case-studies/*`, `vigia-futura`, `work-with-us`, `book-clarityscan*`
  in both `src/pages/**` and
  `i18n/es/docusaurus-plugin-content-pages/**` — every string is preserved
  byte-identically. The surrounding visible copy is translated; the
  `data-cta=""` literal is not. This satisfies the hard rule.
- Recommendation: Lock this with the lint/grep guard in ANLT-013 below so
  future ES translation passes do not regress (e.g. a translator
  accidentally rendering `data-cta="cta.about.story.process"` as
  `data-cta="cta.acerca.historia.proceso"`).
- Evidence: Side-by-side Grep of EN vs ES for `data-cta=` matches on every
  line cited (e.g. `about/index.tsx:172,190,205,222,237,252,263`;
  `insights/index.tsx:231-406`).

### ANLT-005 — `docs/ops/analytics.md` still does not exist; the CF Web Analytics dependency, the `data-cta` taxonomy, and the ES `data-cta` non-translation rule remain undocumented

- Severity: P1
- Impact: 4
- Effort: S
- Location: `docs/ops/` (no `analytics.md` file); ANLY-001 from audit-2026-06
  unresolved.
- Observation: The privacy-first analytics posture, the auto-injected CF
  Web Analytics beacon (whitelisted in CSP at `static/_headers:10` and
  `functions/_middleware.ts:72`), the `data-cta="cta.<area>.<slot>.<intent>"`
  convention, the `docs.research.*` exception (ANLT-003), and the now-binding
  bilingual rule "ES MUST NOT translate `data-cta` values" all live as tribal
  knowledge. With ES live and an ES translation pipeline in motion, the
  non-translation rule needs a written, linked home before the next translator
  touches a page.
- Recommendation: Create `docs/ops/analytics.md` with sections:
  1. Stack (CF Web Analytics auto-inject via Cloudflare Pages, no consent
     needed, no cookies).
  2. CSP allow-list rationale (cross-ref `static/_headers:10`).
  3. `data-cta` taxonomy (`cta.<area>.<slot>.<intent>`).
  4. Bilingual rule: `data-cta` values are analytics keys, NEVER translate.
     Include a one-line example showing EN/ES diff with the cta unchanged.
  5. Locale handling (per ANLT-001).
  6. Open questions and known exceptions (`docs.research.*`, `wwu_*` pre-rename).
- Evidence: `ls docs/ops/ | grep analytic` → no result.

### ANLT-006 — No `data-cta` click listener exists; the 99 EN + 99 ES taggings still produce zero event data (audit-2026-06 ANLY-002 unresolved)

- Severity: P0
- Impact: 5
- Effort: M
- Location: `src/theme/Root.tsx:1-10` (no-op shim); absence of
  `src/components/cta-events.ts` (`ls src/components/ | grep -i 'cta\|event\|analytic'`
  → only `FinalCta.tsx`).
- Observation: A year after the `data-cta` taxonomy was put in place — and
  now duplicated 1:1 in ES — the click delegate that would convert those
  attributes into CF Analytics custom events still has not landed. The
  highest-leverage analytics investment on the property is still a single
  ~30-line module that does not exist.
- Recommendation: Ship `src/components/cta-events.ts` exactly as scoped in
  audit-2026-06 ANLY-002, with two additions for bilingual:
  (a) emit `locale` derived from `document.documentElement.lang` (or path
  prefix) on every event;
  (b) emit `path` so EN/ES counterparts can be paired in the dashboard.
  Load once from `src/theme/Root.tsx`. No CSP change required (already
  allow-listed). No consent banner change (no cookie, no identifier).
- Evidence: `Read src/theme/Root.tsx` shows the no-op shim;
  `Glob src/components/*cta*` returns only `FinalCta.tsx`.

### ANLT-007 — Conversion event on `/book-clarityscan-success` still not emitted; the highest-value page on the property remains an indistinguishable pageview in both locales (audit-2026-06 ANLY-005 unresolved)

- Severity: P0
- Impact: 5
- Effort: S
- Location: `src/pages/book-clarityscan-success.tsx:8-50`;
  `i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx`
  (identical structure).
- Observation: This is the Stripe success-redirect page — confirmed payment.
  It still only generates a generic pageview, now in two locales. The page is
  `noindex,follow` so it never shows up in organic-funnel reports, and the
  Microsoft Bookings tab is opened via `window.open(..., '_blank',
  'noopener,noreferrer')` with no UTM source distinguishing the bilingual
  origin. EN and ES paid conversions are not separable.
- Recommendation: On mount, fire
  `cta.conversion.clarityscan.paid` with `{ locale }`. Concurrently, append
  `?src=success-en` vs `?src=success-es` to `CLARITYSCAN_BOOKING_URL`
  before the `window.open` call so Microsoft Bookings logs the locale even
  without client-side analytics. Five-line change per locale file (or one
  shared component now that ES forked the file — see ANLT-011).
- Evidence: `Read book-clarityscan-success.tsx` — no event emission, no UTM,
  identical in ES.

### ANLT-008 — Stripe checkout link (`CLARITYSCAN_CHECKOUT_URL`) is the same byte-string across 8+ call sites and both locales; outbound checkout-click attribution is impossible

- Severity: P1
- Impact: 5
- Effort: S
- Location: `src/constants/urls.ts:5-6` (single constant `https://buy.stripe.com/...`);
  call sites at `src/pages/contact/index.tsx:85,207`,
  `src/pages/services/diagnostics.tsx:47,92,95,225`,
  `src/pages/services/index.tsx:81`,
  `src/pages/services/clarityscan*.tsx`, and the ES mirrors.
- Observation: The Stripe Checkout URL is hardcoded once and reused
  everywhere. Stripe Checkout supports `client_reference_id` and arbitrary
  query parameters that survive into the webhook payload, but nothing in the
  code passes any source / slot / locale identifier. From a Stripe-side
  conversion report, every paid ClarityScan looks like it came from the same
  link — no attribution to page, slot, or language.
- Recommendation: Wrap `CLARITYSCAN_CHECKOUT_URL` in a tiny helper
  `buildCheckoutUrl({ src, locale })` that appends
  `?client_reference_id=<src>-<locale>` (e.g. `contact-final-es`,
  `diagnostics-hero-en`). Stripe Checkout passes this through to the
  webhook + dashboard. No PII (slot id only). Three-line helper, then
  thread through each call site. The ES mirror picks it up automatically if
  the helper is imported (vs hardcoded URL in each file).
- Evidence: `Read src/constants/urls.ts`; `Grep CLARITYSCAN_CHECKOUT_URL src/`
  shows 8 import sites, all using the literal constant.

### ANLT-009 — Microsoft Bookings discovery / briefing links are still byte-identical across slots AND across locales (audit-2026-06 ANLY-008 unresolved + extended)

- Severity: P1
- Impact: 4
- Effort: S
- Location: `https://booking.doulab.net/discovery` literal at
  `src/pages/contact/index.tsx:80,115,201`,
  `src/pages/services/coaching-mentoring.tsx:156,171,186,201`,
  `src/pages/services/diagnostics.tsx:50,111,127,229`,
  `src/pages/services/custom-workshops.tsx:155,189`,
  `src/pages/services/innovation-maturity.tsx:570`,
  `src/pages/services/innovation-readiness-workshop.tsx:559`,
  `src/pages/404.tsx:20` (via `https://booking.doulab.net/`);
  and the ES mirror of every one of those files.
- Observation: 14+ call sites point to the same byte-identical
  `https://booking.doulab.net/discovery`, and ES adds 14 more identical
  ones. Microsoft Bookings sees one undifferentiated source. The
  audit-2026-06 ANLY-008 recommendation to append `?src=<slot>` was never
  acted on; the bilingual launch made the problem 2× worse.
- Recommendation: Same fix as audit-2026-06 ANLY-008, now with locale:
  append `?src=<area>-<slot>-<locale>` at the call site. Better: introduce
  `src/constants/urls.ts` exports
  `bookingDiscoveryUrl(src, locale)` and `bookingBriefingUrl(src, locale)`
  and migrate every call site. Microsoft Bookings retains the parameter in
  its booking log. Survives ad-blockers and JS-off.
- Evidence: `Grep "booking.doulab.net" src/pages` returns 14+ literals; same
  Grep on `i18n/es/docusaurus-plugin-content-pages` returns the mirror.

### ANLT-010 — 404 page has no error event; `cta.404.*` clicks measure recovery but not the underlying error volume; no locale split

- Severity: P2
- Impact: 3
- Effort: S
- Location: `src/pages/404.tsx:8-71`;
  `i18n/es/docusaurus-plugin-content-pages/404.tsx`.
- Observation: The 404 page correctly tags the four recovery CTAs
  (`cta.404.services|docs|contact|home` plus `cta.404.book`). But CF Web
  Analytics counts the pageview of `/404` regardless of which URL the user
  tried to reach. The actual broken URL is lost. Even worse, with ES live,
  Docusaurus serves `/404.html` for EN-side misses and `/es/404.html` for
  ES-side misses — split counts but no signal as to *what* URL the user
  expected.
- Recommendation: On mount, capture `document.referrer` and
  `window.location.pathname` (the latter is `/404` after the rewrite, but
  CF logs the original request path in the dashboard). Emit
  `error.404.{recovery|abandon}` events tied to which recovery CTA was
  clicked (or none). Pair with a Cloudflare Pages or Worker log filter on
  HTTP 404 grouped by `Accept-Language` for the true denominator. Out of
  scope to fully build here — file as a joint hand-off to Security &
  privacy (log access).
- Evidence: `Read 404.tsx` — only pageview signal, no error event.

### ANLT-011 — ES translation is implemented as forked `.tsx` files (not i18n strings); any analytics instrumentation now has to be added twice and stay in sync

- Severity: P1
- Impact: 4
- Effort: M (depends on the EN side first)
- Location: `i18n/es/docusaurus-plugin-content-pages/**` — 48 mirrored TSX
  files duplicate the entire EN page structure (verified for
  `book-clarityscan-success.tsx`, `contact/index.tsx`, `404.tsx`,
  `work-with-us/index.tsx`).
- Observation: When ANLT-006 lands (`cta-events.ts` listener), it works
  globally — fine, one delegate. But the per-page event emitters
  recommended in ANLT-007 (success-page conversion event), ANLT-010 (404
  error event), and the per-call-site URL builders in ANLT-008 / ANLT-009
  must be edited in EN *and* ES versions. Drift is inevitable.
- Recommendation: Two stacking moves: (a) extract the success-page,
  `book-clarityscan` page, and 404-page logic into shared components under
  `src/components/` so the ES wrapper is a thin shell that imports the EN
  component and passes only translated copy props (the existing
  `Hero` / `FinalCta` / `PageHeader` pattern); (b) flag the bilingual
  fork-vs-i18n-strings question for the i18n role (cross-ref to
  `12-i18n.md`). For analytics alone, (a) is enough to prevent drift.
- Evidence: Diff of `src/pages/book-clarityscan-success.tsx` vs
  `i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx`
  shows identical structure with copy-only differences.

### ANLT-012 — No A/B test / experimentation infrastructure exists, and the bilingual launch is a perfect natural-experiment opportunity left on the table

- Severity: P2
- Impact: 3
- Effort: L
- Location: Whole-site. `Grep -ri "experiment|variant|ab-test|feature-flag" src/`
  returns nothing analytics-related.
- Observation: With EN and ES now live for the same products, the obvious
  measurement question is "do ES visitors convert at the same rate, on the
  same CTAs, as EN visitors?" There is no harness for variant assignment,
  no event-side variant tag, and no doc on how an experiment would be run.
  Without ANLT-006 firing first, even a manual "swap copy for two weeks"
  test is unmeasurable.
- Recommendation: Defer until ANLT-006 (events) and ANLT-001 (locale
  dimension) ship. Then a server-side variant via Cloudflare Pages
  geo/headers + `data-experiment="<key>:<variant>"` attribute pattern
  reusing the same delegate is the lowest-cost path. Document the pattern
  in `docs/ops/analytics.md` so the first experiment can be one-shot
  rather than green-field. Hand off to Conversion for which CTAs to test
  first.
- Evidence: `Grep -ri experiment src/` → no analytics matches.

### ANLT-013 — No build-time guard that ES translation passes did not, and will not, translate `data-cta` values (audit-2026-06 ANLY-012 unresolved + extended)

- Severity: P1
- Impact: 4
- Effort: S
- Location: `package.json:13-14` (`verify` script chains typecheck + build,
  no analytics assertions); no `scripts/verify-analytics.*`; no
  `scripts/check-data-cta-parity.*`.
- Observation: The bilingual hard rule "`data-cta` values must NEVER be
  translated" relies on translator discipline alone. Today the rule holds
  (ANLT-004), but the next translation PR could regress it silently — and a
  silently-broken `data-cta` is invisible to the build (no type error, no
  visible UI break, no Lighthouse drop). The same gap applies to the
  audit-2026-06 ANLY-012 ask: no grep guard for forbidden trackers
  (`gtag`, `googletagmanager`, `mixpanel`, `hotjar`, `segment.com`,
  `connect.facebook`).
- Recommendation: Add `scripts/verify-analytics.mjs` invoked from
  `verify:build` that does two checks:
  (1) **Tracker block-list**: grep `build/**/*.html` and `build/**/*.js` for
      forbidden tokens; fail if any are found.
  (2) **`data-cta` parity**: collect every `data-cta="…"` from
      `src/pages/**` and `src/components/**`, collect every `data-cta="…"`
      from `i18n/es/**`, and assert the ES set is a subset of the EN set.
      Any ES-only `data-cta` value is, by definition, a translation
      mistake. Print the offending file:line.
  Mirrors the existing "no legacy booking link" pattern in `AGENTS.md:20`.
- Evidence: `package.json:13-14`; no analytics-guard script anywhere.

### ANLT-014 — Outbound clicks (booking.doulab.net, buy.stripe.com, mailto, LinkedIn, GitHub) still uninstrumented in both locales (audit-2026-06 ANLY-003 unresolved)

- Severity: P1
- Impact: 4
- Effort: S (once ANLT-006 ships)
- Location: Same as audit-2026-06 ANLY-003, now doubled by the ES mirror.
- Observation: Every revenue-relevant funnel step still ends in a
  cross-domain navigation. CF Web Analytics records the originating
  pageview but the destination host is invisible. With ES live, two
  identical funnels exist, and neither has any outbound attribution.
- Recommendation: Same as audit-2026-06 ANLY-003 — extend the ANLT-006
  click delegate to detect anchors whose host matches
  `booking.|buy.stripe.|linkedin.|github.|mailto:` and emit a
  `cta.outbound.<host>` event with `{ locale, path }`. Host only, no full
  URL, no query string.
- Evidence: ANLY-003 evidence still current; ES mirrors unchanged.

### ANLT-015 — File downloads (whitepaper PDFs) still not measured; ES whitepaper-card surface inherits the gap (audit-2026-06 ANLY-007 unresolved)

- Severity: P2
- Impact: 3
- Effort: S (once ANLT-006 ships)
- Location: `src/components/WhitepaperCards.tsx:57` (`data-cta="cta.whitepaper.read"`);
  `static/_headers:28-32` (one-year immutable cache); ES surface uses
  same shared component (one of the few non-forked surfaces — good).
- Observation: WhitepaperCards is a shared component so ES uses the same
  rendered `data-cta`. Once ANLT-006 lands, a single rule in the delegate
  (`href` ends in `.pdf|.zip|.csv|.xlsx|.docx`) gets both locales for
  free. This is what extracting page logic into shared components (per
  ANLT-011) buys.
- Recommendation: Per audit-2026-06 ANLY-007: emit
  `cta.download.<basename>` from the ANLT-006 delegate; add `locale` and
  `path` props. No new component work.
- Evidence: `WhitepaperCards.tsx:57`; ES surface uses the same import.

### ANLT-016 — `book-clarityscan` and `book-clarityscan-success` are `noindex,follow` and not in any sitemap-driven funnel report; with ES live, the funnel "page reached" count now splits across `/book-clarityscan-success` and `/es/book-clarityscan-success` with no aggregation

- Severity: P2
- Impact: 3
- Effort: S
- Location: `src/pages/book-clarityscan.tsx:14`;
  `src/pages/book-clarityscan-success.tsx:23`; ES mirrors same.
- Observation: These two pages are the only ones unambiguously identifiable
  as "funnel stage = paid" or "funnel stage = clicked-online-booking", but
  they are intentionally invisible to search and now split by locale.
  Without ANLT-007 firing an explicit conversion event, the CF Analytics
  dashboard view of these pages requires manually pairing the EN and ES
  paths.
- Recommendation: Add a per-page `<meta name="x-doulab-funnel-stage"
  content="clarityscan.paid">` (or `clarityscan.redirect`) to both EN and
  ES versions. Plain HTML, surfaces in CF Analytics path metadata, no JS
  needed. Combined with ANLT-007's mounted event, the funnel becomes
  queryable.
- Evidence: `Read book-clarityscan.tsx:14` (`noindex,follow`); same in
  success page.

### ANLT-017 — Per-locale pageview report is feasible today (CF Analytics groups by path), but per-locale CTA-rate is impossible until events ship; document the asymmetry

- Severity: P3
- Impact: 2
- Effort: S
- Location: CF Analytics dashboard (out-of-repo); `docusaurus.config.ts:30-37`.
- Observation: Today: EN pageviews for `/contact` and ES pageviews for
  `/es/contact` both appear in CF Analytics under their respective paths,
  so a per-locale pageview view is "filter path startsWith /es/". Per-locale
  *CTA* rates require ANLT-006 (events). Per-locale *conversion* requires
  ANLT-007 + ANLT-008 (Stripe `client_reference_id`). Per-locale *outbound*
  requires ANLT-014. This asymmetry should be written down so dashboard
  consumers (sales, content) know which questions are answerable today.
- Recommendation: One-paragraph section in `docs/ops/analytics.md`
  (ANLT-005) titled "What you can / cannot answer per locale today".
- Evidence: Inferred from absence of any event surface.

### ANLT-018 — CSP `report-to` / Reporting-Endpoints still not configured; silent CSP failures (including a misconfigured CF Analytics beacon) remain invisible (audit-2026-06 ANLY-013 unresolved)

- Severity: P3
- Impact: 2
- Effort: S
- Location: `static/_headers:13` (TODO comment), `functions/_middleware.ts`
  (no reporting endpoint).
- Observation: The TODO in `static/_headers:13` ("no Cloudflare Worker /
  report collector is configured yet") still stands. A misconfigured
  Cloudflare Web Analytics token, a future inline script that loses its
  nonce, or any CSP-violating analytics integration will fail silently. The
  Report-Only CSP exists but its violations only surface in browser
  DevTools.
- Recommendation: Hand off to Security & privacy (ANLT shares the
  measurement angle): when the report-collector Worker is built, treat
  CSP-violation counts as a quality metric for the analytics stack, not
  just a security signal.
- Evidence: `static/_headers:13`.

### ANLT-019 — Cloudflare Web Analytics remains the right choice for the bilingual launch; do not migrate (audit-2026-06 ANLY-014 reaffirmed)

- Severity: informational
- Impact: 4
- Effort: L (if migration chosen — recommendation against)
- Location: Whole-site decision.
- Observation: The bilingual launch changes nothing about the
  decision-relevant tradeoffs from audit-2026-06 ANLY-014. CF Web Analytics
  is hosted on the same edge as the site, supports custom events
  (still-untapped), the CSP is already scoped to `cloudflareinsights.com`,
  and the privacy-first posture in `gdpr-compliance.md` lists Cloudflare
  as the only processor. Plausible / Umami / Fathom would each re-open the
  CSP, the GDPR processor list, and the "Cloudflare Web Analytics only"
  marketing claim on `/contact:148` and `/es/contact:148`.
- Recommendation: Stay. Reaffirm in `docs/ops/analytics.md` (ANLT-005).
- Evidence: `static/_headers:10`; `src/pages/contact/index.tsx:148` ("Cloudflare
  Web Analytics only"); same in ES.

## Quick wins — top 5

1. **ANLT-013** — Ship `scripts/verify-analytics.mjs` and wire it into
   `verify:build`. Two checks: tracker block-list + EN/ES `data-cta` parity.
   ~50 lines, locks in the bilingual hard rule before the next ES translation
   PR.
2. **ANLT-002** — Rename the six `wwu_*` ids to
   `cta.wwu.<slot>.<intent>` in EN and ES in the same commit. Zero
   measurement risk, restores grep-ability on `^cta\.`.
3. **ANLT-005** — Create `docs/ops/analytics.md` covering stack, taxonomy,
   bilingual rule, and per-locale dashboard conventions. Pure documentation,
   one PR.
4. **ANLT-007** — Emit `cta.conversion.clarityscan.paid` with `{ locale }`
   on mount in both EN and ES success pages (or, with ANLT-011, a single
   shared component). Highest-value conversion finally measurable.
5. **ANLT-009 / ANLT-008** — Add `?src=<area>-<slot>-<locale>` to the
   `booking.doulab.net` and Stripe Checkout URLs at every call site. Pure
   string change, immediately readable in Microsoft Bookings + Stripe
   dashboards, survives ad blockers and JS-off, no client-side analytics
   needed.

## Strategic bets — top 3

1. **Ship the `data-cta` click delegate with locale as a first-class
   dimension (ANLT-006 + ANLT-001)**. Single ~40-line `src/components/cta-events.ts`
   loaded from `Root.tsx`, emits `{ cta, locale, path }` on every
   `[data-cta]` click. Unlocks ANLT-007, ANLT-010, ANLT-014, ANLT-015, and
   bilingual-comparison reporting. The single highest-leverage analytics
   investment on the site.
2. **Extract bilingual page shells into shared components (ANLT-011)**.
   Reduces ES drift risk for every future instrumentation cycle, and
   compounds with the i18n role's likely recommendation to move from
   forked-TSX translations to i18n-string translations. Defensive
   architecture rather than defensive grep-guards.
3. **Treat the bilingual launch as the first natural experiment (ANLT-012)**.
   Once ANLT-006 + ANLT-001 are live, the "EN vs ES conversion rate by CTA"
   query becomes the first proof point. Document the harness for it
   in `docs/ops/analytics.md` so subsequent experiments (copy variants,
   pricing display, hero ordering) plug into the same pattern.

## Out of scope / hand-offs

- **Conversion**: ranking which `data-cta` ids actually matter, CTA copy
  A/B candidates, ES-specific funnel narrative (touches ANLT-006, -007,
  -008, -009, -012).
- **SEO**: bilingual sitemap / hreflang funnel attribution, organic-session
  per-locale, `noindex` policy on `/book-clarityscan*` and its ES mirror
  (touches ANLT-016).
- **Performance**: Core Web Vitals beacon (separate from analytics
  beacon), real-user-monitoring vendor choice.
- **Security & privacy**: CSP `report-to` endpoint design (touches
  ANLT-018), bilingual processor-disclosure copy if any analytics vendor
  change is reconsidered, transparency-page legal copy.
- **i18n**: the fork-vs-i18n-strings decision for ES content-pages
  (touches ANLT-011, -004, -013) — this is the foundational call that
  determines how brittle bilingual instrumentation will be.
- **IA & UX**: on-site search component, navbar structure changes that
  would create new CTA slots needing taxonomy.
- **Content & copy**: per-locale scroll thresholds and "what counts as a
  read" definition; `/transparency` page narrative.
- **Code quality**: the verifier addition itself (ANLT-013) and the
  shared `cta-events.ts` module review.
- **Sales**: mapping `data-cta` ids to CRM stages once events are firing;
  per-locale lead-quality comparison (depends on ANLT-006 + Stripe
  `client_reference_id` in ANLT-008).
- **Behavioral economics / Behavioral psychology**: which
  micro-interactions are worth measuring as commitment escalations,
  especially where ES copy differs in commitment register from EN.
- **Blog & editorial**: which posts are flagship enough to warrant
  scroll-depth instrumentation; bilingual readership parity.
- **Brand, Accessibility, MCF/IMM-P®, Mobile-first, Lighthouse, Viewport**:
  no direct analytics dependencies in this audit.

## Open questions for Luis

1. Is Cloudflare Web Analytics confirmed configured on the
   `doulab-site` Cloudflare Pages project for both `/` and `/es/*` paths?
   (The beacon is path-agnostic but confirm before ANLT-005 documents the
   mechanism.)
2. Does the CF Web Analytics plan permit custom events at the current
   traffic volume? This still gates ANLT-006 → -007, -010, -014, -015.
3. Is the Stripe Checkout product config willing to accept a
   `client_reference_id` in the URL (ANLT-008) — any risk of the URL
   shape being rejected, or any downstream webhook consumer that would
   break on a new field?
4. For ES `/es/book-clarityscan-success`, is the Stripe success_url
   already configured per-locale, or does ES traffic redirect to the EN
   success page? This determines whether ANLT-007 needs to be added in one
   place or two.
5. Which translation workflow is in use for ES (manual hand-edit of
   forked TSX vs Crowdin / Lokalise / Weglot)? The answer determines
   whether ANLT-013's parity check needs to fail-fast in CI or
   fail-friendly with a translator-readable diff.
6. Is there appetite for the bilingual conversion comparison from
   ANLT-012 to become a quarterly measurement digest? If yes,
   ANLT-005's `analytics.md` should include the schema for it now rather
   than later.
