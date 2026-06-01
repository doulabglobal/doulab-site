# Code Quality & Architecture Audit — doulab.net — 2026-06-01

## Scope
Static, read-only review of the `doulab-site` codebase (Docusaurus v3.9 / React 18 / TypeScript). Focus areas: component reuse and prop API consistency, MDX patterns, swizzled theme components, TypeScript usage, dependency hygiene, build/normalize script consolidation, scratch-file cleanup, dead code, sidebars and docs IA at the source level, file naming, ESM/CJS mixing, Husky setup, build script clarity, and `.gitignore` / `.gitattributes` discipline.

Out of scope here (handed off): IA & UX route choices, brand visuals, content/copy quality, conversion behaviour, SEO metadata content, runtime performance, runtime a11y, security headers/CSP, analytics, blog editorial, i18n strategy, MCF/IMM-P content, behavioral economics/psychology, sales narrative, mobile responsiveness.

## Method
- Read `AGENTS.md`, `package.json`, `tsconfig.json`, `docusaurus.config.ts`, `sidebars.ts`, `.gitignore`, `.gitattributes`, `.editorconfig`, and the Husky hooks.
- Walked `src/components/`, `src/theme/`, `src/pages/`, `src/constants/`, `src/types/`, and `scripts/`.
- Inspected the four `*-insights*` scripts, both `normalize*` scripts, the BOM/mojibake helpers, and the prepare/strip-bom guards.
- Cross-checked component usage with `Grep` to identify dead code and inconsistent class-name strategies.
- Verified the published build under `build/docs/ops/` to confirm whether internal ops markdown is shipped.
- Cited evidence with `path:line` references against the on-disk tree.

## Findings (ranked)

### CODE-001 — Internal ops/governance docs are published as part of the public site
- Severity: High — Impact 5 — Effort: S
- Location: `docusaurus.config.ts:34-41`, `docs/ops/*` (44+ files), confirmed in `build/docs/ops/booking-architecture.html`, `build/docs/ops/doulab-net-backlog.html`, etc.
- Observation: The classic-preset `docs` plugin is configured with `routeBasePath: '/docs'` and `include: ['**/*.md', '**/*.mdx']` with no `exclude`. Every file under `docs/ops/` (phase plans, hardening plans, security-headers reviews, backlog with commit hashes, audit notes including this one) is built into HTML and served. `sidebars.ts` only lists `whitepaperSidebar` — the ops pages are unlisted but still routable at `/docs/ops/<slug>` and indexable.
- Recommendation: Add `exclude: ['ops/**', 'ops/**/*.md', 'ops/**/*.mdx', 'audit-2026-06/**']` to the docs preset (or move `docs/ops/` outside `docs/` to e.g. `ops/internal/`). Re-run build and verify `build/docs/ops/` is empty. Add a guard in `verify:build` that asserts no `ops/` HTML is emitted.
- Evidence: `docusaurus.config.ts:34-41` lacks `exclude`; `build/docs/ops/` listing returned phase B/C/D plan files.

### CODE-002 — Backup files (`*.bk`) committed inside the docs tree
- Severity: High — Impact 4 — Effort: S
- Location: `docs/research-resources/distributed-federated-agentic-ai copy.bk`, `docs/research-resources/distributed-federated-agentic-ai-copy2.bk`
- Observation: Two ad-hoc backups of an active whitepaper sit beside the canonical file. Docusaurus ignores non-`.md`/`.mdx` extensions for routing, but they are committed source, will be pulled by editors/grep, and risk being re-promoted by a future include change.
- Recommendation: Delete both `.bk` files; rely on git history. Add `*.bk` to `.gitignore`.
- Evidence: Directory listing of `docs/research-resources/`.

### CODE-003 — Four overlapping one-off "fix-insights" scripts are committed long-term
- Severity: Medium — Impact 3 — Effort: S
- Location: `scripts/fix-insights.mjs`, `scripts/fix-insights-all.cjs`, `scripts/finalize-insights.cjs`, `scripts/insights-inline-fixes.cjs`
- Observation: All four operate on the same file (`src/pages/insights/index.tsx`), apply overlapping regex fixes for SUB/`U+001A` control chars, mojibake, and a hard-coded final-CTA rewrite. None are referenced by any `npm` script in `package.json:6-34`. They are mixed ESM/CJS and contain literal `\\u001a` strings (e.g. `scripts/fix-insights-all.cjs:9`, `scripts/insights-inline-fixes.cjs:5-12`) that will never match real control chars at runtime — i.e. the scripts are dead-on-arrival in addition to being redundant. They also encode replacement chars (`?`) as the "fix" rather than the proper arrow glyph, which would regress content if re-run.
- Recommendation: Delete all four. Their purpose is subsumed by `scripts/normalize.mjs` (already wired to `npm run normalize` / `normalize:check`). If a fence is needed against future control-char drift, codify it as one rule in `normalize.mjs:8-26` and the pre-commit hook.
- Evidence: `scripts/fix-insights.mjs:1-37`; `scripts/fix-insights-all.cjs:1-32`; `scripts/finalize-insights.cjs:1-44`; `scripts/insights-inline-fixes.cjs:1-17`; `package.json:6-34` has no callers.

### CODE-004 — Two near-duplicate normalize scripts
- Severity: Medium — Impact 3 — Effort: S
- Location: `scripts/normalize.mjs`, `scripts/normalize-repo-text.mjs`
- Observation: Both share the same skeleton (root walk, `EXCLUDE_DIRS`, `DEFAULT_EXT`, mojibake replacements). Only `normalize.mjs` is wired through `npm run normalize` / `normalize:check` and the Husky hooks. `normalize-repo-text.mjs` is orphaned but still imports the same ruleset, drifts (slightly different `REPLACEMENTS`), and invites bit-rot where one is updated and the other is not.
- Recommendation: Delete `scripts/normalize-repo-text.mjs`. Keep `scripts/normalize.mjs` as the single source of truth.
- Evidence: `scripts/normalize.mjs:1-30`; `scripts/normalize-repo-text.mjs:1-30`; `package.json:32-33`.

### CODE-005 — Dead "Homepage Features" template component (and SVGs) still ships
- Severity: Medium — Impact 2 — Effort: S
- Location: `src/components/HomepageFeatures/index.tsx`, `src/css/custom.css`
- Observation: This is the stock Docusaurus starter component with Lorem-style copy ("Easy to Use", "Focus on What Matters", "Powered by React") and the three `undraw_docusaurus_*.svg` assets it `require`s. The only references to `HomepageFeatures` outside the component itself are CSS rules in `src/css/custom.css` (Grep returned 2 files only). No page imports it. It is dead, but it still increases TypeScript graph work and tempts a future contributor to re-enable it.
- Recommendation: Remove `src/components/HomepageFeatures/`, prune the orphaned CSS, and delete the three `static/img/undraw_docusaurus_*.svg` assets if not referenced elsewhere (verify with one grep).
- Evidence: `src/components/HomepageFeatures/index.tsx:1-40`; Grep on `HomepageFeatures` returned only the component file and CSS.

### CODE-006 — `ConsentBanner.tsx` is a permanently-null no-op component
- Severity: Low — Impact 2 — Effort: S
- Location: `src/components/ConsentBanner.tsx:1-12`
- Observation: The component returns `null` with a comment explaining Cloudflare Web Analytics is cookieless. Only the file itself and a backlog reference exist; nothing renders it.
- Recommendation: Delete the file. If consent UI is reintroduced later, build it from a privacy-pass spec rather than from this stub. (Cross-reference to Security & privacy hand-off for whether a real banner is needed.)
- Evidence: `src/components/ConsentBanner.tsx:1-12`; Grep usage shows only this file plus backlog mention.

### CODE-007 — Mixed/handwritten BEM-like class names alongside CSS Modules — no unified styling strategy
- Severity: Medium — Impact 3 — Effort: M
- Location: `src/components/CardGrid/CardGrid.tsx:9`, `src/components/PageHeader/PageHeader.tsx:56-66`, `src/components/docs/DocBadges.tsx:12-15`, `src/components/docs/EntityHeader.tsx:14-19`, `src/components/Hero.tsx:81-101`, `src/components/FinalCta.tsx:93-99` vs. `src/components/CaseVignetteCard/CaseVignetteCard.tsx:1-2` (CSS Modules) and global utility classes (`heroBanner`, `buttonPrimary`, `cardGrid`, `card`, `microcopy`) in `src/css/custom.css`.
- Observation: Most components emit literal string class names that mimic CSS-module hashes (e.g. `'components-pageheader-pageheader__title'`, `'components-cardgrid-cardgrid__grid'`). These look like build-output strings but are hand-typed and resolved against `custom.css` — i.e. the convention has been faked rather than adopted. `CaseVignetteCard` is the only component that uses real CSS Modules (`*.module.css`). The result is three coexisting strategies: real CSS modules, fake "module-like" strings, and global utility classes from `custom.css`. This is fragile: a rename in CSS or in the literal string silently breaks styling with no TypeScript signal.
- Recommendation: Pick one strategy. Practical path: keep `src/css/custom.css` for site-wide utilities (`buttonPrimary`, `card`, `heroBanner`, `microcopy`), migrate the fake-BEM components to real `*.module.css` files (CardGrid, PageHeader, Hero, FinalCta, EntityHeader, DocBadges, CaseStudyCards) so class references are imports the compiler can check, and drop the literal `'components-…__…'` strings.
- Evidence: see locations above.

### CODE-008 — Page files mix presentation, RSS fetching, and ad-hoc state — `pages/index.tsx` (~30 KB), `pages/insights/index.tsx` (~20 KB), `pages/what-we-do/index.tsx` (~16 KB)
- Severity: Medium — Impact 3 — Effort: M
- Location: `src/pages/index.tsx:1-80` (15 individually-imported lucide icons, `usePrefersReducedMotion`, `ProblemSection`, blog RSS fetcher), `src/pages/insights/index.tsx:26-100` (its own near-duplicate `useLatestBlogItems` hook + same DOMParser RSS logic).
- Observation: `useLatestBlogItems` exists in `pages/insights/index.tsx` and a structurally identical blog-RSS fetcher exists in `pages/index.tsx`. Both parse `/blog/rss.xml` with `DOMParser`, both normalize same-origin links, both fall back to atom. This is two implementations of the same logic. Page files also colocate hooks like `usePrefersReducedMotion` that would be reusable.
- Recommendation: Extract `src/lib/useLatestBlogItems.ts` (or `src/hooks/`) and `src/lib/usePrefersReducedMotion.ts`. Replace both page-local implementations. Move `ProblemSection`, `ReelControls`, etc., out of `pages/index.tsx` into `src/components/home/`. Aim to land each page under ~400 lines.
- Evidence: `src/pages/index.tsx:1-80`; `src/pages/insights/index.tsx:26-105`.

### CODE-009 — `useAllDocsData` types are re-declared in multiple files; `as unknown as` casts hide schema drift
- Severity: Low — Impact 2 — Effort: S
- Location: `src/components/WhitepaperCards.tsx:5-29`, `src/pages/insights/index.tsx:13-17`
- Observation: Both files redefine `DocMeta`, `DocsVersion`, `DocsPluginData`, then cast `allDocsData?.['default']` with `as unknown as DocsPluginData | undefined`. If Docusaurus's actual return shape ever changes, neither call site fails at compile time.
- Recommendation: Move the three types into `src/types/docs.ts` and import. Replace `as unknown as` with a narrow runtime guard (e.g. `if (!data || !('versions' in data)) return null;`). Better still: see whether `@docusaurus/plugin-content-docs/client` now exports a typed helper for the latest version (v3.10).
- Evidence: `src/components/WhitepaperCards.tsx:5-29`; `src/pages/insights/index.tsx:13-17`.

### CODE-010 — Three near-identical CTA-rendering patterns (Hero, FinalCta, PageHeader) — no shared `<Cta>` primitive
- Severity: Medium — Impact 3 — Effort: S/M
- Location: `src/components/Hero.tsx:115-165` (`primaryCta` / `secondaryCta` branching on `external`); `src/components/FinalCta.tsx:32-67` (`isExternal` discriminator on `href` vs `to`); `src/components/PageHeader/PageHeader.tsx:23-43` (`external: boolean`).
- Observation: Three different CTA prop shapes for the same concept:
  - `Hero` uses `{ to, external? }` — external is a flag, `to` is reused as the URL.
  - `FinalCta` uses a discriminated union of `{ to }` vs `{ href, newTab? }`.
  - `PageHeader` uses `{ to, external?: boolean }` like Hero but without `newTab`.
  This produces three near-duplicate render branches (`<a target="_blank" rel="noopener noreferrer">` vs `<Link>`), three subtly different aria-label conventions, and three places to update when the data-cta contract evolves.
- Recommendation: Introduce `src/components/cta/Cta.tsx` exporting a single `Cta` component + `CtaProps` type (use FinalCta's discriminated union — it's the most explicit). Migrate Hero, PageHeader, and the inline CTAs in `pages/insights/index.tsx` to use it. Keep `buttonPrimary` / `buttonSecondary` as the className contract.
- Evidence: see locations above.

### CODE-011 — Deep `lucide-react/dist/esm/icons/*` imports are tree-shake hacks pinned to a private path
- Severity: Low — Impact 2 — Effort: S
- Location: `src/types/lucide-react-icons.d.ts:1-5`; 14 page files import e.g. `lucide-react/dist/esm/icons/search` (`src/pages/index.tsx:13-27` alone has 15).
- Observation: This pattern reaches past lucide's public entrypoint into its build folder. It works today because the `types/lucide-react-icons.d.ts` ambient module declaration covers the path, but a lucide minor release can rearrange `dist/esm/icons/*` without semver consequences. The same tree-shaking is now achieved by modern bundlers from `import { Search } from 'lucide-react'` because lucide's main entry has been ESM-side-effect-free for several minors. `package.json:42` pins `^0.536.0` which is mid-2024-era — current is much further on.
- Recommendation: (1) Bump `lucide-react` to current and audit. (2) Try a single switch to barrel imports `import { Search, Layers, ... } from 'lucide-react'`; verify `build/` size is unchanged. If it regresses, keep deep imports but document why in `src/types/lucide-react-icons.d.ts`. (3) Either way, consider a `src/components/icons.ts` re-export so app code imports from one site-internal module.
- Evidence: `src/types/lucide-react-icons.d.ts:1-5`; `src/pages/index.tsx:13-27`; `package.json:42`.

### CODE-012 — ESLint is in devDependencies but has no config and no script
- Severity: Low — Impact 2 — Effort: S
- Location: `package.json:55` (`"eslint": "^9.31.0"`); no `eslint.config.*` / `.eslintrc*` exists at repo root.
- Observation: ESLint v9 (flat-config era) is installed but never invoked. There is no `lint` script in `package.json:6-34`, no Husky hook running it, no CI step. It is pure dependency surface.
- Recommendation: Either (a) remove the dependency until you're ready to adopt ESLint v9 flat config, or (b) add a minimal `eslint.config.mjs` with the Docusaurus + React 18 recommended rules, an `npm run lint` script, and a pre-commit hook. Given the lack of tests, option (a) is the lower-risk choice for now.
- Evidence: `package.json:55`; no eslint config file found at root (`ls .eslintrc*` and `ls eslint.config*` both miss).

### CODE-013 — `sharp-cli` is a devDependency with no script and no usage
- Severity: Low — Impact 1 — Effort: S
- Location: `package.json:57`
- Observation: `sharp-cli` ships as devDep but no `npm` script invokes it; image preparation appears to happen out-of-band (the `.avif` / `.webp` / `.jpg` triples in `static/img/` are pre-built). `gh-pages` is also retained "to avoid breaking docusaurus deploy" per `docs/ops/deps-prune-proof.md:5`, but the actual deploy target is Cloudflare Pages (`build:cf`), not GitHub Pages.
- Recommendation: Confirm with Luis whether image prep is manual; if so, document one script (`"img:prep": "sharp-cli ..."`) or remove `sharp-cli`. Re-evaluate `gh-pages`: if Cloudflare Pages is the only target, drop it and the `deploy` script alias.
- Evidence: `package.json:24,41,57`; `docs/ops/deps-prune-proof.md:1-9`.

### CODE-014 — Build/verify script aliases are confusing and partially circular
- Severity: Low — Impact 2 — Effort: S
- Location: `package.json:13-20`
- Observation:
  - `"build:cf": "npm run build"` is a pure alias to `docusaurus build` — it does not actually parametrize for Cloudflare. AGENTS.md ("any structural change must run `npm run build:cf` and `npm run verify:build`") suggests both are meaningful, but they collapse to the same single `docusaurus build` invocation.
  - `"verify": "npm run typecheck && npm run build"` and `"verify:build": "npm run verify"` are an alias chain.
  - `"prepush": "npm run verify"` and `"prepush:local": "npm run verify"` are identical.
  - `"build:dry"` uses `--no-minify --out-dir build-dry` (good) but is not surfaced by any other script.
- Recommendation: Collapse to one verb per concept: `build`, `build:dry`, `typecheck`, `verify` (= typecheck + build), and drop `build:cf`, `verify:build`, `prepush:local`. Update `AGENTS.md` to match. If `build:cf` is needed as a CF-environment shim later, give it actual content (e.g. set `DEPLOY_ENV`).
- Evidence: `package.json:13-20`.

### CODE-015 — Sidebar lists only one section; `intro.mdx` and other docs are reachable but unlisted
- Severity: Low — Impact 2 — Effort: S
- Location: `sidebars.ts:1-39`; `docs/intro.mdx:1-7` (`sidebar_position: 1`)
- Observation: `sidebars.ts` exports a single `whitepaperSidebar` covering `research-resources/*` + `releases`. `docs/intro.mdx` carries `sidebar_position: 1` and `tags: [whitepaper]` but is not in any sidebar item list. It is still routable at `/docs/intro` and discoverable in the sitemap. Combined with CODE-001 (no `exclude`), the docs IA at the source level is ambiguous: there's a difference between "in docs tree" and "navigable from sidebar".
- Recommendation: Decide explicitly per doc: list in sidebar OR move to `src/pages/` OR exclude via the preset. Either add `intro` to the sidebar root or remove `sidebar_position` and rely on `exclude`.
- Evidence: `sidebars.ts:1-39`; `docs/intro.mdx:1-7`.

### CODE-016 — Local scratch files at the site root are gitignored but not cleaned; `prepare`/`strip-bom` run on every install
- Severity: Low — Impact 1 — Effort: S
- Location: site root scratch files (`tmp_cases_index_full.txt`, `tmp_cs.txt`, `tmp_hero_block.txt`, `tmp_line.txt`, `tmp_review.txt`, `tmp_segment.txt`, `tmp_test_codex.txt`, `tmp_vf.txt`, `tmp_wwu.txt`, `temp_chunk.txt`, `dev-server.log`, `bytes.txt`); `.gitignore:26-37`; `scripts/strip-bom.cjs:1-13`; `package.json:7-9`.
- Observation: `.gitignore` correctly excludes `tmp_*`, `temp_*`, `dev-server.log`, and `bytes.txt`, so these don't enter version control — good. They are still cluttering the working tree, get caught by editor "open files in workspace", and the `tmp_*.txt` names look like editor scratch from regex-fixing the same `insights/index.tsx` covered by CODE-003. Separately, `preinstall` and `prebuild` both run `strip-bom.cjs` against only `package.json` (`strip-bom.cjs:4`) — a narrow defensive hook that survives because contributors keep introducing BOMs from Windows editors. `prepare.cjs:1-30` correctly skips Husky in CI / when no `.git` / when husky isn't installed (this part is solid).
- Recommendation: Delete the scratch files locally. Consider also normalizing editor settings in `.editorconfig` to forbid BOM (`charset = utf-8` is already set at `.editorconfig:4`, so the persistent BOM intrusions point to one specific tool/contributor; surface that in onboarding rather than papering over with `strip-bom`).
- Evidence: site-root listing; `.gitignore:26-37`; `scripts/strip-bom.cjs:1-13`; `package.json:7-9`; `scripts/prepare.cjs:1-30`.

### CODE-017 — Mixed ESM (`.mjs`) and CJS (`.cjs`) tooling without a documented rule
- Severity: Low — Impact 1 — Effort: S
- Location: `scripts/*.cjs` (prepare, strip-bom, fix-insights-all, finalize-insights, insights-inline-fixes, fix-package-json-bom) vs. `scripts/*.mjs` (normalize, normalize-repo-text, fix-insights, fix-mojibake, check-anchors)
- Observation: There's no consistent rule. `prepare.cjs` and `strip-bom.cjs` must be CJS because they run from `npm` lifecycle hooks before Node knows about ESM in this package (no `"type": "module"`). The rest are mixed by accident.
- Recommendation: Adopt one rule: "Lifecycle hooks (`prepare`, `preinstall`, `prebuild`) use `.cjs`; everything else is `.mjs`." After CODE-003/CODE-004 cleanup, the remaining scripts are `prepare.cjs`, `strip-bom.cjs`, `normalize.mjs`, `check-anchors.mjs`, `fix-mojibake.mjs`, `fix-package-json-bom.cjs`. Convert `fix-package-json-bom.cjs` to `.mjs` (it's not a lifecycle hook) so only true hooks remain `.cjs`.
- Evidence: `scripts/` listing.

## Quick wins — top 5
1. CODE-001 — Add `exclude: ['ops/**']` to the docs preset and rebuild. Verify `build/docs/ops/` is empty. Single-line config change, high impact. (Hand-off: Security & privacy.)
2. CODE-003 + CODE-004 — Delete five orphaned scripts (`fix-insights.mjs`, `fix-insights-all.cjs`, `finalize-insights.cjs`, `insights-inline-fixes.cjs`, `normalize-repo-text.mjs`). Net reduction without behavioural risk.
3. CODE-005 + CODE-006 — Delete `HomepageFeatures/`, the three `undraw_*.svg` if unused elsewhere, and `ConsentBanner.tsx`. Three dead modules removed.
4. CODE-002 — Delete the two `.bk` files under `docs/research-resources/` and add `*.bk` to `.gitignore`.
5. CODE-014 — Flatten the script aliases in `package.json` and update `AGENTS.md`. Removes confusion about what `build:cf` actually does.

## Strategic bets — top 3
1. CODE-007 — Pick a single styling strategy. Migrate the seven components that fake CSS-module class names to real `*.module.css`. This pays off every time a class is renamed and prevents silent visual regressions; it also makes future migration to Tailwind / vanilla-extract / Panda easy because the boundary is now real.
2. CODE-008 + CODE-010 — Refactor the page giants (`pages/index.tsx`, `pages/insights/index.tsx`, `pages/what-we-do/index.tsx`) by extracting a shared `Cta` primitive, a `useLatestBlogItems` hook, a `usePrefersReducedMotion` hook, and per-section components under `src/components/home/`, `src/components/insights/`, etc. This is the foundation for any subsequent design or conversion work — three other audits will land changes in these files.
3. CODE-001 + CODE-015 — Treat `docs/` as a strict public surface. Move `docs/ops/` out of the docs tree entirely (e.g. to `ops/internal/`), update `AGENTS.md` manifest paths, and adopt a rule: "If it isn't in a sidebar, it isn't in `docs/`." Pairs naturally with the SEO / Security hand-offs.

## Out of scope / hand-offs
- IA & UX — Whether the unlisted `intro.mdx` and the absence of multiple sidebars is desirable IA (CODE-015).
- Brand & visual — Choice of styling system (CSS Modules vs Tailwind vs other) once CODE-007 is acted on.
- Content & copy — All `docs/research-resources/` and page copy; the audit only notes structural backup files (CODE-002).
- Conversion — Whether `data-cta` taxonomy is correct; audit only flags structural duplication of CTA components (CODE-010).
- SEO — Whether ops pages should be indexable; depends on the action taken for CODE-001.
- Performance — `lucide-react` deep-import tradeoff (CODE-011) needs a real bundle-size measurement before changing.
- Accessibility — Aria patterns inside Hero / FinalCta / PageHeader; this audit only notes their structural divergence.
- Security & privacy — CODE-001 is primarily a security/privacy hand-off (governance, commit hashes, internal plans exposed). Also: ConsentBanner stub (CODE-006) — confirm consent surface is genuinely not needed.
- Analytics — Whether `data-cta` events will be consumed if CTAs are unified (CODE-010).
- Blog & editorial — RSS fetching pattern; refactor in CODE-008 should preserve current behaviour.
- i18n — `i18n.locales: ['en']`; no action here but a hook (`useLatestBlogItems`) extraction should leave room for locale-aware RSS hrefs.
- MCF/IMM-P — Content of the research-resources tree.
- Behavioral economics / psychology — Out of scope.
- Sales — Out of scope.
- Mobile-first — Out of scope.

## Open questions for Luis
1. Is the exposure of `docs/ops/*` to public users (CODE-001) intentional, or an oversight? If intentional, confirm before we add an `exclude`.
2. Are the four `*-insights*` scripts (CODE-003) safe to delete, or is any still expected to be re-run on demand? They are not wired to npm scripts.
3. Is `gh-pages` (and the `deploy` script) still a needed safety net, or can it be dropped now that Cloudflare Pages is the canonical deploy target? (Ref `docs/ops/deps-prune-proof.md:5`.)
4. Is there a contributor still introducing UTF-8 BOMs into `package.json` (forcing `preinstall`/`prebuild` strip-bom hooks)? If we can fix that editor once, we can drop the hook.
5. Adopt ESLint v9 (option b in CODE-012) or remove the unused dependency (option a)? Without tests, lint is the only automated quality net.
6. Is the planned single styling strategy (CODE-007) "CSS Modules + `custom.css` utilities"? If yes, we can scope the migration as a tracked backlog item.
