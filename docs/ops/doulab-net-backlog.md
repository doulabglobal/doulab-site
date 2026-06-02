# Doulab.net Backlog (Phase B1)

Phase B status: CLOSED (final commit hashes confirmed).
Phase C status: CLOSED (C3 deferred; C5 blocked by robots source; conversion work completed via C11–C16).
Phase D status: D0 intake; D1 blocked; D2-D19 complete (mapped).
Phase E status: IN PROGRESS (multi-role audit 2026-06; implementation roadmap in 4 sub-phases per docs/ops/audit-2026-06/00-index.md).

Each item includes ID, description, rationale, acceptance criteria, and commit mapping placeholder.

## Phase E — Multi-role audit (2026-06)

Audit deliverables landed; implementation in 4 sub-phases:
- E.1 Truth & integrity (week 1) — broken glyphs, mark/version normalization, zero-byte stubs, broken funnels.
- E.2 Conversion & trust (weeks 2–3) — tier surfacing, pricing transparency, IMM-DT vertical, testimonials, CTA hierarchy.
- E.3 Structural (weeks 4–6) — IA cleanup (/services vs /what-we-do), brand token consolidation, image format strategy, CSP hardening.
- E.4 Strategic (weeks 7+) — ES launch, named case studies, Lighthouse re-baseline, viewport screenshot harness, v4 migration.

### E-A1
- Description: Land 19-role multi-role audit + consolidated index + live Lighthouse/viewport verification artifacts.
- Rationale: Establish evidence-based improvement backlog from independent role audits (IA/UX, brand, copy, conversion, SEO, perf, a11y, security, analytics, code, blog, i18n, MCF/IMM domain, behavioral econ, behavioral psych, sales, mobile, Lighthouse, viewport). ~280 findings surfaced.
- Acceptance criteria:
  - 19 role files + 1 consolidated index under docs/ops/audit-2026-06/.
  - Live Lighthouse JSONs + Playwright viewport PNGs under ops/audits/doulab-net/.
  - AGENTS.md manifest updated with all new ops artifacts.
- Commits: 8d314807d22162378fa8a70df4890e64206fc426 (impl), 9e6e4ee7c8a29940abb5b61772dfba0ebe9a3bf0 (governance)

### E-B1
- Description: Fix dev-server compilation overlay (LH-NEW-001, VP-NEW-001), defer Docusaurus v4 future flag to planned phase, exclude docs/ops from public docs build (CODE-001), align canonical to www.doulab.net, ship valid robots.txt (SEO-003).
- Rationale: `future:{v4:true}` cascaded to require `@docusaurus/faster` (not installed) and strict MDX-3 (rejected legacy `<!-- truncate -->` and exposed ~47 SSG errors from zero-byte MDX pages). Reverted v4 pending a proper migration; installed faster as exact dep so re-enabling is a one-line change; migrated 3 truncate-only blog posts to MDX-3 syntax. Excluding `docs/ops/**` removes the governance info-leak surfaced by CODE-001. www-vs-apex canonical alignment removes the 301 redirect penalty visible in the production Lighthouse.
- Acceptance criteria:
  - `npm run verify` (typecheck + production build) exits 0.
  - Local production preview (`build:dry` + `docusaurus serve`) renders without any Webpack overlay.
  - `https://www.doulab.net/robots.txt` is a valid robots.txt (when redeployed).
  - `docs/ops/*` URLs return 404 on next deploy.
- Closes audit findings: LH-NEW-001, VP-NEW-001, SEO-003, CODE-001 (partial — manual `docs/ops/*` indexing concern is resolved).
- Commits: ec083380b670acbab8a6f659a0cbd4f5228e8d08 (impl), 3f1036f3628c52f633c947450c98801209027903 (governance)

### E-C1
- Description: Phase 1 truth & integrity sweep. Trademark glyph + mark normalization (ClarityScan®/IMM-P®/MicroCanvas®), MCF version normalization to v2.2 sitewide (current-state copy only; release history and dated blog bodies preserved), 8 zero-byte stub MDX page deletions, remove auto window.open on book-clarityscan.
- Rationale: Closes the highest-impact, lowest-effort tier of audit findings — items that make the site say true and consistent things about its own products. The "ClarityScanr" broken-glyph was on the two primary booking CTAs; bare "IMM®" violated the canonical that only IMM-P® is registered; v2.1/v2.2 split made the site appear to roll backward between pages; zero-byte stubs shipped as live blank routes; the book-clarityscan auto-popup was blocked by enterprise IT and mobile browsers, leaving a misleading "Redirecting…" state. All replacements grounded in canonical sources (IMM\AGENTS.md §17, IMM\v2.2 sources, FUNDAPEC kickoff).
- Acceptance criteria:
  - Grep for "ClarityScanr" in src/ returns zero matches.
  - Grep for "MCF 2.1" / "MicroCanvas® v2.1" in src/pages/ and current-state docs returns zero matches.
  - Grep for "IMM®" (not "IMM-P®") in src/pages/ and current-state docs returns zero matches.
  - `find src/pages -name "*.md" -size 0` returns nothing.
  - book-clarityscan.tsx contains no `window.open(` call.
  - `npm run verify` exits 0.
- Closes audit findings: COPY-001, COPY-002, COPY-003, IAUX-001, DOM-003, BP-009, plus the conversion auto-popup theme flagged by 10 roles in 00-index.md theme T8.
- Commits: 789781416d44cf722b4a75574eaf0a0744f659ea (impl), 44ba808c5b0ee74b1cb62944d8d8742ccd55c992 (governance)

### E-D1
- Description: Phase 1 conversion — surface ClarityScan® 3-tier structure, publish Tier 1 CHF 150 price, ship the IMM-DT digital transformation vertical, update homepage diagnostics card to reference the tier framing.
- Rationale: Audit-2026-06 surfaced three structural gaps. (1) ClarityScan® is a 3-tier product per `IMM\linear\imm-p-2.2-template.yaml:96,184` (T1 Snapshot/T2 Diagnostic/T3 Audit) but the site treated it as one product; tiers were only mentioned buried in an IMM-P® FAQ. (2) The T1 price was hidden until Stripe Checkout — five separate audit roles (Conversion, Sales, Behavioral econ, Behavioral psych, Content) flagged this as a P0 funnel leak. (3) IMM-DT exists per `IMM\borrador-licencia-imm-ogtic-doulab.md:49` and is in pilot with FUNDAPEC per the FUNDAPEC kickoff deck — but had zero public surface. All three are now fixed; the new IMM-DT page is at /services/imm-dt.
- Acceptance criteria:
  - `/services/clarityscan` renders a three-card tier section with T1 = CHF 150 visible, T2/T3 scope-based with discovery-call CTAs.
  - `/services/imm-dt` exists, builds, and is linked from both the services hub and the ClarityScan tier section.
  - Homepage diagnostics card references tiers + price.
  - `npm run verify` exits 0.
- Closes audit findings: COPY-002, CONV-001 (pricing transparency), behavioral econ/psych pricing thread, IAUX-002 (partial — IMM-DT now surfaced).
- Surfaces new findings (recorded in `docs/ops/audit-2026-06/18-lighthouse.md`):
  - LH-NEW-002 — Cloudflare Content-Signal robots.txt overrides static (CF dashboard fix).
  - LH-NEW-003 — 6× 503 errors on lazily-loaded JS chunks persist through fresh deploy (deploy-ops investigation).
  - LH-NEW-004 — `/about` SEO regression (link-text).
- Production Lighthouse mobile Perf gain after C1+B1 deploy: +12 to +21 per page (64–78 → 82–93). Desktop home 97 → 98. Raw JSON: `ops/audits/doulab-net/lighthouse-2026-06-prod-v2/`.
- Commits: 5f2433162032eb13d131f7d3bd9325ec912ecd77 (impl), 76f6340d6aff37e382f87279692850decc8758cd (governance)

### E-E1
- Description: Image preload + format hygiene + `/about` link-text fix.
- Rationale: Lighthouse production verification (prod-v2/v3) confirmed two image-handling defects. (1) Six pages preload an LCP image at a `.jpg` URL that does not exist on disk — `<link rel="preload" href="/img/{about,clarityscan-hero,services-hero,workshops-hero,coaching-hero,vigia-futura-hero}.jpg">` all 404 in production (verified via `curl https://www.doulab.net/img/clarityscan-hero.jpg` returning 404). Modern browsers picked the AVIF/WebP source from the `imageSrcSet` so the page rendered, but the preload itself was wasted on every page load and the picture fallback `<img>` would 404 for the rare browser without AVIF/WebP. (2) `Hero.tsx` hardcoded `${imageBase}.jpg` as the fallback raster across every page that uses the component — same root cause. (3) Lighthouse `link-text` audit failed on `/about` because the hero primary CTA used the visible label "Learn more"; Lighthouse evaluates visible text, not `aria-label`, so the descriptive aria-label was insufficient.
- Acceptance criteria:
  - `find static/img -name '*.png' -type f | xargs -I{} basename {}` matches every preload `href` (no broken JPG references in src/pages).
  - Hero component fallback raster matches the actual file on disk (.png everywhere doulab.net uses it).
  - Visible label on the `/about` hero primary CTA is descriptive (not "Learn more").
  - `npm run verify` exits 0.
- Closes audit findings: LH-NEW-004 (`/about` link-text); partial close of PERF-002 (Hero preload now only fires when image source is correct, but the eager-only gating is deferred to a future pass).
- Commits: f994f0c13a29eececfd3c87e4e642356a7d845d2 (impl), 053064ab8e5e3a0f76aca0b9e1f629f9511a0f13 (governance)

### E-G1
- Description: Phase 1 conversion polish — de-boilerplate `ctaNote` slots and diversify duplicated `FinalCta` headlines/bodies across 13 pages.
- Rationale: Audit-2026-06 findings CONV-010 (`ctaNote` slot used for brand-mark trivia instead of risk-reduction microcopy), BP-005 / BP-012 (mere-exposure ® boilerplate density), BP-010 (FinalCta "Ready to make innovation repeatable?" verbatim on 6 pages), COPY-007 ("co-create the path forward" identical body sentence appearing on 4+ surfaces). The `ctaNote` slot is the highest-leverage microcopy position on a page (sits directly under the primary CTA); using it for "Built on MicroCanvas® v2.2 and IMM‑P® gates." across 20 instances was decorative noise. Replaced with per-page risk-reduction microcopy: pricing + payment expectation on ClarityScan booking CTAs (Tier 1 CHF 150, secure Stripe checkout), duration + prep expectation on discovery-call CTAs (20-min, no prep, 2-business-day confirm), sector-relevance pivots on case-study CTAs. Brand attribution kept ONLY on the IMM-P® flagship and IMM-DT vertical pages (legitimate framework provenance). FinalCta canonical "Ready to make innovation repeatable?" retained on the homepage only; the 5 other surfaces got distinct, context-specific headlines + bodies.
- Acceptance criteria:
  - `grep -rn "Built on MicroCanvas® v2.2 and IMM" src/pages/` returns matches only in `services/innovation-maturity.tsx` and `services/imm-dt.tsx`.
  - `grep -rn "Ready to make innovation repeatable" src/pages/` returns a single match in `src/pages/index.tsx`.
  - `grep -rn "co-create the path forward" src/pages/` returns zero matches.
  - `npm run verify` exits 0; pre-push hook re-verifies.
- Closes audit findings: CONV-010, BP-005, BP-010, BP-012, COPY-007.
- Commits: 73c2f860a958e576d7951a97340be9c582c584c2 (impl), a27420fb8b2924aeddfbafc768ef1475b3e6c32f (governance)

### E-H1
- Description: IA consolidation. (1) Consolidate `/what-we-do` into `/services` via Cloudflare 301 plus internal cross-ref updates plus delete the source page. (2) Surface `/work-with-us` in the navbar. (3) Delete two stale stub pages under `/ecosystems/`. (4) Drop GitHub from the main navbar (kept in footer).
- Rationale: Audit-2026-06 IAUX-002, IAUX-003, IAUX-004. `/what-we-do` and `/services` hosted duplicate 5-card service grids and confused the IA; navbar said "What we do" but the deep-link tree lived under `/services/*`. `/work-with-us` is a fully-built 330-line conversion page that had been unreachable from the main nav. `/ecosystems/redlab.tsx` and `/ecosystems/red-incubadoras.tsx` shipped with "Page in progress." and "Launching 2025." placeholders, now stale at mid-2026. GitHub in main nav is low-value for a marketing-site audience.
- Acceptance criteria:
  - `static/_redirects` returns 301 from `/what-we-do` to `/services` on prod (after CF deploy).
  - `grep -rn "/what-we-do" src/` returns zero matches in source pages (only CSS comments reference the old module).
  - `src/pages/what-we-do/` is gone.
  - `src/pages/ecosystems/{redlab,red-incubadoras}.tsx` are gone.
  - Navbar shows: Home, Services, Case Studies, Insights, About on left; Work with us, Contact on right. No GitHub entry.
  - `npm run verify` exits 0.
- Closes audit findings: IAUX-002, IAUX-003, IAUX-004 (partial: stale stubs removed; the broader IA recommendation about an `/ecosystems` hub remains as a separate decision).
- Commits: 828a774bad9ab1d9502170032c981da6df0cd441 (impl), 954df29344a720c66442bfb19138db12c2edd1a1 (governance)

### E-I1
- Description: Sitewide removal of em-dashes (U+2014) from user-facing copy.
- Rationale: User directive 2026-06-01 during Phase E remediation. Em-dashes read as AI-generated tone, a tell the brand should not project. Approximately 85 instances across `src/pages/**/*.tsx`, `src/components/case-studies/caseStudiesData.tsx`, two blog posts (current-state copy only). Hyphens (-) and en-dashes (-) in ranges like "15-20 minutes" or "0-36 month" preserved (different code points, correct range punctuation).
- Acceptance criteria:
  - `grep -rP "[\x{2014}]" src/pages src/components blog/2025-08-30* blog/2026-01-19*` returns zero matches.
  - `npm run verify` exits 0.
- Implementation: context-aware substitution: parenthetical interrupters became commas; conclusion or emphasis became period + capitalize; list items like "Tier 1 - Snapshot" became "Tier 1: Snapshot" (colon); source attribution like "Gallup - 2024" became "Gallup, 2024".
- Scope honored: skipped `docs/releases.mdx` (history), `docs/ops/audit-2026-06/**` (governance), `docs/research-resources/distributed-federated-agentic-ai.md` (academic long-form), dated blog post bodies for 2025-09-12 / 2025-09-22 / 2026-01-19 body.
- Closes audit findings: directive E-I1 (own).
- Reference memory: `feedback_no_em_dashes.md`.
- Commits: f0a9dc3b07c8955d96975ce17ff9e34b798b4e56 (impl), pending (governance)

### E-I2 (ES launch — ES-A/B/C/D done, ES-E verified, reconciliation pending)
- Description: Bilingual rollout. ES locale at `/es/*` (Docusaurus default routing), full mirror of EN content.
- Rationale: Doulab serves LATAM clients; bilingual parity is a buyer-facing requirement.
- Scope decisions 2026-06-01: full mirror (all pages, all docs, all blog posts), Claude drafts (user reviews), `/es/` prefix (single deploy, hreflang auto-handled).
- Acceptance criteria (final):
  - `i18n: { defaultLocale: 'en', locales: ['en','es'] }` in docusaurus.config.ts.
  - Navbar shows localeDropdown (right position).
  - Every TSX page in `src/pages/**` has an ES counterpart under `i18n/es/docusaurus-plugin-content-pages/**`.
  - Every MDX doc in `docs/**` has an ES counterpart under `i18n/es/docusaurus-plugin-content-docs/current/**`.
  - Every blog post in `blog/**` has an ES counterpart under `i18n/es/docusaurus-plugin-content-blog/**`.
  - `npm run build` produces both `build/` (EN) and `build/es/` (ES) without errors.
  - Internal links resolve correctly under both locales.
  - hreflang + sitemap-per-locale verified.
- Phases:
  - **ES-A scaffold (DONE 2026-06-01, 3760aab)**: config + locale dropdown + chrome JSON (navbar, footer, blog options, docs current, code.json auto-filled). Build green for both locales; untranslated content falls back to EN.
  - **ES-B pages (DONE 2026-06-01, eb1c8c8)**: 26 src/pages files translated. Fan-out used: 4 parallel general-purpose subagents on disjoint scopes (A1 home+services hub+ClarityScan family; A2 IMM cluster+remaining services; A3 case-studies+insights+vigia-futura; A4 utility pages).
  - **ES-C docs (DONE 2026-06-01, eb1c8c8)**: 18 docs files translated including all 11 innovation-lab-guide chapters. Mermaid labels + reference lists kept in EN by design.
  - **ES-D blog (DONE 2026-06-01, eb1c8c8)**: 4 blog posts translated. Tag slugs reverted to EN to keep tag-page URLs consistent across locales.
  - **ES-E verify (DONE 2026-06-01)**: `npm run build` produces both `build/` and `build/es/` cleanly. Post-translation fix: bulk rewrite of relative imports in 25 ES TSX files from `../../components/...` to `@site/src/...` aliases (i18n source dir does not resolve relative-to-src). Broken-anchor warnings on both locales are pre-existing (same set as EN-only build).
- Commits: 3760aab (ES-A scaffold), eb1c8c8 (ES-B/C/D + import-alias fix + tag-slug revert).

### E-V4 (Docusaurus v4 future-flag migration — TRIAL REVERTED 2026-06-01)
- Description: Enable `future: { v4: true, faster: true }` on @docusaurus/core 3.10.1. v4 GA is not yet released (`npm view @docusaurus/core dist-tags` shows `latest: 3.10.1`); the v4 future flag lights up the v4-flavored behaviors (strict MDX-3, the @docusaurus/faster Rspack-based bundler) inside v3.
- Surface scan before trial (clean):
  - `<!--` legacy comments: only 3 files, all under `docs/ops/**` which the docs preset excludes from build. Not a blocker.
  - Empty MDX pages: none.
- Trial result (FAILED):
  - Every doc page failed SSG with `TypeError: Cannot read properties of undefined (reading 'id')` in DocItem (the theme-classic doc-item component). Errored pages: `/docs/intro`, `/docs/releases`, `/docs/research-resources`, `/docs/research-resources/distributed-federated-agentic-ai`, `/docs/research-resources/microcanvas`, `/docs/research-resources/innovation-lab-guide` + all 11 chapter pages + `innovation-lab-guide-q2-2024-en`. 18 doc pages.
  - Every blog page failed: `/blog`, `/blog/authors/luis`, all 4 individual posts.
  - Blog tag URLs were doubly-prefixed: `/blog/tags/blog/tags/announcement`, `/blog/tags/blog/tags/caribbean`, etc. — 14 tag pages, all 404-bound. Smells like a v4 path-prefix bug interacting with our config.
- Hypothesis: under v4 SSG, DocItem expects a frontmatter/sidebar shape that some of our docs are missing OR a v4 routing change is double-prefixing. Needs investigation, not blind-fix.
- Status: REVERTED to `future: {}`. Build green again after revert. v4 migration is NOT a flip-the-switch on this site; needs a focused investigation pass.
- Recommended next investigation:
  - Reproduce the DocItem error on a minimal v4 surface (one doc page, no sidebar).
  - Check whether `sidebars.ts` shape needs updating for v4 strict (the `id` it can't read may be a sidebar item reference).
  - Check whether the blog tag double-prefix is a regression in 3.10.1 + v4 flag OR caused by something in our blog plugin config.
  - Once minimal repro works, expand surface, fix, then re-enable in a planned commit.
- Acceptance criteria (when picked up):
  - `future: { v4: true, faster: true }` in docusaurus.config.ts.
  - `npm run build` produces both `build/` and `build/es/` cleanly.
  - All 18 doc pages render. All blog routes render. Blog tag URLs single-prefixed (`/blog/tags/announcement`, not `/blog/tags/blog/tags/announcement`).
- Commits: pending (trial+revert lives in a single doc-update commit — no impl committed).

### E-I2-R1 (pending — ES glossary reconciliation pass)
- Description: Normalize glossary drift across the parallel translation batches.
- Findings:
  - "Gate" rendered as both "Punto de control" (Pages-A2, Docs-A) and "Compuerta" (Pages-A3). Canonical: "Punto de control".
  - "Case studies" rendered as "Casos de estudio" (chrome JSON, navbar/footer) and "Casos de éxito" (case-studies/index body). Canonical: "Casos de estudio" (matches the URL slug `/case-studies` semantic).
  - Possibly other minor drift discoverable by sweep.
- Approach: scripted grep + canonical-term replacement, single small impl commit, no governance churn.
- Status: not blocking. Site builds clean; only an editorial polish item.
- Commits: pending.

### E-K1
- Description: Generate AVIF and WebP siblings for three oversized PNGs missing modern-format variants.
- Rationale: Audit-2026-06 PERF-002 flagged `static/img/research/innovation-lab-guide/hero-nyy.png` at 2.49 MB with no AVIF/WebP siblings. Inventory of all PNGs over 150 KB found three total without modern siblings.
- Acceptance criteria:
  - Each of the three PNG paths has matching `.avif` and `.webp` siblings of non-zero size.
  - Output sizes within 30% of original PNG bytes (none exceeded; all under 7% of PNG).
  - PNG originals not modified or deleted (preserved for legacy fallback).
- Generation: `npx sharp -i <path>.png -o <path>.avif -f avif -q 50` and `-f webp -q 80`. Total AVIF bytes saved on AVIF-capable clients: approximately 2.83 MB.
- Files generated:
  - `static/img/research/innovation-lab-guide/hero-nyy.{avif,webp}` (2.49 MB PNG -> 170 KB AVIF and 263 KB WebP)
  - `static/img/blog/2026/2026-01-19-coordination-threshold-hero.{avif,webp}` (422 KB PNG -> 24 KB AVIF and 43 KB WebP)
  - `static/img/luis.{avif,webp}` (258 KB PNG -> 7 KB AVIF and 13 KB WebP)
- Source-side wiring CLOSED 2026-06-01 (86572eb): both bare-PNG body refs (`docs/research-resources/innovation-lab-guide/index.mdx` and `blog/2026-01-19-coordination-threshold.md`) now wrapped in `<picture>` with AVIF + WebP `<source>` siblings. Capable clients negotiate down from the 2.49 MB / 422 KB PNG fallbacks to the 170 KB / 24 KB AVIFs. Blog author avatar via `blog/authors.yml` remains on PNG by design (Docusaurus blog plugin does not negotiate alternate formats for author images).
- Closes audit findings: PERF-002 (the named hero-nyy asset specifically; broader image-strategy items remain in PERF-001..PERF-015 backlog).
- Commits: 5875899d1d6bd8632e45dea05ada021bd1a70806 (sibling generation), 86572eb (source-side `<picture>` wiring).

### E-L1
- Description: Consolidate `:root` tokens in `src/css/custom.css`; align primary to IMM canonical `#38249a`; declare previously-undeclared grey tokens and font-family.
- Rationale: Audit-2026-06 BRAND-001 P0 (three competing primary colors, none aligned to IMM canonical), BRAND-002 P1 (`:root` declared twice), BRAND-007 P2 (no `font-family` declaration), BRAND-013 P3 (`--dl-gray-200` and `--dl-gray-300` referenced but never declared).
- Acceptance criteria:
  - `:root` declared once in `custom.css` (the prior duplicate at line ~2029 removed).
  - `--ifm-color-primary` declared with IMM canonical value `#38249a` plus the six Infima primary variants.
  - `--dl-indigo` realigned from Tailwind `#4f46e5` to `#38249a`.
  - `--dl-gray-200` and `--dl-gray-300` declared.
  - `--ifm-font-family-base` declared.
  - NNY hero block untouched; dark-mode `!important` ladder untouched.
- Closes audit findings: BRAND-001, BRAND-002, BRAND-007, BRAND-013.
- Note: this pass set Inter; the Tier-1 foundation pass (filed below as E-N1 in this same workflow) replaces Inter with Roboto so the web matches IMM deck typography.
- Commits: 969997bedb8bea2dba197456877dc6c27cb45e4f (impl), pending (governance)

### E-M1
- Description: Add `Content-Security-Policy-Report-Only` header to monitor a tighter CSP without enforcing it.
- Rationale: Audit-2026-06 SEC-002 flagged that the enforced CSP carries `'unsafe-inline'` on script-src and style-src. Per `AGENTS.md` rule "CSP changes should default to Report-Only unless a tested policy is confirmed safe; otherwise defer."
- Acceptance criteria:
  - Enforced `Content-Security-Policy` byte-for-byte unchanged.
  - New `Content-Security-Policy-Report-Only` line without `'unsafe-inline'` on script-src and style-src, identical otherwise.
  - Inline TODO documents the missing `Reporting-Endpoints` (no collector stands up yet).
- Expected violation volume: high. Docusaurus inline hydration scripts + inline CSS blocks + JSON-LD blocks generate roughly 3-8 script-src reports and 20-100 style-src reports per page view.
- Path to enforce documented in commit message (two-step soak: stand up a CF Worker collector + Reporting-Endpoints, land SEC-008 single JSON-LD component with sha256 hashes, iterate until zero violations, promote into enforced CSP).
- Closes audit findings: SEC-002 (Report-Only step only; the enforce step remains pending the soak cycle).
- Commits: f6306c58bd2a38d6ec7f10de12eb8a0ea355e2e8 (impl), 64dcc91b7fe7a6f758f33b204e2f346ee326ab70 (governance)

### E-N1
- Description: Tier 1 foundation tokens (IMM design system alignment). Extends the prior E-L1 :root consolidation with the four IMM accent tokens (`--dl-indigo`, `--dl-purple`, `--dl-green`, `--dl-slate`) and two state tokens (`--dl-amber`, `--dl-red`), each annotated with the IMM canonical semantic meaning. Switches `--ifm-font-family-base` from Inter to Roboto, loads Roboto via Google Fonts, adds the corresponding CSP allowances.
- Rationale: Per user directive ("the presentations and the site ideally should use the same font") and IMM canonical `design-system-spec.md`. Brand-family alignment between presentations and the web is a credibility signal for procurement-eligible buyers; a typographic split breaks that integrity. Accent + state tokens are the foundation for the IMM semantic components (Pillars, Roadmap, Radar, MaturityLadder, EvidenceMeter).
- Acceptance criteria:
  - `grep -c "^\s*--dl-" src/css/custom.css` returns the new six tokens in addition to the prior ones.
  - `--ifm-font-family-base` leads with `'Roboto'`.
  - Google Fonts loaded via `headTags` in `docusaurus.config.ts`.
  - Both enforced CSP and Report-Only CSP allow `fonts.googleapis.com` (style-src) and `fonts.gstatic.com` (font-src).
  - `npm run verify` exits 0.
- Mermaid still pins Inter; aligning diagrams to Roboto deferred to a separate visual pass.
- Reference memory: `feedback_typography.md`.
- Commits: 464b1b41643c86ba1a5ab057cb59084495c6fc8b (impl), pending (governance)

### E-O1
- Description: Tier 2 semantic components — first two React components in the IMM semantic vocabulary, plus the IMM-DT page rewired to use them.
- Rationale: The IMM design system is built around semantic components named for the epistemic work they encode (Pillars-grid, Roadmap, Radar, etc.). The web previously used generic `<CardGrid>` everywhere. Introducing matching React components is the first step toward parity between presentations and the site.
- Acceptance criteria:
  - New files exist: `src/components/imm/Pillars.tsx`, `Pillars.module.css`, `Roadmap.tsx`, `Roadmap.module.css`.
  - `src/pages/services/imm-dt.tsx` uses `<Pillars>` for the 5 IMM-P 2.2 domains and `<Roadmap>` for the 6-horizon (0-3 / 3-6 / 6-9 / 9-12 / 12-24 / 24-36 months) plan.
  - Components consume the new IMM accent tokens from E-N1 and `--ifm-font-family-base` (Roboto).
  - Responsive at 5 / 3 / 2 / 1 columns for Pillars and horizontal / vertical for Roadmap at the 768 px breakpoint.
- Closes audit findings: introduces the foundation for closing BRAND-005 (orphan visual system), BRAND-002 partial (token-driven consolidation), DOM-005 visual (IMM-P phase visualization).
- Tier 3 (rebuild innovation-maturity.tsx around these components) follows in E-Q1.
- Commits: 99d3c38d93d97f43d77ef659feeea87019886056 (impl), pending (governance)

### E-P1
- Description: Rebuild the homepage "The Problem" section around the IMM cause-chain pattern.
- Rationale: Audit-2026-06 BP-002 P0 ethics: prior block mixed Gallup / McKinsey citations with vendor-blog sources (Intercom, Atlassian) and presented qualitative platitudes as cited statistics. Section was pure-deficit framed without a Doulab response.
- Implementation: replaces the 8-card carousel with a 4-card cause-chain grid. Each card pairs a precisely-sourced root cause with a Doulab response decision-card pointing at the responding service (IMM-P / MCF / ClarityScan / Vigia Futura). Outcome anchor strip names the four metrics tracked (decision latency, cycle time, signal quality, capability) and explicitly disclaims activity-as-outcome. Visual encoding follows IMM semantic colors from E-N1: amber for cause, slate divider, indigo for response, green for outcome, red intentionally not used (audit flagged pure-deficit framing).
- Acceptance criteria:
  - No vendor-blog citations (Intercom, Atlassian, etc.) remain in the Problem section.
  - Every numeric claim sourced.
  - Section uses `imm-problem-cluster`, `imm-cause-chain`, `imm-decision-card` classes.
  - Zero em-dashes; no "co-create the path forward".
- Closes audit findings: BP-002 (mixed-credibility sources, pure-deficit framing), partial COPY-007 (homepage Problem block specifically; the global FinalCta still uses the canonical "Ready to make innovation repeatable?" headline as intended).
- Commits: f0ee1337eb0af531fb0ef38a54ebb60f475f4ff6 (impl), pending (governance)

### E-Q4
- Description: Three new IMM-aligned semantic React components (`<Radar>`, `<MaturityLadder>`, `<EvidenceMeter>`).
- Rationale: ClarityScan tier subpages and the IMM-P / IMM-DT page rebuilds need a visual vocabulary matching the IMM design system. Radar shows multi-axis domain scoring, MaturityLadder shows capability progression with current+target rungs, EvidenceMeter shows a confidence/score gauge with red/amber/green zones.
- Acceptance criteria:
  - 6 new files under `src/components/imm/` (3 .tsx + 3 .module.css).
  - All three components accept `ariaLabel`, render accessible SVG with `<title>`, mirror numeric data as text for screen readers.
  - Components use IMM tokens (`var(--dl-indigo, #38249a)`, etc.) with hex fallbacks; Roboto via inherited `--ifm-font-family-base`.
  - `npm run verify` exits 0 (pre-push hook re-verifies).
- Commits: b4563da9ae7f67efd43db1bd4e2c71e40a54f7db (impl), pending (governance)

### E-Q5
- Description: Vigía Futura page rebuilt as presentation-in-itself; adds the National Innovation Maturity and Digital Transformation Index narrative and the Vigía Futura Network block.
- Rationale: Per user directive 2026-06-01, the Vigía Futura section should function as its own presentation, surfacing the foresight observatory work and the IMM-grounded national index. The Doulab + UNPHU MoU (`Vigia Futura/MoU/DOULAB + UNPHU - Vigia Futura MOU - 2025.10.09.pdf`, 29 MB, not opened) establishes the partnership behind this work; the public site MUST NOT name UNPHU or any specific partner.
- Implementation: 8-section narrative arc (hero, why an observatory, framework family pillars, network, the Index, roadmap, working with us, FinalCta). Uses `<Pillars>` for the Vigía Framework Family (VIF, VILF, IMM, IMM-P®, MEL on shared MCF v2.2 foundation) and for the Index dimensions (five IMM domains plus IMM-DT vertical). Uses `<Roadmap>` for the 5-horizon roll-out (0-6 mo now, 6-12 mo now, 12-18 mo next, 18-30 mo next, 30-48 mo later) with Index v1 at the 12-18 month horizon.
- Sources cited (no fabricated numbers): OECD Strategic Foresight, WEF readiness/competitiveness, the site's own coordination-threshold blog post.
- IMM vs IMM-P distinction respected: IMM (model), IMM-P® (program), IMM-DT (DT vertical), never IMM® bare.
- Hard constraint honored: no UNPHU mention; aspirational positioning only.
- Removed the prior "Latest from the radar" docs feed; reintroducing as a signal-library teaser is a separate pass.
- Commits: 68d0433bb94ac555d6862dd17bc700f0f525f907 (impl), pending (governance)

### E-Q6
- Description: Restore IMM (model) vs IMM-P® (program) terminology distinction across the pages not owned by Q1-Q5.
- Rationale: The E-C1 sweep over-corrected, flattening "IMM" to "IMM-P®" even where the meaning was the maturity model itself. Per `Vigia Futura/vilf/VILF-1.0-master_1.md` 5-spine architecture: IMM is the capability spine (the model, no marks); IMM-P® is the execution spine (the program, registered mark); IMM-DT is the digital transformation vertical.
- Implementation: 31 changes across 12 files (24 IMM -> IMM-P®, 7 IMM-P® -> IMM). Notable judgment calls:
  - "vertical of IMM-P®" -> "vertical of IMM" (verticals extend the model, not the program).
  - "Built on MicroCanvas® 2.2 and IMM-P®" -> "and IMM" on diagnostic pages (a diagnostic measures against the model).
  - "fast maturity scan (MCF 2.2 + IMM-P)" -> "+ IMM" (a scan measures against the model).
  - Normalized U+2011 non-breaking hyphen to regular `-` in `IMM-P®` references in the federated-AI whitepaper.
- Files outside scope (owned by Q1-Q5): `services/innovation-maturity.tsx`, `services/imm-dt.tsx`, `services/clarityscan.tsx`, `vigia-futura/index.tsx`, `src/components/imm/*`. These will apply the rule in their own passes.
- Flagged for follow-up: `docusaurus.config.ts` footer copyright still says "MicroCanvas® and IMM® are registered marks". Violates the "never IMM® bare" rule. Out of scope for this agent; future small pass.
- Commits: 084eda201281fdb1c8c636c5723849a516af5cd4 (impl), pending (governance)

### E-Q1
- Description: Rebuild the IMM-P® service page around the IMM semantic component vocabulary. The page now reads like an IMM deck and visually distinguishes IMM (the model) from IMM-P® (the program).
- Rationale: The previous page leaned on generic CardGrid + bullet list sections that did not encode the epistemic structure the brand depends on. Per the IMM design system (see `IMM/design-system-spec.md`), the page should use semantic patterns: model = `<Pillars>` of domains; capability = `<MaturityLadder>`; snapshot = `<Radar>`; program = `<Roadmap>` of phases; gate = `<EvidenceMeter>`.
- Implementation: 12-section flow Hero -> Model (Pillars, 5 domains) -> Capability progression (MaturityLadder, 5 rungs current=2 target=4) -> Maturity snapshot example (Radar 50/65/40/55/45 + target 75/75/70/75/75) -> Program (Roadmap, 5 phases with state mapping) -> Phase-readiness gate example (EvidenceMeter score=72) -> ClarityScan tier reference -> Who delivers -> Proof strip -> Related case studies -> FAQ -> FinalCta. Removed 5 generic card-grid sections that were duplicative. FAQ updated with the IMM-vs-IMM-P® question. JSON-LD Service + FAQ + Breadcrumb schemas preserved. 2 prior uses of "leverage" replaced with "add value".
- Acceptance criteria:
  - `<Pillars>`, `<MaturityLadder>`, `<Radar>`, `<Roadmap>`, `<EvidenceMeter>` all rendered with example fictional data and "Example output" captions.
  - IMM vs IMM-P® distinction visible in hero subtitle / body and consistent throughout.
  - `grep "—" src/pages/services/innovation-maturity.tsx` returns no em-dashes.
  - `npm run verify` exits 0.
- Closes audit findings: DOM-005 (phase visualization), DOM-002/007/008 (5-domain consistency), partial BRAND-005 (orphan visual system on services), partial COPY-008 (jargon density restructured around semantic vocabulary), COPY-011 (12+12 weeks vs phases conflict reframed).
- Commits: 2fd5bddc5697388ee1295c54dfaf5d067ed13d7d (impl), pending (governance)

### E-Q2
- Description: Expand the IMM-DT vertical page with concrete engagement-output previews; restore the IMM vs IMM-P® distinction where this page got it wrong.
- Rationale: After E-O1 the page used `<Pillars>` and `<Roadmap>` correctly, but did not yet show what the engagement actually produces. Plus the page conflated "the maturity model" with "the program" in four spots.
- Implementation: NEW section "What an IMM-DT engagement produces" with three deliverable previews (Radar with target overlay; MaturityLadder with DT-specific rungs Manual operations -> Digitized workflows -> Connected platforms -> Data-driven decisions -> Continuous transformation; EvidenceMeter score=68). NEW "What an IMM-DT engagement does not do" block setting honest boundaries (measurement instrument, not execution capacity). 4 IMM vs IMM-P® corrections (hero body, hero ctaNote, final ctaNote, Pillars lead + foundation label, pilot reference). FUNDAPEC named publicly consistent with the existing case-study tone.
- Acceptance criteria:
  - The three deliverable previews render with example fictional data and "Example output" captions.
  - IMM (model) and IMM-P® (program) used correctly throughout.
  - `npm run verify` exits 0.
- Commits: 404991fcf02f0e47d33dd07a2808f75353c00e89 (impl), pending (governance)

### E-Q3
- Description: ClarityScan® visual tier treatment: rework `/services/clarityscan` as overview + Tier 1 detail, add NEW subpages `/services/clarityscan/diagnostic` (Tier 2) and `/services/clarityscan/audit` (Tier 3).
- Rationale: Per user directive 2026-06-01 ("on ClarityScan consider what people would like to see visually... the radars, the domains... demo examples of what they get... maybe each tier after 1 get their own subpage"). The previous single-page tier section did not show buyers what they receive per tier.
- Implementation:
  - Overview page (`/services/clarityscan`): Hero with tiered positioning; What every tier measures (`<Pillars>` 5 IMM domains); The three tiers (3-card grid linking to T1 detail anchor, /diagnostic, /audit); Tier 1 Snapshot detail with inline `<Radar>` and `<MaturityLadder>`; How Tier 1 works; What Tier 1 does not include; FinalCta.
  - Tier 2 subpage (NEW): Hero; What T2 delivers (`<Radar>` baseline + target, `<MaturityLadder>` current=2 target=4, inline 2x2 priority matrix as CSS-grid, `<Roadmap>` 0-30/30-60/60-90 days); Who T2 is for; How T2 works (Scope/Survey/Synthesize/Decide); Boundaries; FinalCta.
  - Tier 3 subpage (NEW): Hero; What T3 delivers (`<Radar>` evidence-backed + target, `<MaturityLadder>`, `<EvidenceMeter>` score=72, `<Roadmap>` 5-phase cascade matching IMM-P® phases); Who T3 is for; What an audit-grade dossier contains; How T3 works; Compliance posture; Compare across tiers; FinalCta.
- All example data labeled "Example output" to prevent confusion with real client deliverables.
- JSON-LD: overview Service with offers (CHF 150 T1); T2 and T3 Service without offers and `isRelatedTo` cross-links.
- Acceptance criteria:
  - Three URLs exist: `/services/clarityscan`, `/services/clarityscan/diagnostic`, `/services/clarityscan/audit`.
  - All five IMM semantic components render across the tier set with example data.
  - Cross-links navigate cleanly across the three pages.
  - `npm run verify` exits 0.
- Closes audit findings: CONV-001 (pricing visibility — kept and emphasized at T1), CONV-006/007 (CTA expectation setting — duration / prep / outcome clarified per tier), partial CONV-010 (additional risk-reduction microcopy per tier card).
- Commits: 5ce0370aa47d02fbbd1632af9d0f3804224b91d7 (impl), 5088478... (governance, see prior push)

### E-R1 (BACKLOG, prod-v5 audit findings)
- Description: Post-Phase E Lighthouse + viewport prod audit (v5). Captures three new regressions surfaced after the Phase E remediation deployed.
- Audit artifacts:
  - `ops/audits/doulab-net/lighthouse-2026-06-prod-v5/` (22 Lighthouse JSONs + summary-v5.json; 4 NO_NAVSTART runs)
  - `ops/audits/doulab-net/viewport-2026-06-prod-v5/` (27 of 108 planned screenshots; harness died on sustained run)
  - Detailed write-up in `docs/ops/audit-2026-06/18-lighthouse.md` Phase 4 verification section
  - Detailed write-up in `docs/ops/audit-2026-06/19-viewport-matrix.md` Phase 4 verification section
- Headline findings (filed as backlog items below):
  - **LH-NEW-005 (P0)** — Google Fonts Roboto stylesheet is render-blocking; costs ~14 to 27 mobile Perf points per page. Fix: self-host Roboto or async-load the stylesheet. Source: `docusaurus.config.ts:31-47` (the `headTags` Google Fonts loader added in E-N1).
  - **LH-NEW-006 (P1)** — A11y dipped to 87-88 on pages with the new IMM semantic components. Audits failing: `aria-allowed-role`, `color-contrast`, `link-in-text-block`, `label-content-name-mismatch`. Fix: audit Pillars / Radar / MaturityLadder / EvidenceMeter for ARIA + contrast issues.
  - **LH-NEW-007 (P2)** — Best Practices uniformly 75 (regressed from 79). Audits failing: `deprecations`, `errors-in-console`, `inspector-issues`. The `errors-in-console` is the prefetch-503 issue accepted as benign in E-F1; `inspector-issues` is new and likely a CSP nudge from the Google Fonts loader.
  - **VP-NEW-002 (P2)** — Viewport sweep harness fails on sustained runs (captured 27 of 108 screenshots). Fix: per-page BrowserContext teardown + retry logic.
  - **VP-NEW-003 (P2)** — Desktop viewports unverified for Phase E rebuilds. Fix: re-run with v5.1 harness covering 768 / 1280 / 1366 / 1920 anchors.
- Acceptance criteria for closing this entry:
  - LH-NEW-005 fix lands; prod Lighthouse mobile Perf back to >= 85 on majority of pages.
  - LH-NEW-006 fix lands; prod Lighthouse A11y back to >= 93 on the affected pages.
  - LH-NEW-007 root cause identified (open DevTools on prod, capture inspector-issues content).
  - VP-NEW-002 harness fix lands; full 6-anchor sweep captures all 108 screenshots clean.
  - VP-NEW-003 desktop coverage captured.
- Status: RESOLVED (Phase A landed + Phase C verified). Three follow-ups filed (E-R2, E-R3, VP-NEW-004).
- Phase A commits (impl):
  - E-R1.1 (self-host Roboto): 6cfbb2c9383fb990d1e0c2e72e664ef2cd5d2351
  - E-R1.2 (IMM component A11y fixes): 070b3d52f07caae4741666a2017568d8b22929df
  - E-R1.3 (viewport harness v5.1): b97c066cc6c950172748588dd31f9569fdc010a0
  - E-R1.4 (inspector-issues diagnostic): c31ebb4e33ec61cc332a4e41dd7b508cd5519405
- Phase C verification (prod-v6 Lighthouse + v5.1 viewport):
  - LH-NEW-005 RESOLVED. Mobile Perf v5 56-77 -> v6 79-89 (+15 average). Desktop home v5 NO_NAVSTART -> v6 98. render-blocking-resources total dropped 27,315 ms -> 21,324 ms.
  - LH-NEW-006 PARTIAL. Component-level ARIA + contrast resolved; remaining 4-5 A11y points trace to page-level `link-in-text-block` and `label-content-name-mismatch` filed as E-R3.
  - LH-NEW-007 PENDING. Root cause documented (33 CSP Report-Only violations + 3 Cloudflare deprecations). Filed as E-R2 for a dedicated CSP cleanup pass.
  - VP-NEW-002 RESOLVED. Harness captured 108 of 108 screenshots; resumable + retry + throttle features all worked under sustained prod run.
  - VP-NEW-003 RESOLVED. Desktop anchors (768 / 1280 / 1366 / 1920) captured cleanly; new IMM semantic components render correctly across all anchors.
- New defect surfaced in Phase C: **VP-NEW-004** (filed below).

### VP-NEW-004 (BACKLOG, surfaced 2026-06-01 by the Phase C viewport sweep)
- Description: IMM-DT and ClarityScan T3 desktop column-collapse defect. Tabular sections render as "one-character-per-line" vertical columns at all four desktop anchors (768, 1280, 1366, 1920).
- Severity: P1 (visible layout breakage on two flagship product pages at every desktop size).
- Effort: S (likely a single CSS rule: `table-layout: fixed` or `grid-template-columns: min-content` somewhere in the rebuilt sections).
- Affected pages: `/services/imm-dt` ("How IMM-DT delivers" / "Who IMM-DT is for" tables) and `/services/clarityscan/audit` ("How Tier 3 works" / phase-results matrix).
- Mobile rendering is correct (collapse intentionally happens at narrow widths); only desktop breaks.
- Evidence: 8 PNGs across the two pages at desktop anchors under `ops/audits/doulab-net/viewport-2026-06-prod-v5.1/`.
- Acceptance: full re-sweep at desktop anchors shows readable tabular sections.
- Status: **RESOLVED**.
- Two distinct root causes:
  1. IMM-DT (page-level): the `<CardGrid>` component's CSS-module targeted `:global(.components-cardgrid-cardgrid__card)` children with `grid-column: span 4`, but the page passed `className="card"` children. Cards fell back to `grid-column: auto` inside `repeat(12, 1fr)`, ~80 px each, forcing one character per line.
  2. ClarityScan T3 (component-level, page workaround): `<Roadmap>` is not intrinsically responsive when placed inside narrow grid cells (< ~500 px).
- Fixes:
  - IMM-DT: replaced `<CardGrid>` with `<div className="cardGrid">` on the two affected sections; the global `.cardGrid` class targets `.card` children correctly and collapses to one column at narrow widths.
  - ClarityScan T3: outer grid tightened to `minmax(280px, 1fr)`; the Roadmap cell now spans the full container via `style={{ gridColumn: '1 / -1' }}`. Follow-up flagged in a code comment: `<Roadmap>` component should be made intrinsically responsive in a future pass.
- Commits: e53363058e46fe4a072dd33a09e90c3512876817 (impl), pending (governance)

### E-R2 (BACKLOG, filed from R4 diagnostic findings)
- Description: Page-level CSP cleanup to clear the LH-NEW-007 inspector-issues audit.
- Rationale: R4 (commit c31ebb4) captured 33 CSP Report-Only violations on the production home page: 29 `style-src-attr` from inline `style=` attributes that Docusaurus components emit, and 4 `script-src-elem` from inline `<script>` tags in `<head>` (theme-init color-mode bootstrap). These violations are surfaced by Lighthouse's `inspector-issues` audit and are the entire reason BP is capped at 75.
- Fix path (multi-pass, sequenced):
  1. **Strip inline style= attributes from Docusaurus theme overrides and any `style={{...}}` props in `src/components/`**. Expected to drop the 29 style violations to near zero. Page-level pass; touches multiple TSX files.
  2. **Add nonces or sha256 hashes for the inline <head> scripts** via a Cloudflare Pages middleware that sets the CSP header per request. Drops the 4 script violations to zero. Ops-level change.
  3. Once the Report-Only is at zero violations, **promote the policy into the enforced CSP**, completing SEC-002.
- Acceptance criteria:
  - Lighthouse `inspector-issues` audit passes on prod.
  - Lighthouse BP >= 95 sitewide.
  - CSP enforcement extended (no `unsafe-inline` on script-src; style-src either uses nonces or stays with `unsafe-inline` if Docusaurus inline styles cannot be eliminated entirely).
- Status: **PARTIAL — script-src-elem fix shipped; style-src-attr residual filed for follow-up.**
- Implementation summary:
  - `functions/_middleware.ts` (NEW): Cloudflare Pages middleware. Generates per-request nonce, regex-injects `nonce="..."` on inline `<script>` tags in HTML responses, sets the response `Content-Security-Policy` with `script-src 'self' 'nonce-<value>'` (no `'unsafe-inline'`). Drops the 4 `script-src-elem` violations to 0 once deployed.
  - `static/_headers`: enforced and Report-Only CSP unchanged byte-for-byte; comment block documents the middleware override contract.
  - `src/components/**` survey: 3 `style={{...}}` occurrences in IMM components are CSS custom-property setters (legitimate per the IMM dynamic-property pattern); KEPT.
  - `src/theme/**` survey: no inline styles; no edits.
- Residual: the 29 `style-src-attr` Report-Only violations come from Docusaurus core hydration HTML (theme-color tokens, runtime inline styles), not from authored components. Three paths for a future pass: (a) accept `'unsafe-inline'` on `style-src-attr` in Report-Only, (b) swizzle the Docusaurus theme components that emit inline styles, (c) accept the report-only signal and never enforce `style-src-attr` strictly. Filed as **E-R2.2** in the next backlog batch.
- Commits: d72cf32e8e4eb372fa281f565356f848070fb61f (impl), pending (governance)

### E-S2 (live spot-check, multi-fix follow-up)
- Description: Five live bugs caught in spot-check after the Phase S deploy; bundled into a single follow-up fix.
- Findings + fixes:
  1. **Homepage Problem section button text invisible** in light and dark mode. The Problem cards' response Link had `style={{ color: 'var(--dl-indigo) }}` overriding `.cardCta`'s `color: var(--dl-white)`. Fix: removed the inline color override; the global `.cardCta` styling (white text on indigo button) takes effect cleanly in both modes.
  2. **/services "What we offer" cards collapsed** at desktop. Same CardGrid bug as VP-NEW-004 IMM-DT: the page used `<CardGrid>` whose CSS-module targets a different class than `.card`. Fix: `<CardGrid>` -> `<div className="cardGrid">`; removed the unused CardGrid import.
  3. **ClarityScan T2 Diagnostic priority matrix overflow** at desktop. The 2x2 priority matrix was sitting in a 280-300px grid cell where its internal `gridTemplateColumns: '70px 1fr 1fr'` plus quadrant content overflowed. Fix: `style={{ gridColumn: '1 / -1' }}` on the priority matrix wrapper so it spans the full container width.
  4. **ClarityScan T2 90-day roadmap collapsed** at desktop. Same root cause as the audit page Roadmap collapse (VP-NEW-005 below): the `<Roadmap>` component uses viewport-based media queries instead of container queries, so it collapses when its parent grid cell is narrower than the breakpoint. Fix: `style={{ gridColumn: '1 / -1' }}` on the Roadmap wrapper so it spans the full container width on the diagnostic page too.
  5. **Roadmap component is not intrinsically responsive** (filed below as VP-NEW-005).
- Commits: pending (impl), pending (governance)

### VP-NEW-005 (BACKLOG, surfaced 2026-06-01 by live spot-check)
- Description: `<Roadmap>` component is not intrinsically responsive — uses viewport-based `@media (max-width: 767px)` instead of a container query. When placed inside a narrow grid cell at desktop viewport, the inner 6-column track stays at 6 columns and the horizon labels squish to one-character-per-line.
- Severity: P1 (workaround applied via `gridColumn: '1 / -1'` on every use site; needs proper component fix).
- Effort: M (rewrite the Roadmap `.track` to use container queries via `@container` OR resize-observer + class swap at runtime).
- Affected component: `src/components/imm/Roadmap.tsx` + `Roadmap.module.css`.
- Fix path: define a container with `container-type: inline-size` on `.wrap`, then switch the `.track` from viewport-based `@media` to container-based `@container (max-width: 767px)`. Caniuse coverage for `@container`: ~93% as of 2026; safe to ship.
- Status: BACKLOG.
- Commits: pending.

### VP-NEW-006 (BACKLOG, surfaced 2026-06-01 by live spot-check)
- Description: `<EvidenceMeter>` reported overflow on `/services/clarityscan/audit` "Phase readiness gauge" section. The component's `.chartBox` has `min-width: 200px` and `max-width: 360px`; in a 280px grid cell at desktop, the SVG should fit, so the overflow is unclear without a live render. Possibly the `.wrap` parent flex container or the surrounding section's padding interacts poorly.
- Severity: P2 (visible but specific to one section).
- Effort: S (likely a single CSS tweak in EvidenceMeter.module.css OR a per-page wrapper style).
- Fix path: open prod, inspect the overflow, decide between (a) wrapping the EvidenceMeter in a centered flex container at the page level, (b) tightening the component's max-width, or (c) `style={{ gridColumn: '1 / -1' }}` like the Roadmap workaround.
- Status: BACKLOG.
- Commits: pending.

### COPY-NEW-001 (BACKLOG, surfaced 2026-06-01)
- Description: The "Where strategy meets reality" homepage Problem cards cite Gallup 2024, McKinsey "Losing from day one" (2021), HBS Online (undated), OECD Strategic Foresight. User flagged: are these the most current sources, and are the claims aligned to the actual target market (LATAM + Caribbean enterprise + government + multilateral)?
- Severity: P2 (credibility / market relevance).
- Effort: M (research + content rewrite).
- Fix path: research 2025-2026 sources that explicitly cover LATAM + Caribbean innovation, digital transformation, decision latency in regulated finance, public-sector DT in the region. Candidate sources: IDB (BID) innovation reports, CEPAL / ECLAC studies, OECD Latin American Economic Outlook, regional fintech maturity benchmarks (e.g., CARIBEquity). Replace 1-3 of the current sources with regional anchors where the data is stronger.
- Status: BACKLOG.
- Commits: pending.

### BRAND-NEW-001 (BACKLOG, surfaced 2026-06-01 by live spot-check)
- Description: Card-grid trailing-row imbalance. The global `.cardGrid` uses `repeat(12, 1fr)` with `.card { grid-column: span 4 }` (3-up desktop). With 3 or 6 cards the rows are balanced; with 4 or 5 cards the last row has a lone card or two-card row at 1/3 or 2/3 width that reads as ragged. User directive: "all the cards, site-wide should be visually balanced in terms of height, if we have several in the same page" and "if only 4 or only 3 or 6 so that is also visually balanced".
- Severity: P2 (visual polish; brand integrity).
- Effort: M (consider switching the cardGrid to `repeat(auto-fit, minmax(280px, 1fr))` for auto-balancing OR add `:nth-child` centering rules for trailing rows. Test across all pages that use cardGrid since this is a global change.)
- Affected: `src/css/custom.css` `.cardGrid` rules (lines ~775-803).
- Status: BACKLOG.
- Commits: pending.

### BRAND-NEW-002 (RESOLVED)
- Description: Phase color normalization.
- Canonical IMM-P® 5-phase state map documented and verified across the two 5-phase Roadmap instances (innovation-maturity.tsx and clarityscan/audit.tsx): Foundations → now/indigo, Structured Discovery → now/purple, Efficiency → next/green, Scaling → next/amber, Continuous Improvement → later/slate. imm-dt.tsx (6-horizon 0-36mo) and clarityscan/diagnostic.tsx (3-horizon 90-day) use different roadmap shapes so the canonical 5-phase map does not apply to them.
- Commits: 5909d9926d03362e7cd3986dea31eb5855719ee0 (impl, bundled with IMM/IMM-P + extension link), pending (governance)

### BRAND-NEW-001 (RESOLVED)
- Description: cardGrid trailing-row imbalance with 4 or 5 cards.
- Fix: switched `.cardGrid` from `repeat(12, 1fr)` + `.card { grid-column: span 4 }` to `repeat(auto-fit, minmax(280px, 1fr))` with `align-items: stretch`. Trailing rows now balanced for any card count.
- Commits: c12156525961673d21265c9e450b920271bf2a4d (impl), pending (governance)

### VP-NEW-005 (RESOLVED)
- Description: Roadmap component intrinsic responsiveness.
- Fix: switched `Roadmap.module.css` `.wrap` from viewport-based `@media` to `@container roadmap (max-width: 767px)` with `container-type: inline-size`. Roadmap now collapses based on its OWN parent width instead of the viewport.
- Page-level `gridColumn: 1/-1` workarounds in audit.tsx and diagnostic.tsx are now functionally redundant but kept (harmless).
- Commits: c9be5bbff8fb7c572b7b31174b18ca628272da52 (impl), pending (governance)

### VP-NEW-006 (RESOLVED)
- Description: EvidenceMeter overflow in narrow grid cells.
- Fix: `.chartBox` `min-width: 200px` → `min-width: 0; width: 100%; box-sizing: border-box`. SVG scales cleanly to whatever container width is available.
- Commits: c9be5bbff8fb7c572b7b31174b18ca628272da52 (impl, bundled with VP-NEW-005), pending (governance)

### COPY-NEW-001 (RESOLVED)
- Description: Homepage Problem section sources refresh.
- Implementation: 3 of 4 sources updated to 2025 editions; the fourth is McKinsey's perpetually-maintained transformation synthesis. LATAM/Caribbean relevance now explicit in 3 of 4 cards. Sources: Gallup State of the Global Workplace 2025, McKinsey "The science behind successful organizational transformations", WIPO Global Innovation Index 2025 (LATAM specific), OECD Latin American Economic Outlook 2025.
- Commits: b4d6f514f782060c69869d33892fa7f492989770 (impl), pending (governance)

### E-R2.2a (RESOLVED 2026-06-01)
- baseUrlIssueBanner disabled in `docusaurus.config.ts` themeConfig. Drops 5 of the 29 `style-src-attr` Report-Only violations. Commit: b2f93a532fe938a75b3d7afe24a96f1f9e648e06.

### E-R2.2b (RESOLVED 2026-06-01)
- SVG sprite `display:none` allowlisted via `sha256-biLFinpqYMtWHmXfkA1BPeCY0/fNt46SAZ+BBk5YUog=` on Report-Only `style-src-attr` directive in `static/_headers`. Drops 1 violation. Commit: 609676de481ab2bbca96e0db0b4e6067891a550f.

### E-R3.1 (RESOLVED 2026-06-01)
- Pillars title-link underline contrast strengthened (rgba 0.55 → 0.9, thickness 2px). Target: A11y 92 → 93 on `/services/imm-dt` and `/services/clarityscan/diagnostic`. Commit: fea5828d7a8192c85cf76a34eb676fa2d7434a27.
- Note: this commit will be partially reverted in the next pass per the new user directive: links should show their underline ONLY on :hover/:focus-visible. The contrast bump still helps focus-visible.

### Mermaid Roboto (RESOLVED 2026-06-01)
- docusaurus.config.ts mermaid fontFamily switched from Inter-led to Roboto-led. Brand-family typography unification complete (Roboto sitewide: body + headings + diagrams + IMM presentations). Bundled into commit b2f93a532fe938a75b3d7afe24a96f1f9e648e06.

### Footer copyright IMM mark (RESOLVED 2026-06-01)
- "MicroCanvas® and IMM® are registered marks" → "MicroCanvas® and IMM-P® are registered marks". Closes the E-Q6 flag. Bundled into commit b2f93a532fe938a75b3d7afe24a96f1f9e648e06.

### NEW Phase F directives (2026-06-01, opened for next fan-out)

**F-1 — Links underline only on :hover / :focus-visible (sitewide)**
- User directive: all site links, including button-class CTAs (.cardCta, .buttonPrimary, .buttonSecondary, etc.) and inline body links, must show their underline ONLY on :hover and :focus-visible. Never on default state.
- Inverts the prior E-R3 default-underline-for-body-text rule.
- Touches: `src/css/custom.css` (global rules), possibly `src/components/imm/Pillars.module.css` (titleLink), any other component CSS that hardcodes `text-decoration: underline` at rest.

**F-2 — Dark / light mode parity (sitewide audit + fixes)**
- User directive: every page and every element must render correctly in BOTH light and dark mode.
- Touches: every IMM component module CSS, custom.css dark-mode `[data-theme="dark"]` ladder, every page with hardcoded hex colors or inline `style={{ color: '#...' }}`.

**F-3 — Card CTA layout: side-by-side on desktop**
- User directive: when a card has two CTAs, they render side-by-side on desktop (never stacked vertically). Mobile may stack.
- Touches: `.cardFooter` global class, any per-component card-footer overrides, any TSX that wraps CTAs in a column flex.

**F-4 — "Where you sit today" cards: 2 rows on desktop**
- User directive: identify the section titled "Where you sit today" (or similar capability-progression cards) and ensure it renders in 2 rows on desktop instead of 1.
- Likely target: a MaturityLadder usage somewhere with 5 rungs, OR the IMM-P page capability progression section.

**F-5 — Tier 3 "What Tier 3 delivers" visual order: EvidenceMeter below MaturityLadder**
- User directive: on `/services/clarityscan/audit`, the Phase readiness gauge (EvidenceMeter) currently shows BEHIND Phase progression (MaturityLadder), suggesting wrong z-order or grid position. Fix: position gauge BELOW the ladder in the layout, not behind.

**F-6 — Full 19-role re-audit at the end**
- User directive: once the F-batch backlog is drained, run the full 19-role multi-role audit again (per `feedback_full_audit_at_backlog_end` memory).

### F-1 (RESOLVED 2026-06-01)
- Sitewide link underline now only on `:hover` and `:focus-visible`. Inverts the prior E-R3 always-on body-text underline rule. Pillars titleLink also reversed. Commits: 66fb4fabd4a77bb29064270afed52e711e0184ae (custom.css), d35f4bb180754caf5426bda7aa9755e6f61967a5 (Pillars).

### F-3 (RESOLVED 2026-06-01)
- `.cardFooter` switched to flex-row + flex-wrap with gap; children flex:1 1 auto. Two CTAs side-by-side on desktop; column collapse at <= 600 px. Commit: 66fb4fabd4a77bb29064270afed52e711e0184ae.

### F-4 (RESOLVED 2026-06-01)
- MaturityLadder gained optional `layout?: 'auto' | 'wrap'` prop. `'wrap'` enables flex-wrap so 5 rungs split ~3+2 on desktop. Wired on the Tier 1 "Where you sit today" ladder. Commits: d35f4bb180754caf5426bda7aa9755e6f61967a5 (component), 1a00c44cf9cd77425f732f051640211ac1c2624e (wire-up).

### F-5 (RESOLVED 2026-06-01)
- Tier 3 "What Tier 3 delivers" grid restructured: EvidenceMeter now spans full row via `gridColumn: '1 / -1'`, placing it on row 2 below the MaturityLadder (row 1 holds Radar + MaturityLadder; row 3 holds Roadmap). Commit: 1a00c44cf9cd77425f732f051640211ac1c2624e.

### F-2 (RESOLVED 2026-06-01)
- Page-level: 11 inline-style color updates across `index.tsx`, `clarityscan.tsx`, `imm-dt.tsx`, `clarityscan/diagnostic.tsx`. Replaced too-dark brand tokens (--dl-indigo, --dl-slate) with Infima `--ifm-heading-color` / `--ifm-color-emphasis-*` / `--ifm-color-primary` for dark-mode parity.
- Component-level: dark-mode overrides added to Radar, MaturityLadder, EvidenceMeter module CSS (Pillars + Roadmap inspected and confirmed OK without override).
- Token-level (close-out): added the full dark-mode primary ladder in `src/css/custom.css` so `--ifm-color-primary` and its 6 siblings shift to a lighter shade of the IMM indigo axis (#8a7ad6 base) when `html[data-theme='dark']` is active. Eliminates the prior PARTIAL residual where Infima primary inherited the light-mode #38249a on dark backgrounds.
- Display + interaction follow-up (dd76b65, same session): user flagged that surfaces still resolving to `--dl-indigo` (which does not auto-flip) read as too-dark purple on dark backgrounds. Added dark-mode overrides: `.heroSubtitle` + `.pages-work-with-us-index__heroSubtitle` → white (display text needs max contrast, not a tinted accent); `.navbar__link:hover/:focus/--active` + `.pages-work-with-us-index__subnav a` → Doulab green (interaction signal, distinct from inactive, brand-tied); audit.tsx "Evidence-backed radar" h3 inline indigo dropped so it inherits `--ifm-heading-color` and auto-flips.
- Commits: 66fb4fabd4a77bb29064270afed52e711e0184ae (custom.css initial), d35f4bb180754caf5426bda7aa9755e6f61967a5 (components), 1a00c44cf9cd77425f732f051640211ac1c2624e (pages), a19f1a8 (dark-mode primary ladder close-out), dd76b65 (display + interaction overrides for non-auto-flipping --dl-indigo surfaces).
- Description: 29 `style-src-attr` CSP Report-Only violations on the production home page.
- T5 diagnostic (commit pending under T5 prompt; agent declined to swizzle): the violations split as follows:
  - 5 `style-src-attr` from `@docusaurus/core` BaseUrlIssueBanner inline injection (line 6 of build/index.html). NOT swizzlable — lives in @docusaurus/core, not theme-classic. Recommended follow-up: set `baseUrlIssueBanner: false` in `docusaurus.config.ts` to disable the dev-only banner injection entirely (the banner only fires on baseUrl misconfiguration).
  - 1 `style-src-attr` from theme-classic SVG sprite wrapper (line 19; `<svg style="display:none">`). NOT swizzlable — injected at the plugin level via `injectHtmlTags`. Recommended follow-up: accept-benign OR widen Report-Only `style-src-attr` to include a sha256 hash for that single declaration.
  - ~23 `style-src-attr` from our own IMM components and homepage section inline styles (line 22). These are CSS-custom-property setters (legitimate per the IMM dynamic-property pattern) and inline section-wrapper styles. Acceptable surface; would require either a larger swizzle effort or accepting `'unsafe-inline'` on `style-src-attr` in Report-Only.
- Status: ACCEPTED-BENIGN for now. Two narrowly-scoped follow-ups filed:
  - E-R2.2a: set `baseUrlIssueBanner: false` in config (5 violation drop).
  - E-R2.2b: add hash for SVG sprite display:none (1 violation drop).
- Commits: no impl (T5 declined to ship a no-op swizzle).

### E-R3 (BACKLOG, filed from R2 follow-up findings)
- Description: Page-level `link-in-text-block` + `label-content-name-mismatch` A11y fixes.
- Rationale: R2 (commit 070b3d5) fixed the component-level A11y issues but observed that two of the four failing Lighthouse audits trace to page-level patterns: inline `<a>` elements inside `<p>` or article text without underline (link-in-text-block) and CTA labels where the visible text and aria-label disagree (label-content-name-mismatch).
- Fix path:
  - Add a global `text-decoration: underline` rule for `<a>` inside paragraphs and article text in `src/css/custom.css`, OR add inline class to each link.
  - Sweep `src/pages/**/*.tsx` for `<a aria-label="X">Y</a>` patterns where X and Y do not share substring; align or drop the aria-label.
- Status: BACKLOG; not in scope for E-R1.
- Commits: pending.

### E-J1 (BACKLOG ONLY, DEFERRED)
- Description: Testimonials and named client quotes on doulab.net (homepage, case studies, services pages).
- Rationale: Audit-2026-06 CONV-003, SALES-002, BP-013. Four roles flagged zero attributed quotes as a P0 trust gap for procurement-eligible buyers, especially in regulated finance and public sector. Site shows 4 named clients (AFP Siembra, Alpha Inversiones, FUNDAPEC, OGTIC/RedLab) but no quotes from sponsors at any of them.
- Status: Explicitly deferred by user 2026-06-01. Needs content input that cannot be drafted from canonical sources: (a) actual quotes from named sponsors, (b) consent state for each (is the quote releasable, what attribution is allowed), (c) approval workflow with each client. Out of scope for the current automation-driven audit remediation.
- Acceptance criteria (when picked up):
  - At least 2 attributed quotes per public case study, each linked to a named sponsor (role + organization).
  - At least 1 homepage hero or proof-strip quote.
  - Consent log captured outside the repo (legal or CRM), referenced from a non-public ops doc.
  - No fabricated quotes. No AI-generated portraits.
- Commits: pending.

### E-F1 (INFORMATIONAL, accepted-benign)
- Description: Decision to accept Cloudflare's prefetch handling (`Purpose: prefetch` requests on 6 prefetched JS chunks return 503 from CF edge) as a benign artifact rather than fix it.
- Rationale: Discussed at length 2026-06-01. The 503s are returned only on prefetch-class requests (confirmed via direct-vs-prefetch diagnosis: same URL returns 200 on direct fetch from curl/Playwright; 503 only when browser sends `Purpose: prefetch`). Real users do experience these 503s on the silent prefetch — but their navigation is unaffected because the browser refetches on actual navigation. Lighthouse `errors-in-console` flags the 503s, capping prod BP at 78–79. User explicitly chose to accept this rather than spend further time digging through CF Speed/Optimization toggles or swizzling Docusaurus's `<Link>` component to disable prefetch hints.
- Effect on metrics: prod Lighthouse Best Practices remains capped at ~79 sitewide due to this single residual `errors-in-console` audit. Treat as a known cosmetic gap on lab BP scores, not a real-user issue.
- Open: if BP ever needs to be lifted (e.g., for a procurement-eligible Lighthouse threshold), revisit with one of: CF dashboard → Speed → Optimization → Speculation Rules toggle, or source-side swizzle of `theme-classic/NavbarItem/DefaultNavbarItem` to drop prefetch on internal links.

## G-batch (audit-2026-07 remediation, filed 2026-06-02)

Drawn from `docs/ops/audit-2026-07/00-index.md` consolidation of the 19 bilingual role files. Severity per audit; P0 ship first, P1 follow in G-2. Each entry cites the originating role-file ID for traceability. Bilingual scope is the default: EN + ES touched in the same commit.

### G-1 (RESOLVED 2026-06-02) — Locale-aware page metadata helper
- Description: Build `src/lib/page-metadata.ts` (or equivalent) that derives `canonical`, `og:url`, `og:image`, `hreflang` alternates, JSON-LD `url` / `inLanguage` from `(slug, locale, siteConfig)`. Apply to every `src/pages/**/*.tsx` and remove hand-rolled `<link rel="canonical">` strings.
- Rationale: Every ES page currently declares `<link rel="canonical" href="https://doulab.net/<en-path>">` and per-page `og:image` as `https://doulab.net/...` (apex host, EN path). Google interprets the ES pages as duplicates of the EN pages and drops them from the index — the entire E-I2 ES launch is invisible to organic search. Same root cause for og:image apex-vs-www inconsistency and EN-URL JSON-LD on ES pages. One architectural change closes the largest SEO regression on the property.
- Closes: IAUX-101, SEO-2026-07-001, SEO-2026-07-002, SEO-2026-07-006, SEO-2026-07-009.
- Files to change: `src/pages/about/index.tsx`, `src/pages/contact/index.tsx`, `src/pages/services/*.tsx` (8), `src/pages/case-studies/*.tsx` (5), `src/pages/vigia-futura/index.tsx`, `src/pages/index.tsx`, `src/pages/work-with-us/index.tsx`, `src/pages/insights/index.tsx`, `src/pages/services/clarityscan/{audit,diagnostic}.tsx`, `src/pages/book-clarityscan*.tsx`, `src/pages/privacy-terms.tsx`, `src/pages/terms-and-conditions.tsx`, `src/pages/404.tsx`; plus all 26 ES mirrors under `i18n/es/docusaurus-plugin-content-pages/`.
- Acceptance criteria:
  - Build output `build/es/about.html` has `<link rel="canonical" href="https://www.doulab.net/es/about">`; spot-check 6 more ES routes.
  - No hard-coded `https://doulab.net/` strings in `src/pages/**` or `i18n/es/**` (grep guard in `verify:build`).
  - `og:image` resolves to a single canonical host across both locales.
  - `npm run verify` exits 0.
- Status: RESOLVED 2026-06-02.
- Commits: dd8700d (impl + sweep + tsconfig paths fix).
### G-2 (RESOLVED 2026-06-02) — `book-clarityscan-success.tsx` auto-popup + false-success removal + paid-conversion event (bilingual)
- Description: Remove the `useEffect` `window.open` from `src/pages/book-clarityscan-success.tsx` AND `i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx`. Render explicit payment summary (amount, receipt id, email) and a prominent "Step 2 of 2: Schedule your session" manual-click button. Emit `cta.conversion.clarityscan.paid` with `{ locale, path }` on mount (depends on G-7 click-delegate landing first, or fire a one-off `window.cfBeacon` until then).
- Rationale: Carried from audit-2026-06 CONV-002, now doubled by ES. Modern browsers block the popup whenever the Stripe redirect counts as non-user-initiated; when blocked, the copy "We already opened the scheduling page in a new tab for you" / "Ya abrimos la página de agendamiento" is literally false. No payment summary, no conversion event, no locale-aware support fallback — the highest-trust moment in the funnel (visitor just spent CHF 150) is mishandled in both locales.
- Closes: CONV-2026-07-002, ANLT-007, BEHE-001, partial BEHP-009 adjacency.
- Files to change: `src/pages/book-clarityscan-success.tsx`; `i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx`. Consider extraction into a shared `src/components/checkout/SuccessPage.tsx` to prevent EN/ES drift (per CODE-101 + ANLT-011).
- Acceptance criteria:
  - `grep -n "window.open" src/pages/book-clarityscan-success.tsx i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx` returns no matches.
  - Both pages render payment-summary block + Step 2 of 2 button.
  - `cta.conversion.clarityscan.paid` event fires once per mount with locale property (verify via DevTools or CF Analytics).
- Status: RESOLVED 2026-06-02.
- Commits: 030f2e9 (impl).
### G-3 (RESOLVED 2026-06-02) — Vigía Futura blog OG image broken in both locales
- Description: Create `static/img/social/vigia-futura-foresight.{jpg,webp,avif}` (1200×630 derived from `static/img/vigia-futura-hero.{avif,png,webp}`) OR rewrite the frontmatter `image:` in both `blog/2025-09-22-vigia-futura-foresight-observatory.md:17` and `i18n/es/docusaurus-plugin-content-blog/2025-09-22-vigia-futura-foresight-observatory.md:17` to a path that exists. Recommendation: ship the asset, keep the path.
- Rationale: BLOG-002 from audit-2026-06 still unresolved; ES launch now duplicates the broken share preview. Anyone sharing the Vigía Futura blog post on LinkedIn or Twitter in either locale gets no image. While here, add a `verify:build` check that fails if a blog `image:` frontmatter path does not exist under `static/`.
- Closes: BLOG-002, partial SEO-2026-07-007.
- Files to change: `static/img/social/vigia-futura-foresight.{jpg,webp,avif}` (new); `blog/2025-09-22-vigia-futura-foresight-observatory.md` (optional path edit); ES mirror.
- Acceptance criteria:
  - `curl -I https://www.doulab.net/img/social/vigia-futura-foresight.jpg` returns 200 after deploy.
  - LinkedIn/Twitter preview tools (or a fetch with `User-Agent: facebookexternalhit`) return the Doulab card, not the boilerplate.
- Status: RESOLVED 2026-06-02.
- Commits: 2e997d6 (impl, wave 1).
### G-4 (RESOLVED 2026-06-02) — ES case-studies cards show EN "Read the case →"
- Description: Translate the project-card CTA on `/es/case-studies` from EN "Read the case →" to ES "Leer el caso →" (or the i18n-glossary-canonical choice from G-9). Likely a hardcoded string in the case-studies index component rather than a `<Translate>` entry; if the component is shared, refactor to consume a locale-aware label.
- Rationale: BRAND-107 image-confirmed at `viewport-2026-07-prod-v1/es/case-studies/1366x768.png`. Brand-integrity break: every card surrounding label (sector, capabilities, description) is in Spanish; the conversion CTA in English breaks the locale promise on a high-intent surface.
- Closes: BRAND-107.
- Files to change: `i18n/es/docusaurus-plugin-content-pages/case-studies/index.tsx` (single file fix per brief). If the CTA is in `src/components/case-studies/CaseStudyCards.tsx`, refactor to accept a `ctaLabel` prop and pass the ES translation from the ES page.
- Acceptance criteria:
  - `grep -n "Read the case" i18n/es/docusaurus-plugin-content-pages/case-studies/` returns nothing.
  - Re-capture `viewport-2026-07-prod-v1/es/case-studies/1366x768.png` shows ES CTA label.
- Status: RESOLVED 2026-06-02.
- Commits: 2e997d6 (impl, wave 1).
### G-5 (RESOLVED 2026-06-02) — Sitemap-per-locale hreflang annotations + sitemap_index
- Description: Inject `<xhtml:link rel="alternate" hreflang="…" href="…">` alternates into every `<url>` entry of both `build/sitemap.xml` and `build/es/sitemap.xml`. Publish `build/sitemap_index.xml` listing both per-locale sitemaps. Update `static/robots.txt` to point at the index. Inject `<link rel="alternate" hreflang="en|es|x-default" href="…">` into every page `<head>` via a small Docusaurus plugin or theme `Root` swizzle.
- Rationale: SEO-2026-07-003 / I18N-005 / I18N-020. Both sitemaps are flat `<urlset>` lists with no `xhtml:link` children; no `sitemap_index.xml`; `robots.txt` points only at the EN sitemap. Combined with G-1, Google has no signal that `/services/clarityscan` and `/es/services/clarityscan` are translation pairs. This is the single largest cross-locale discoverability win.
- Closes: SEO-2026-07-003, I18N-005, I18N-020, hreflang half of I18N-007 risk.
- Files to change: new `plugins/hreflang-alternates/` (small Docusaurus plugin) OR theme `Root` swizzle; `static/robots.txt`; `docusaurus.config.ts` sitemap-plugin config block.
- Acceptance criteria:
  - `build/sitemap.xml` `<url>` entries contain `<xhtml:link rel="alternate" hreflang="en" …/>` + `hreflang="es"` + `hreflang="x-default"`.
  - `build/sitemap_index.xml` exists and lists both per-locale sitemaps.
  - Every `build/**/*.html` `<head>` contains the three hreflang `<link rel="alternate">` entries.
  - `static/robots.txt` `Sitemap:` directive points at the index.
- Status: RESOLVED 2026-06-02.
- Commits: 030f2e9 (impl, postbuild script + robots).
### G-6 (RESOLVED 2026-06-02) — Doubled `/blog/tags/blog/tags/*` URLs (year-old defect)
- Description: Strip `permalink:` lines from every entry in `blog/tags.yml` (Docusaurus prefixes `/blog/tags/` automatically). Rebuild and verify both `build/blog/tags/` and `build/es/blog/tags/` directories no longer contain `blog/tags/blog/tags/` subdirectories; verify both sitemaps no longer list doubled URLs.
- Rationale: SEO-2026-07-004 / audit-2026-06 SEO-001 — never resolved. 15 doubled URLs per locale (30 total) currently ship as real duplicate-content pages, polluting the index. Single-file fix.
- Closes: SEO-2026-07-004, audit-2026-06 SEO-001 (carryover).
- Files to change: `blog/tags.yml` (delete `permalink:` line from each entry).
- Acceptance criteria:
  - `grep -n "permalink:" blog/tags.yml` returns nothing.
  - `find build -path "*/blog/tags/blog/tags/*" -type d` returns nothing.
  - Neither sitemap contains `/blog/tags/blog/tags/`.
- Status: RESOLVED 2026-06-02.
- Commits: 2e997d6 (impl, wave 1).
### G-7 (RESOLVED 2026-06-02) — `data-cta` click delegate with locale-namespaced events + analytics taxonomy fixes
- Description: Ship `src/components/cta-events.ts` (~40 lines): document-level click delegate that reads `[data-cta]` attribute and emits a CF Web Analytics custom event with `{ cta, locale, path }`. Locale derived from `document.documentElement.lang` or `location.pathname.startsWith('/es/')`. Load once from `src/theme/Root.tsx`. Concurrent rename: the six `wwu_*` ids in `src/pages/work-with-us/index.tsx` and the ES mirror to `cta.wwu.<slot>.<intent>` (snake-case to dot, add `cta.` prefix). Add `scripts/verify-analytics.mjs` to `verify:build`: (1) grep `build/**/*.html` and `build/**/*.js` for forbidden trackers; (2) assert ES `data-cta` set is a subset of EN set.
- Rationale: ANLT-006 (P0) — 99 EN + 99 ES `data-cta` taggings produce zero event data because no click delegate exists. ANLT-002 — `wwu_*` ids break the `cta.*` grep filter. ANLT-013 — no CI guard ensures ES translation passes don't translate analytics keys. CONV-2026-07-004 — locale is not a dimension, ES funnel performance is unmeasurable. Unlocks ANLT-007, -010, -014, -015 downstream.
- Closes: ANLT-001, ANLT-002, ANLT-006, ANLT-013, CONV-2026-07-004; enables G-2's event emission.
- Files to change: new `src/components/cta-events.ts`; new `scripts/verify-analytics.mjs`; `src/theme/Root.tsx`; `src/pages/work-with-us/index.tsx` + ES mirror; `package.json` (wire verify-analytics into `verify:build`).
- Acceptance criteria:
  - `grep -rn 'data-cta="wwu_' src/ i18n/` returns nothing.
  - Click on any `[data-cta]` element fires a CF Analytics custom event with the expected `{ cta, locale, path }` payload.
  - `npm run verify:build` fails on a synthetic ES file containing a new `data-cta` value not present in EN.
- Status: RESOLVED 2026-06-02.
- Commits: 4de3d47 (impl).
### G-8 (RESOLVED 2026-06-02, partial) — Bilingual pricing infrastructure (needs Luis decision)
- Description: Decide currency strategy for ES/LATAM: (a) keep CHF as premium signal + add mental-accounting microcopy (BEHE-004 / -011), (b) dual-display `CHF 150 (~USD 165)` everywhere, or (c) split Stripe SKU into per-locale Price IDs (CHF for EN, USD for ES). Implement chosen path: per-locale Stripe Checkout constants in `src/constants/urls.ts`, per-locale Stripe success URL configuration (so `/es/services/clarityscan` payers land on `/es/book-clarityscan-success`, not the EN page), publish "from CHF X" anchors on T2/T3/IMM-P®/Workshop tiers (SALES-101).
- Rationale: CONV-2026-07-001 (P0), CONV-2026-07-011, BEHE-004 / -011, SALES-101, SALES-112. ES buyer pays in unfamiliar currency, lands on EN booking page, returns to EN success page; LATAM committee buyers cannot bracket spend on T2/T3/IMM-P® because no anchor is published. Open question for Luis blocks G-8 design but not G-8 filing.
- Closes (conditional on decision): CONV-2026-07-001, CONV-2026-07-011, SALES-101 (partial — workshop + coaching tier bands need separate decisions), BEHE-011.
- Files to change: `src/constants/urls.ts`; Stripe Dashboard SKU/Price config (out-of-repo); `src/pages/services/clarityscan.tsx` + tier subpages + ES mirrors; per-tier pricing copy on `services/{coaching-mentoring,custom-workshops,innovation-readiness-workshop,innovation-maturity}.tsx` + ES mirrors.
- Acceptance criteria:
  - Decision documented in `docs/ops/decisions/` (currency stance for ES).
  - ES Stripe payment redirects to `/es/book-clarityscan-success` (verify in Stripe Dashboard or via paid test transaction).
  - T2, T3, IMM-P®, workshop pages each carry a published anchor or stated "Custom".
- Status: RESOLVED (partial) 2026-06-02. Luis decision: **(a) keep CHF as premium signal + add mental-accounting microcopy**, EN + ES mirrored. Shipped microcopy "Billed in CHF; local equivalent shown at checkout." / "Facturado en CHF; verás el equivalente local al pagar." across 7 EN + 7 ES surfaces (`src/pages/services/clarityscan.tsx`, `src/pages/index.tsx`, `src/pages/services/index.tsx`, `src/pages/services/imm-dt.tsx` + ES mirrors). Per-locale Stripe Price IDs + ES success-page redirect NOT shipped (option (c) deferred).
- Commits: pending (Wave B).

### G-9 (RESOLVED 2026-06-02) — `--dl-green-text` token + A11Y contrast remediation
- Description: Introduce paired tokens `--dl-green-text` (darker variant, ~`#3f8a1f` or `#2f7a3f`, ≥4.5:1 on white) and `--dl-green` (brand fill) in `src/css/custom.css`. Replace inline `style={{ color: 'var(--dl-green, …)' }}` with a class that uses `--dl-green-text` on `src/pages/services/imm-dt.tsx`, `services/clarityscan/diagnostic.tsx`, `src/pages/index.tsx`, and `src/components/imm/MaturityLadder.module.css`. Flip `.badgeTarget` text color from `#fff` to `#0b0e19`. Flip IMM funnel labels on `--p2` and `--p4` / `--p5` bars to `#0b0e19` (matches existing `--p2b` / `--p3` convention at `custom.css:690-691`). Add inline-prose-link underline carve-out: `main p a:not(.buttonPrimary):not(.buttonSecondary):not(.cardCta) { text-decoration: underline; text-decoration-thickness: from-font; text-underline-offset: 2px; }`. (Requires Luis sign-off because it crosses `feedback_links_underline_on_hover` — minimum carve-out needed to clear WCAG 1.4.1.)
- Rationale: A11Y-2007-01 / -02 / -03 / -07, LH-006a/b. `--dl-green` on white = 2.15:1 in 4+ places; IMM funnel labels white-on-cyan/coral = 2.88-2.98:1; inline prose links `#38249a` on body text = 1.5:1 with no underline. Drives a11y scores to 88-89 across the IMM/ClarityScan family. T9 cross-role theme.
- Closes: A11Y-2007-01, A11Y-2007-02, A11Y-2007-03, A11Y-2007-07, LH-006a/b (partial — A11Y-2007-04/-05 role-allowed-list goes in G-10).
- Files to change: `src/css/custom.css` (token block + funnel label colors + prose-link rule); `src/components/imm/MaturityLadder.module.css`; `src/pages/services/imm-dt.tsx`; `src/pages/services/clarityscan/diagnostic.tsx`; `src/pages/index.tsx`; ES mirrors where inline styles exist.
- Acceptance criteria:
  - Lighthouse `color-contrast` audit passes on `/services/imm-dt`, `/services/clarityscan/diagnostic`, `/services/innovation-maturity`, `/` (both locales).
  - Lighthouse `link-in-text-block` audit passes on the same set.
  - Visual diff vs prior viewport-2026-07 sweep shows no regressions on dark mode.
- Status: RESOLVED 2026-06-02. Shipped in two passes. **Pass 1 (Wave A)**: prose-link carve-out at `src/css/custom.css` (inline `main p a:not(.button)...` underlines always). **Pass 2 (Wave C)**: `--dl-green-text` token (`#3f8a1f` light / `#9fd96a` dark) added to `:root` + dark theme block. Inline `var(--dl-green, ...)` swept to `var(--dl-green-text, ...)` in text contexts on `services/imm-dt.tsx`, `services/clarityscan/{diagnostic,audit}.tsx`, `index.tsx`, plus ES mirrors, plus `MaturityLadder.module.css` text rules. `.badgeTarget` color flipped `#fff` → `#0b0e19`. IMM funnel labels: `--p2`, `--p4`, `--p5` added `color: #0b0f19;` matching existing `--p2b` / `--p3` convention. Borders + fills remain on `--dl-green` (correctly).
- Commits: Wave A (3f2363e), Wave C (pending).

### G-10 (RESOLVED 2026-06-02) — `.heroSubtitle text-align: justify` mobile fix
- Description: Inside `@media (max-width: 700px)` in `src/css/custom.css`, add `.components-hero__subtitle, .pages-b4-p2__heroSubtitleJustify, [class*="hero__subtitle"] { text-align: left; }`. Optionally add `text-wrap: balance` + `max-inline-size: ~52ch` on `.heroSubtitle` site-wide so longer ES copy wraps cleanly without overflow.
- Rationale: BRAND-105 / MOBL-001 / MOBL-006 / MOBL-007 / MOBL-009 / VP-001 / VP-002, image-confirmed P0 in three locations: `/es/contact` 390x844 H1 has ~50-80 px word-rivers, `/case-studies` 360x640 has rivers in BOTH locales, `/es/home` 360x640 hero is unreadable. Single most visible mobile defect on the ES surface, and image-confirmed not ES-only.
- Closes: BRAND-105, MOBL-001, MOBL-002, MOBL-006, MOBL-007, MOBL-008, MOBL-009, VP-001, VP-002.
- Files to change: `src/css/custom.css:1459-1461, 1744-1746` + new mobile media block.
- Acceptance criteria:
  - Re-capture `viewport-2026-07-prod-v1/{en,es}/{home,contact,case-studies}/360x640.png` and `390x844.png`; rivers gone.
  - Desktop hero (≥800 px) typography unchanged.
- Status: RESOLVED 2026-06-02.
- Commits: 2e997d6 (impl, wave 1).
### G-11 (RESOLVED 2026-06-02) — `| Doulab | Doulab` duplicate title-suffix sweep
- Description: Remove the trailing `| Doulab` from every page-local `title=` string in `src/pages/**` (~25 files); let Docusaurus's `<Layout>` append the site title once. Mirror in ES locale.
- Rationale: SEO-2026-07-005, confirmed across `build/about.html`, `build/contact.html`, `build/services/clarityscan.html`, `build/vigia-futura.html`, `build/case-studies.html`, plus all ES counterparts. Titles lose 8-12 visible characters of SERP pixel budget to the duplicate suffix; some long titles get truncated before the brand renders once. Trivial sweep.
- Closes: SEO-2026-07-005.
- Files to change: `src/pages/**/*.tsx` (every page that sets `<Layout title="…">` or equivalent); `i18n/es/docusaurus-plugin-content-pages/**/*.tsx`.
- Acceptance criteria:
  - `grep -rn 'title=".* | Doulab"' src/pages i18n/es/docusaurus-plugin-content-pages` returns nothing.
  - `build/**/*.html` contains exactly one `| Doulab` per `<title>`.
- Status: RESOLVED 2026-06-02.
- Commits: 2e997d6 (impl, wave 1).
### G-12 (RESOLVED 2026-06-02) — Em-dashes in ES blog bodies (no-em-dash rule violation)
- Description: Replace 6 em-dash (U+2014) instances in `i18n/es/docusaurus-plugin-content-blog/2025-09-12-clarityscan-decision-latency.md` (TL;DR + 4 References list + 1 body) and `i18n/es/docusaurus-plugin-content-blog/2026-01-19-coordination-threshold.md:22` (TL;DR) with colons, en-dashes, commas, or parentheses per the per-instance fit. Confirm with Luis that the EN dated-body grandfather does NOT extend to ES (ES surface launched after the exclusion).
- Rationale: BLOG-004, COPY-112. The `feedback_no_em_dashes` rule applies to user-facing copy on every Doulab property; ES blog bodies are net-new surface launched in commit `eb1c8c8` and not subject to the EN dated-body grandfather. EN pages and `i18n/es/.../pages/` confirmed clean; only ES blog corpus needs the sweep.
- Closes: BLOG-004 (ES scope only).
- Files to change: `i18n/es/docusaurus-plugin-content-blog/2025-09-12-clarityscan-decision-latency.md`; `i18n/es/docusaurus-plugin-content-blog/2026-01-19-coordination-threshold.md`.
- Acceptance criteria:
  - `grep -P "\xe2\x80\x94" i18n/es/docusaurus-plugin-content-blog/` returns nothing.
- Status: RESOLVED 2026-06-02. Luis confirmed NO grandfather for ES. Swept 6 em-dashes: TL;DR header in `2026-01-19-coordination-threshold.md:22` → colon; TL;DR header in `2025-09-12-clarityscan-decision-latency.md:22` → colon; 4 citation separators on lines 292-295 → removed (period+space already preceded the source link).
- Commits: pending (Wave A).

### G-13 (P1) — Google Workspace ES appointment schedules (was: Microsoft Bookings)
- Description: **Reframed 2026-06-02**: platform migrated from Microsoft Bookings → Google Workspace (Google Calendar appointment scheduling). Provision ES Google Workspace appointment schedules (`/discovery-es`, `/briefing-es`, optionally `/clarityscan-es`, `/clarityscan-t2`, `/clarityscan-t3`) with Spanish meeting agenda copy. Wire each to a corresponding `booking.doulab.net/*` Cloudflare Redirect Rule (origin: Google Calendar appointment URL, similar to existing `booking.doulab.net/discovery → calendar.app.google/...`). Add `BOOKING_DISCOVERY_URL_EN/ES`, `BOOKING_BRIEFING_URL_EN/ES` constants in `src/constants/urls.ts`. Migrate the 14 EN call sites and 14 ES call sites to import the locale-correct constant.
- Rationale: CONV-2026-07-005 (P1), CONV-2026-07-010, ANLT-009. All booking exits currently go to a single English Microsoft Bookings instance; ES visitor clicks Spanish CTA and lands on EN calendar. 14+ literal `https://booking.doulab.net/discovery` strings × 2 locales = 28 sites with no locale-aware routing.
- Closes: CONV-2026-07-005, CONV-2026-07-010 (partial — T2/T3 tier-specific calendars are the second half), ANLT-009.
- Files to change: Microsoft Bookings admin (out-of-repo); `src/constants/urls.ts`; 14 EN page files + 14 ES mirrors that hard-code `booking.doulab.net/{discovery,briefing}`.
- Acceptance criteria:
  - `grep -rn "https://booking.doulab.net/" src/pages i18n/es/docusaurus-plugin-content-pages` returns no literal strings (all via constants/helper).
  - Click on `/es/contact` discovery CTA navigates to the ES Bookings service.
- Status: Open (Google Workspace appointment-schedule provisioning is an out-of-repo task on Luis's GWS tenant — blocked on that work, not on a decision).
- Commits: pending.

### G-14 (RESOLVED 2026-06-02) — Glossary canonicalization sweep (Gate, Case studies, CTA verbs, MCF version, cocrear)
- Description: Create `docs/ops/i18n-glossary.md` documenting canonical ES choices: **Gate → compuerta** (replace `punto de control` 10× and untranslated `gate` 1×); **Case studies → Casos de éxito** (update `navbar.json:19`, `footer.json:23`, `index.tsx:293`); **CTA verbs → Reserva** (paid Stripe) / **Agenda** (free booking) / **Empieza** (navigational); **MCF version → `MicroCanvas® Framework 2.2` / `MCF 2.2`** (sweep `MicroCanvas® Framework 2.1` 8× in `services/innovation-readiness-workshop.tsx` EN+ES); **cocrear** (no hyphen, RAE-current). Add CI grep guards. Translate the ~96 Mermaid node labels in 4 ES case-study files using the new glossary.
- Rationale: I18N-001 (P0), I18N-002 (P0), I18N-003, I18N-004, COPY-102, COPY-103, COPY-105, COPY-106, COPY-115, T6 cross-role theme. Glossary drift across translation batches; same concept appears under different labels in nav, body, links, mermaid. Buyer building a mental model cannot tell whether these are the same construct.
- Closes: I18N-001, I18N-002, I18N-003, I18N-004, COPY-102, COPY-103, COPY-105, COPY-106, COPY-115.
- Files to change: new `docs/ops/i18n-glossary.md`; `i18n/es/docusaurus-theme-classic/{navbar,footer}.json`; `i18n/es/docusaurus-plugin-content-pages/case-studies/{index,afp-siembra,alpha-inversiones,fundapec,ogtic-redlab}.tsx`; `i18n/es/docusaurus-plugin-content-pages/services/imm-dt.tsx`, `index.tsx`, `contact/index.tsx`; `i18n/es/docusaurus-plugin-content-docs/current/research-resources/{distributed-federated-agentic-ai.md, innovation-lab-guide/07-imm-maturity.mdx, releases.mdx}`; `src/pages/services/innovation-readiness-workshop.tsx` + ES mirror; `scripts/verify-glossary.mjs` (new).
- Acceptance criteria:
  - `grep -n "punto de control" i18n/es/` returns matches only in monitoring/dashboard contexts (zero in IMM-P® gate references).
  - `grep -n "MicroCanvas® Framework 2.1\|MCF 2.1" src/ i18n/` returns nothing.
  - Mermaid diagrams in ES case studies have Spanish node labels.
- Status: RESOLVED 2026-06-02. Shipped in two passes. **Pass 1 (Wave B)**: Gate canonical FLIPPED to `punto de control` (smaller sweep — `compuerta` was minority); `Casos de estudio`; CTA verbs Reserva/Agenda/Empieza; `docs/ops/i18n-glossary.md`. **Pass 2 (Wave C)**: MCF version `MicroCanvas® Framework 2.1` → `2.2` in EN+ES `innovation-readiness-workshop.tsx` (8 instances total); `cocrear` unification across 8 ES files (Co-creamos/Co-creemos/Co-crearemos/co-creados/co-creen → no-hyphen forms; English book title in `11-references.mdx` preserved); Mermaid node labels in 4 ES case-study files translated to Spanish (8 blocks total, agent-executed, brand marks + node IDs + arrow operators preserved).
- Commits: Wave B (3f2363e), Wave C (pending).

### G-15 (RESOLVED 2026-06-02) — Domain canon: MCF, VIF, home brand-marks, IMM-P® in diagnostics
- Description: Four-part single commit. (a) `vigia-futura/index.tsx:150` EN+ES: `Methodology Coherence Framework` → `MicroCanvas Framework` (consider adding ®). (b) `vigia-futura/index.tsx:154` EN+ES + `docs/research-resources/index.mdx:99` EN+ES: `Vigía Incubation Framework` → `Vigía Incubanet Framework` (do not localize — `Incubanet` is a proper noun). (c) `src/pages/index.tsx:77,79,90,92`: restore `®` on `ClarityScan` and `í` accent on `Vigía Futura`; verify ES home parity. (d) `src/pages/services/diagnostics.tsx:19,44`: bare `IMM` → `IMM-P®` in "Built on …" credit lines; mirror ES.
- Rationale: DOMN-001 (P0), DOMN-002 (P0), DOMN-003 (P0), DOMN-004 (P0), T11 cross-role theme. Single-pass canon-integrity sweep; each piece is a 2-4 line edit. Highest-visibility brand drift on the site.
- Closes: DOMN-001, DOMN-002, DOMN-003, DOMN-004 (parts a-d).
- Files to change: see Description.
- Acceptance criteria:
  - `grep -rn "Methodology Coherence Framework" src/ i18n/` returns nothing.
  - `grep -rn "Vigía Incubation Framework\|Vigia Incubation Framework" src/ i18n/ docs/` returns nothing.
  - `grep -rn "Vigia Futura" src/` returns nothing (accent restored).
  - `grep -n "Built on MicroCanvas® 2.2 and IMM[^-]" src/pages/services/diagnostics.tsx i18n/es/docusaurus-plugin-content-pages/services/diagnostics.tsx` returns nothing.
- Status: RESOLVED 2026-06-02.
- Commits: 2e997d6 (impl, wave 1).
### G-16 (RESOLVED 2026-06-02) — IMM-DT ES translation parity verification
- Description: Read `i18n/es/docusaurus-plugin-content-pages/services/imm-dt.tsx` in full. Diff against EN to find untranslated holdouts (six-horizon roadmap labels `Baseline`, `First wins`, `Process anchoring`, `Cohort progression`, `Scale and govern`, `Compounding`; five-rung DT ladder labels; "What IMM-DT does not do" boundary; pilot reference). Translate any holdouts using the G-14 glossary.
- Rationale: DOMN-010 (P0). Per brief: "any drift in domain framing between EN and ES is a P0 brand-integrity issue". IMM-DT is the digital-transformation vertical of IMM-P®; if ES roadmap labels remain in English, the page reads as half-translated on the highest-trafficked vertical.
- Closes: DOMN-010.
- Files to change: `i18n/es/docusaurus-plugin-content-pages/services/imm-dt.tsx`.
- Acceptance criteria:
  - Side-by-side diff of EN vs ES shows only translated-string differences, no untranslated literals.
- Status: RESOLVED 2026-06-02.
- Commits: 2e997d6 (impl, wave 1).
### G-17 (P0 ethics) — ClarityScan time-claim reconciliation (15-20 vs 30-45)
- Description: Adjudicate canonical truth with Luis (split-product Path A: Tier 1 Snapshot 15-20 min self-serve + named ClarityScan Conversation 30-45 min analyst-led; or Path B: unify on 30-45 across all surfaces). Sweep 14+ EN + ES surfaces accordingly (home, services/clarityscan, services pages, about, insights, case-study finals, blog `2025-09-12-clarityscan-decision-latency.md` lines 22/30/32/106/108/116). Update the `Hero.tsx:33` JSDoc example so future pages don't copy the stale claim.
- Rationale: BEHP-001 (P0 ethics), BEHP-002 (P0 ethics), BEHP-011 (P3), BLOG-001 (P0), audit-2026-06 BP-003 — never resolved. A product whose entire pitch is "decision latency" cannot maintain a time-promise drift; expectancy violation on time-to-baseline is the failure mode the buyer is paying to eliminate. Now doubled by ES.
- Closes: BEHP-001, BEHP-002, BEHP-011, BLOG-001 (delete `.bak` as part of sweep).
- Files to change: depends on path. Path A: rename `book-clarityscan*` / Stripe SKU, add ClarityScan-Conversation surface, edit blog post headline; Path B: edit 14+ surfaces site-wide. Either path includes `blog/_backup_2025-09-12-clarityscan-decision-latency.bak` deletion.
- Acceptance criteria:
  - `grep -rn "15 to 20\|15-20\|15 a 20" src/ i18n/ blog/` returns matches only on Path-A-consistent surfaces (or none on Path B).
  - `grep -rn "30 to 45\|30-45\|30 a 45" src/ i18n/ blog/` returns matches consistent with chosen path.
  - `blog/_backup_*.bak` deleted; `*.bak` added to `.gitignore`.
- Status: Open (blocked on Luis adjudication of Path A vs B).
- Commits: pending.

### G-18 (RESOLVED 2026-06-02) — Privacy-terms processor accuracy (Microsoft Bookings, Stripe hedge, CF Pages Functions)
- Description: Three-part edit in both EN and ES `privacy-terms.tsx` and `docs/ops/gdpr-compliance.md`. (a) Replace every "Google Calendar appointment links" / "enlaces de citas de Google Calendar" with "Microsoft Bookings (Microsoft 365)" / "Microsoft Bookings (Microsoft 365)" in the data-sharing and processor sections. (b) Drop "if applicable" hedge on Stripe line in `gdpr-compliance.md:23`. (c) Expand "Cloudflare Pages (hosting and analytics)" to "Cloudflare Pages (hosting, analytics, and edge HTML processing for security headers)" to disclose `functions/_middleware.ts` per-request edge processing.
- Rationale: SEC-101 (P1) — largest GDPR/nFADP accuracy gap, doubled by ES. SEC-102 (P2). SEC-103 (P2). Audit-2026-06 SEC-009 / SEC-006 never resolved.
- Closes: SEC-101, SEC-102, SEC-103.
- Files to change: `src/pages/privacy-terms.tsx:91-95,113-115,144-155,247-249`; `i18n/es/docusaurus-plugin-content-pages/privacy-terms.tsx:91-94,112-115,144-155,246-249`; `docs/ops/gdpr-compliance.md:10,22,23`.
- Acceptance criteria:
  - `grep -rn "Google Calendar" src/pages/privacy-terms.tsx i18n/es/docusaurus-plugin-content-pages/privacy-terms.tsx docs/ops/gdpr-compliance.md` returns nothing.
  - `grep -n "if applicable" docs/ops/gdpr-compliance.md` returns nothing on the Stripe line.
- Status: RESOLVED 2026-06-02. Shipped in two passes. **Pass 1 (Wave A)**: Cloudflare disclosure expanded from "Cloudflare Web Analytics" to "Cloudflare (hosting and edge HTML processing) and Cloudflare Web Analytics (privacy-respecting analytics)" at `privacy-terms.tsx` EN+ES. Booking-processor edit MOOT (text already said "Google Calendar appointment links", now factually correct post-G-20). Stripe `privacy-terms.tsx` hedge already absent. **Pass 2 (Wave C)**: dropped the last "if applicable" hedge in `docs/ops/gdpr-compliance.md:23` ("Stripe Checkout for payments (if applicable to fixed-fee services)." → "Stripe Checkout for payments on fixed-fee services.").
- Commits: Wave A (3f2363e), Wave C (pending).

### G-20 (RESOLVED 2026-06-02) — MS Bookings → Google Calendar literal-text sweep + booking.doulab.net URL audit

- Description: Platform migration 2026-06-02 (MS Bookings → Google Workspace). Replaced literal "Microsoft Bookings" with "Google Calendar" in 4 live surfaces (EN + ES): `book-clarityscan-success.tsx:56` body sentence, `services/custom-workshops.tsx:163` aria-label. URLs unchanged (already on `booking.doulab.net/*` indirection). Changelog entries in `docs/releases.mdx` and ES mirror (4 historical lines) grandfathered as-is.
- Post-ship URL audit (curl, 2026-06-02): 5 of 6 Cloudflare Redirect Rules return 302 to Google Calendar (`booking.doulab.net/` → `calendar.google.com/calendar/u/0/appointments/...`; `/discovery`, `/clarityscan`, `/advisory`, `/hdworkshop` → `calendar.app.google/...`). **`/fdworkshop` returns HTTP 522** (Cloudflare connection timeout to origin) — out-of-repo Cloudflare config issue, filed for Luis to fix in CF Dashboard.
- Rationale: privacy-terms / aria-label / user-facing copy was wrong-by-name after the migration. Trust + accessibility surface.
- Closes: literal-text mismatch with the actual booking platform (was: audit-2026-06 T14, now MOOT given the platform itself moved).
- Status: RESOLVED 2026-06-02 (in-repo). `/fdworkshop` 522 carries forward to Luis (Cloudflare Dashboard).
- Commits: pending (Wave A).

### G-19 (P2) — Broken in-page anchors on 3 surfaces (EN + ES)

- Description: Docusaurus build at `9ffcb54` surfaced broken anchors on both locales:
  - `/services/clarityscan` → `#tier-1-detail` (also `/es/services/clarityscan`)
  - `/services/innovation-maturity` → `#imm-model` (also `/es/...`)
  - `/vigia-futura` → `#index` and cross-link `/services/innovation-maturity#imm-model` (also `/es/...`)
  Either add the missing `id="..."` anchors on the target sections, or rewrite the source links to existing anchors. Bilingual sweep: any rename must mirror EN → ES.
- Rationale: Build warnings (non-blocking today) but they signal navigational dead-ends — internal links promising deep-section jumps that resolve to page-top. Hurts UX + SEO crawl quality. The `#imm-model` and `#tier-1-detail` anchors are likely casualties of prior section restructures during Phase E/F.
- Closes: build-time anchor warnings on EN + ES.
- Files to change: `src/pages/services/clarityscan.tsx`, `src/pages/services/innovation-maturity.tsx`, `src/pages/vigia-futura.tsx` and their ES mirrors under `i18n/es/docusaurus-plugin-content-pages/`.
- Note: G-17 (ClarityScan time-claim) will touch `services/clarityscan` heavily — coordinate the `#tier-1-detail` fix with whichever G-17 path Luis picks (Path A may rename or remove the tier-1 section entirely, making this self-resolving).
- Acceptance criteria:
  - `npm run build` emits zero "Broken anchor" warnings for both EN and ES.
  - All previously-broken links either resolve to a real section id or have been rewritten.
- Status: Open.
- Commits: pending.

## P0

### B-P0-01
- Description: Remove or gate `/markdown-page`.
- Rationale: Sample page should not ship in production IA unless intentionally kept.
- Acceptance criteria:
  - `/markdown-page` is removed from production routes or explicitly gated behind a non-public mechanism.
  - Routes audit reflects the change.
- Status: Completed (B-P0-01)
- Commits: ded5a80ee8600205f512abef40decbd50d7d8169, f0a8a20f4a5a085eacdba15202bbccaf1e0f0751

### B-P0-02
- Description: Fix placeholder booking link.
- Rationale: Placeholder link is broken and harms conversions.
- Acceptance criteria:
  - No placeholder booking URL remains in repo.
  - Booking inventory shows only valid booking URLs.
- Commits: cc5da1010de433adbb6153d350a709b931c073c1

## P1

### B-P1-01
- Description: Define canonical booking.doulab.net entrypoints and refactor booking policy.
- Rationale: Mixed booking providers create inconsistent user experience and tracking.
- Acceptance criteria:
  - A single canonical booking domain or entrypoint is documented and implemented.
  - All booking CTAs point to the canonical entrypoint.
- Commits: 27bc2bd61d3c81da6b55bc804bd45f1c12fce0e4, cc5da1010de433adbb6153d350a709b931c073c1

### B-P1-02
- Description: CI Node pinning + Cloudflare Pages script parity.
- Rationale: Ensure CI uses a deterministic Node version and build parity with CF.
- Acceptance criteria:
  - CI configuration pins Node version compatible with package.json engines.
  - Cloudflare build scripts match repo scripts (`build:cf`, `verify:build`).
- Commits: 7cf8c4704e73986186dd56e3caf50b6769536bbc

## P2

### B-P2-01
- Description: Introduce EntityHeader + DocBadges patterns.
- Rationale: Standardized headers/badges improve consistency across pages.
- Acceptance criteria:
  - Components exist and are used on applicable pages.
  - Component parity scan shows expected usage.
- Commits: feaee1f1d791360745700df132eda04bb37f8e02, 4aad69da2f93c32393a37109567479f13b8adfcc

### B-P2-02
- Description: Remove inline styles plan.
- Rationale: Inline styles are hard to maintain and bypass theming consistency.
- Acceptance criteria:
  - Plan documented (scope, order, and refactor guidelines).
  - Inline styles inventory updated with a burn-down list.
- Status: Completed (B-P2-02)
- Commits: f37ff61b9bb1b158875bd10e3d8c227a3dd1b2fa

### B-P2-03
- Description: ES i18n manual plan (no Docusaurus scaffold).
- Rationale: Ensure bilingual rollout without scaffolding automation.
- Acceptance criteria:
  - Manual i18n structure and routing conventions defined.
  - No Docusaurus scaffold command used.
- Status: Completed (B-P2-03)
- Commits: f3f42b3a2e9b38cf2b6a638edcd99681168be745

### B-P2-04
- Description: Pass 1 UI primitives (PageHeader + CardGrid) and targeted inline style removal.
- Rationale: Establish shared patterns and reduce inline styling risk with minimal surface change.
- Acceptance criteria:
  - PageHeader applied to ≤ 3 pages in src/pages.
  - CardGrid applied to ≤ 2 pages in src/pages.
  - Inline styles reduced by at least 5 occurrences in src/components.
  - No new inline styles introduced.
- Status: Completed (Pass 1)
- Commits: 98d0e0a724c40b0664d9c837473a3535a1f274ea, 44285372c6595c9b3d7093bc24023920c9f88b32

### B-P2-05
- Description: Lighthouse baseline recorded + PDF archived.
- Rationale: Preserve baseline evidence and enable regression tracking.
- Acceptance criteria:
  - Baseline scores recorded in `docs/ops/performance-baseline.md`.
  - PDF archived under `ops/audits/doulab-net/` with deterministic filename.
- Status: Completed (Hardening Pass 2)
- Commits: f6930624a8c3f96b1ad839b05d95ac5124c66c11

### B-P2-06
- Description: Hardening Pass 3 baseline security + GDPR/CH compliance + 404 noindex.
- Rationale: Improve security posture and compliance transparency without breaking site behavior.
- Acceptance criteria:
  - `static/_headers` updated with baseline headers (HSTS, Permissions-Policy, Referrer-Policy, nosniff).
  - GDPR/CH compliance baseline documented and reflected in privacy/terms pages.
  - 404 includes `noindex,follow` and maintains helpful navigation.
  - Dependency prune proof recorded (no removals unless proven safe).
- Status: Completed (Hardening Pass 3)
- Commits: 0275390eafe46a129ab1bb283c60ce11b3a5daf4, 9de859c0484128e9876910fb09bde32684235b9a

## P3

### B-P3-01
- Description: Versioning rule for phase closeouts.
- Rationale: Align releases with documented phase outcomes.
- Acceptance criteria:
  - `package.json` version bumped only after successful phase closeouts.
  - Release notes reflect the phase completion.
- Commits: TBD

### B-P3-02
- Description: Fix missing `check:links` script target.
- Rationale: `npm run check:links` currently fails because `scripts/check-anchors.mjs` is missing.
- Acceptance criteria:
  - Either restore `scripts/check-anchors.mjs` from a known-good version, or
  - Update package scripts to remove/replace the missing script reference.
- Commits: TBD

### B-P3-03
- Description: Hardening Pass 3 (headers + GDPR copy review).
- Rationale: Reduce security/compliance risk before Phase B closeout.
- Acceptance criteria:
  - CSP enforced or documented; Referrer-Policy, Permissions-Policy, X-Content-Type-Options, HSTS, and clickjacking protection set.
  - Privacy/analytics disclosure aligns with Cloudflare Web Analytics and booking flow; no new legal claims.
  - `build:cf` and `verify:build` logs updated.
- Status: Completed (B-P3)
- Commits: e417e49, f81cdc3

## Phase B4 (UX polish, whole-site)

### B4-P1
- Description: Core nav + primary marketing pages polish.
- Rationale: Align top marketing routes with consistent headers, cards, and CTA hierarchy.
- Acceptance criteria:
  - No more than five pages modified in the pass.
  - Inline styles reduced on touched pages.
  - CTA/Next steps blocks consistent.
- Status: Completed (B4-P1)
- Commits: d8dc48636704f123517b3fee15879dfa6b923609, 530c64cd8c9649169151526dacc0ed7ee6b934e8

### B4-P2
- Description: Services subtree polish (`/services/*`).
- Rationale: Make services pages consistent and reduce duplication.
- Acceptance criteria:
  - Card grids and CTA blocks normalized across services pages.
  - Inline styles reduced on touched pages.
- Status: Completed (B4-P2)
- Commits: d555d01f6f1b2567843b4c030d9cc60f14f7b8d6, 55ab35f2b0d682c650d01deab4ac93a7ed87edc5

### B4-P3
- Description: Utility/legal/support pages polish.
- Rationale: Improve readability and consistency on lower-traffic, critical pages.
- Acceptance criteria:
  - Consistent header/section patterns across legal/support pages.
  - Inline styles reduced on touched pages.
- Commits: TBD

### B4-P3.1
- Description: Consolidate legal pages (privacy/terms) with a canonical route and forward page.
- Rationale: Reduce user confusion and ensure a single source of truth for legal content.
- Acceptance criteria:
  - `/privacy-terms` is canonical with anchors for privacy, analytics, bookings, terms, contact.
  - `/terms-and-conditions` remains route-safe and forwards users to the canonical page.
  - No inline styles added.
- Status: Completed (B4-P3.1)
- Commits: b61d5c9a94edb64f5f40aefbfdc030990a1562a2, 63fcd20c57e092a1590ce8682712223a76a342b3, 8684817966320351e92fe86aaf6b69437706052a, 503a34fd40683d1000d725ea696fcc812fe3a236

### B4-P3.2
- Description: UX consistency + accessibility micro-polish (plan + baseline).
- Rationale: Define scope and measurements before applying site-wide a11y polish.
- Acceptance criteria:
  - Plan document created with scope, baseline, and checks.
  - No site code changes in the plan-only fix.
- Status: Completed (B4-P3.2)
- Commits: dd32342423ecaa54484035c6205be6184dd925de, 6d2d63a, 341b38b804433599dde6278e64577a030034be8f, fe7d46ae1e51d252fa898c647143f34d4cefb073

### B4-P3.3
- Description: Final UX consistency + Lighthouse delta readiness (plan + baseline).
- Rationale: Capture scope and measurements before the last a11y/consistency polish.
- Acceptance criteria:
  - Notes document created with baseline and checklist.
  - No site code changes in the plan-only fix.
- Status: Completed (B4-P3.3)
- Commits: fb38bd82c9e1afd500f51b93c213cf2ced0289ab, e5fea86e2192528933cf3fc6c9cc6d44dd261bbc, 899cc03e604077130f1b3ee6755b22ac23191487

### B4-P4
- Description: Docs landing pages polish (docs-only components allowed).
- Rationale: Align docs entry points with consistent navigation and hierarchy.
- Acceptance criteria:
  - Docs landing pages use consistent headers and CTAs.
  - No docs-only components used in `src/pages/**`.
- Commits: 63adcc9f56f8aee3b2919e031bcb97dc126eabe6

## Phase B5 (Performance baseline)

### B5-P1
- Description: Performance and runtime baseline capture (docs-only).
- Rationale: Record current toolchain, build/verify timing, and build artifact sizes.
- Acceptance criteria:
  - Baseline document created under `docs/ops/phase-b5-p1-baseline.md`.
  - build:cf and verify:build executed with logs captured.
  - No code or config changes.
- Status: Completed (B5-P1)
- Commits: 4f84f4b09e154791fe3102f68c34c07d9dc88b97

### B5-P2
- Description: Performance quick wins (low-risk, proof-based).
- Rationale: Reduce decode cost for below-the-fold diagrams without altering IA or tooling.
- Acceptance criteria:
  - Plan and notes created under `docs/ops/phase-b5-p2-plan.md` and `docs/ops/phase-b5-p2-notes.md`.
  - Low-risk image decoding tweaks applied and documented.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B5-P2)
- Commits: 6dcc3cdbaed533c673132c3d420a253dad271d09, 27568e4844d8060ab9d3f8828b866e4035bff321

### B5-P3
- Description: Performance deep pass (proof-based improvements).
- Rationale: Reduce decode overhead and document bundle-size signals without UX/IA changes.
- Acceptance criteria:
  - Plan and notes created under `docs/ops/phase-b5-p3-plan.md` and `docs/ops/phase-b5-p3-notes.md`.
  - Low-risk performance tweaks applied and documented with before/after signals.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B5-P3)
- Commits: 63e416d3dd9ac4717dba2ab7a5c8e872f6aafdb0, cd423d1493d24c54a2d508d91b048270a3c13c82, a06dadef26faf034c91d80b916b42fd27fad19f5 (notes correction)

## Phase B6 (Freeze & Version)

### B6-Freeze
- Description: Freeze site at new release and record closeout artifact.
- Rationale: Lock B1-B5 outputs with auditable release notes and closeout record.
- Acceptance criteria:
  - Version bump committed (v0.9.0).
  - Release notes updated and closeout artifact created.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B6)
- Commits: 0ff76f9, 91b6308

## Phase B7 (Planning)

### B7-Plan
- Description: Post-freeze roadmap definition (plan-only).
- Rationale: Define objectives, scope boundaries, and acceptance criteria for the next phase.
- Acceptance criteria:
  - Plan created under `docs/ops/phase-b7-plan.md`.
  - No code or config changes.
- Status: Completed (B7 plan)
- Commits: 1fefcae6d339e1e38aad2b740e39573ebf03ab4e

### B7-P1
- Description: Performance quick wins with measurable before/after metrics.
- Rationale: Reduce payload footprint with low-risk, reversible changes and documented evidence.
- Acceptance criteria:
  - Baseline metrics captured in `docs/ops/phase-b7-p1-notes.md`.
  - Low-risk asset pruning documented with proof.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B7-P1)
- Commits: 676ca32ac51ed0d7876b225c05b79ef9f705c24f, cdaab4a5e05f94c48b9eed9b18d54819b0dfdfe7

### B7-P2
- Description: Image loading/decoding consistency (lazy-loading + eager exceptions).
- Rationale: Reduce render-blocking cost and standardize image attributes without layout changes.
- Acceptance criteria:
  - `docs/ops/phase-b7-p2-plan.md` and `docs/ops/phase-b7-p2-notes.md` created.
- Missing `loading="lazy"` count reduced to 0 for non-hero images.
- Eager/LCP exceptions documented (no more than two).
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B7-P2)
- Commits: 14c7111581ade04f2fbef2b48c793444c0905ccf, 4e88916f1c47d6bf1db31014df43442274fa5bd9

## Phase B8 (Diagram system)

### B8-P1
- Description: Define canonical Mermaid diagram system and templates for case studies (docs-only).
- Rationale: Provide a consistent, diff-friendly diagram grammar before per-case diagrams.
- Acceptance criteria:
  - `docs/ops/phase-b8-p1-diagram-system.md` created with two canonical diagram types.
  - `docs/ops/phase-b8-p1-notes.md` created with scope and summary.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B8-P1)
- Commits: 5146519c30a053b51393a353bb1fb1fd7c848fa2

### B8-P2
- Description: Add Mermaid diagrams to case study pages using the B8-P1 system.
- Rationale: Replace static process images with consistent, auditable diagrams.
- Acceptance criteria:
  - Each target case study contains exactly two Mermaid diagrams (System Flow + Capability Progression).
  - Diagrams use the canonical grammar and admonition wrapper.
  - build:cf and verify:build executed with logs captured.
- Status: Completed (B8-P2)
- Commits: bbb57f62051fe4f2b27f1aa8dba8782b44e047fb, 309fbb3aa4d32a3184f64b10bd2284d29d255b98

### B8-P3
- Description: Remaining case study diagrams (AFP Siembra, Fundapec).
- Rationale: Close out remaining scope if any.
- Acceptance criteria:
  - No additional diagrams required; scope already satisfied by B8-P2.
  - Closeout recorded in `docs/ops/phase-b8-p3-closeout.md`.
- Status: Done (Covered by B8-P2; no remaining scope)
- Commits: 309fbb3aa4d32a3184f64b10bd2284d29d255b98, 7c56d5a5f3d9d8f696f6e6d6a1c7c1372b4a6e5e

## Phase C — Information Architecture & Maintainability

### C1
- Description: Case studies IA implementation (reorder sections, diagram placement, missing sections).
- Rationale: Align case study structure to an executive-first narrative and reduce floating diagrams.
- Acceptance criteria:
  - Case studies follow the canonical order (Hero -> Snapshot -> Context -> Problem -> Approach -> Delivery -> Results -> Diagrams -> CTA).
  - Diagrams are referenced in narrative and appear after Results by default.
  - Missing sections flagged in Phase C0 audit are added.
- Evidence: `docs/ops/phase-c0-case-studies-ia-audit.md`
- Status: Done
- Commits: afdebb4, 21c0bb0, 17cbaa9, 4382b81

### C2
- Description: Anchor & in-page navigation normalization.
- Rationale: Prevent broken deep links and improve navigability.
- Acceptance criteria:
  - Heading IDs align with in-page links.
  - Anchor usage normalized across pages.
- Status: Done
- Commits: 78fe9c9

### C3
- Description: CSS consolidation (safe path only).
- Rationale: Reduce styling drift while preserving component encapsulation.
- Acceptance criteria:
  - Global tokens/utilities consolidated into `custom.css`.
  - Component/page CSS modules remain untouched.
- Status: Not started
- Commits: TBD

### C4
- Description: Accessibility micro-fixes.
- Rationale: Address high-signal a11y gaps with low risk changes.
- Acceptance criteria:
  - Contrast fixes applied to problem cards.
  - Non-color link affordances added where needed.
- Status: Done
- Commits: 39bb2c2, 65ae797

### C5
- Description: SEO clarifications.
- Rationale: Remove ambiguity around intentional SEO decisions.
- Acceptance criteria:
  - Robots directives are explicit.
  - Known Lighthouse warnings are documented if retained.
- Status: Blocked (robots.txt missing; source unknown)
- Notes: robots.txt not found in repo; locate hosting/generation source before changes.
- Commits: 6bb71b8

### C6
- Description: CTA card pattern.
- Rationale: Replace standalone CTA-style text blocks with a reusable card-based UI pattern.
- Acceptance criteria:
  - CTA card pattern documented for use after Results and before final CTA.
  - Applies sitewide (case studies, services, insights).
  - No visual redesign or copy rewrites beyond structural adaptation.
- Status: Done
- Commits: bf55ba4

### C7
- Description: Terminology normalization (IMM-P®).
- Rationale: Ensure consistent registered mark usage across pages.
- Acceptance criteria:
  - IMM-Pr replaced with IMM-P® in src/pages.
- Status: Done
- Commits: c7052ce

### C8
- Description: Case study back-link placement normalization.
- Rationale: Standardize navigation placement and reduce mid-body link drift.
- Acceptance criteria:
  - Case studies include "← All case studies" near the top and only once.
- Status: Done
- Commits: c7052ce

### C9
- Description: ClarityScan® terminology normalization.
- Rationale: Ensure registered mark usage is consistent across pages.
- Acceptance criteria:
  - ClarityScanr replaced with ClarityScan® in src/pages.
- Status: Done
- Commits: 53a7723

### C10
- Description: CTA briefing cards button CTAs + visibility.
- Rationale: Improve CTA card visibility and ensure button-based link affordances.
- Acceptance criteria:
  - CTA card links render as buttons.
  - CTA cards have scoped visual prominence.
- Status: Done
- Commits: 53a7723

### C11
- Description: Service conversion workflow unification (analysis + implementation plan).
- Rationale: Reduce mailto-based CTAs and normalize conversion flows across services.
- Acceptance criteria:
  - Current-state audit and target workflow options documented.
  - Default and fallback workflow recommendations proposed.
- Evidence: `docs/ops/phase-c11-service-conversion-audit.md`
- Status: Done (analysis)
- Commits: fd89dad

### C12
- Description: Conversion UX spec + decision (default/fallback) and mailto replacement plan.
- Rationale: Establish an implementation-ready conversion model with consistent booking-first entrypoints.
- Acceptance criteria:
  - Unified conversion spec documented with default and fallback flows.
  - Mailto replacement plan defined for briefing and service CTAs.
  - Success/confirmation pattern defined beyond ClarityScan.
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: 46d5e21

### C13
- Description: Replace mailto conversion CTAs with booking /briefing (Phase 1).
- Rationale: Remove mailto as a conversion endpoint and standardize briefing CTAs.
- Acceptance criteria:
  - "Request a briefing" CTAs point to booking.doulab.net/briefing.
  - Booking architecture updated to reflect briefing route.
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: a0f745a

### C14
- Description: Services booking links canonicalization.
- Rationale: Ensure service CTAs route through booking.doulab.net canonical links.
- Acceptance criteria:
  - Primary service CTAs point to booking.doulab.net canonical routes.
  - No booking-intent CTAs link directly to provider URLs.
- Evidence: `docs/ops/booking-architecture.md`, `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: 96c2452, 79a9903

### C15
- Description: Replace conversion mailto CTAs with booking-first alternatives.
- Rationale: Remove mailto from conversion flows while preserving legal/privacy contacts.
- Acceptance criteria:
  - Conversion mailto CTAs replaced with booking.doulab.net routes.
  - Legal/privacy mailto links remain intact.
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`
- Status: Done
- Commits: 6173b30

### C16
- Description: Restore ClarityScan® paid-first Stripe conversion flow.
- Rationale: Ensure fixed-fee ClarityScan follows payment-first before scheduling.
- Acceptance criteria:
  - ClarityScan CTAs point to Stripe Checkout payment link.
  - Booking step remains post-payment (success page -> scheduling).
- Evidence: `docs/ops/phase-c12-conversion-ux-spec.md`, `docs/ops/booking-architecture.md`
- Status: Done
- Commits: 6173b30


## Phase D - Quality & Compliance Hardening

### D0
- Description: Lighthouse 2026-01-19 findings intake.
- Rationale: Capture audit findings and seed remediation backlog.
- Acceptance criteria:
  - SEO: robots.txt invalid due to unknown directive "Content-Signal: search=yes,ai-train=no".
  - Best Practices: CSP Trusted Types missing; script-src includes 'unsafe-inline'; no preload directive found.
  - Accessibility: contrast issues on .problemCard; links rely on color; identical links same purpose.
  - Best Practices/Console: deprecated API warning; asset 503s (observed in report).
  - Performance: render-blocking requests; unused JS estimate; missing explicit image width/height.
- Evidence: `ops/audits/doulab-net/lighthouse-2026-01-19.pdf`
- Notes: Derived from Lighthouse 13.0.1 report.
- Status: Intake
- Commits: 81a261d

### D1
- Description: robots.txt discovery + fix (invalid directive).
- Rationale: Resolve robots.txt validity error flagged by Lighthouse.
- Acceptance criteria:
  - Identify source of robots.txt / Content-Signal directive.
  - Remove invalid directive or document external source if not in repo.
- Status: Blocked (robots.txt not found; source unknown)
- Notes: robots.txt not found in repo; likely Cloudflare/edge-generated.
- Commits: 81a261d


### D2
- Description: Dark mode styling for the "Ready to make innovation repeatable?" CTA component.
- Rationale: Ensure CTA readability and contrast in dark mode.
- Acceptance criteria:
  - CTA surface and text are readable in dark mode without light-mode regressions.
- Status: Done
- Commits: 27c5348

### D3
- Description: Sitewide canonical booking link audit + normalization.
- Rationale: Ensure conversion CTAs use canonical booking routes.
- Acceptance criteria:
  - Booking CTAs point to canonical booking.doulab.net routes.
  - ClarityScan paid-first links remain Stripe Checkout.
- Status: Done
- Commits: 27c5348

### D4
- Description: Blog Mermaid/diagram theme parity (dark/light).
- Rationale: Ensure diagram readability across color modes.
- Acceptance criteria:
  - Mermaid diagrams render with readable contrast in light and dark.
- Status: Done
- Commits: 27c5348

### D5
- Description: Replace SQL/Sheets instrumentation example with diagram in clarityscan-decision-latency.
- Rationale: Use an illustrative diagram instead of SQL snippet.
- Acceptance criteria:
  - Section contains a Mermaid diagram that reflects the instrumentation flow.
- Status: Done
- Commits: 27c5348

### D6
- Description: Blog booking/service CTA link audit + consistency pass.
- Rationale: Remove stale booking links in blog entries.
- Acceptance criteria:
  - Blog conversion CTAs use canonical booking routes.
- Status: Done
- Commits: 27c5348

### D7
- Description: Remove "Edit this page" links across blog.
- Rationale: Keep blog UX focused on readers, avoid repo-only links.
- Acceptance criteria:
  - Blog posts no longer display "Edit this page" links.
- Status: Done
- Commits: c272c6c

### D8
- Description: Homepage dark-mode surface parity for "How we work" cards and final CTA.
- Rationale: Prevent white surfaces in dark mode and align with "Proof, by the numbers".
- Acceptance criteria:
  - "How we work" cards use dark surfaces in dark mode.
  - Final CTA uses a dark surface with readable text in dark mode.
- Status: Done
- Commits: c272c6c

### D9
- Description: Fix dark-mode selector mismatch (html.theme-dark vs html[data-theme='dark']).
- Rationale: Ensure dark-mode overrides apply consistently across Docusaurus.
- Acceptance criteria:
  - Dark mode selectors apply for both html.theme-dark and html[data-theme='dark'].
  - Process rail tiles and Final CTA render with dark surfaces.
- Notes: DOM attribute not verified; selectors updated to cover both cases.
- Status: Done
- Commits: d48006a

### D10
- Description: Sitewide booking-link audit + normalization (blog, services, shared CTAs).
- Rationale: Ensure booking CTAs point to canonical routes and avoid stale provider URLs.
- Acceptance criteria:
  - Booking CTAs use canonical booking.doulab.net routes for briefing/discovery/workshops.
  - ClarityScan remains paid-first via Stripe Checkout.
  - No direct calendar provider URLs remain for conversion intents.
- Status: Done
- Commits: 5e53b64

### D11
- Description: Publish “Activation to Continuity” ecosystem essay with Mermaid diagrams and canonical booking links.
- Rationale: Document ecosystem continuity thesis with visual diagrams and consistent CTAs.
- Acceptance criteria:
  - New blog post includes Mermaid flowchart, xychart, and quadrant diagrams.
  - Briefing and discovery CTAs use canonical booking routes.
- Status: Done
- Commits: c3d6dba

### D12
- Description: Register NNY hero design language + blog sidebar integration.
- Rationale: Lock editorial hero system and ensure the latest post is discoverable in blog navigation.
- Acceptance criteria:
  - NNY hero rules documented and referenced in AGENTS.md.
  - Blog sidebar includes the new post.
- Status: Done
- Commits: 03cd644

### D13
- Description: NNY hero + social card + CTA card styling + post structure repair for coordination-threshold post.
- Rationale: Align the new editorial post with NNY hero standards and readable in-post CTAs.
- Acceptance criteria:
  - Hero image stored under static/img/blog/2026 and referenced in frontmatter and body.
  - Diagram admonitions and headings render cleanly.
  - CTA cards render as visible cards with button CTAs.
- Status: Done
- Commits: d7b352d

### D14
- Description: Define missing blog tags to remove tags.yml build warning.
- Rationale: Ensure blog tags registry matches post tags to avoid build warnings.
- Acceptance criteria:
  - tags.yml defines ecosystems, governance, coordination, innovation-maturity, and caribbean.
- Status: Done
- Commits: 0c6f0e7

### D15
- Description: Fix 404 catch-all to always render custom 404.tsx per 404 spec.
- Rationale: Ensure unknown routes consistently show the custom 404 UI.
- Acceptance criteria:
  - Custom 404 renders for unknown routes and emits build/404.html.
  - Primary CTA uses https://booking.doulab.net/.
- Status: Done
- Commits: dfe2e5d

### D16
- Description: Consolidate site CSS into src/css/custom.css (remove remaining CSS files/modules).
- Rationale: Reduce CSS fragmentation and remove module/global split.
- Acceptance criteria:
  - No remaining .module.css files under src.
  - No remaining non-module CSS files under src besides src/css/custom.css.
  - TSX no longer imports module CSS.
- Status: Done
- Commits: dfe2e5d

### D17
- Description: NotFound override: unknown routes render custom 404.tsx.
- Rationale: Ensure Docusaurus NotFound uses the custom 404 UI for all unknown routes.
- Acceptance criteria:
  - src/theme/NotFound/Content renders src/pages/404.tsx.
  - Unknown routes display the custom 404 UI.
- Status: Done
- Commits: d1291a8, 727366a, 03e9f1a

### D18
- Description: Normalize /services/custom-workshops card CTA button sizing.
- Rationale: Keep workshop format CTAs aligned and consistent within each card row.
- Acceptance criteria:
  - CTA buttons in workshop format cards are equal width/height.
- Status: Done
- Commits: d1291a8, 727366a, 03e9f1a

### D19
- Description: Homologate blog card colors to Doulab card system.
- Rationale: Align blog list cards with site card surface/border/hover treatments.
- Acceptance criteria:
  - Blog cards match Doulab card styling in light/dark modes.
- Status: Done
- Commits: d1291a8, 727366a, 03e9f1a

## Content - Research & Resources

### RR-01
- Description: Publish Innovation Lab Guide (Q2 2024) as MDX resource.
  - Evidence: 5ed3bfe, 15be694, 3f4f55f, 4cd7334, c497a77, 0272dac, 7f15e38, 3a7c974
  - Scope: PDF→MDX conversion, sidebar wiring, landing link, formatting + author metadata, in-text citation italics, Mermaid diagrams (VILF / IMM / foresight loop), neutrality and executive readability polish, Deduplicated references, Neutrality wording adjustments, Fixed Kaplan & Norton citation integration, Diagram caption normalization, Hyphen/spacing artifact cleanup, examples across sections, additional diagrams (MCF 2.2 loop, IMM snapshot, VILF network), RedLab national network case study, references strengthened and expanded.
- Rationale: Make the Innovation Lab guide discoverable and maintainable in docs.
- Acceptance criteria:
  - PDF converted to MDX with structured headings and references.
  - Doc wired in sidebar and Research & Resources landing.
  - Author metadata added; formatting pass applied for readability.
- Status: Done
- Commits: 5ed3bfe, 15be694

### BACKLOG — Innovation Lab Guide (Deep Review & Grounding Pass)

**Objective:**  
Strengthen the Innovation Lab Guide to publication-grade, long-term (10+ year) relevance by grounding claims with evidence and examples, validating logic consistency, eliminating AI-generated textual signals, improving editorial quality, enhancing UX/UI and visual hierarchy, and preparing the document for eventual chapterization into a book-like structure.

---

#### P0 — Credibility & Correctness (Blocking)

- **BL-ILG-P0-01 — Remove internal editorial note**
  - Remove the editorial/conversion note currently present at the very top of the guide.
  - Rationale: breaks editorial immersion and signals draft/internal status.

- **BL-ILG-P0-02 — Correct DARPA Heilmeier Catechism link**
  - Replace any incorrect DARPA Heilmeier link with:
    `https://www.darpa.mil/about/heilmeier-catechism`
  - Ensure citation is rendered as *(DARPA, n.d.)*.

- **BL-ILG-P0-03 — Fix GP Strategies misattribution**
  - Current claim: “Framework comparisons show how Stage-Gate and Lean Startup differ in governance and cadence (GP Strategies).”
  - Issue: cited GP Strategies article does not discuss Stage-Gate vs Lean Startup.
  - Required action:
    - Either replace the source with a legitimate Stage-Gate vs Lean comparison, OR
    - Rewrite the claim so it accurately reflects the GP Strategies article (“Innovation Frameworks: What They Are and How to Build One”).
  - This item MUST be resolved before publication.

- **BL-ILG-P0-04 — Xerox PARC / Roland Berger citation alignment**
  - Update visible text to reflect the actual publication title:
    “What innovators can still learn from Xerox PARC”
  - Preserve the correct existing link.
  - If the subheading “How skunkworks can play a vital role…” is mentioned, it must be framed as a subtitle, not the article title.

---

#### P0 — Academic Rigor & Evidence Gaps

- **BL-ILG-P0-05 — Unsupported claims audit**
  - Identify every claim, hypothesis, or assessment that:
    - Lacks a citation
    - Lacks a concrete real-world example
    - Presents an implicit causal relationship without justification
  - For each instance, apply ONE of:
    - Add a credible source
    - Add a real-world example (public sector, regulated industry, or enterprise)
    - Reframe as a bounded interpretation or hypothesis

- **BL-ILG-P0-06 — MCF 2.2 / IMM / VILF / Vigía Futura causal logic validation**
  - Explicitly validate and, where needed, clarify:
    - Why MCF precedes IMM
    - Why IMM is required before network scaling (VILF)
    - Why foresight (Vigía Futura) operates as an external sensing loop rather than a lab-internal function
  - Add short causal explanations where logic is currently implicit.

- **BL-ILG-P0-07 — RedLab case study evidence separation**
  - For the RedLab example:
    - Clearly separate **publicly verifiable facts** (with sources) from
      **Practitioner note (non-public detail)**.
    - No unlabelled internal knowledge may appear as factual statements.
    - Ensure at least one public press or official source is cited.

---

#### P1 — Editorial Quality (Publisher Readiness)

- **BL-ILG-P1-01 — Editorial voice normalization**
  - Remove or rewrite language that reads as:
    - Promotional
    - Consulting-style persuasion
    - Overly generic abstraction
  - Replace with evidence-led, neutral, publication-grade prose.

- **BL-ILG-P1-02 — Repetition & formula detection**
  - Identify repeated rhetorical structures (e.g., identical “So what?” endings).
  - Replace with varied, section-specific takeaways:
    - “Key takeaway”
    - “Decision implication”
    - “Common misinterpretation”

- **BL-ILG-P1-03 — Example formatting consistency**
  - Standardize all examples into short case vignettes:
    - Context
    - Intervention
    - Outcome
    - Lesson
    - Source
  - Avoid “bolted-on” examples.

---

#### P1 — AI-Generated Text Signal Removal

- **BL-ILG-P1-04 — AI-pattern language pass**
  - Identify and revise:
    - Overuse of abstract nouns without anchors
    - Symmetric, templated paragraph endings
    - Vague phrases (“designed to be scalable”, “aligned with goals”) without operational meaning
  - Replace with concrete mechanisms, metrics, or examples.

- **BL-ILG-P1-05 — Citation integrity check**
  - Ensure all citations:
    - Directly support the surrounding claim
    - Are not decorative or generic
  - Remove or replace weakly connected citations.

---

#### P2 — Structure, UX/UI & Visual Design

- **BL-ILG-P2-01 — NYY-style hero header**
  - Add a New York–style hero header at the top of the guide, consistent with the most recent Doulab article:
    - Title
    - Subtitle
    - Metadata row (author, date, reading time)
    - Optional CTA (e.g., “Explore chapters”)
  - Must follow the same MDX/component pattern already used on the site.

- **BL-ILG-P2-02 — Scanability & progressive disclosure**
  - Break long paragraphs (>6 lines) into lead sentence + bullets.
  - Use admonitions (`tip`, `note`, `caution`) for:
    - Definitions
    - Decision gates
    - Failure modes
  - Use `<details>` blocks for deep dives.

- **BL-ILG-P2-03 — Diagram comprehension**
  - Ensure every diagram:
    - Has a one-line explanation of the decision it supports
    - Does not rely solely on visual meaning

---

#### P3 — Structural Evolution (Deferred, Do NOT execute yet)

- **BL-ILG-P3-01 - Chapterization (book-like structure)**
  - Split the guide into chapters under a new folder:
    `/docs/research-resources/innovation-lab-guide/`
  - Introduce chapter openers and end-of-chapter summaries.
  - Status: Done
  - Evidence: 1adaf042, f6864158, 35dd2775, fdf231ed

- **BL-ILG-P3-02 - Landing chapter ("book cover")**
  - Create a landing MDX with:
    - NYY hero
    - Reading path
    - Chapter list
  - Status: Done
  - Evidence: 1adaf042, f6864158, 35dd2775, fdf231ed

- **BL-ILG-P3-03 - Sidebar & navigation update**
  - Update sidebars and internal links after chapter split.
  - Add redirects if required.
  - Status: Done
  - Evidence: 1adaf042, f6864158, 35dd2775, fdf231ed

> **Note:** P3 items are explicitly deferred until P0-P2 are completed and validated.

Completion note: Guide split into /docs/research-resources/innovation-lab-guide/; legacy route redirects to the new landing; sidebar lists chapters 01–11; landing card updated.

---

**Exit criteria for this backlog block:**
- All P0 items resolved and verified.
- P1 items resolved or explicitly justified.
- P2 items implemented or scheduled.
- P3 items remain deferred with no partial execution.

## Daily Check Log (Migrated from CHECKLOG.md)

### LOG-2025-08-30-01
- Description: Build - Broken-link checker silenced by switching footer RSS/Sitemap to href (external-style); full build passes.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-02
- Description: Routing - Resolved duplicate /contact (kept src/pages/contact/index.tsx as canonical).
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-03
- Description: DX - Removed BOM from package.json; pinned engines.node to ^22 and updated CF Pages to Node 22.x.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-04
- Description: TS - Fixed JSX errors via tsconfig (jsx: react-jsx, libs/types) and corrected `<link rel="preload">` attribute casing (imageSrcSet/imageSizes).
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-05
- Description: Blog - Replaced authors.yml with Luis Santiago; published inaugural post "Introducing Doulab."; links/buttons use global styles.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-06
- Description: Insights - Latest whitepapers (docs tag=whitepaper) + 3 latest posts from /blog/rss.xml render correctly.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-07
- Description: UI/UX - Canonical .subnav shared (About + Vig｛ Futura); active/hover set to Doulab purple in light/dark.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-08
- Description: UI/UX - Footer background set to Doulab purple (light+dark); navbar hover/active states unified.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-09
- Description: Dark Mode - Secondary buttons: transparent with white text by default; card/process-step/Docs cards surfaces fixed; section copy lightened; final CTA transparent with high-contrast text.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-10
- Description: Pages - Work with Us migrated off page CSS module to custom.css utilities; hero preload added; content+a11y pass.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-11
- Description: Pages - About: fixed broken anchor to /what-we-do#service-pillars; copy tightened.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-30-12
- Description: Pages - Vig｛ Futura: switched to canonical .subnav; hero preload attrs fixed; copy tightened.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-30).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-27-01
- Description: Repo sync - Force-with-lease pushed local main over remote; created remote backup branch backup-main-preforce-20250827-205022 (and tag backup/origin-main-20250827-205022).
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-27).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-27-02
- Description: Docs - Updated README.md to align with Doulab Website project (Cloudflare migration, privacy-first, contribution workflow, status checklist).
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-27).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-27-03
- Description: Docs - Added releases.md to sidebars.ts (Research & Resources); optional navbar/footer link prepared.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-27).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-27-04
- Description: Infra - Switched to production-only on Cloudflare; removed staging + GitHub Pages deploys; purged GTM; set single SITE_URL; kept Cloudflare Analytics.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-27).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-27-05
- Description: Infra - Removed leftover GTM/Consent code, replaced Root.tsx and ConsentBanner.tsx with privacy-first stubs, disabled manual CF beacon (auto-injection enabled), purged cache, pinned Node 20.16.0 in CF Pages.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-27).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-01
- Description: Web - Lighthouse fixes (hero LCP preload + AVIF/WEBP picture fallback, explicit image dimensions, AA contrast colors); fixed docs typing in index.tsx.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-02
- Description: IA - Updated navbar to target IA (Home, What we do, Case Studies, Insights, About, Contact).
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-03
- Description: IA - Added What we do page stub with Products, Proof, and Next steps sections.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-04
- Description: IA - Added Case Studies page stub with featured examples and method note.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-05
- Description: IA - Added Insights page stub with highlights and links to docs/releases.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-06
- Description: IA - Improved About page with canonical tag (SEO).
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-07
- Description: IA - Added Contact page stub with next steps and email CTA.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-28-08
- Description: Web - Homepage styles consolidated into src/css/custom.css; restored centered .section wrapper & 3-up card grid.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-28).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-2025-08-29-01
- Description: Web - v0.4 Site-wide service pages & content refresh.
- Rationale: Migrated from CHECKLOG.md daily entry (2025-08-29).
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-01
- Description: Footer - fixed "Connect" links to real routes; standardized labels ("Insights", "What we do").
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-02
- Description: Insights - auto-list 3 latest whitepapers (docs tag=whitepaper) + 3 latest blog posts via /blog/rss.xml; added safe client parsing, CTAs.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-03
- Description: _headers - added RSS rules & tightened security headers (CSP additions, caching for assets, no-store for RSS).
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-04
- Description: Home - card hover border/raise; "The Problem" horizontal reel; section centering normalized via custom.css.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-05
- Description: About - timeline grouped by year; consolidated to shared styles; accessibility pass (headings/nav).
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-06
- Description: What we do - hero + grid aligned to shared tokens; final CTA uses standardized .finalCta pattern.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-07
- Description: Case Studies - consistent cards; "How we measure" icons & semantics; final CTA standardized.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-08
- Description: Services (index) - migrated off page CSS; image preload attr fix (imageSrcSet/imageSizes); consistent cards + CTA.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-09
- Description: Services/ClarityScan - productized copy; pricing/format cards; FAQ; Calendly CTA.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-10
- Description: Services/Custom Workshops - agendas aligned to IMM & MCF phases; outcomes and CTAs standardized.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-11
- Description: Services/Innovation Maturity - phase model clarified; outcomes/stat cards; CTA standardized.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-12
- Description: Services/Coaching & Mentoring - tiers, outcomes, cadence; privacy-first copy; CTA standardized.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-13
- Description: Services/Diagnostics - built full page (why/what/how, options, FAQ, CTA).
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-14
- Description: Vig｛ Futura - subnav with intersection observer; sections (Radar/Briefings/Labs/Training/Roadmap); consistent cards & CTA.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-DONE-15
- Description: Research & Resources - safe MDX (.md) with shared components; featured whitepaper + frameworks; authoring tips; final CTA.
- Rationale: Migrated from CHECKLOG.md Done list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Done

### LOG-PENDING-01
- Description: Add remaining customers to About timeline and enrich proof logos (SVG, high-DPI).
- Rationale: Migrated from CHECKLOG.md Pending / Next list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Pending

### LOG-PENDING-02
- Description: Unify hero images (sizes, aspect, preload hints) across all service pages.
- Rationale: Migrated from CHECKLOG.md Pending / Next list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Pending

### LOG-PENDING-03
- Description: Normalize card body lengths site-wide for perfect grid homogeneity.
- Rationale: Migrated from CHECKLOG.md Pending / Next list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Pending

### LOG-PENDING-04
- Description: Privacy-first contact form (serverless handler + minimal fields) and spam protection.
- Rationale: Migrated from CHECKLOG.md Pending / Next list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Pending

### LOG-PENDING-05
- Description: Blog: add per-post images/og tags and ensure tag=whitepaper discipline in docs.
- Rationale: Migrated from CHECKLOG.md Pending / Next list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Pending

### LOG-PENDING-06
- Description: Monitoring: LCP/CLS check post-deploy; review CF Pages cache & headers in staging.
- Rationale: Migrated from CHECKLOG.md Pending / Next list.
- Acceptance criteria:
  - Entry preserved from daily check log.
- Status: Pending

