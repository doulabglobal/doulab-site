# Dependency / Plugin Prune Proof (Hardening Pass 3)

| Package | Proof (rg / config) | Action | Risk note |
| --- | --- | --- | --- |
| gh-pages | Only referenced in `package.json`/`package-lock.json`; no imports found; `npm run deploy` exists and may rely on it. | Kept | Retained to avoid breaking `docusaurus deploy`. |

## Summary
- No dependencies removed in this pass due to deployment uncertainty.
