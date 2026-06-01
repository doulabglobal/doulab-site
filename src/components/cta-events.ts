// G-7: data-cta click delegate.
//
// Document-level click listener that captures clicks on any element bearing a
// [data-cta] attribute and publishes a normalized event payload. The payload
// flows out three ways so any analytics integration can consume it without
// further wiring:
//
//   1. A `doulab:cta` CustomEvent dispatched on `document`. Any listener can
//      pick it up — Cloudflare Zaraz, a custom CF Pages function beacon,
//      Segment, GA4, etc.
//   2. A push onto `window.__doulabCta` (ring buffer, last 100 entries) for
//      DevTools inspection and the verify-analytics CI check.
//   3. In development, a `console.debug('[doulab:cta]', payload)` so the
//      click is visible without DevTools network filtering.
//
// Payload shape: { cta, locale, path, ts, href?, target? }
//
//   - `cta`      : the [data-cta] attribute value (the analytics key).
//   - `locale`   : derived from <html lang> ('en' / 'es'). Locale is NEVER
//                  baked into the cta key — it's a separate dimension.
//   - `path`     : window.location.pathname (no host, no query) at click.
//   - `ts`       : Date.now() at click.
//   - `href`     : the anchor's href if the target is or is wrapped in <a>.
//   - `target`   : '_blank' if the click goes to a new tab, else 'self'.
//
// Loaded from src/theme/Root.tsx via a one-time effect on mount.

export type CtaEventPayload = {
  cta: string;
  locale: string;
  path: string;
  ts: number;
  href?: string;
  target: 'self' | '_blank';
};

const RING_SIZE = 100;

function findCtaTarget(start: EventTarget | null): HTMLElement | null {
  let el = start as HTMLElement | null;
  while (el && el !== document.documentElement) {
    if (el.dataset && typeof el.dataset.cta === 'string' && el.dataset.cta.length > 0) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

function readLocale(): string {
  const lang = document.documentElement.getAttribute('lang') || 'en';
  // Strip BCP-47 region (en-US -> en).
  return lang.split('-')[0] || 'en';
}

function buildPayload(el: HTMLElement): CtaEventPayload {
  const cta = (el.dataset.cta || '').trim();
  const path = window.location.pathname || '/';
  const locale = readLocale();
  const ts = Date.now();
  // Climb to nearest <a> for href detection (the [data-cta] might be on a
  // wrapper, but href lives on the anchor).
  let anchor: HTMLAnchorElement | null = null;
  let probe: HTMLElement | null = el;
  while (probe && probe !== document.documentElement) {
    if (probe.tagName === 'A') {
      anchor = probe as HTMLAnchorElement;
      break;
    }
    probe = probe.parentElement;
  }
  const href = anchor?.href || undefined;
  const target: 'self' | '_blank' = anchor?.target === '_blank' ? '_blank' : 'self';
  return { cta, locale, path, ts, href, target };
}

function publish(payload: CtaEventPayload): void {
  // 1. Ring buffer.
  const w = window as typeof window & { __doulabCta?: CtaEventPayload[] };
  if (!Array.isArray(w.__doulabCta)) {
    w.__doulabCta = [];
  }
  w.__doulabCta.push(payload);
  if (w.__doulabCta.length > RING_SIZE) {
    w.__doulabCta.splice(0, w.__doulabCta.length - RING_SIZE);
  }

  // 2. CustomEvent fan-out.
  try {
    document.dispatchEvent(new CustomEvent('doulab:cta', { detail: payload }));
  } catch {
    // CustomEvent unsupported in some old runtimes; ignore.
  }

  // 3. Dev visibility (no-op in prod once Docusaurus strips it).
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.debug('[doulab:cta]', payload);
  }
}

let installed = false;

export function installCtaDelegate(): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined' || installed) {
    return () => {
      // no-op if SSR or double-install
    };
  }
  installed = true;
  const handler = (ev: MouseEvent): void => {
    const el = findCtaTarget(ev.target);
    if (!el) return;
    const payload = buildPayload(el);
    if (!payload.cta) return;
    publish(payload);
  };
  // capture phase so we see the event even if a child stops propagation.
  document.addEventListener('click', handler, { capture: true });
  return () => {
    document.removeEventListener('click', handler, { capture: true });
    installed = false;
  };
}
