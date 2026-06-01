# SEO & Discoverability Audit — doulab.net — 2026-06-01

## Scope
Read-only audit of on-site SEO and discoverability for doulab.net (Docusaurus v3 on Cloudflare Pages, English only). Covers:
- Per-page metadata (title, description, canonical, OG, Twitter).
- Structured data (JSON-LD) coverage and validity.
- Sitemap and robots posture.
- Heading hierarchy and H1 usage.
- Internal linking, anchor-text quality, slug quality.
- Image alt text for crawlable assets.
- RSS/Atom exposure.
- hreflang readiness for future Spanish (ES) locale.

Out of scope: Algolia/internal search (not configured), GA/GTM (privacy-first; CF Web Analytics only), CSP/security, performance, accessibility (handled by sibling audits), legal/booking infra, IA redesign.

## Method
- Read repo source: `docusaurus.config.ts`, `src/pages/**`, `src/theme/Root.tsx`, `docs/research-resources/**`, `blog/**`, `static/_headers`, `build/sitemap.xml`.
- Grep for `canonical`, `og:`, `twitter:`, `noindex`, `application/ld+json`, `hreflang`, `robots`, `sitemap`, `alt=""`, h1 patterns.
- Cross-checked metadata claims (e.g., OG image URLs) against actual files under `static/img/social/`.
- Validated sitemap and tag routes from `build/sitemap.xml` (current build artifact).
- Reviewed `docs/ops/doulab-net-backlog.md` to avoid restating items already tracked under C5 / D1 (robots.txt) and to surface unresolved seams.

No npm/build commands executed (per constraint).

## Findings (ranked)

### SEO-001 — Sitemap contains malformed blog tag URLs (duplicated `/blog/tags/` segment)
- Severity: HIGH
- Impact: 5
- Effort: M
- Location: `build/sitemap.xml` (entries like `https://doulab.net/blog/tags/blog/tags/announcement`, repeated across all 15 tags).
- Observation: Every blog tag URL in the generated sitemap is doubled, e.g. `/blog/tags/blog/tags/announcement`, `/blog/tags/blog/tags/caribbean`, …`/blog/tags/blog/tags/vigia-futura`. Root cause appears to be `permalink: /blog/tags/announcement` declared inside `blog/tags.yml` (file lines 3, 8, 13, 18, 23, 28, 33, 38, 43, 48, 53, 58, 63, 68, 73), which the Docusaurus blog plugin already prefixes with the tags base path, producing a double-segment.
- Recommendation: Either remove `permalink:` from every tag in `blog/tags.yml` (let Docusaurus generate) or replace each with the bare slug (e.g., `announcement`, not `/blog/tags/announcement`). Then rebuild and re-verify `build/sitemap.xml`. Owner: Blog & editorial + Code quality.
- Evidence: `blog/tags.yml:3,8,13,…`; `build/sitemap.xml` (urlset entries with `/blog/tags/blog/tags/...`).

### SEO-002 — Per-page OG images point to files that do not exist in `static/img/social/`
- Severity: HIGH
- Impact: 5
- Effort: S
- Location: multiple `src/pages/**/*.tsx` files; only `default-og.jpg`, `og-imm-program.jpg`, `og-insights.jpg` are present under `static/img/social/`.
- Observation: 13 pages reference per-page OG images that are not in the repo and will 404 when shared on LinkedIn/Twitter:
  - `src/pages/services/clarityscan.tsx:46` → `og-clarityscan.jpg` (missing).
  - `src/pages/services/coaching-mentoring.tsx:78` → `og-coaching.jpg` (missing).
  - `src/pages/services/custom-workshops.tsx:43` → `og-workshops.jpg` (missing).
  - `src/pages/case-studies/afp-siembra.tsx:79` → `og-afp-siembra.jpg` (missing).
  - `src/pages/case-studies/alpha-inversiones.tsx:62` → `og-alpha-inversiones.jpg` (missing).
  - `src/pages/case-studies/fundapec.tsx:63` → `og-fundapec.jpg` (missing).
  - `src/pages/case-studies/ogtic-redlab.tsx:64` → `og-ogtic-redlab.jpg` (missing).
  - `src/pages/case-studies/index.tsx:28` → `og-case-studies.jpg` (missing).
  - `src/pages/what-we-do/index.tsx:38` → `og-what-we-do.jpg` (missing).
  - `src/pages/about/index.tsx:101` → `og-about.jpg` (missing).
  - `src/pages/contact/index.tsx:51` → `og-contact.jpg` (missing).
  - `src/pages/services/index.tsx:26` and `src/pages/work-with-us/index.tsx:28` use `docusaurus-social-card.jpg` (Docusaurus boilerplate, off-brand).
  - `src/pages/vigia-futura/index.tsx:83` uses `/img/vigia-futura-hero.jpg` (hero image, not a 1200×630 social card).
- Recommendation: Produce 1200×630 branded social cards for each route or fall back to a single high-quality `/img/social/default-og.jpg` (already used by homepage) until per-route cards exist. Replace the Docusaurus boilerplate referenced by Services and Work-with-us. Owner: Brand & visual design + Code quality.
- Evidence: directory listing of `static/img/social/`; grep results for `og:image`.

### SEO-003 — No `robots.txt` shipped from the repo
- Severity: HIGH
- Impact: 4
- Effort: S
- Location: `static/` (only `CNAME`, `_headers`, `blog/`, `img/`); no `static/robots.txt`. Backlog C5 and D1 both flag this as "Blocked (robots.txt missing; source unknown)" and Lighthouse 2026-01-19 reported an invalid `Content-Signal: search=yes,ai-train=no` directive coming from an external source.
- Observation: Crawlers receive whatever Cloudflare/edge generates, which the Lighthouse audit confirmed is invalid. The site has no in-repo source of truth and cannot reference `sitemap.xml` from `robots.txt`.
- Recommendation: Add `static/robots.txt` with explicit directives:
  ```
  User-agent: *
  Allow: /
  Disallow: /book-clarityscan
  Disallow: /book-clarityscan-success
  Sitemap: https://doulab.net/sitemap.xml
  ```
  Drop the unknown `Content-Signal` directive at the edge or document its source. Unblocks backlog C5 and D1.
- Evidence: `static/` listing; `docs/ops/doulab-net-backlog.md` C5 (line 351) and D1 (line 481); `docusaurus.config.ts:5` for SITE_URL.

### SEO-004 — Sitemap lists internal ops docs and legacy guide route as indexable (no `noindex`)
- Severity: MEDIUM
- Impact: 4
- Effort: M
- Location: `build/sitemap.xml` includes 40+ `/docs/ops/phase-b*`, `/docs/ops/phase-c*`, `/docs/ops/phase-d-closeout`, `/docs/ops/booking-architecture`, `/docs/ops/doulab-net-backlog`, `/docs/ops/security-headers-review`, `/docs/ops/deps-prune-proof`, etc.; also `/docs/research-resources/innovation-lab-guide-q2-2024-en` (legacy single-page route that is superseded by the chapterized `/docs/research-resources/innovation-lab-guide/01-…` per backlog BL-ILG-P3-01).
- Observation: These are internal operations notes and a deprecated guide URL. They pollute the index, dilute topical authority, and risk Google ranking ops notes above marketing pages on long-tail queries.
- Recommendation: Either (a) move ops content out of the docs plugin into a separate non-built `ops/` folder, or (b) keep in docs but exclude via `sidebars.ts` AND add `noindex,follow` via frontmatter (e.g., `head: [['meta', {name: 'robots', content: 'noindex,follow'}]]`) on each ops MDX. For the legacy guide URL, add a Docusaurus redirect or `noindex`. Owner: IA & UX strategist + Code quality.
- Evidence: `build/sitemap.xml` (full urlset); `AGENTS.md:55-104` docs/ops manifest; `docs/research-resources/innovation-lab-guide-q2-2024-en.mdx`.

### SEO-005 — Pillar Service pages missing JSON-LD; only ClarityScan, IMM-P, and case studies emit schema
- Severity: MEDIUM
- Impact: 4
- Effort: M
- Location: `src/pages/services/coaching-mentoring.tsx`, `src/pages/services/custom-workshops.tsx`, `src/pages/services/diagnostics.tsx`, `src/pages/services/innovation-readiness-workshop.tsx`, `src/pages/vigia-futura/index.tsx`.
- Observation: Only `services/clarityscan.tsx:25-36` (Service) and `services/innovation-maturity.tsx:28-38` (Service+FAQ) emit JSON-LD. Other service pages emit OG/Twitter only — no `Service`, `Offer`, `Course`, or `BreadcrumbList` schema. The Vigía Futura page has no JSON-LD at all despite being a flagship offering. This blunts Google's ability to render rich results for high-value commercial queries ("innovation lab", "foresight workshop", "innovation maturity diagnostic").
- Recommendation: Add `Service` + `BreadcrumbList` JSON-LD to every `src/pages/services/*.tsx` and to `vigia-futura/index.tsx`. Reuse the pattern from `clarityscan.tsx`. Add `Course` schema to `innovation-readiness-workshop.tsx` and `custom-workshops.tsx`. Owner: Code quality + Sales & positioning.
- Evidence: Grep `application/ld+json` returns only 5 hits across `src/`; service pages above are absent from that list.

### SEO-006 — Two `src/pages/ecosystems/*.tsx` pages are public, indexed, but have no `<title>`-overriding metadata, no canonical, no JSON-LD, and thin content
- Severity: MEDIUM
- Impact: 3
- Effort: S
- Location: `src/pages/ecosystems/redlab.tsx` (16 lines, "Page in progress"); `src/pages/ecosystems/red-incubadoras.tsx` (similar stub).
- Observation: Both stubs ship to production and are present in `build/sitemap.xml` (`/ecosystems/redlab`, `/ecosystems/red-incubadoras`). They have a `<Layout title=…>` but no `<Head>` block, no canonical, no description meta, no OG, no structured data, and only one `<h1>` + one paragraph + one link. This is a thin-content liability tied to high-intent keywords ("RedLab", "Red de Incubadoras"). Also note `<Link to="/contact">Get RedLab updates →</Link>` — anchor text is fine but the destination is generic.
- Recommendation: Either (a) add `noindex,follow` to both stubs until they have real content, or (b) flesh out the pages with at least: canonical, OG card, description, 250–400 words, JSON-LD `WebPage`, and internal links to relevant case studies (`ogtic-redlab`) and services. Owner: Content & copy + IA & UX strategist.
- Evidence: `src/pages/ecosystems/redlab.tsx:1-15`; `build/sitemap.xml` entries.

### SEO-007 — Some service pages over-pack the `<title>` tag with secondary keywords and pipes
- Severity: LOW
- Impact: 2
- Effort: S
- Location: `src/pages/services/clarityscan.tsx:40` `"ClarityScan® — Rapid innovation maturity diagnostic | Doulab"`; `src/pages/services/index.tsx:19` `"Services — Structured innovation, diagnostics, workshops & foresight | Doulab"`; `src/pages/case-studies/afp-siembra.tsx:68` `"AFP Siembra: Alcanza and SILAB | Case Study | Doulab"`; `src/pages/case-studies/index.tsx:17` `"Case Studies, Outcomes and Repeatable Delivery | Doulab"`.
- Observation: Titles use multiple separators (`—`, `|`, `,`) and accumulate 55–80 chars. The brand suffix `| Doulab` is inconsistent; some pages use ` — Doulab`, some ` | Doulab`, homepage uses no pipe at all (`"Innovation, Foresight and Repeatable Delivery, Doulab"` at `index.tsx:656`). Inconsistent branding signals weaken click-through on SERPs.
- Recommendation: Standardize to `"<Page-specific> | Doulab"` (≤60 chars). Update homepage to use the same format. Document the convention in `AGENTS.md` so future pages comply. Owner: Content & copy + Brand.
- Evidence: file:line pointers above; grep for `<Layout\s+title`.

### SEO-008 — `tagline` is brand-aspirational, not keyword-bearing; not used anywhere in metadata
- Severity: LOW
- Impact: 3
- Effort: S
- Location: `docusaurus.config.ts:9` `tagline: 'We unlock global prosperity by helping others create better futures'`.
- Observation: Docusaurus normally injects `tagline` into the homepage `<title>` as `Title · Tagline`, but `src/pages/index.tsx:661` overrides via `<Layout title={pageTitle} …>`, so the tagline is dead weight for SEO. The tagline contains zero core competitive keywords (innovation maturity, foresight, MicroCanvas, innovation lab, IMM-P, ClarityScan, Latin America).
- Recommendation: Either keep the brand tagline AND add a keyword-bearing site-wide meta description via `themeConfig.metadata` (Docusaurus supports it; currently empty), or change tagline to something like `"Innovation maturity, foresight, and repeatable delivery"`. Add `themeConfig.metadata: [{name: 'description', content: …}, {name: 'keywords', content: …}]` as a default fallback for pages that omit description. Owner: Content & copy + Sales & positioning.
- Evidence: `docusaurus.config.ts:9,56-94`.

### SEO-009 — Multiple H1s and missing/late H1 patterns on pages that use `<Hero>` component
- Severity: MEDIUM
- Impact: 3
- Effort: M
- Location: All pages that compose `<Hero>` (homepage, services, case studies). The grep for `<h1` in `src/pages/**` only returned five matches; the rest rely on `<Hero>` to inject the H1.
- Observation: Without reading `src/components/Hero.tsx` it cannot be confirmed which element it renders for the title. If `<Hero>` uses `<h1>` and the page body also contains additional H1s (e.g., `pages/services/diagnostics.tsx:38` explicitly renders `<h1 id="diagnostics-hero-title">` AND likely passes a title to Hero), there is a duplicate-H1 risk. `book-clarityscan-success.tsx:29` uses a bare `<h1>You're all set.</h1>` even though the page is `noindex`; harmless but signals inconsistent pattern. The two ecosystems pages also use raw `<h1>` while marketing pages use Hero — heading hierarchy is not standardized.
- Recommendation: Audit `src/components/Hero.tsx` to confirm it emits exactly one `<h1>`; lint pages to guarantee no second H1 below Hero; document the rule in `AGENTS.md`. Owner: Code quality + Accessibility (joint).
- Evidence: grep for `<h1` returned 5 files where Hero is not used; `src/pages/services/diagnostics.tsx:38`.

### SEO-010 — No hreflang scaffolding and config still hard-locked to `locales: ['en']` despite ES plan
- Severity: LOW (today) → HIGH (when ES launches)
- Impact: 4
- Effort: L
- Location: `docusaurus.config.ts:20` `i18n: { defaultLocale: 'en', locales: ['en'] }`. Grep for `hreflang` across `src/` returns zero hits.
- Observation: The B-P2-03 task (backlog) documented a manual ES rollout plan rather than a Docusaurus scaffold. There is no `<link rel="alternate" hreflang="…">` injection anywhere, and the per-page `<Head>` blocks hard-code `inLanguage: 'en'` in JSON-LD (e.g., `afp-siembra.tsx:28`). When ES launches, every page will need hreflang alternates and an `x-default`.
- Recommendation: Pre-create a small `<HreflangLinks pathname={…}/>` helper in `src/components/` that emits `<link rel="alternate" hreflang="en" href="…" />`, `hreflang="es"`, and `hreflang="x-default"`. Add it (even as no-op for ES until that locale ships) inside every page `<Head>`. Stash a translation slug map in `src/i18n/slug-map.json` now to make future translations zero-touch. Owner: i18n readiness.
- Evidence: `docusaurus.config.ts:20`; backlog `B-P2-03` (lines 64-72).

### SEO-011 — Footer RSS/Atom links use `href` to absolute URLs, bypassing route-level discovery; no `<link rel="alternate" type="application/rss+xml">` in `<Head>`
- Severity: LOW
- Impact: 2
- Effort: S
- Location: `docusaurus.config.ts:130-132` (footer footers exposes RSS, Atom, Sitemap as `href`); `src/theme/Root.tsx` is empty pass-through; LOG-2025-08-30-01 documents intentional `href` (external-style) to silence broken-link checker.
- Observation: There is no global `<link rel="alternate" type="application/rss+xml" title="Doulab Blog" href="https://doulab.net/blog/rss.xml" />` or Atom equivalent in document head. Browsers and feed readers cannot auto-discover the feed; only users who visit the footer find it.
- Recommendation: Inject `<Head>` alternates from `src/theme/Root.tsx` or a custom `Layout` wrapper (or via `docusaurus.config.ts:themeConfig.metadata`). Add both RSS and Atom. Owner: Code quality + Blog & editorial.
- Evidence: `docusaurus.config.ts:130-132`; `src/theme/Root.tsx:1-10`.

### SEO-012 — Internal link anchors inconsistent: mix of icon-only, "→" suffix, raw URLs, and generic "Read more"
- Severity: LOW
- Impact: 3
- Effort: M
- Location: `src/pages/index.tsx:284,298,309` use `"Explore workshops →"`, `"Explore programs →"`, `"Explore coaching and mentoring →"`; `index.tsx:537` falls back to `"Visit the blog →"`; blog cards loop renders `"Read post →"` regardless of post title; `case-studies/CaseStudyCards` (not read) likely renders generic CTAs. The site has good practice on the homepage (Hero CTAs are descriptive), but generic "Read post →" without `aria-label` weakens crawler signal and a11y.
- Observation: Anchor text is one of the strongest on-page SEO signals. Generic CTAs ("Visit site →", "Read more", "Learn more →" at `index.tsx:320`) waste link equity that should flow into keyword-rich anchors like "Read the MicroCanvas Framework v2.1 documentation".
- Recommendation: Replace generic anchor text with descriptive, keyword-aware text. Where space constrains the visible label, add `aria-label` (the homepage already does this on a few CTAs, e.g., `aria-label={`Read ${post.title}`}` at line 574 — extend everywhere). Document the convention. Owner: Content & copy + Accessibility.
- Evidence: `src/pages/index.tsx:283-323,536-540,574`.

### SEO-013 — `docs/research-resources/` legacy and stray files indexed; `.bk` files exist alongside live MD
- Severity: LOW
- Impact: 2
- Effort: S
- Location: `docs/research-resources/distributed-federated-agentic-ai copy.bk`, `distributed-federated-agentic-ai-copy2.bk`, `innovation-lab-guide-q2-2024-en.mdx`, plus the `innovation-lab-guide/` chapter folder.
- Observation: `.bk` files are likely excluded by Docusaurus MD/MDX matching, but the legacy `innovation-lab-guide-q2-2024-en.mdx` is in the sitemap and competes with the canonical chapterized version. The chapter `01-executive-summary` … `11-references` are all indexed without canonicals back to a single hub.
- Recommendation: Delete `.bk` files (or move under `ops/`). Decide canonical for the guide: either (a) delete the legacy single-page route entirely with a redirect to `/docs/research-resources/innovation-lab-guide/`, or (b) add `<link rel="canonical">` from every chapter to the landing if you want the landing to rank. Owner: Blog & editorial + Code quality.
- Evidence: `docs/research-resources/` listing; `build/sitemap.xml` has both legacy and chapter URLs.

### SEO-014 — Blog post `image` frontmatter not exposed as OG card in body posts; mixed image paths
- Severity: LOW
- Impact: 2
- Effort: S
- Location: `blog/2025-08-30-introducing-doulab.md:7` `image: /img/2025-08-30-introducing-doulab.jpg`; `blog/2025-09-22-vigia-futura-foresight-observatory.md` (no `image` frontmatter — confirmed by missing line in read snippet); `blog/2025-09-12-clarityscan-decision-latency.md` no `image` frontmatter; `blog/2026-01-19-coordination-threshold.md:19` `image: /img/blog/2026/2026-01-19-coordination-threshold-hero.png`.
- Observation: Two of four posts lack `image:` frontmatter, so social shares fall back to the site-wide `themeConfig.image: 'img/docusaurus-social-card.jpg'` (`docusaurus.config.ts:57`) — the Docusaurus boilerplate. The introducing-doulab post's image lives at the static root, while the 2026 post correctly nests under `/img/blog/2026/`. Path discipline absent.
- Recommendation: Add `image:` to every blog post; standardize storage path under `/static/img/blog/<year>/`. Replace the site-wide `themeConfig.image` with a branded Doulab card. Owner: Blog & editorial + Brand.
- Evidence: file:line pointers above; `docusaurus.config.ts:57`.

### SEO-015 — `book-clarityscan` and `book-clarityscan-success` are correctly `noindex` but still in sitemap
- Severity: LOW
- Impact: 1
- Effort: S
- Location: `src/pages/book-clarityscan.tsx:25` and `src/pages/book-clarityscan-success.tsx:23` have `<meta name="robots" content="noindex,follow" />`. Sitemap (build artifact reviewed above) does not list them — good — but the route still exists. The `privacy-terms` and `terms-and-conditions` pages are also `noindex` and not in the sitemap, which is intentional.
- Observation: Minor inconsistency: `noindex` pages should generally still be excluded from the sitemap (which they are here, by Docusaurus excluding `/pages` that aren't listed? — actually the sitemap snippet contains both `/privacy-terms` and `/terms-and-conditions` references? Re-read: it does NOT — they were excluded). Actually the privacy-terms / terms pages are missing from the sitemap urlset, consistent with their `noindex`. No bug; documenting as compliance evidence. Light cleanup: add `<link rel="canonical">` self-reference for these pages anyway (already present per grep).
- Recommendation: No action; record as passing.
- Evidence: grep `noindex` returns 5 files; `build/sitemap.xml` urlset does not include those routes.

## Quick wins — top 5
1. **Fix duplicated `/blog/tags/blog/tags/*` URLs in `blog/tags.yml`** (SEO-001). Single-file edit, big SERP-hygiene win.
2. **Generate or remove broken per-page OG cards** (SEO-002). Either ship 1200×630 cards under `/static/img/social/` or point every page at `default-og.jpg` until they exist. Stops broken LinkedIn/Twitter previews.
3. **Add `static/robots.txt` with explicit Sitemap pointer and Disallow on booking flow routes** (SEO-003). Unblocks backlog C5 / D1.
4. **Add `noindex,follow` to every `docs/ops/*` page (or move ops out of docs)** (SEO-004). Stops ops notes from ranking against marketing pages.
5. **Add `<link rel="alternate" type="application/rss+xml">` to global `<Head>`** (SEO-011). Two-line change; enables feed-reader auto-discovery.

## Strategic bets — top 3
1. **Build a Service/Course/Offer JSON-LD pattern and apply across all `src/pages/services/*.tsx` and Vigía Futura** (SEO-005). Material rich-result potential for high-intent commercial queries; pairs with Sales & positioning.
2. **Pre-stage hreflang infrastructure now, before any ES content lands** (SEO-010). Cheap to do empty, expensive to retrofit after ES launch.
3. **Standardize title/description/anchor conventions in `AGENTS.md` and enforce via a lint script** (SEO-007, SEO-012, SEO-014). Compounds across every future page; reduces drift permanently.

## Out of scope / hand-offs
- robots.txt edge directive (`Content-Signal`) source investigation → **Security & privacy** / hosting owner (Cloudflare config).
- OG card asset production (1200×630 PNG/JPG) → **Brand & visual design**.
- Anchor-text rewrites and tagline keyword strategy → **Content & copy** + **Sales & positioning**.
- H1 audit of `<Hero>` component internals → **Code quality** + **Accessibility**.
- Ecosystems stub pages content → **Content & copy** + **IA & UX strategist**.
- Blog post `image` frontmatter discipline → **Blog & editorial**.
- ES translation slug-map → **i18n readiness**.
- MCF/IMM-P keyword cluster mapping (e.g., what queries should each service page rank for) → **MCF/IMM-P domain expert** + **Sales & positioning**.
- Conversion CTA text on case studies (impacts anchor text but owned elsewhere) → **Conversion / lead-gen**.

## Open questions for Luis
1. Is the legacy `/docs/research-resources/innovation-lab-guide-q2-2024-en` route still needed, or should it 301-redirect to the chapterized landing?
2. Are the `docs/ops/**` pages intentionally public? If yes, do you want them indexed (current behavior) or `noindex,follow` (recommended)?
3. Where is the edge-generated `robots.txt` with the invalid `Content-Signal` directive coming from — Cloudflare Pages defaults, a CF Worker, or `_redirects`? This blocks fully closing backlog C5/D1.
4. Confirm canonical brand-title convention: `"<Page> | Doulab"` vs `"<Page> — Doulab"` vs `"<Page>, Doulab"` (all three are in use today).
5. Should `src/pages/ecosystems/redlab.tsx` and `red-incubadoras.tsx` be `noindex` placeholders or be removed from the build until they have real content? They're currently indexed and thin.
6. Do you want `themeConfig.image` (`img/docusaurus-social-card.jpg`) replaced with a Doulab-branded default before per-page cards are produced? This single asset is the fallback for every page that doesn't override.
7. Timeline for ES locale launch — does it justify pre-staging hreflang now (recommended) or defer entirely?
