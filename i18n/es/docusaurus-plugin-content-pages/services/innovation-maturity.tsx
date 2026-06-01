// src/pages/services/innovation-maturity.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

// Icons (tree-shaken)
import Layers from 'lucide-react/dist/esm/icons/layers';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';
import Shield from 'lucide-react/dist/esm/icons/shield';
import Workflow from 'lucide-react/dist/esm/icons/workflow';

import Hero from '@site/src/components/Hero';
import CaseStudyCards from '@site/src/components/case-studies/CaseStudyCards';
import FinalCta from '@site/src/components/FinalCta';
import ImmFunnelDiagram from '@site/src/components/diagrams/ImmFunnelDiagram';
import Pillars from '@site/src/components/imm/Pillars';
import Roadmap from '@site/src/components/imm/Roadmap';
import Radar from '@site/src/components/imm/Radar';
import MaturityLadder from '@site/src/components/imm/MaturityLadder';
import EvidenceMeter from '@site/src/components/imm/EvidenceMeter';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';

export default function InnovationMaturityProgram(): ReactNode {
  // JSON-LD schema (service)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Programa del Modelo de Madurez en Innovación (IMM-P)®',
    serviceType: 'Aceleración de la capacidad de innovación',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/innovation-maturity',
    description:
      'IMM-P® es el programa que operacionaliza el Modelo de Madurez en Innovación (IMM 2.2): cinco dominios, una progresión de capacidad de cinco peldaños y puntos de control de preparación por fase respaldados por evidencia.',
    areaServed: ['Global'],
  };

  // JSON-LD schema (FAQ)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuál es la diferencia entre IMM e IMM-P®?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'IMM es el modelo: cinco dominios, cinco peldaños de madurez y puntos de control de preparación por fase. IMM-P® es el programa que lleva a una organización a través del modelo, instalando la cadencia, la gobernanza y la disciplina de evidencia necesarias para subir la escalera.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto dura el programa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'La mayoría de los equipos comienza con una pista central de 12 semanas enfocada en Fundamentos y Descubrimiento y Validación Estructurados. Los despliegues más grandes se extienden a 24+ semanas a lo largo de las cinco fases.',
        },
      },
      {
        '@type': 'Question',
        name: '¿IMM 2.2 se basa en dominios o en fases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ambos. La puntuación se basa en dominios a través de cinco dominios (Evidencia, Lógica de decisión, Cultura, Iteración, Gobernanza sistémica y de IA). El mismo instrumento produce superposiciones de preparación por fase para las cinco fases de IMM-P®.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Dónde encaja ClarityScan®?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'ClarityScan® es el diagnóstico de entrada que alimenta una intervención IMM-P®. El Nivel 1 es la instantánea, el Nivel 2 es el diagnóstico y el Nivel 3 es la auditoría respaldada por evidencia. Cualquier nivel establece la línea base sobre la que IMM-P® construye.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Requieren evidencia para la puntuación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'El Nivel 1 y el Nivel 2 pueden ejecutarse como evaluaciones puntuadas. El Nivel 3 requiere documentación de evidencia para auditabilidad, cumplimiento y aprendizaje institucional. Los puntos de control de fase de IMM-P® se abren al 75 por ciento de calidad de evidencia.',
        },
      },
      {
        '@type': 'Question',
        name: '¿IMM-P® puede ejecutarse de forma remota?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. IMM-P® es remoto primero. Se pueden agregar arranques o puntos de control presenciales donde aporten valor.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué obtenemos realmente al final?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Puntuaciones de dominio y superposiciones de preparación por fase, paquetes de evidencia y memos de decisión en cada punto de control, un plan piloto o piloto entregado, una cadencia de gobernanza en funcionamiento y playbooks reutilizables alineados con MCF 2.2.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo manejan los datos y la privacidad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Solo analítica con privacidad primero. Tú eres dueño de tus datos y artefactos. Operamos bajo NDAs mutuos y seguimos tus requisitos de cumplimiento y seguridad.',
        },
      },
    ],
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://doulab.net/services' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Programa del Modelo de Madurez en Innovación (IMM-P)®',
        item: 'https://doulab.net/services/innovation-maturity',
      },
    ],
  };

  // IMM model: the five domains
  const immDomains = [
    {
      icon: <ClipboardCheck aria-hidden="true" />,
      title: 'Evidencia y disciplina epistémica',
      body: 'Cómo separas supuestos de evidencia, fijas umbrales y te niegas a comprometer recursos sin pruebas.',
      accent: 'indigo' as const,
    },
    {
      icon: <Workflow aria-hidden="true" />,
      title: 'Lógica de decisión y gobernanza',
      body: 'Cómo asignas capital, estructuras puntos de control, documentas decisiones y haces responsables a los dueños.',
      accent: 'purple' as const,
    },
    {
      icon: <Users aria-hidden="true" />,
      title: 'Cultura y comportamiento',
      body: 'Si los equipos invalidan de forma segura, aprenden sin culpa y colaboran a través de fronteras funcionales.',
      accent: 'green' as const,
    },
    {
      icon: <LineChart aria-hidden="true" />,
      title: 'Iteración y mejora adaptativa',
      body: 'Qué tan rápido aprendes, iteras e institucionalizas lo que funciona a través de las iniciativas.',
      accent: 'amber' as const,
    },
    {
      icon: <Shield aria-hidden="true" />,
      title: 'Gobernanza sistémica y de IA',
      body: 'Gobernanza de datos, auditabilidad, controles de ciclo de vida y supervisión de impacto a medida que aumenta la complejidad.',
      accent: 'slate' as const,
    },
  ];

  // IMM-P® phases as a roadmap
  const immpPhases = [
    {
      range: 'Fase 1',
      label: 'Fundamentos',
      body: 'Línea base de madurez, instalar gobernanza, establecer disciplina de evidencia, construir el plano del Innovation OS.',
      initiatives: [
        'Línea base de dominio y revisión de preparación',
        'Roles de gobernanza, ingesta, dueños de decisión',
        'Lista corta de pilotos y cadencia operativa',
      ],
      state: 'now' as const,
    },
    {
      range: 'Fase 2',
      label: 'Descubrimiento y Validación Estructurados',
      body: 'Encuadre del problema, síntesis de insight de cliente, prueba de hipótesis, propuesta de valor validada.',
      initiatives: [
        'Síntesis de investigación y conjunto de problemas',
        'Experimentos con criterios de descarte',
        'Memo de decisión de ajuste problema y solución',
      ],
      state: 'now' as const,
    },
    {
      range: 'Fase 3',
      label: 'Eficiencia',
      body: 'Proceso, automatización y calidad. Preparación operativa para expansión del piloto.',
      initiatives: [
        'Auditoría de proceso y plan de automatización',
        'Controles de calidad e integración de riesgo',
        'Cadencia operativa con tableros',
      ],
      state: 'next' as const,
    },
    {
      range: 'Fase 4',
      label: 'Escalamiento',
      body: 'Infraestructura, alianzas y crecimiento. Economía de escala y go-to-market repetible.',
      initiatives: [
        'Plan de escalamiento y modelo de capacidad',
        'Gobernanza del ecosistema de socios',
        'Sistema operativo de crecimiento',
      ],
      state: 'next' as const,
    },
    {
      range: 'Fase 5',
      label: 'Mejora Continua',
      body: 'Sistema de aprendizaje, prospectiva, resiliencia y hoja de ruta de largo plazo.',
      initiatives: [
        'Gestión del conocimiento y playbooks',
        'Detección de tendencias y escenarios',
        'Revisión operativa trimestral',
      ],
      state: 'later' as const,
    },
  ];

  // IMM capability progression rungs
  const immRungs = [
    { label: 'Fundamentos', description: 'Gobernanza e ingesta iniciales. Las decisiones existen pero la evidencia es ad hoc.' },
    { label: 'Descubrimiento Estructurado', description: 'Encuadre de problema y experimentación repetibles con puntos de control documentados.' },
    { label: 'Eficiencia', description: 'Disciplina de proceso, automatización y controles de calidad en su lugar a través de las iniciativas.' },
    { label: 'Escalamiento', description: 'Gobernanza de portafolio, ecosistemas de socios y sistemas de crecimiento operando a escala.' },
    { label: 'Mejora Continua', description: 'Aprendizaje institucional, prospectiva y resiliencia como capacidades permanentes.' },
  ];

  // Example radar snapshot (fictional, clearly labeled)
  const radarDomains = [
    { name: 'Evidencia', score: 50 },
    { name: 'Lógica de decisión', score: 65 },
    { name: 'Cultura', score: 40 },
    { name: 'Iteración', score: 55 },
    { name: 'Sistémica e IA', score: 45 },
  ];
  const radarTarget = [75, 75, 70, 75, 75];

  return (
    <Layout
      title="Programa del Modelo de Madurez en Innovación (IMM-P)® | Doulab"
      description="IMM es el modelo. IMM-P® es el programa que lleva a tu equipo a través de él: cinco dominios, cinco peldaños de madurez y puntos de control de preparación por fase respaldados por evidencia."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/innovation-maturity" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-imm-program.jpg" />
        <meta property="og:image:alt" content="IMM-P®: el programa que operacionaliza el Modelo de Madurez en Innovación" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Head>

      <main>
        {/* Hero */}
        <Hero
          title="IMM es el modelo. IMM-P® es el programa."
          subtitle="Mide la madurez en innovación. Luego sube la escalera, punto de control por punto de control."
          body={
            'El Modelo de Madurez en Innovación (IMM) mide cómo una organización decide bajo incertidumbre a través de cinco dominios y cinco peldaños de madurez. IMM-P® es el programa que lleva a tu equipo a través de él, instalando la cadencia, la gobernanza y la disciplina de evidencia que te hacen subir la escalera. Construido sobre MicroCanvas Framework (MCF 2.2).'
          }
          imageBase="/img/imm-program"
          imageAlt="Ilustración del programa IMM-P®"
          width={1600}
          height={900}
          rightVisual={<ImmFunnelDiagram />}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Agenda una llamada de descubrimiento',
            dataCta: 'cta.services.imm.hero.discovery',
          }}
          secondaryCta={{
            to: '#imm-model',
            label: 'Ver el modelo',
            dataCta: 'cta.services.imm.hero.see_model',
            ariaLabel: 'Saltar a la sección del modelo IMM',
          }}
          ctaNote="Construido sobre MicroCanvas® v2.2 más IMM 2.2."
        />

        {/* IMM-P® as the program form of IMM */}
        <section className="section section--tight" id="imm-program-relationship" aria-labelledby="imm-program-relationship-title">
          <Heading as="h2" id="imm-program-relationship-title">IMM-P® es la forma programa de IMM</Heading>
          <p className="sectionLead">
            <strong>IMM-P® es la forma programa de <Link to="#imm-model" data-cta="cta.services.imm.intro.see_model" aria-label="Saltar a la sección del modelo IMM">IMM</Link>, el Modelo de Madurez en Innovación.</strong>{' '}
            IMM define el marco de capacidad y medición: cinco dominios, cinco peldaños de madurez y criterios de preparación por fase. IMM-P® es la intervención estructurada que lleva a un equipo a través de él, instalando la cadencia, la gobernanza y la disciplina de evidencia que te hacen subir la escalera.
          </p>
        </section>

        {/* The IMM model: five domains */}
        <section className="section" id="imm-model" aria-labelledby="imm-model-title">
          <Heading as="h2" id="imm-model-title">El modelo: cinco dominios IMM</Heading>
          <p className="sectionLead">
            IMM puntúa la madurez a través de cinco dominios. Cada dominio se mide con evidencia; juntos describen cómo
            una organización realmente toma decisiones de innovación bajo incertidumbre.
          </p>
          <Pillars
            pillars={immDomains}
            foundationLabel="Madurez en innovación, medida."
            ariaLabel="Los cinco dominios IMM sobre un cimiento compartido de madurez medida"
          />
        </section>

        {/* Capability progression */}
        <section className="section" id="imm-ladder" aria-labelledby="imm-ladder-title">
          <Heading as="h2" id="imm-ladder-title">La progresión de capacidad</Heading>
          <p className="sectionLead">
            IMM define cinco peldaños de capacidad. La mayoría de los equipos comienza en algún punto intermedio. IMM-P® te encuentra donde estés
            y secuencia el ascenso, un punto de control de preparación por fase a la vez.
          </p>
          <MaturityLadder
            rungs={immRungs}
            current={2}
            target={4}
            ariaLabel="Progresión de capacidad IMM con cinco peldaños, peldaño actual ejemplo dos y peldaño objetivo cuatro"
          />
          <p className="microcopy" style={{ marginTop: '0.75rem' }}>
            Posicionamiento de ejemplo. Tus peldaños actual y objetivo reales se fijan durante la línea base de ClarityScan®.
          </p>
        </section>

        {/* Sample maturity snapshot (radar) */}
        <section className="section" id="imm-snapshot" aria-labelledby="imm-snapshot-title">
          <Heading as="h2" id="imm-snapshot-title">Cómo se ve una instantánea de madurez</Heading>
          <p className="sectionLead">
            Una intervención IMM-P® real abre con una instantánea a nivel de dominio. Las puntuaciones actuales anclan la línea base; las puntuaciones objetivo
            definen el ascenso. El ejemplo a continuación es ficticio y se muestra solo para hacer visible el entregable.
          </p>
          <Radar
            domains={radarDomains}
            target={radarTarget}
            caption="Salida de ejemplo, solo ilustrativa. Las puntuaciones son ficticias."
            ariaLabel="Instantánea de radar IMM de ejemplo a través de cinco dominios con superposiciones actual y objetivo"
          />
        </section>

        {/* The program: IMM-P® phases as a roadmap */}
        <section className="section" id="imm-program" aria-labelledby="imm-program-title">
          <Heading as="h2" id="imm-program-title">El programa: fases de IMM-P®</Heading>
          <p className="sectionLead">
            IMM-P® se ejecuta en cinco fases secuenciales. Cada fase termina en un punto de control de preparación: se revisa la evidencia, se escribe un memo de
            decisión y la siguiente fase se abre solo cuando el punto de control pasa.
          </p>
          <Roadmap
            horizons={immpPhases}
            ariaLabel="Las cinco fases de IMM-P® desde Fundamentos hasta Mejora Continua"
          />
          <p className="microcopy" style={{ marginTop: '0.75rem' }}>
            Columna vertebral del método:{' '}
            <Link
              to="/docs/research-resources/microcanvas"
              data-cta="cta.services.imm.method_backbone.microcanvas"
              aria-label="Abrir la documentación de MicroCanvas Framework"
            >
              MicroCanvas Framework (MCF 2.2)
            </Link>{' '}
            más IMM 2.2 (puntuación de dominios, preparación por fase, puntos de control de evidencia).
          </p>
        </section>

        {/* Example gate readout */}
        <section className="section" id="imm-gate" aria-labelledby="imm-gate-title">
          <Heading as="h2" id="imm-gate-title">Cómo se ve un punto de control de preparación por fase</Heading>
          <p className="sectionLead">
            Cada fase de IMM-P® termina en un punto de control. El punto de control es una revisión estructurada de calidad de evidencia, lógica de decisión y
            artefactos. El ejemplo a continuación muestra una lectura de Fase 2 a Fase 3 justo en el límite.
          </p>
          <EvidenceMeter
            score={72}
            label="Preparación de Fase 2 a Fase 3, ejemplo"
            ariaLabel="Medidor de evidencia de ejemplo mostrando una puntuación de preparación por fase de 72 sobre 100"
          />
          <p className="microcopy" style={{ marginTop: '0.75rem', textAlign: 'center' }}>
            El punto de control se abre al 75 por ciento de calidad de evidencia. Por debajo del umbral, el equipo itera y vuelve a presentar.
          </p>
        </section>

        {/* Tiers reference */}
        <section className="section" id="imm-tiers" aria-labelledby="imm-tiers-title">
          <Heading as="h2" id="imm-tiers-title">Por dónde empezar: los niveles de ClarityScan®</Heading>
          <p className="sectionLead">
            ClarityScan® es el diagnóstico de entrada que alimenta una intervención IMM-P®. Elige el nivel que coincida con la profundidad
            de evidencia que necesitas.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-tier-1">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-tier-1">Nivel 1: Instantánea</h3>
              <p>Una línea base puntuada a través de los cinco dominios IMM con una superposición de preparación por fase. Ideal para alineación rápida.</p>
              <p>
                <Link
                  to="/services/clarityscan"
                  data-cta="cta.services.imm.tiers.t1"
                  aria-label="Ver ClarityScan Nivel 1 Instantánea"
                >
                  Ver Nivel 1 Instantánea
                </Link>
              </p>
            </article>
            <article className="card" aria-labelledby="imm-tier-2">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="imm-tier-2">Nivel 2: Diagnóstico</h3>
              <p>Un diagnóstico puntuado más profundo con entrevistas, revisión de artefactos y un plan de acción priorizado.</p>
              <p>
                <Link
                  to="/services/clarityscan/diagnostic"
                  data-cta="cta.services.imm.tiers.t2"
                  aria-label="Ver ClarityScan Nivel 2 Diagnóstico"
                >
                  Ver Nivel 2 Diagnóstico
                </Link>
              </p>
            </article>
            <article className="card" aria-labelledby="imm-tier-3">
              <Shield className="cardIcon" aria-hidden="true" />
              <h3 id="imm-tier-3">Nivel 3: Auditoría</h3>
              <p>Una auditoría respaldada por evidencia con artefactos documentados para auditabilidad, cumplimiento y aprendizaje institucional.</p>
              <p>
                <Link
                  to="/services/clarityscan/audit"
                  data-cta="cta.services.imm.tiers.t3"
                  aria-label="Ver ClarityScan Nivel 3 Auditoría"
                >
                  Ver Nivel 3 Auditoría
                </Link>
              </p>
            </article>
          </div>
        </section>

        {/* Who delivers */}
        <section className="section" id="imm-delivers" aria-labelledby="imm-delivers-title">
          <Heading as="h2" id="imm-delivers-title">Quién entrega IMM-P®</Heading>
          <p className="sectionLead">
            Una intervención IMM-P® es liderada por principales de Doulab con profunda experiencia en gobernanza de innovación, disciplina
            de evidencia y cadencia operativa. La entrega es remota primero, con arranques o puntos de control presenciales cuando
            aporten valor. Tu equipo central provee la capacidad transversal (producto u operaciones, experiencia de cliente o
            ciudadano, tecnología o datos) y dueños de decisión visibles.
          </p>
        </section>

        {/* Proof strip */}
        <section className="section section--tight" id="imm-proof" aria-labelledby="imm-proof-title">
          <Heading as="h2" id="imm-proof-title">Confiado por equipos que construyen innovación pública y privada</Heading>
          <div className="proofStrip" role="list" aria-label="Organizaciones seleccionadas">
            {[
              { key: 'afpsiembra', alt: 'Logo de AFP Siembra' },
              { key: 'alpha', alt: 'Logo de Alpha' },
              { key: 'cven-logo-h-color', alt: 'C-Ven Technologies' },
              { key: 'fundapec', alt: 'Logo de Fundapec' },
              { key: 'mentorpill', alt: 'Logo de MentorPill' },
              { key: 'ogtic_horizontal_fullcolor', alt: 'Logo de OGTIC' },
              { key: 'pharmakun', alt: 'Logo de Pharmakun' },
              { key: 'su', alt: 'Logo de SU' },
            ].map(({ key, alt }) => (
              <picture key={key} className="proofLogo" role="listitem">
                <source srcSet={`/img/logos/optimized/${key}.avif`} type="image/avif" />
                <source srcSet={`/img/logos/optimized/${key}.webp`} type="image/webp" />
                <img src={`/img/logos/optimized/${key}.png`} alt={alt} loading="lazy" width="160" height="60" />
              </picture>
            ))}
          </div>
        </section>

        {/* Related case studies */}
        <section className="section" id="imm-related" aria-labelledby="imm-related-title">
          <Heading as="h2" id="imm-related-title">
            Casos de estudio relacionados
          </Heading>
          <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
        </section>

        {/* FAQ */}
        <section className="section" id="imm-faq" aria-labelledby="imm-faq-title">
          <Heading as="h2" id="imm-faq-title">IMM-P®: Preguntas frecuentes</Heading>

          <div className={`faqList ${'pages-b4-p2__faqListGrid'} immFaqGrid`}>
            <details className="card">
              <summary>
                <strong>¿Cuál es la diferencia entre IMM e IMM-P®?</strong>
              </summary>
              <p>
                IMM es el modelo: cinco dominios, cinco peldaños de madurez y puntos de control de preparación por fase. IMM-P® es el programa que
                lleva a una organización a través del modelo, instalando la cadencia, la gobernanza y la disciplina de evidencia necesarias
                para subir la escalera.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>¿Cuánto dura el programa?</strong>
              </summary>
              <p>
                La mayoría de los equipos comienza con una pista central de 12 semanas enfocada en Fundamentos más Descubrimiento y Validación Estructurados.
                Los despliegues más grandes se extienden a 24+ semanas a lo largo de las cinco fases.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>¿IMM 2.2 se basa en dominios o en fases?</strong>
              </summary>
              <p>
                Ambos. La puntuación se basa en dominios a través de los cinco dominios IMM. El mismo instrumento produce superposiciones de
                preparación por fase para las cinco fases de IMM-P®.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>¿Dónde encaja ClarityScan®?</strong>
              </summary>
              <p>
                ClarityScan® es el diagnóstico de entrada que alimenta una intervención IMM-P®. Nivel 1 Instantánea, Nivel 2
                Diagnóstico o Nivel 3 Auditoría: todos establecen la línea base sobre la que IMM-P® construye. Ver{' '}
                <Link to="/services/clarityscan" data-cta="cta.services.imm.faq.clarityscan" aria-label="Abrir la página del servicio ClarityScan">
                  ClarityScan®
                </Link>
                .
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>¿Requieren evidencia para la puntuación?</strong>
              </summary>
              <p>
                El Nivel 1 y el Nivel 2 pueden ejecutarse como evaluaciones puntuadas. El Nivel 3 requiere documentación de evidencia. Los puntos de control de fase de IMM-P®
                se abren al 75 por ciento de calidad de evidencia.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>¿Puede el programa ejecutarse de forma remota?</strong>
              </summary>
              <p>Sí. IMM-P® es remoto primero por diseño, con arranques o puntos de control presenciales opcionales.</p>
            </details>

            <details className="card">
              <summary>
                <strong>¿Qué recibimos al final?</strong>
              </summary>
              <p>
                Puntuaciones de dominio y superposiciones de preparación por fase, paquetes de evidencia y memos de decisión en cada punto de control, un plan piloto o
                piloto entregado, una cadencia de gobernanza en funcionamiento y playbooks reutilizables alineados con MCF 2.2.
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>¿Cómo se estructuran los precios?</strong>
              </summary>
              <p>
                Basados en alcance. Damos forma a un plan del tamaño correcto durante la ingesta.{' '}
                <Link
                  to="https://booking.doulab.net/discovery"
                  data-cta="cta.services.imm.faq.pricing.discovery"
                  aria-label="Conversemos, agenda una llamada de descubrimiento para discutir los precios de IMM-P"
                >
                  Conversemos
                </Link>
                .
              </p>
            </details>

            <details className="card">
              <summary>
                <strong>¿Cómo manejan los datos y la privacidad?</strong>
              </summary>
              <p>
                Solo analítica con privacidad primero. Tú eres dueño de tus datos. Operamos bajo NDAs y seguimos tus requisitos de seguridad y
                cumplimiento.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="imm-cta"
          ariaLabelledbyId="imm-cta-title"
          title="¿Listo para definir el alcance de una intervención IMM-P®?"
          body="Agenda una llamada de descubrimiento para definir el alcance de tu intervención IMM-P®, o empieza con un ClarityScan® Nivel 1 Instantánea para establecer tu línea base."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Agenda una llamada de descubrimiento',
            dataCta: 'cta.services.imm.final.discovery',
            ariaLabel: 'Agenda una llamada de descubrimiento para definir el alcance de una intervención IMM-P',
          }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Empieza con ClarityScan® Nivel 1',
            dataCta: 'cta.services.imm.final.book_clarityscan_t1',
            newTab: true,
            ariaLabel: 'Agenda un ClarityScan Nivel 1 Instantánea',
          }}
          ctaNote="Construido sobre MicroCanvas® v2.2 más IMM 2.2 (puntuación de dominios, preparación por fase, puntos de control de evidencia)."
        />
      </main>
    </Layout>
  );
}
