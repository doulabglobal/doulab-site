// src/pages/services/clarityscan/diagnostic.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Compass from 'lucide-react/dist/esm/icons/compass';
import Microscope from 'lucide-react/dist/esm/icons/microscope';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';

import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import Radar from '@site/src/components/imm/Radar';
import MaturityLadder from '@site/src/components/imm/MaturityLadder';
import Roadmap from '@site/src/components/imm/Roadmap';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';

export default function ClarityScanTier2Page(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan® Nivel 2: Diagnóstico',
    serviceType: 'Engagement de diagnóstico de madurez en innovación',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan/diagnostic',
    areaServed: ['Global'],
    description:
      'ClarityScan® Nivel 2 Diagnóstico es un engagement de madurez en innovación con alcance definido y segmentado por rol. Entrega el radar de línea base vs objetivo, una matriz priorizada de brechas y una hoja de ruta de 90 días.',
    isRelatedTo: [
      { '@type': 'Service', name: 'ClarityScan® Nivel 1: Snapshot', url: 'https://doulab.net/services/clarityscan' },
      { '@type': 'Service', name: 'ClarityScan® Nivel 3: Auditoría', url: 'https://doulab.net/services/clarityscan/audit' },
    ],
  };

  return (
    <Layout
      title="ClarityScan® Nivel 2: Diagnóstico | Doulab"
      description="ClarityScan® Nivel 2 es un diagnóstico de madurez en innovación con alcance definido y segmentado por rol. Radar de línea base vs objetivo, matriz priorizada de brechas y una hoja de ruta de 90 días."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan/diagnostic" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="ClarityScan® Nivel 2: Diagnóstico | Doulab" />
        <meta
          property="og:description"
          content="Un diagnóstico de madurez en innovación con alcance definido y segmentado por rol. Línea base vs objetivo, brechas priorizadas y una hoja de ruta de 90 días."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-clarityscan.jpg" />
        <meta property="og:image:alt" content="ClarityScan® Nivel 2 Diagnóstico" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        <Hero
          title="ClarityScan® Nivel 2 / Diagnóstico"
          subtitle="Un engagement con alcance definido, personas respondientes segmentadas por rol y una hoja de ruta priorizada."
          body="Donde el Nivel 1 es una lectura rápida con una sola persona respondiente, el Nivel 2 es un diagnóstico de varios días a lo largo de cohortes de respondientes segmentadas por rol (directiva, mandos medios, operaciones). Te llevas un radar de línea base vs objetivo, una matriz priorizada de brechas y una hoja de ruta de 90 días. Evaluación puntuada, no auditoría respaldada por evidencia."
          imageBase="/img/clarityscan-hero"
          imageAlt="Visual de ClarityScan® Nivel 2 Diagnóstico"
          width={1600}
          height={900}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Agenda una llamada de descubrimiento',
            dataCta: 'cta.services.clarityscan.t2.hero.discovery',
          }}
          secondaryCta={{
            to: '/services/clarityscan',
            label: 'Ver Nivel 1 Snapshot',
            dataCta: 'cta.services.clarityscan.t2.hero.see_t1',
          }}
          ctaNote="El Nivel 2 se basa en alcance. Empezamos con una llamada de descubrimiento de 20 minutos para dimensionar la cohorte y el entregable."
        />

        {/* What Tier 2 delivers */}
        <section className="section" id="tier-2-deliverables" aria-labelledby="tier-2-deliverables-title">
          <h2 id="tier-2-deliverables-title">Qué entrega el Nivel 2</h2>
          <p className="sectionLead">
            Cuatro artefactos entregables. Los valores que ves son ilustrativos; las puntuaciones reales del
            engagement vienen de tus personas respondientes.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
              marginTop: '1.5rem',
              fontFamily: 'var(--ifm-font-family-base, Roboto, sans-serif)',
            }}
          >
            <div>
              <h3 style={{ color: 'var(--ifm-heading-color)' }}>Radar de línea base vs objetivo</h3>
              <Radar
                ariaLabel="Ejemplo de radar de dominios del Nivel 2 con puntuaciones de línea base y superposición de objetivo"
                title="Línea base vs objetivo"
                domains={[
                  { name: 'Evidencia', score: 50 },
                  { name: 'Lógica de decisión', score: 65 },
                  { name: 'Cultura', score: 40 },
                  { name: 'Iteración', score: 55 },
                  { name: 'Sistémico / IA', score: 45 },
                ]}
                target={[75, 75, 70, 75, 75]}
                caption="Línea base vs objetivo. Salida de ejemplo."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Escalera de madurez con objetivo</h3>
              <MaturityLadder
                ariaLabel="Ejemplo de escalera de madurez del Nivel 2 con peldaño actual 2 y peldaño objetivo 4"
                title="De donde estás a donde vas"
                current={2}
                target={4}
                rungs={[
                  { label: 'Fundamentos', description: 'Práctica ad-hoc; poca disciplina compartida.' },
                  { label: 'Descubrimiento estructurado', description: 'Encuadre repetible, entrevistas y pruebas de supuestos.' },
                  { label: 'Eficiencia', description: 'Proceso, automatización y controles de calidad en su lugar.' },
                  { label: 'Escalado', description: 'Infraestructura, alianzas y sistema operativo de crecimiento.' },
                  { label: 'Mejora continua', description: 'El aprendizaje, la prospectiva y la resiliencia se acumulan.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Secuenciamos la subida a lo largo de las fases.
              </p>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ color: 'var(--dl-amber, #F59E0B)' }}>Matriz de prioridad: impacto vs esfuerzo</h3>
              <PriorityMatrix />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Iniciativas de ejemplo. Los logros rápidos van arriba a la izquierda; las apuestas estratégicas van arriba a la derecha.
              </p>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ color: 'var(--dl-green, #10B981)' }}>Fragmento de hoja de ruta a 90 días</h3>
              <Roadmap
                ariaLabel="Ejemplo de hoja de ruta de noventa días del Nivel 2 con tres horizontes"
                horizons={[
                  {
                    range: '0 a 30 días',
                    label: 'Pon en pie el ciclo de evidencia',
                    body: 'Instala una revisión semanal de decisiones; define qué cuenta como evidencia; nombra responsables de decisión.',
                    state: 'now',
                  },
                  {
                    range: '30 a 60 días',
                    label: 'Aprieta la gobernanza',
                    body: 'Documenta los criterios de los puntos de control; pilotea una plantilla de memo de decisión; establece la línea base de las dos iniciativas principales.',
                    state: 'now',
                  },
                  {
                    range: '60 a 90 días',
                    label: 'Muestra una mejora medible',
                    body: 'Repuntúa los dos dominios más bajos; publica una revisión de portafolio; comprométete con la siguiente fase.',
                    state: 'next',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Who Tier 2 is for */}
        <section className="section" id="who-t2" aria-labelledby="who-t2-title">
          <h2 id="who-t2-title">Para quién es el Nivel 2</h2>
          <div className="cardGrid">
            <article className="card">
              <Users className="cardIcon" aria-hidden="true" />
              <h3>Equipos ejecutivos</h3>
              <p>Equipos de liderazgo que se alinean sobre brechas de capacidad antes de comprometerse con un programa de varios trimestres.</p>
            </article>
            <article className="card">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3>Organizaciones multiunidad</h3>
              <p>Empresas que hacen benchmarking de madurez en innovación entre unidades de negocio o geografías.</p>
            </article>
            <article className="card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3>Programas del sector público</h3>
              <p>Agencias que necesitan un diagnóstico puntuado para informar la estrategia sin requerir todavía un dossier de auditoría.</p>
            </article>
          </div>
        </section>

        {/* How Tier 2 works */}
        <section className="section" id="how-t2" aria-labelledby="how-t2-title">
          <h2 id="how-t2-title">Cómo funciona el Nivel 2</h2>
          <div className="cardGrid">
            <article className="card">
              <Compass className="cardIcon" aria-hidden="true" />
              <h3>1. Alcance</h3>
              <p>Define las unidades de análisis, las cohortes de personas respondientes y el listón de evidencia para el engagement.</p>
            </article>
            <article className="card">
              <Microscope className="cardIcon" aria-hidden="true" />
              <h3>2. Encuesta</h3>
              <p>Ejecuta el cuestionario segmentado por rol a lo largo de cohortes directiva, mandos medios y operaciones.</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>3. Sintetiza</h3>
              <p>Puntúa los cinco dominios, produce el radar, la escalera y la matriz de prioridad.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>4. Decide</h3>
              <p>Sesión de trabajo con el liderazgo para fijar la hoja de ruta de 90 días y los responsables de decisión.</p>
            </article>
          </div>
        </section>

        {/* What Tier 2 does not include */}
        <section className="section" id="t2-exclusions" aria-labelledby="t2-exclusions-title">
          <h2 id="t2-exclusions-title">Qué no incluye el Nivel 2</h2>
          <p className="sectionLead">
            El Nivel 2 es un diagnóstico puntuado, no una auditoría. Excluye deliberadamente:
          </p>
          <div className="cardGrid">
            <article className="card">
              <h3>Sin rastro de auditoría respaldado por evidencia</h3>
              <p>Las puntuaciones reflejan la autoevaluación de las personas respondientes. Para artefactos documentados por puntuación, ver el Nivel 3.</p>
            </article>
            <article className="card">
              <h3>Sin dossier de gobernanza</h3>
              <p>Sin bitácora de decisiones, registro de riesgos o scorecard de preparación por fase. Esos son entregables del Nivel 3.</p>
            </article>
            <article className="card">
              <h3>Sin postura ante el regulador</h3>
              <p>El Nivel 2 apoya decisiones internas, no auditoría externa. El Nivel 3 está diseñado para resistir el escrutinio.</p>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            ¿Vienes del Nivel 1? <Link to="/services/clarityscan">Volver al resumen de ClarityScan®</Link>. ¿Necesitas
            un entregable con grado de auditoría? <Link to="/services/clarityscan/audit">Ver Nivel 3 Auditoría</Link>.
          </p>
        </section>

        <FinalCta
          id="clarityscan-t2-final"
          ariaLabelledbyId="clarityscan-t2-final-title"
          title="Define el alcance de un engagement Nivel 2 Diagnóstico"
          body="Una llamada de descubrimiento de 20 minutos cubre cohortes de personas respondientes, listón de evidencia y forma del entregable. Sin preparación requerida."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Agenda una llamada de descubrimiento',
            dataCta: 'cta.services.clarityscan.t2.final.discovery',
          }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'O empieza con el Nivel 1: CHF 150',
            dataCta: 'cta.services.clarityscan.t2.final.book_t1',
            newTab: true,
          }}
          ctaNote="El precio del Nivel 2 se basa en alcance. Lo dimensionamos en la llamada."
        />
      </main>
    </Layout>
  );
}

// Inline 2x2 priority matrix. Pure CSS-grid, no new dependencies.
function PriorityMatrix(): ReactNode {
  const cellBase: React.CSSProperties = {
    border: '1px solid var(--ifm-color-emphasis-300)',
    borderRadius: '8px',
    padding: '0.75rem',
    background: 'var(--ifm-background-surface-color, #fff)',
    fontFamily: 'var(--ifm-font-family-base, Roboto, sans-serif)',
    minHeight: '110px',
  };
  return (
    <figure
      aria-label="Ejemplo de matriz de prioridad impacto vs esfuerzo con cuatro cuadrantes"
      style={{ margin: 0 }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70px 1fr 1fr',
          gridTemplateRows: '24px 1fr 1fr 24px',
          gap: '0.4rem',
          alignItems: 'stretch',
        }}
      >
        {/* Row 1: top label */}
        <div />
        <div style={{ gridColumn: '2 / span 2', textAlign: 'center', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
          Impacto (alto ↑)
        </div>

        {/* Row 2: top quadrants */}
        <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', textAlign: 'center', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
          Esfuerzo (bajo ←)
        </div>
        <div style={{ ...cellBase, borderColor: 'var(--dl-green, #72c53c)' }}>
          <strong style={{ color: 'var(--dl-green, #72c53c)' }}>Logros rápidos</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Plantilla de memo de decisión. Revisión semanal de portafolio.
          </p>
        </div>
        <div style={{ ...cellBase, borderColor: 'var(--ifm-color-primary)' }}>
          <strong style={{ color: 'var(--ifm-color-primary)' }}>Apuestas estratégicas</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Modelo de gobernanza con puntos de control de evidencia. Cadencia entre unidades.
          </p>
        </div>

        {/* Row 3: bottom quadrants */}
        <div />
        <div style={{ ...cellBase, borderColor: 'var(--ifm-color-emphasis-500)' }}>
          <strong style={{ color: 'var(--ifm-color-emphasis-800)' }}>Complementos</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Limpieza de plantillas. Glosario compartido.
          </p>
        </div>
        <div style={{ ...cellBase, borderColor: 'var(--dl-amber, #f59e0b)' }}>
          <strong style={{ color: 'var(--dl-amber, #f59e0b)' }}>Reconsiderar</strong>
          <p style={{ margin: '0.3rem 0 0', fontSize: '0.9rem' }}>
            Tableros a medida. Retiros puntuales.
          </p>
        </div>

        {/* Row 4: bottom label */}
        <div />
        <div style={{ gridColumn: '2 / span 2', textAlign: 'center', fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)' }}>
          Esfuerzo (alto →)
        </div>
      </div>
      <figcaption className="microcopy" style={{ marginTop: '0.5rem' }}>
        Salida de ejemplo. Las iniciativas se ubican por impacto y esfuerzo, no son datos reales de clientes.
      </figcaption>
    </figure>
  );
}
