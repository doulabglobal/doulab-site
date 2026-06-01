# Blog & Editorial Audit (Bilingual) — doulab.net — 2026-07

Role: Blog & editorial. Pass: 2026-07 bilingual re-audit. Prior pass: [audit-2026-06/11-blog-editorial.md](../audit-2026-06/11-blog-editorial.md).

## Scope

Editorial assessment of the `/blog` (EN) and `/es/blog` (ES) surfaces after the bilingual launch (`eb1c8c8`). Specifically:

- Publishing cadence, topical coverage, headline quality
- Post structure (TL;DR, sections, references, vignettes)
- Citation hygiene (do academic citations and quoted material survive translation correctly?)
- Tag / category strategy (EN-only slugs preserved by design; assess **labels** in ES surface)
- Author bio and authors.yml hygiene
- RSS / Atom feed metadata
- Social card / OG images
- ES translation quality: naturalness, register, technical terminology consistency, citation faithfulness, em-dash compliance, stiff-translation tells
- Bilingual parity at the editorial level

In-scope artifacts:
- `blog/**` (EN): 4 posts + `authors.yml` + `tags.yml` (+ one stale `.bak` from prior pass — see BLOG-001 below)
- `i18n/es/docusaurus-plugin-content-blog/**` (ES): 4 ES counterparts + `options.json`
- `i18n/es/code.json` (theme chrome strings used for tag pages)
- `docusaurus.config.ts` blog plugin block (lines 78-86)
- `static/img/social/**`, `static/img/blog/2026/**`, `static/img/2025-08-30-introducing-doulab.jpg`

Out of scope: NNY hero component build (handled by Brand & visual / Code quality follow-ups from prior pass), homepage/marketing pages, Insights bridge surface, deeper conversion design (see Conversion role), i18n parity at chrome level (see role 12).

## Method

- Read all four EN posts and all four ES counterparts end-to-end.
- Diffed structural elements (frontmatter shape, slugs, image paths, tags, `truncate`, references, vignettes, CTA shape, Mermaid blocks) between EN and ES per post.
- Cross-walked academic citation strings, quoted Gallup/McKinsey/Forrester/HBS/OECD/Pew/Bain/WEF/Frontiers/Accenture/IIA/PISA/CARIBEquity references for faithfulness in ES.
- Confirmed em-dash (U+2014) presence in both EN and ES via grep over `blog/**` and `i18n/es/docusaurus-plugin-content-blog/**`.
- Checked `tags.yml` (EN slugs + labels) against `i18n/es/code.json` (theme tag-page chrome strings) to understand what an ES reader sees on a tag page.
- Validated frontmatter `image:` paths against `static/img/**` for both locales.
- Reviewed prior `audit-2026-06/11-blog-editorial.md` to avoid re-filing resolved items. Note: a search through `docs/ops/doulab-net-backlog.md` found **no `BLOG-*` ids marked RESOLVED**; the prior BLOG-001..015 set appears not yet remediated in the backlog. This audit therefore re-files only the items that still hold true in the corpus, with new IDs (`BLOG-`), and adds new bilingual findings on top.
- No build run; no Lighthouse; this is a content/structure pass.

Counted state: 4 EN posts (2025-08-30, 2025-09-12, 2025-09-22, 2026-01-19) + 4 ES counterparts; 1 single author (`luis`); 15 declared tags in `tags.yml`; 1 stale `.bak` in `blog/`.

## Findings (ranked)

### BLOG-001 — Severity P0 — Impact 5 — Effort S
- **Location**: `blog/_backup_2025-09-12-clarityscan-decision-latency.bak`
- **Observation**: The `.bak` from prior audit still lives inside `blog/`. It contradicts the live 09-12 post (15-20 min vs 30-45 min ClarityScan duration), is committed editorial content, and a rename / plugin-glob change would silently leak it. Prior audit-2026-06 BLOG-001 filed; not yet resolved per backlog grep.
- **Recommendation**: Delete the `.bak`; archive via git history or an attic outside `blog/`.
- **Evidence**: file presence; vs `blog/2025-09-12-...md:22` ("30-45 minutes").
- **Hand-off**: Content & copy.

### BLOG-002 — Severity P0 — Impact 5 — Effort S
- **Location**: `blog/2025-09-22-vigia-futura-foresight-observatory.md:17` AND `i18n/es/docusaurus-plugin-content-blog/2025-09-22-vigia-futura-foresight-observatory.md:17`
- **Observation**: Both EN and ES post frontmatter declare `image: /img/social/vigia-futura-foresight.jpg`. Directory listing of `static/img/social/` shows only ClarityScan variants + `default-og.jpg`, `og-imm-program.jpg`, `og-insights.jpg`. No vigia-futura-foresight.jpg exists. Result: broken OG image on share for **both** locales of the Vigía Futura post. Prior audit-2026-06 BLOG-002 still unresolved.
- **Recommendation**: Create `static/img/social/vigia-futura-foresight.{jpg,webp,avif}` (re-use `static/img/vigia-futura-hero.{avif,png,webp}` as source) OR update both frontmatters to a path that exists. Add a frontmatter-image build verifier (covered by Code quality hand-off).
- **Evidence**: Frontmatter line 17 in both files; ls of `static/img/social/`.
- **Hand-off**: SEO; Code quality.

### BLOG-003 — Severity P1 — Impact 4 — Effort M
- **Location**: Publishing cadence across `blog/**`
- **Observation**: Cadence has not improved since the prior audit. Last published post is still 2026-01-19. At today's date 2026-06-01, the blog has had **0 new posts in 4.5 months**, on top of the ~4-month silence between 2025-09-22 and 2026-01-19. With ES now live (4 posts), each new ES post is a parallel commitment, which raises (not lowers) the cadence problem. The blog cannot anchor SEO compounding, RSS subscribers, the `/insights` "From the blog" card, or the `/es/insights` ES surface on this trajectory.
- **Recommendation**: Codify a cadence floor in `AGENTS.md` (one essay/month + one field note/month). The bilingual reality argues for adopting a "field notes" short-form tag (~600 words) that ports easily to ES so monthly cadence is achievable without a heroic translation cost per item. Even one cadence-marker per quarter would be a material signal vs current silence.
- **Evidence**: 4 dated post filenames + today 2026-06-01.
- **Hand-off**: Content & copy; Sales; i18n.

### BLOG-004 — Severity P1 — Impact 5 — Effort S
- **Location**: ES translations — em-dash (U+2014) instances violating the no-em-dash rule
- **Observation**: The "no em-dashes in Doulab copy" rule applies to user-facing copy on every property. Grep over `i18n/es/docusaurus-plugin-content-blog/**` returns **6 em-dashes across 2 files**:
  - `2025-09-12-clarityscan-decision-latency.md:22` — TL;DR callout uses em-dash after `**TL;DR**`.
  - `2025-09-12-clarityscan-decision-latency.md:292-295` — 4 em-dashes in the References list joining cite to link.
  - `2026-01-19-coordination-threshold.md:22` — TL;DR callout uses em-dash after `**TL;DR**`.
  EN posts have a much larger em-dash footprint (12+ instances on the 09-12 post body, 5+ on the 01-19 post body), but the prior backlog explicitly scoped em-dash sweeps to **exclude dated blog post bodies** for 09-12 / 09-22 / 01-19 per Phase E (see `docs/ops/doulab-net-backlog.md:104,109`). Two questions follow:
  1. Was the dated-blog-body exclusion **also** intended to cover the ES translations? If not (i.e., ES launched after the exclusion), the ES em-dashes are net-new violations that should be cleaned.
  2. The 2025-08-30 (inaugural) post and the 2025-09-22 (Vigía Futura) post have **zero em-dashes** in either locale, so the dated-bodies exclusion was at minimum overbroad — those two are clean today and any future edits to them should hold the line.
- **Recommendation**: Decide policy. Recommend the conservative path: clean em-dashes from **ES blog bodies** (only 6 instances, ~10 minute fix using en-dashes or commas/colons), since the ES surface is brand-new and not subject to the EN dated-body grandfather. Leave EN dated bodies frozen per prior decision but reaffirm that any **edit** to an existing EN body must also clean its em-dashes in the touched paragraphs.
- **Evidence**: Grep U+2014 over both directories.
- **Hand-off**: Content & copy; i18n.

### BLOG-005 — Severity P1 — Impact 4 — Effort S
- **Location**: All 4 ES posts — "References" section heading and quoted citation text
- **Observation**: Translation faithfulness for academic citations is uneven:
  - `2025-09-12-...md` (ES) line 290 still uses `## Referencias` (good) but the citation list lines 292-301 **keep the EN quoted snippets verbatim**: `"low engagement costs the global economy US$9.6 trillion, or 9% of global GDP."` etc. This is defensible (preserves the verbatim quote), but an ES reader hits a 10-line wall of English text after a Spanish article. Either (a) gloss the quote in ES after the English, e.g. `"…" ("el bajo compromiso le cuesta a la economía global US$9.6 billones…")`, or (b) drop the verbatim quotes and replace with an ES paraphrase + the link.
  - `2026-01-19-...md` (ES) line 200 has heading `## References` (untranslated). Should be `## Referencias`. The references list below is author/year/title-only so no quoted text to translate.
  - `2025-09-22-...md` (ES) has no References section; sources are inline parentheticals (`(IIA Risk in Focus 2025)`, `(UNDP)`, etc.) — these remain in EN and are fine as institutional shorthand.
  - `2025-08-30-...md` (ES) inline citation labels in the cardGrid (`Kotter vía Forbes`, `Frontiers in Psychology`, `Bain`, etc.) are appropriately partially translated (`vía`) — good.
- **Recommendation**: Standardize: (1) all ES posts use `## Referencias`; (2) where a quote is preserved verbatim in English, add an ES gloss in parentheses on first occurrence; (3) document the rule in `docs/ops/blog-editorial-conventions.md` (the conventions doc proposed in BLOG-009 of prior audit, still not created).
- **Evidence**: Lines cited above.
- **Hand-off**: Content & copy; i18n.

### BLOG-006 — Severity P1 — Impact 4 — Effort S
- **Location**: `blog/2025-09-22-vigia-futura-foresight-observatory.md:20` AND `i18n/es/.../2025-09-22-vigia-futura-foresight-observatory.md:20`
- **Observation**: Duplicate manual H1 still present in **both** locales (prior audit-2026-06 BLOG-006 filed only for EN; ES inherited the issue at translation time). Docusaurus' blog layout already renders the frontmatter `title:` as H1; the body H1 produces a second `<h1>` on the page, breaking heading order in both languages.
- **Recommendation**: Delete line 20 in both files (the EN-language H1 is "Vigía Futura: Why Latin America..." and the ES version is "Vigía Futura: por qué América Latina...").
- **Evidence**: Lines cited above.
- **Hand-off**: Accessibility; SEO.

### BLOG-007 — Severity P1 — Impact 3 — Effort S
- **Location**: Bilingual frontmatter parity — drift between EN and ES counterparts
- **Observation**: Across the 4 ES posts, frontmatter mirrors EN well (same `slug`, `image`, `tags`, `hide_table_of_contents`, `authors`). However, two specific drifts:
  - `2025-08-30-...md` (EN) has full `keywords:` block with `innovation maturity`, `microcanvas`, `IMM`, `foresight`, `diagnostics`, `workshops`, `strategy execution`. ES version (line 9-15) has Spanish translations of these keywords (`madurez en innovación`, `prospectiva`, etc.) — this is correct and good for ES SEO. Same pattern is honored on `2025-09-12`, `2025-09-22`, and `2026-01-19`. **Confirmed: keywords are localized per locale** — note this as a positive, no action.
  - `2025-09-22-...md` (ES) `description:` translates EN fully — good. But the ES `keywords:` retains `vigia futura` (no diacritic) while the EN one is also `vigia futura` (no diacritic). For ES SEO, adding `vigía futura` (with diacritic) as an additional keyword would improve match against Spanish queries.
  - `2025-08-30-...md` (EN) frontmatter uses image `/img/2025-08-30-introducing-doulab.jpg` (verified exists in `static/img/`) — root-level, inconsistent with the other posts (see BLOG-008). ES inherits this path.
- **Recommendation**: For 09-22 ES, append `vigía futura` (with diacritic) to keywords. Restate convention: keywords are localized; image paths shared.
- **Evidence**: Frontmatter blocks compared.
- **Hand-off**: SEO; i18n.

### BLOG-008 — Severity P2 — Impact 3 — Effort M
- **Location**: Image path convention across the 4 posts (inherited unchanged by ES)
- **Observation**: Three distinct directory conventions: `/img/<file>.jpg` (08-30), `/img/social/<file>.jpg` (09-12, 09-22), `/img/blog/<YYYY>/<file>.png` (01-19). The 09-22 path is broken (BLOG-002). The 01-19 path uses `.png` as the social card, which is suboptimal for OG (`.jpg` or `.webp` recommended). Because ES posts share image paths with EN, fixing once fixes both locales.
- **Recommendation**: Adopt single convention: hero/banner under `static/img/blog/<YYYY>/<slug>-hero.{avif,webp,png}`; OG/social under `static/img/social/<YYYY>-<MM>-<DD>-<slug>.jpg` (+ avif/webp siblings). Migrate the 3 misaligned posts. Document in the proposed `docs/ops/blog-editorial-conventions.md`.
- **Evidence**: Frontmatter `image:` values + ls of `static/img/`, `static/img/social/`, `static/img/blog/2026/`.
- **Hand-off**: SEO; Code quality.

### BLOG-009 — Severity P2 — Impact 3 — Effort S
- **Location**: `blog/2025-09-12-clarityscan-decision-latency.md:36,94,282` AND ES counterpart at the same line numbers (36, 94, 282)
- **Observation**: The hardcoded Stripe checkout URL `https://buy.stripe.com/28E00jdhCanL5Hb3xmcZa00` is replicated **3 times in EN body + 3 times in ES body = 6 hardcoded occurrences** across the corpus. Single URL change → 6 edits across 2 files. Prior audit-2026-06 BLOG-007 flagged this for EN only; ES doubled the maintenance liability at translation time.
- **Recommendation**: Replace inline Stripe URLs with the `CLARITYSCAN_CHECKOUT_URL` constant (already imported in `src/pages/insights/index.tsx`). Use MDX `import` in both `.md` files, or move to a shared CTA component (would also serve BLOG-011 of prior audit on related-posts/CTA component).
- **Evidence**: Lines cited above in both locales.
- **Hand-off**: Conversion; Code quality.

### BLOG-010 — Severity P2 — Impact 4 — Effort M
- **Location**: ES tag page experience — `/es/blog/tags/<slug>`
- **Observation**: Per hard rule, tag **slugs** stay EN (URL consistency across locales). `tags.yml` declares `label:` strings that render on tag pages — and these `label:` values are themselves EN (`MicroCanvas`, `Innovation`, `Foresight`, `Caribbean`, `Latin America`, `Coordination`, `Governance`, `Decision latency`, `Diagnostics`, `Ecosystems`, `Innovation maturity`, `Announcement`). On `/es/blog/tags/innovation-maturity`, the page chrome is Spanish (theme strings from `i18n/es/code.json` produce `{nPosts} etiquetados con "Innovation maturity"`) but the tag label inside the quotes is English. The reader sees a mixed-locale string: `4 etiquetados con "Innovation maturity"`. This reads as untranslated content rather than a deliberate URL-stability choice.
  - Edge case: tag `vigia-futura` has label `Vigía Futura` (already Spanish/proper noun — correct in both locales). Tag `clarityscan` has label `ClarityScan` (brand mark — correct in both locales). Tag `imm` has label `IMM` (acronym — correct in both locales). So **only the "topic" labels (10 of 15)** need ES forms.
- **Recommendation**: Two viable paths:
  1. **(Light)** Translate the `label:` values in `tags.yml` to ES and accept that tag pages will render the ES label in both locales. EN readers will see `4 posts tagged with "Madurez en innovación"` — wrong for EN.
  2. **(Right)** Introduce a per-locale tag-label override. Docusaurus blog plugin does not currently expose this natively, but the conventional workaround is a swizzled `BlogTagsPostsPage` (or theme augment) that consults a sidecar map (e.g., `i18n/es/blog-tag-labels.json`) keyed by tag slug → ES label. ~30-line theme component. This keeps slugs stable and gives each locale the right label.
  - Recommend path 2. If the team is not ready for a swizzle, path 2-lite: add the ES gloss in parentheses to the existing label (e.g., `Innovation maturity (Madurez en innovación)`) so both locales get something readable, then revisit when cadence rises.
- **Evidence**: `tags.yml` lines 1-76; `i18n/es/code.json:277-279`.
- **Hand-off**: i18n; IA & UX; Code quality.

### BLOG-011 — Severity P2 — Impact 3 — Effort M
- **Location**: `docusaurus.config.ts:78-86` — blog plugin `feedOptions`
- **Observation**: Still `feedOptions: { type: 'all' }` with **no title, no description, no language, no copyright**. With ES live, the feed problem compounds: there is **one RSS/Atom feed** generated at `/blog/rss.xml` (the default) and **a separate ES feed** at `/es/blog/rss.xml`. Both feeds carry the default generic identity (no title, no language tag). For feed readers, the ES feed without `language: 'es'` and `title: 'Doulab — Insights (ES)'` will not be discoverable by Spanish-language readers searching for regional foresight content.
- **Recommendation**: Set `feedOptions` per-locale, ideally via `i18n` config block. At minimum, set `title`, `description`, `language: 'en'`, `copyright` on the EN side; per-locale overrides through `themeConfig` or via a small `i18n.localeConfigs` block providing `feedOptions` per locale. Verify both `/blog/rss.xml` and `/es/blog/rss.xml` carry the right `<language>` tag after a build.
- **Evidence**: `docusaurus.config.ts:78-86`.
- **Hand-off**: SEO; i18n; Code quality.

### BLOG-012 — Severity P2 — Impact 3 — Effort S
- **Location**: ES translation register — "stiff translation" tells
- **Observation**: Overall ES quality is **good** (idiomatic, natural register, technical terms preserved correctly: "latencia de decisión", "línea base", "compuertas de evidencia", "propuesta de valor", "asimetrías de madurez"). A handful of stiff phrasings that an ES reader would catch:
  - `2025-08-30-...md` (ES) line 30: `"A lo largo de startups e instituciones, los bloqueadores se repiten."` — `bloqueadores` is technically correct but a Spanish reader expects `obstáculos` or `frenos`. Recommend `obstáculos`.
  - `2025-08-30-...md` (ES) line 99: `"saber dónde estás parado"` — the calque "where you stand" → `parado` reads odd in ES. Recommend `saber dónde te encuentras` or `saber en qué punto estás`.
  - `2025-08-30-...md` (ES) line 102: `"encender acción alineada"` — direct calque of "spark aligned action"; reads as marketing translationese. Recommend `impulsar la acción alineada` or `generar acción alineada`.
  - `2025-08-30-...md` (ES) line 184: `"reduce la fluencia de alcance"` — `fluencia de alcance` is a literal calque of "scope creep" that's not a recognized Spanish term. Recommend `reduce la expansión del alcance` or `reduce el scope creep` (anglicism in tech contexts is acceptable).
  - `2025-09-12-...md` (ES) line 200: `"La latencia alta deja capital varado en trabajo en proceso"` — "trabajo en proceso" used here, then `desriesga el WIP` (anglicism) appears in the next clause. Pick one (`WIP` is acceptable in financial ES, or `trabajo en curso`) and use consistently.
  - `2025-09-12-...md` (ES) line 200: `"desriesga el WIP"` — `desriesga` is a verb-form many Spanish readers wouldn't recognize; recommend `reduce el riesgo del WIP`.
  - `2026-01-19-...md` (ES) line 138: `"Aquí, la madurez en innovación se usa de forma descriptiva"` — fine. But line 166 `"Los frameworks como lentes, no soluciones"` mixes anglicism `frameworks` with the ES `lentes`; acceptable in ES tech register but flag the call.
  - `2026-01-19-...md` (ES) line 78 inside Mermaid: labels remain in English (`Activation`, `Scale`, `Continuity threshold`, etc.). Same in `2025-09-22-...md` (ES) Mermaid blocks lines 47-58, 77-86, 117-125, 154-165 — all diagram content stays English. This is a deliberate choice for diagram stability across locales, but it should be **explicit** policy (document it) and ideally an ES caption be added beneath each Mermaid block in ES posts to gloss the English labels.
- **Recommendation**: Light copy-edit pass on the inaugural ES post (highest-trafficked, weakest register). Document Mermaid-labels-stay-EN policy and add ES caption strings beneath each diagram in ES posts.
- **Evidence**: Lines cited above.
- **Hand-off**: Content & copy; i18n.

### BLOG-013 — Severity P2 — Impact 3 — Effort S
- **Location**: ES `options.json` for blog plugin — `i18n/es/docusaurus-plugin-content-blog/options.json`
- **Observation**: `"title": { "message": "Blog" }` and `"description": { "message": "Blog" }` were left unchanged from the scaffold. The ES blog title in the browser tab is therefore literally `"Blog"` instead of something brand-relevant like `"Blog | Doulab"` or `"Doulab — Insights"`. The `sidebar.title` was correctly translated to `"Todas las publicaciones"` — good.
- **Recommendation**: Set `title.message` to `"Blog"` (proper noun) or `"Insights"` (matches EN brand framing on `/insights`), and `description.message` to a short ES description like `"Ensayos sobre innovación repetible, prospectiva y madurez de ecosistemas."`.
- **Evidence**: `i18n/es/docusaurus-plugin-content-blog/options.json:1-14`.
- **Hand-off**: SEO; i18n; Content & copy.

### BLOG-014 — Severity P3 — Impact 2 — Effort S
- **Location**: `blog/authors.yml`
- **Observation**: Still single-author (`luis`) with TODO comment still live (`# TODO: replace with /img/authors/luis.png`). For an `/es/blog` reader, the author bio `title: Head Coach & Mentor` is **English-only** — there is no per-locale authors.yml override. ES readers therefore see an English title under the author card.
- **Recommendation**: (a) Move avatar to `/img/authors/luis.png`, drop TODO. (b) Provide ES-localized author title via the documented Docusaurus pattern — `i18n/es/docusaurus-plugin-content-blog/authors.yml` mirroring the EN file with `title: Coach Principal y Mentor`. Validate the plugin reads it.
- **Evidence**: `blog/authors.yml:1-9`; absence of ES `authors.yml`.
- **Hand-off**: Content & copy; i18n.

### BLOG-015 — Severity P3 — Impact 2 — Effort S
- **Location**: `blog/2025-09-22-vigia-futura-foresight-observatory.md` AND ES counterpart — emoji `📅` in CTA
- **Observation**: Line 225 EN (`📅 [Book a discovery session]...`) and line 225 ES (`📅 [Agenda una sesión...]`) use a leading calendar emoji. This is the only emoji used as decorative leader in the corpus and breaks editorial consistency with the other three posts (no decorative emojis). It is also a minor accessibility concern (screen readers announce "Tear-Off Calendar" before the link).
- **Recommendation**: Remove the emoji from both locales; the link text alone (and the `<a>` icon styling, if any) carry the meaning.
- **Evidence**: Line 225 in both locales.
- **Hand-off**: Accessibility; Content & copy.

### BLOG-016 — Severity P3 — Impact 2 — Effort S
- **Location**: ES post 09-12 line 22 — currency notation
- **Observation**: ES TL;DR carries the verbatim Gallup-style figure `US$9.6 billones` (line 34 body). In Spanish, `billón` = 10^12 (trillion in English short scale), so `US$9.6 billones` is **correctly localized** ($9.6T → 9.6 billones) — this is good. But the line-22 TL;DR figure says `~30%` (matches EN). Confirm consistency. No issue with this particular post. Filing as a note: future posts should explicitly translate billions/trillions (EN trillion → ES billón; EN billion → ES mil millones) — already done correctly here, document the rule in the conventions doc.
- **Recommendation**: Add the EN↔ES large-number convention to `docs/ops/blog-editorial-conventions.md`.
- **Evidence**: Line 34 of ES 09-12 post.
- **Hand-off**: Content & copy; i18n.

### BLOG-017 — Severity P3 — Impact 2 — Effort S
- **Location**: ES post 01-19 — heading `## References` not translated
- **Observation**: `i18n/es/docusaurus-plugin-content-blog/2026-01-19-coordination-threshold.md:200` keeps `## References` rather than `## Referencias`. The references themselves are author/year/title-only so no body change needed. Pure heading-translation miss.
- **Recommendation**: One-line fix.
- **Evidence**: Line 200.
- **Hand-off**: Content & copy; i18n.

### BLOG-018 — Severity P3 — Impact 2 — Effort S
- **Location**: ES post 09-12 — mid-body callout text `:::info Flujo de ClarityScan (30-45 minutos)` followed by an English-content Mermaid block
- **Observation**: Same as BLOG-012 sub-point but worth a standalone note: the `:::info` admonition title is translated correctly to Spanish, but the Mermaid nodes inside (`Context`, `MCF/IMM Quick Pass`, `Signals & Evidence Gaps`, `Decisions & Owners`, `30/60/90 Day Plan`) remain in English. Reader-friendliness suffers. Recommend either translating the Mermaid labels per locale or adding a Spanish gloss beneath the diagram.
- **Recommendation**: For text Mermaid blocks (not the schematic-only ones), maintain per-locale Mermaid copies. For quadrant/gantt blocks where labels are diagram-axis-strings, document the EN-only policy.
- **Evidence**: `i18n/es/.../2025-09-12-clarityscan-decision-latency.md:124-132`.
- **Hand-off**: Content & copy; i18n.

## Bilingual parity matrix (quick reference)

| Aspect | EN | ES | Status |
|---|---|---|---|
| Number of posts | 4 | 4 | ✅ parity |
| Titles translated | n/a | yes (idiomatic) | ✅ |
| `description:` translated | n/a | yes | ✅ |
| `keywords:` localized | yes | yes | ✅ |
| Tag slugs identical (URL stability) | base | identical | ✅ (by design) |
| Tag **labels** localized in tag pages | n/a | NO (still EN) | ❌ BLOG-010 |
| `## References` heading translated | n/a | 3/4 (01-19 missed) | ⚠ BLOG-017 |
| Body em-dash compliance | grandfathered (frozen) | NOT grandfathered, 6 instances | ❌ BLOG-004 |
| Author title localized | n/a | NO (single EN authors.yml) | ❌ BLOG-014 |
| Mermaid diagram labels | EN | EN (consistent) | ⚠ policy-needed BLOG-012/018 |
| Verbatim English citation quotes | n/a | preserved verbatim, no gloss | ⚠ BLOG-005 |
| Blog plugin title (browser tab) | "Blog" | "Blog" (scaffold default) | ⚠ BLOG-013 |
| RSS feed language metadata | absent | absent | ⚠ BLOG-011 |
| OG image present (4 posts) | 3 of 4 (09-22 broken) | 3 of 4 (same path, same break) | ❌ BLOG-002 |

## Quick wins — top 5

1. **BLOG-001 + BLOG-002**: delete `.bak`, fix Vigía Futura OG image path (single asset placement fixes both locales). ~10 minutes.
2. **BLOG-004**: clean 6 em-dashes from ES blog bodies (cmd: grep, replace with en-dash or commas). ~10 minutes.
3. **BLOG-006**: delete duplicate manual H1 on Vigía Futura post in both locales (2 line deletions). ~2 minutes.
4. **BLOG-013 + BLOG-017**: fix ES blog plugin `options.json` title/description, and fix `## Referencias` heading in ES 01-19. ~5 minutes.
5. **BLOG-015**: drop the lone calendar emoji from both locales of 09-22. ~1 minute.

## Strategic bets — top 3

1. **Cadence + bilingual format** (BLOG-003): codify monthly essay + monthly field note in `AGENTS.md`; introduce `field-notes` tag (~600-word format) that's tractable to publish in both locales monthly. Drains the silence problem and the bilingual maintenance problem with one decision.
2. **Per-locale tag label override** (BLOG-010): swizzle `BlogTagsPostsPage` to read a sidecar map `i18n/<locale>/blog-tag-labels.json`. ~30-line theme component; preserves slug URL stability (the hard rule); gives ES readers Spanish tag labels. Without this, every new ES post deepens the mixed-locale tag-page UX problem.
3. **Editorial conventions doc + canonical CTA component** (BLOG-005, BLOG-008, BLOG-009, BLOG-014, BLOG-016): create `docs/ops/blog-editorial-conventions.md` (frontmatter shape, image path convention, ES citation policy, large-number policy, Mermaid policy, author file structure); ship a `<BlogEndCTA />` component that consumes `CLARITYSCAN_CHECKOUT_URL` and `BOOKING_*` constants, replacing 6 hardcoded Stripe URLs across the corpus. Both reduce drift the next time a post is added or translated.

## Out of scope / hand-offs

- NNY hero component build (prior BLOG-004) — Brand & visual + Code quality. Still unbuilt; affects bilingual consistency of editorial canvas equally.
- `/insights` and `/es/insights` BLOG_LIMIT (prior BLOG-011) — IA & UX. With 4 posts and BLOG_LIMIT=3, ES Insights has the same one-post-permanently-hidden issue.
- Related-posts module (prior BLOG-010) — IA & UX + Conversion. ES has zero blog-to-blog links; same as EN.
- Mobile rendering of Mermaid-heavy posts in ES — Mobile-first (role 17).
- Booking-link governance — see `docs/ops/booking-link-map.md`; this audit only flagged the Stripe URL hardcoding (BLOG-009).
- Analytics `data-cta` instrumentation in blog body links — Analytics (role 09).
- EN dated-body em-dash exception — Content & copy ownership decision, not re-litigated here.

## Open questions for Luis

1. Em-dash policy for ES blog bodies: confirm the EN grandfathering does **not** extend to ES (recommend clean ES per BLOG-004).
2. Tag-label localization: comfortable with a small swizzle (path 2 in BLOG-010), or do you prefer the "EN label only" status quo with the gloss-in-parentheses lite version?
3. Cadence commitment: monthly essay + monthly field note (each in both locales) — green-light, or essays-only quarterly with full ES parity?
4. ES citation policy: keep verbatim English quotes (current state), gloss them in parentheses, or paraphrase in ES and drop the quote (BLOG-005)?
5. Mermaid label localization: keep EN labels in ES Mermaid blocks (consistency, simpler maintenance) + add ES caption, or maintain per-locale Mermaid copies?
6. Stripe link in body: ready to retire the 6 hardcoded inline Stripe URLs in favor of a constant + `<BlogEndCTA />` component (BLOG-009)?
7. ES `authors.yml`: ready to add a second `i18n/es/.../authors.yml` with ES title for Luis (BLOG-014)?
