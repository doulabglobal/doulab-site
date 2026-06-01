// src/pages/case-studies/alpha-inversiones.tsx
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

export default function CaseAlphaInversiones(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: localizedUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Casos de éxito', item: localizedUrl('/case-studies') },
      { '@type': 'ListItem', position: 3, name: 'Alpha Inversiones: Alpha Escalable y Alpha en Línea', item: localizedUrl('/case-studies/alpha-inversiones') },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'Alpha Inversiones: Alpha Escalable y Alpha en Línea',
    url: localizedUrl('/case-studies/alpha-inversiones'),
    inLanguage: 'es',
    description:
      'Entrega guiada por evidencia con puntos de control claros y resultados medibles en Alpha Escalable y Alpha en Línea.',
    image: localizedUrl('/img/social/og-alpha-inversiones.jpg'),
    primaryImageOfPage: localizedUrl('/img/social/og-alpha-inversiones.jpg'),
    isPartOf: { '@type': 'WebSite', name: 'Doulab', url: localizedUrl('/') },
    about: {
      '@type': 'Organization',
      name: 'Alpha Inversiones',
      url: 'https://alphainversiones.com.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: localizedUrl('/'),
    },
  };

  return (
    <Layout
      title="Alpha Inversiones: Alpha Escalable y Alpha en Línea | Caso de éxito"
      description="Entrega guiada por evidencia con puntos de control claros y resultados medibles en Alpha Escalable y Alpha en Línea."
    >
      <PageMetadata slug="/case-studies/alpha-inversiones" ogImage="/img/social/og-alpha-inversiones.jpg" />
      <Head>
        <meta
          property="og:title"
          content="Alpha Inversiones: Alpha Escalable y Alpha en Línea | Caso de éxito"
        />
        <meta
          property="og:description"
          content="Entrega guiada por evidencia con puntos de control claros y resultados medibles en Alpha Escalable y Alpha en Línea."
        />
        <meta property="og:image:alt" content="Alpha Inversiones, instantáneas del programa y la entrega." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/alpha-hero.jpg"
          imageSrcSet="/img/alpha-hero.avif 1x, /img/alpha-hero.webp 1x, /img/alpha-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className={`microcopy ${'pages-case-studies-alpha-inversiones__breadcrumb'}`}
        >
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">
            ← Todos los casos de éxito
          </Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="Alpha Inversiones: Alpha Escalable y Alpha en Línea"
          subtitle="Entrega guiada por evidencia con puntos de control claros y resultados medibles."
          body="Un programa de varios años para escalar, con prospectiva, entrega disciplinada y mejor experiencia del cliente."
          imageBase="/img/alpha-hero"
          imageAlt="Alpha Inversiones, instantáneas del programa y la entrega."
          width={1200}
          height={720}
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Conoce ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Conoce ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda una ClarityScan® en línea', dataCta: 'cta.cases.hero.book_clarityscan_online', ariaLabel: 'Agenda una ClarityScan en línea vía Stripe Checkout', external: true }}
          ctaNote="¿Relevancia en servicios financieros? Agenda una llamada de descubrimiento de 20 minutos."
        />

        {/* At a glance */}
        <section className="section" aria-labelledby="glance-title">
          <h2 id="glance-title">De un vistazo</h2>
          <ul>
            <li><strong>Sector:</strong> Mercado de capitales, regulado</li>
            <li><strong>Enfoque:</strong> Programa de transformación y experiencia omnicanal</li>
            <li><strong>Aproximación:</strong> Evidencia primero, compuertas y cadencia, CX y BI como capacidades transversales</li>
            <li><strong>Resultado:</strong> Un programa escalable, gobernanza más fuerte y mejores trayectos del cliente</li>
          </ul>
        </section>

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Contexto</h2>
          <p>
            Alpha Inversiones, una firma líder en el mercado de capitales de República Dominicana, necesitaba escalar de forma sostenible
            mientras modernizaba cultura, estructura y experiencia del cliente. Lo que comenzó como una meta de reducir costos de adquisición
            creció hasta convertirse en un esfuerzo de toda la empresa para construir una organización lista para el futuro, impulsada por la innovación, que conecta
            estrategia, datos y entrega.
          </p>
          <p>
            Juntos lanzamos <strong>Alpha Escalable</strong>, un programa de transformación enfocado en prospectiva,
            ejecución disciplinada de proyectos y decisiones basadas en evidencia. En paralelo, apoyamos la evolución de
            <strong> Alpha en Línea</strong>, el sitio web y la app, como parte de un trayecto del cliente integrado y omnicanal.
          </p>
          <p className="microcopy">
            Alpha Escalable en una línea: compuertas más claras, decisiones más rápidas, mejor entrega.
          </p>
        </section>

        {/* Key risks and mitigations */}
        <section className="section" aria-labelledby="risks-title">
          <h2 id="risks-title">Riesgos clave y mitigaciones</h2>
          <ul>
            <li><strong>Riesgo de adopción:</strong> Mitigado con pruebas de entrevistas y pilotos por etapas.</li>
            <li><strong>Riesgo de entrega:</strong> Mitigado con revisiones de compuerta, responsables y cadencia semanal.</li>
            <li><strong>Riesgo de alineación:</strong> Mitigado con paquetes de evidencia y un comité de innovación.</li>
          </ul>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">Qué hicimos</h2>
          <ul>
            <li>
              <strong>Línea base y dirección:</strong> Ejecutamos un diagnóstico ClarityScan para identificar riesgos, alinear interesados y secuenciar el trabajo.
            </li>
            <li>
              <strong>Evidencia primero:</strong> Usamos{' '}
              <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> para enmarcar problemas, definir segmentos y propuestas de valor,
              y alinear OKRs.
              <p className="microcopy">
                Paquete de evidencia: problema y supuestos, segmento y JTBD, plan de experimento y resultados,
                enlaces a artefactos, memo de decisión, siguiente paso.
              </p>
              <p className="microcopy">
                Los insights se codifican en una biblioteca de señales para informar los próximos experimentos y la hoja de ruta.
              </p>
            </li>
            <li>
              <strong>Sistema de entrega:</strong> Instalamos cadencia, revisiones de compuerta, responsables de decisión y KPIs apropiados por etapa.
              <ul>
                <li><strong>Compuerta 1:</strong> Go o No Go después de descubrimiento, basado en paquetes de evidencia.</li>
                <li><strong>Compuerta 2:</strong> Go o No Go antes de escalar, basado en adopción y riesgo.</li>
              </ul>
              <p className="microcopy">
                Modelo de gobernanza: <strong>RACI</strong> por iniciativa; cadencia <strong>semanal</strong>; <strong>checklist de compuerta</strong> por etapa;
                <strong> bitácora de decisiones</strong> y <strong>registro de riesgos</strong> para trazabilidad.
              </p>
              <p className="microcopy">
                Árbol de KPI por etapa: Descubrimiento, calidad de señal y cobertura de entrevistas; Validación, conversión a acción clave y tiempo a decisión;
                Desarrollo, tiempo de ciclo y defectos escapados; Escala, adopción, NPS y economía unitaria.
              </p>
              <p className="microcopy">
                Artefactos: carta del programa, checklist de compuerta, RACI, plantilla de paquete de evidencia, cadencia semanal.
              </p>
            </li>
            <li>
              <strong>Gobernanza:</strong> Ayudamos a crear el comité de innovación para priorizar iniciativas y monitorear el progreso.
            </li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" id="outcomes" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Resultados</h2>

          <h3>Capacitación y desarrollo de capacidades</h3>
          <ul>
            <li>Capacitamos a 30 empleados en el <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework, MCF 2.2</Link> mediante talleres estructurados.</li>
            <li>Ejecutamos ciclos de 12 semanas del Programa del Modelo de Madurez en Innovación, IMM-P®, a través de descubrimiento, validación y desarrollo durante 24 meses.</li>
          </ul>

          <h3>Pipeline de innovación</h3>
          <ul>
            <li>Seis pitches de proyectos al final del IMM-P®, enfocados en escalabilidad, experiencia digital y trayecto del cliente.</li>
            <li>Las iniciativas abarcaron CX, omnicanalidad, toma de decisiones basada en datos y cultura de gestión de proyectos, PMO.</li>
          </ul>

          <h3>Transformación organizacional</h3>
          <ul>
            <li>Pasamos de un trabajo basado en tareas a una ejecución basada en roles, y de una planificación estática a la prospectiva y la ejecución de proyectos.</li>
            <li>Apoyamos el lanzamiento de una PMO y la creación de CX e Inteligencia de Negocios como áreas transversales.</li>
            <li>Mejoramos el balance entre operaciones BAU y la construcción de capacidades escalables y orientadas al futuro.</li>
          </ul>

          <h3>Impacto estratégico</h3>
          <ul>
            <li><strong>Integramos</strong> cultura, estructura, procesos y tecnología en Alpha Escalable.</li>
            <li><strong>Posicionamos</strong> a la firma para escalar, mejorar CX y construir innovación como habilidad central.</li>
            <li><strong>Guiamos</strong> decisiones sobre el CRM y el nuevo sitio web y app <strong>Alpha en Línea</strong>.</li>
          </ul>

          <p className="microcopy">
            Familias seguidas: latencia de decisión, tiempo de ciclo, adopción y conversión, y crecimiento de capacidades.
          </p>
          <p className="microcopy">
            Mira los diagramas del caso abajo para el flujo del sistema y la progresión de capacidades.
          </p>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Por qué importó</h2>
          <ul>
            <li>Alineó al liderazgo y a los equipos en torno a un programa común de crecimiento y decisiones guiadas por evidencia.</li>
            <li>Instaló capacidad duradera, gobernanza, roles y rituales que sostienen la entrega más allá de los proyectos individuales.</li>
            <li>Mejoró la experiencia del cliente al conectar estrategia, datos y entrega en un trayecto integrado.</li>
          </ul>
        </section>

        {/* Case study diagrams */}
        <section className="section" id="case-diagrams" aria-labelledby="case-diagrams-title">
          <h2 id="case-diagrams-title">Diagramas del caso</h2>
          <Admonition type="tip" title="Diagrama: Flujo del sistema">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart LR
    A[Problem Context] --> B[Evidence / Signals]
    B --> C[Intervention: Run IMM-P® Program]
    C --> D[Enablers: Committee + Gate Reviews]
    D --> E[Capability: Innovation Pipeline]
    E --> F[Outcomes: Aligned Decisions + Scalable Delivery]
`} />
          </Admonition>
          <Admonition type="tip" title="Diagrama: Progresión de capacidades">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart TB
    A[Before: Task-based Execution]
    B[MCF Training + Workshops]
    C[IMM-P® Cadence + Governance]
    D[After: Role-based Delivery]
`} />
          </Admonition>
        </section>

        {/* CTA briefing cards */}
        <section className="section ctaBriefingCards" aria-label="Tarjetas de CTA de briefing">
          <div className="cardGrid">
            <article className="card" aria-labelledby="cta-briefing-title">
              <h3 id="cta-briefing-title">¿Prefieres un briefing?</h3>
              <p>¿Prefieres un briefing para tu equipo o socios?</p>
              <p>Útil compartir: objetivos, plazos, restricciones y cómo miden el éxito hoy.</p>
              <div className="ctaCardButtons">
                <Link to="https://booking.doulab.net/briefing" className="buttonPrimary">Solicitar un briefing</Link>
              </div>
            </article>
            <article className="card" aria-labelledby="cta-path-title">
              <h3 id="cta-path-title">Ruta recomendada</h3>
              <p>Empieza pequeño: Llamada de descubrimiento → ClarityScan → Piloto Compuerta 1.</p>
            </article>
            <article className="card" aria-labelledby="cta-related-title">
              <h3 id="cta-related-title">Servicios relacionados</h3>
              <ul>
                <li><Link to="/services/innovation-maturity">Programas, IMM-P®</Link></li>
                <li><Link to="/services/clarityscan">Diagnósticos, ClarityScan®</Link></li>
              </ul>
              <p>Mira más ejemplos en casos de éxito.</p>
              <div className="ctaCardButtons">
                <Link to="/case-studies" className="buttonSecondary">Casos de éxito</Link>
              </div>
            </article>
          </div>
        </section>

        {/* Standardized Final CTA */}

        {/* Standardized Final CTA */}
        <FinalCta
          id="alpha-final-cta"
          ariaLabelledbyId="alpha-final-cta-title"
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
