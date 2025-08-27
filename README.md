# Doulab Website

This repository contains the source code for the **Doulab website**, built with [Docusaurus 3](https://docusaurus.io/).  
The site is hosted on **Cloudflare Pages** with a **privacy-first analytics stack**.

---

## 🌐 Environments

- **Production:** [https://doulab.net](https://doulab.net)  
- **Staging:** [https://staging.doulab.net](https://staging.doulab.net)

Deployed automatically by **Cloudflare Pages** from the `main` (prod) and `staging` branches.

---

## 🛠️ Installation

Make sure you are using **Node 20.16.0** (via [NVM for Windows](https://github.com/coreybutler/nvm-windows)).

```powershell
nvm use 20.16.0
npm install
```

---

## 🚀 Local Development

```powershell
npm run start
```

This starts a local dev server and opens a browser window.  
Most changes are reflected live without restarting the server.

---

## 🏗️ Build

```powershell
npm run build
npm run serve
```

This generates static content into the `build` directory and serves it locally for preview.

---

## 📦 Deployment

Deployment is handled by **Cloudflare Pages** (not GitHub Pages).  
Builds are triggered automatically when pushing to:

- `main` → production (`https://doulab.net`)  
- `staging` → staging (`https://staging.doulab.net`)

Build settings (Cloudflare Pages):
- **Framework:** None (static)
- **Build command:** `npm ci && npm run build`
- **Output dir:** `build`
- **Node version:** 20.16.0

---

## 🔐 Privacy & Analytics

- **Google Analytics / GTM removed.**  
- Using **Cloudflare Web Analytics** (cookieless).  
- Optional custom events may be added via **Cloudflare Zaraz**.

---

## 📂 Project Structure

- `src/pages/` → Static site pages (JSX/TSX or MDX)  
- `docs/` → Documentation content (with sidebar)  
- `static/` → Assets (images, downloads, etc.)  
- `CHECKLOG.md` → Daily change log (append one line per task)  
- `sidebars.ts` → Controls sidebar navigation  
- `docusaurus.config.ts` → Site config (analytics, plugins, theme, env URLs)

---

## ✅ Contribution Workflow

1. Make your change in code/MDX.  
2. Append a line to **CHECKLOG.md** with today’s date, task code, and summary.  
3. Run a local build to verify:  
   ```powershell
   npm run build
   npm run serve
   ```  
4. Commit with a clear message:  
   ```powershell
   git add -A
   git commit -m "Task X — Short description"
   git push origin main
   ```

---

## 📌 Project Priorities

1. **Stable build & deploy** (Cloudflare Pages)  
2. **Compliance & privacy** (GDPR + Swiss nFADP)  
3. **Clear value proposition & conversions** (hero CTA, contact flow)  
4. **Consistency with OKRs & metrics**

---

## 📖 Runbook for Content Editors

- **Homepage sections**: Hero → What we do → Industries → Proof (numbers) → Case studies → Insights → About/Team → Contact.  
- **Editing pages**:  
  - Marketing pages → `src/pages/`  
  - Insights/Resources → `docs/`  
- **Styling**: use `src/css/custom.css` for global styles, or CSS modules for scoped ones.  
- **Analytics**: Cloudflare Web Analytics token is configured in `docusaurus.config.ts`.

---

## 📊 Project Status Checklist

| Area                  | Status | Notes |
|------------------------|--------|-------|
| Cloudflare migration   | ✅ Done | Hosting live on prod + staging |
| Privacy analytics      | ✅ Done | Google removed, Cloudflare Analytics enabled |
| Conversion tracking    | 🚧 Pending | Optional Zaraz events |
| IA restructuring       | 🚧 In progress | Aligning with creativedock.com |
| Content cleanup        | 🚧 In progress | Import & refactor legacy HTML |
| OKR alignment          | 🚧 In progress | Tie homepage + case studies to OKRs |

---

## 📜 License

© Doulab. All rights reserved.
