// src/pages/book-clarityscan.tsx
import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { CLARITYSCAN_BOOKING_URL } from '@site/src/constants/urls';
import PageHeader from '@site/src/components/PageHeader/PageHeader';
import PageMetadata from '@site/src/lib/pageMetadata';

export default function BookClarityScanPage() {
  return (
    <Layout title="Agenda ClarityScan® en línea" description="Agenda un ClarityScan® en línea en minutos.">
      <PageMetadata slug="/book-clarityscan" />
      <Head>
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="Agenda ClarityScan® en línea" />
        <meta property="og:description" content="Agenda un ClarityScan® en línea en minutos." />
      </Head>

      <main className={`container ${'pages-book-clarityscan__main'}`}>
        <PageHeader
          title="Agenda tu ClarityScan®."
          body={<p>Elige un horario que te funcione. La página de reserva se abre en una nueva pestaña.</p>}
        />
        <p>
          <a
            className="buttonPrimary"
            href={CLARITYSCAN_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="cta.book_clarityscan.redirect"
          >
            Abrir la página de reserva
          </a>
        </p>
        <p className="microcopy">
          ¿Prefieres leer primero? <Link to="/services/clarityscan">Conoce más sobre ClarityScan®</Link>.
        </p>
      </main>
    </Layout>
  );
}
