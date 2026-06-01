// src/theme/Root.tsx
import React from 'react';
import { installCtaDelegate } from '@site/src/components/cta-events';

/**
 * Privacy-first root.
 *
 * - No GTM / GA / dataLayer.
 * - G-7: mounts the document-level [data-cta] click delegate once. The
 *   delegate publishes a `doulab:cta` CustomEvent + a `window.__doulabCta`
 *   ring buffer; any analytics integration (Cloudflare Zaraz, beacon, etc.)
 *   can subscribe without further per-page wiring.
 */
export default function Root({ children }: { children: React.ReactNode }): JSX.Element {
  React.useEffect(() => {
    const uninstall = installCtaDelegate();
    return uninstall;
  }, []);
  return <>{children}</>;
}
