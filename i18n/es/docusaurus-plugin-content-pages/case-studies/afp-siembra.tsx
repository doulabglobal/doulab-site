// src/pages/case-studies/afp-siembra.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';
import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';

export default function CaseAfpSiembra(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: localizedUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Casos de éxito', item: localizedUrl('/case-studies') },
      { '@type': 'ListItem', position: 3, name: 'AFP Siembra: Alcanza y SILAB', item: localizedUrl('/case-studies/afp-siembra') },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'AFP Siembra: Alcanza y SILAB',
    url: localizedUrl('/case-studies/afp-siembra'),
    inLanguage: 'es',
    description:
      'De la estrategia a la entrega repetible: un producto de ahorro digital y un laboratorio de innovación co-creados.',
    image: localizedUrl('/img/social/og-afp-siembra.jpg'),
    about: {
      '@type': 'Organization',
      name: 'AFP Siembra',
      url: 'https://www.afpsiembra.com.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: localizedUrl('/'),
    },
  };

  const videoSchemaDay1 = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'FutureScapes Summit, 9 de octubre de 2024',
    description: 'Grabación en vivo del AFP Siembra FutureScapes Innovation Summit.',
    thumbnailUrl: ['https://i.ytimg.com/vi/v7VBcTu86VQ/hqdefault.jpg'],
    uploadDate: '2024-10-09',
    embedUrl: 'https://www.youtube-nocookie.com/embed/v7VBcTu86VQ',
    publisher: { '@type': 'Organization', name: 'AFP Siembra' },
  };

  const videoSchemaDay2 = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'FutureScapes Summit, 10 de octubre de 2024',
    description: 'Grabación en vivo del AFP Siembra FutureScapes Innovation Summit.',
    thumbnailUrl: ['https://i.ytimg.com/vi/0x3JJShSvZ8/hqdefault.jpg'],
    uploadDate: '2024-10-10',
    embedUrl: 'https://www.youtube-nocookie.com/embed/0x3JJShSvZ8',
    publisher: { '@type': 'Organization', name: 'AFP Siembra' },
  };

  return (
    <Layout
      title="AFP Siembra: Alcanza y SILAB | Caso de éxito"
      description="De la estrategia a la entrega repetible: un producto de ahorro digital y un laboratorio de innovación co-creados."
    >
      <PageMetadata slug="/case-studies/afp-siembra" ogImage="/img/social/og-afp-siembra.jpg" />
      <Head>
        <meta property="og:title" content="AFP Siembra: Alcanza y SILAB | Caso de éxito" />
        <meta
          property="og:description"
          content="De la estrategia a la entrega repetible: un producto de ahorro digital y un laboratorio de innovación co-creados."
        />
        <meta property="og:image:alt" content="AFP Siembra, producto Alcanza y laboratorio de innovación SILAB." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(videoSchemaDay1)}</script>
        <script type="application/ld+json">{JSON.stringify(videoSchemaDay2)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/afp-siembra-card.jpg"
          imageSrcSet="/img/afp-siembra-card.avif 1x, /img/afp-siembra-card.webp 1x, /img/afp-siembra-card.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        <nav aria-label="Breadcrumb" className={`microcopy ${'pages-case-studies-afp-siembra__breadcrumb'}`}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">← Todos los casos de éxito</Link>
        </nav>

        <Hero
          title="AFP Siembra: Alcanza y SILAB"
          subtitle="De la estrategia a un motor de innovación repetible."
          body={
            'AFP Siembra es un fondo de pensiones líder en República Dominicana. ' +
            'Alcanza es una solución de ahorro 100 por ciento digital diseñada para dominicanos en el país y en el exterior.'
          }
          imageBase="/img/afp-siembra-card"
          imageAlt="AFP Siembra, producto Alcanza y laboratorio de innovación SILAB."
          width={1200}
          height={720}
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Conoce ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Conoce ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda una ClarityScan® en línea', dataCta: 'cta.cases.hero.book_clarityscan_online', ariaLabel: 'Agenda una ClarityScan en línea vía Stripe Checkout', external: true }}
          ctaNote="¿Tienes relevancia en sector público o finanzas reguladas? Agenda una llamada de descubrimiento de 20 minutos."
          id="afp-siembra-hero"
          ariaLabelledbyId="afp-siembra-hero-title"
        />

        {/* At a glance */}
        <section className="section" aria-labelledby="glance-title">
          <h2 id="glance-title">De un vistazo</h2>
          <ul>
            <li><strong>Sector:</strong> Pensiones y ahorro, regulado</li>
            <li><strong>Enfoque:</strong> Producto de ahorro digital y un laboratorio de innovación interno</li>
            <li><strong>Aproximación:</strong> Evidencia primero, compuertas y cadencia, seguridad y cumplimiento</li>
            <li><strong>Resultado:</strong> Lanzamiento de la app y un motor de innovación repetible</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Contexto</h2>
          <p>
            AFP Siembra es una administradora de fondos de pensiones especializada, AFP, y la primera en República Dominicana
            autorizada por la Superintendencia de Pensiones, SIPEN. El equipo se propuso lanzar <strong><a href="https://alcanza.com.do" target="_blank" rel="noopener noreferrer">Alcanza</a></strong>,
            una <strong>solución de ahorro digital</strong> para dominicanos, asalariados e independientes, residentes en el país y en el exterior, que necesitan una forma segura y
            flexible de ahorrar para el retiro, vivienda, educación y otras metas.
          </p>
          <p>
            El reto era la baja tasa de ahorro nacional, los altos requerimientos de confianza y un entorno <strong>regulado y de seguridad primero</strong>.
            En paralelo, el liderazgo quería un <strong>motor de innovación repetible</strong> dentro de la
            organización, que se convirtió en <strong>SILAB</strong>.
          </p>
        </section>

        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">Qué hicimos</h2>
          <ul>
            <li>
              <strong>Línea base y dirección:</strong> Ejecutamos una evaluación inicial, ClarityScan, para determinar el estado actual del proceso de innovación,
              identificar riesgos, alinear a los interesados y secuenciar el trabajo. Usamos{' '}
              <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> para enmarcar problemas, entender al cliente, definir propuestas de
              valor, fijar objetivos y resultados clave, y seleccionar las métricas para medir el progreso. También trabajamos con
              el equipo de innovación para identificar problemas que frenaban los proyectos y desbloquearlos.
            </li>
            <li>
              <strong>Evidencia primero:</strong> Ejecutamos pruebas de entrevistas en paralelo y ensayos tipo conserje con empleados y clientes
              para probar perfiles, fricciones de onboarding, beneficios, sensibilidad al costo, ajuste problema-solución y ajuste mercado-producto.
            </li>
            <li>
              <strong>Alcance del producto:</strong> Definimos el MVP de Alcanza, una app 100 por ciento digital al lanzamiento. Las características clave fueron
              metas personalizadas, acompañamiento cercano, recompensas por metas, seguridad robusta, flexibilidad de retiro y sin comisiones ni
              saldos mínimos.
            </li>
            <li>
              <strong>Sistema de entrega:</strong> Establecimos una cadencia, compuertas de decisión y un playbook de laboratorio. Co-autores
              de la carta, mandato, intake, compuertas de financiamiento y un modelo de gobernanza de SILAB para hacer la entrega repetible.
              <ul>
                <li><strong>Compuerta 1:</strong> Go o No Go después de descubrimiento, basado en paquetes de evidencia.</li>
                <li><strong>Compuerta 2:</strong> Go o No Go antes de escalar, basado en adopción y riesgo.</li>
              </ul>
              <p className="microcopy">Valor de SILAB: decisiones más rápidas, compuertas más claras, mayor tasa de acierto.</p>
              <p className="microcopy">Artefactos: carta del laboratorio, checklist de compuerta, RACI, plantilla de paquete de evidencia, cadencia semanal.</p>
            </li>
            <li>
              <strong>Laboratorio de innovación y lanzamiento:</strong> A partir de octubre de 2023, conceptualizamos el SIEMBRA Innovation Lab, usando aprendizajes y resultados del proyecto Alcanza para diseñar una capacidad
              interna de innovación. En paralelo, ayudamos a diseñar y producir el lanzamiento público del laboratorio durante el inaugural AFP Siembra FutureScapes Innovation Summit, un evento de dos días con más de 300 participantes.
            </li>
            <li>
              <strong>Seguridad y cumplimiento:</strong> Trabajamos dentro de las regulaciones de ciberseguridad del sector financiero
              dominicano. Definimos requisitos y pruebas de seguridad como trabajo de primer nivel.
            </li>
          </ul>

          <p className="microcopy">
            Consulta nuestras plantillas abiertas en <Link to="/docs/research-resources/microcanvas">Investigación y Recursos</Link>.
          </p>

          <h3>Cronograma</h3>
          <ul>
            <li><strong>Arranque:</strong> Enero 2021</li>
            <li><strong>Descubrimiento y experimentos:</strong> 2021 a 2022</li>
            <li><strong>Construcción y endurecimiento:</strong> 2023 a 2024</li>
            <li><strong>Lanzamiento productivo completo:</strong> Noviembre 2024, app digital</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Resultados</h2>
          <ul>
            <li><strong>Lanzamos</strong> la app de ahorro digital Alcanza con onboarding 100 por ciento digital.</li>
            <li><strong>Instalamos</strong> la gobernanza de SILAB y una cadencia con revisiones de compuerta.</li>
            <li><strong>Capturamos</strong> decisiones como paquetes de evidencia para mejorar la alineación.</li>
          </ul>
          <p className="microcopy">
            Métricas seguidas: latencia de decisión, tiempo de ciclo, conversión de onboarding y crecimiento de capacidades.
          </p>
          <p className="microcopy">
            Mira los diagramas del caso abajo para el flujo del sistema y la progresión de capacidades.
          </p>
        </section>

        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Por qué importó</h2>
          <ul>
            <li>Convirtió la estrategia en ejecución con un motor repetible para la innovación, SILAB.</li>
            <li>Redujo la fricción en las decisiones mediante revisiones de compuerta, responsables y paquetes de evidencia.</li>
            <li>Construyó confianza y visibilidad mediante un lanzamiento público y una cadencia continua.</li>
          </ul>
        </section>

        {/* Case study diagrams */}
        <section className="section" id="case-diagrams" aria-labelledby="case-diagrams-title">
          <h2 id="case-diagrams-title">Diagramas del caso</h2>
          <Admonition type="tip" title="Diagrama: Flujo del sistema">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart LR
    A[Problem Context] --> B[Evidence / Signals]
    B --> C[Intervention: Establish SILAB + Digital Launch]
    C --> D[Enablers: Gate Reviews + Evidence Packs]
    D --> E[Capability: Repeatable Product Delivery]
    E --> F[Outcomes: Digital Onboarding + Alignment]
`} />
          </Admonition>
          <Admonition type="tip" title="Diagrama: Progresión de capacidades">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart TB
    A[Before: Ad-hoc Product Delivery]
    B[MCF Workshops + Evidence Packs]
    C[IMM-P® Gate Reviews]
    D[After: SILAB Delivery Cadence]
`} />
          </Admonition>
        </section>

        <section className="section" aria-labelledby="videos-title">
          <h2 id="videos-title">FutureScapes Summit, transmisiones en vivo</h2>
          <div className="cardGrid">
            <div className="card">
              <h3>FutureScapes Summit, 9 de octubre de 2024</h3>
              <div className={'pages-case-studies-afp-siembra__videoWrapper'}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/v7VBcTu86VQ?modestbranding=1&rel=0"
                  title="FutureScapes Summit, 9 de octubre de 2024"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className={'pages-case-studies-afp-siembra__videoFrame'}
                />
              </div>
            </div>
            <div className="card">
              <h3>FutureScapes Summit, 10 de octubre de 2024</h3>
              <div className={'pages-case-studies-afp-siembra__videoWrapper'}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/0x3JJShSvZ8?modestbranding=1&rel=0"
                  title="FutureScapes Summit, 10 de octubre de 2024"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className={'pages-case-studies-afp-siembra__videoFrame'}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA briefing cards */}
        <section className="section ctaBriefingCards" aria-label="Tarjetas de CTA de briefing">
          <div className="cardGrid">
            <article className="card" aria-labelledby="cta-briefing-title">
              <h3 id="cta-briefing-title">¿Prefieres un briefing?</h3>
              <p>¿Prefieres un briefing?</p>
              <div className="ctaCardButtons">
                <Link to="https://booking.doulab.net/briefing" className="buttonPrimary" data-cta="cta.cases.briefing">Solicitar un briefing</Link>
              </div>
            </article>
            <article className="card" aria-labelledby="cta-path-title">
              <h3 id="cta-path-title">Ruta recomendada</h3>
              <p>Ruta recomendada: Llamada de descubrimiento → ClarityScan → Piloto Compuerta 1.</p>
            </article>
            <article className="card" aria-labelledby="cta-related-title">
              <h3 id="cta-related-title">Servicios relacionados</h3>
              <ul>
                <li><Link to="/services/innovation-maturity">Programas, IMM-P®</Link></li>
                <li><Link to="/services/clarityscan">Diagnósticos, ClarityScan®</Link></li>
              </ul>
            </article>
          </div>
        </section>

        {/* Standardized Final CTA */}

        {/* Standardized Final CTA */}
        <FinalCta
          id="afp-final-cta"
          ariaLabelledbyId="afp-final-cta-title"
          title="Da el primer paso"
          body="Obtén tu línea base en 15 a 20 minutos."
          primaryCta={{ to: '/services/clarityscan', label: 'Empieza con ClarityScan®', dataCta: 'cta.cases.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Agenda una ClarityScan® en línea',
            dataCta: 'cta.cases.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Sin preparación previa."
        />
      </main>
    </Layout>
  );
}
