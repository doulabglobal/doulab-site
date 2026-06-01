# Blog & Editorial Audit — doulab.net — 2026-06-01

## Scope
Editorial discipline of the `/blog` surface: publishing cadence, post structure, frontmatter, hero/banner usage within the LOCKED NNY language, tag taxonomy hygiene, RSS/Atom feeds, evergreen vs timely balance, internal links from posts to services, lead capture from blog, related-posts UX, and archive/category pages. Read-only audit; no code changes.

In-scope artifacts:
- `doulab-site/blog/` (4 published posts + 1 .bak + `authors.yml` + `tags.yml`)
- `doulab-site/docusaurus.config.ts` (blog plugin config, feed config, sidebar)
- `doulab-site/src/pages/insights/index.tsx` (Insights -> Blog bridge)
- `doulab-site/static/blog/`, `doulab-site/static/img/`, `doulab-site/static/img/blog/2026/`, `doulab-site/static/img/social/`
- `doulab-site/docs/ops/design-nny-hero-language.md` (LOCKED; respected — no proposals that violate it)
- `doulab-site/src/css/custom.css` (NNY `.nnyHero` styles)
- `doulab-site/docs/ops/doulab-net-backlog.md` (prior blog-related items)

Out of scope: hero language redesign, homepage hero, marketing landing pages, case-study cards, social visuals (per NNY doc §Out of Scope).

## Method
- Read every post under `blog/` end-to-end and recorded frontmatter, slug, image, tags, CTA pattern, structural shape, and CTA targets.
- Cross-referenced frontmatter `image:` values against files present under `static/img/` and `static/img/social/`.
- Reviewed `docusaurus.config.ts` blog plugin block (feed, sidebar, warnings).
- Reviewed `tags.yml` and compared declared tags vs tags actually used in posts.
- Reviewed `src/pages/insights/index.tsx` to understand the blog -> insights surface bridge and BLOG_LIMIT.
- Reviewed `custom.css` for NNY hero implementation completeness vs the locked spec.
- No build run; this is a content/structure pass.

Counted state: 4 published Markdown posts in `blog/` (2025-08-30, 2025-09-12, 2025-09-22, 2026-01-19) plus one `.bak` shadow of the 09-12 post; single author `luis`; 15 declared tags in `tags.yml`.

## Findings (ranked)

### BLOG-001 — Severity: High — Impact: 5 — Effort: S
- Location: `doulab-site/blog/_backup_2025-09-12-clarityscan-decision-latency.bak`
- Observation: A `.bak` file lives inside the `blog/` content folder. Docusaurus' classic blog plugin enumerates the directory by extension globs; `.bak` is currently not picked up, but the file is committed editorial content that contradicts the live post — it advertises a "15–20 minute" ClarityScan baseline (line 2), while the live post (`2025-09-12-...md:2`) advertises "30–45 minute". This is a duration/positioning drift inside the editorial corpus and a leak risk if the suffix is ever renamed or if the plugin's include rules change.
- Recommendation: Remove the `.bak` from `blog/`. Use git history (or a `.attic/` folder outside `blog/`) for editorial archives. Decide once which baseline duration is canonical (the published post says 30–45; `src/pages/insights/index.tsx` is not affected, but `blog/2025-08-30-introducing-doulab.md:24` advertises "15–20 minutes" for ClarityScan — see BLOG-008).
- Evidence: `blog/_backup_2025-09-12-clarityscan-decision-latency.bak:2` vs `blog/2025-09-12-clarityscan-decision-latency.md:2`.
- Hand-off: Content & copy.

### BLOG-002 — Severity: High — Impact: 5 — Effort: S
- Location: `doulab-site/blog/2025-09-22-vigia-futura-foresight-observatory.md:17`
- Observation: Frontmatter `image: /img/social/vigia-futura-foresight.jpg` points to a file that does not exist under `static/img/social/`. Present files in that directory are `2025-09-12-clarityscan-decision-latency.{avif,jpg,png,webp}`, `default-og.jpg`, `og-imm-program.jpg`, `og-insights.jpg`. The Vigía Futura hero assets do exist as `static/img/vigia-futura-hero.{avif,png,webp}` but under a different path. Result: broken OG image on share and likely broken `<meta og:image>` for this post.
- Recommendation: Either move/copy a Vigía Futura social card into `static/img/social/vigia-futura-foresight.jpg` (plus avif/webp), or update the frontmatter `image:` to a path that exists (e.g. `/img/vigia-futura-hero.png`). Add a verifier step that fails build when a post's `image:` does not resolve.
- Evidence: `blog/2025-09-22-...md:17`; directory listing of `static/img/social/`.
- Hand-off: SEO; Code quality (build verifier).

### BLOG-003 — Severity: High — Impact: 4 — Effort: M
- Location: `doulab-site/blog/` (publishing cadence)
- Observation: Cadence is sparse and irregular: 2025-08-30, 2025-09-12 (12 days), 2025-09-22 (10 days), 2026-01-19 (~4 months gap), then nothing through 2026-06-01 (~4.5 more months). The blog has produced one new post in ~8.5 months. For a thought-leadership / authority-building strategy (which the long-form posts clearly aim for), this cadence undercuts SEO compounding, RSS subscriber expectations, the "From the blog" card on `/insights`, and lead-capture pacing.
- Recommendation: Set and publish a cadence floor (e.g. one substantive essay per month, plus one short "field note" per month) and codify it in `AGENTS.md`. Use a lightweight editorial calendar doc under `docs/ops/`. Even one cadence-marker post per quarter would materially improve perceived activity vs. the current 4.5-month silence.
- Evidence: Filenames in `blog/`; today's date 2026-06-01.
- Hand-off: Content & copy; Sales.

### BLOG-004 — Severity: High — Impact: 4 — Effort: M
- Location: NNY hero implementation across blog
- Observation: NNY is LOCKED with three approved variants (A text-only, B symbol+text, C quiet image) and explicitly requires "All hero banners must be instantiated via a single canonical component" (`docs/ops/design-nny-hero-language.md:96`). Today, only one post (`2026-01-19-coordination-threshold.md:26-32`) uses an NNY block — and it does so via inline `<div className="nnyHero nnyHero--image">` JSX with a raw `<img>`, not via a component. The other three posts have no NNY hero at all; two of them rely on the Docusaurus default behavior of rendering frontmatter `image:` as a banner above the post body, which is exactly the marketing-flavored, illustrative imagery NNY excludes. `custom.css:320-328` only implements the `--image` variant; there is no styling for variant A (text-only) or variant B (symbol + text), and no `HeroBanner.tsx` component exists under `src/components/` (the NNY doc lists `HeroBanner.tsx` as a "Next Implementation Step", §line 110). Result: inconsistent editorial canvas across posts and zero enforcement of NNY at the surface.
- Recommendation (within NNY lock): Build the single canonical `HeroBanner.tsx` component (or `NNYHero.tsx`) under `src/components/` that exposes only the three approved variants as props (`variant: "text" | "symbol" | "image"`) and tokens; retrofit `2026-01-19-coordination-threshold.md` to use the component; then retrofit the other three posts in priority order. Add the two missing CSS scopes (`.nnyHero--text`, `.nnyHero--symbol`) to `custom.css`. No conceptual deviation from the locked doc.
- Evidence: `docs/ops/design-nny-hero-language.md:71-89,96-99,109-112`; `blog/2026-01-19-coordination-threshold.md:26-32`; `src/css/custom.css:320-328`; absence of `HeroBanner.tsx` under `src/components/`.
- Hand-off: Brand & visual; Code quality.

### BLOG-005 — Severity: Medium — Impact: 4 — Effort: S
- Location: `doulab-site/blog/tags.yml` and per-post tag arrays
- Observation: Tag taxonomy has overlap and granularity drift. `tags.yml` defines 15 tags. Concretely:
  - `mcf` label is "MicroCanvas" but the post `2025-09-12-...md:6` and `2025-08-30-...md:6` use `mcf` while content text uses "MicroCanvas®" — fine, but `imm` and `innovation-maturity` are two near-synonymous tags (`tags.yml:11-14` vs `:46-49`) that the corpus actually splits across posts (`imm` in three posts, `innovation-maturity` only in `2026-01-19`). Readers landing on `/blog/tags/imm` will not see the most recent ecosystems post, and vice versa.
  - `foresight` (`tags.yml:67`) and `vigia-futura` (`tags.yml:57`) are also near-synonyms in current usage; both are applied to the Vigía Futura post but only `foresight` could plausibly apply to the coordination-threshold post (it does not).
  - `governance` (`tags.yml:36`) and `coordination` (`tags.yml:41`) are used only on one post.
- Recommendation: Decide canonical mapping: either merge `imm` and `innovation-maturity` into a single tag (and migrate one post), or document them as distinct (e.g. `imm` = product/program, `innovation-maturity` = topic) and retag the corpus consistently. Same exercise for `foresight` vs `vigia-futura`. Target: every tag has at least 2 posts or is intentionally a "product" tag.
- Evidence: `blog/tags.yml`; tag arrays at line 6 of each post.
- Hand-off: SEO; IA & UX.

### BLOG-006 — Severity: Medium — Impact: 3 — Effort: S
- Location: `doulab-site/blog/2025-09-22-vigia-futura-foresight-observatory.md:20`
- Observation: Inconsistent title rendering. The frontmatter `title:` already sets the post H1 in Docusaurus' blog layout, but this post also includes a manual `# Vigía Futura: Why Latin America...` H1 inside the body (line 20). This produces a duplicated H1 in the rendered page (one from Docusaurus, one from MDX), which is bad for accessibility heading order and SEO. None of the other three posts do this.
- Recommendation: Delete the manual H1 line; the body should start with the lede paragraph.
- Evidence: `blog/2025-09-22-...md:1-4,20`.
- Hand-off: Accessibility; SEO.

### BLOG-007 — Severity: Medium — Impact: 4 — Effort: M
- Location: Conversion / lead-capture from blog
- Observation: CTAs in posts are inconsistent and mostly link-based, not lead-captured. Examples:
  - `2025-08-30-...md:169-172` — pair of buttons to `/services/clarityscan` and `https://booking.doulab.net/discovery`.
  - `2025-09-12-...md:36,94,282` — direct Stripe checkout URL (`https://buy.stripe.com/28E00jdhCanL5Hb3xmcZa00`) repeated three times in-body.
  - `2025-09-22-...md:225` — single discovery booking link, plain markdown.
  - `2026-01-19-...md:183-194` — twin `ctaCard` block with briefing and discovery.
  No post offers a low-friction email capture (newsletter signup, RSS reminder, or "send me the next essay") — yet the blog is the deepest evergreen surface and the natural top-of-funnel. The Stripe link directly inside body text is also a maintenance liability (single hardcoded URL replicated three times).
- Recommendation: Introduce a single canonical end-of-post CTA component with two paths: (1) "Book ClarityScan" / "Book discovery" via the booking-link-map canonical routes, and (2) a privacy-first email capture (newsletter / "notify me of next essay"). Replace inline Stripe URLs with a constant (mirror `CLARITYSCAN_CHECKOUT_URL` in `src/constants/urls`).
- Evidence: As above; `src/pages/insights/index.tsx:8` already imports `CLARITYSCAN_CHECKOUT_URL` for the same purpose.
- Hand-off: Conversion; Behavioral economics; Sales.

### BLOG-008 — Severity: Medium — Impact: 3 — Effort: S
- Location: ClarityScan duration drift across the corpus
- Observation: The duration figure for a ClarityScan baseline is not consistent.
  - `blog/2025-08-30-introducing-doulab.md:24,131` says "15–20 minutes".
  - `blog/2025-09-12-clarityscan-decision-latency.md:2,22,32` says "30–45 minutes".
  - The `.bak` (BLOG-001) also says "15–20 minutes".
  This contradicts itself within a 13-day publishing window and confuses readers who arrive via the inaugural post and then click through to the dedicated ClarityScan essay.
- Recommendation: Pick one canonical figure (likely 30–45 per the more detailed essay) and update the inaugural post. If both are valid offerings (lite vs full), distinguish them explicitly by name.
- Evidence: Lines cited above.
- Hand-off: Content & copy; Sales.

### BLOG-009 — Severity: Medium — Impact: 3 — Effort: S
- Location: Frontmatter completeness / consistency
- Observation: Frontmatter shape differs across posts:
  - `2025-08-30-...md:1-16` has `slug: /introducing-doulab`, `image: /img/2025-08-30-introducing-doulab.jpg` (note: root `/img/`, not `/img/social/` or `/img/blog/`), and `keywords:` but no `hide_table_of_contents`.
  - `2025-09-12-...md:1-20` has `hide_table_of_contents: false`, image under `/img/social/`.
  - `2025-09-22-...md:1-18` has `hide_table_of_contents: false`, image under `/img/social/` (broken — see BLOG-002).
  - `2026-01-19-...md:1-20` has `slug: coordination-threshold-ecosystems` (no leading slash, vs `/introducing-doulab` on post 1), image under `/img/blog/2026/`.
  Inconsistent image directory conventions (`/img/`, `/img/social/`, `/img/blog/2026/`) and inconsistent slug prefix make the corpus hard to reason about and audit, and explain why BLOG-002 happened.
- Recommendation: Adopt a single convention. Suggested: hero/banner images under `static/img/blog/<YYYY>/<slug>-hero.<ext>` and OG/social variant under `static/img/social/<YYYY>-<MM>-<DD>-<slug>.jpg`. Slugs without leading slash (Docusaurus normalizes either way, but consistency matters). Add a `frontmatter` field checklist to a `docs/ops/blog-editorial-conventions.md`.
- Evidence: Frontmatter at the top of each of the four posts.
- Hand-off: Content & copy; SEO; Code quality.

### BLOG-010 — Severity: Medium — Impact: 3 — Effort: M
- Location: Related-posts UX / cross-linking between posts
- Observation: None of the four posts links to any of the other three. Internal links from posts point to services pages (`/services/clarityscan`, `/services/innovation-maturity`, `/services/custom-workshops`, `/services/coaching-mentoring`, `/vigia-futura`) and external research, but there are zero blog-to-blog links. Docusaurus' blog theme also does not ship a "related posts" footer module out of the box; there is no theme override in `src/theme/` for `BlogPostPage` or similar. Result: a reader who finishes the coordination-threshold essay has no editorial path back into the corpus.
- Recommendation: Add a small "Related reading" block (manual or a theme swizzle of `BlogPostItemFooter`) with 2-3 hand-picked related posts. Even editorial cross-links inside post bodies (e.g. coordination-threshold linking to Vigía Futura essay and ClarityScan essay) would raise dwell time and per-session pageviews materially.
- Evidence: `src/theme/` contains only `NotFound` and `Root.tsx`; manual scan of all four posts.
- Hand-off: IA & UX; Conversion; SEO.

### BLOG-011 — Severity: Medium — Impact: 3 — Effort: S
- Location: `doulab-site/src/pages/insights/index.tsx:23,139`
- Observation: `BLOG_LIMIT = 3` and the section copy on line 346 hardcodes "Three recent posts from our blog." With only four published posts, the Insights surface effectively shows three of four — meaning one post is permanently invisible from `/insights`. There is no /blog archive link beyond a single "View all blog posts" button (line 391-393). As cadence improves, this becomes less of an issue, but right now the imbalance is glaring.
- Recommendation: Either raise `BLOG_LIMIT` to 4-6 until cadence picks up, or add a small "Browse by topic" tag grid below the three cards (using `tags.yml`) so readers can find older posts by theme rather than only by recency.
- Evidence: `src/pages/insights/index.tsx:23,139,346`.
- Hand-off: IA & UX.

### BLOG-012 — Severity: Low — Impact: 2 — Effort: S
- Location: `doulab-site/docusaurus.config.ts:42-50` (blog plugin config)
- Observation: Feed is configured `feedOptions: { type: 'all' }` (good — generates `rss.xml` and `atom.xml`), and `blogSidebarCount: 'ALL'` will fully list every post (good for now, will need reconsidering past ~50). Warnings are wired (`onInlineTags`, `onInlineAuthors`, `onUntruncatedBlogPosts` all `warn`). However: there is no `feedOptions.title`, no `feedOptions.description`, no `feedOptions.language: 'en'`, no `feedOptions.copyright`, and `showLastUpdateAuthor` / `showLastUpdateTime` are not enabled for blog (they are set on `docs:` but not on `blog:`). Feed readers therefore get a generic feed identity, and posts have no "last updated" metadata.
- Recommendation: Add explicit `feedOptions` metadata (title "Doulab — Insights", description, language, copyright). Decide whether to enable `showLastUpdateAuthor`/`showLastUpdateTime` for blog (probably no for editorial voice, but document the decision).
- Evidence: `docusaurus.config.ts:42-50`.
- Hand-off: SEO; Content & copy.

### BLOG-013 — Severity: Low — Impact: 2 — Effort: M
- Location: Evergreen vs timely balance and archive/category UX
- Observation: 4/4 posts read as evergreen long-form essays (1,500-4,500 words each), heavy on diagrams (Mermaid), references, and frameworks. There are no short field notes, release notes, or timely posts. Docusaurus generates `/blog/tags/<tag>` archive pages from `tags.yml`, but there is no `/blog/archive` curated landing, no "year in review", and no editorial framing on the default `/blog` index beyond reverse-chronological list. The single-author voice (`authors.yml:1-8`) is consistent, which is a strength, but it also means cadence is bottlenecked on one person.
- Recommendation: Decide deliberately between (a) keeping the blog as "essays only" and accepting low cadence, or (b) introducing a "Field notes" tag for short ~600-word posts that target a single signal/decision/observation. Option (b) is much more compatible with monthly cadence and with Vigía Futura's signal/radar product.
- Evidence: All four posts; `blog/authors.yml`.
- Hand-off: Content & copy; Sales; MCF/IMM-P.

### BLOG-014 — Severity: Low — Impact: 2 — Effort: S
- Location: `doulab-site/blog/2025-08-30-introducing-doulab.md` — truncate position and lede
- Observation: `<!-- truncate -->` sits at line 26, after the lede plus the "default next step" CTA paragraph at line 24. This means the blog index card excerpt and RSS `description` will include "**Default next step:** get a baseline in 15–20 minutes with **[ClarityScan®]...**" — an in-feed CTA that is also factually inconsistent (see BLOG-008). The other posts truncate at a more natural lede boundary (`2025-09-12-...md:26`, `2026-01-19-...md:24` after TL;DR).
- Recommendation: Move the `<!-- truncate -->` marker above the "Default next step" line in the inaugural post, so the RSS/Atom feed and `/insights` card show only the editorial lede, not the CTA.
- Evidence: `blog/2025-08-30-...md:18-26`.
- Hand-off: SEO; Content & copy.

### BLOG-015 — Severity: Low — Impact: 2 — Effort: S
- Location: `doulab-site/blog/authors.yml:5`
- Observation: Comment `# TODO: replace with /img/authors/luis.png` is still live. The author image is at `/img/luis.png` rather than under an `authors/` subfolder that would scale to additional contributors / guest essays. Also `linkedin: lasantiagoa` looks like a username; Docusaurus' blog plugin treats this as the LinkedIn slug — verify the slug resolves.
- Recommendation: Move the author image to `/img/authors/luis.png` and remove the TODO; verify the LinkedIn slug; document the schema in the conventions doc proposed in BLOG-009.
- Evidence: `blog/authors.yml:1-9`.
- Hand-off: Content & copy; Brand & visual.

## Quick wins — top 5
1. Delete `blog/_backup_2025-09-12-clarityscan-decision-latency.bak` and pick one canonical ClarityScan duration figure (BLOG-001, BLOG-008).
2. Fix the broken `image: /img/social/vigia-futura-foresight.jpg` reference in the Vigía Futura post (BLOG-002).
3. Remove the duplicate manual H1 in the Vigía Futura post (BLOG-006).
4. Move the `<!-- truncate -->` marker in the inaugural post above the CTA line (BLOG-014).
5. Raise `BLOG_LIMIT` from 3 to 4-6 (or add a tag-grid) on `/insights` so all posts surface (BLOG-011).

## Strategic bets — top 3
1. Build the canonical NNY `HeroBanner.tsx` component with all three locked variants, retrofit all four posts, and add the missing `.nnyHero--text` and `.nnyHero--symbol` CSS scopes — fully within the NNY lock (BLOG-004).
2. Establish and publish a cadence (monthly essay + monthly field note), encoded in `AGENTS.md` plus a new editorial calendar doc, and introduce the "Field notes" short-form tag so cadence is achievable without diluting the long-form voice (BLOG-003, BLOG-013).
3. Build a single end-of-post conversion component covering both booking and email capture, replace the three inline Stripe URLs with a constant, and add a "Related reading" footer (theme swizzle) to convert blog readers into either subscribers or booked calls (BLOG-007, BLOG-010).

## Out of scope / hand-offs
- NNY language redesign — locked, untouched.
- Homepage hero, marketing landing pages, case-study cards, social visuals — out per NNY §Out of Scope.
- Booking-link governance — see `docs/ops/booking-link-map.md`; CTA findings here only flag inline Stripe URLs that should use the constant (Conversion / Code quality).
- i18n: blog is en-only; no Spanish/regional variants for Vigía Futura / Caribbean / Latin America content (hand-off: i18n).
- Performance: hero image `loading="eager"` on the 2026-01-19 post (`...md:30`) is intentional for LCP and not a blog finding (hand-off: Performance if a broader policy is set).
- Security & privacy: privacy-first analytics note in 2025-09-12 post (line 305) is fine; no PII captured by blog surface. (Hand-off: Security & privacy.)
- Analytics: no per-post `data-cta` instrumentation in body links inside blog posts (services pages have it). Hand-off: Analytics.
- Mobile-first: not assessed in this audit; Mermaid-heavy posts may degrade on small screens. Hand-off: Mobile-first.

## Open questions for Luis
1. Canonical ClarityScan duration: 15-20 or 30-45 minutes? Or are these two distinct offerings that need different names?
2. Cadence target: comfortable committing to one essay per month plus one field note per month, or essays-only quarterly?
3. NNY component build: do you want the `HeroBanner.tsx` work scheduled before more posts are published, or in parallel?
4. Tag taxonomy: are `imm`/`innovation-maturity` and `foresight`/`vigia-futura` intentionally distinct (product vs topic) or should they be merged?
5. Email capture: are you ready to introduce a newsletter / "notify me of next essay" capture from blog, and on which provider (privacy-first)?
6. Stripe link in body: is the ClarityScan direct-checkout URL a permanent on-page conversion path, or should it be hidden behind a booking page so URL changes don't ripple into editorial content?
7. Translations: should the Vigía Futura and Caribbean posts have Spanish variants, or stay en-only?
