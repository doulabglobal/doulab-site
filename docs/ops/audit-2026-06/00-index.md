# Multi-Role Audit — doulab.net — 2026-06-01 — Consolidated Index

## How to use this index

The 19 per-role audit files under `docs/ops/audit-2026-06/` are the source of truth for findings, evidence (file:line citations), and recommendations. This index ranks findings cross-role by impact divided by an effort weight (S=1, M=3, L=8), surfaces themes that recur in three or more reports, and proposes implementation phasing. Wherever a row cites a finding ID, that ID is real and quoted exactly from the source audit; impact and effort values are likewise lifted from the source.

## Roles audited (19)

1. IA & UX — navbar/footer IA, sidebar hierarchy, route inventory, orphan pages — [`01-ia-ux.md`](./01-ia-ux.md)
2. Brand & visual design — design tokens, color palette, typography, hero language, logo system — [`02-brand-visual.md`](./02-brand-visual.md)
3. Content & copy — value prop clarity, tone, CTA microcopy, brand-term hygiene — [`03-content-copy.md`](./03-content-copy.md)
4. Conversion / lead-gen — CTA hierarchy, ClarityScan funnel, trust signals, friction — [`04-conversion.md`](./04-conversion.md)
5. SEO & discoverability — metadata, structured data, sitemap, anchor text, hreflang readiness — [`05-seo.md`](./05-seo.md)
6. Performance & frontend — CWV risks, bundle weight, image strategy, mermaid cost — [`06-performance.md`](./06-performance.md)
7. Accessibility — WCAG 2.2 AA static review of chrome, components, pages — [`07-accessibility.md`](./07-accessibility.md)
8. Security & privacy — headers, CSP, GDPR/nFADP alignment, third-party embeds — [`08-security-privacy.md`](./08-security-privacy.md)
9. Analytics & measurement — CF Web Analytics coverage, event/conversion gaps — [`09-analytics.md`](./09-analytics.md)
10. Code quality & architecture — component reuse, ops doc leakage, dead code, scripts — [`10-code-quality.md`](./10-code-quality.md)
11. Blog & editorial — cadence, NNY hero discipline, tag taxonomy, lead capture — [`11-blog-editorial.md`](./11-blog-editorial.md)
12. i18n readiness (EN→ES) — Docusaurus config, hardcoded copy, asset and feed locales — [`12-i18n.md`](./12-i18n.md)
13. MCF / IMM-P domain — framework fidelity, version drift, trademark hygiene — [`13-mcf-imm-domain.md`](./13-mcf-imm-domain.md)
14. Behavioral economics — anchoring, choice architecture, social proof, ethical scarcity — [`14-behavioral-economics.md`](./14-behavioral-economics.md)
15. Behavioral psychology — Cialdini, dual-process, trust formation, dark-pattern check — [`15-behavioral-psychology.md`](./15-behavioral-psychology.md)
16. Sales & positioning — buyer journey, pricing transparency, regional credibility, procurement — [`16-sales-positioning.md`](./16-sales-positioning.md)
17. Mobile-first / responsive — breakpoints, tap targets, hero scaling, mermaid on mobile — [`17-mobile-responsive.md`](./17-mobile-responsive.md)
18. Lighthouse — predicted scores per route, re-audit plan with thresholds and cadence — [`18-lighthouse.md`](./18-lighthouse.md)
19. Viewport matrix — 6-anchor structured pass, forced-colors / reduced-motion / dark-mode contexts — [`19-viewport-matrix.md`](./19-viewport-matrix.md)

## Cross-role themes (issues surfaced by ≥3 roles)

### T1. ClarityScan price invisible across the entire site
- Roles: Conversion, Sales, Behavioral economics, Behavioral psychology, Content & copy
- Finding IDs: CONV-001, SALES-001, BE-002, BP-001 (implied by repetition without anchor), COPY-004 (the hero promises a deliverable but never binds price)
- Synthesis: The primary "Book a ClarityScan® online" CTA is paid-first via Stripe, but no surface (`services/clarityscan.tsx`, `services/diagnostics.tsx`, home, work-with-us FAQ) discloses the fee, currency, or what is included before Stripe Checkout. For senior B2B and public-sector buyers this is procurement-hostile and reads as hidden cost; for behavioral economics, it removes the only available decision anchor; for sales, it blocks budget bracketing entirely. Same problem extends to workshop tiers (CONV-015) and coaching retainers (CONV-014).
- Recommended owner: Sales & positioning (pricing policy decision) → Conversion + Content & copy (price card component and microcopy) → Brand & visual (price-card design).

### T2. MCF version drift (v2.1 vs v2.2) across the site
- Roles: MCF/IMM-P domain, Content & copy, Sales, Behavioral psychology
- Finding IDs: DOM-001, COPY-003, SALES-012, BP-005 (jargon-as-authority)
- Synthesis: The IMM-P® service page and the Innovation Lab Guide use MCF 2.2; the homepage, About, What we do, ClarityScan, Diagnostics, four case studies, the `microcanvas.md` stub, two blog posts, and the Distributed Federated Agentic AI whitepaper still say MCF 2.1. Canonical evidence in `IMM\AGENTS.md` §17 names MCF 2.2 as the current working tree. A buyer who reads two pages sees the framework appear to roll backward by a minor version. Compounds with DOM-015 case-study attribution wording.
- Recommended owner: MCF/IMM-P domain expert (canonical decision) → Content & copy (site-wide sweep) → Code quality (extract to single constant).

### T3. Broken trademark glyphs ("ClarityScanr") on primary CTAs
- Roles: Content & copy, Conversion, Behavioral economics
- Finding IDs: COPY-001, IAUX-012 (typo flagged), BE-013 (registered-mark rendering bug)
- Synthesis: Phase C9 was meant to normalize ClarityScanr → ClarityScan® but two instances slipped through, both on primary conversion buttons (`services/clarityscan.tsx:164`, `services/index.tsx:49`). Reads as a typo on the most important pages in the funnel.
- Recommended owner: Content & copy (one-line fix + CI regex guard).

### T4. Missing testimonials, named-buyer quotes, attributed endorsements
- Roles: Conversion, Sales, Behavioral economics, Behavioral psychology
- Finding IDs: CONV-003, SALES-002, BE-006, BP-007, BP-013
- Synthesis: Sitewide grep for testimonial/quote returns zero matches in `src/`. Doulab sells consulting and a paid diagnostic to public-sector and regulated-finance buyers — a category where committees demand peer references. Case studies describe what Doulab did but never quote the AFP Siembra/OGTIC/Alpha/FUNDAPEC sponsor saying it worked. Work-with-us has a logo strip; homepage and services index do not. Logos lack dated context and may have implied-endorsement risk (BP-013).
- Recommended owner: Sales (collect consent and quotes) → Brand & visual (testimonial component) → Conversion (placement) → Security & privacy (consent records).

### T5. IMM-P® vs IMM® vs IMM-P © trademark inconsistency
- Roles: MCF/IMM-P domain, Content & copy, SEO
- Finding IDs: DOM-003, DOM-010, COPY-002 (footer registered-marks line contradicts the rest of the site)
- Synthesis: Canonical naming per `IMM\AGENTS.md` §1 is `IMM-P® (Innovation Maturity Model Program)`. Footer says "MicroCanvas® and IMM® are registered marks" (no `-P`). `services/diagnostics.tsx`, the inaugural blog post, the Distributed Federated Agentic AI whitepaper, and `releases.mdx` use `IMM®` (no `-P`), `IMM-P ©`, or `IMM-P &copy;` interchangeably. JSON-LD `name` on `services/innovation-maturity.tsx:31` places `®` outside the parenthesis, ambiguously qualifying the abbreviation. Affects Google Knowledge Graph and AI surfaces.
- Recommended owner: MCF/IMM-P domain expert (policy decision) → Content & copy (sweep) → SEO (JSON-LD normalization).

### T6. Ecosystems stub pages public, indexable, with stale 2025 dates
- Roles: IA & UX, Content & copy, SEO
- Finding IDs: IAUX-004, COPY-009, SEO-006
- Synthesis: `/ecosystems/redlab` ("Page in progress.") and `/ecosystems/red-incubadoras` ("Launching 2025." — now stale since today is 2026-06-01) ship to production. No parent `/ecosystems` index. No canonical, no description meta, no OG, no JSON-LD. Indexed in `build/sitemap.xml`. Spanish-only label "Red de Laboratorios de Innovación" is the only Spanish phrase in an English-only site.
- Recommended owner: IA & UX (decide invest vs delete) → Content & copy or Code quality (execute).

### T7. `/work-with-us` orphan / `/services` vs `/what-we-do` taxonomy collision
- Roles: IA & UX, Sales, Content & copy
- Finding IDs: IAUX-002, IAUX-003, SALES-004
- Synthesis: Two competing "services overview" pages (`/services`, `/what-we-do`) with overlapping content but only one in the navbar; the deep tree lives under `/services/*`. `/work-with-us` is fully built (330 lines, FAQ schema, four-step process rail, proof strip) but absent from navbar AND footer. Sales view: the same offer is reframed across home / what-we-do / services / about, so a buyer cannot tell whether Doulab sells "5 services," "3 programs," or "two methods wrapped in delivery."
- Recommended owner: IA & UX (canonical hub decision) → Sales & positioning (offer taxonomy) → Content & copy (apply rewrite).

### T8. `/book-clarityscan` auto-`window.open()` on mount
- Roles: Conversion, Accessibility, Behavioral psychology, Behavioral economics, Mobile-first, Viewport, Analytics, SEO, Code quality, Content & copy
- Finding IDs: CONV-005, A11Y-011, BP-009, BE-009, MOB-010, VP-013, ANLY-004, IAUX-008, COPY-012
- Synthesis: `useEffect` calls `window.open(CLARITYSCAN_BOOKING_URL, '_blank', 'noopener,noreferrer')` immediately on mount. iOS Safari and most mobile browsers block popups outside a user gesture; on desktop this is a mild dark pattern (action without consent). The page also exposes the internal vendor name "Outlook booking page" while the rest of the site abstracts vendors. Breaks referrer attribution to Microsoft Bookings; on iOS the user sees a broken landing with a tiny fallback button (33 px).
- Recommended owner: Conversion (decide route's role) → Code quality (delete or replace with `_redirects` rule) → Accessibility (verify post-fix).

### T9. Brand token fragmentation / IMM canonical palette absent
- Roles: Brand & visual, Code quality, Accessibility, Viewport
- Finding IDs: BRAND-001, BRAND-002, BRAND-010, BRAND-013, CODE-007, A11Y-006, VP-008
- Synthesis: Three primaries coexist: Infima default green `#2e8555` (because `--ifm-color-primary` is never overridden), `--dl-indigo: #4f46e5` (Tailwind indigo-600), and IMM canonical `#38249a` which only appears in the consent banner and one workshop hero. `--dl-gray-200` / `--dl-gray-300` are referenced but undeclared. Spacing/radius/shadow values are literal in every component (~7 distinct shadow recipes, ~6 radius vocabularies). Dark-mode rules carry a heavy `!important` ladder; a broken selector `html.pages-work-with-us-index__theme-dark` (VP-008) never matches.
- Recommended owner: Brand & visual (token contract) → Code quality (CSS consolidation, real CSS modules) → Accessibility (verify post-token contrast).

### T10. Eight zero-byte `.md` route stubs published as live URLs
- Roles: IA & UX, SEO, Code quality
- Finding IDs: IAUX-001, SEO-004 (related: ops/* indexed)
- Synthesis: `/about/contact`, `/about/mission`, `/about/team`, `/work-with-us/apply`, `/work-with-us/collaborate`, `/vigia-futura/vision`, `/vigia-futura/indices`, `/vigia-futura/governancemodels` exist as 0-byte `.md` files served as Docusaurus pages.
- Recommended owner: Code quality (delete or gate with `draft: true`).

### T11. Internal `docs/ops/**` content indexed and built into the public site
- Roles: Code quality, SEO, Security & privacy, i18n
- Finding IDs: CODE-001, SEO-004, I18N-011
- Synthesis: Classic-preset `docs` plugin has `routeBasePath: '/docs'` with no `exclude`. `build/docs/ops/booking-architecture.html`, `build/docs/ops/doulab-net-backlog.html` (commit hashes), `build/docs/ops/security-headers-review.html`, plus every phase plan, are publicly built and in `sitemap.xml`. Pollutes index, dilutes topical authority, exposes governance commit hashes. At i18n launch, would mirror ~100k extra words into the ES translation surface.
- Recommended owner: Code quality (add `exclude: ['ops/**']`) → SEO (verify sitemap) → Security & privacy (governance leak review).

### T12. OG/social card image strategy and assets
- Roles: SEO, Brand & visual, Blog & editorial, Performance
- Finding IDs: SEO-002, SEO-014, BLOG-002, BLOG-009
- Synthesis: 13+ pages reference per-page OG images that do not exist under `static/img/social/` (`og-clarityscan.jpg`, `og-coaching.jpg`, `og-workshops.jpg`, four case-study cards, `og-case-studies.jpg`, `og-what-we-do.jpg`, `og-about.jpg`, `og-contact.jpg`). Services and Work-with-us still reference Docusaurus boilerplate `docusaurus-social-card.jpg`. Two of four blog posts lack `image:` frontmatter; the Vigía Futura blog post's `image:` (`/img/social/vigia-futura-foresight.jpg`) points to a non-existent file (BLOG-002). LinkedIn/Twitter previews are broken.
- Recommended owner: Brand & visual (produce 1200×630 cards) → Code quality (build verifier that fails on missing OG images) → Blog & editorial (frontmatter conventions doc).

### T13. CSP `'unsafe-inline'` and inline JSON-LD pattern inconsistency
- Roles: Security & privacy, Performance, Lighthouse
- Finding IDs: SEC-002, SEC-008, PERF-008, LH-BP-001
- Synthesis: CSP allows `'unsafe-inline'` for both `script-src` and `style-src` because Docusaurus emits inline runtime/hydration scripts and JSON-LD blocks. JSON-LD is widely used (`contact/index.tsx`, all case studies, services) but `work-with-us/index.tsx:42-48` uses `dangerouslySetInnerHTML` with an eslint-disable, breaking the pattern and complicating future hash-based allowlisting. Lighthouse v10+ scores down sites without enforced strict CSP with `'strict-dynamic'`.
- Recommended owner: Security & privacy (Report-Only rollout per AGENTS.md §22) → Code quality (normalize JSON-LD component).

### T14. GDPR processor mismatch: Microsoft Bookings vs Google Calendar
- Roles: Security & privacy, Analytics
- Finding IDs: SEC-009, SEC-006, ANLY-001
- Synthesis: `gdpr-compliance.md:22` discloses Google Calendar as the booking processor; `privacy-terms.tsx:91-95` matches that text. The actual booking surface is `booking.doulab.net` which per Phase C11 audit uses Microsoft Bookings. SEC-006 separately: Stripe is disclosed in privacy-terms but qualified "if applicable" in `gdpr-compliance.md:23` — Stripe is now live (paid ClarityScan flow). Largest GDPR accuracy gap.
- Recommended owner: Security & privacy (correct processor list) → Content & copy (legal text update).

### T15. ClarityScan time discrepancy: 15–20 min vs 30–45 min
- Roles: Behavioral psychology, Blog & editorial, Content & copy
- Finding IDs: BP-003, BP-001, BLOG-008, BLOG-001
- Synthesis: Site CTAs and microcopy say "15 to 20 minutes" (≥8 sites including home hero, problem section, final CTA, service page, About, What we do, Case studies, Work with us). The dedicated ClarityScan blog post says "30 to 45 minutes" (`blog/2025-09-12-clarityscan-decision-latency.md` lines 22, 30, 32, 106, 108). The orphan `.bak` post (BLOG-001) advertises "15-20" while the live post says "30-45". P0 ethics risk per BP-003: a buyer who reads both surfaces sees the time halve — expectancy violation on a brand whose pitch is "decision latency".
- Recommended owner: Sales/MCF-IMM-P (canonical truth decision) → Content & copy (sweep) → Blog & editorial (post update).

### T16. CTA sprawl / boilerplate `ctaNote` / repeated final-CTA headline
- Roles: Behavioral psychology, Behavioral economics, IA & UX, Content & copy, Conversion, Sales
- Finding IDs: BP-004, BP-010, BP-005, BE-003, BE-014, IAUX-012, COPY-007, CONV-004, CONV-013, SALES-015
- Synthesis: Every page presents 4–6 near-identical CTAs ("Start with ClarityScan" / "Book a discovery call") of similar weight; the `ctaNote` slot under the primary CTA carries brand trivia ("Built on MicroCanvas® v2.1 and IMM-P® gates.") on 8+ pages instead of risk-reduction microcopy. "Ready to make innovation repeatable?" is the literal same final-CTA headline on home, About, What we do, Case studies. Labels collide: "Talk to us" / "Book a discovery call" / "Enquire" route to the same URL. Reads as templated for a brand promising rigor.
- Recommended owner: Conversion (one primary + one tertiary per page) → Content & copy (CTA vocabulary doc + ctaNote rewrites) → IA & UX (canonical label decisions).

### T17. LAC (Latin America + Caribbean) regional positioning absent
- Roles: Content & copy, Sales, i18n, SEO
- Finding IDs: COPY-006, SALES-006, I18N-006 (slug ES strategy), SEO-008 (tagline keyword-free)
- Synthesis: Case studies are 100% Dominican Republic / LATAM. Service page Schema.org `areaServed: ['Global']`. Homepage/About/services/footer never claim LAC. Workshop page buries "based in Zürich" creating a Zürich-LAC dissonance. Tagline ("We unlock global prosperity by helping others create better futures") contains zero competitive keywords.
- Recommended owner: Sales & positioning (specialist vs global decision) → Content & copy (apply across hero/About/footer) → SEO (JSON-LD `areaServed` + tagline).

### T18. NNY hero language locked but only partially implemented
- Roles: Blog & editorial, Brand & visual, Code quality
- Finding IDs: BLOG-004, BRAND-003 (marketing-hero language adjacent), CODE-007
- Synthesis: NNY is LOCKED with three approved variants (A text-only, B symbol+text, C quiet image). Only one post (`2026-01-19-coordination-threshold.md`) uses an NNY block, and via inline JSX rather than a canonical component. The locked doc lists `HeroBanner.tsx` as the "Next Implementation Step" but no such component exists under `src/components/`. CSS implements only `--image` variant; `--text` and `--symbol` scopes are missing.
- Recommended owner: Code quality (build canonical `HeroBanner.tsx`) → Brand & visual (variant CSS) → Blog & editorial (retrofit posts).

### T19. Auto-popup and missing async path (broader than T8)
- Roles: Conversion, Analytics, Behavioral economics
- Finding IDs: CONV-009, CONV-002, ANLY-005, BE-008
- Synthesis: Post-C13–C16 mailto migration removed the only async option. The success page (`book-clarityscan-success.tsx`) auto-`window.open`s Bookings AND shows no payment summary AND has no event firing — the highest-value conversion event on the property is unmeasured. Buyers without a calendar window have no low-friction "tell us about you" form path.

### T20. Reduced-motion, forced-colors, focus-system gaps
- Roles: Accessibility, Viewport, Brand & visual
- Finding IDs: A11Y-010, VP-001, VP-011, BRAND-008
- Synthesis: `prefers-reduced-motion` only damps `.card:hover` and `.processStep:hover`; `.subnav`, `.proofStrip`, `.blogPostCard`, work-with-us card hovers, and the carousel JS ignore the OS preference. Zero CSS rules handle `forced-colors: active` (WCAG 2.2 SC 1.4.11 risk), critical for public-sector buyers using Windows High Contrast. Some focus-visible widths inconsistent (`2px` on problemCard vs `3px` global). Focus indicator missing on `[tabindex]` elements.

## Priority — Top 30 cross-role

Rank computed as `impact / effort_weight` where S=1, M=3, L=8; ties broken by severity (P0 first) then by number of roles that surfaced the issue. All IDs and severities lifted verbatim from source files.

| Rank | Finding ID | Role file | Severity | Impact | Effort | Location | Summary | Hand-off targets |
|------|------------|-----------|----------|--------|--------|----------|---------|------------------|
| 1 | IAUX-001 | 01-ia-ux.md | P0 | 5 | S | 8× zero-byte `src/pages/**/*.md` | Eight ghost routes published as live URLs | Code quality, SEO |
| 2 | COPY-001 | 03-content-copy.md | High | 5 | S | `src/pages/services/clarityscan.tsx:164`, `services/index.tsx:49` | "ClarityScanr" typo on primary CTAs | Conversion, Code quality (CI guard) |
| 3 | CONV-001 | 04-conversion.md | P0 | 5 | S | sitewide (ClarityScan pages) | ClarityScan price invisible across whole site | Sales, Brand & visual |
| 4 | BE-001 | 14-behavioral-economics.md | High | 5 | S | `src/pages/index.tsx:705-717` | Hero buries 20-min time-to-value anchor | Content & copy |
| 5 | BE-002 | 14-behavioral-economics.md | High | 5 | S | `src/pages/services/clarityscan.tsx:60-170` | Missing price anchor on ClarityScan page | Sales, Content & copy |
| 6 | LH-P-001 | 18-lighthouse.md | P0 | 12* | S | `src/components/Hero.tsx:88-98` | Hero LCP preload favors PNG; mobile LCP killer | Performance |
| 7 | SEO-001 | 05-seo.md | High | 5 | M | `blog/tags.yml` lines 3,8,13,… | Doubled `/blog/tags/blog/tags/*` URLs in sitemap | Blog & editorial, Code quality |
| 8 | SEO-002 | 05-seo.md | High | 5 | S | 13 pages, `static/img/social/` | Per-page OG images point to non-existent files | Brand & visual, Code quality |
| 9 | SEO-003 | 05-seo.md | High | 4 | S | `static/` (no `robots.txt`) | No `robots.txt`; edge serves invalid `Content-Signal` | Security & privacy |
| 10 | PERF-001 | 06-performance.md | High | 5 | S | `static/img/*.png` (41 PNGs, ~8.16 MB) | Oversized PNG originals shipped alongside AVIF/WebP | Lighthouse |
| 11 | PERF-002 | 06-performance.md | High | 4 | S | `static/img/research/innovation-lab-guide/hero-nyy.png` (2.49 MB) | 2.5 MB hero PNG with no AVIF/WebP variant | Lighthouse |
| 12 | A11Y-001 | 07-accessibility.md | High | 5 | S | `src/theme/Root.tsx`, `src/pages/index.tsx:703-721` | No skip-link; Hero outside `<main>` makes skip useless | IA & UX, Code quality |
| 13 | A11Y-002 | 07-accessibility.md | High | 4 | S | `src/pages/index.tsx:703-721` | H1 outside `<main>` on home; landmark mismatch | IA & UX |
| 14 | CODE-001 | 10-code-quality.md | High | 5 | S | `docusaurus.config.ts:34-41`, `docs/ops/*` | Internal `docs/ops/**` published publicly | SEO, Security & privacy |
| 15 | CODE-002 | 10-code-quality.md | High | 4 | S | `docs/research-resources/*.bk` | Backup `.bk` files committed beside live whitepaper | Code quality |
| 16 | BLOG-001 | 11-blog-editorial.md | High | 5 | S | `blog/_backup_2025-09-12-…bak` | `.bak` file inside `blog/` contradicts live post | Content & copy |
| 17 | BLOG-002 | 11-blog-editorial.md | High | 5 | S | `blog/2025-09-22-…md:17` | Vigía Futura OG image points to a missing file | SEO, Code quality |
| 18 | BP-003 | 15-behavioral-psychology.md | High (P0 ethics) | 5 | S | site vs `blog/2025-09-12-…md:22,30,32` | ClarityScan time-claim drift 15-20 vs 30-45 | Sales, Content & copy |
| 19 | BLOG-008 | 11-blog-editorial.md | Medium | 3 | S | `blog/2025-08-30-…md:24,131` vs `2025-09-12-…md` | ClarityScan duration drift across blog corpus | Content & copy |
| 20 | DOM-003 | 13-mcf-imm-domain.md | High | 4 | S | `services/diagnostics.tsx:19,44`, `releases.mdx:68,76` | IMM® / IMM-P © / IMM-P &copy; mark drift | Content & copy, Brand & visual |
| 21 | DOM-010 | 13-mcf-imm-domain.md | Low | 2 | S | `services/innovation-maturity.tsx:31`, `what-we-do/index.tsx:36,71,75` | JSON-LD `name` misplaces ® outside parenthesis | SEO, Code quality |
| 22 | DOM-013 | 13-mcf-imm-domain.md | Low | 2 | S | `services/innovation-maturity.tsx:177-179` | Hero conflates IMM-P phases with MCF processes | Content & copy |
| 23 | CONV-002 | 04-conversion.md | P0 | 4 | S | `src/pages/book-clarityscan-success.tsx:9-46` | Stripe success page auto-popups; no payment summary | Conversion, Analytics |
| 24 | ANLY-005 | 09-analytics.md | High | 5 | S | `src/pages/book-clarityscan-success.tsx` | Paid-conversion event not fired; pageview only | Code quality, Analytics |
| 25 | BE-006 | 14-behavioral-economics.md | High | 4 | S | `src/pages/index.tsx:352-359` | Logos/social proof missing from homepage | Sales, Brand & visual |
| 26 | SEC-009 | 08-security-privacy.md | Low | 1 | S | `privacy-terms.tsx:91-95` | GDPR text names Google Calendar; reality is Microsoft Bookings | Content & copy |
| 27 | SEC-003 | 08-security-privacy.md | Low | 2 | S | `static/_headers:4` | `frame-src` includes `www.youtube.com`; only `youtube-nocookie` is used | Code quality |
| 28 | MOB-003 | 17-mobile-responsive.md | High | 5 | S | `src/css/custom.css:333,659,1084` | Primary/secondary/cardCta buttons under 44 px tap target | Accessibility |
| 29 | MOB-010 | 17-mobile-responsive.md | High | 4 | S | `src/pages/book-clarityscan.tsx:10-19` | Auto `window.open()` blocked on iOS; tiny fallback | Conversion, Accessibility |
| 30 | VP-008 | 19-viewport-matrix.md | P2 | 3 | M | `src/css/custom.css:2371,2378,2382` | Broken dark-mode selector breaks `/work-with-us` dark theme | Code quality, Brand & visual |

\* LH-P-001 impact is "predicted Lighthouse score delta" not raw 1–5; treated as 5-equivalent for ranking.

## Quick wins consolidated (≤ 1 day, top 20)

Deduped across every role's "Quick wins" section, ranked by aggregate impact.

1. Delete the eight zero-byte `.md` orphan routes (IAUX-001).
2. Fix the two `'Book a ClarityScanr online'` strings and add a CI regex guard (COPY-001, BE-013, IAUX-012).
3. Add `static/robots.txt` with `Sitemap` pointer and `Disallow` on `/book-clarityscan*` (SEO-003).
4. Add `exclude: ['ops/**']` to the docs preset and rebuild; verify `build/docs/ops/` empty (CODE-001, SEO-004, I18N-011).
5. Set Hero LCP preload `href` to WebP with `type="image/webp"`; drop PNG from `imageSrcSet`; gate the `<Head>` preload on `eager === true` (PERF-001, PERF-006, PERF-007, LH-P-001).
6. Generate AVIF/WebP variants for `static/img/research/innovation-lab-guide/hero-nyy.png` via `sharp-cli` (PERF-002, LH-P-004).
7. Add `loading="lazy"` to the two AFP Siembra YouTube iframes (PERF-009, LH-P-005).
8. Fix duplicated `/blog/tags/blog/tags/*` URLs in `blog/tags.yml` (SEO-001).
9. Generate or unify per-page OG cards (point to `default-og.jpg` until per-route cards exist) (SEO-002, BLOG-002, BLOG-009).
10. Delete `blog/_backup_2025-09-12-…bak`, pick canonical ClarityScan duration, and reconcile site copy (BLOG-001, BLOG-008, BP-003).
11. Replace `/terms-and-conditions` and `/book-clarityscan` React shims with Cloudflare `_redirects` (IAUX-007, IAUX-008, SEC-007, CONV-005). Remove the `book-clarityscan-success.tsx` auto-popup; render payment summary + explicit Step 2 of 2 (CONV-002, BE-008, BE-009, A11Y-011, MOB-010, BP-009, VP-013).
12. Replace boilerplate `ctaNote="Built on MicroCanvas® v2.1 and IMM-P® gates."` with risk-reduction microcopy on every page (CONV-013, BP-005, BP-012, BE-014).
13. Standardize the "20 min, no prep" microcopy under every discovery-call CTA (CONV-006, BE-014).
14. Re-order case-study CTA briefing cards so "Recommended path" is the primary action (CONV-010).
15. Add `min-height: 44px` + `inline-flex` to all primary/secondary/cardCta buttons (MOB-003, MOB-014, MOB-015).
16. Replace `.heroSubtitle` 2.25rem with `clamp(1.25rem, 1rem + 2vw, 2.25rem)` and remove `text-align: justify` (MOB-002, A11Y-007, VP-004, BRAND-006).
17. Add `padding-right: 0` reset on `.components-hero__content` below 700 px (MOB-001).
18. Add `.markdown table { display: block; overflow-x: auto; }` (MOB-008).
19. Global Edit pass: `IMM®` → `IMM-P®`, `IMM-P ©` / `IMM-P &copy;` → `IMM-P®`; fix footer registered-marks line (DOM-003, COPY-002). Normalize JSON-LD `name` to `Innovation Maturity Model Program (IMM-P®)` (DOM-010). One-line rewrite of `services/innovation-maturity.tsx:177-179` separating IMM-P phases from MCF canvases (DOM-013). Edit `blog/2025-08-30-…md:87` "IMM dimensions" → "IMM-P® domains" (DOM-012). Add "ClarityScan® is the IMM-P® Tier 1 Snapshot" line (DOM-006).
20. Update `privacy-terms.tsx:91-95` and `gdpr-compliance.md:22-23` to name Microsoft Bookings (not Google Calendar) and remove "if applicable" hedge on Stripe (SEC-009, SEC-006). Remove `https://www.youtube.com` from CSP `frame-src` (SEC-003). Append Privacy-Sandbox opt-outs to `Permissions-Policy` carefully (SEC-004).

## Strategic bets consolidated (multi-week, top 10)

1. Resolve `/services` vs `/what-we-do` vs `/work-with-us` triangle and consolidate the offer taxonomy into "two methods × three formats + one foresight practice" (IAUX-002, IAUX-003, SALES-004, SALES-011, COPY-011).
2. Build a real testimonial / reference / named-credentials layer with photos and consent: 2–4 attributed quotes, named practitioner card on every service page, 1 quantified before/after per case study (CONV-003, CONV-012, SALES-002, SALES-003, SALES-010, BE-006, BE-007, BP-007, BP-013).
3. Site-wide MCF version sweep to 2.2 + single canonical IMM-P® 5-domain taxonomy across all surfaces (home `problems[].pillar`, ILG chapter 07, MCF stub doc, VIF/VILF rationalization) (DOM-001, DOM-002, DOM-007, DOM-008, DOM-009, DOM-011, DOM-015, COPY-003, SALES-012).
4. Build the canonical NNY `HeroBanner.tsx` component with all three locked variants; retrofit blog posts; add missing `.nnyHero--text` and `.nnyHero--symbol` CSS scopes (BLOG-004, BRAND-003, CODE-007).
5. Consolidate the design system into a token-driven core (`tokens.css` for color/type/spacing/radius/elevation/motion), collapse namespaced `pages-*__*` clones, retire workshop-page bespoke gradient hero or promote to system variant, eliminate `!important` dark-mode ladder (BRAND-001, BRAND-002, BRAND-005, BRAND-008, BRAND-010, BRAND-011, BRAND-013, A11Y-006, A11Y-010, VP-001, VP-008, VP-011).
6. Adopt CF Web Analytics custom events: `data-cta` click delegate (~30 lines in `Root.tsx`), `?src=<slot>` query params on booking URLs, fire `cta.conversion.clarityscan.paid` on success page mount, IntersectionObserver scroll-depth on blog/research, build-time forbidden-token grep guard for privacy contract (ANLY-002, ANLY-003, ANLY-005, ANLY-007, ANLY-008, ANLY-010, ANLY-012).
7. Stage strict CSP via `Content-Security-Policy-Report-Only` with `'strict-dynamic'` + per-deploy nonce/hash, refactor all JSON-LD to a single normalized component whose sha256 hashes are enumerated at build time (SEC-002, SEC-008, PERF-008, LH-BP-001).
8. Build-time mermaid SVG rendering + CSS strategy revision (page-scoped modules + critical-CSS inlining) (PERF-003, PERF-004, PERF-012, LH-P-002, LH-P-003).
9. Phased EN→ES i18n with `<Translate>` + MDX-island hybrid: enable `locales: ['en','es']`, run `write-translations`, exclude `ops/**`, scope launch to nav/footer/home/services/case-studies/contact/legal (~6,000–8,000 words), defer blog and ILG. Pre-stage hreflang infrastructure now (I18N-001 through I18N-015, SEO-010).
10. Stand up Lighthouse-CI on Cloudflare preview deploys with threshold gates; baseline screenshots via Playwright viewport-sweep harness across the 6-anchor matrix (LH-CI plan in 18-lighthouse.md; VP re-audit plan in 19-viewport-matrix.md).

## P0 / blocker list

Items explicitly marked P0 (or P0-ethics) in source audits, with file:line evidence.

- **IAUX-001** (P0, IA & UX): Eight zero-byte `.md` orphan routes — `src/pages/about/contact.md`, `about/mission.md`, `about/team.md`, `work-with-us/apply.md`, `work-with-us/collaborate.md`, `vigia-futura/vision.md`, `vigia-futura/indices.md`, `vigia-futura/governancemodels.md`.
- **BRAND-001** (P0, Brand & visual): IMM canonical accents absent; three competing primaries. `src/css/custom.css:3` (`--dl-indigo: #4f46e5`); `--ifm-color-primary` never overridden.
- **CONV-001** (P0, Conversion): ClarityScan price invisible across the entire site. `src/pages/services/clarityscan.tsx`, `services/diagnostics.tsx:82-99`, `index.tsx:710-716`, `case-studies/index.tsx:80-88`, `work-with-us/index.tsx:127-138`, `services/index.tsx:49`, `src/constants/urls.ts:5`.
- **CONV-002** (P0, Conversion): Stripe payment success page auto-popups without payment summary. `src/pages/book-clarityscan-success.tsx:9-17, 28-46`.
- **CONV-003** (P0, Conversion): Zero testimonials/attributed endorsements anywhere on site. Sitewide.
- **LH-P-001** (P0, Lighthouse): `largest-contentful-paint` slow due to PNG-favoring preload. `src/components/Hero.tsx:88-98, 93-94`; `src/pages/index.tsx:693, 696-697`.
- **LH-P-002** (P0, Lighthouse): `total-blocking-time` ~1,150 ms baseline; mermaid + main bundle. `docusaurus.config.ts:23,26`; `package.json:43`.
- **BP-002** (P0 ethics, Behavioral psychology): Home Problem reel pairs fear frames with uneven-credibility citations. `src/pages/index.tsx:80-161` (Gallup, Forbes 2013 opinion, HBS Online blog, McKinsey insight page, Intercom marketing blog, Atlassian agile marketing page, Accenture report, WEF stories page).
- **BP-003** (P0 ethics, Behavioral psychology): ClarityScan time-claim drift between site (15-20 min) and blog (30-45 min). Site CTAs vs `blog/2025-09-12-clarityscan-decision-latency.md:22,30,32,106,108,116`; service page `src/pages/services/clarityscan.tsx:65,137`.

## Open questions for Luis (consolidated)

Deduped and grouped by theme.

### Product / business

- **MCF version policy**: standardize on MCF 2.2 immediately (recommended given canonical `IMM\AGENTS.md` §17), or keep 2.1 attribution on historical case studies? (DOM-001, DOM-015, COPY-003)
- **Trademark coverage**: is `MicroCanvas` a Doulab registered mark? `IMM\CLAUDE.md` only marks `IMM-P®` as registered. (DOM-004, COPY-002, BP-012)
- **VIF vs VILF**: are both Vigía Incubation Framework and Vigía Innovation Lab Framework currently maintained? Where is the canonical source? (DOM-011)
- **Vigía Futura positioning**: paid offer, thought-leadership stream, or co-funded program? Affects nav placement and commercial path. (COPY-013, SALES-011)
- **IMM-P® → Tier 1 Snapshot ↔ ClarityScan® relationship**: is ClarityScan explicitly "the IMM-P® Tier 1 Snapshot" or a distinct product? (DOM-006)
- **ClarityScan canonical duration**: 15–20 min or 30–45 min? Or are these distinct offerings needing distinct names? (BP-003, BLOG-008)
- **Home `problems[].pillar` taxonomy**: retire and remap to the IMM 2.2 five domains, or keep as pre-IMM-P® marketing layer that "rolls up"? (DOM-008)
- **ILG chapter 07 "pillars" table**: introduce its own pillar taxonomy as a teaching aid, or use canonical IMM 2.2 five domains directly? (DOM-007)
- **Ecosystems pages**: `/ecosystems/redlab` and `/ecosystems/red-incubadoras` — keep, build out, or delete? Target publication date? (COPY-009, IAUX-004, SEO-006)
- **Tagline scope**: keep "We unlock global prosperity…" as public tagline, or demote to About and replace with operational tagline? (COPY-005, SEO-008)
- **Regional positioning**: "LATAM/Caribbean specialist with international clients" or "global firm with LATAM/Caribbean roots"? (COPY-006, SALES-006)
- **Final-CTA differentiation**: accept per-page final-CTA headlines varying by context, or keep templated? (COPY-007, BP-010)

### Pricing / sales

- **ClarityScan® list price**: intentionally hidden or publishable? Same for public sector vs enterprise? (CONV-001, BE-002, SALES-001)
- **Refund / reschedule policy** for paid ClarityScan? Needed for honest microcopy. (CONV-013)
- **Workshop tier pricing bands** (Standard/Professional/Enterprise day-rates)? (CONV-015, SALES-001)
- **Coaching retainer pricing**: publish indicative monthly pricing per tier, or strictly bespoke? (CONV-014)
- **IMM-P® 12+12 typical engagement value**: USD range and whether same across enterprise vs public-sector cohort? (SALES-001)
- **Honest scarcity / cadence ceiling** for ClarityScan ("2-4 sessions per week" is verifiable; confirm)? (BE-010)
- **"One-page recap within 1 business day" SLA** on discovery calls — willing to commit publicly? (BE-015)
- **Enterprise / government entry path**: build "/for-public-sector" landing? Procurement codes (UNGM, IDB)? (SALES-008, SALES-013)
- **Sales-funnel intent**: was `/work-with-us` intended A/B alternative to `/contact`? (IAUX-003)

### Legal / compliance

- **Trademark policy**: is `IMM®` (no `-P`) separately registered from `IMM-P®`? Is `ClarityScan®` registered (it appears site-wide but is absent from footer attribution)? (COPY-002, DOM-003, BP-012)
- **Booking processor**: Microsoft Bookings or Google Calendar? Privacy-terms text must match reality. (SEC-009, ANLY-001)
- **Stripe**: drop "if applicable" hedge in `gdpr-compliance.md:23` since Stripe is live? (SEC-006)
- **License posture**: add `LICENSE` to public GitHub mirror? Permissive (CC-BY-NC for content?) or default copyright? (SEC-012)
- **Client testimonial consent**: written consent on file from AFP Siembra, OGTIC, Alpha, FUNDAPEC, Runway sponsors for named quotes? (CONV-003, SALES-002, BP-013)
- **Runway Innovation Hub logo** specifically — consent for marketing use, since no matching case narrative exists? (BP-013)

### Tooling / budget

- **PNG fallbacks**: drop entirely and ship only AVIF + WebP, or retain for legacy? (PERF-001)
- **`gh-pages` dep**: keep as safety net or drop since canonical deploy is Cloudflare Pages? (PERF-010, CODE-013)
- **Build-time mermaid SVG**: comfort level with losing runtime dark-mode parity for the perf win? (PERF-003)
- **ESLint v9**: adopt flat config or remove the unused dev dependency? (CODE-012)
- **`sharp-cli`**: confirm whether image prep is manual; document one script or remove? (CODE-013)
- **Lighthouse-CI**: free `treosh/lighthouse-ci-action` sufficient, or budget for Calibre (~$80/mo) / Treo (~$30/mo)? (LH-CI-OPT-1)
- **Playwright viewport-sweep harness**: time/budget to build in next phase? (VP re-audit plan)
- **WebPageTest LATAM POPs**: monthly cadence via UI or wire API? (LH-2)
- **CF Analytics custom events**: confirm plan permits custom events at current traffic volume; site token configuration mechanism. (ANLY-001, ANLY-002)
- **Preview deploys**: does Cloudflare Pages auto-build preview URL per PR? (LH-4)
- **Cloudflare Worker** for feed redirect (`/feed/rss.xml`), download counter (`/dl/<slug>`), CSP `report-to` aggregation? (ANLY-006, ANLY-013)
- **Brief form**: build async capture at `/contact` (Cloudflare Worker / Pages Function) to restore async path? (CONV-009)
- **OG card budget**: ~10–15 ES card renders for i18n launch; in-house or designer hand-off? (SEO-002, I18N-009)

### Scope / phasing

- **ES locale phasing**: launch = nav/footer/home/services/case-studies/contact/legal (~6–8k words); blog and ILG deferred — acceptable? (I18N-010, B-P2-03 reopen)
- **Translation labor model**: in-house, agency, or MT-with-review? Drives `<Translate>` vs MDX-island choice. (I18N-003, I18N-013)
- **ES brand glossary**: reuse clients-hub phrasing ("MicroCanvas® e IMM® son marcas registradas") as canonical? (I18N-012)
- **Slug strategy** for ES blog: translate slugs (better ES SEO, breaks inbound links) or keep canonical EN slugs under `/es/`? (I18N-006)
- **Tag taxonomy across locales**: shared EN tags or fork ES tags? (I18N-005, BLOG-005)
- **Cadence target**: monthly essay + monthly field note, or essays-only quarterly? Reopen `/blog` as `/field-notes`? (BLOG-003, BLOG-013, SALES-014)
- **NNY `HeroBanner.tsx` build**: schedule before more posts publish, or in parallel? (BLOG-004)
- **Email capture / newsletter**: introduce privacy-first newsletter signup; which provider? (BLOG-007)
- **`/book-clarityscan` route**: still reachable from active campaign, or can be deleted? (CONV-005, ANLY-004)
- **Spanish phrases in English chrome** ("Vigía Futura"): annotate `lang="es"` now or wait for B-P2-03 ES rollout? (A11Y-015)
- **IMM funnel diagram**: keep CSS-only visual or promote to proper accessible component with structured fallback? (A11Y-014)
- **`/work-with-us` orphan**: promote to navbar, merge into `/contact`, or delete? (IAUX-003)
- **Phase C12 conversion UX spec**: does it already mandate canonical CTA labels and single service hub? Audit may be rediscovering its acceptance criteria. (IAUX-012)
- **Hero in `<main>` on home**: intentional visual-design constraint or movable? (A11Y-001, A11Y-002)
- **Foldable anchors** (Galaxy Z Fold): activate or keep pending? (VP foldable)
- **WCAG target**: 24×24 (SC 2.5.8) or 44×44 (HIG / AAA)? Drives MOB-003 scope. (MOB-003)
- **Forced-colors target**: hard gate (public-sector prospects) or P1 follow-up? (VP-001)
- **iPad anchor (A3)**: mobile or desktop experience for Doulab? (VP-002, VP-015)
- **1920 / FHD treatment**: upper-bound type guard or accept 1200px cap? (VP-005)
- **Workshop page bespoke gradient hero**: keep as promoted variant or normalize to canonical `Hero`? (BRAND-005, VP-006)
- **Logo system**: invest in dark / mono variants + brand guide doc? (BRAND-009)
- **Proof-logo treatment**: grayscale-on-hover (visual calm) or full color (recognition)? (BRAND-012)
- **Gate strictness in LH-CI**: block on any sub-90 category, or only Perf < 70 mobile / a11y < 90? (LH-3)
- **Score floor for ILG chapters and AFP Siembra**: temporary lowered floors, or block all merges until PERF-002 and PERF-009 land first? (LH-6)

## Suggested implementation phasing

Built only from real findings; commit and backlog-update governance must precede execution per AGENTS.md.

### Phase 1 — Truth & integrity (week 1)
Smallest, highest-trust set. No new components.
- Delete 8 zero-byte route stubs (IAUX-001).
- Fix "ClarityScanr" typos and add CI regex guard (COPY-001).
- Add `static/robots.txt` (SEO-003).
- Add `exclude: ['ops/**']` to docs preset; rebuild and verify (CODE-001, SEO-004, I18N-011).
- Delete `.bk` files under `docs/research-resources/` and `blog/` (CODE-002, BLOG-001); add `*.bk` to `.gitignore`.
- Sweep MCF v2.1 → v2.2 (decision-dependent) (DOM-001, COPY-003).
- Sweep `IMM®` / `IMM-P ©` → `IMM-P®`; normalize JSON-LD `name` (DOM-003, DOM-010); fix footer marks line (COPY-002).
- Reconcile ClarityScan time claim (BP-003, BLOG-008).
- Update privacy-terms to name Microsoft Bookings; remove "if applicable" Stripe hedge (SEC-009, SEC-006).
- Generate or unify missing OG cards (SEO-002, BLOG-002, BLOG-009).
- Replace `/terms-and-conditions` and `/book-clarityscan` page shims with `_redirects`; delete auto-popups (IAUX-007, IAUX-008, CONV-002, CONV-005, A11Y-011, BP-009, MOB-010, VP-013).

### Phase 2 — Conversion & trust (weeks 2–3)
- Publish ClarityScan price + price band components for workshops/coaching tiers (CONV-001, BE-002, SALES-001, CONV-014, CONV-015).
- Replace boilerplate `ctaNote` with risk-reduction microcopy on every page (CONV-013, BP-005, BP-012, BE-014).
- Add 20-min anchor to homepage hero; vary final-CTA headlines per page (BE-001, BP-010, COPY-007).
- Re-order case-study CTA cards; differentiate enterprise/briefing entry path (CONV-010, SALES-008).
- Add `min-height: 44px` to all buttons; remove `text-align: justify`; fluid hero subtitle (MOB-003, MOB-002, A11Y-007, VP-004, BRAND-006).
- Add Cloudflare preconnect for booking/Stripe; LCP preload to WebP only; gate Hero `<Head>` preload on `eager` (PERF-001, PERF-006, PERF-007, PERF-013, LH-P-001).
- AVIF/WebP for NNY hero PNG; `loading="lazy"` on AFP Siembra YouTube iframes (PERF-002, PERF-009, LH-P-004, LH-P-005).
- Add CF Analytics click-delegate module + `?src=<slot>` on booking URLs + `cta.conversion.clarityscan.paid` event (ANLY-002, ANLY-003, ANLY-005, ANLY-008).
- Build named testimonial / practitioner credentials components (CONV-003, CONV-012, SALES-002, SALES-010, BE-006, BP-007); requires consent collection from Sales.
- Add visible breadcrumb component (IAUX-005).
- Fix duplicated blog tag URLs (SEO-001).

### Phase 3 — Structural (weeks 4–6)
- Resolve `/services` vs `/what-we-do` vs `/work-with-us` triangle and consolidate offer taxonomy (IAUX-002, IAUX-003, SALES-004).
- Single canonical IMM-P® five-domain taxonomy across home `problems[].pillar`, ILG chapter 07, MCF stub (DOM-002, DOM-007, DOM-008, DOM-009).
- Build canonical NNY `HeroBanner.tsx`; retrofit blog posts; add `--text` and `--symbol` CSS scopes (BLOG-004).
- Token-driven design system: `tokens.css`, collapse `pages-*__*` clones, retire workshop bespoke hero or promote to variant, eliminate `!important` dark-mode ladder (BRAND-001, BRAND-002, BRAND-005, BRAND-008, BRAND-010, BRAND-013, VP-008).
- Real CSS Modules for component-local styles; split per-route CSS surface (CODE-007, PERF-004, LH-P-003).
- Service/Course/Offer JSON-LD across all `services/*` and Vigía Futura; consolidate to single `@graph` per page (SEO-005, PERF-008).
- Add `<link rel="alternate" type="application/rss+xml">` to global `<Head>` (SEO-011).
- Add hreflang scaffolding pre-i18n (SEO-010, I18N-015).
- Mobile responsive image variants (480/800/1200/1600) per format (MOB-011, LH-P-004).
- IMM funnel mobile breakpoint to 996 px; ultra-narrow ≤480 guard (VP-002, MOB-006).
- Mermaid scroll-hint affordance; markdown table overflow rule (MOB-007, MOB-008, VP-010, A11Y-014).
- Forced-colors and reduced-motion baselines (VP-001, VP-011, A11Y-010).
- Stage CSP Report-Only with `'strict-dynamic'` + nonce/hash; normalize JSON-LD component (SEC-002, SEC-008, LH-BP-001).
- Add async brief form at `/contact` via Pages Function (CONV-009).

### Phase 4 — Strategic (weeks 7+)
- EN→ES launch: enable locale, scaffold `i18n/`, translate nav/footer/home/services/case-studies/contact/legal, ship per-locale RSS, ES OG cards (I18N-001 through I18N-015).
- Named-victim case studies: 1 quantified before/after + 1 named-with-consent client voice + 1 explicit avoided risk per case (CONV-003, SALES-002, SALES-003, BP-007).
- Build-time mermaid SVG rendering (PERF-003, PERF-012, LH-P-002).
- Lighthouse re-baseline (in incognito); stand up LH-CI on preview deploys with threshold gates; Playwright viewport-sweep harness (18-lighthouse.md re-audit plan; 19-viewport-matrix.md re-audit plan).
- Monthly WebPageTest LATAM POP cadence (Bogotá/Santiago/São Paulo) (LH-2).
- Enterprise / public-sector entry path: `/for-public-sector`, `/for-regulated-finance`, capability statement PDF, "Request a private briefing" as dominant CTA (SALES-008, SALES-013).
- Editorial cadence floor + field-notes tag (BLOG-003, BLOG-013, SALES-014).
- Logo system: `srcDark` + mono + brand guide doc (BRAND-009).

## Governance note

This audit run produced 20 files (19 role + this index) under `docs/ops/audit-2026-06/`. Follow-up implementation passes must:

- Add all 20 files to the `docs/ops/` manifest in `AGENTS.md`.
- File new backlog items in `docs/ops/doulab-net-backlog.md`, one per finding cluster (theme) and per priority item not already tracked under existing phase IDs.
- Reopen `B-P2-03` (i18n) per I18N-002 — currently marked Completed but no `i18n/` directory exists.
- Commit findings (this index + 19 role files) BEFORE any implementation, per the two-commit governance pattern in AGENTS.md.
- Re-run `npm run verify:build` after each Phase-1 mechanical change to confirm route list shrinks (zero-byte deletions) and `build/docs/ops/` is empty (after `exclude` lands).
- For implementation commits, cite the finding ID (e.g. `IAUX-001`, `CONV-001`, `DOM-001`) in the commit message so the audit traceability is preserved.
