// src/pages/terms-and-conditions.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import PageHeader from '@site/src/components/PageHeader/PageHeader';
import PageMetadata from '@site/src/lib/pageMetadata';

export default function TermsAndConditions(): ReactNode {
  const pageTitle = 'Términos y Condiciones | Doulab';
  const description =
    'Términos y condiciones que rigen el uso de los servicios de Doulab, diagnósticos ClarityScan, reservas y propiedades digitales relacionadas.';

  return (
    <Layout title={pageTitle} description={description}>
      <PageMetadata slug="/privacy-terms" />
      <Head>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className={`container ${'pages-legal__main'}`}>
        <PageHeader
          title="Términos y Políticas"
          subtitle="Este contenido ahora vive en la página consolidada de Privacidad y Términos."
          meta="Actualizado: 15 de enero de 2026"
          primaryCta={{
            to: '/privacy-terms#terms',
            label: 'Ir a Términos',
            dataCta: 'cta.legal.forward.terms',
          }}
          secondaryCta={{
            to: '/privacy-terms#privacy',
            label: 'Ir a Privacidad',
            dataCta: 'cta.legal.forward.privacy',
          }}
        />

        <div className={'pages-legal__forwardBody'}>
          <p>
            Esta página ahora está consolidada en la página de Privacidad y Términos para reducir la duplicación. Usa los botones de arriba para saltar a
            las secciones de Términos o de Privacidad.
          </p>
        </div>
      </main>
    </Layout>
  );
}
