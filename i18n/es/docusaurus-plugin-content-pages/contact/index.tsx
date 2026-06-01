// src/pages/contact/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import PhoneCall from 'lucide-react/dist/esm/icons/phone-call';
import Mail from 'lucide-react/dist/esm/icons/mail';
import CalendarCheck from 'lucide-react/dist/esm/icons/calendar-check';
import ClipboardList from 'lucide-react/dist/esm/icons/clipboard-list';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Clock from 'lucide-react/dist/esm/icons/clock';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';

const EMAIL = 'hello@doulab.net';

export default function Contact(): ReactNode {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contacto Doulab',
    url: 'https://doulab.net/contact',
    mainEntityOfPage: 'https://doulab.net/contact',
    about: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'Business', email: EMAIL, availableLanguage: ['en', 'es'] },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Contacto', item: 'https://doulab.net/contact' },
    ],
  };

  return (
    <Layout
      title="Contacto"
      description="Inicia una llamada de descubrimiento o envíanos un brief. Privacidad primero, sin formularios de terceros."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/contact" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Contacto | Doulab" />
        <meta property="og:description" content="Inicia una llamada de descubrimiento o envíanos un brief. Privacidad primero, sin formularios de terceros." />
        <meta property="og:image" content="https://doulab.net/img/social/og-contact.jpg" />
        <meta property="og:image:alt" content="Doulab, Contacto" />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">{JSON.stringify(contactSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

        {/* Hero LCP preload (React camelCase attrs) */}
        <link
          rel="preload"
          as="image"
          href="/img/contact-hero.jpg"
          imageSrcSet="/img/contact-hero.avif 1x, /img/contact-hero.webp 1x, /img/contact-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Contacto"
          subtitle="Agenda una llamada de descubrimiento de 20 minutos."
          body="Privacidad primero. Sin formularios externos ni píxeles publicitarios. Agenda una llamada de descubrimiento o solicita un briefing; respondemos en 2 días hábiles."
          imageBase="/img/contact-hero"
          imageAlt="Contacta a Doulab"
          width={1600}
          height={900}
          primaryCta={{
          to: 'https://booking.doulab.net/discovery',
          label: 'Agenda una llamada de descubrimiento',
          dataCta: 'cta.contact.hero.discovery',
          }}
          secondaryCta={{
            to: CLARITYSCAN_CHECKOUT_URL,
            label: 'Agenda un ClarityScan® en línea',
            dataCta: 'cta.contact.hero.book_clarityscan_online',
              external: true,
          }}
          ctaNote="No requiere preparación. Confirmamos un horario y enviamos un seguimiento breve."
          id="contact-hero"
          ariaLabelledbyId="contact-hero-title"
        />

        {/* Contact options */}
      <section className="section" id="options" aria-labelledby="options">
        <Heading as="h2" id="options">
          Cómo contactarnos
        </Heading>
          <p className="sectionLead">
            Elige la opción que mejor te funcione. Cada una protege la privacidad de tus datos y te lleva a un próximo paso claro.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="opt-discovery">
              <CalendarCheck className="cardIcon" aria-hidden="true" />
              <h3 id="opt-discovery">Agenda una llamada de descubrimiento</h3>
              <p>Intro de 20 minutos para alinear objetivos, alcance y restricciones.</p>
              <ul>
                <li>Resultado: dirección inicial y próximos pasos</li>
                <li>Seguimiento: resumen escrito en 2 días hábiles</li>
              </ul>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href="https://booking.doulab.net/discovery"
                  data-cta="cta.contact.card.discovery"
                >
                  Agenda una llamada de descubrimiento
                </a>
              </div>
            </article>

            <article className="card" aria-labelledby="opt-brief">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="opt-brief">Envía un brief corto</h3>
              <p>Comparte tu contexto, objetivos, plazos, partes interesadas y restricciones.</p>
              <ul>
                <li>Resultado: opciones a medida en 3 a 5 días hábiles</li>
                <li>Formato: correo electrónico o presentación, a tu elección</li>
              </ul>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href="https://booking.doulab.net/briefing"
                  data-cta="cta.contact.card.briefing"
                >
                  Solicita un briefing
                </a>
              </div>
            </article>

            <article className="card" aria-labelledby="opt-privacy">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3 id="opt-privacy">Privacidad y seguridad</h3>
              <p>Mantenemos las cosas simples y privadas por defecto.</p>
              <ul>
                <li>Sin etiquetas de Google ni píxeles publicitarios</li>
                <li>Solo Cloudflare Web Analytics</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/docs/releases" data-cta="cta.contact.card.privacy_more">
                  Ver qué cambió
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* What to expect */}
        <section className="section" id="process" aria-labelledby="process-title">
          <h2 id="process-title">Qué esperar</h2>
          <p className="sectionLead">Un camino ligero y por etapas hacia la claridad. Siempre sabrás cuál es el siguiente paso.</p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="step1">
              <Clock className="cardIcon" aria-hidden="true" />
              <h3 id="step1">1) Descubrimiento, 20 minutos</h3>
              <p>Comparte objetivos, restricciones y tiempos, y alinea los criterios de éxito.</p>
              <ul>
                <li>Salida: resumen y próximos pasos propuestos</li>
                <li>Responsable: tu patrocinador y el líder de Doulab</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="step2">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="step2">2) Diagnóstico ligero</h3>
              <p>Línea base rápida, MCF 2.2 e IMM, para identificar brechas de capacidad.</p>
              <ul>
                <li>Salida: hallazgos y opciones</li>
                <li>Responsable: sesión conjunta de trabajo</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="step3">
              <PhoneCall className="cardIcon" aria-hidden="true" />
              <h3 id="step3">3) Propuesta, 12+12 semanas</h3>
              <p>Plan por etapas con gates claros y resultados medibles.</p>
              <ul>
                <li>Salida: plan, cadencia, responsables</li>
                <li>Responsable: patrocinador ejecutivo y PM de Doulab</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Final CTA — shared component */}
        <FinalCta
          id="contact-final"
          ariaLabelledbyId="contact-final-title"
          title="¿Listo para conversar?"
          body="Envía un brief o agenda una llamada de descubrimiento rápida. Propondremos un camino práctico a seguir."
          primaryCta={{
          to: 'https://booking.doulab.net/discovery',
          label: 'Agenda una llamada de descubrimiento',
          dataCta: 'cta.contact.final.discovery',
          ariaLabel: 'Agenda una llamada de descubrimiento',
          }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Agenda un ClarityScan® en línea',
            dataCta: 'cta.contact.final.book_clarityscan_booking',
            newTab: true,
          }}
        />
      </main>
    </Layout>
  );
}
