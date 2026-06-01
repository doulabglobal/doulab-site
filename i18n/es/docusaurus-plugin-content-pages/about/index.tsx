// src/pages/about/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';

// Icons (tree-shaken)
import Target from 'lucide-react/dist/esm/icons/target';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Users from 'lucide-react/dist/esm/icons/users';
import Globe from 'lucide-react/dist/esm/icons/globe';

export default function AboutPage(): ReactNode {
  // Organization schema with ImageObject logo
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Doulab',
    url: 'https://doulab.net',
    logo: {
      '@type': 'ImageObject',
      url: 'https://doulab.net/img/doulab.png',
      width: 512,
      height: 512,
    },
    foundingDate: '2018',
    sameAs: [
      'https://www.linkedin.com/company/doulab',
      'https://github.com/doulabglobal',
      'https://themicrocanvas.com',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://doulab.net/contact',
        availableLanguage: ['en', 'es'],
      },
    ],
  };

  // FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Qué es el MicroCanvas® Framework, MCF 2.2?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un conjunto modular de lienzos que hace que la innovación sea repetible, desde el descubrimiento hasta la entrega.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es el Programa del Modelo de Madurez en Innovación, IMM-P®?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Un programa estructurado para evaluar y mejorar la capacidad de innovación en estrategia, cultura, proceso y resultados.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo comienzan los compromisos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Con una breve llamada de descubrimiento o un diagnóstico. Mapeamos objetivos y restricciones, y luego recomendamos un taller, programa o ruta de coaching.',
        },
      },
    ],
  };

  // Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Acerca de', item: 'https://doulab.net/about' },
    ],
  };

  return (
    <Layout
      title="Acerca de | Doulab"
      description="Conoce la visión, la historia y el modelo de servicio de Doulab. Innovación hecha repetible."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/about" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Acerca de | Doulab" />
        <meta
          property="og:description"
          content="Conoce la visión, la historia y el modelo de servicio de Doulab. Innovación hecha repetible."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-about.jpg" />
        <meta property="og:image:alt" content="Acerca de Doulab, innovación, prospectiva y entrega repetible." />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

        {/* Hero LCP preload (camelCase attrs) */}
        <link
          rel="preload"
          as="image"
          href="/img/about.png"
          imageSrcSet="/img/about.avif 1x, /img/about.webp 1x, /img/about.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Acerca de"
          subtitle="Ayudamos a personas e instituciones a crear mejores futuros."
          body="Hacemos que la innovación sea repetible y la prospectiva práctica, para que la estrategia se convierta en resultados medibles."
          imageBase="/img/about"
          imageAlt="Acerca de Doulab, collage del equipo y del trabajo"
          width={1600}
          height={900}
          primaryCta={{
            to: '/services',
            label: 'Conoce lo que hacemos',
            dataCta: 'cta.about.hero.learn_more',
            ariaLabel: 'Conoce lo que hace Doulab',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda un ClarityScan® en línea', dataCta: 'cta.about.hero.book_clarityscan_online', ariaLabel: 'Agenda un ClarityScan en línea vía Stripe Checkout', external: true }}
          ctaNote="El Nivel 1 toma de 15 a 20 minutos. CHF 150, pagado mediante el checkout seguro de Stripe."
          id="about-hero"
          ariaLabelledbyId="about-hero-title"
        />

        {/* Proof + outcomes microcopy under hero */}
        <p className={`microcopy ${'pages-b4-p1__microcopyCenterTight'}`}>
          7 laboratorios co-creados en 2024. Reducimos la latencia de decisiones y el tiempo de ciclo.
        </p>

        {/* Purpose */}
        <section className="section" id="purpose" aria-labelledby="purpose-title">
          <h2 id="purpose-title">Nuestro propósito</h2>
          <p className="sectionLead">
            Liberamos la prosperidad global ayudando a otros a crear mejores futuros.
          </p>
          <p className="microcopy">
            Medimos la latencia de decisiones, el tiempo de ciclo y el crecimiento de capacidades.
          </p>
        </section>

        {/* Story */}
        <section className="section" id="our-story" aria-labelledby="our-story-title">
          <h2 id="our-story-title">Nuestra historia</h2>
          <p className="sectionLead">
            Iniciamos Doulab para responder a una pregunta difícil. <em>¿Por qué el emprendimiento y la innovación son difíciles de
            hacer de forma consistente, y cómo podemos crear una receta práctica para hacerlos bien una y otra vez?</em>
          </p>
          <p>
            Esa búsqueda nos llevó al <strong>MicroCanvas® Framework, MCF 2.2</strong> y al
            <strong> Programa del Modelo de Madurez en Innovación, IMM-P®</strong>. Juntos guían a los equipos de principio a fin y
            ayudan a los líderes a medir y mejorar la capacidad. Hoy extendemos ese trabajo con <strong>Vigía Futura</strong>,
            haciendo que la prospectiva sea utilizable en las decisiones del día a día.
          </p>
          <p className="microcopy">
            Mira cómo trabajamos en la práctica. <Link to="/services" data-cta="cta.about.story.process">Cómo trabajamos</Link>.
          </p>
        </section>

        {/* Service pillars (concise, action oriented, internal links) */}
        <section className="section" id="service-pillars" aria-labelledby="service-pillars-title">
          <h2 id="service-pillars-title">Nuestros pilares de servicio</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="pillars-diagnostics">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-diagnostics">Diagnósticos, sabe dónde estás</h3>
              <p>
                Líneas base rápidas de madurez en innovación. Identifica brechas con evidencia, comenzando con ClarityScan®. No requiere preparación.
              </p>
              <div className="cardFooter">
                <Link
                  to="/services/clarityscan"
                  className="cardCta"
                  data-cta="cta.about.pillars.diagnostics"
                >
                  Comienza con ClarityScan® →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-workshops">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-workshops">Talleres, impulsa la acción alineada</h3>
              <p>Sesiones enfocadas que destraban decisiones y convierten la estrategia en próximos pasos.</p>
              <div className="cardFooter">
                <Link
                  to="/services/custom-workshops"
                  className="cardCta"
                  data-cta="cta.about.pillars.workshops"
                >
                  Explora los talleres →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-programs">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-programs">Programas, construye capacidad de innovación</h3>
              <p>
                Trayectos estructurados como IMM-P® que instalan cultura, proceso y métricas para escalar de forma confiable. Responsables y cadencia definidos en el arranque.
              </p>
              <div className="cardFooter">
                <Link
                  to="/services/innovation-maturity"
                  className="cardCta"
                  data-cta="cta.about.pillars.programs"
                >
                  Explora IMM-P® →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-coaching">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-coaching">Coaching y mentoría</h3>
              <p>Apoyo individual o grupal focalizado para remover bloqueos y construir capacidad interna.</p>
              <div className="cardFooter">
                <Link
                  to="/services/coaching-mentoring"
                  className="cardCta"
                  data-cta="cta.about.pillars.coaching"
                >
                  Explora coaching y mentoría →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-futures">
              <Globe className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-futures">Estudios de futuro</h3>
              <p>Investigación y formación en prospectiva para detectar tendencias, evaluar riesgos y guiar decisiones resilientes.</p>
              <div className="cardFooter">
                <Link
                  to="/vigia-futura"
                  className="cardCta"
                  data-cta="cta.about.pillars.futures"
                >
                  Descubre Vigía Futura →
                </Link>
              </div>
            </article>
          </div>

          {/* Cross-link to services overview */}
          <p className={`microcopy ${'pages-b4-p1__microcopyTop'}`}>
            ¿Quieres la visión completa?{' '}
            <Link to="/services" data-cta="cta.about.to_whatwedo">
              Ver el panorama de servicios
            </Link>
            .
          </p>
        </section>

        {/* Standardized Final CTA */}
        <FinalCta
          id="about-final"
          ariaLabelledbyId="about-final-title"
          title="¿Quieres una lectura rápida de dónde estás?"
          body="Comienza con ClarityScan® Nivel 1 (15 a 20 minutos, CHF 150), o agenda una llamada de descubrimiento de 20 minutos para mapear el encaje."
          primaryCta={{ to: '/services/clarityscan', label: 'Comienza con ClarityScan®', dataCta: 'cta.about.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Agenda un ClarityScan® en línea',
            dataCta: 'cta.about.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Nivel 1: recibo y enlace de reserva por correo electrónico. No requiere preparación."
        />
      </main>
    </Layout>
  );
}
