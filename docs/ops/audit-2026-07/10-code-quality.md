# Code Quality & Architecture Audit — doulab.net — 2026-07 (bilingual)

## Scope

Static, read-only review of the `doulab-site` codebase (Docusaurus v3.10 / React 18 / TypeScript) **after** the EN/ES launch (commit `eb1c8c8`, E-I2). Focus areas for this pass: the bilingual duplication pattern (48 ES translation files mirroring EN structure), TypeScript discipline (`any`, prop typing, schema drift), component composition vs duplication, state management, dead code, lint coverage, the prebuild/normalize hook chain, Husky pre-commit / pre-push, build-script consistency, CSS organization (`src/css/custom.css` at 2,584 lines), and test coverage.

Out of scope (handed off): IA & UX route choices, brand visuals, copy, conversion behaviour, SEO content, runtime performance, runtime a11y, security headers/CSP, analytics events, blog editorial, full i18n strategy (parity, glossary, fallback), MCF/IMM-P content, behavioural econ/psychology, sales narrative, mobile responsiveness.

## Method

- Read `package.json`, `tsconfig.json`, `docusaurus.config.ts`, `sidebars.ts`, `.husky/*`, the `scripts/` tree, and `src/css/custom.css`.
- Walked `src/components/`, `src/pages/`, `i18n/es/` (theme + plugin-content-pages + plugin-content-blog + plugin-content-docs + `code.json`).
- Compared 3 representative EN/ES TSX pairs (`index.tsx`, `services/index.tsx`, `about/index.tsx`, `insights/index.tsx`) by line count and `diff` to measure structural duplication.
- Verified the import-alias claim (`@site/src/...` in ES vs relative `../components/...` in EN).
- Verified blog-tag policy (EN slugs preserved in ES front-matter).
- Grep'd for `any`, `as any`, fake-BEM class strings, `useLatestBlogItems` callers, dead components, and lint config.
- Cross-checked against [audit-2026-06/10-code-quality.md](../audit-2026-06/10-code-quality.md) to avoid re-filing resolved items.

## Status of audit-2026-06 findings

| Prior ID | Status | Note |
|---|---|---|
| CODE-001 (ops in build) | RESOLVED | `docusaurus.config.ts:72` now has `exclude: ['ops/**']`. |
| CODE-002 (`.bk` files) | Not re-verified here; SEO/repo-hygiene scope. |
| CODE-003 (orphan `*-insights*` scripts) | **OPEN** — `fix-insights.mjs`, `fix-insights-all.cjs`, `finalize-insights.cjs`, `insights-inline-fixes.cjs` still present in `scripts/`. Re-filed condensed as [CODE-201]. |
| CODE-004 (`normalize-repo-text.mjs` dup) | **OPEN** — file still present. Re-filed as [CODE-201]. |
| CODE-005 (HomepageFeatures) | **OPEN** — `src/components/HomepageFeatures/` still present. Re-filed as [CODE-202]. |
| CODE-006 (ConsentBanner stub) | **OPEN** — `src/components/ConsentBanner.tsx` still present. Re-filed as [CODE-202]. |
| CODE-007 (fake BEM class strings) | **OPEN, now worse** — duplicated across ES tree. See [CODE-104]. |
| CODE-008 (page giants + RSS dup) | **OPEN, doubled** by ES mirroring. See [CODE-101] and [CODE-103]. |
| CODE-009 (`as unknown as DocsPluginData`) | **OPEN, doubled** — also re-filed as [CODE-102]. |
| CODE-010 (3 CTA shapes) | **OPEN** — not actioned. See [CODE-105]. |
| CODE-011 (lucide deep imports) | **OPEN** — still pinned `^0.536.0`. Performance hand-off. |
| CODE-012 (ESLint installed, unused) | **OPEN** — no `eslint.config.*` at root. Re-filed as [CODE-106]. |
| CODE-013 (`sharp-cli`, `gh-pages`) | Out of scope this pass. |
| CODE-014 (script-alias chain) | **OPEN** — `build:cf`, `verify:build`, `prepush`, `prepush:local` still alias-chained. Re-filed as [CODE-107]. |
| CODE-015 (unlisted `intro.mdx`) | IA hand-off. |
| CODE-016 (scratch files at root) | Not re-verified. |
| CODE-017 (mixed `.mjs`/`.cjs`) | **OPEN** — re-filed inside [CODE-201]. |

The 2026-07 file below focuses on **the new ES surface** (CODE-101..105) and condenses the still-open CODE-201..202 cleanup into two action bundles so the report does not double the size of the prior one.

## Findings (ranked)

### CODE-101 — EN/ES TSX duplication is full-source mirroring, not translation — unsustainable past ~100 pages

- Severity: **P0** — Impact: **5** — Effort: **L**
- Location: `src/pages/**` (26 TSX) vs `i18n/es/docusaurus-plugin-content-pages/**` (26 TSX). 48 mentioned in the brief; current tree shows 26+26 = 52 page TSX plus ~1 theme override.
- Evidence:
  - `src/pages/index.tsx` = 679 lines; `i18n/es/docusaurus-plugin-content-pages/index.tsx` = 680 lines.
  - `src/pages/insights/index.tsx` = 432; ES counterpart = 432. **Identical line count.**
  - `src/pages/services/index.tsx` = 186; ES = 181 (5-line drift already).
  - `diff src/pages/services/index.tsx i18n/es/.../services/index.tsx` returns "1,186c1,181" — i.e. **every line differs**, because both string literals and structural code (import paths) were forked.
- Observation: Docusaurus i18n was designed around **content** translation: MDX for prose, `code.json` for translatable strings inside TSX. The current pattern instead clones each TSX file in full, then translates string literals **inside** the clone. Every change to a page (a new section, a CTA rename, a Hero prop, a schema-org tweak, an aria-label fix, a typo) must now be made in **two files**, kept in sync **manually**, with no compiler or test to catch drift. Concrete drift observed already:
  - `services/index.tsx` is 5 lines shorter in ES — a section divergence has begun within weeks of launch.
  - `index.tsx` is +1 line in ES — another silent drift.
  - Every `aria-label` is forked (correct), but so is every prop shape, every conditional, every `useMemo`, every RSS fetch, every Schema.org JSON — all of which **should be** language-agnostic and are now two copies.
  - Both copies carry the same `useAllDocsData() as any` (see [CODE-102]) — a single fix now requires two edits.
- Why this matters: at 26 pages the team can keep up with discipline. At ~50 pages the diff-rate doubles. At 100+ pages it becomes a permanent maintenance tax that scales O(locales × pages) and silently produces visual / behavioural drift between locales — exactly the divergence already starting in `services/`.
- Recommendation — phased extraction:
  1. **Stop the bleeding.** Add a contributor rule (and a `verify:i18n-parity` script — see open question) that any change to `src/pages/*.tsx` must be mirrored to `i18n/es/...` in the same commit. Compute a structural diff (AST node count, hash of code minus string literals) and fail CI if it diverges.
  2. **Migrate to the supported pattern.** Per Docusaurus i18n docs, the right shape is: one TSX per page in `src/pages/`, wrapping every user-visible string in `<Translate>` / `translate({...})`, then `npm run write-translations` emits `code.json` per locale; ES translators edit the JSON, not the TSX. Pilot with the smallest pages first (`terms-and-conditions.tsx`, `privacy-terms.tsx`, `404.tsx`, both `book-clarityscan*.tsx`), delete the ES clones, verify ES rendering. Then `contact/`, `work-with-us/`, `vigia-futura/`. Save the four giants (`index`, `insights`, `services`, `ecosystems`, `about`) for last so the team has the pattern memorised.
  3. **Long-form content** (multi-paragraph Hero `body`, ProblemSection causes, FAQ-style cards) should move to **MDX partials under `src/content/<locale>/...`** or to JSON imported by the page — TSX should hold structure only. This keeps translator workflow out of TypeScript files entirely.
  4. **Acceptance gate:** after migration, every `i18n/es/docusaurus-plugin-content-pages/*.tsx` should be **deleted**. The only EN-side knowledge in `i18n/es/` should be `code.json`, `navbar.json`, `footer.json`, MDX/MD content overrides, and `options.json` per plugin.
- Risk of inaction: every other audit role landing in this round (Brand, Conversion, A11y, SEO, Performance) will produce changes that must be hand-applied twice, and many will be applied to the EN file only — accelerating drift exactly while traffic is being driven to ES for the first time.
- Cross-roles: [i18n], [conversion], [a11y].

### CODE-102 — `useAllDocsData() as any` and `(v: any)` are the only remaining `any`s — now duplicated across locales

- Severity: P2 — Impact: 2 — Effort: S
- Location: `src/pages/index.tsx:373,378`; `i18n/es/docusaurus-plugin-content-pages/index.tsx:374,379`. Grep across `src/` and `i18n/` returns only these 4 hits — TypeScript discipline is otherwise clean.
- Evidence: `const allDocsData = useAllDocsData() as any; // shape differs across Docusaurus versions` and `plugin?.versions?.find((v: any) => v?.isLast)`.
- Observation: Prior CODE-009 flagged this as a schema-drift risk in `WhitepaperCards.tsx` + `pages/insights/index.tsx`. Those call sites used `as unknown as DocsPluginData` (better — at least narrowed). The home page uses a bare `as any` and the cast was copy-pasted into the ES clone, so the same lie now exists in both locales. A real Docusaurus v3.10 → v3.11 type change would silently break both.
- Recommendation: Move the `DocMeta` / `DocsVersion` / `DocsPluginData` types into `src/types/docs.ts` (per prior CODE-009) and import them at all four call sites. Replace the bare `as any` in `pages/index.tsx` with `as unknown as DocsPluginData | undefined` plus a runtime guard `if (!plugin || !('versions' in plugin)) return null;`. After CODE-101 lands, this fix exists in one file, not two.
- Cross-role: subsumed by CODE-101.

### CODE-103 — RSS-fetching logic now exists in **four** places (was two)

- Severity: P1 — Impact: 3 — Effort: M
- Location: `src/pages/index.tsx:300-340` (`BlogItem` + inline `useEffect` fetcher); `src/pages/insights/index.tsx:19-105` (`useLatestBlogItems` + `parseRSS` + `parseAtom`); plus both ES clones at `i18n/es/docusaurus-plugin-content-pages/index.tsx:300-340` and `.../insights/index.tsx:19-105`.
- Evidence: Grep for `useLatestBlogItems\|BlogItem\|parseRSS` returns 4 distinct implementations across the EN+ES trees, all parsing `/blog/rss.xml` with `DOMParser`, all with their own normalization rules, all forked.
- Observation: Prior CODE-008 called this out as a 2-way duplication. Post-i18n launch it is a 4-way duplication. Worse, **the two `BlogItem` type shapes differ**:
  - `index.tsx`: `{ title; href; description?; external; image? }`
  - `insights/index.tsx`: `{ title; link; pubDate; description }`
  - That means even if a future engineer tried to dedupe, they'd find the two pages diverged in interpretation before being doubled by locale.
  - For ES, the RSS feed served at `/es/blog/rss.xml` is a **different feed**, but the fetchers in the ES clones still hardcode `/blog/rss.xml`. **This is a likely silent bug** — verify behaviour: ES insights page may be showing EN blog items. (Hand off to [blog-editorial] and [i18n] for live verification.)
- Recommendation:
  1. Extract `src/lib/useLatestBlogItems.ts` with a single unified `BlogItem` shape (`{ title; href; pubDate; description; image? }`) and a `feedUrl` parameter that defaults to a locale-aware path (`useBaseUrl('blog/rss.xml')` — `useBaseUrl` already adds `/es` when locale is ES).
  2. Replace all four call sites.
  3. Add a unit-level snapshot test of the parser (see [CODE-108]).
- Cross-roles: [blog-editorial], [i18n].

### CODE-104 — Fake CSS-module class strings now duplicated into ES tree

- Severity: P2 — Impact: 3 — Effort: M
- Location: `src/components/CardGrid/CardGrid.tsx:9`, `src/components/case-studies/CaseStudyCards.tsx:31`, `src/components/docs/DocBadges.tsx:12-14`, `src/components/docs/EntityHeader.tsx:14-19`, `src/components/FinalCta.tsx:93`, plus the page-side usage of the same fake-module strings inside both EN and ES page TSX (e.g. `'pages-b4-p1__centerText'`, `'pages-b4-p1__cardFooterRow'` in `services/index.tsx` lines 62 and 76 — present **identically** in the ES clone).
- Evidence: `grep -rn "components-[a-z]*-[a-z]*" src/components --include="*.tsx"` returns 10+ sites still using template-literal-concatenated fake-BEM strings (`components-cardgrid-cardgrid__grid`, `components-finalcta__ctaRow`, etc.). All resolve to global classes in `src/css/custom.css` — no compiler can verify the link. CODE-007 is unchanged from the prior audit.
- Observation: Per CODE-101's extraction, when a rename happens in `custom.css`, both EN and ES TSX must be edited because the class string is hard-typed in both clones.
- Recommendation: Same as prior CODE-007 — adopt real `*.module.css` per component (CardGrid, FinalCta, PageHeader, Hero, EntityHeader, DocBadges, CaseStudyCards). The `imm/` family already does this correctly (`EvidenceMeter.module.css`, `MaturityLadder.module.css`, `Pillars.module.css`, `Radar.module.css`, `Roadmap.module.css`) — replicate that pattern.

### CODE-105 — Three CTA prop shapes (still) — duplicated across ES, schema mismatch with new bilingual `aria-label` discipline

- Severity: P2 — Impact: 3 — Effort: M
- Location: `Hero.tsx`, `FinalCta.tsx`, `PageHeader/PageHeader.tsx` (prior CODE-010, unchanged) — now reaching ~50 call sites because ES pages re-invoke each component with translated `label` / `aria-label`.
- Observation: Beyond the original concerns, the bilingual surface adds a new failure mode: every Hero / FinalCta / PageHeader call site in `i18n/es/...` must pass a translated `aria-label` *and* a translated `label`. The lack of a shared `Cta` primitive means each site has to know the per-component prop name (`label` vs `ctaLabel`, `external?: boolean` vs discriminated union) **in two languages**. This makes translator review impossible: an ES translator must read TSX code to find every `aria-label="..."` literal.
- Recommendation: As in CODE-010 — introduce `src/components/cta/Cta.tsx` with FinalCta's discriminated union. Critically, **derive aria-label automatically from `label` when not provided**, and accept a `translationId` so post-CODE-101 the strings live in `code.json` not in TSX literals.

### CODE-106 — Lint coverage is **still zero**; ESLint v9 installed but never invoked

- Severity: P2 — Impact: 3 — Effort: S
- Location: `package.json:56` (`"eslint": "^9.31.0"`), no `eslint.config.*` at repo root (`ls eslint.config*` returns nothing), no `lint` script in `package.json:6-34`, no Husky hook references lint. Prior CODE-012 unchanged.
- Observation: Doubling the TypeScript surface (EN+ES) without any lint net means unused imports, unused vars, `any` regressions, and dependency-array misses all rely on visual review. The drift between `services/index.tsx` EN (186 lines) and ES (181 lines) is exactly the class of bug a `react-hooks/exhaustive-deps` + `@typescript-eslint/no-unused-vars` config would surface within minutes.
- Recommendation: Add a minimal `eslint.config.mjs` with:
  - `@docusaurus/eslint-plugin` (if available) or the React + TS recommended sets.
  - Custom rule: forbid relative imports beyond `../../` in `src/pages` (forces the `@site/src/...` alias the ES tree already uses — see CODE-109).
  - Custom rule: forbid `as any` in `src/` and `i18n/`.
  - Wire into `package.json` (`"lint": "eslint src i18n --max-warnings=0"`), Husky `pre-commit`, and the `verify` chain.
- This is now P1 if CODE-101 is **not** acted on — manual review cannot scale to a 4-locale future tree.

### CODE-107 — `package.json` script aliases unchanged; `verify`/`prepush` are now the only quality gate

- Severity: P3 — Impact: 2 — Effort: S
- Location: `package.json:13-20`. `build:cf` → `build`, `verify:build` → `verify`, `prepush:local` → `prepush` → `verify`. Prior CODE-014 unchanged.
- Observation: With no tests and no lint, `verify` = `tsc && docusaurus build` is the only gate. That's not a bad floor, but the chain of aliases (`prepush:local` calls `prepush` calls `verify` which calls `typecheck` and `build`) means a contributor reading `AGENTS.md` cannot tell what actually runs. The Husky pre-push hook has both `normalize:check` and `verify` and works correctly (verified `.husky/pre-push`), so the alias chain only adds documentation noise.
- Recommendation: Collapse per prior CODE-014. After CODE-101, add `verify:i18n-parity` as a real gate (see open questions).

### CODE-108 — Zero automated tests

- Severity: P2 — Impact: 4 — Effort: L
- Location: `find . -name "*.test.*" -o -name "*.spec.*"` returns **nothing** outside `node_modules`. No `vitest`, `jest`, `playwright`, or `@testing-library/*` in `package.json`.
- Observation: Sit-side this is the largest unmitigated risk after the bilingual launch. The site has:
  - Two RSS parsers with diverging type shapes (CODE-103).
  - One fragile `useAllDocsData() as any` cast that gates the homepage's whitepaper section (CODE-102).
  - A ProblemSection / ReelControls / Hero-prop combo that's never re-validated after EN/ES copy edits.
  - Schema.org JSON-LD on `about/index.tsx` that's hand-typed and forked to ES.
  None of these have a single test. The only safety net is `tsc` (catches the structural breakage, not the behavioural one) and the eyeball-review viewport sweep (an audit-time artifact, not CI).
- Recommendation: Adopt **Vitest** (Docusaurus's documented choice) with three minimal suites:
  1. `src/lib/__tests__/useLatestBlogItems.test.ts` — golden-file RSS + Atom parsing.
  2. `src/lib/__tests__/schema-org.test.ts` — JSON-LD schema-org generators (after extracting them from `about/index.tsx`).
  3. `src/components/__tests__/Cta.test.tsx` — once CODE-105's `<Cta>` lands, snapshot its `to`/`href`/`external` branches.
  Wire `npm run test` into Husky `pre-push`. Three suites is a starting point; expand as CODE-101 + CODE-103 + CODE-105 refactors land.

### CODE-109 — Import-path inconsistency between EN and ES TSX is the first symptom of CODE-101

- Severity: P3 — Impact: 1 — Effort: S
- Location: `src/pages/services/index.tsx:6-8` uses `from '../../components/Hero'` etc.; `i18n/es/docusaurus-plugin-content-pages/services/index.tsx:6-8` uses `from '@site/src/components/Hero'` etc. Confirmed across the 26-file ES tree (`@site/src/...` everywhere) and ~22 of the 26 EN files (relative paths).
- Observation: The ES side correctly uses `@site/src/...` (alias-stable across moves). The EN side uses relative paths because that's what the Docusaurus starter generates. The audit brief asked to **verify** this — verified, and it's the more obvious surface of CODE-101: even the import statements drifted from EN to ES.
- Recommendation: Standardize on `@site/src/...` in **both** trees (or after CODE-101, in the single remaining tree). Optionally enforce via the ESLint rule in CODE-106.

### CODE-110 — `src/css/custom.css` is now 2,584 lines of global rules — modular concerns long since blurred

- Severity: P2 — Impact: 3 — Effort: L
- Location: `src/css/custom.css` (2,584 lines, ~386 selectors per quick count).
- Observation: The file holds:
  - Self-hosted Roboto `@font-face` (correctly, post-E-R1.1).
  - Infima token overrides (`--ifm-*`).
  - Brand tokens, light + dark variants.
  - Global utilities (`heroBanner`, `buttonPrimary`, `cardGrid`, `card`, `microcopy`, `sectionLead`).
  - Per-component class definitions for every fake-BEM string used by CardGrid, PageHeader, Hero, FinalCta, EntityHeader, DocBadges, CaseStudyCards, and home-page sub-sections (`pages-b4-p1__*`).
  - Mermaid theme overrides.
  - Print styles, dark-mode toggles, focus-visible rules.
  - One swath of `@media` blocks per concern, scattered through the file rather than per-component.
  No `@import`, no PostCSS layering, no clear ordering. A class rename here is opaque to TypeScript — see CODE-104.
- Recommendation:
  1. Split by concern: `src/css/tokens.css` (vars + dark mode), `src/css/typography.css` (Roboto + heading scale), `src/css/utilities.css` (sitewide utility classes — `buttonPrimary`, `card`, `microcopy`), `src/css/layout.css` (`heroBanner`, `cardGrid`, `section`), `src/css/print.css`, `src/css/mermaid.css`. Re-export from `src/css/custom.css` via `@import` so Docusaurus's single-entry contract holds.
  2. Move per-component rules (`components-cardgrid-cardgrid__grid`, etc.) into real `*.module.css` per CODE-104 — each move shrinks `custom.css` and earns compile-time class checking.
  3. Acceptance: `custom.css` ≤ ~800 lines after the migration; everything else split or modularised.
- Cross-role: [brand-visual] for token names; [performance] for any CSS-payload impact.

### CODE-201 — Five orphan scripts (`*-insights*` + `normalize-repo-text.mjs`) still present (prior CODE-003/004/017 bundled)

- Severity: P3 — Impact: 2 — Effort: S
- Location: `scripts/fix-insights.mjs`, `scripts/fix-insights-all.cjs`, `scripts/finalize-insights.cjs`, `scripts/insights-inline-fixes.cjs`, `scripts/normalize-repo-text.mjs`. Plus `scripts/fix-mojibake.mjs` (mixed ESM/CJS rule still inconsistent — CODE-017).
- Observation: Re-verified that none of these are referenced by `package.json` scripts or Husky hooks. The original recommendation (delete all five, keep `normalize.mjs` as the single source of truth) still stands. Calling out separately so the consolidator can ship this as a single quick-win commit.
- Recommendation: `rm scripts/fix-insights*.{mjs,cjs} scripts/finalize-insights.cjs scripts/insights-inline-fixes.cjs scripts/normalize-repo-text.mjs`. Convert `scripts/fix-package-json-bom.cjs` and `scripts/fix-mojibake.mjs` to a consistent extension per the prior CODE-017 rule ("hooks = `.cjs`, everything else = `.mjs`").

### CODE-202 — `HomepageFeatures/` and `ConsentBanner.tsx` still present (prior CODE-005/006 bundled)

- Severity: P3 — Impact: 2 — Effort: S
- Location: `src/components/HomepageFeatures/index.tsx`, `src/components/ConsentBanner.tsx`.
- Observation: Re-verified. Neither is rendered by any page. The starter copy and the null-returning consent stub both still ship in the TypeScript graph.
- Recommendation: Delete both, plus the three `static/img/undraw_docusaurus_*.svg` if Grep confirms no other references (verify before delete).

## Quick wins — top 5

1. **CODE-201 + CODE-202** — delete the five orphan scripts and the two dead components in one cleanup commit. No behavioural change, ~700 lines gone.
2. **CODE-102** — extract `DocsPluginData` types to `src/types/docs.ts`, replace `as any` with a guarded `as unknown as`. One file added, four call sites cleaned.
3. **CODE-109** — bulk-rewrite EN-side relative imports to `@site/src/...` so EN and ES use the same path style. Mechanical, zero-risk.
4. **CODE-106** — land a minimal `eslint.config.mjs` + `npm run lint` + pre-commit hook. Even with only `no-unused-vars`, `no-unused-imports`, and `react-hooks/exhaustive-deps`, this surfaces the kind of EN/ES drift already starting in `services/`.
5. **CODE-107** — collapse `build:cf`, `verify:build`, `prepush:local` aliases per prior CODE-014. Update `AGENTS.md` to match.

## Strategic bets — top 3

1. **CODE-101 — kill the bilingual full-source-mirror pattern.** This is the single largest architecture decision in this audit round. Migrate `src/pages/**` to the supported `<Translate>` / `code.json` workflow + MDX content partials, delete every TSX clone under `i18n/es/docusaurus-plugin-content-pages/`. Without this, every subsequent change to a page is a 2-edit chore that will compound to N-edits if a third locale lands. Phase it (small pages first); set a hard rule that no new ES-mirror TSX is added.
2. **CODE-110 + CODE-104 — modularise CSS and adopt real CSS Modules per component.** Split `src/css/custom.css` into 5–6 concern files, migrate the seven fake-BEM components to real `*.module.css`. This pays off every time a class is renamed and prevents silent visual regressions across both locales.
3. **CODE-108 — adopt Vitest with three starter suites** (`useLatestBlogItems`, schema-org generators, the new `<Cta>` primitive). After the EN/ES merger this is the only realistic quality net at the function level; viewport sweeps are an audit-time tool, not CI.

## Out of scope / hand-offs

- **[i18n]** — Owns the actual migration strategy choice for CODE-101 (full `<Translate>` vs MDX partials vs hybrid). Also owns the verification that ES `/es/blog/rss.xml` is the right feed (CODE-103 silent-bug call-out).
- **[blog-editorial]** — Confirm whether the ES `insights/index.tsx` is currently showing EN blog items (CODE-103).
- **[performance]** — Lucide deep-import refresh (prior CODE-011) plus CSS payload impact of CODE-110.
- **[brand-visual]** — Token names if CSS is split per CODE-110.
- **[security-privacy]** — Confirm `ConsentBanner.tsx` (CODE-202) is genuinely safe to delete; Cloudflare Web Analytics still cookieless across both locales.
- **[a11y]** — Aria patterns inside Hero / FinalCta / PageHeader once unified per CODE-105.
- **[conversion]** — Whether `data-cta` taxonomy can be auto-derived from a `<Cta>` `translationId` + locale.
- **[ia-ux]** — Unlisted `intro.mdx` (prior CODE-015) and `/docs` IA at the source level.

## Open questions for Luis

1. **CODE-101 migration appetite.** Is this audit cycle the right time to start the EN/ES merger, or do you want one more pass (Phase G?) of pure feature work first? My recommendation is: start the merger now while the ES tree is 26 pages, not 50.
2. **CODE-101 acceptance test.** Want me to add `scripts/verify-i18n-parity.mjs` as a `verify:i18n-parity` script that AST-diffs `src/pages/*.tsx` vs `i18n/es/...` (modulo string literals) and fails if structures diverge? This buys time before the full migration lands.
3. **CODE-103 bug.** Should I file the "ES insights page may be showing EN RSS items" as a separate backlog item now, or wait for [blog-editorial] to confirm?
4. **CODE-106 ESLint adoption.** Same question as prior CODE-012: install a real flat-config (option b) or drop the dep until ready (option a)? After bilingual launch I shift to recommending option **b**.
5. **CODE-108 test framework.** Vitest preferred, but happy with Jest if you have a reason. Either is fine for the three starter suites.
6. **CODE-110 CSS split.** Want me to draft the 5-file split as a no-op PR (same total bytes, same selectors, just reorganised) so it can land before the component-by-component CSS-Modules migration?
