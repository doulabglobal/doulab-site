# IA & UX Audit — doulab.net — 2026-06-01

## Scope of this audit
Information architecture, navbar/footer IA, sidebar hierarchy, page-to-page flow, orphan/dead-end pages, and naming clarity across `src/pages/**`, `docs/**`, `sidebars.ts`, and `docusaurus.config.ts`. Visual design, copy, conversion mechanics, SEO, accessibility, and performance are out of scope.

## Method
Read-only source inspection of: `docusaurus.config.ts` (navbar/footer), `sidebars.ts`, all routes under `src/pages/` (index, what-we-do, services, case-studies, about, contact, insights, vigia-futura, work-with-us, ecosystems, book-clarityscan, book-clarityscan-success, privacy-terms, terms-and-conditions, 404), top-level `docs/` (intro.mdx, releases.mdx, research-resources/index.mdx, innovation-lab-guide), `blog/` directory listing, key components (`Hero.tsx`, `FinalCta.tsx`, `PageHeader.tsx`, `CaseStudyCards.tsx`), and cross-referenced `docs/ops/doulab-net-backlog.md` plus `docs/ops/phase-c0-case-studies-ia-audit.md`. No browser rendering, no build. File sizes were directly verified via `Get-Item` for the eight zero-byte `.md` routes flagged below.

## Findings (ranked)

- id: IAUX-001
- severity: P0
- impact: 5
- effort: S
- location: `src/pages/about/contact.md` (0 bytes), `src/pages/about/mission.md` (0 bytes), `src/pages/about/team.md` (0 bytes), `src/pages/work-with-us/apply.md` (0 bytes), `src/pages/work-with-us/collaborate.md` (0 bytes), `src/pages/vigia-futura/vision.md` (0 bytes), `src/pages/vigia-futura/indices.md` (0 bytes), `src/pages/vigia-futura/governancemodels.md` (0 bytes)
- observation: Eight zero-byte `.md` files exist as Docusaurus page routes. Under the classic preset every `src/pages/**/*.md` becomes a public URL. These produce ghost routes (`/about/contact`, `/about/mission`, `/about/team`, `/work-with-us/apply`, `/work-with-us/collaborate`, `/vigia-futura/vision`, `/vigia-futura/indices`, `/vigia-futura/governancemodels`) that are reachable by sitemap / crawler / Google but contain no content, no header, no navigation back. They are orphan dead ends with zero internal inbound links.
- recommendation: Delete the eight empty `.md` files (or, if intended as future pages, gate them with `draft: true` frontmatter and a stub body). Then run `npm run verify:build` per AGENTS.md to confirm the route list shrinks. Cross-check no sitemap entry remains.
- evidence: `Get-Item ... | Select-Object Name, Length` returned Length=0 for all eight. Tracked structurally in AGENTS.md only as Phase B-P0-01 precedent (`/markdown-page` removal); these are functionally identical orphans that survived the cleanup.

- id: IAUX-002
- severity: P1
- impact: 5
- effort: M
- location: `docusaurus.config.ts:85-93` (navbar), `src/pages/services/index.tsx:1-165`, `src/pages/what-we-do/index.tsx:1-345`
- observation: Two competing "services overview" pages exist with overlapping content but only one is in the navbar. `/what-we-do` is the navbar entry; `/services` is not navbar-linked but is referenced from the footer ("Start with ClarityScan®" points there indirectly via `/services/clarityscan`), the 404 page (`Link to="/services"`), and many CTAs. Both pages list the same five offerings (ClarityScan, Workshops, Programs/IMM-P, Coaching, Future Studies/Vigía) with near-identical card text. There is no canonical hub: deep-linked child routes (`/services/clarityscan`, `/services/custom-workshops`, `/services/innovation-maturity`, `/services/coaching-mentoring`, `/services/diagnostics`, `/services/innovation-readiness-workshop`) live under `/services/*` but their parent in the IA is `/what-we-do`.
- recommendation: Pick one canonical hub. Option A (recommended): keep `/what-we-do` as the navbar label, redirect `/services` → `/what-we-do`, move all `/services/<child>` to `/what-we-do/<child>` with redirects from `/services/*`. Option B: rename navbar label "What we do" → "Services" and redirect `/what-we-do` → `/services`. Either way, delete the duplicate cards page. Update footer column 1 title from "What we do" to match.
- evidence: `src/pages/services/index.tsx:67-150` and `src/pages/what-we-do/index.tsx:169-273` both render identical 5-card service grids pointing to the same `/services/<child>` URLs. Navbar in `docusaurus.config.ts:88` includes only `/what-we-do`. 404 in `src/pages/404.tsx:34` links to `/services` (broken IA contract).

- id: IAUX-003
- severity: P1
- impact: 4
- effort: M
- location: `src/pages/work-with-us/index.tsx`, `docusaurus.config.ts:82-94`
- observation: `/work-with-us` is a fully-built page (330 lines, FAQ schema, four-step process rail, proof strip) but is not in the navbar and not in the footer. It is reachable only via internal cross-links inside `/about` (none direct) and `/what-we-do` ("New to us? See ... on the What we do page"). It overlaps with `/services` AND `/what-we-do` AND `/contact` — all four pages contain "three ways to start" / "discovery call" / "diagnostic" framing. This is the conversion-funnel page yet it is structurally orphaned.
- recommendation: Decide its role explicitly. Either (a) promote `/work-with-us` to a navbar slot ("Work with us" or "Start") replacing or supplementing `/contact`, treat it as the canonical lead-gen funnel and trim `/services` + `/what-we-do` to be content-only; or (b) merge it into `/contact` or `/what-we-do` and delete the route. Current state is the worst case: orphan with effort sunk into it.
- evidence: No navbar/footer entry references `/work-with-us` (`docusaurus.config.ts:82-135`). Page exists at `src/pages/work-with-us/index.tsx:18` with three-card "ways to start" section nearly identical to `/services/index.tsx:67-150`.

- id: IAUX-004
- severity: P1
- impact: 4
- effort: S
- location: `src/pages/ecosystems/redlab.tsx`, `src/pages/ecosystems/red-incubadoras.tsx`
- observation: Two `/ecosystems/*` pages exist with placeholder copy ("Page in progress.", "Launching 2025.") and no parent `/ecosystems` index page. Neither is navbar-linked nor footer-linked. They are reachable only via direct URL or the case study `ogtic-redlab` cross-reference. They violate the no-empty-shells implicit IA standard set by the other built pages. The CTA on both is `<Link to="/contact">` which sends users to a dead end without context-preserving redirect.
- recommendation: Either (a) build out `/ecosystems` as a parent hub with both children promoted to navbar under "What we do > Ecosystems", or (b) gate both pages behind `draft: true` / remove them and consolidate the RedLab story into the existing case study `case-studies/ogtic-redlab.tsx`. Right now the two stubs are SEO+UX liabilities. Note the heading "Red de Laboratorios de Innovación" is the only Spanish-only label in an English-only site (governance: `defaultLocale: 'en'`, `locales: ['en']`).
- evidence: `src/pages/ecosystems/redlab.tsx:10` ("Page in progress."), `src/pages/ecosystems/red-incubadoras.tsx:10` ("Launching 2025."); `docusaurus.config.ts:20` declares English-only.

- id: IAUX-005
- severity: P1
- impact: 4
- effort: S
- location: `docusaurus.config.ts:96-135` (footer), every page-level `FinalCta` block (e.g. `src/pages/index.tsx:730-738`)
- observation: The footer surfaces only five top-level destinations (Overview, Case Studies, Vigía Futura, Insights, ClarityScan) and omits four important live pages: `/about`, `/contact` (only in Connect column as label "Contact"), `/services` (the deep-link parent), and `/work-with-us`. Conversely the navbar omits Vigía Futura and Work-with-us. The site has no globally consistent "where am I in this product" wayfinding. Breadcrumb JSON-LD is emitted on individual pages (e.g. `src/pages/about/index.tsx:81`, `case-studies/index.tsx:39`) but no visible breadcrumb component is rendered, so users get zero visual breadcrumbs anywhere on the site.
- recommendation: (1) Add a visible breadcrumb component on second-level pages (`/services/*`, `/case-studies/*`, `/vigia-futura`, `/about`, `/contact`). The schema is already populated; surface it. (2) Reconcile navbar+footer so every primary IA node (What we do, Case Studies, Vigía Futura, Insights, About, Work with us, Contact) appears in exactly one navbar slot AND once in the footer. (3) Add `/vigia-futura` as a navbar item or as a "What we do" submenu/dropdown.
- evidence: Schema-only breadcrumbs at `src/pages/about/index.tsx:79-86`, `src/pages/case-studies/index.tsx:36-45`, `src/pages/what-we-do/index.tsx:43-52`, etc. No `Breadcrumb` import or render anywhere in `src/`. Footer at `docusaurus.config.ts:99-135` omits About entirely.

- id: IAUX-006
- severity: P1
- impact: 4
- effort: S
- location: `sidebars.ts:3-36`, `docs/intro.mdx:1-16`, `docs/research-resources/index.mdx:1-26`
- observation: The docs section has two competing entry narratives. `docs/intro.mdx` (sidebar position 1, tag whitepaper) is titled "About This Project" and frames the site as "Doulab AI is an open knowledge initiative" — a completely different product positioning from the rest of the site (which sells consulting). Meanwhile `sidebars.ts` defines only one sidebar (`whitepaperSidebar`) that does not include `intro.mdx` at all. So `/docs/intro` is orphan-reachable but invisible in the sidebar. Users landing on `/docs/research-resources` see a different IA shape than users landing on `/docs/intro`.
- recommendation: (1) Delete `docs/intro.mdx` or merge it into `/docs/research-resources/index.mdx`. The "Doulab AI" framing contradicts the consulting positioning on the rest of the site and risks confusing visitors who arrive via search. (2) Decide whether `docs/` is "Research & Resources" (current sidebar label) or a general docs hub; rename `routeBasePath: '/docs'` to `/research` if you commit to research-only.
- evidence: `docs/intro.mdx:2-4` declares `id: intro, title: About This Project, sidebar_position: 1` but `sidebars.ts:4-35` defines only `whitepaperSidebar` rooted at `Research & Resources` with no reference to `intro`. `docs/intro.mdx:18` says "**Doulab AI** is an open knowledge initiative".

- id: IAUX-007
- severity: P2
- impact: 4
- effort: S
- location: `src/pages/terms-and-conditions.tsx:7-30`, `src/pages/privacy-terms.tsx:7-30`
- observation: Two legal routes coexist: `/terms-and-conditions` is a redirect-stub page ("This content now lives on the consolidated Privacy & Terms page.") with a `Go to Terms` button to `/privacy-terms#terms`, while `/privacy-terms` is the live page. The stub is a client-side shim — anyone landing from an old external link does an extra click. Worse, the stub sets `<link rel="canonical" href="https://doulab.net/privacy-terms" />` (line 15), so it self-decanonicalizes correctly for SEO but still shows the user a sub-par interstitial.
- recommendation: Replace the React stub with a static `_redirects` rule on Cloudflare Pages (`/terms-and-conditions /privacy-terms 301`). Same for any other consolidated legal route. Delete `src/pages/terms-and-conditions.tsx`.
- evidence: `src/pages/terms-and-conditions.tsx:15` canonical points to `/privacy-terms`; the page exists only to render a PageHeader and a single CTA.

- id: IAUX-008
- severity: P2
- impact: 3
- effort: S
- location: `src/pages/book-clarityscan.tsx:9-52`
- observation: `/book-clarityscan` is a client-side auto-redirect page that uses `useEffect` + `window.open(... '_blank')` to open the booking URL in a new tab. Users with blocked popups, prerendering bots, or no JS see only a "Redirecting…" message and a manual button. The page is `noindex,follow` (good) but functions as a "booking router" that exists in source but never as a real destination. There is also `/book-clarityscan-success` as a separate file.
- recommendation: Replace with a Cloudflare `_redirects` rule pointing `/book-clarityscan` → `https://booking.doulab.net/clarityscan` (302). For the success page, confirm it is the post-Stripe redirect target; if so keep it but verify booking-architecture.md alignment. The auto-`window.open` pattern is fragile and not necessary for an external link.
- evidence: `src/pages/book-clarityscan.tsx:11-19` uses `window.open` in `useEffect`; line 25 sets `noindex,follow`.

- id: IAUX-009
- severity: P2
- impact: 3
- effort: M
- location: `src/pages/index.tsx:256-326` (homepage ServicesSection), `src/pages/about/index.tsx:177-273`, `src/pages/services/index.tsx:64-151`, `src/pages/what-we-do/index.tsx:164-275`
- observation: Four different pages each render their own variant of the "Service Pillars" five-card grid (Diagnostics, Workshops, Programs, Coaching, Future studies). The card titles, icons, copy, and CTA labels drift between pages: e.g. "Diagnostics, Know Where You Stand" vs "ClarityScan®: Know where you stand" vs "Diagnostics, know where you stand"; "Workshops, Spark Aligned Action" vs "Workshops: Align & activate" vs "Workshops, spark aligned action"; "Future Studies" vs "Future studies: Anticipate & lead". Same model, four prose variants.
- recommendation: Extract a single `ServicePillarsGrid` component (similar to existing `CaseStudyCards` pattern with `caseStudiesData.tsx`) sourced from a `servicePillarsData.ts`. Each page renders it with optional `variant` prop. Eliminates four-way drift and is the same pattern the case-study cards already use successfully.
- evidence: Compare `src/pages/index.tsx:261-323`, `src/pages/about/index.tsx:179-263`, `src/pages/services/index.tsx:67-150`, `src/pages/what-we-do/index.tsx:169-273`. Same five pillars, four slightly different copy decks.

- id: IAUX-010
- severity: P2
- impact: 3
- effort: S
- location: `docusaurus.config.ts:96-135`
- observation: Footer information architecture mixes content types within columns. Column 1 ("What we do") mixes a hub (Overview), a collection (Case Studies), a sub-product (Vigía Futura), a content type (Insights), and a CTA (Start with ClarityScan®). Column 2 ("Docs") has only two entries and one of them, Releases, is operational not editorial. Column 4 ("More") buries Blog under technical feeds (RSS/Atom/Sitemap). There is no "Company" column even though `/about` exists.
- recommendation: Restructure to four conventional columns: Solutions (ClarityScan, IMM-P, Workshops, Vigía Futura, Coaching), Learn (Case Studies, Insights, Blog, Research & Resources), Company (About, Work with us, Contact), Legal & Feeds (Privacy & Terms, RSS, Atom, Sitemap, GitHub). Mirrors how visitors mental-model B2B consulting sites.
- evidence: `docusaurus.config.ts:100-134` — four columns titled "What we do", "Docs", "Connect", "More".

- id: IAUX-011
- severity: P2
- impact: 3
- effort: S
- location: `src/pages/insights/index.tsx:213-220`, `src/pages/index.tsx:704-719`, multiple `Hero` instances
- observation: The Insights hero CTAs are "Browse Research and Resources" (primary) and "Read the blog" (secondary) — both content-pivot actions, not commercial ones. Every other hero has ClarityScan as primary or secondary. This is correct for Insights as a top-of-funnel page, but it breaks the otherwise universal CTA pattern (ClarityScan primary, Discovery secondary). The risk is the user who lands on `/insights` from search finds no path to commercial action above the fold.
- recommendation: Keep the editorial CTAs but add a small "Ready to start? Book ClarityScan®" microcopy + link directly under the hero, similar to how `/about` has a microcopy line at `src/pages/about/index.tsx:143-145`. Alternatively swap secondary CTA from "Read the blog" to "Start with ClarityScan®".
- evidence: `src/pages/insights/index.tsx:213-220` — both CTAs are internal content links.

- id: IAUX-012
- severity: P2
- impact: 2
- effort: S
- location: `src/pages/index.tsx:711-716`, `src/pages/contact/index.tsx:80-89`, `src/pages/services/index.tsx:49-50`, `src/pages/what-we-do/index.tsx:112-118`
- observation: CTA labels for the same action are inconsistent. "Book a discovery call" / "Talk to us" / "Book a discovery call" are used interchangeably for the same `https://booking.doulab.net/discovery` URL. "Start with ClarityScan®" / "Explore ClarityScan" / "Run a diagnostic" / "Book a ClarityScan® online" all coexist and point to two different URLs (`/services/clarityscan` vs `CLARITYSCAN_CHECKOUT_URL`). Users cannot reliably learn what each label does.
- recommendation: Define two canonical CTA labels: `Book ClarityScan®` for the checkout URL, `Learn about ClarityScan®` for `/services/clarityscan`, `Book a discovery call` for `booking.doulab.net/discovery`. Document in a `docs/ops/cta-vocabulary.md`. Replace all variants. The `phase-c12-conversion-ux-spec.md` referenced in AGENTS.md manifest may already cover this; align with it.
- evidence: `src/pages/services/index.tsx:49` typo "Book a ClarityScanr online"; `src/pages/index.tsx:712` "Start with ClarityScan®"; `src/pages/what-we-do/index.tsx:115` "Explore ClarityScan"; `src/pages/contact/index.tsx:201` "Book a discovery call" vs `src/pages/index.tsx:716` same URL labelled identically — but `src/pages/services/index.tsx:160` labels same URL as "Talk to us".

- id: IAUX-013
- severity: P3
- impact: 2
- effort: S
- location: `sidebars.ts:32`, `docs/releases.mdx`
- observation: The sidebar tucks `releases` at the bottom of `Research & Resources` as a sibling of academic content. Releases are operational changelogs (version notes) and do not belong inside a research hub. Cognitive friction: users hunting for "what whitepapers exist" must visually parse around the Releases entry.
- recommendation: Move `releases` out of `whitepaperSidebar` into either its own minimal sidebar `releasesSidebar` rendered only on `/docs/releases`, or relocate the route to `/changelog` and unlink it from the docs sidebar. Keep the footer "More > Releases" entry pointing wherever.
- evidence: `sidebars.ts:18-33` shows `releases` as a peer of the Innovation Lab Guide subcategory.

- id: IAUX-014
- severity: P3
- impact: 2
- effort: S
- location: `src/pages/vigia-futura/index.tsx:71-100`, `docusaurus.config.ts:88`
- observation: Vigía Futura is a top-tier service offering (mentioned in every Service Pillars grid) but is only reachable via (a) footer link, (b) cross-links from `/about`, `/what-we-do`, `/services`, `/services/clarityscan` and (c) the homepage Future Studies card. It is not in the navbar. Users who want to evaluate the foresight offering must enter the IA through a different door each time.
- recommendation: Add Vigía Futura to the navbar, either as a sibling of `Insights` or as a dropdown child under `What we do`. Use the exact label "Vigía Futura" (already in footer at `docusaurus.config.ts:104`). Docusaurus navbar supports `type: 'dropdown'` items.
- evidence: `docusaurus.config.ts:85-94` navbar has no `/vigia-futura` entry; `src/pages/vigia-futura/index.tsx` is a 200+ line page with 5 sections and radar docs integration.

## Quick wins (≤ 1 day)
1. Delete the eight zero-byte `.md` orphan routes (IAUX-001) — pure cleanup, immediately removes ghost URLs.
2. Replace `/terms-and-conditions` and `/book-clarityscan` page shims with `_redirects` rules in `static/_headers`/`_redirects` (IAUX-007, IAUX-008). Aligned with AGENTS.md "Header source of truth is `static/_headers`".
3. Add Vigía Futura to the navbar (IAUX-014) — one config line in `docusaurus.config.ts`.
4. Add a visible breadcrumb component on second-level pages; schema already emitted (IAUX-005). Reuse existing Docusaurus theme breadcrumb or render PageHeader `eyebrow` with parent label.
5. Fix the typo "Book a ClarityScanr online" at `src/pages/services/index.tsx:49` and standardize the three most-used CTA labels (IAUX-012).

## Strategic bets (multi-week)
1. Resolve the `/services` vs `/what-we-do` vs `/work-with-us` triangle (IAUX-002, IAUX-003). Pick one canonical hub, redirect the others, rewrite copy so each remaining page has a single distinct job (overview vs detail vs lead-gen funnel). This is the biggest IA debt on the site and blocks any future i18n rollout because Spanish content would multiply the duplication 3x.
2. Build a single `ServicePillarsGrid` component sourced from a `servicePillarsData.ts` and replace the four drifting variants (IAUX-009). Same pattern as existing `CaseStudyCards`. Reduces ongoing edit cost and copy drift indefinitely.
3. Decide the fate of `/ecosystems/*` (IAUX-004) and `/docs/intro` (IAUX-006). Either invest in those narratives or delete the stubs. Today they confuse visitors and crawlers about what Doulab actually does.

## Out of scope / hand-offs
- Hero/card visual styling, color, and motion polish — **Brand & visual design**
- CTA label wording variants and tone consistency — **Content & copy strategist**
- Whether secondary CTAs should be ClarityScan vs Discovery on each surface, and where to place trust microcopy — **Conversion / lead-gen**
- Sitemap submission, canonical conflicts on legacy routes, indexability of redirect shims — **SEO & discoverability**
- Empty-route 404 vs 410 behavior, RSS sourcing on homepage/Insights — **Performance & frontend engineering**
- Whether breadcrumb component meets WCAG, focus order on subnavs — **Accessibility**
- Bilingual implications of route consolidation (es/ duplication if Spanish rolls out) — **i18n readiness**
- Whether MicroCanvas Framework / IMM-P / Vigía Futura are positioned and named correctly in nav/footer — **MCF/IMM-P domain expert**
- Sales funnel intent of `/work-with-us` vs `/contact` vs `/services` — **Sales & positioning**
- CTA click instrumentation taxonomy (data-cta values diverge across pages) — **Analytics & measurement**

## Open questions for Luis
1. Is `/services` the legacy hub being replaced by `/what-we-do`, or the other way around? The navbar says `/what-we-do`; the deep-link tree says `/services/*`. Which one survives?
2. Was `/work-with-us` an intentional A/B alternative to `/contact`, an unreleased page, or an abandoned redesign? Its present orphan status burns the SEO/copy work already done.
3. The eight empty `.md` files (about/mission, about/team, about/contact, work-with-us/apply, work-with-us/collaborate, vigia-futura/vision, vigia-futura/indices, vigia-futura/governancemodels) — placeholders for future content, or leftover scaffolding? If future, give them frontmatter `draft: true`; if scaffolding, delete.
4. `docs/intro.mdx` positions the site as "Doulab AI, an open knowledge initiative" which is a different identity from "consulting firm offering IMM-P®/MCF/Vigía". Is `docs/` meant to host the AI initiative separately, or is the intro file legacy?
5. Should the `/ecosystems` pages (RedLab, Red de Incubadoras) be promoted to a top-level "Ecosystems" section, folded into Case Studies, or deleted? They are the only Spanish-titled pages in the English-only site.
6. Phase C12 conversion UX spec is in the ops manifest — does it already mandate canonical CTA labels and a single service hub? If yes, this audit is rediscovering its acceptance criteria, and the implementation has drifted from the spec.
