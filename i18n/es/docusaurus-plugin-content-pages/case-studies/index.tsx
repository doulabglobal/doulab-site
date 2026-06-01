// src/pages/case-studies/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import CaseStudyCards from '@site/src/components/case-studies/CaseStudyCards';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';
import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';

// Tree-shaken icons
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';

export default function CaseStudies(): ReactNode {
  return (
    <Layout
      title="Casos de éxito, resultados y entrega repetible"
      description="Proyectos seleccionados y resultados medibles de Doulab, con puntos de control claros, paquetes de evidencia e indicadores."
    >
      <PageMetadata slug="/case-studies" ogImage="/img/social/og-case-studies.jpg" />
      <Head>
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Casos de éxito, resultados y entrega repetible" />
        <meta
          property="og:description"
          content="Proyectos seleccionados y resultados medibles de Doulab, con puntos de control claros, paquetes de evidencia e indicadores."
        />
        <meta
          property="og:image:alt"
          content="Imagen principal de casos de éxito, degradado índigo abstracto con acentos de marca Doulab."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Breadcrumbs JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Inicio', item: localizedUrl('/') },
              { '@type': 'ListItem', position: 2, name: 'Casos de éxito', item: localizedUrl('/case-studies') },
            ],
          })}
        </script>

        {/* Case studies list JSON-LD (keep in sync with visible cards) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, url: localizedUrl('/case-studies/afp-siembra') },
              { '@type': 'ListItem', position: 2, url: localizedUrl('/case-studies/alpha-inversiones') },
              { '@type': 'ListItem', position: 3, url: localizedUrl('/case-studies/fundapec') },
              { '@type': 'ListItem', position: 4, url: localizedUrl('/case-studies/ogtic-redlab') },
            ],
          })}
        </script>

        {/* Preload hero image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/img/hero-cases.jpg"
          imageSrcSet="/img/hero-cases.avif 1x, /img/hero-cases.webp 1x, /img/hero-cases.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Two-column standardized hero with CTAs */}
        <Hero
          title="Casos de éxito"
          subtitle="Proyectos reales. Puntos de control claros. Resultados medibles."
          body="Cada caso muestra el contexto, lo que hicimos y los resultados, con los artefactos y la cadencia que lo hacen repetible."
          imageBase="/img/hero-cases"
          imageAlt="Imagen principal de casos de éxito, degradado índigo abstracto con acentos de marca Doulab."
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Conoce ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Conoce ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda una ClarityScan® en línea', dataCta: 'cta.cases.hero.book_clarityscan_online', external: true }}
          ctaNote="Lee el trabajo y luego agenda una llamada de descubrimiento de 20 minutos para conversar el tuyo."
        />

        {/* Outcome focus line under the hero */}
        <p className={`microcopy ${'pages-case-studies-case-studies__heroNote'}`}>
          Nos enfocamos en latencia de decisión, tiempo de ciclo y crecimiento de capacidades.
        </p>

        {/* Featured projects, image cards linking to internal pages */}
        <section className="section" id="featured" aria-labelledby="featured-title">
          <h2 id="featured-title">Proyectos destacados</h2>
          <p className="sectionLead">Ejemplos de cómo los puntos de control, la evidencia y la cadencia impulsan resultados.</p>
          <p className="microcopy">Evidencia: 7 laboratorios co-creados en 2024.</p>
          <CaseStudyCards variant="grid" />
        </section>

        {/* How we measure progress */}
        <section className="section" id="method" aria-labelledby="method-title">
          <h2 id="method-title">Cómo medimos el progreso</h2>
          <p className={`microcopy ${'pages-case-studies-case-studies__methodLead'}`}>
            Seguimiento a través de las compuertas del IMM-P®, <strong>Descubrimiento, Validación, Eficiencia, Escala</strong>.
          </p>
          <div className="cardGrid">
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden={true} />
              <h3>Paquetes de evidencia</h3>
              <p>Trazabilidad auditable desde la hipótesis hasta la decisión, capturada como artefactos.</p>
              <ul role="list">
                <li>Notas de investigación y resúmenes de entrevistas</li>
                <li>Memos de decisión con fuentes</li>
              </ul>
            </div>
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden={true} />
              <h3>Revisiones de compuerta</h3>
              <p>Criterios predefinidos y responsables aseguran claridad en cada punto de control.</p>
              <ul role="list">
                <li>Go o No Go con base en evidencia</li>
                <li>Responsables con rendición de cuentas y cadencia</li>
              </ul>
              <p className="microcopy">Responsables y cadencia se definen al inicio.</p>
            </div>
            <div className="card">
              <LineChart className="cardIcon" aria-hidden={true} />
              <h3>Tableros de KPI</h3>
              <p>Métricas adecuadas a la etapa que monitorean el aprendizaje y la velocidad de entrega.</p>
              <ul role="list">
                <li>Adopción, NPS, tiempo de ciclo</li>
                <li>CAC, LTV y señales de viabilidad</li>
              </ul>
            </div>
          </div>

          {/* Keep high-intent users moving */}
          <p className={`microcopy ${'pages-case-studies-case-studies__methodLink'}`}>
            ¿Quieres conocer los métodos detrás de los casos?{' '}
            <a href="/docs/research-resources" data-cta="cta.cases.method.research">
              Ver toda la investigación →
            </a>
          </p>
        </section>

        {/* Final CTA, standardized component */}
        <FinalCta
          id="cases-final"
          ariaLabelledbyId="cta-title"
          title="¿Te ves reflejado en alguno de estos?"
          body="Cuéntanos del trabajo que estás dimensionando. Llamada de descubrimiento de 20 minutos, sin preparación previa."
          primaryCta={{ to: '/services/clarityscan', label: 'Empieza con ClarityScan®', dataCta: 'cta.cases.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Agenda una ClarityScan® en línea',
            dataCta: 'cta.cases.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Llamada de descubrimiento de 20 minutos. Sin preparación previa."
        />
      </main>
    </Layout>
  );
}
