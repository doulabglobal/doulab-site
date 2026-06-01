/**
 * Cloudflare Pages middleware: per-request CSP nonce injection.
 *
 * Contract with `static/_headers`:
 *   - `static/_headers` declares the baseline enforced CSP (currently includes
 *     `'unsafe-inline'` on `script-src` / `style-src`) and a tighter
 *     Report-Only CSP for monitoring.
 *   - This middleware OVERRIDES the enforced `Content-Security-Policy` header
 *     at runtime for HTML responses ONLY. It:
 *       1. Generates a fresh random nonce per request.
 *       2. Injects `nonce="<value>"` onto every inline <script> in <head>
 *          (any <script> tag without a `src=` attribute).
 *       3. Replaces `'unsafe-inline'` on `script-src` with `'nonce-<value>'`.
 *   - It LEAVES the `Content-Security-Policy-Report-Only` header from
 *     `static/_headers` untouched, so the existing monitoring stream still
 *     reports against the strict report-only policy.
 *   - Non-HTML responses pass through unchanged (the baseline `_headers`
 *     CSP still applies).
 *
 * If this middleware is disabled or fails, the baseline CSP from
 * `static/_headers` continues to protect the site (with `'unsafe-inline'`
 * as the fallback). This keeps the site functional in degraded modes.
 *
 * Style note: style-src is NOT nonced here. Docusaurus emits inline `style`
 * attributes (style-src-attr) that cannot be nonced — nonces only apply to
 * <style> elements (style-src-elem). Eliminating those requires upstream
 * source cleanup, which is tracked separately (E-R2 stream 1).
 */

// Reference shape for Cloudflare Pages Functions; declared locally to avoid
// adding a build-time dependency on `@cloudflare/workers-types`.
type PagesFunction = (context: {
  request: Request;
  next: () => Promise<Response>;
}) => Promise<Response>;

export const onRequest: PagesFunction = async (context) => {
  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.toLowerCase().startsWith('text/html')) {
    return response;
  }

  // Generate a fresh nonce per request (16 random bytes, base64-encoded).
  const nonceBytes = new Uint8Array(16);
  crypto.getRandomValues(nonceBytes);
  let binary = '';
  for (let i = 0; i < nonceBytes.length; i++) {
    binary += String.fromCharCode(nonceBytes[i]);
  }
  const nonce = btoa(binary);

  // Inject nonce on every inline <script> (any <script> tag that does NOT
  // already declare a `src=` or `nonce=` attribute). The negative lookahead
  // `(?![^>]*\b(?:src|nonce)=)` ensures external scripts and already-nonced
  // scripts are left alone.
  const html = await response.text();
  const nonced = html.replace(
    /<script(?![^>]*\b(?:src|nonce)=)/gi,
    `<script nonce="${nonce}"`,
  );

  // Build the enforced CSP. Mirror `static/_headers` directive-for-directive
  // but replace `'unsafe-inline'` on `script-src` with the per-request nonce.
  // `style-src` keeps `'unsafe-inline'` (see header comment above).
  const csp = [
    "default-src 'self'",
    "img-src 'self' data: blob: https:",
    `script-src 'self' 'nonce-${nonce}' https://static.cloudflareinsights.com`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    "connect-src 'self' https://cloudflareinsights.com https://static.cloudflareinsights.com",
    "worker-src 'self' blob:",
    "frame-src 'self' https://www.youtube-nocookie.com https://www.youtube.com",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
  ].join('; ');

  const newHeaders = new Headers(response.headers);
  newHeaders.set('Content-Security-Policy', csp);
  // Deliberately do NOT touch Content-Security-Policy-Report-Only.

  return new Response(nonced, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
};
