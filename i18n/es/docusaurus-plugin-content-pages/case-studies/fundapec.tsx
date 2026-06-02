// src/pages/case-studies/fundapec.tsx
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

export default function CaseFundapec(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: localizedUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Casos de estudio', item: localizedUrl('/case-studies') },
      { '@type': 'ListItem', position: 3, name: 'FUNDAPEC: Nuevos modelos de negocio y plataforma de exalumnos', item: localizedUrl('/case-studies/fundapec') },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'FUNDAPEC: Nuevos modelos de negocio y plataforma de exalumnos',
    url: localizedUrl('/case-studies/fundapec'),
    inLanguage: 'es',
    description:
      'Comunidad FUNDAPEC rediseñada y relanzada tras una exploración de nuevos modelos de negocio, ahora un motor de participación confiable con gobernanza clara y analítica como fuente única de verdad.',
    image: localizedUrl('/img/social/og-fundapec.jpg'),
    primaryImageOfPage: localizedUrl('/img/social/og-fundapec.jpg'),
    isPartOf: { '@type': 'WebSite', name: 'Doulab', url: localizedUrl('/') },
    about: {
      '@type': 'Organization',
      name: 'FUNDAPEC',
      url: 'https://fundapec.edu.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: localizedUrl('/'),
    },
  };

  return (
    <Layout
      title="FUNDAPEC: Nuevos modelos de negocio y plataforma de exalumnos | Caso de éxito"
      description="Rediseñamos y relanzamos Comunidad FUNDAPEC tras una exploración de nuevos modelos de negocio, creando un motor de participación confiable con gobernanza clara y analítica como fuente única de verdad."
    >
      <PageMetadata slug="/case-studies/fundapec" ogImage="/img/social/og-fundapec.jpg" />
      <Head>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FUNDAPEC: Nuevos modelos de negocio y plataforma de exalumnos | Caso de éxito"
        />
        <meta
          property="og:description"
          content="Rediseñamos y relanzamos Comunidad FUNDAPEC tras una exploración de nuevos modelos de negocio, creando un motor de participación confiable con gobernanza clara y analítica como fuente única de verdad."
        />
        <meta property="og:image:alt" content="Comunidad FUNDAPEC, plataforma de exalumnos y participación." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/fundapec-card.jpg"
          imageSrcSet="/img/fundapec-card.avif 1x, /img/fundapec-card.webp 1x, /img/fundapec-card.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={`microcopy ${'pages-case-studies-fundapec__breadcrumb'}`}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">← Todos los casos de estudio</Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="FUNDAPEC: Nuevos modelos de negocio y plataforma de exalumnos"
          subtitle="Rediseño y relanzamiento impulsados por evidencia, hoy un motor de participación confiable para el crecimiento."
          body="La Pista A, nuevos modelos de negocio, evidenció la necesidad de una plataforma más simple, gobernada y con datos visibles. La Pista B rediseñó y relanzó Comunidad FUNDAPEC para servir como base de esos modelos futuros."
          imageBase="/img/fundapec-card"
          imageAlt="Comunidad FUNDAPEC, plataforma de exalumnos y participación."
          width={1200}
          height={720}
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Conoce ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Conoce ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda una ClarityScan® en línea', dataCta: 'cta.cases.hero.book_clarityscan_online', ariaLabel: 'Agenda una ClarityScan en línea vía Stripe Checkout', external: true }}
          ctaNote="¿Relevancia en transformación digital? Mira IMM-DT o agenda una llamada de descubrimiento de 20 minutos."
        />

        {/* At a glance */}
        <section className="section" aria-labelledby="glance-title">
          <h2 id="glance-title">De un vistazo</h2>
          <ul>
            <li><strong>Sector:</strong> Financiamiento educativo y vinculación con exalumnos</li>
            <li><strong>Enfoque:</strong> Nuevos modelos de negocio y una plataforma moderna de exalumnos</li>
            <li><strong>Aproximación:</strong> Evidencia primero, trayectos simplificados, responsabilidad clara, analítica confiable</li>
            <li><strong>Resultado:</strong> Crecimiento validado de miembros y un motor de participación confiable</li>
          </ul>
        </section>

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Contexto</h2>
          <p>
            FUNDAPEC amplía el acceso a la educación en República Dominicana. El sitio legado de exalumnos listaba unos 20,000
            registros pero tenía poca claridad sobre quién estaba activo. Los trayectos eran complejos, la gobernanza no era clara,
            y la analítica no ofrecía una fuente única de verdad para las decisiones.
          </p>
          <p>
            Iniciamos con una <strong>exploración de nuevos modelos de negocio</strong>, Pista A. Los hallazgos fueron claros.
            Para sustentar opciones creíbles de crecimiento, la organización necesitaba una plataforma <strong>rediseñada y relanzada</strong>,
            Pista B, con trayectos más simples, responsabilidad clara y analítica confiable, que se convirtió en{' '}
            <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>.
          </p>
          <p className="microcopy">
            Comunidad FUNDAPEC en una línea: trayectos más simples, responsabilidad más clara, mejores señales.
          </p>
          <p className="microcopy">
            Quién se beneficia primero: equipos de relaciones con exalumnos, alianzas y crecimiento que necesitan señales más claras.
          </p>
        </section>

        {/* Key risks and mitigations */}
        <section className="section" aria-labelledby="risks-title">
          <h2 id="risks-title">Riesgos clave y mitigaciones</h2>
          <ul>
            <li><strong>Riesgo de activación:</strong> Mitigado con flujos de onboarding y re-enganche más claros.</li>
            <li><strong>Riesgo de calidad de datos:</strong> Mitigado con una configuración de fuente única de verdad y validación rutinaria.</li>
            <li><strong>Riesgo de responsabilidad:</strong> Mitigado con un responsable nombrado, Comunicaciones, y una cadencia editorial simple.</li>
          </ul>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">Qué hicimos</h2>

          <h3>Fase 1, Pista A: Exploración de nuevos modelos de negocio</h3>
          <ul>
            <li>
              <strong>Línea base y dirección:</strong> Ejecutamos un diagnóstico ClarityScan para identificar riesgos, alinear interesados
              y secuenciar el trabajo.
            </li>
            <li>
              <strong>Evidencia primero:</strong> Usamos{' '}
              <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> para mapear segmentos, estudiantes, exalumnos, empleadores, socios,
              definir propuestas de valor, dar forma a OKRs tempranos, comparar opciones de solución y propósito, y especificar procesos
              para descubrimiento y validación inicial.
              <p className="microcopy">
                Paquete de evidencia: problema y supuestos, segmento y JTBD, plan de experimento y resultados, enlaces a artefactos,
                memo de decisión, siguiente paso.
              </p>
              <p className="microcopy">
                Los insights se codifican en una biblioteca de señales para informar los próximos experimentos y la hoja de ruta.
              </p>
            </li>
            <li>
              <strong>Sondas de oferta:</strong> Ejecutamos sondas a nivel de oferta, sin precios, para evaluar viabilidad y fuerza de la señal.
            </li>
            <li>
              <strong>Gobernanza y hoja de ruta:</strong> Definimos puntos de control de decisión, responsables y criterios para pasar de descubrimiento
              a piloteo, con una hoja de ruta clara de crecimiento a 24 meses.
            </li>
          </ul>

          <h3>
            Fase 2, Pista B:{' '}
            <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>{' '}
            rediseño y relanzamiento
          </h3>
          <ul>
            <li>
              <strong>Co-diseño:</strong> Rehicimos la arquitectura de información y el modelo de contenido, perfiles, oportunidades, eventos
              y recursos, con bases de accesibilidad.
            </li>
            <li>
              <strong>Trayectos simplificados:</strong> Flujos limpios y lineales de onboarding y re-enganche que reducen la fricción.
            </li>
            <li>
              <strong>Bucles de evidencia y analítica:</strong> La analítica de la plataforma ahora provee una <em>fuente única de verdad</em> para
              participación, crecimiento y tendencias de engagement.
            </li>
            <li>
              <strong>Gobernanza clara:</strong> Comunicaciones es dueño de la plataforma, sin código, de modo que las actualizaciones no dependen de otros equipos.
              Cadencia editorial, reglas de moderación y revisiones periódicas están en su lugar.
            </li>
            <li>
              <strong>Sistema de entrega:</strong> Cadencia, revisiones de punto de control y responsables de decisión instalados.
              <ul>
                <li><strong>Punto de control 1:</strong> Go o No Go después de descubrimiento, basado en paquetes de evidencia.</li>
                <li><strong>Punto de control 2:</strong> Go o No Go antes de escalar, basado en adopción y riesgo.</li>
              </ul>
              <p className="microcopy">
                Modelo de gobernanza: <strong>RACI</strong> por iniciativa; cadencia <strong>semanal</strong>; <strong>checklist de punto de control</strong> por etapa;
                <strong> bitácora de decisiones</strong> y <strong>registro de riesgos</strong> para trazabilidad.
              </p>
              <p className="microcopy">
                Árbol de KPI por etapa: Descubrimiento, calidad de señal y cobertura de entrevistas; Validación, conversión a acción clave y tiempo a decisión;
                Desarrollo, tiempo de ciclo y defectos escapados; Escala, activación, engagement y economía unitaria.
              </p>
              <p className="microcopy">
                Línea base de capacidades: gobernanza, medición y cadencia de entrega al inicio, monitoreadas trimestralmente contra el árbol de KPI.
              </p>
              <p className="microcopy">
                Ritmo operativo: revisiones semanales, verificaciones mensuales de punto de control y snapshots trimestrales de capacidades.
              </p>
              <p className="microcopy">
                Artefactos: carta, checklist de punto de control, RACI, plantilla de paquete de evidencia, revisión semanal.
              </p>
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="section" aria-labelledby="timeline-title">
          <h2 id="timeline-title">Cronograma</h2>
          <ul>
            <li><strong>Arranque, Pista A:</strong> Diciembre 2023, línea base ClarityScan, entrevistas, sondas de oferta, OKRs tempranos.</li>
            <li><strong>Decisión:</strong> Junio 2024, rediseño y relanzamiento aprobados, hoja de ruta de 24 meses establecida.</li>
            <li><strong>Rediseño y construcción, Pista B:</strong> Julio 2024 a noviembre 2024, IA, trayectos, gobernanza, fundamentos de analítica.</li>
            <li><strong>Relanzamiento:</strong> Noviembre 2024, <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a> en vivo, inicia migración y validación de miembros.</li>
            <li><strong>Punto de control de crecimiento:</strong> Septiembre 2025, los miembros activos crecieron de 10 un año antes a 515, miembros validados en 4,000.</li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" aria-labelledby="outcomes-title" aria-describedby="outcomes-desc">
          <p id="outcomes-desc" className="sr-only">Qué cambió, cómo medimos el progreso y números clave.</p>
          <h2 id="outcomes-title">Resultados</h2>
          <ul>
            <li>
              <strong>De registros a realidad:</strong> Limpiamos la base legada de unos 20,000 registros a
              <strong> 4,000 miembros validados</strong>.
            </li>
            <li>
              <strong>Crecimiento de membresía activa:</strong> Los miembros activos aumentaron de <strong>10</strong> a
              <strong> 515</strong>, al corte de septiembre 2025, y continúan creciendo.
            </li>
            <li>
              <strong>Motor de participación confiable:</strong>{' '}
              <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>{' '}
              ahora sustenta opciones futuras de crecimiento de la Pista A.
            </li>
            <li>
              <strong>Decisiones más rápidas y claras:</strong> Las revisiones de punto de control, los paquetes de evidencia y los responsables con rendición de cuentas redujeron la latencia de decisión.
            </li>
          </ul>
          <p className="microcopy">
            Familias seguidas, al corte de septiembre 2025: latencia de decisión, tiempo de ciclo, activación y engagement, y crecimiento de capacidades.
          </p>
          <p className="microcopy">
            Mira los diagramas del caso abajo para el flujo del sistema y la progresión de capacidades.
          </p>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Por qué importó</h2>
          <ul>
            <li>Vinculó misión y sostenibilidad al atar el valor de los exalumnos a opciones creíbles de crecimiento.</li>
            <li>Reemplazó las suposiciones con una fuente única de verdad y señales visibles de progreso.</li>
            <li>Dio el control a Comunicaciones, sin código, lo que acortó ciclos y mejoró la capacidad de respuesta.</li>
            <li>Construyó impulso con pequeñas victorias, responsabilidad clara y trayectos de usuario simples.</li>
          </ul>
        </section>

        {/* Case study diagrams */}
        <section className="section" id="case-diagrams" aria-labelledby="case-diagrams-title">
          <h2 id="case-diagrams-title">Diagramas del caso</h2>
          <Admonition type="tip" title="Diagrama: Flujo del sistema">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart LR
    A[Problem Context] --> B[Evidence / Signals]
    B --> C[Intervention: Relaunch Comunidad Platform]
    C --> D[Enablers: Governance + Decision Log]
    D --> E[Capability: Engagement Engine]
    E --> F[Outcomes: Validated Members + Clearer Decisions]
`} />
          </Admonition>
          <Admonition type="tip" title="Diagrama: Progresión de capacidades">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart TB
    A[Before: Legacy Registrations]
    B[Validated Member Base]
    C[Governed Engagement Cadence]
    D[After: Sustainable Community Platform]
`} />
          </Admonition>
        </section>

        {/* CTA briefing cards */}
        <section className="section ctaBriefingCards" aria-label="Tarjetas de CTA de briefing">
          <div className="cardGrid">
            <article className="card" aria-labelledby="cta-briefing-title">
              <h3 id="cta-briefing-title">¿Prefieres un briefing?</h3>
              <p>¿Prefieres un briefing para tu equipo o socios?</p>
              <p>Para agilizar: comparte tus objetivos, plazos, restricciones y cómo miden el éxito hoy.</p>
              <p>¿Planeas un evento o cohorte?</p>
              <div className="ctaCardButtons">
                <Link to="https://booking.doulab.net/briefing" className="buttonPrimary">Solicitar un briefing</Link>
                <Link to="/contact" className="buttonSecondary">Co-organizar una sesión</Link>
              </div>
            </article>
            <article className="card" aria-labelledby="cta-path-title">
              <h3 id="cta-path-title">Ruta recomendada</h3>
              <p>Empieza pequeño: Llamada de descubrimiento → ClarityScan → Piloto Punto de control 1.</p>
            </article>
            <article className="card" aria-labelledby="cta-related-title">
              <h3 id="cta-related-title">Servicios relacionados</h3>
              <ul>
                <li><Link to="/services/innovation-maturity">Programas, IMM-P®</Link></li>
                <li><Link to="/services/clarityscan">Diagnósticos, ClarityScan®</Link></li>
              </ul>
              <p>Mira más ejemplos en casos de estudio.</p>
              <div className="ctaCardButtons">
                <Link to="/case-studies" className="buttonSecondary">Casos de estudio</Link>
              </div>
            </article>
          </div>
        </section>

        {/* Standardized Final CTA */}

        {/* Standardized Final CTA */}
        <FinalCta
          id="fundapec-final-cta"
          ariaLabelledbyId="fundapec-final-cta-title"
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
