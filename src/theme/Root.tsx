// src/theme/Root.tsx
import React from 'react';

/**
 * Privacy-first root: removed GTM/GA dataLayer pushes and consent hooks.
 * If you add Cloudflare Zaraz custom events later, implement them in a separate module.
 */
export default function Root({ children }: { children: React.ReactNode }): JSX.Element {
  return <>{children}</>;
}
