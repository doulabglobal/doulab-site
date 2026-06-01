// src/pages/services/clarityscan.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons (tree-shaken)
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import Target from 'lucide-react/dist/esm/icons/target';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import PlayCircle from 'lucide-react/dist/esm/icons/play-circle';
import Layers from 'lucide-react/dist/esm/icons/layers';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Cpu from 'lucide-react/dist/esm/icons/cpu';

import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import Pillars from '@site/src/components/imm/Pillars';
import Radar from '@site/src/components/imm/Radar';
import MaturityLadder from '@site/src/components/imm/MaturityLadder';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';

export default function ClarityScanPage(): ReactNode {
  // JSON-LD schema (Service) with Tier 1 offer
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan®',
    serviceType: 'Diagnóstico de madurez en innovación y prospectiva',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan',
    areaServed: ['Global'],
    description:
      'Un diagnóstico por niveles de madurez en innovación y prospectiva. El Nivel 1 Snapshot entrega una línea base en la misma semana; el Nivel 2 Diagnóstico y el Nivel 3 Auditoría escalan a engagements más profundos.',
    offers: {
      '@type': 'Offer',
      name: 'ClarityScan® Nivel 1: Snapshot',
      price: '150',
      priceCurrency: 'CHF',
      url: CLARITYSCAN_CHECKOUT_URL,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <Layout
      title="ClarityScan®: diagnóstico por niveles de madurez en innovación"
      description="ClarityScan® es un diagnóstico por niveles de madurez en innovación y prospectiva. El Nivel 1 Snapshot (CHF 150) entrega una línea base en la misma semana; el Nivel 2 Diagnóstico y el Nivel 3 Auditoría escalan a engagements más profundos."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-clarityscan.jpg" />
        <meta property="og:image:alt" content="ClarityScan®: diagnóstico por niveles de madurez en innovación" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload */}
        <link
          rel="preload"
          as="image"
          href="/img/clarityscan-hero.png"
          imageSrcSet="/img/clarityscan-hero.avif 1x, /img/clarityscan-hero.webp 1x, /img/clarityscan-hero.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Hero: tiered diagnostic positioning */}
        <Hero
          title="ClarityScan®"
          subtitle="Un diagnóstico por niveles de madurez en innovación y prospectiva. Ve dónde estás. Decide qué hacer a continuación."
          body="Tres niveles, una misma columna vertebral de medición IMM 2.2. El Nivel 1 Snapshot es una autoevaluación de 15 a 20 minutos con un PDF de lectura en la misma semana (CHF 150). El Nivel 2 Diagnóstico es un engagement con alcance definido, segmentado por rol, con una hoja de ruta priorizada. El Nivel 3 Auditoría es un dossier respaldado por evidencia, listo para auditoría, para programas regulados e institucionales."
          imageBase="/img/clarityscan-hero"
          imageAlt="Visual del diagnóstico ClarityScan®"
          width={1600}
          height={900}
          primaryCta={{
            to: CLARITYSCAN_CHECKOUT_URL,
            label: 'Reserva Nivel 1: CHF 150',
            dataCta: 'cta.services.clarityscan.hero.book_clarityscan_online',
            ariaLabel: 'Reserva un Snapshot Nivel 1 de ClarityScan en línea vía Stripe Checkout',
            external: true,
          }}
          secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Conversemos sobre N2 / N3', dataCta: 'cta.services.clarityscan.hero.contact' }}
          ctaNote="El Nivel 1 se paga a través del checkout seguro de Stripe. Los Niveles 2 y 3 se definen en alcance en una llamada de descubrimiento de 20 minutos."
        />

        {/* Who is it for? */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">¿Para quién es?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>De la idea a la evidencia y al ajuste, rápido. Puntos de control claros y enfoque.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Instituciones públicas</h3>
              <p>Gobernanza transparente y construcción de capacidades con una línea base rápida.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Organizaciones privadas</h3>
              <p>Empresas establecidas que quieren acelerar la entrega interna de innovación.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubadoras y aceleradoras</h3>
              <p>Eleva la calidad de las cohortes con métodos basados en evidencia y playbooks reutilizables.</p>
            </article>
          </div>
        </section>

        {/* What every tier delivers: the 5 IMM domains */}
        <section className="section" id="domains" aria-labelledby="domains-title">
          <h2 id="domains-title">Qué mide cada nivel</h2>
          <p className="sectionLead">
            Los tres niveles puntúan los mismos cinco dominios de IMM 2.2. Lo que cambia entre niveles es la
            profundidad, las cohortes de personas respondientes, los requisitos de evidencia y la forma del entregable.
          </p>
          <Pillars
            ariaLabel="Los cinco dominios del IMM puntuados por ClarityScan"
            foundationLabel="Modelo de madurez IMM 2.2"
            pillars={[
              {
                icon: <ClipboardCheck aria-hidden="true" />,
                title: 'Evidencia y disciplina epistémica',
                body: 'Cómo separas los supuestos de la evidencia y aplicas umbrales antes de comprometer recursos.',
                accent: 'indigo',
              },
              {
                icon: <Workflow aria-hidden="true" />,
                title: 'Lógica de decisión y gobernanza',
                body: 'Cómo asignas capital, defines puntos de control, documentas decisiones y mantienes la rendición de cuentas.',
                accent: 'slate',
              },
              {
                icon: <Users aria-hidden="true" />,
                title: 'Cultura y comportamiento',
                body: 'Si los equipos pueden invalidar de forma segura, aprender sin culpa y colaborar a través de fronteras.',
                accent: 'purple',
              },
              {
                icon: <Cpu aria-hidden="true" />,
                title: 'Iteración y mejora adaptativa',
                body: 'Qué tan rápido aprendes, iteras e institucionalizas lo que funciona entre iniciativas.',
                accent: 'green',
              },
              {
                icon: <ShieldCheck aria-hidden="true" />,
                title: 'Gobernanza sistémica y de IA',
                body: 'Gobernanza de datos, auditabilidad, controles de ciclo de vida y supervisión de impacto a medida que aumenta la complejidad.',
                accent: 'amber',
              },
            ]}
          />
        </section>

        {/* The three tiers */}
        <section className="section" id="tiers" aria-labelledby="tiers-title">
          <h2 id="tiers-title">Los tres niveles</h2>
          <p className="sectionLead">
            Empieza donde estás. El Nivel 1 es reservable en línea. El Nivel 2 y el Nivel 3 se basan en alcance y
            comienzan con una breve llamada de descubrimiento.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="tier-1-card">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3 id="tier-1-card">Nivel 1: Snapshot</h3>
              <p><strong>CHF 150</strong> · 15 a 20 minutos · pago en línea vía Stripe</p>
              <ul>
                <li>Una sola persona respondiente, autopuntuación cualitativa a lo largo de los cinco dominios del IMM.</li>
                <li>PDF de una página: radar, escalera de madurez, de 3 a 5 movimientos prioritarios, plan de 30/60/90 días.</li>
                <li>No requiere documentación de evidencia.</li>
              </ul>
              <p>Ideal para: una lectura ejecutiva rápida, una línea base personal o un diagnóstico de entrada.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="#tier-1-detail"
                  data-cta="cta.services.clarityscan.tier1.see_detail"
                  aria-label="Ver el detalle del Snapshot Nivel 1 más abajo en esta página"
                >
                  Ver detalle del Nivel 1 →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="tier-2-card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="tier-2-card">Nivel 2: Diagnóstico</h3>
              <p><strong>Por alcance</strong> · engagement de varios días · personas respondientes segmentadas por rol</p>
              <ul>
                <li>Cohortes segmentadas por rol (directiva, mandos medios, operaciones).</li>
                <li>Radar de dominios con superposición de objetivo, matriz priorizada de brechas, hoja de ruta de 90 días.</li>
                <li>Evaluación puntuada sin documentación formal de evidencia.</li>
              </ul>
              <p>Ideal para: equipos ejecutivos que se alinean sobre brechas de capacidad antes de comprometerse con un programa.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/services/clarityscan/diagnostic"
                  data-cta="cta.services.clarityscan.tier2.see_detail"
                  aria-label="Ver la página de detalle del Nivel 2 Diagnóstico"
                >
                  Ver detalle del Nivel 2 →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="tier-3-card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="tier-3-card">Nivel 3: Auditoría</h3>
              <p><strong>Por alcance</strong> · engagement de varias semanas · respaldado por evidencia</p>
              <ul>
                <li>Cada puntuación de dominio respaldada por artefactos documentados, decisiones y práctica observada.</li>
                <li>Puntos de control de preparación por fase vinculados al modelo de 5 fases de IMM-P®.</li>
                <li>Dossier de grado gobernanza, no solo una hoja de ruta.</li>
              </ul>
              <p>Ideal para: finanzas reguladas, programas digitales del sector público y engagements con grado de auditoría.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/services/clarityscan/audit"
                  data-cta="cta.services.clarityscan.tier3.see_detail"
                  aria-label="Ver la página de detalle del Nivel 3 Auditoría"
                >
                  Ver detalle del Nivel 3 →
                </Link>
              </div>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            ¿Te interesa específicamente la transformación digital? Ver <Link to="/services/imm-dt">IMM-DT</Link>, el
            vertical de transformación digital de IMM-P®.
          </p>
        </section>

        {/* Tier 1 detail */}
        <section className="section" id="tier-1-detail" aria-labelledby="tier-1-detail-title">
          <h2 id="tier-1-detail-title">Snapshot Nivel 1: qué obtienes</h2>
          <p className="sectionLead">
            Una lectura de madurez de una página, entregada en la misma semana. Los visuales que ves abajo son
            ilustrativos; tus puntuaciones se calculan a partir de tus respuestas.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
              marginTop: '1.5rem',
              fontFamily: 'var(--ifm-font-family-base, Roboto, sans-serif)',
            }}
          >
            <div>
              <h3 style={{ color: 'var(--ifm-heading-color)' }}>Radar de dominios</h3>
              <Radar
                ariaLabel="Ejemplo de radar de dominios del Nivel 1 con los cinco dominios del IMM"
                title="Snapshot de madurez en cinco dominios"
                domains={[
                  { name: 'Evidencia', score: 50 },
                  { name: 'Lógica de decisión', score: 65 },
                  { name: 'Cultura', score: 40 },
                  { name: 'Iteración', score: 55 },
                  { name: 'Sistémico / IA', score: 45 },
                ]}
                caption="Salida de ejemplo. Tus puntuaciones se calculan a partir de tus respuestas."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Escalera de madurez</h3>
              <MaturityLadder
                ariaLabel="Ejemplo de escalera de madurez del Nivel 1 con peldaño actual 2"
                title="Dónde estás hoy"
                current={2}
                layout="wrap"
                rungs={[
                  { label: 'Fundamentos', description: 'Práctica ad-hoc; poca disciplina compartida.' },
                  { label: 'Descubrimiento estructurado', description: 'Encuadre repetible, entrevistas y pruebas de supuestos.' },
                  { label: 'Eficiencia', description: 'Proceso, automatización y controles de calidad en su lugar.' },
                  { label: 'Escalado', description: 'Infraestructura, alianzas y sistema operativo de crecimiento.' },
                  { label: 'Mejora continua', description: 'El aprendizaje, la prospectiva y la resiliencia se acumulan.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Posicionamiento de ejemplo. Ves dónde estás; los Niveles 2 y 3 secuencian la subida.
              </p>
            </div>
          </div>

          <p style={{ marginTop: '1.5rem' }}>
            Tu entregable del Nivel 1 es una lectura de madurez en una sola página (PDF) con el radar, la escalera,
            de 3 a 5 movimientos prioritarios y un plan de 30/60/90 días. Entregado dentro de los dos días hábiles
            posteriores a tu respuesta.
          </p>
        </section>

        {/* How Tier 1 works */}
        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">Cómo funciona el Nivel 1</h2>
          <div className="cardGrid">
            <article className="card">
              <PlayCircle className="cardIcon" aria-hidden="true" />
              <h3>Agenda</h3>
              <p>Elige un horario (15 a 20 minutos).</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>Conversa</h3>
              <p>Recorre los cinco dominios del IMM.</p>
            </article>
            <article className="card">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3>Actúa</h3>
              <p>Recibe tu snapshot y los próximos pasos dentro de dos días hábiles.</p>
            </article>
          </div>
        </section>

        {/* What Tier 1 does not include */}
        <section className="section" id="tier-1-exclusions" aria-labelledby="tier-1-exclusions-title">
          <h2 id="tier-1-exclusions-title">Qué no incluye el Nivel 1</h2>
          <p className="sectionLead">
            El Nivel 1 es una lectura rápida, no un diagnóstico completo de programa. Excluye deliberadamente:
          </p>
          <div className="cardGrid">
            <article className="card">
              <h3>Sin documentación de evidencia</h3>
              <p>La puntuación es cualitativa y autorreportada. Para puntuación respaldada por evidencia, ver el Nivel 3.</p>
            </article>
            <article className="card">
              <h3>Sin segmentación por cohorte</h3>
              <p>Responde una sola persona. Para personas respondientes segmentadas por rol, ver el Nivel 2.</p>
            </article>
            <article className="card">
              <h3>Sin benchmark</h3>
              <p>Sin comparación con pares o regional. El Nivel 2 añade benchmarking donde es relevante.</p>
            </article>
            <article className="card">
              <h3>Sin paquete de gobernanza</h3>
              <p>Sin bitácora de decisiones, sin registro de riesgos, sin modelo de gobernanza. Eso viene con el Nivel 3.</p>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Para evaluaciones más profundas, ver <Link to="/services/clarityscan/diagnostic">Nivel 2 Diagnóstico</Link> o{' '}
            <Link to="/services/clarityscan/audit">Nivel 3 Auditoría</Link>, o el programa completo{' '}
            <Link to="/services/innovation-maturity">IMM-P®</Link>.
          </p>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="clarityscan-final"
          ariaLabelledbyId="clarityscan-final-title"
          title="¿Listo para obtener una lectura clara?"
          body="Empieza con el Nivel 1 (CHF 150, pago en línea) para una línea base en la misma semana, o conversemos sobre un engagement con alcance Nivel 2 o Nivel 3."
          primaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Reserva Nivel 1: CHF 150',
            dataCta: 'cta.services.clarityscan.final.book_clarityscan_booking',
            newTab: true,
          }}
          secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Conversemos sobre N2 / N3', dataCta: 'cta.services.clarityscan.final.contact' }}
          ctaNote="Nivel 1: recibo y enlace de reserva por correo electrónico. Llamada de descubrimiento: 20 minutos, sin preparación requerida."
        />
      </main>
    </Layout>
  );
}
