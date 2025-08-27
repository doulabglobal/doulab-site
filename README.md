﻿# Doulab Website

This repository contains the source code for the **Doulab website**, built with [Docusaurus 3](https://docusaurus.io/).  
The site is hosted on **Cloudflare Pages** with a **privacy-first analytics stack**.

---

## ðŸŒ Environments

- **Production:** [https://doulab.net](https://doulab.net)  

Deployed automatically by **Cloudflare Pages** from the `main` (prod) and `staging` branches.

---

## ðŸ› ï¸ Installation

Make sure you are using **Node 20.16.0** (via [NVM for Windows](https://github.com/coreybutler/nvm-windows)).

```powershell
nvm use 20.16.0
npm install
```

---

## ðŸš€ Local Development

```powershell
npm run start
```

This starts a local dev server and opens a browser window.  
Most changes are reflected live without restarting the server.

---

## ðŸ—ï¸ Build

```powershell
npm run build
npm run serve
```

This generates static content into the `build` directory and serves it locally for preview.

---

## ðŸ“¦ Deployment

Deployment is handled by **Cloudflare Pages** (not GitHub Pages).  
Builds are triggered automatically from **main** via Cloudflare Pages.

Build settings (Cloudflare Pages):
- **Framework:** None (static)
- **Build command:** `npm ci && npm run build`
- **Output dir:** `build`
- **Node version:** 20.16.0

---

## ðŸ” Privacy & Analytics

- **Google Analytics / GTM removed.**  
- Using **Cloudflare Web Analytics** (cookieless).  
- Optional custom events may be added via **Cloudflare Zaraz**.

---

## ðŸ“‚ Project Structure

- `src/pages/` â†’ Static site pages (JSX/TSX or MDX)  
- `docs/` â†’ Documentation content (with sidebar)  
- `static/` â†’ Assets (images, downloads, etc.)  
- `CHECKLOG.md` â†’ Daily change log (append one line per task)  
- `sidebars.ts` â†’ Controls sidebar navigation  
- `docusaurus.config.ts` â†’ Site config (analytics, plugins, theme, env URLs)

---

## âœ… Contribution Workflow

1. Make your change in code/MDX.  
2. Append a line to **CHECKLOG.md** with todayâ€™s date, task code, and summary.  
3. Run a local build to verify:  
   ```powershell
   npm run build
   npm run serve
   ```  
4. Commit with a clear message:  
   ```powershell
   git add -A
   git commit -m "Task X â€” Short description"
   git push origin main
   ```

---

## ðŸ“Œ Project Priorities

1. **Stable build & deploy** (Cloudflare Pages)  
2. **Compliance & privacy** (GDPR + Swiss nFADP)  
3. **Clear value proposition & conversions** (hero CTA, contact flow)  
4. **Consistency with OKRs & metrics**

---

## ðŸ“– Runbook for Content Editors

- **Homepage sections**: Hero â†’ What we do â†’ Industries â†’ Proof (numbers) â†’ Case studies â†’ Insights â†’ About/Team â†’ Contact.  
- **Editing pages**:  
  - Marketing pages â†’ `src/pages/`  
  - Insights/Resources â†’ `docs/`  
- **Styling**: use `src/css/custom.css` for global styles, or CSS modules for scoped ones.  
- **Analytics**: Cloudflare Web Analytics token is configured in `docusaurus.config.ts`.

---

## ðŸ“Š Project Status Checklist

| Area                  | Status | Notes |
|------------------------|--------|-------|
| Cloudflare migration   | âœ… Done | Hosting live on prod + staging |
| Privacy analytics      | âœ… Done | Google removed, Cloudflare Analytics enabled |
| Conversion tracking    | ðŸš§ Pending | Optional Zaraz events |
| IA restructuring       | ðŸš§ In progress | Aligning with creativedock.com |
| Content cleanup        | ðŸš§ In progress | Import & refactor legacy HTML |
| OKR alignment          | ðŸš§ In progress | Tie homepage + case studies to OKRs |

---

## ðŸ“œ License

Â© Doulab. All rights reserved.

