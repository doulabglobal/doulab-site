// src/pages/book-clarityscan.tsx
import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { CLARITYSCAN_BOOKING_URL } from '../constants/urls';
import PageHeader from '../components/PageHeader/PageHeader';
import PageMetadata from '@site/src/lib/pageMetadata';

export default function BookClarityScanPage() {
  return (
    <Layout title="Book ClarityScan® Online" description="Book a ClarityScan® online in minutes.">
      <PageMetadata slug="/book-clarityscan" />
      <Head>
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="Book ClarityScan® Online" />
        <meta property="og:description" content="Book a ClarityScan® online in minutes." />
      </Head>

      <main className={`container ${'pages-book-clarityscan__main'}`}>
        <PageHeader
          title="Book your ClarityScan®."
          body={<p>Pick a time that works for you. The booking page opens in a new tab.</p>}
        />
        <p>
          <a
            className="buttonPrimary"
            href={CLARITYSCAN_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="cta.book_clarityscan.redirect"
          >
            Open the booking page
          </a>
        </p>
        <p className="microcopy">
          Prefer to read first? <Link to="/services/clarityscan">Learn more about ClarityScan®</Link>.
        </p>
      </main>
    </Layout>
  );
}

