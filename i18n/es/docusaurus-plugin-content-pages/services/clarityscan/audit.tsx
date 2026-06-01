// src/pages/services/clarityscan/audit.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import Scale from 'lucide-react/dist/esm/icons/scale';
import Building2 from 'lucide-react/dist/esm/icons/building-2';
import Landmark from 'lucide-react/dist/esm/icons/landmark';
import Globe2 from 'lucide-react/dist/esm/icons/globe-2';
import Compass from 'lucide-react/dist/esm/icons/compass';
import Microscope from 'lucide-react/dist/esm/icons/microscope';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Archive from 'lucide-react/dist/esm/icons/archive';

import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import Radar from '@site/src/components/imm/Radar';
import MaturityLadder from '@site/src/components/imm/MaturityLadder';
import EvidenceMeter from '@site/src/components/imm/EvidenceMeter';
import Roadmap from '@site/src/components/imm/Roadmap';
import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';

export default function ClarityScanTier3Page(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan® Nivel 3: Auditoría',
    serviceType: 'Auditoría de madurez en innovación respaldada por evidencia',
    provider: { '@type': 'Organization', name: 'Doulab', url: localizedUrl('/') },
    url: localizedUrl('/services/clarityscan/audit'),
    areaServed: ['Global'],
    description:
      'ClarityScan® Nivel 3 Auditoría es un engagement de madurez en innovación respaldado por evidencia y listo para auditoría. Cada puntuación de dominio está respaldada por artefactos documentados y vinculada a los puntos de control de preparación por fase de IMM-P®.',
    isRelatedTo: [
      { '@type': 'Service', name: 'ClarityScan® Nivel 1: Snapshot', url: localizedUrl('/services/clarityscan') },
      { '@type': 'Service', name: 'ClarityScan® Nivel 2: Diagnóstico', url: localizedUrl('/services/clarityscan/diagnostic') },
    ],
  };

  return (
    <Layout
      title="ClarityScan® Nivel 3: Auditoría"
      description="ClarityScan® Nivel 3 Auditoría es un engagement de madurez en innovación respaldado por evidencia, listo para auditoría. Cada puntuación está documentada; el entregable es un dossier de grado gobernanza."
    >
      <PageMetadata slug="/services/clarityscan/audit" ogImage="/img/social/og-clarityscan.jpg" />
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="ClarityScan® Nivel 3: Auditoría" />
        <meta
          property="og:description"
          content="Auditoría de madurez en innovación respaldada por evidencia. Puntuaciones documentadas, puntos de control de preparación por fase, dossier de grado gobernanza."
        />
        <meta property="og:image:alt" content="ClarityScan® Nivel 3 Auditoría" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        <Hero
          title="ClarityScan® Nivel 3 / Auditoría"
          subtitle="Respaldado por evidencia. Listo para auditoría. Diseñado para resistir el escrutinio."
          body="El Nivel 3 convierte el diagnóstico en un dossier de grado gobernanza. Cada puntuación de dominio está respaldada por artefactos documentados, decisiones y práctica observada. Los puntos de control de preparación por fase se alinean con el modelo de 5 fases del IMM y alimentan directamente un engagement IMM-P®. Construido para finanzas reguladas, programas digitales del sector público y engagements multilaterales donde el diagnóstico debe resistir la auditoría interna, la revisión del regulador y los ciclos de aprendizaje institucional."
          imageBase="/img/clarityscan-hero"
          imageAlt="Visual de ClarityScan® Nivel 3 Auditoría"
          width={1600}
          height={900}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Agenda una llamada de descubrimiento',
            dataCta: 'cta.services.clarityscan.t3.hero.discovery',
          }}
          secondaryCta={{
            to: '/services/clarityscan/diagnostic',
            label: 'Ver Nivel 2 Diagnóstico',
            dataCta: 'cta.services.clarityscan.t3.hero.see_t2',
          }}
          ctaNote="El Nivel 3 es un engagement de varias semanas. El alcance y el listón de evidencia se definen en una llamada de descubrimiento."
        />

        {/* What Tier 3 delivers */}
        <section className="section" id="tier-3-deliverables" aria-labelledby="tier-3-deliverables-title">
          <h2 id="tier-3-deliverables-title">Qué entrega el Nivel 3</h2>
          <p className="sectionLead">
            Cuatro artefactos sobre el conjunto de entregables del Nivel 2. Los valores que ves son ilustrativos; las
            puntuaciones reales del engagement están respaldadas por evidencia.
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
              <h3>Radar respaldado por evidencia</h3>
              <Radar
                ariaLabel="Ejemplo de radar de dominios del Nivel 3 con línea base respaldada por evidencia y superposición de objetivo"
                title="Línea base documentada vs objetivo"
                domains={[
                  { name: 'Evidencia', score: 50 },
                  { name: 'Lógica de decisión', score: 65 },
                  { name: 'Cultura', score: 40 },
                  { name: 'Iteración', score: 55 },
                  { name: 'Sistémico / IA', score: 45 },
                ]}
                target={[75, 75, 70, 75, 75]}
                caption="Puntuaciones respaldadas por evidencia. Cada dominio tiene artefactos documentados. Salida de ejemplo."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Escalera de madurez con objetivo</h3>
              <MaturityLadder
                ariaLabel="Ejemplo de escalera de madurez del Nivel 3 con peldaño actual 2 y peldaño objetivo 4"
                title="Progresión por fase"
                current={2}
                target={4}
                rungs={[
                  { label: 'Fundamentos', description: 'Línea base de gobernanza, cadencia operativa y disciplina de evidencia instaladas.' },
                  { label: 'Descubrimiento estructurado', description: 'Encuadre repetible y pruebas de supuestos; primer punto de control de fase superado.' },
                  { label: 'Eficiencia', description: 'Proceso, automatización, controles de calidad y riesgo/cumplimiento integrados.' },
                  { label: 'Escalado', description: 'Infraestructura, alianzas y sistema operativo de crecimiento en su lugar.' },
                  { label: 'Mejora continua', description: 'Prospectiva, resiliencia y aprendizaje institucional se acumulan.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Posicionamiento de ejemplo. Cada peldaño tiene criterios de evidencia documentados.
              </p>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ color: 'var(--dl-green, #10B981)' }}>Medidor de preparación por fase</h3>
              <EvidenceMeter
                ariaLabel="Ejemplo de medidor de preparación por fase del Nivel 3 en 72 de 100"
                score={72}
                label="Preparación de Fase 2 a Fase 3, ejemplo"
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Los puntos de control de preparación por fase se abren al 75 por ciento de calidad de evidencia.
              </p>
            </div>

            {/*
              VP-NEW-004 follow-up: Roadmap component's internal layout collapses to one-char-per-line
              when its parent cell is narrower than ~500px. Forcing this item to span the full grid row
              (gridColumn: 1 / -1) gives Roadmap the full container width. The root fix belongs in
              src/components/imm/Roadmap (make it intrinsically responsive); flagged for follow-up.
            */}
            <div style={{ gridColumn: '1 / -1' }}>
              <h3 style={{ color: 'var(--dl-amber, #F59E0B)' }}>Cascada de preparación por fase</h3>
              <Roadmap
                ariaLabel="Ejemplo de cascada del Nivel 3 a lo largo de las cinco fases de IMM-P"
                horizons={[
                  {
                    range: 'Fase 01',
                    label: 'Fundamentos',
                    body: 'Criterios del punto de control: roles de gobernanza nombrados; cadencia instalada; OKR/KPI definidos; lista corta de pilotos aprobada.',
                    state: 'now',
                  },
                  {
                    range: 'Fase 02',
                    label: 'Descubrimiento estructurado',
                    body: 'Criterios del punto de control: síntesis de investigación; propuesta de valor validada; resultados de experimentos; memo de decisión problema/solución.',
                    state: 'now',
                  },
                  {
                    range: 'Fase 03',
                    label: 'Eficiencia',
                    body: 'Criterios del punto de control: auditoría de procesos; plan de automatización; plan QA/riesgo; tableros; memo de decisión de expansión.',
                    state: 'next',
                  },
                  {
                    range: 'Fase 04',
                    label: 'Escalado',
                    body: 'Criterios del punto de control: plan de escalado; mapa de socios; sistema de KPI de crecimiento; modelo financiero; memo de decisión de escala.',
                    state: 'next',
                  },
                  {
                    range: 'Fase 05',
                    label: 'Mejora continua',
                    body: 'Criterios del punto de control: insumos de prospectiva; medidas de impacto; plan de resiliencia; hoja de ruta de largo plazo; memo de revisión operativa.',
                    state: 'later',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Who Tier 3 is for */}
        <section className="section" id="who-t3" aria-labelledby="who-t3-title">
          <h2 id="who-t3-title">Para quién es el Nivel 3</h2>
          <div className="cardGrid">
            <article className="card">
              <Building2 className="cardIcon" aria-hidden="true" />
              <h3>Finanzas reguladas</h3>
              <p>Bancos, aseguradoras y gestores de activos que llevan adelante transformaciones plurianuales bajo escrutinio del regulador.</p>
            </article>
            <article className="card">
              <Landmark className="cardIcon" aria-hidden="true" />
              <h3>Transformación digital del sector público</h3>
              <p>Ministerios y agencias que traducen la política en entrega de servicios digitales con gobernanza auditable.</p>
            </article>
            <article className="card">
              <Globe2 className="cardIcon" aria-hidden="true" />
              <h3>Programas multilaterales</h3>
              <p>Bancos de desarrollo y programas internacionales que necesitan reportes de madurez con grado de evidencia entre cohortes.</p>
            </article>
          </div>
        </section>

        {/* What an audit-grade dossier contains */}
        <section className="section" id="dossier" aria-labelledby="dossier-title">
          <h2 id="dossier-title">Qué contiene un dossier con grado de auditoría</h2>
          <ul>
            <li><strong>Paquete de evidencia por dominio:</strong> artefactos, transcripciones de entrevistas, práctica observada, justificación de la puntuación.</li>
            <li><strong>Bitácora de decisiones:</strong> cada decisión de punto de control, sus criterios, la evidencia utilizada y el disenso registrado.</li>
            <li><strong>Registro de riesgos:</strong> riesgos identificados, responsables, mitigaciones y cadencia de revisión.</li>
            <li><strong>Especificación del modelo de gobernanza:</strong> roles, derechos de decisión, intake, escalamiento y criterios de los puntos de control.</li>
            <li><strong>Scorecard de preparación por fase:</strong> preparación por fase frente al modelo de 5 fases del IMM, listo para alimentar un engagement IMM-P®.</li>
            <li><strong>Hoja de ruta plurianual:</strong> iniciativas secuenciadas a lo largo de las fases, con resultados medibles y responsables.</li>
          </ul>
        </section>

        {/* How Tier 3 works */}
        <section className="section" id="how-t3" aria-labelledby="how-t3-title">
          <h2 id="how-t3-title">Cómo funciona el Nivel 3</h2>
          <div className="cardGrid">
            <article className="card">
              <Compass className="cardIcon" aria-hidden="true" />
              <h3>1. Alcance</h3>
              <p>Define el alcance de la auditoría, el listón de evidencia, la postura ante el regulador y los responsables de decisión.</p>
            </article>
            <article className="card">
              <Microscope className="cardIcon" aria-hidden="true" />
              <h3>2. Recolección de evidencia</h3>
              <p>Reúne artefactos, realiza entrevistas, observa la práctica y documenta la justificación de la puntuación.</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>3. Puntúa con evidencia</h3>
              <p>Cada puntuación de dominio está vinculada a artefactos documentados. Se preserva la trazabilidad para la persona revisora.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>4. Preparación por fase</h3>
              <p>Corre el medidor de preparación contra cada fase. Abre los puntos de control donde la evidencia lo respalda.</p>
            </article>
            <article className="card">
              <Archive className="cardIcon" aria-hidden="true" />
              <h3>5. Dossier</h3>
              <p>Entrega el dossier de grado gobernanza y recórrelo con el liderazgo y con auditoría.</p>
            </article>
          </div>
        </section>

        {/* Compliance posture */}
        <section className="section" id="compliance" aria-labelledby="compliance-title">
          <h2 id="compliance-title">Postura de cumplimiento</h2>
          <p>
            El Nivel 3 está diseñado para resistir la auditoría interna, la revisión del regulador y los ciclos de
            aprendizaje institucional. El engagement produce los artefactos que un auditor o revisor espera: una base
            de evidencia documentada, una bitácora de decisiones con justificación y disenso, un registro de riesgos
            con responsables y una especificación del modelo de gobernanza que se ata a tu modelo operativo.
          </p>
          <p className="microcopy">
            No hacemos afirmaciones sobre certificaciones específicas. Sí diseñamos el dossier para que sea defendible
            dentro de una conversación de auditoría.
          </p>
        </section>

        {/* Cross-links */}
        <section className="section" id="t3-links" aria-labelledby="t3-links-title">
          <h2 id="t3-links-title">Compara entre niveles</h2>
          <div className="cardGrid">
            <article className="card">
              <FileText className="cardIcon" aria-hidden="true" />
              <h3>Nivel 1: Snapshot</h3>
              <p>Una sola persona respondiente, puntuación cualitativa, PDF de una página. CHF 150, pago en línea.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/clarityscan" data-cta="cta.services.clarityscan.t3.see_t1">
                  Ver Nivel 1 →
                </Link>
              </div>
            </article>
            <article className="card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3>Nivel 2: Diagnóstico</h3>
              <p>Cohortes segmentadas por rol, evaluación puntuada, hoja de ruta de 90 días. Por alcance.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/clarityscan/diagnostic" data-cta="cta.services.clarityscan.t3.see_t2">
                  Ver Nivel 2 →
                </Link>
              </div>
            </article>
            <article className="card">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3>Nivel 3: Auditoría (esta página)</h3>
              <p>Puntuación respaldada por evidencia, puntos de control de preparación por fase, dossier de grado gobernanza.</p>
              <div className="cardFooter">
                <Link className="cardCta" to="/services/innovation-maturity" data-cta="cta.services.clarityscan.t3.see_imm">
                  Ver programa IMM-P® →
                </Link>
              </div>
            </article>
          </div>
        </section>

        <FinalCta
          id="clarityscan-t3-final"
          ariaLabelledbyId="clarityscan-t3-final-title"
          title="Define el alcance de un engagement Nivel 3 Auditoría"
          body="Una llamada de descubrimiento de 20 minutos cubre alcance, listón de evidencia, postura ante el regulador y forma del dossier. Lo dimensionamos a partir de ahí."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Agenda una llamada de descubrimiento',
            dataCta: 'cta.services.clarityscan.t3.final.discovery',
          }}
          secondaryCta={{
            to: '/services/clarityscan/diagnostic',
            label: 'O compara con el Nivel 2',
            dataCta: 'cta.services.clarityscan.t3.final.see_t2',
          }}
          ctaNote="El precio del Nivel 3 se basa en alcance. Lo dimensionamos en la llamada."
        />
      </main>
    </Layout>
  );
}
