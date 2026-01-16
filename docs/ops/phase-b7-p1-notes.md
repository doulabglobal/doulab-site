# Phase B7-P1 Notes - Performance quick wins

## Scope
- Performance-only changes in `src/**` and `static/img` (no IA or copy changes).

## Baseline metrics (before)
- JS bytes (build/assets/js): 4025931
- CSS bytes (build/assets/css): 90783
- Top 10 images by size (bytes):
  - 926881 build/img/alpha-hero.png
  - 678668 build/img/ogtic-redlab-card.png
  - 585556 build/img/social/2025-09-12-clarityscan-decision-latency.png
  - 580761 build/img/work-with-us-hero.png
  - 524986 build/img/clarityscan-hero.png
  - 507617 build/img/workshops-hero.png
  - 501231 build/img/afp-siembra-card.png
  - 443540 build/img/diagnostics-hero.png
  - 372342 build/img/coaching-hero.png
  - 363342 build/img/services-hero.png
- `<img>` without loading="lazy" count (src/pages + src/components): 10 (includes eager hero images)

## Planned quick wins (max 3)
- Remove unused PNG variants where JPG/AVIF/WEBP are already referenced.
- Keep image loading attributes as-is unless we find non-hero images missing `decoding="async"` (none observed so far).
- Avoid changes that alter IA or copy.

## Quick wins applied
- Removed unused PNG variants for case-study card assets: `alpha-hero.png`, `ogtic-redlab-card.png`, `afp-siembra-card.png`, `fundapec-card.png`, `mcf-card.png`.
- Removed unused PNG variant for `hero-cases.png` (Hero uses JPG/AVIF/WEBP).
- Proof of non-use: `rg -n "(alpha-hero|ogtic-redlab-card|afp-siembra-card|fundapec-card|mcf-card|hero-cases)\\.png" -S --glob '!docs/ops/**' --glob '!ops/**'`

## Metrics (after)
- JS bytes (build/assets/js): 4031156
- CSS bytes (build/assets/css): 90783
- Top 10 images by size (bytes):
  - 585556 build/img/social/2025-09-12-clarityscan-decision-latency.png
  - 580761 build/img/work-with-us-hero.png
  - 524986 build/img/clarityscan-hero.png
  - 507617 build/img/workshops-hero.png
  - 443540 build/img/diagnostics-hero.png
  - 372342 build/img/coaching-hero.png
  - 363342 build/img/services-hero.png
  - 360290 build/img/people-collage.png
  - 267411 build/img/about.png
  - 258267 build/img/luis.png
- `<img>` without loading="lazy" count (src/pages + src/components): 10

## Evidence commands
- `node -e "const fs=require('fs');const p='build/assets/js';let t=0;for(const f of fs.readdirSync(p)){if(f.endsWith('.js'))t+=fs.statSync(p+'/'+f).size}console.log(t)"`
- `node -e "const fs=require('fs');const p='build/assets/css';let t=0;for(const f of fs.readdirSync(p)){if(f.endsWith('.css'))t+=fs.statSync(p+'/'+f).size}console.log(t)"`
- `Get-ChildItem -Recurse -File build | Where-Object { $_.Extension -in '.png','.jpg','.jpeg','.webp','.svg' } | Sort-Object Length -Descending | Select-Object -First 10`
- `rg -n "<img " src/pages src/components -S`
