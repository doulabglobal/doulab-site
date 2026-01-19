// src/pages/terms-and-conditions.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import PageHeader from '../components/PageHeader/PageHeader';

export default function TermsAndConditions(): ReactNode {
  const pageTitle = 'Terms & Conditions | Doulab';
  const description =
    'Terms and conditions governing the use of Doulab services, ClarityScan diagnostics, bookings, and related digital properties.';

  return (
    <Layout title={pageTitle} description={description}>
      <Head>
        <link rel="canonical" href="https://doulab.net/privacy-terms" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className={`container ${'pages-legal__main'}`}>
        <PageHeader
          title="Terms & Policies"
          subtitle="This content now lives on the consolidated Privacy & Terms page."
          meta="Updated: 15 January 2026"
          primaryCta={{
            to: '/privacy-terms#terms',
            label: 'Go to Terms',
            dataCta: 'cta.legal.forward.terms',
          }}
          secondaryCta={{
            to: '/privacy-terms#privacy',
            label: 'Go to Privacy',
            dataCta: 'cta.legal.forward.privacy',
          }}
        />

        <div className={'pages-legal__forwardBody'}>
          <p>
            This page is now consolidated into the Privacy &amp; Terms page to reduce duplication. Use the buttons above to jump to
            the Terms or Privacy sections.
          </p>
        </div>
      </main>
    </Layout>
  );
}


