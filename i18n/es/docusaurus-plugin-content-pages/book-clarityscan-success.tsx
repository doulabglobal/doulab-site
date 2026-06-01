// src/pages/book-clarityscan-success.tsx
import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { CLARITYSCAN_BOOKING_URL } from '@site/src/constants/urls';

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
    <Layout title="Pago de ClarityScan exitoso" description="Pago de ClarityScan confirmado. Agenda tu diagnóstico vía Microsoft Bookings.">
      <Head>
        <link rel="canonical" href="https://doulab.net/book-clarityscan-success" />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="Pago de ClarityScan exitoso" />
        <meta property="og:description" content="Pago confirmado. Usa el enlace para agendar tu diagnóstico ClarityScan." />
      </Head>

      <main className={`container ${'pages-book-clarityscan-success__main'}`}>
        <h1>Todo listo.</h1>
        <p role="status" aria-live="polite">
          Tu pago de ClarityScan está confirmado. Usa el botón a continuación para elegir un horario vía Microsoft Bookings. Ya abrimos la página de agendamiento en una nueva pestaña para ti.
        </p>
        <p>
          <a
            className="buttonPrimary"
            href={CLARITYSCAN_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="cta.book_clarityscan.success.schedule"
          >
            Agenda tu sesión de ClarityScan
          </a>
        </p>
        <p className="microcopy">
          ¿Necesitas ayuda? <Link to="/contact">Contacta al equipo de Doulab</Link> o responde a tu correo de recibo.
        </p>
      </main>
    </Layout>
  );
}
