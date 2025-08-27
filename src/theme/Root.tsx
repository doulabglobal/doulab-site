// src/theme/Root.tsx
import React from 'react';
import ConsentBanner from '@site/src/components/ConsentBanner';

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>;
    }
}

/** SPA page view push for GTM/GA4 */
export function onRouteDidUpdate({ location }: { location: Location }) {
    try {
        const page_path = (location?.pathname ?? '') + (location?.search ?? '');
        const page_title = typeof document !== 'undefined' ? document.title : '';
        const page_location =
            typeof window !== 'undefined' && window.location ? window.location.href : '';

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'page_view',
            page_path,
            page_title,
            page_location,
        });
    } catch {
        // no-op
    }
}

/** Wrap app + render banner (SSR-safe) */
export default function Root({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <>
            <ConsentBanner />
            {children}
        </>
    );
}
