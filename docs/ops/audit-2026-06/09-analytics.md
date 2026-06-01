# Analytics & Measurement Audit — doulab.net — 2026-06-01

## Scope

Read-only audit of the measurement stack for the Docusaurus site at
`doulab-site/`. Covers: which signals are captured today (pageviews,
events, conversions), gaps versus the documented funnel (ClarityScan
booking, discovery call, briefing requests, RSS/Atom, file downloads,
outbound link clicks), tooling options that preserve the current
privacy-first / no-consent-banner posture, and the CSP / headers
constraints that any new instrumentation must respect.

Out of scope: Cloudflare dashboard configuration (not in repo),
server-side log analysis, Stripe/Microsoft Bookings funnel data once the
user leaves doulab.net (handled by those vendors), SEO crawl/ranking
analytics (covered by SEO hand-off), Core Web Vitals (Performance
hand-off).

## Method

1. Inspected `docusaurus.config.ts` for analytics presets/plugins.
2. Read `src/theme/Root.tsx` and `src/components/ConsentBanner.tsx` to
   confirm there is no client-side analytics shim.
3. Inspected the two ClarityScan booking funnel pages
   (`src/pages/book-clarityscan.tsx`,
   `src/pages/book-clarityscan-success.tsx`) and the contact page
   (`src/pages/contact/index.tsx`).
4. Inspected `static/_headers` for the CSP that constrains any future
   analytics or event beacons.
5. Searched the `src/` tree for `data-cta=` annotations, third-party
   analytics SDK names (`gtag`, `plausible`, `umami`, `fathom`), and
   `cloudflareinsights` references.
6. Cross-checked policy in `docs/ops/gdpr-compliance.md` and the
   AGENTS.md guardrails (no consent banner, CF Analytics only).

## Findings (ranked)

### ANLY-001 — Cloudflare Web Analytics beacon is injected by Cloudflare Pages, not by the site code; site code has no fallback if it gets disabled
- Severity: medium
- Impact: 4
- Effort: S
- Location: `docusaurus.config.ts:28` (`plugins: []`),
  `src/theme/Root.tsx:1-10`, `static/_headers:4`
- Observation: No analytics plugin is declared in Docusaurus
  (`plugins: []`) and `Root.tsx` is an explicit no-op with a comment
  saying GTM/GA/consent hooks were removed. The CSP in `_headers` line 4
  whitelists `https://static.cloudflareinsights.com` (script-src) and
  `https://cloudflareinsights.com` (connect-src), confirming the beacon
  is auto-injected by Cloudflare Pages at the edge. If the Cloudflare
  dashboard toggle is turned off (or the zone is moved), zero telemetry
  is captured anywhere and there is no source-controlled marker.
- Recommendation: Add a short note in `docs/ops/gdpr-compliance.md` and
  in a new `docs/ops/analytics.md` recording (a) that CF Web Analytics
  is enabled at the Cloudflare Pages project level, (b) the exact
  property/site-token used (or "auto-inject"), and (c) a quarterly
  verification check (`curl https://doulab.net | grep cloudflareinsights`).
  This makes the dependency explicit and auditable without adding code.
- Evidence: `docusaurus.config.ts:28`; `static/_headers:4`;
  `src/theme/Root.tsx:4-7` ("removed GTM/GA dataLayer pushes and consent
  hooks").

### ANLY-002 — `data-cta` attributes exist on conversion CTAs but nothing reads them, so no event-level conversion data is captured
- Severity: high
- Impact: 5
- Effort: M
- Location: `src/pages/contact/index.tsx:82,87,116,136,153,205,211`;
  `src/pages/book-clarityscan.tsx:41`;
  `src/pages/book-clarityscan-success.tsx:39`; 83 occurrences across 20
  source files (Grep `data-cta=`).
- Observation: The site has a consistent `data-cta="cta.<area>.<slot>.<intent>"`
  taxonomy already wired onto every primary/secondary CTA (e.g.
  `cta.contact.hero.discovery`, `cta.book_clarityscan.redirect`,
  `cta.contact.final.book_clarityscan_booking`). However, Cloudflare
  Web Analytics is pageview-only by default; there is no listener that
  forwards `data-cta` clicks to anything. The instrumentation surface
  exists but produces no data.
- Recommendation: Add a single, ~30-line, dependency-free module
  (`src/components/cta-events.ts`) loaded once via `Root.tsx` that
  delegates `click` on `[data-cta]` and either (a) appends `?cta=<id>`
  to outbound href just before navigation so server logs / CF dashboard
  capture it via referrer/UTM, or (b) calls Cloudflare Web Analytics
  custom events (`window.__cfBeacon?.push(...)` — Cloudflare exposes a
  `cf-analytics` events API for sites with the new Pages-integrated
  beacon). Option (a) needs no CSP change; option (b) is already allowed
  by the existing CSP. No cookies, no PII, no consent required.
- Evidence: Inventory of `data-cta` across `src/pages/contact/index.tsx`
  lines 82, 87, 116, 136, 153, 205, 211 and the two booking pages cited
  above; no `addEventListener('click'`, `fetch('/api/event'`, or
  beacon-send code anywhere under `src/`.

### ANLY-003 — Outbound clicks to booking.doulab.net, Stripe, LinkedIn, GitHub, email are entirely invisible
- Severity: high
- Impact: 5
- Effort: S
- Location: `src/pages/contact/index.tsx:80,85,115,135,203,209`
  (`https://booking.doulab.net/discovery`,
  `https://booking.doulab.net/briefing`, `CLARITYSCAN_CHECKOUT_URL`);
  `docusaurus.config.ts:121-122` (LinkedIn, GitHub footer links);
  `docusaurus.config.ts:120` (`mailto:hello@doulab.net`).
- Observation: All revenue-relevant funnel steps after the homepage
  involve a cross-domain navigation (Microsoft Bookings, Stripe
  Checkout, mailto). Cloudflare Web Analytics records the originating
  pageview but does not record outbound click destinations. There is no
  way to attribute discovery-call bookings or ClarityScan payments back
  to entry path, page, or campaign.
- Recommendation: Two complementary, privacy-safe measures:
  (1) Use the click delegate from ANLY-002 to detect anchors with
  `href` starting with `https://booking.`, `mailto:`, `https://buy.stripe.`,
  `https://www.linkedin.com`, and `https://github.com`, and emit a CF
  Analytics custom event with the destination host (host only, never
  full URL, no query string, no referrer headers).
  (2) Append a static UTM-like fragment to outbound booking URLs at
  build time (e.g. `?src=contact-hero`, `?src=final-cta`) — this allows
  Microsoft Bookings to record the source without any client-side
  tracker.
- Evidence: `src/pages/contact/index.tsx:80,85,115,135,203,209`;
  `docusaurus.config.ts:120-122`.

### ANLY-004 — ClarityScan booking funnel auto-redirects from React useEffect, breaking pageview attribution and creating measurement blind spots
- Severity: high
- Impact: 5
- Effort: S
- Location: `src/pages/book-clarityscan.tsx:10-19`;
  `src/pages/book-clarityscan-success.tsx:9-17`.
- Observation: Both pages call `window.open(CLARITYSCAN_BOOKING_URL,
  '_blank', 'noopener,noreferrer')` in a `useEffect` immediately after
  mount. `rel="noopener noreferrer"` plus `_blank` means Microsoft
  Bookings receives no referrer header at all, so even if the booking
  platform had its own analytics, it cannot tell which Doulab page
  drove the conversion. Also, the pages themselves are marked
  `noindex,follow` (lines 25 and 24 respectively) so they will not
  show up in search-driven funnel reports.
- Recommendation: (a) Switch the outbound URL to include a UTM-style
  parameter per source page (`?src=book-clarityscan` vs
  `?src=book-clarityscan-success`) so Microsoft Bookings sees a
  distinguishable referrer-equivalent in its own logs. (b) Before
  calling `window.open`, fire the same `data-cta` custom event with id
  `cta.book_clarityscan.auto_redirect` so a "page reached" count is
  separable from a "manual link clicked" count — today the two are
  indistinguishable.
- Evidence: `src/pages/book-clarityscan.tsx:14`;
  `src/pages/book-clarityscan-success.tsx:12`.

### ANLY-005 — No /book-clarityscan-success completion event distinct from page view; payment-confirmed conversion is not measurable
- Severity: high
- Impact: 5
- Effort: S
- Location: `src/pages/book-clarityscan-success.tsx:1-50`.
- Observation: This page exists specifically as the Stripe success
  redirect ("Your ClarityScan payment is confirmed"), making it the
  single highest-value conversion event on the property. The page is
  `noindex` and only generates a generic CF Analytics pageview
  indistinguishable from any other page. There is no event taxonomy
  marking it as "conversion" anywhere in the code.
- Recommendation: On mount, fire a one-time
  `cta.conversion.clarityscan.paid` custom event via the CF Analytics
  events API (allowed by existing CSP, no consent needed because there
  is no cookie or persistent identifier). Add an alias
  `<link rel="canonical">` parameter or a dedicated `<meta name="x-doulab-event"
  content="conversion.clarityscan.paid">` tag for downstream log
  parsers. Both options are PII-free and survive CSP.
- Evidence: `src/pages/book-clarityscan-success.tsx:22-23` (canonical
  and noindex meta), no event code anywhere on the page.

### ANLY-006 — RSS and Atom subscription has zero observability
- Severity: medium
- Impact: 3
- Effort: M
- Location: `docusaurus.config.ts:44` (`feedOptions: { type: 'all' }`);
  `docusaurus.config.ts:130-131` (footer links to `/blog/rss.xml`,
  `/blog/atom.xml`).
- Observation: Feeds are produced and linked, but CF Web Analytics
  pageviews on `/blog/rss.xml` and `/blog/atom.xml` only count the
  initial subscribe click — not ongoing readership. There is no
  redirect through a counting endpoint, and no way to tell whether the
  blog has 5 RSS subscribers or 500.
- Recommendation: Two low-cost options that respect privacy:
  (1) Serve feeds through a Cloudflare Worker route (e.g.
  `/feed/rss.xml`) that 302-redirects to the static file and increments
  a per-day counter (no IP storage, no UA fingerprinting). (2) Keep
  static feeds but add a `<link rel="alternate" type="application/rss+xml"
  href="/feed/rss.xml">` on blog pages so the worker URL becomes the
  canonical one feed readers discover. This gives a daily fetch count
  without storing PII or setting cookies.
- Evidence: `docusaurus.config.ts:44,130-131`. No Worker file exists in
  the repo today; this would be a new artifact under `workers/` or
  Cloudflare dashboard config (note to record in
  `docs/ops/analytics.md`).

### ANLY-007 — File downloads (whitepapers, PDFs under /docs and /img) are not measured
- Severity: medium
- Impact: 3
- Effort: S
- Location: `src/components/WhitepaperCards.tsx` (referenced in Grep
  results); `static/_headers:11-15` (immutable cache on `/assets/*` and
  `/img/*`).
- Observation: The site links to whitepaper PDFs and other downloadable
  assets (the WhitepaperCards component is the surface). CF Web
  Analytics records the page the link is clicked from, but not which
  PDF was downloaded. With one-year immutable caching on `/assets/*`,
  edge cache hits never reach origin, so even server logs are
  incomplete.
- Recommendation: Use the click delegate from ANLY-002 to detect
  anchors whose href ends in `.pdf`, `.zip`, `.csv`, `.xlsx`, `.docx`
  and emit a `cta.download.<basename>` event. No CSP change; no
  cookies; no PII. Optionally route downloads via
  `/dl/<slug>` Worker redirect for accurate counts that survive edge
  cache.
- Evidence: Grep found `data-cta` on `WhitepaperCards.tsx`; no event
  emission code exists.

### ANLY-008 — Contact page has three booking CTAs but they all point to the same Microsoft Bookings origin with no source distinction
- Severity: medium
- Impact: 4
- Effort: S
- Location: `src/pages/contact/index.tsx:80` (hero primary),
  `:115` (card), `:203` (final CTA), all
  `https://booking.doulab.net/discovery` with `data-cta`
  `cta.contact.hero.discovery`, `cta.contact.card.discovery`,
  `cta.contact.final.discovery`.
- Observation: The three discovery-call entry points on `/contact` have
  distinct `data-cta` ids — a great taxonomy — but the destination URL
  is byte-identical, so Microsoft Bookings cannot separate which slot
  is converting. The taxonomy is wasted unless the click is
  instrumented (ANLY-002) or the URL is differentiated.
- Recommendation: Append `?src=<data-cta>` (or `?slot=hero|card|final`)
  at build time to each booking link so Microsoft Bookings logs them
  separately, even without any client-side event capture. Trivial to
  implement and survives ad blockers and JS-off users.
- Evidence: `src/pages/contact/index.tsx:80,115,203` all use the
  literal string `https://booking.doulab.net/discovery`.

### ANLY-009 — `/contact` claims "Cloudflare Web Analytics only" as a feature, but the privacy page calls out only the read-side disclosure; no public dashboard or aggregated transparency report exists
- Severity: low
- Impact: 2
- Effort: M
- Location: `src/pages/contact/index.tsx:150` ("Cloudflare Web
  Analytics only"); `src/pages/privacy-terms.tsx:83-100`.
- Observation: Privacy posture is a marketing claim ("No Google tags or
  ad pixels. Cloudflare Web Analytics only") that is verifiable in
  source — but the user has no way to audit it. Repositioning analytics
  minimalism as a trust signal would benefit from a public
  "transparency" page summarizing exactly what data points are
  collected (IP, UA, referrer, none retained beyond X) and what is
  not (no cookies, no fingerprinting, no cross-site).
- Recommendation: Add a `/transparency` page or expand
  `/privacy-terms#analytics` with a one-screen plain-English
  enumeration of CF Web Analytics fields. Costs nothing operationally
  and strengthens the privacy-first brand claim. Hand off to Content &
  copy and to Security & privacy for joint copy.
- Evidence: `src/pages/contact/index.tsx:150`;
  `src/pages/privacy-terms.tsx:98-100`.

### ANLY-010 — Scroll depth, time-on-page, and reading-completion are not measured for blog or research-resources, despite being the primary content-marketing assets
- Severity: medium
- Impact: 3
- Effort: M
- Location: `docusaurus.config.ts:42-50` (blog config with
  `showReadingTime: true`); blog content under `blog/`; long-form docs
  under `docs/research-resources/`.
- Observation: CF Web Analytics gives a pageview and a session-level
  bounce rate, but no within-page engagement signal. For thought
  leadership content (Innovation Lab Guide, ClarityScan decision
  latency, coordination threshold) the question "did anyone actually
  read it?" is unanswerable.
- Recommendation: Add a tiny (~50 line) IntersectionObserver-based
  measurer that fires CF custom events at 25/50/75/100% scroll on
  `/blog/*` and `/docs/research-resources/*` pages only. No cookies, no
  identifiers, no cross-page state. Allowed by current CSP.
- Evidence: `docusaurus.config.ts:42-50`; no IntersectionObserver or
  scroll listener anywhere in `src/`.

### ANLY-011 — Search / on-site search behavior is not instrumented (and there is no search component)
- Severity: low
- Impact: 2
- Effort: L
- Location: `docusaurus.config.ts:82-94` (navbar items — no search
  entry).
- Observation: No Algolia DocSearch, no local search plugin, no search
  bar in navbar. From a measurement standpoint there are no failed
  searches to count, but that itself is a finding: there is no way for
  visitors to express "I came looking for X and didn't find it."
- Recommendation: Out of scope for analytics alone — hand off to IA &
  UX. If/when local search is added (e.g.
  `@cmfcmf/docusaurus-search-local`), instrument empty-result events
  via the same click delegate pattern.
- Evidence: `docusaurus.config.ts:82-94`.

### ANLY-012 — No build-time or runtime check that the privacy-first contract is preserved across PRs
- Severity: medium
- Impact: 4
- Effort: S
- Location: `src/theme/Root.tsx:4-7` (comment-only guard);
  `package.json` (no verifier reference for analytics).
- Observation: The "no GA/GTM, no consent banner" stance is enforced
  by a code comment and the absence of plugins. A future contributor
  could add `@docusaurus/plugin-google-analytics` or a third-party
  script tag and break the privacy posture silently. AGENTS.md
  references a `verify:build` script (line 6) but it does not appear to
  test the analytics surface.
- Recommendation: Add an assertion to the existing verifier (or a new
  one) that greps the built `build/` directory for forbidden tokens:
  `gtag(`, `googletagmanager`, `google-analytics`, `connect.facebook`,
  `hotjar`, `mixpanel`, `segment.com`. Fail the build if any are
  found. Mirrors the existing "no legacy booking link" check pattern
  noted in AGENTS.md line 20.
- Evidence: `AGENTS.md:6,20`; `src/theme/Root.tsx:4-7`.

### ANLY-013 — CSP allows analytics beacon hosts but does not include a `report-uri` or `report-to`, so policy violations are invisible
- Severity: low
- Impact: 2
- Effort: S
- Location: `static/_headers:4`.
- Observation: CSP is in enforce mode and is intentionally tight, but
  has no reporting endpoint. If a future change introduces an inline
  script or a disallowed analytics host, the browser will silently
  block it — and there is no telemetry for that block. This is a
  measurement gap that interacts with analytics: a misconfigured CF
  Analytics token would fail silently.
- Recommendation: Add `report-to` (or `report-uri` for legacy browsers)
  pointing to a Cloudflare Worker that aggregates counts only (no IP,
  no UA storage). Already privacy-compatible. Cross-references the
  Security & privacy hand-off.
- Evidence: `static/_headers:4` shows no `report-to`/`report-uri`
  directive.

### ANLY-014 — Stay with Cloudflare Web Analytics rather than migrating to Plausible/Umami/Fathom (recommendation against churn)
- Severity: informational
- Impact: 4
- Effort: L (if migration were chosen)
- Location: Whole-site decision.
- Observation: Plausible/Umami/Fathom are all defensible privacy-first
  alternatives, but for doulab.net specifically: (a) Cloudflare Pages
  hosts the site already, so the beacon ships from the same CDN with
  no extra DNS/cert/CSP additions; (b) the existing CSP is already
  scoped to `cloudflareinsights.com`, so any third-party analytics
  swap would re-open the CSP and re-trigger the "no third-party
  trackers" claim review; (c) Plausible-cloud and Fathom-cloud are
  hosted outside Switzerland and would re-trigger the cross-border
  processing disclosure in `gdpr-compliance.md`; (d) self-hosted
  Plausible/Umami add infrastructure burden inconsistent with the
  current static-site posture.
- Recommendation: Do not migrate. Instead, fully exploit CF Web
  Analytics custom events (ANLY-002, -003, -005, -007, -010) which
  provide event tracking without a vendor change. Re-evaluate only if
  Cloudflare deprecates the events API or if the team needs funnel
  visualizations CF cannot provide.
- Evidence: `static/_headers:4`; `docs/ops/gdpr-compliance.md:20`
  (Cloudflare already listed as processor).

## Quick wins — top 5

1. ANLY-008 — Append `?src=<slot>` query params to the three discovery
   booking links in `src/pages/contact/index.tsx:80,115,203` and to the
   ClarityScan checkout link. Zero JS, zero CSP changes, immediate
   funnel attribution in Microsoft Bookings and Stripe dashboards.
2. ANLY-005 — Emit a single `cta.conversion.clarityscan.paid` event on
   mount in `src/pages/book-clarityscan-success.tsx`. One file, ~5
   lines, captures the highest-value conversion.
3. ANLY-012 — Add a build-time grep guard for forbidden analytics
   tokens to `verify:build`. Cements the privacy-first contract.
4. ANLY-001 — Create `docs/ops/analytics.md` documenting that CF Web
   Analytics is enabled at the Cloudflare Pages project level, with
   the auto-inject mechanism explained. Pure documentation.
5. ANLY-002 — Ship the dependency-free `data-cta` click delegate in
   `src/components/cta-events.ts`, loaded from `Root.tsx`. Unlocks
   ANLY-003, -005, -007, -010 with a single shared module.

## Strategic bets — top 3

1. Adopt CF Web Analytics custom events as the canonical event bus and
   formalize the `data-cta` taxonomy (`cta.<area>.<slot>.<intent>`,
   `cta.conversion.<product>.<state>`, `cta.download.<basename>`) in
   `docs/ops/analytics.md`. Single source of truth bridges Sales,
   Conversion, and Content hand-offs and prevents ad-hoc string drift.
2. Build a thin Cloudflare Worker for feed redirects (`/feed/rss.xml`),
   download redirects (`/dl/<slug>`), and CSP `report-to` aggregation,
   all behind PII-free per-day counters. One worker, three measurement
   gaps closed (ANLY-006, -007, -013).
3. Treat analytics minimalism as a brand asset: a `/transparency` page
   that enumerates exactly the four CF Web Analytics fields collected
   and links to the source files proving no other trackers exist
   (ANLY-009). Reinforces positioning for compliance-sensitive buyers
   in EU/CH and Latin America.

## Out of scope / hand-offs

- Conversion: ranking which of the 83 `data-cta` ids actually matter,
  CTA copy A/B candidates, funnel narrative.
- SEO: pageview vs organic-session attribution, search-console
  integration, sitemap measurement, `noindex` policy on
  `/book-clarityscan*`.
- Performance: Core Web Vitals beacon (separate from analytics
  beacon), real-user-monitoring vendor choice.
- Security & privacy: CSP `report-to` endpoint design (touches
  ANLY-013), the cross-border processing disclosure if any analytics
  vendor change is reconsidered, transparency-page legal copy.
- IA & UX: on-site search component (touches ANLY-011), navbar
  structure changes that would create new CTA slots needing taxonomy.
- Content & copy: `/transparency` page narrative, blog/research scroll
  thresholds and "what counts as a read" definition (touches
  ANLY-010).
- Code quality: the verifier addition itself (ANLY-012) and the
  shared `cta-events.ts` module review.
- Blog & editorial: which posts are flagship enough to warrant
  scroll-depth instrumentation (ANLY-010).
- Sales: mapping `data-cta` ids to CRM stages once events are firing
  (depends on ANLY-002).
- Behavioral economics / Behavioral psychology: deciding which
  micro-interactions on `/contact` and `/services/clarityscan` are
  worth measuring as commitment escalations.
- i18n, MCF/IMM-P, Mobile-first, Brand & visual, Accessibility: no
  direct analytics dependencies in this audit.

## Open questions for Luis

1. Is the Cloudflare Web Analytics site token visible in the
   Cloudflare Pages dashboard configured for `doulab.net` (auto-inject
   on), or is a manual `<script>` snippet expected? Confirm so
   ANLY-001 documents the right mechanism.
2. Does the current CF Analytics plan permit custom events at the
   property's traffic volume, or is it locked to pageviews? This
   gates ANLY-002, -005, -007, -010.
3. For `/book-clarityscan-success`, what is the upstream Stripe
   success-redirect URL configured today — is it exactly
   `https://doulab.net/book-clarityscan-success` or does it carry a
   `?session_id=` parameter that we should strip before any event
   emission to keep PII off the analytics surface?
4. Acceptable to add `?src=<slot>` query parameters to
   `booking.doulab.net/discovery` and Stripe Checkout URLs without
   breaking either platform's expected URL shape? Need confirmation
   from the Microsoft Bookings owner.
5. Should the proposed `/feed/rss.xml` Cloudflare Worker redirect
   replace or coexist with the current static `/blog/rss.xml`? Existing
   subscribers will keep hitting the static URL; coexistence is safer
   but produces split counts.
6. Is there appetite for a small monthly internal "measurement digest"
   (pageviews + new CTA event counts) to validate the new
   instrumentation, or should this stay ad-hoc in the CF dashboard?
