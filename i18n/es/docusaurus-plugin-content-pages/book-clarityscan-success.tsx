// i18n/es/docusaurus-plugin-content-pages/book-clarityscan-success.tsx
import React, { useEffect } from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { CLARITYSCAN_BOOKING_URL } from '@site/src/constants/urls';
import PageMetadata from '@site/src/lib/pageMetadata';

export default function BookClarityScanSuccessPage() {
  // G-2: emite el evento de conversión paga una sola vez en el montaje
  // siguiendo el contrato del delegate G-7. Dispatch directo del evento (sin
  // simular un click) para registrar la conversión aunque el visitante nunca
  // pulse el botón del Paso 2.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const locale = (document.documentElement.getAttribute('lang') || 'es').split('-')[0] || 'es';
    const payload = {
      cta: 'cta.conversion.clarityscan.paid',
      locale,
      path: window.location.pathname || '/es/book-clarityscan-success',
      ts: Date.now(),
      target: 'self' as const,
    };
    const w = window as typeof window & { __doulabCta?: typeof payload[] };
    if (!Array.isArray(w.__doulabCta)) w.__doulabCta = [];
    w.__doulabCta.push(payload);
    try {
      document.dispatchEvent(new CustomEvent('doulab:cta', { detail: payload }));
    } catch {
      // CustomEvent no soportado: ignorar.
    }
  }, []);

  return (
    <Layout title="Pago de ClarityScan® confirmado" description="Tu pago de ClarityScan® está confirmado. Paso 2 de 2: agenda tu sesión.">
      <PageMetadata slug="/book-clarityscan-success" />
      <Head>
        <meta name="robots" content="noindex,follow" />
        <meta property="og:title" content="Pago de ClarityScan® confirmado" />
        <meta property="og:description" content="Pago confirmado. Paso 2 de 2: agenda tu sesión." />
      </Head>

      <main className={`container ${'pages-book-clarityscan-success__main'}`}>
        <h1>Paso 1 de 2 completado: pago confirmado.</h1>

        <p role="status" aria-live="polite">
          Recibimos tu pago de ClarityScan®. En breve recibirás el recibo de Stripe en tu correo. Tu reserva aún no está agendada: elige un horario abajo para completar el Paso 2.
        </p>

        <section
          aria-labelledby="step-2-heading"
          className={'pages-book-clarityscan-success__nextStep'}
        >
          <h2 id="step-2-heading">Paso 2 de 2: agenda tu sesión</h2>
          <p>
            Elige un horario que te funcione en Microsoft Bookings. La página de agendamiento se abre en una nueva pestaña.
          </p>
          <p>
            <a
              className="buttonPrimary"
              href={CLARITYSCAN_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="cta.book_clarityscan.success.schedule"
            >
              Agenda tu sesión de ClarityScan® →
            </a>
          </p>
        </section>

        <p className="microcopy">
          ¿Necesitas ayuda o no ves la página de agendamiento? <Link to="/contact" data-cta="cta.book_clarityscan.success.contact">Contacta al equipo de Doulab</Link> o responde al correo del recibo.
        </p>
      </main>
    </Layout>
  );
}
