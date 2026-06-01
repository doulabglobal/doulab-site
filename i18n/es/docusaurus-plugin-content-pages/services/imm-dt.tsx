// src/pages/services/imm-dt.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import Pillars from '@site/src/components/imm/Pillars';
import Roadmap from '@site/src/components/imm/Roadmap';
import Radar from '@site/src/components/imm/Radar';
import MaturityLadder from '@site/src/components/imm/MaturityLadder';
import EvidenceMeter from '@site/src/components/imm/EvidenceMeter';
import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';

import Settings2 from 'lucide-react/dist/esm/icons/settings-2';
import Target from 'lucide-react/dist/esm/icons/target';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Cpu from 'lucide-react/dist/esm/icons/cpu';
import Layers from 'lucide-react/dist/esm/icons/layers';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';

export default function IMMDTPage(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'IMM-DT: Madurez en Transformación Digital',
    serviceType: 'Diagnóstico y Hoja de Ruta de Transformación Digital',
    provider: { '@type': 'Organization', name: 'Doulab', url: localizedUrl('/') },
    url: localizedUrl('/services/imm-dt'),
    areaServed: ['Latinoamérica', 'Caribe', 'Global'],
    description:
      'La vertical de transformación digital de IMM. Establece la línea base de madurez de TD a través de estrategia, proceso, cultura, tecnología y gobernanza; secuencia una hoja de ruta de 0 a 36 meses con puntos de control respaldados por evidencia. Entregada a través del programa IMM-P®.',
  };

  return (
    <Layout
      title="IMM-DT: Madurez en Transformación Digital"
      description="IMM-DT es la vertical de transformación digital de IMM, entregada a través del programa IMM-P®. Establece la línea base de madurez de TD a través de estrategia, proceso, cultura, tecnología y gobernanza; secuencia una hoja de ruta de 0 a 36 meses con puntos de control respaldados por evidencia."
    >
      <PageMetadata slug="/services/imm-dt" />
      <Head>
        <meta property="og:title" content="IMM-DT: Madurez en Transformación Digital" />
        <meta
          property="og:description"
          content="La vertical de transformación digital de IMM, entregada a través del programa IMM-P®. Establece la línea base de madurez, prioriza brechas, secuencia una hoja de ruta de 0 a 36 meses."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        <Hero
          title="IMM-DT"
          subtitle="La vertical de transformación digital de IMM."
          body="IMM-DT extiende el Modelo de Madurez en Innovación (IMM 2.2) al dominio de la transformación digital. Las intervenciones toman la forma del programa IMM-P® con la capa vertical IMM-DT. Establecemos la línea base de madurez de TD a través de estrategia, proceso, cultura, tecnología y gobernanza; comparamos contra pares regionales; y secuenciamos una hoja de ruta por fases de 0 a 36 meses con puntos de control de preparación respaldados por evidencia. Actualmente en piloto con un socio de finanzas regulado en la República Dominicana."
          imageBase="/img/services-hero"
          imageAlt="IMM-DT: Madurez en Transformación Digital"
          width={600}
          height={400}
          primaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Conversemos sobre IMM-DT', dataCta: 'cta.services.imm-dt.hero.contact' }}
          secondaryCta={{ to: '/services/innovation-maturity', label: 'Ver IMM-P® (programa paraguas)', dataCta: 'cta.services.imm-dt.hero.imm-p' }}
          ctaNote="Construido sobre MicroCanvas® v2.2 + IMM 2.2 (puntuación de dominios, preparación por fase, puntos de control de evidencia)."
        />

        {/* What IMM-DT measures */}
        <section className="section" id="dimensions" aria-labelledby="dimensions-title">
          <h2 id="dimensions-title">Qué mide IMM-DT</h2>
          <p className="sectionLead">
            Cinco dominios, puntuados contra el modelo de madurez IMM 2.2, aplicados al espacio del problema de transformación digital.
          </p>
          <Pillars
            ariaLabel="Dominios de medición de IMM-DT"
            foundationLabel="Modelo de madurez IMM 2.2"
            pillars={[
              {
                icon: <Target aria-hidden="true" />,
                title: 'Estrategia',
                body: 'Tesis de TD, claridad de cliente y modelo de negocio, decisiones de portafolio y el vínculo entre estrategia e iniciativas financiadas.',
                accent: 'indigo',
              },
              {
                icon: <Workflow aria-hidden="true" />,
                title: 'Proceso',
                body: 'Cadencia de entrega, puntos de control de decisión, ciclos de evidencia y cómo la organización mueve el trabajo de la intención al resultado.',
                accent: 'slate',
              },
              {
                icon: <Users aria-hidden="true" />,
                title: 'Cultura',
                body: 'Comportamientos e incentivos que apoyan la toma de decisiones basada en evidencia, el aprendizaje y la toma de riesgo responsable.',
                accent: 'purple',
              },
              {
                icon: <Cpu aria-hidden="true" />,
                title: 'Tecnología',
                body: 'Arquitectura, datos, plataformas y preparación técnica para ejecutar y escalar la transformación de forma segura.',
                accent: 'green',
              },
              {
                icon: <ShieldCheck aria-hidden="true" />,
                title: 'Gobernanza',
                body: 'Roles, derechos de decisión, postura de riesgo y cumplimiento, y el aprendizaje institucional que se acumula a través de cohortes.',
                accent: 'amber',
              },
            ]}
          />
        </section>

        {/* What an IMM-DT engagement produces */}
        <section className="section" id="deliverables" aria-labelledby="deliverables-title">
          <h2 id="deliverables-title">Qué produce una intervención IMM-DT</h2>
          <p className="sectionLead">
            Un breve recorrido por los artefactos que el programa IMM-P® produce cuando se entrega como IMM-DT. Los valores a continuación son
            ilustrativos, no puntuaciones reales de clientes.
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
                ariaLabel="Radar de dominios IMM-DT de ejemplo con cinco ejes y una superposición objetivo"
                title="Instantánea de madurez de TD en cinco dominios"
                domains={[
                  { name: 'Estrategia', score: 55 },
                  { name: 'Proceso', score: 40 },
                  { name: 'Cultura', score: 60 },
                  { name: 'Tecnología', score: 50 },
                  { name: 'Gobernanza', score: 45 },
                ]}
                target={[75, 70, 75, 75, 70]}
                caption="Salida de ejemplo. Las puntuaciones de una intervención real están respaldadas por evidencia."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Escalera de madurez</h3>
              <MaturityLadder
                ariaLabel="Escalera de madurez de TD de ejemplo con peldaño actual 2 y peldaño objetivo 4"
                title="Progresión de madurez de TD"
                current={2}
                target={4}
                rungs={[
                  { label: 'Operaciones manuales', description: 'Trabajo basado en papel u hojas de cálculo; poco soporte de sistemas.' },
                  { label: 'Flujos digitalizados', description: 'Flujos centrales digitalizados en sistemas de línea de negocio.' },
                  { label: 'Plataformas conectadas', description: 'Sistemas integrados; los datos fluyen a través de la cadena de valor.' },
                  { label: 'Decisiones basadas en datos', description: 'Decisiones respaldadas por datos confiables y métricas compartidas.' },
                  { label: 'Transformación continua', description: 'El aprendizaje institucional se acumula; el modelo operativo se adapta.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Progresión de ejemplo. Te encontramos en tu peldaño actual y secuenciamos el ascenso.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-green, #10B981)' }}>Punto de control de preparación por fase</h3>
              <EvidenceMeter
                ariaLabel="Medidor de preparación por fase de ejemplo en 68 sobre 100"
                score={68}
                label="Preparación de Fase 2 a Fase 3, ejemplo"
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                El punto de control se abre al 75 por ciento de calidad de evidencia.
              </p>
            </div>
          </div>
        </section>

        {/* The IMM-DT roadmap */}
        <section className="section" id="roadmap" aria-labelledby="roadmap-title">
          <Roadmap
            title="La hoja de ruta IMM-DT"
            horizons={[
              {
                range: '0 a 3 meses',
                label: 'Línea base',
                body: 'Diagnóstico de arranque, modelo de madurez calibrado, cohortes nombradas.',
                state: 'now',
              },
              {
                range: '3 a 6 meses',
                label: 'Primeros logros',
                body: 'Jugadas de logros rápidos en los dominios de menor madurez; primer punto de control de preparación por fase.',
                state: 'now',
              },
              {
                range: '6 a 9 meses',
                label: 'Anclaje de proceso',
                body: 'Cadencia de decisión y ciclos de evidencia integrados en los equipos de entrega.',
                state: 'next',
              },
              {
                range: '9 a 12 meses',
                label: 'Progresión de cohorte',
                body: 'Segunda evaluación de dominios, actualización del benchmark, segundo punto de control.',
                state: 'next',
              },
              {
                range: '12 a 24 meses',
                label: 'Escalar y gobernar',
                body: 'Despliegue entre dominios, madurez de gobernanza, tercer punto de control.',
                state: 'later',
              },
              {
                range: '24 a 36 meses',
                label: 'Acumulación',
                body: 'Aprendizaje institucional, madurez de cara al regulador, dosieres de evidencia.',
                state: 'later',
              },
            ]}
          />
        </section>

        {/* How IMM-DT delivers */}
        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">Cómo entrega IMM-DT</h2>
          <div className="cardGrid">
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>1. Diagnóstico de arranque</h3>
              <p>Definir alcance, respondientes y la barra de evidencia. Calibrar el modelo de madurez a la tesis de TD de la organización.</p>
            </article>
            <article className="card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3>2. Evaluación de dominios</h3>
              <p>Puntuar cada dominio a través de cohortes de respondientes segmentadas por rol (directiva, mandos medios, operaciones). Donde la intervención lo requiere, cada puntuación está respaldada por evidencia.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>3. Benchmark</h3>
              <p>Comparar contra pares regionales (por ejemplo, conjunto de referencia fintech para servicios financieros) para hacer concreto lo que significa "bueno".</p>
            </article>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Para quién es IMM-DT</h2>
          <div className="cardGrid">
            <article className="card">
              <Settings2 className="cardIcon" aria-hidden="true" />
              <h3>Servicios financieros</h3>
              <p>Organizaciones reguladas que corren programas de TD plurianuales y necesitan una línea base de madurez lista para auditoría y una hoja de ruta secuenciada.</p>
            </article>
            <article className="card">
              <Settings2 className="cardIcon" aria-hidden="true" />
              <h3>TD en el sector público</h3>
              <p>Ministerios y agencias que traducen la intención de política en entrega de servicios digitales con ciclos de evidencia y gobernanza.</p>
            </article>
            <article className="card">
              <Settings2 className="cardIcon" aria-hidden="true" />
              <h3>Organizaciones medianas a grandes</h3>
              <p>Empresas que pasan de iniciativas digitales aisladas a un modelo operativo de transformación repetible y gobernado.</p>
            </article>
          </div>
        </section>

        {/* Pilot reference */}
        <section className="section" id="pilot" aria-labelledby="pilot-title">
          <h2 id="pilot-title">Referencia de piloto</h2>
          <p>
            IMM-DT está en producción temprana con <Link to="/case-studies/fundapec">FUNDAPEC</Link>, una intervención de transformación digital
            en la República Dominicana. El perfil de la intervención es representativo del trabajo: finanzas reguladas,
            duración de varios meses, cohortes multistakeholder de directiva, mandos medios y operaciones. El trabajo
            aplica MicroCanvas® v2.2 y el programa IMM-P® con el modelo de madurez IMM 2.2 a un diagnóstico de varios meses,
            benchmarking regional de fintech y una hoja de ruta por fases de 0 a 36 meses. Actualmente estamos extendiendo la plantilla a
            verticales adicionales.
          </p>
          <p className="microcopy">
            Para organizaciones que aún no están listas para una intervención IMM-DT completa, empieza con <Link to="/services/clarityscan">ClarityScan®</Link>
            {' '}Nivel 1 (CHF 150) para una lectura rápida sobre la madurez en innovación.
          </p>
        </section>

        {/* What IMM-DT does NOT do */}
        <section className="section" id="boundaries" aria-labelledby="boundaries-title">
          <h2 id="boundaries-title">Qué no hace IMM-DT</h2>
          <p>
            IMM-DT es un instrumento de medición y hoja de ruta. No es un reemplazo de la capacidad de ejecución. La intervención
            produce una línea base respaldada por evidencia, un benchmark, una hoja de ruta secuenciada y puntos de control de preparación por fase. Actuar sobre los
            hallazgos requiere un patrocinador con derechos de decisión y un equipo de entrega con la capacidad de entregar. IMM-DT no
            implementa sistemas centrales, ejecuta gestión del cambio ni reemplaza el liderazgo interno del programa. Donde esas necesidades surgen,
            las nombramos con claridad en la hoja de ruta y te ayudamos a definir el alcance de los socios correctos.
          </p>
        </section>

        <FinalCta
          id="imm-dt-final"
          ariaLabelledbyId="imm-dt-final-title"
          title="Ejecuta IMM-DT en tu transformación."
          body="Empieza con una llamada de descubrimiento. Definiremos el alcance del diagnóstico, el conjunto de benchmark y la barra de evidencia que se ajuste a tu programa de TD."
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Conversemos sobre IMM-DT',
            dataCta: 'cta.services.imm-dt.final.contact',
          }}
          secondaryCta={{ to: '/services/clarityscan', label: 'O empieza con ClarityScan® Nivel 1', dataCta: 'cta.services.imm-dt.final.clarityscan' }}
          ctaNote="Construido sobre MicroCanvas® v2.2 + IMM 2.2 (puntuación de dominios, preparación por fase, puntos de control de evidencia)."
        />
      </main>
    </Layout>
  );
}
