// src/pages/book-clarityscan-success.tsx
import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { CLARITYSCAN_BOOKING_URL } from '../constants/urls';

export default function BookClarityScanSuccessPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.open(CLARITYSCAN_BOOKING_URL, '_blank', 'noopener,noreferrer');
      } catch {
        // fallback handled with on-page link
      }
    }
  }, []);

  return (
    <Layout title="ClarityScan payment successful" description="ClarityScan payment confirmed. Schedule your diagnostic via Microsoft Bookings.">
      <Head>
        <link rel="canonical" href="https://doulab.net/book-clarityscan-success" />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="ClarityScan payment successful" />
        <meta property="og:description" content="Payment confirmed. Use the link to schedule your ClarityScan diagnostic." />
      </Head>

      <main className={`container ${'pages-book-clarityscan-success__main'}`}>
        <h1>You're all set.</h1>
        <p role="status" aria-live="polite">
          Your ClarityScan payment is confirmed. Use the button below to pick a time via Microsoft Bookings. We already opened the scheduling page in a new tab for you.
        </p>
        <p>
          <a
            className="buttonPrimary"
            href={CLARITYSCAN_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="cta.book_clarityscan.success.schedule"
          >
            Schedule your ClarityScan session
          </a>
        </p>
        <p className="microcopy">
          Need help? <Link to="/contact">Contact the Doulab team</Link> or reply to your receipt email.
        </p>
      </main>
    </Layout>
  );
}
