# Security Headers Review

## Current headers (static/_headers)
```
/*
  Cache-Control: no-cache
  Strict-Transport-Security: max-age=15552000; includeSubDomains; preload
  Content-Security-Policy: default-src 'self'; img-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com; worker-src 'self' blob:; frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com; base-uri 'self'; object-src 'none'; frame-ancestors 'none'
  X-Frame-Options: DENY
  Cross-Origin-Opener-Policy: same-origin
  Referrer-Policy: strict-origin-when-cross-origin
  X-Content-Type-Options: nosniff
```

## Observations
- CSP is strict and includes `unsafe-inline` for scripts/styles; keep until a tested CSP can remove inline allowances.
- HSTS is set with preload and subdomains.
- Referrer-Policy and X-Content-Type-Options are present.

## Recommendations (baseline, low-risk)
- Consider adding:
  - `Permissions-Policy` (disable camera/mic/geolocation by default).
  - `Cross-Origin-Resource-Policy: same-origin` for static assets (validate third-party embeds first).
- If CSP is tightened later, start with Report-Only and validate third-party scripts and embeds.
