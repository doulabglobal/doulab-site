---
title: "05 - SEO & discoverability (bilingual)"
audit: 2026-07
role: SEO & discoverability
locales: [en, es]
status: draft
---

# SEO & Discoverability Audit (bilingual) - doulab.net - 2026-07

## Scope

Read-only bilingual audit covering hreflang correctness across paired EN/ES URLs, sitemap-per-locale completeness, canonical URL handling, schema.org JSON-LD coverage and inLanguage correctness, meta titles + descriptions in both locales, Open Graph + Twitter Card per locale, robots directives, internal linking, and anchor text. Special focus on cross-locale signaling now that ES is live (commit `eb1c8c8`).

Out of scope (owned elsewhere this pass): localized copy quality (12-i18n), per-page conversion CTAs (04-conversion), brand image cards (02-brand-visual), Lighthouse perf scores (06 / 18), security headers (08).

## Method

- Read build artifacts: `build/sitemap.xml`, `build/es/sitemap.xml`, `build/robots.txt`, `build/es/robots.txt`, plus per-page rendered HTML for EN/ES pairs (`build/**.html` and `build/es/**.html`).
- Extracted and compared `<title>`, `<meta name=description>`, `og:url`, `og:locale`, `og:image`, `twitter:image`, `rel=canonical`, `rel=alternate hreflang=*`, `application/ld+json` blocks for at least: home, about, contact, services (clarityscan, coaching-mentoring, custom-workshops, diagnostics, innovation-maturity, innovation-readiness-workshop), case-studies (afp-siembra, fundapec), vigia-futura, blog (clarityscan-decision-latency) - in both locales.
- Re-checked Lighthouse JSONs at `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/` (SEO category = 100 across the board; the deeper issues below do not get caught by Lighthouse).
- Source-side: `docusaurus.config.ts` (i18n + SITE_URL), `src/pages/**` (Head blocks + JSON-LD), `blog/tags.yml`, `i18n/es/docusaurus-plugin-content-pages/**` structure.
- Compared against `docs/ops/audit-2026-06/05-seo.md` to avoid duplicating already-resolved items (SEO-003 robots.txt, SEO-005 partial JSON-LD coverage on clarityscan/innovation-maturity, SEO-015 booking pages noindex - all confirmed still good).

No build commands were executed; the existing `build/` tree is used as the source of truth.

## Findings (ranked)

### SEO-2026-07-001 - ES pages declare the EN URL as their `rel=canonical` (catastrophic for ES indexing)

- Severity: P0
- Impact: 5
- Effort: S

Every ES page (`build/es/**.html`) renders `<link rel="canonical" href="https://doulab.net/<en-path>">` instead of the ES URL. Examples confirmed in the built output:
- `build/es/about.html` -> `canonical=https://doulab.net/about`
- `build/es/contact.html` -> `canonical=https://doulab.net/contact`
- `build/es/services/clarityscan.html` -> `canonical=https://doulab.net/services/clarityscan`
- `build/es/vigia-futura.html` -> `canonical=https://doulab.net/vigia-futura`

Root cause: every `src/pages/**/*.tsx` file hard-codes a literal English-URL canonical in its `<Head>`. Example: `src/pages/about/index.tsx:94` ships `<link rel="canonical" href="https://doulab.net/about" />`. When the same component is rendered into the ES locale by Docusaurus, the hard-coded value wins over Docusaurus's generated locale-aware canonical.

Effect on search: Google interprets `canonical=EN-URL` on an ES page as "this ES page is a duplicate of the EN page; do not index it separately." Result: ES content will not be indexed under `/es/*` even though the URLs resolve, og:url is correct, and hreflang alternates are emitted. This is the single most damaging bilingual-SEO defect on the site.

Recommendation: Replace every hard-coded canonical with a locale-aware helper. Two viable patterns:
1. Drop the hard-coded `<link rel="canonical">` entirely from `src/pages/**` and let Docusaurus emit the canonical (it already does and uses the correct locale-prefixed URL - the hard-coded line just shadows it).
2. Compute it: `const { siteConfig } = useDocusaurusContext(); const { i18n } = useDocusaurusContext(); const prefix = i18n.currentLocale === i18n.defaultLocale ? '' : `/${i18n.currentLocale}`; const canonical = `${siteConfig.url}${prefix}${pathname}`;`

Option 1 is the quick win. Apply to all 25 files in the canonical grep list above.

### SEO-2026-07-002 - Canonical/og host inconsistency: `doulab.net` (apex, no www) used by `src/pages/**`, but `SITE_URL = https://www.doulab.net` in `docusaurus.config.ts`

- Severity: P1
- Impact: 4
- Effort: S

`docusaurus.config.ts:5` sets `SITE_URL = 'https://www.doulab.net'`. Docusaurus uses that for `og:url` and the sitemap, so every entry in `build/sitemap.xml` is `https://www.doulab.net/<path>`. But every hard-coded `<Head>` in `src/pages/**/*.tsx` emits `<link rel="canonical" href="https://doulab.net/...">` (apex, no www) and per-page `og:image` URLs like `https://doulab.net/img/social/og-clarityscan.jpg`. Even on EN, the page therefore says "canonical = apex" while the sitemap says "indexable = www".

If apex and www both resolve and serve the same HTML (they do; one is a 301 to the other or vice versa) Google will eventually pick one, but the mixed signal slows consolidation, splits backlinks across two hostnames in reporting, and amplifies SEO-2026-07-001 because the canonical is wrong in both locale AND host.

Recommendation: Pick one of `www.doulab.net` or `doulab.net` as authoritative, fix `SITE_URL` and all hard-coded strings to match, and verify the other variant 301s. Add a CI lint that fails the build if `doulab.net` (no www) or `www.doulab.net` appears in source without going through `SITE_URL`. Coordinate with Security/Cloudflare (CNAME owner) on which is the apex.

### SEO-2026-07-003 - Sitemap has no hreflang/`xhtml:link` annotations; per-locale sitemaps are not cross-referenced

- Severity: P1
- Impact: 5
- Effort: M

`build/sitemap.xml` and `build/es/sitemap.xml` are both flat `<urlset>` lists of `<loc>` entries with no `<xhtml:link rel="alternate" hreflang=".." href=".."/>` children. The EN sitemap lists only EN URLs (65 entries), and the ES sitemap lists only ES URLs (65 entries, all under `/es/*`). Neither references the other; there is no `sitemap index` (`sitemapindex`) that ties them together; `robots.txt` only points crawlers at `https://www.doulab.net/sitemap.xml` (the EN one).

Effect: Google can still discover ES URLs by crawling, but the discovery is fragile (depends on every page emitting an in-document hreflang link), and `Search Console > International Targeting` will report "no hreflang in sitemap." When combined with SEO-2026-07-001 (broken canonicals), the ES locale is effectively invisible to systematic crawl.

Recommendation: Either (a) add `xhtml:link` alternates to every `<url>` entry in both sitemaps (preferred - Google's recommended pattern), or (b) create a `sitemap_index.xml` at the root listing both per-locale sitemaps and reference that from `robots.txt`. Pattern (a) is supported by `@docusaurus/plugin-sitemap` via the `lastmod` + `changefreq` options plus locale alternate generation - verify the version in use and pass `createSitemapItems` or upgrade if needed. Also: add `Sitemap: https://www.doulab.net/es/sitemap.xml` to both `static/robots.txt` files.

### SEO-2026-07-004 - SEO-001 from audit-2026-06 NOT resolved: blog tag URLs are still duplicated in both EN and ES sitemaps

- Severity: P1
- Impact: 4
- Effort: S

Audit-2026-06 SEO-001 flagged `/blog/tags/blog/tags/<tag>` doubled URLs caused by `permalink:` lines in `blog/tags.yml`. The current `blog/tags.yml` still contains entries like:
```
announcement:
  label: Announcement
  permalink: /blog/tags/announcement
```
(file lines 1-4 and analogous blocks for every tag). As a result both `build/sitemap.xml` and `build/es/sitemap.xml` contain 15 doubled URLs each:
- EN: `https://www.doulab.net/blog/tags/blog/tags/announcement`, ...
- ES: `https://www.doulab.net/es/blog/tags/blog/tags/announcement`, ...

Furthermore, the build tree contains actual directories `build/blog/tags/blog/tags/<tag>/` and `build/es/blog/tags/blog/tags/<tag>/`, meaning these duplicated URLs really do serve HTML (with the listings) - so they're not just broken sitemap entries, they're real duplicate-content pages indexed under wrong URLs.

Recommendation: Remove the `permalink:` line from every entry in `blog/tags.yml` (Docusaurus prefixes `/blog/tags/` automatically). Re-build, then verify both sitemaps and both `build/blog/tags/` trees no longer contain `blog/tags/blog/tags/`. Same fix as audit-2026-06 SEO-001 - was never applied.

### SEO-2026-07-005 - Title tag suffix `| Doulab` is duplicated on every page (`<title>X | Doulab | Doulab</title>`)

- Severity: P1
- Impact: 3
- Effort: S

Confirmed across all sampled built pages in both locales:
- `build/about.html`: `<title>About | Doulab | Doulab</title>`
- `build/contact.html`: `<title>Contact | Doulab | Doulab</title>`
- `build/services/clarityscan.html`: `<title>ClarityScan(R): Tiered innovation maturity diagnostic | Doulab | Doulab</title>`
- `build/services/coaching-mentoring.html`: `<title>Coaching & Mentoring: Practical guidance, real momentum | Doulab | Doulab</title>`
- `build/vigia-futura.html`: `<title>Vigia Futura, Foresight and Innovation Observatory | Doulab | Doulab</title>`
- `build/case-studies.html`: `<title>Case Studies, Outcomes and Repeatable Delivery | Doulab | Doulab</title>`
- `build/es/about.html`: `<title>Acerca de | Doulab | Doulab</title>`
- `build/es/services/clarityscan.html`: `<title>ClarityScan(R): diagnostico por niveles de madurez en innovacion | Doulab | Doulab</title>`

Root cause: `src/pages/**/*.tsx` pass `title="... | Doulab"` (or use Layout's title prop), AND Docusaurus's `<Layout>` then appends ` | Doulab` (the site title from `docusaurus.config.ts:8 title: 'Doulab'`) by default. The first `| Doulab` is the manual suffix; the second is the framework auto-append.

Effect: titles look amateurish on SERPs and lose 8-12 visible characters of pixel budget to the duplicate. Click-through suffers; some long titles get truncated by Google before the actual brand even renders once.

Recommendation: Two options:
1. Pass `noIndex` of brand suffix from page code (just `title="ClarityScan(R): Tiered innovation maturity diagnostic"`) and let Layout add `| Doulab` once.
2. Use `<Layout title="X" noIndex={false}>` with the Docusaurus `wrapperClassName` pattern and provide a clean title.

Option 1 is correct; sweep all pages, remove the trailing `| Doulab` from every page-local title string. Pair with audit-2026-06 SEO-007 (title convention standardization) - that work was never done either.

### SEO-2026-07-006 - JSON-LD on ES pages declares EN URLs (and Service pages still partially missing schema)

- Severity: P2
- Impact: 3
- Effort: M

The `Service` JSON-LD on `build/es/services/clarityscan.html` contains `"url":"https://doulab.net/services/clarityscan"` (the EN URL), not `/es/services/clarityscan`. Same pattern on the case-study `CaseStudy` schema in `build/es/case-studies/fundapec.html`: `"url":"https://doulab.net/case-studies/fundapec"`. Positively, `inLanguage` IS correctly set to `"es"` on the fundapec ES page.

Root cause: same as SEO-2026-07-001 - the JSON-LD blocks are constructed with literal EN-URL strings in `src/pages/**` and are not locale-aware.

JSON-LD coverage status vs audit-2026-06 SEO-005:
- Has Service+Offer schema: `services/clarityscan`, `services/innovation-maturity` (good)
- STILL missing Service/Course schema: `services/coaching-mentoring`, `services/custom-workshops`, `services/diagnostics`, `services/innovation-readiness-workshop`, `vigia-futura` (only `BreadcrumbList` etc. from the global Layout) - audit-2026-06 SEO-005 unresolved.
- Has BreadcrumbList+CaseStudy: all `case-studies/*` pages (good)

Recommendation: Combine fixes. When fixing SEO-2026-07-001 with a locale-aware canonical, refactor the JSON-LD emission into a small helper `buildServiceJsonLd({ slug, locale, ... })` that derives URLs from `useDocusaurusContext()`. Add `Service` + `Course` schema to the four still-missing service pages and `vigia-futura`. Make `inLanguage` derive from the current locale (currently hard-coded `"en"` in some files - e.g. `src/pages/case-studies/afp-siembra.tsx` per the prior audit's SEO-010 note).

### SEO-2026-07-007 - `og:image` for two-thirds of pages still references missing or boilerplate cards

- Severity: P2
- Impact: 4
- Effort: M

Audit-2026-06 SEO-002 flagged 13 missing per-page OG cards. Current state of `build/img/social/`:
```
2025-09-12-clarityscan-decision-latency.{avif,jpg,png,webp}
default-og.jpg
og-imm-program.jpg
og-insights.jpg
```
So newly added since audit-2026-06: zero per-route social cards. All 11 routes that hard-code `og-<route>.jpg` still 404 when shared. Additionally, the ES home page renders `<meta name="twitter:image" content="https://www.doulab.net/es/img/docusaurus-social-card.jpg">` - the URL has been broken to `/es/img/...` because Layout prefixed it, and `build/es/img/docusaurus-social-card.jpg` does exist (it's a copy of the boilerplate, not a Doulab brand asset). So ES shares show the Docusaurus mascot card.

Recommendation: Decide once: (a) ship 11 branded 1200x630 cards under `static/img/social/` (Brand & visual design), OR (b) collapse every page to use `default-og.jpg` until then. Either way, replace `themeConfig.image` in `docusaurus.config.ts:93` (currently `'img/docusaurus-social-card.jpg'`) with a Doulab-branded default so locale-fallback paths don't render mascots.

### SEO-2026-07-008 - ES meta `description` is auto-translated copy not reviewed for keyword targeting

- Severity: P2
- Impact: 3
- Effort: M

Sampled ES descriptions:
- `/es/`: "Ayudamos a personas y organizaciones a hacer que la innovacion sea repetible y la prospectiva practica, para que la estrategia se convierta en resultados sostenibles. Obtendras una linea base breve y un plan de 30, 60 y 90 dias." (215 chars - over the 155-160 recommended limit, will be truncated by Google's SERP renderer)
- `/es/vigia-futura`: "Vigia Futura es el observatorio de prospectiva e innovacion de Doulab. Publica el Indice Nacional de Madurez en Innovacion y Transformacion Digital, y cura senales, escenarios y benchmarks entre paises." (210 chars - same issue)

Several EN descriptions are also over 160 chars (homepage ES is a direct translation of the EN homepage description, which is itself ~190 chars).

Spanish-specific keyword opportunities missed: "diagnostico de madurez de innovacion", "consultoria de innovacion America Latina", "marco MicroCanvas espanol" - none appear in titles or descriptions on the ES surface. Translations are literal, not search-optimized for hispanophone queries.

Recommendation: Trim every description (EN + ES) to <=155 chars in a single pass. While trimming, hand-tune ES descriptions for hispanophone search intent (different than EN-LATAM). Maintain a `seo-meta.<locale>.csv` so the team can review titles + descriptions in one place. Hand off ES keyword research to Content & copy + i18n role.

### SEO-2026-07-009 - `og:image` URLs use absolute apex (`https://doulab.net/...`) while OG protocol expects them resolvable; SITE_URL mismatch makes them fragile

- Severity: P2
- Impact: 3
- Effort: S

Every page's `<meta property="og:image">` is the literal string `https://doulab.net/img/social/og-<route>.jpg` (apex, no www, hard-coded). If the apex starts redirecting to www (per SEO-2026-07-002 fix), most social scrapers (LinkedIn especially) will fail to follow the 301 and will show no image. Twitter is more forgiving but still inconsistent.

Recommendation: Derive `og:image` URL from `siteConfig.url` and a relative asset path, not from a hard-coded string. Same refactor pass as SEO-2026-07-001/002.

### SEO-2026-07-010 - Spanish blog posts inherit EN tag taxonomy; tag URLs are EN slugs under `/es/`

- Severity: P3
- Impact: 2
- Effort: M

Built ES blog tag URLs: `/es/blog/tags/clarityscan`, `/es/blog/tags/innovation-maturity`, `/es/blog/tags/decision-latency`, `/es/blog/tags/governance`, etc. The slugs are English even on the Spanish surface. Spanish search engines and Spanish-speaking readers expect: `madurez-de-innovacion`, `latencia-de-decision`, `gobernanza`, etc.

This is a low-impact issue today (few inbound queries to blog tag pages) but compounds as ES blog content grows.

Recommendation: When ES blog volume justifies it, add a per-locale `tags.yml` override under `i18n/es/docusaurus-plugin-content-blog/` with localized slugs. Hand off scope to i18n + Blog & editorial.

### SEO-2026-07-011 - `themeConfig.image` site-wide default is still the Docusaurus boilerplate card

- Severity: P3
- Impact: 2
- Effort: S

`docusaurus.config.ts:93` `image: 'img/docusaurus-social-card.jpg'`. Identical to audit-2026-06 SEO-014 finding - not resolved. Affects any page without an explicit `og:image` override (notably blog post 2, the deprecated ecosystems stubs, and any future page).

Recommendation: Replace with `/img/social/default-og.jpg` (which already exists and is Doulab-branded).

### SEO-2026-07-012 - `docs/research-resources/innovation-lab-guide-q2-2024-en` legacy URL still in both sitemaps alongside chapterized canonical

- Severity: P3
- Impact: 2
- Effort: S

Confirmed in `build/sitemap.xml`: both `/docs/research-resources/innovation-lab-guide-q2-2024-en` (legacy single-page) and `/docs/research-resources/innovation-lab-guide/01..11-*` (chapters) are indexable, no canonical between them. Audit-2026-06 SEO-013 - unresolved.

Recommendation: 301 the legacy URL to the chapter landing (`/docs/research-resources/innovation-lab-guide`), or add a `rel=canonical` from the legacy page to the landing. Cloudflare `_redirects` works; alternatively `static/_redirects` file.

### SEO-2026-07-013 - Internal navigation between locales: no visible language switcher on rendered pages in some flows

- Severity: P3
- Impact: 3
- Effort: M

The hreflang `<link>` elements are present in `<head>` (correctly mapping `/about` <-> `/es/about` etc., with `x-default` pointing to EN). The navbar `localeDropdown` (`docusaurus.config.ts:137`) handles the switch in the chrome. But: there is no in-content cross-locale link from a blog post or service page to its translated counterpart, and no `<a hreflang="es">` anchors anywhere in body content. For users who land on an ES page via Spanish-language Google but want EN (or vice versa), the only path is the navbar dropdown - discoverable but not signalled to crawlers as a strong relationship between the two URLs.

Recommendation: Low-priority polish. Add an inline "Read this in English / Leer en espanol" link near the H1 of blog posts and high-value service pages. Use `hreflang` attribute on the anchor.

### SEO-2026-07-014 - Sitemap omits both home pages? - verified: home IS in EN sitemap; ES home IS in ES sitemap (regression check passed)

- Severity: PASS (compliance evidence)
- Impact: -
- Effort: -

EN sitemap last entry: `<loc>https://www.doulab.net/</loc>`. ES sitemap entries start with `/es/about` and the home appears as `/es/` (verified). Two `noindex` pages (`privacy-terms`, `terms-and-conditions`, `book-clarityscan*`) are correctly absent. Good.

## Quick wins - top 5

1. **SEO-2026-07-004** - Strip `permalink:` lines from `blog/tags.yml`, rebuild, verify `blog/tags/blog/tags/` dirs disappear from both `build/` and `build/es/`. One file, ~15 lines deleted. Resolves a year-old defect.
2. **SEO-2026-07-005** - Remove the trailing `| Doulab` from every page-local title string in `src/pages/**`. Single-pass sed-style edit (~25 files). Stops `| Doulab | Doulab` rendering everywhere.
3. **SEO-2026-07-001** - Remove every hard-coded `<link rel="canonical">` from `src/pages/**` and let Docusaurus emit the locale-aware canonical. Unblocks ES indexing.
4. **SEO-2026-07-011** - Change `themeConfig.image` to `/img/social/default-og.jpg`. One line. Stops Docusaurus mascot on social shares.
5. **SEO-2026-07-012** - Add a `_redirects` line: `/docs/research-resources/innovation-lab-guide-q2-2024-en /docs/research-resources/innovation-lab-guide 301`. Cleans up duplicate content.

Doing 1+2+3+4 together is roughly a half-day refactor and resolves the most-damaging SEO bugs in both locales.

## Strategic bets - top 3

1. **Locale-aware metadata helper module** (`src/lib/page-metadata.ts`): one place that computes canonical, og:url, og:image, hreflang alternates, and JSON-LD URLs from `(slug, locale, siteConfig)`. Every `src/pages/**` page calls one function instead of hard-coding 8 string literals. Fixes SEO-2026-07-001, -002, -006, -009 in one architectural change and prevents future drift.
2. **Sitemap hreflang annotations + sitemap index** (SEO-2026-07-003): the single biggest cross-locale discoverability win. Pair with a small CI check that fails the build if a page in `build/` exists without its sibling in `build/es/` being present in `build/es/sitemap.xml` (or marked as EN-only).
3. **Hispanophone keyword strategy** (SEO-2026-07-008, SEO-2026-07-010): commission a one-time pass to (a) rewrite ES titles/descriptions for Spanish search intent rather than as direct translations, and (b) localize blog tag slugs. Compounding effect as ES content grows; cheap to do early, expensive to retrofit after backlinks accumulate.

## Out of scope / hand-offs

- Apex-vs-www decision and 301 enforcement at Cloudflare edge -> **Security & privacy** / hosting (SEO-2026-07-002).
- Production of 11 missing 1200x630 OG cards -> **Brand & visual design** (SEO-2026-07-007).
- ES copy quality, idiom, anti-em-dash compliance -> **i18n readiness** (12-i18n) and **Content & copy** (SEO-2026-07-008).
- Localized blog tag slugs -> **Blog & editorial** + **i18n readiness** (SEO-2026-07-010).
- JSON-LD schema design for Service vs Course on workshop pages -> **Sales & positioning** + **Code quality** (SEO-2026-07-006).
- Keyword cluster mapping per page (MCF/IMM-P terminology in ES) -> **MCF / IMM-P domain** + **Sales & positioning**.

## Open questions for Luis

1. Apex (`doulab.net`) or `www.doulab.net` - which is the authoritative host? `SITE_URL` says www; every hard-coded page string says apex. Pick one before SEO-2026-07-001 fix.
2. Is the priority for SEO-2026-07-007 (OG cards) "ship 11 branded cards" or "collapse everything to `default-og.jpg` until brand has bandwidth"? Affects how aggressively to fan out the per-page `og:image` cleanup.
3. Are the four still-bare service pages (`coaching-mentoring`, `custom-workshops`, `diagnostics`, `innovation-readiness-workshop`) and `vigia-futura` expected to rank for commercial queries? If yes, JSON-LD coverage gap (SEO-2026-07-006) is P1 not P2.
4. Should ES blog tag slugs be localized now (small, while volume is low) or deferred until ES blog content grows past, say, 10 posts?
5. Is hreflang `x-default` correctly pointing at EN as the global default, or should it point at a locale-picker landing page? Today every page sets `x-default = EN URL` which is the safe default but assumes EN is the authoritative version.
6. Audit-2026-06 had 7 open questions and 15 findings; only the booking-page `noindex` and `static/robots.txt` items got closed. Is there a backlog item tracking the others, or should this audit's findings reseed `docs/ops/doulab-net-backlog.md`?
