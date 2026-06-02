// src/pages/case-studies/ogtic-redlab.tsx
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

export default function CaseOgticRedlab(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: localizedUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Casos de estudio', item: localizedUrl('/case-studies') },
      { '@type': 'ListItem', position: 3, name: 'OGTIC: Red de Laboratorios de Innovación RedLab', item: localizedUrl('/case-studies/ogtic-redlab') },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'OGTIC: Red de Laboratorios de Innovación RedLab',
    url: localizedUrl('/case-studies/ogtic-redlab'),
    inLanguage: 'es',
    description:
      'Una red de innovación del sector público construida mediante capacidad estructurada, cohortes y entrega basada en evidencia.',
    image: localizedUrl('/img/social/og-ogtic-redlab.jpg'),
    primaryImageOfPage: localizedUrl('/img/social/og-ogtic-redlab.jpg'),
    isPartOf: { '@type': 'WebSite', name: 'Doulab', url: localizedUrl('/') },
    about: {
      '@type': 'Organization',
      name: 'OGTIC, RedLab',
      url: 'https://ogtic.gob.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: localizedUrl('/'),
    },
  };

  return (
    <Layout
      title="OGTIC: Red de Laboratorios de Innovación RedLab | Caso de éxito"
      description="Ayudamos a diseñar y facilitar RedLab con métodos compartidos, gobernanza y cadencia, para que los equipos públicos pasen de ideas a evidencia y entrega."
    >
      <PageMetadata slug="/case-studies/ogtic-redlab" ogImage="/img/social/og-ogtic-redlab.jpg" />
      <Head>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="OGTIC: Red de Laboratorios de Innovación RedLab | Caso de éxito"
        />
        <meta
          property="og:description"
          content="Ayudamos a diseñar y facilitar RedLab con métodos compartidos, gobernanza y cadencia, para que los equipos públicos pasen de ideas a evidencia y entrega."
        />
        <meta name="keywords" content="innovación en sector público, laboratorios de innovación, gobernanza, MicroCanvas, Programa IMM-P®, RedLab, OGTIC" />
        <meta property="og:image:alt" content="OGTIC, Red de Laboratorios de Innovación, sesiones de cohorte RedLab." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/ogtic-redlab-card.jpg"
          imageSrcSet="/img/ogtic-redlab-card.avif 1x, /img/ogtic-redlab-card.webp 1x, /img/ogtic-redlab-card.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={`microcopy ${'pages-case-studies-ogtic-redlab__breadcrumb'}`}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">← Todos los casos de estudio</Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="OGTIC: Red de Laboratorios de Innovación RedLab"
          subtitle="Capacidad estructurada, métodos compartidos y aprendizaje por cohortes en instituciones públicas."
          body="Ayudamos a diseñar y facilitar RedLab, alineando los laboratorios bajo un método común, instalando gobernanza y cadencia, y llevando los retos prioritarios de las ideas a la entrega respaldada por evidencia."
          imageBase="/img/ogtic-redlab-card"
          imageAlt="OGTIC, Red de Laboratorios de Innovación, sesiones de cohorte RedLab."
          width={1200}
          height={720}
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Conoce ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Conoce ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda una ClarityScan® en línea', dataCta: 'cta.cases.hero.book_clarityscan_online', ariaLabel: 'Agenda una ClarityScan en línea vía Stripe Checkout', external: true }}
          ctaNote="¿Relevancia para laboratorios de innovación del sector público? Agenda una llamada de descubrimiento de 20 minutos."
        />

        {/* At a glance */}
        <section className="section" aria-labelledby="glance-title">
          <h2 id="glance-title">De un vistazo</h2>
          <ul>
            <li><strong>Sector:</strong> Sector público, multi-institucional</li>
            <li><strong>Alcance:</strong> Diseño de red de innovación, cohortes y modelo operativo</li>
            <li><strong>Aproximación:</strong> Guiada por evidencia, puntos de control y cadencia, playbooks compartidos</li>
            <li><strong>Resultado:</strong> Laboratorios alineados a un método común y decisiones más rápidas y claras</li>
          </ul>
        </section>

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Contexto</h2>
          <p>
            La Red de Laboratorios de Innovación, RedLab, fue creada bajo OGTIC para fortalecer la capacidad de innovación en
            el sector público de República Dominicana. La meta era pasar de esfuerzos aislados a un ecosistema estructurado y escalable
            donde los equipos puedan diseñar, probar e implementar soluciones a retos complejos.
          </p>
          <p>
            Los obstáculos iniciales incluían métodos desiguales, gobernanza fragmentada e incertidumbre sobre cómo sostener
            la participación a través de instituciones diversas. RedLab necesitaba un marco común, una estructura de programa clara y
            herramientas prácticas que construyeran capacidad mientras entregaban resultados visibles.
          </p>
          <p>
            Doulab se asoció con OGTIC para diseñar y facilitar las Cohortes 01 y 02, ancladas en el{' '}
            <Link to="/docs/research-resources/microcanvas">MicroCanvas Framework, MCF 2.2</Link> y el{' '}
            <Link to="/services/innovation-maturity">Programa del Modelo de Madurez en Innovación, IMM-P®</Link>. El objetivo era dar a
            los servidores públicos herramientas efectivas y un proceso repetible que posicionen a RedLab como un pilar de la
            innovación pública.
          </p>
          <p className="microcopy">
            RedLab en una línea: puntos de control más claras, lenguaje compartido, mejor entrega.
          </p>
          <p className="microcopy">
            Quién se beneficia primero: equipos de políticas, prestación de servicios y digitales que necesitan puntos de control más claras y decisiones más rápidas.
          </p>
          <p className="microcopy">
            Validación social: el formato de cohortes y los playbooks compartidos ayudan a los equipos a obtener victorias rápidas y reusar lo que funciona.
          </p>
        </section>

        {/* Key risks and mitigations */}
        <section className="section" aria-labelledby="risks-title">
          <h2 id="risks-title">Riesgos clave y mitigaciones</h2>
          <ul>
            <li><strong>Riesgo de adopción:</strong> Mitigado con revisiones entre pares, plantillas ligeras y victorias rápidas visibles.</li>
            <li><strong>Riesgo de continuidad:</strong> Mitigado con responsables nombrados, un ritmo operativo simple y playbooks.</li>
            <li><strong>Riesgo de calidad de evidencia:</strong> Mitigado con paquetes de evidencia estándar y criterios de punto de control.</li>
          </ul>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title" aria-describedby="work-desc">
          <p id="work-desc" className="sr-only">Lo que RedLab implementó: modelo operativo, cohortes, método compartido, gobernanza y playbooks.</p>
          <h2 id="work-title">Qué hicimos</h2>
          <ul>
            <li>
              <strong>Red y modelo operativo:</strong> Co-diseñamos la estructura de la red, la plantilla de carta de laboratorio, el intake
              y las puntos de control de decisión con responsables.
            </li>
            <li>
              <strong>Programa de cohortes:</strong> Ejecutamos ciclos de cohorte, de descubrimiento a validación a entrega, con revisiones entre pares,
              demo days y paquetes de evidencia en cada punto de control.
            </li>
            <li>
              <strong>Método compartido:</strong> Adoptamos{' '}
              <Link to="/docs/research-resources/microcanvas">MCF 2.2</Link> para enmarcar problemas, definir valor y diseñar
              experimentos entre instituciones.
            </li>
            <li>
              <strong>Gobernanza y cadencia:</strong> Instalamos ritmos, stand-ups, revisiones, foros de decisión y KPIs apropiados por etapa
              ligados a resultados de política y servicio.
              <p className="microcopy">
                Modelo de gobernanza: <strong>RACI</strong> por iniciativa; cadencia <strong>semanal</strong>; <strong>checklist de punto de control</strong> por etapa;
                <strong> bitácora de decisiones</strong> y <strong>registro de riesgos</strong> para trazabilidad.
              </p>
              <p className="microcopy">
                Árbol de KPI por etapa: Descubrimiento, calidad de señal y cobertura de entrevistas; Validación, conversión a acción clave y tiempo a decisión;
                Entrega, tiempo de ciclo y defectos escapados; Escala, adopción, satisfacción y economía unitaria cuando aplique.
              </p>
              <p className="microcopy">
                Ejemplos: Descubrimiento, cobertura de entrevistas; Validación, conversión a acción clave; Entrega, tiempo de ciclo; Escala, adopción y satisfacción.
              </p>
              <p className="microcopy">
                Línea base de capacidades al inicio, monitoreada trimestralmente contra el árbol de KPI para mostrar ganancias de madurez en el tiempo.
              </p>
              <p className="microcopy">
                Ritmo operativo: revisiones semanales, verificaciones mensuales de punto de control y snapshots trimestrales de capacidades.
              </p>
              <p className="microcopy">
                SLA: respuesta a revisión de punto de control dentro de cinco días hábiles, con memo de decisión o solicitud de próxima evidencia.
              </p>
            </li>
            <li>
              <strong>Playbooks y traspaso:</strong> Produjimos guías para cartas de laboratorio, paquetes de evidencia, criterios de punto de control y definiciones
              de roles para preservar la memoria institucional y escalar.
              <p className="microcopy">
                Paquete de evidencia: problema y supuestos, interesados y JTBD, plan de experimento y resultados, enlaces a artefactos, memo de decisión, siguiente paso.
              </p>
              <p className="microcopy">
                Los insights se codifican en una biblioteca de señales para informar los próximos experimentos y las hojas de ruta del programa.
              </p>
              <p className="microcopy">
                Las revisiones después de la acción al final de cada cohorte alimentan la biblioteca de señales y la hoja de ruta de la siguiente cohorte.
              </p>
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="section" aria-labelledby="timeline-title">
          <h2 id="timeline-title">Cronograma</h2>
          <ul>
            <li><strong>Cohorte 01:</strong> 2024, diseño de red, cartas y primeros paquetes de evidencia.</li>
            <li><strong>Cohorte 02:</strong> 2025, escalamiento de métodos compartidos y gobernanza y cadencia más profundas.</li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" aria-labelledby="outcomes-title" aria-describedby="outcomes-desc">
          <p id="outcomes-desc" className="sr-only">Qué cambió, cómo mejoraron las decisiones y crecimiento de capacidades.</p>
          <h2 id="outcomes-title">Resultados</h2>
          <ul>
            <li><strong>Laboratorios puestos en marcha:</strong> Siete laboratorios de innovación cocreados y alineados a un método y cadencia comunes, al corte de septiembre 2025.</li>
            <li><strong>Decisiones más rápidas:</strong> Las revisiones de punto de control y los responsables con rendición de cuentas redujeron la latencia de decisión entre las entidades participantes.</li>
            <li><strong>Ciclos más cortos:</strong> Los proyectos prioritarios pasaron de ideas a pilotos con evidencia auditable.</li>
            <li><strong>Playbooks reutilizables:</strong> Cartas, criterios de punto de control y plantillas de evidencia estandarizan cómo avanza el trabajo.</li>
            <li><strong>Mejora de capacidad:</strong> Los equipos practicaron entrega guiada por evidencia, aumentando confianza y alineación.</li>
          </ul>
          <p className="microcopy">
            Familias seguidas, al corte de septiembre 2025: latencia de decisión, tiempo de ciclo, adopción y satisfacción, y crecimiento de capacidades.
          </p>
          <p className="microcopy">
            Mira los diagramas del caso abajo para el flujo del sistema y la progresión de capacidades.
          </p>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Por qué importó</h2>
          <ul>
            <li>Trasladó la innovación de proyectos aislados a un sistema con roles, reglas y ritmos claros.</li>
            <li>Habilitó el aprendizaje y la reutilización entre instituciones, lo que baja el riesgo y la duplicación.</li>
            <li>Creó trazabilidad desde las metas de política hasta los experimentos y las decisiones de entrega.</li>
            <li>Construyó una base para escalar cohortes futuras y para incrustar la innovación en la gestión pública.</li>
          </ul>
        </section>

        {/* Case study diagrams */}
        <section className="section" id="case-diagrams" aria-labelledby="case-diagrams-title">
          <h2 id="case-diagrams-title">Diagramas del caso</h2>
          <Admonition type="tip" title="Diagrama: Flujo del sistema">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart LR
    A[Contexto del problema] --> B[Evidencia / Señales]
    B --> C[Intervención, establecer programa de cohortes]
    C --> D[Habilitadores, gobernanza y playbooks]
    D --> E[Capacidad, entrega de laboratorio repetible]
    E --> F[Resultados, decisiones más claras y reutilización]
`} />
          </Admonition>
          <Admonition type="tip" title="Diagrama: Progresión de capacidades">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart TB
    A[Antes, laboratorios aislados]
    B[Método MCF compartido]
    C[Cadencia de punto de control IMM-P®]
    D[Después, entrega en red]
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
              <p>¿Planeas una cohorte o evento?</p>
              <p>¿Exploras cohortes co-marca o memorandos de entendimiento?</p>
              <div className="ctaCardButtons">
                <Link to="https://booking.doulab.net/briefing" className="buttonPrimary">Solicitar un briefing</Link>
                <Link to="/contact" className="buttonSecondary">Co-organizar una sesión</Link>
                <Link to="/contact" className="buttonSecondary">Delineemos opciones</Link>
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
          id="ogtic-redlab-final-cta"
          ariaLabelledbyId="ogtic-redlab-final-cta-title"
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
