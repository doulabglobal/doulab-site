# Doulab Website — Daily Check Log

> One line per task per day. Format:
> YYYY-MM-DD — [Task Code] — Short description — Status/notes

2025-08-27 
Repo sync — Force-with-lease pushed local main over remote; created remote backup branch backup-main-preforce-20250827-205022 (and tag backup/origin-main-20250827-205022)
Docs — Updated README.md to align with Doulab Website project (Cloudflare migration, privacy-first, contribution workflow, status checklist)
Docs — Added releases.md to sidebars.ts (Research & Resources); optional navbar/footer link prepared
Infra — Switched to production-only on Cloudflare; removed staging + GitHub Pages deploys; purged GTM; set single SITE_URL; kept Cloudflare Analytics
Infra — Removed leftover GTM/Consent code, replaced Root.tsx and ConsentBanner.tsx with privacy-first stubs, disabled manual CF beacon (auto-injection enabled), purged cache, pinned Node 20.16.0 in CF Pages
