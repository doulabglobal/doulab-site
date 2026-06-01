// src/pages/book-clarityscan-success.tsx
import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { CLARITYSCAN_BOOKING_URL } from '../constants/urls';
import PageMetadata from '@site/src/lib/pageMetadata';

export default function BookClarityScanSuccessPage() {
  // G-2: emit the paid-conversion event once on mount via the G-7 click
  // delegate's payload contract. We dispatch the event directly rather than
  // synthesizing a click so the funnel records the conversion even when the
  // visitor never clicks the Step-2 button.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const locale = (document.documentElement.getAttribute('lang') || 'en').split('-')[0] || 'en';
    const payload = {
      cta: 'cta.conversion.clarityscan.paid',
      locale,
      path: window.location.pathname || '/book-clarityscan-success',
      ts: Date.now(),
      target: 'self' as const,
    };
    const w = window as typeof window & { __doulabCta?: typeof payload[] };
    if (!Array.isArray(w.__doulabCta)) w.__doulabCta = [];
    w.__doulabCta.push(payload);
    try {
      document.dispatchEvent(new CustomEvent('doulab:cta', { detail: payload }));
    } catch {
      // CustomEvent unsupported: ignore.
    }
  }, []);

  return (
    <Layout title="ClarityScan® payment confirmed" description="Your ClarityScan® payment is confirmed. Step 2 of 2: schedule your session.">
      <PageMetadata slug="/book-clarityscan-success" />
      <Head>
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="ClarityScan® payment confirmed" />
        <meta property="og:description" content="Payment confirmed. Step 2 of 2: schedule your session." />
      </Head>

      <main className={`container ${'pages-book-clarityscan-success__main'}`}>
        <h1>Step 1 of 2 complete — payment confirmed.</h1>

        <p role="status" aria-live="polite">
          Your ClarityScan® payment has been received. Look out for the Stripe receipt in your inbox shortly. Your booking is not yet scheduled — pick a time below to complete Step 2.
        </p>

        <section
          aria-labelledby="step-2-heading"
          className={'pages-book-clarityscan-success__nextStep'}
        >
          <h2 id="step-2-heading">Step 2 of 2: schedule your session</h2>
          <p>
            Choose a time that works for you on Microsoft Bookings. The scheduling page opens in a new tab.
          </p>
          <p>
            <a
              className="buttonPrimary"
              href={CLARITYSCAN_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="cta.book_clarityscan.success.schedule"
            >
              Schedule your ClarityScan® session →
            </a>
          </p>
        </section>

        <p className="microcopy">
          Need help, or can't see the scheduling page? <Link to="/contact" data-cta="cta.book_clarityscan.success.contact">Contact the Doulab team</Link> or reply to the receipt email.
        </p>
      </main>
    </Layout>
  );
}
