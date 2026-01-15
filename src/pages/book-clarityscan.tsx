// src/pages/book-clarityscan.tsx
import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { CLARITYSCAN_BOOKING_URL } from '../constants/urls';
import PageHeader from '../components/PageHeader/PageHeader';

export default function BookClarityScanPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Open booking in a new tab to keep the site context
      try {
        window.open(CLARITYSCAN_BOOKING_URL, '_blank', 'noopener,noreferrer');
      } catch {
        // noop; page shows manual link below
      }
    }
  }, []);

  return (
    <Layout title="Book ClarityScan® Online" description="Book a ClarityScan® online in minutes.">
      <Head>
        <link rel="canonical" href="https://doulab.net/book-clarityscan" />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="Book ClarityScan® Online" />
        <meta property="og:description" content="Book a ClarityScan® online in minutes." />
      </Head>

      <main className="container" style={{ padding: '2rem 1rem' }}>
        <PageHeader title="Booking ClarityScan®." body={<p>We are opening the booking page in a new tab.</p>} />
        <p role="status" aria-live="polite">
          Redirecting you to our Outlook booking page. If nothing happens, use the direct link below.
        </p>
        <p>
          <a
            className="buttonPrimary"
            href={CLARITYSCAN_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="cta.book_clarityscan.redirect"
          >
            Open booking in a new tab
          </a>
        </p>
        <p className="microcopy">
          Prefer to read first? <Link to="/services/clarityscan">Learn more about ClarityScan®</Link>.
        </p>
      </main>
    </Layout>
  );
}

