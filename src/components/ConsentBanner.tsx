// src/components/ConsentBanner.tsx
import React, { useEffect, useState } from 'react';

type ConsentChoice = 'accepted' | 'rejected' | null;
const LS_KEY = 'doulab_consent_v1';

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>;
    }
}

function updateGoogleConsent(granted: boolean) {
    try {
        window.dataLayer = window.dataLayer || [];
        function gtag() { (window.dataLayer as any).push(arguments); }
        const value = granted ? 'granted' : 'denied';
        gtag('consent', 'update', {
            ad_storage: value,
            ad_user_data: value,
            ad_personalization: value,
            analytics_storage: value,
            functionality_storage: 'granted',
            personalization_storage: value,
            security_storage: 'granted',
        });
    } catch { }
}

export default function ConsentBanner() {
    const [choice, setChoice] = useState<ConsentChoice>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const saved = (localStorage.getItem(LS_KEY) as ConsentChoice) || null;
        setChoice(saved);
        setVisible(!saved);
        if (saved === 'accepted') updateGoogleConsent(true);
        if (saved === 'rejected') updateGoogleConsent(false);
    }, []);

    const onAccept = () => {
        localStorage.setItem(LS_KEY, 'accepted');
        setChoice('accepted');
        updateGoogleConsent(true);
        setVisible(false);
    };

    const onReject = () => {
        localStorage.setItem(LS_KEY, 'rejected');
        setChoice('rejected');
        updateGoogleConsent(false);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="consent-banner">
            <div className="consent-banner__content">
                <strong>Cookies & Analytics</strong>
                <p>We use cookies for analytics to improve Doulab. You can accept or reject.</p>
            </div>
            <div className="consent-banner__actions">
                <button className="consent-btn consent-btn--secondary" onClick={onReject}>
                    Reject
                </button>
                <button className="consent-btn consent-btn--primary" onClick={onAccept}>
                    Accept
                </button>
            </div>
        </div>
    );
}
