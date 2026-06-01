---
title: "Audit 2026-07 — Bilingual full re-audit (consolidated index)"
status: complete
---

# Audit 2026-07 — Bilingual full re-audit

## Why this audit

Per the [`feedback_full_audit_at_backlog_end`](../../../../memory) rule: when the active backlog drains, rerun the full 19-role audit. The prior audit was [audit-2026-06](../audit-2026-06/00-index.md). Since then:

- F-batch closed (F-1 through F-5 RESOLVED; F-2 expanded with dark-mode + display/interaction follow-ups).
- E-K1 source-side `<picture>` wiring closed.
- **E-I2 ES launch landed**: bilingual site live at `/` (EN) and `/es/*` (ES) as of commit `eb1c8c8`. 48 ES translation files mirror the EN content.
- E-V4 Docusaurus v4 future flag trial reverted — filed for separate investigation.

This audit's scope is **bilingual**: every role assesses both the EN and ES surfaces. Viewport + Lighthouse capture both locales.

## Methodology

19 roles, fanned out in parallel per [`doulab-audit-role-set`](../../../../memory). Each role writes a uniform-contract markdown file (Scope / Method / Findings / Quick wins / Strategic bets / Out-of-scope handoffs / Open questions). After all 19 land, this file is rewritten as the consolidated index (cross-role themes, top-30, deduped quick wins, deduped strategic bets, P0 list, deduped open questions, 4-phase implementation phasing).

## Live verification artifacts (this pass)

- **Viewport sweep**: `ops/audits/doulab-net/viewport-2026-07-prod-v1/` — 18 pages × 6 anchors × 2 locales = 216 captures (achieved 216/216). Harness: `sweep.mjs` (extended from v5.2 with a `locale` dimension; serves from local prod at `http://127.0.0.1:4173`).
- **Lighthouse**: `ops/audits/doulab-net/lighthouse-2026-07-prod-v1/` — 18 mobile + 4 desktop × 2 locales = 44 runs. Harness: `run.mjs`.

## Role files

| # | Role | File |
|---|---|---|
| 01 | IA & UX strategist | [01-ia-ux.md](01-ia-ux.md) |
| 02 | Brand & visual design | [02-brand-visual.md](02-brand-visual.md) |
| 03 | Content & copy strategist | [03-content-copy.md](03-content-copy.md) |
| 04 | Conversion / lead-gen | [04-conversion.md](04-conversion.md) |
| 05 | SEO & discoverability | [05-seo.md](05-seo.md) |
| 06 | Performance & frontend engineering | [06-performance.md](06-performance.md) |
| 07 | Accessibility (WCAG 2.2 AA) | [07-accessibility.md](07-accessibility.md) |
| 08 | Security & privacy | [08-security-privacy.md](08-security-privacy.md) |
| 09 | Analytics & measurement | [09-analytics.md](09-analytics.md) |
| 10 | Code quality & architecture | [10-code-quality.md](10-code-quality.md) |
| 11 | Blog & editorial | [11-blog-editorial.md](11-blog-editorial.md) |
| 12 | i18n readiness (EN→ES parity) | [12-i18n.md](12-i18n.md) |
| 13 | MCF / IMM-P® domain expert | [13-mcf-imm-domain.md](13-mcf-imm-domain.md) |
| 14 | Behavioral economics | [14-behavioral-economics.md](14-behavioral-economics.md) |
| 15 | Behavioral psychology / persuasion ethics | [15-behavioral-psychology.md](15-behavioral-psychology.md) |
| 16 | Sales & positioning (buyer-journey) | [16-sales-positioning.md](16-sales-positioning.md) |
| 17 | Mobile-first / responsive | [17-mobile-responsive.md](17-mobile-responsive.md) |
| 18 | Lighthouse (predicted + live) | [18-lighthouse.md](18-lighthouse.md) |
| 19 | Viewport matrix (6 anchors × 2 locales) | [19-viewport-matrix.md](19-viewport-matrix.md) |

## Consolidation

Total findings across the 19 role files: **~220** (15 IAUX, 7 BRAND, 15 COPY, 12 CONV, 14 SEO, 11 PERF, 14 A11Y, 13 SEC, 19 ANLT, 11 CODE, 18 BLOG, 20 I18N, 15 DOMN, 11 BEHE, 12 BEHP, 24 SALES, 10 MOBL, 10 LH, 9 VP — counted from findings tables; many cross-reference each other).

### 1. Cross-role themes (≥3 roles)

- **T1 — Locale-aware metadata is broken sitewide.** Every ES page declares an EN-URL `rel=canonical`, an apex-host `og:image`, and EN-URL JSON-LD; ES sitemaps lack hreflang. ES launch is invisible to organic search. [IAUX-101, SEO-2026-07-001 / -002 / -006 / -009, I18N-005 / -020]
- **T2 — Bilingual full-source TSX duplication.** 48 ES `.tsx` files clone EN structure verbatim; analytics keys, schema-org URLs, RSS fetchers, `useEffect` blocks all live in two files; drift already starting (`services/index.tsx` -5 lines, `index.tsx` +1). [CODE-101, CODE-103, ANLT-011, IAUX-115]
- **T3 — ClarityScan time-claim drift remains a P0 ethics breach.** Site says 15-20 min; canonical blog says 30-45 min. Now duplicated across both locales in 14+ surfaces. [BEHP-001, BEHP-002, BEHP-011, BLOG-001]
- **T4 — CHF-only pricing + EN-only Microsoft Bookings URLs cripple ES/LATAM funnel.** Stripe link, success URL, and `booking.doulab.net/{discovery,briefing}` are all locale-agnostic; ES buyer pays in CHF, lands on EN booking page, returns to EN success page. [CONV-2026-07-001 / -005 / -011, SALES-101, BEHE-004 / -011, I18N (handoff)]
- **T5 — `data-cta` instrumentation never shipped; ES now doubles the unmeasurable surface.** No click delegate exists; `wwu_*` ids break the `cta.*` taxonomy; locale not a dimension; outbound + downloads + 404 + paid-conversion all unmeasured. [ANLT-001 / -002 / -006 / -007 / -010 / -014, CONV-2026-07-004]
- **T6 — Glossary drift across ES translation batches.** "Gate" → compuerta (216) vs punto de control (10) vs untranslated; "Case studies" → estudio vs éxito; CTA verb Reserva vs Agenda vs Programa; cocrear vs co-crear; MCF version-string forms. [I18N-001 / -002 / -003, COPY-102 / -105 / -106 / -115]
- **T7 — Render-blocking 117 KB CSS + 432 KB main bundle stall mobile LCP at 6+ s.** ~93% of LCP is render-delay; CSS 76% unused; font preload misses the hashed URL; ES heavier because longer text-LCP. [PERF-2026-07-001 / -002 / -005 / -007, LH-001, LH-003]
- **T8 — `book-clarityscan-success` still auto-popups + claims false success + emits no conversion event; bilingual.** Highest-trust moment in funnel, untouched since 2026-06, now doubled by ES. [CONV-2026-07-002, ANLT-007, BEHE-001, BEHP-009 adj.]
- **T9 — `--dl-green` (#72c53c) text-on-white + IMM funnel labels + paragraph-link contrast fail WCAG AA across the IMM/ClarityScan/IMM-DT family.** Drives a11y scores to 88-89. [A11Y-2007-01 / -02 / -03 / -07, LH-006]
- **T10 — `aria-allowed-role` + `list` semantics broken on proofStrip/cardGrid/Roadmap.** `role="listitem"` on `<picture>` and `<article>`; `<ol>` with `<article>` children. [A11Y-2007-04 / -05, LH-006c/d]
- **T11 — Brand-mark, framework-expansion, and version drift on the highest-traffic pages.** MCF mis-expanded "Methodology Coherence Framework" on Vigía Futura (both locales); VIF "Incubation" vs canonical "Incubanet"; home strips ®/accent from ClarityScan + Vigía Futura; `MicroCanvas® Framework 2.1` regression in `innovation-readiness-workshop.tsx`. [DOMN-001 / -002 / -003 / -009, COPY-103]
- **T12 — LATAM positioning invisible everywhere; ES is literal translation of EN sales copy.** No geographic anchor on home/About; `areaServed: ['Global']` on JSON-LD; audience tiles lead "Startups" when case book is 100% regulated finance + public sector; ES CTAs push self-serve Stripe to a committee-buying culture. [SALES-104 / -105 / -112, COPY-104, BEHE-011]
- **T13 — Sitemap + hreflang missing; `| Doulab | Doulab` double-suffix; `/blog/tags/blog/tags/*` doubled URLs still shipping (year-old defect).** [SEO-2026-07-003 / -004 / -005, I18N-005]
- **T14 — Microsoft Bookings vs Google Calendar processor mismatch in privacy-terms (bilingual).** Largest GDPR/nFADP accuracy gap; doubled by ES. [SEC-101, ANLT-009 handoff]
- **T15 — Justified hero subtitles produce river-gaps on mobile in both locales (P0 image-confirmed on /es/contact, /case-studies, /es/home).** [MOBL-001 / -006 / -007 / -009, BRAND-105, VP-001 / -002]
- **T16 — Authority/social-proof thinness: founder unnamed on About; no testimonials; homepage lacks logo strip; case-study Outcomes lack quantified before/after + named quote.** [BEHP-003 / -005, BEHE-003, SALES-102 / -108 / -110]
- **T17 — `book-clarityscan` dead route still ships in both locales (auto-popup, inverts paid-first model).** [CONV-2026-07-007, IAUX-105]
- **T18 — Em-dashes still ship in ES blog bodies (6 instances) violating the no-em-dash rule.** [BLOG-004, COPY-112]
- **T19 — `Doulab AI` orphan `intro.mdx` translated verbatim into ES; contradicts consulting positioning.** [IAUX-104]

### 2. Top-30 findings (impact desc, effort asc)

Rank = impact / effort_weight (S=1, M=3, L=8). P0 ethics + canonical-host fixes ranked first.

| Rank | ID | Role | Sev | Impact | Effort | One-line |
|---|---|---|---|---|---|---|
| 1 | IAUX-101 / SEO-2026-07-001 | 01 / 05 | P0 | 5 | S | ES pages declare EN URL as canonical — ES indexing blocked |
| 2 | I18N-005 / I18N-020 | 12 | P0 | 5 | M | No hreflang in sitemaps or HTML head; no sitemap_index |
| 3 | BEHP-001 / BEHP-002 / BLOG-001 | 15 / 11 | P0 (ethics) | 5 | S | ClarityScan time drift 15-20 vs 30-45 across 14+ surfaces, bilingual |
| 4 | CONV-2026-07-002 | 04 | P0 | 4 | S | Stripe success page auto-popups + false success + no event, bilingual |
| 5 | DOMN-001 | 13 | P0 | 5 | S | MCF mis-expanded "Methodology Coherence Framework" both locales |
| 6 | DOMN-002 | 13 | P0 | 4 | S | VIF mis-expanded "Incubation" vs canonical "Incubanet" |
| 7 | DOMN-003 | 13 | P0 | 4 | S | Home strips ® from ClarityScan and accent from Vigía Futura |
| 8 | DOMN-004 | 13 | P0 | 4 | S | `diagnostics.tsx` "Built on … IMM" should be IMM-P® |
| 9 | DOMN-010 | 13 | P0 | 4 | M | IMM-DT ES translation parity unverified — likely EN holdouts |
| 10 | I18N-001 | 12 | P0 | 5 | M | Gate glossary drift (compuerta 216 / punto de control 10 / gate 1) |
| 11 | I18N-002 | 12 | P0 | 5 | S | Casos de estudio (navbar/footer) vs Casos de éxito (page H1/SERP) |
| 12 | SEC-101 | 08 | P1 | 4 | S | Privacy-terms (EN+ES) names Google Calendar; live processor is Microsoft Bookings |
| 13 | CONV-2026-07-001 | 04 | P0 | 4 | M | CHF-only pricing, no USD/local anchor for ES/LATAM |
| 14 | ANLT-006 | 09 | P0 | 5 | M | `data-cta` click delegate never shipped; 99×2 taggings emit no events |
| 15 | ANLT-007 | 09 | P0 | 5 | S | Paid-conversion event on Stripe success page never fires (bilingual) |
| 16 | CODE-101 | 10 | P0 | 5 | L | 26 ES TSX files clone EN structure; drift already starting |
| 17 | PERF-2026-07-001 | 06 | P0 | 5 | S | Font preload misses CSS-resolved hashed URL — wasted 42 KB/load |
| 18 | PERF-2026-07-002 / LH-001 | 06 / 18 | P0 | 5 | M | 117 KB render-blocking CSS, 76% unused; LCP render-delay ~6 s mobile |
| 19 | SEO-2026-07-004 | 05 | P1 | 4 | S | `/blog/tags/blog/tags/*` doubled URLs (year-old defect, both locales) |
| 20 | SEO-2026-07-005 | 05 | P1 | 3 | S | `<title>X | Doulab | Doulab</title>` duplicate suffix sitewide |
| 21 | BRAND-105 / MOBL-001 / MOBL-006 / MOBL-009 / VP-002 | 02 / 17 / 19 | P0 | 5 | S | Justified hero subtitles river-gaps on mobile, both locales |
| 22 | A11Y-2007-01 / -02 / -03 / LH-006 | 07 / 18 | P1 | 5 | S | --dl-green text-on-white + IMM funnel labels + badgeTarget fail 4.5:1 |
| 23 | A11Y-2007-04 / -05 | 07 | P1 | 4 | S | `role="listitem"` on `<picture>`/`<article>`; `<ol><article>` |
| 24 | A11Y-2007-06 | 07 | P1 | 5 | M | aria-label doesn't contain visible link text (cardCta + tier cards) |
| 25 | A11Y-2007-07 / LH-006b | 07 / 18 | P1 | 5 | S | Inline prose-link contrast 1.5:1 + no underline (carve-out needed) |
| 26 | BLOG-002 | 11 | P0 | 5 | S | Vigía Futura blog OG image points to non-existent file (both locales) |
| 27 | BRAND-107 | 02 | P1 | 4 | S | `/es/case-studies` cards show EN "Read the case →" |
| 28 | I18N-008 | 12 | P1 | 3 | S | 9 English fallthrough keys in `code.json` (incl. WCAG-regressing `IconExternalLink.ariaLabel`) |
| 29 | CONV-2026-07-005 | 04 | P1 | 3 | M | `booking.doulab.net/{discovery,briefing}` not locale-aware (EN-only) |
| 30 | I18N-004 | 12 | P1 | 4 | S | ~96 Mermaid node labels untranslated across 4 ES case studies |

### 3. Deduped quick wins (top 10, ≤1 day each)

1. **Strip hard-coded canonicals** from `src/pages/**` (lets Docusaurus emit locale-aware canonical) + fix `themeConfig.image` default (`SEO-2026-07-001 / -011`, `IAUX-101`).
2. **Remove trailing `| Doulab`** from every page-local title string (~25 files) (`SEO-2026-07-005`).
3. **Strip `permalink:` from `blog/tags.yml`**; verify `blog/tags/blog/tags/` directories gone in both locales (`SEO-2026-07-004`).
4. **Fix MCF mis-expansion + VIF "Incubation→Incubanet"** + restore ® and accent on home `ClarityScan®`/`Vigía Futura` + bare-`IMM`→`IMM-P®` in `diagnostics.tsx` (both locales) (`DOMN-001 / -002 / -003 / -004`).
5. **Remove `book-clarityscan-success` auto-popup** + render payment summary + Step 2 of 2 button + emit `cta.conversion.clarityscan.paid` with `{ locale }` (both locales) (`CONV-2026-07-002`, `ANLT-007`, `BEHE-001`).
6. **Fix privacy-terms** Google Calendar → Microsoft Bookings + drop "if applicable" hedge on Stripe (EN + ES + `gdpr-compliance.md`) (`SEC-101`, `SEC-102`).
7. **Glossary sweep**: `navbar.json`/`footer.json` "Casos de estudio" → "Casos de éxito"; `punto de control` (10×) → `compuerta`; `MicroCanvas® Framework 2.1` → `2.2` (8 instances, EN+ES); translate ES "Read the case →" → "Leer el caso →" (`I18N-001 / -002`, `COPY-103`, `BRAND-107`).
8. **Translate 9 `code.json` fallthrough keys** (incl. WCAG-regressing `IconExternalLink.ariaLabel`) (`I18N-008`).
9. **A11y badge + role swap**: `.badgeTarget { color: #0b0e19 }`; convert `proofStrip`/`cardGrid`/`Roadmap` to `<ul>`/`<li>` with no fake `role="listitem"`; flip IMM funnel labels to dark text (`A11Y-2007-02 / -03 / -04 / -05`).
10. **Mobile typography reset**: `@media (max-width: 700px)` strip `text-align: justify` from hero subtitles + `[class*="hero__subtitle"]` guard (kills river-gaps on /es/contact, /case-studies, /es/home) (`MOBL-001`, `BRAND-105`, `VP-002`).

### 4. Deduped strategic bets (top 5)

1. **Locale-aware page metadata helper** (`src/lib/page-metadata.ts`): single function computes canonical, og:url, og:image, hreflang alternates, JSON-LD URLs from `(slug, locale, siteConfig)`. Closes SEO-2026-07-001 / -002 / -006 / -009 + IAUX-101 architecturally.
2. **Kill EN/ES TSX duplication** (`CODE-101`): migrate `src/pages/**` to Docusaurus `<Translate>` + `code.json` + MDX content partials; delete every `i18n/es/docusaurus-plugin-content-pages/*.tsx` clone. Phased — small pages first. Unlocks single-edit instrumentation, single-edit fixes for every other audit role.
3. **Ship `cta-events.ts` click delegate + locale dimension + Stripe `client_reference_id` + Microsoft Bookings `?src=<slot>-<locale>`** (`ANLT-001 / -006 / -007 / -008 / -009 / -014 / -015`). Single 40-line module unlocks every measurement question, including the natural EN-vs-ES experiment.
4. **Bilingual conversion infrastructure**: per-locale Stripe SKU (CHF + USD anchor), per-locale Microsoft Bookings types (`/discovery-es`, `/briefing-es`, `/clarityscan-t2`, `/t3`), per-locale Stripe success URL, locale-namespaced `data-cta` (`CONV-2026-07-001 / -005 / -010 / -011`, `SALES-101 / -112`).
5. **Critical-CSS inlining + bundle split + Mermaid SVG at build time**: `custom.css` 117 KB → ~20 KB core + per-page modules; `main.*.js` 432 KB code-split; Mermaid runtime swap to build-time SVG; SVGO logo (84 KB). Mobile Perf 46-58 → 70-80 target (`PERF-2026-07-002 / -003 / -005 / -007 / -008`, `LH-001b/c`).

### 5. P0 list (every P0 across all roles, with role-file ID)

- **IAUX-101** (01 IA & UX) — ES pages' `<link rel="canonical">` points at EN URL on apex host; ES launch invisible to organic search.
- **IAUX-109** (01) — 3-deep `/services/clarityscan/{audit,diagnostic}` tree ships with zero IA scaffolding (no breadcrumb, no tier-sibling nav).
- **SEO-2026-07-001** (05 SEO) — ES pages declare EN URL as canonical (catastrophic for ES indexing).
- **PERF-2026-07-001** (06 Performance) — Self-hosted Roboto preload misses CSS-resolved hashed URL; 42 KB wasted every page.
- **PERF-2026-07-002** (06) — 117 KB render-blocking CSS, 76% unused, gates FCP/LCP on mobile.
- **CONV-2026-07-001** (04 Conversion) — CHF 150 is the only published currency; ES/LATAM buyer has no localized price.
- **CONV-2026-07-002** (04) — `book-clarityscan-success.tsx` still auto-popups + claims success + emits no conversion event; bilingual.
- **ANLT-006** (09 Analytics) — No `data-cta` click listener; 99 EN + 99 ES taggings produce zero event data.
- **ANLT-007** (09) — Paid-conversion event on Stripe success page never fires (highest-value page on property).
- **DOMN-001** (13 MCF/IMM-P®) — MCF mis-expanded "Methodology Coherence Framework" on Vigía Futura page, both locales.
- **DOMN-002** (13) — VIF expanded as "Vigía Incubation Framework" instead of canonical "Vigía Incubanet Framework".
- **DOMN-003** (13) — Home page strips ® from `ClarityScan` and accent from `Vigía Futura`.
- **DOMN-004** (13) — `diagnostics.tsx` says bare "IMM" in "Built on …" credit; must be "IMM-P®".
- **DOMN-010** (13) — IMM-DT page ES parity unverified; EN-only labels in roadmap horizons likely.
- **BEHP-001** (15 Behavioral psychology) — ETHICS: ClarityScan time-promise drift 15-20 (site) vs 30-45 (canonical blog) across 14+ surfaces, bilingual.
- **BEHP-002** (15) — ETHICS: 12+ `ctaNote="Get your baseline in 15 to 20 minutes."` instances condition buyer via fluency before they understand the offer.
- **CODE-101** (10 Code quality) — EN/ES TSX duplication is full-source mirroring (not translation); drift already starting; unsustainable past ~100 pages.
- **I18N-001** (12 i18n) — "Gate" rendered three ways across ES corpus (compuerta 216, punto de control 10, gate 1).
- **I18N-002** (12) — "Case studies" rendered two ways: navbar/footer "Casos de estudio" vs page H1/SERP "Casos de éxito".
- **I18N-005 / I18N-020** (12) — Sitemaps have zero ES URLs and zero hreflang alternates; no HTML `<head>` hreflang.
- **BLOG-001** (11 Blog & editorial) — `_backup_2025-09-12-…bak` still lives inside `blog/`; contradicts live post.
- **BLOG-002** (11) — Vigía Futura blog OG image (`/img/social/vigia-futura-foresight.jpg`) does not exist (both locales).
- **MOBL-006** (17 Mobile-responsive) — `/es/contact` H1 at 390x844 catastrophic justify-gaps (~50-80px rivers); image-confirmed.
- **MOBL-009** (17) — `/case-studies` index 360x640 BOTH locales: hero river-gaps; image-confirmed.
- **LH-001** (18 Lighthouse) — Render-delay dominates LCP on mobile: ~93-94% of LCP is render-delay across all 5 deep-dives.
- **LH-006** (18) — A11y P0 brand-color contrast failures repeat across 4+ pages (badgeTarget 2.15:1, H3 brand-green 2.15:1, IMM funnel 2.88:1, paragraph link 1.5:1).
- **VP-001** (19 Viewport matrix) — ES home hero subtitle 360x640 wraps to look like overlapping text.
- **BRAND-107** (02 Brand & visual) — `/es/case-studies` project cards show EN "Read the case →" CTA.

### 6. Open questions for Luis (deduped)

**Product / domain**
- **MCF / IMM-P® canon**: confirm `MicroCanvas Framework` (DOMN-001), `Vigía Incubanet Framework` (DOMN-002), canonical IMM-P® 5-phase labels (DOMN-005 conflict between brief and v2.2 Master Deck), ClarityScan® ↔ IMM-P® relationship (standalone vs Tier 1/2/3 of IMM-P®) (DOMN-012).
- **ClarityScan duration truth**: 15-20 min self-serve Snapshot vs 30-45 min analyst Conversation — split into two named products, or unify on one? (BEHP-001)
- **Vigía Futura commercial status**: paid offer, thought-leadership stream, or co-funded program? Drives nav placement and CTA design (SALES-011, COPY-013).

**Pricing / sales**
- **Currency for ES/LATAM**: keep CHF as premium signal, dual-display CHF + USD, or split per-locale Stripe SKU? (CONV-2026-07-001, BEHE-011, SALES-101)
- **ClarityScan T2/T3, IMM-P®, Workshop, Coaching pricing bands** — publish "from CHF X" anchors? (SALES-101, CONV-2026-07-003)
- **Modal ClarityScan tier** for badge placement (BEHE-006).
- **Outcome metrics from named engagements** (AFP Siembra, FUNDAPEC) publishable on home NumbersStrip? (SALES-102, BEHE-009, CONV-2026-07-009)
- **Microsoft Bookings ES service types**: are `/discovery-es`, `/briefing-es`, T2/T3 scoping calendars provisionable? (CONV-2026-07-005 / -010)

**Legal / compliance**
- **Microsoft Bookings vs Google Calendar** — confirm every `booking.doulab.net/*` is Bookings before SEC-101 edit ships.
- **Cloudflare Pages Functions edge-processing disclosure** in privacy-terms? (SEC-103)
- **HSTS preload commitment** (irreversible) (SEC-113).
- **Client logo + testimonial consent** for homepage placement (BEHE-003, BEHP-007 — Runway specifically).

**Tooling / scope**
- **EN/ES TSX merger appetite** now vs after one more pure feature phase? (CODE-101)
- **CSP report endpoint** (same-origin vs Sentry/Report URI)? (SEC-111, ANLT-018)
- **Inline prose-link underline carve-out** vs the `feedback_links_underline_on_hover` rule (A11Y-2007-07, LH-006b — direct conflict; user adjudication required).
- **Glossary canonical confirmations**: `compuerta` for Gate, `Casos de éxito` for case studies, `Reserva` (paid) vs `Agenda` (free) vs `Empieza` (navigational), `cocrear` no-hyphen.
- **`htmlLang` regional flag**: `es-ES` → `es-419` (LATAM) or `es-DO` (I18N-006 / -019).
- **Apex vs www canonical host** (SEO-2026-07-002).
- **Ship 11 missing branded 1200×630 OG cards** or collapse all to `default-og.jpg`? (SEO-2026-07-007)
- **Locale-namespaced `data-cta`** option (a) prefix `cta.es.*` vs (b) sibling `data-locale` attribute (ANLT-001, CONV-2026-07-004).
- **`docs/intro.mdx` "Doulab AI"** orphan: delete, merge, or own? (IAUX-104)
- **/docs → /research rename** after intro+releases relocated (IAUX-113).
- **Founder bio block on About** + LinkedIn + credentials (BEHP-005, SALES-110).

### 7. 4-phase implementation phasing

**Phase G-1 — P0 + emergencies (week 1)**
Smallest, highest-trust, mostly mechanical. Bilingual-aware in every edit.
- Locale-aware metadata helper + strip hard-coded canonicals (IAUX-101, SEO-2026-07-001 / -002 / -006 / -009).
- Sitemap-per-locale hreflang + sitemap_index + robots.txt pointer (I18N-005 / -020, SEO-2026-07-003).
- Reconcile ClarityScan time claim (decide A or B; sweep 14+ surfaces) (BEHP-001 / -002, BLOG-001).
- Strip `book-clarityscan-success` auto-popup, render payment summary + Step 2 of 2, emit `cta.conversion.clarityscan.paid` (CONV-2026-07-002, ANLT-007).
- Domain canon: MCF mis-expansion, VIF Incubanet, home ®/accent, IMM-P® in diagnostics (DOMN-001 / -002 / -003 / -004).
- Privacy-terms Microsoft Bookings + Stripe hedge (SEC-101 / -102).
- Vigía Futura OG image asset + tag-permalink fix + title-suffix sweep (BLOG-002, SEO-2026-07-004 / -005).
- Mobile typography: drop `text-align: justify` <700px (MOBL-001 / -006 / -007 / -009, BRAND-105, VP-001 / -002).
- A11y badge/role/list/funnel-label fixes (A11Y-2007-02 / -03 / -04 / -05, LH-006a/c/d).
- ES `code.json` 9 fallthrough keys (I18N-008).
- ES "Read the case →" + Casos de éxito harmonization + compuerta canonicalization (BRAND-107, I18N-001 / -002).
- Delete `book-clarityscan` route (EN+ES) via `_redirects`; replace `terms-and-conditions` stubs (CONV-2026-07-007, IAUX-105, SEC-106).
- Font preload fix (PERF-2026-07-001).

**Phase G-2 — P1 high-impact quick wins (weeks 2-3)**
- Ship `data-cta` click delegate with `{ cta, locale, path }` (ANLT-006, ANLT-001).
- Rename `wwu_*` ids to `cta.wwu.*` (ANLT-002); rewrite Stripe + Bookings URLs with `?src=<slot>-<locale>` + Stripe `client_reference_id` (ANLT-008 / -009, CONV-2026-07-005).
- Add `scripts/verify-analytics.mjs` + `scripts/i18n-parity-check.mjs` gates (ANLT-013, I18N-013).
- Microsoft Bookings ES types + tier-specific T2/T3 calendars (CONV-2026-07-005 / -010).
- `/work-with-us` FAQ Pricing answer publishes CHF 150 + tier bands (CONV-2026-07-008, SALES-101).
- A11y aria-label fix on cardCta + tier links; inline prose-link underline carve-out (pending user) (A11Y-2007-06 / -07).
- Reorder ClarityScan audience tiles (Public Institutions / Regulated Finance / Foundations first) (SALES-104).
- Geographic anchor line on home + About + `areaServed` JSON-LD update (SALES-105, COPY-104).
- 6-field Snapshot block on every case study; swap case-study primary CTA to briefing (SALES-107 / -109).
- Replace home NumbersStrip activity counts with FUNDAPEC outcome metrics (SALES-102, CONV-2026-07-009, BEHE-009).
- ES Mermaid label translation across 4 case studies (I18N-004).
- ES blog em-dash sweep + `## References` → `## Referencias` + `options.json` ES title/description (BLOG-004 / -013 / -017).
- Add CF analytics → 404 error event + outbound + downloads (ANLT-010 / -014 / -015).
- ESLint flat-config + `npm run lint` + Husky pre-commit (CODE-106).

**Phase G-3 — Strategic bets requiring decisions (weeks 4-6)**
- Bilingual conversion infrastructure: per-locale Stripe SKU, per-locale success URL, dual CHF + USD anchor, ES Bookings types (CONV-2026-07-001 / -005 / -011, SALES-101, BEHE-011).
- Sector landing pages (`/sector/public-sector`, `/sector/regulated-finance`) + procurement page + capability-statement PDF, EN + ES (SALES-111 / -115).
- "Who runs Doulab" + named-principal block + reduce ® density to once-per-page (BEHP-005 / -006, SALES-108 / -110).
- Case-study Outcomes upgrade: 1 quantified before/after + 1 named-with-consent quote + 1 avoided risk per case (BEHP-003, CONV-2026-07-009).
- ClarityScan page reorder around explicit default tier recommendation; tier-2 decoy badge (BEHP-008, BEHE-002 / -006).
- ES tag-label per-locale override (BLOG-010); ES authors.yml (BLOG-014); per-locale RSS feed metadata (BLOG-011).
- CSP report-to endpoint + Privacy-Sandbox Permissions-Policy + enforced-CSP promotion soak (SEC-111, SEC-105).
- Build-time mermaid SVG + critical-CSS inlining + `custom.css` split + lazy-import audit (PERF-2026-07-002 / -003 / -008, LH-001b/c).
- Begin CODE-101 EN/ES TSX merger pilot (smallest pages first: terms-and-conditions, privacy-terms, 404, book-clarityscan*).
- Stand up Lighthouse-CI on Cloudflare preview deploys; Playwright viewport-sweep harness re-baseline.

**Phase G-4 — P2/P3 polish + deferred (weeks 7+)**
- Full CODE-101 migration to `<Translate>` + MDX partials across all remaining pages; delete the rest of `i18n/es/docusaurus-plugin-content-pages/*.tsx`.
- `custom.css` 2,584-line modularization (CODE-110 + CODE-104 real CSS Modules per component).
- Token contract for `--dl-green-text` siblings + dark-mode surface scale + Tier-1 semantic palette utilities (BRAND-101 to BRAND-104, A11Y-2007-01 strategic bet 1).
- `<Lang as="span" code="…">` wrapper for bilingual proper nouns (A11Y-2007-08).
- @axe-core CI gate + Vitest starter suites (A11Y-2007 strategic bet 3, CODE-108).
- IA: visible `<Breadcrumb>` sitewide (IAUX-102); `/contact` vs `/work-with-us` role split (IAUX-107); footer 4-column restructure (IAUX-108); `/docs` → `/research` rename (IAUX-113); 404 cross-locale recovery banner (IAUX-112).
- Bilingual asset deduplication investigation (PERF-2026-07-009 / -010).
- Tune ES surface for LATAM buying culture: "Comparte con tu equipo" + executive-summary PDFs per service/case (SALES-112).
- Editorial cadence floor + field-notes tag (BLOG-003); `<BlogEndCTA />` component (BLOG-009); editorial conventions doc (BLOG-005 / -008 / -014 / -016).
- Founder block + competitive differentiation "Why Doulab" section (SALES-106, BEHP-005, SALES-108).
- HSTS preload decision; remaining SEC P3 polish (SEC-113, SEC-109).
- ES `htmlLang` → `es-419`; ES blog tag-slug localization (I18N-019, SEO-2026-07-010); `<Translate values={{year}}>` footer (I18N-018).
- `docs/intro.mdx` "Doulab AI" resolution (IAUX-104).
- Mobile breakpoint token unification (MOBL-004 / -005).
- Lighthouse re-baseline with compression on local serve (LH-002, LH-007 ES re-run).
- Forced-colors + reduced-motion baselines (VP follow-ups).
