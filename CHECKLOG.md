# Doulab Website — Daily Check Log

> One line per task per day. Format:
> YYYY-MM-DD — [Task Code] — Short description — Status/notes

2025-08-27 
Repo sync — Force-with-lease pushed local main over remote; created remote backup branch backup-main-preforce-20250827-205022 (and tag backup/origin-main-20250827-205022)
Docs — Updated README.md to align with Doulab Website project (Cloudflare migration, privacy-first, contribution workflow, status checklist)
Docs — Added releases.md to sidebars.ts (Research & Resources); optional navbar/footer link prepared
Infra — Switched to production-only on Cloudflare; removed staging + GitHub Pages deploys; purged GTM; set single SITE_URL; kept Cloudflare Analytics
Infra — Removed leftover GTM/Consent code, replaced Root.tsx and ConsentBanner.tsx with privacy-first stubs, disabled manual CF beacon (auto-injection enabled), purged cache, pinned Node 20.16.0 in CF Pages
2025-08-28 — Web — Lighthouse fixes (hero LCP preload + AVIF/WEBP picture fallback, explicit image dimensions, AA contrast colors); fixed docs typing in index.tsx
2025-08-28 — IA — Updated navbar to target IA (Home, What we do, Case Studies, Insights, About, Contact).
2025-08-28 — IA — Added What we do page stub with Products, Proof, and Next steps sections.
2025-08-28 — IA — Added Case Studies page stub with featured examples and method note.
2025-08-28 — IA — Added Insights page stub with highlights and links to docs/releases.
2025-08-28 — IA — Improved About page with canonical tag (SEO).
2025-08-28 — IA — Added Contact page stub with next steps and email CTA.
2025-08-28 — Web — Homepage styles consolidated into src/css/custom.css; restored centered .section wrapper & 3-up card grid.
2025-08-29 — Web — v0.4 Site-wide service pages & content refresh

Done
- Footer: fixed “Connect” links to real routes; standardized labels (“Insights”, “What we do”).
- Insights: auto-list 3 latest whitepapers (docs tag=whitepaper) + 3 latest blog posts via /blog/rss.xml; added safe client parsing, CTAs.
- _headers: added RSS rules & tightened security headers (CSP additions, caching for assets, no-store for RSS).
- Home: card hover border/raise; “The Problem” horizontal reel; section centering normalized via custom.css.
- About: timeline grouped by year; consolidated to shared styles; accessibility pass (headings/nav).
- What we do: hero + grid aligned to shared tokens; final CTA uses standardized .finalCta pattern.
- Case Studies: consistent cards; “How we measure” icons & semantics; final CTA standardized.
- Services (index): migrated off page CSS; image preload attr fix (imageSrcSet/imageSizes); consistent cards + CTA.
- Services/ClarityScan: productized copy; pricing/format cards; FAQ; Calendly CTA.
- Services/Custom Workshops: agendas aligned to IMM & MCF phases; outcomes and CTAs standardized.
- Services/Innovation Maturity: phase model clarified; outcomes/stat cards; CTA standardized.
- Services/Coaching & Mentoring: tiers, outcomes, cadence; privacy-first copy; CTA standardized.
- Services/Diagnostics: built full page (why/what/how, options, FAQ, CTA).
- Vigía Futura: subnav with intersection observer; sections (Radar/Briefings/Labs/Training/Roadmap); consistent cards & CTA.
- Research & Resources: safe MDX (.md) with shared components; featured whitepaper + frameworks; authoring tips; final CTA.

Pending / Next
- Add remaining customers to About timeline and enrich proof logos (SVG, high-DPI).
- Unify hero images (sizes, aspect, preload hints) across all service pages.
- Normalize card body lengths site-wide for perfect grid homogeneity.
- Privacy-first contact form (serverless handler + minimal fields) and spam protection.
- Blog: add per-post images/og tags and ensure tag=whitepaper discipline in docs.
- Monitoring: LCP/CLS check post-deploy; review CF Pages cache & headers in staging.
