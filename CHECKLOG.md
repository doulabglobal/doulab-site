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
