// src/pages/services/custom-workshops.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons (tree-shaken)
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';
import Users from 'lucide-react/dist/esm/icons/users';
import Target from 'lucide-react/dist/esm/icons/target';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import ClipboardList from 'lucide-react/dist/esm/icons/clipboard-list';

import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import CaseStudyCards from '@site/src/components/case-studies/CaseStudyCards';
import PageMetadata, { localizedUrl } from '@site/src/lib/pageMetadata';

export default function CustomWorkshopsPage(): ReactNode {
  // JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Talleres a medida',
    serviceType: 'Facilitación de talleres de innovación',
    provider: { '@type': 'Organization', name: 'Doulab', url: localizedUrl('/') },
    url: localizedUrl('/services/custom-workshops'),
    areaServed: ['Global'],
    description:
      'Sesiones orientadas a resultados para alinear equipos, decidir más rápido y crear momentum. Medio día o día completo, presencial o remoto. Medio día o día completo, presencial o remoto. Definimos el alcance en una llamada de descubrimiento de 20 min.',
  };

  return (
    <Layout
      title="Talleres a medida: Alinea decisiones y acelera resultados"
      description="Sesiones orientadas a resultados para alinear equipos, decidir más rápido y crear momentum. Formatos de medio día o día completo, presencial o remoto."
    >
      <PageMetadata slug="/services/custom-workshops" ogImage="/img/social/og-workshops.jpg" />
      <Head>
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image:alt" content="Doulab: Talleres a medida" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload (shared Hero uses this base) */}
        <link
          rel="preload"
          as="image"
          href="/img/workshops-hero.png"
          imageSrcSet="/img/workshops-hero.avif 1x, /img/workshops-hero.webp 1x, /img/workshops-hero.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Talleres a medida"
          subtitle="Alinea. Decide. Avanza."
          body="Talleres a medida que desbloquean decisiones y convierten la estrategia en acción, presencial o remoto."
          imageBase="/img/workshops-hero"
          imageAlt="Talleres de innovación a medida"
          width={1600}
          height={900}
          primaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Agenda un brief de taller', dataCta: 'cta.services.workshops.hero.discovery' }}
          secondaryCta={{ to: '/services', label: 'Ver nuestros servicios', dataCta: 'cta.services.workshops.hero.services' }}
          ctaNote="Construido sobre MicroCanvas® v2.2 y puntos de control de IMM-P®."
        />

        {/* Who is it for? (standardized audience tiles) */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">¿Para quién es?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>De idea a evidencia a ajuste, más rápido, con decisiones y dueños claros.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Instituciones públicas</h3>
              <p>Gobernanza transparente y construcción práctica de capacidad en una sola sesión.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Organizaciones privadas</h3>
              <p>Empresas establecidas que alinean equipos y aceleran la madurez de entrega.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubadoras y aceleradoras</h3>
              <p>Eleva la calidad de cohortes con métodos de evidencia primero y playbooks reutilizables.</p>
            </article>
          </div>
        </section>

        {/* Why run a workshop */}
        <section className="section" id="cw-why" aria-labelledby="cw-why-title">
          <h2 id="cw-why-title">Por qué realizar un taller</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-why-decisions">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-decisions">Decisiones, no reuniones</h3>
              <p>Toma las pocas decisiones que lo cambian todo.</p>
              <ul>
                <li>Dueños y cadencia claros</li>
                <li>Plan de una página</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="cw-why-alignment">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-alignment">Alineación de equipo</h3>
              <p>Obtén buy-in transversal y remueve bloqueos en una sola sesión.</p>
              <ul>
                <li>Encuadre compartido</li>
                <li>Compromisos y próximos pasos</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="cw-why-gtm">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-gtm">Go-to-Market</h3>
              <p>Encuadra clientes, ofertas y pruebas que reducen el riesgo del lanzamiento.</p>
              <ul>
                <li>Segmentos objetivo e hipótesis</li>
                <li>Métricas y señales del MVP</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Formats */}
        <section className="section customWorkshopsFormats" id="cw-formats" aria-labelledby="cw-formats-title">
          <h2 id="cw-formats-title">Formatos de taller</h2>
          <div className="cardGrid">
            {/* Half-day custom */}
            <article className="card" aria-labelledby="cw-format-halfday">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3 id="cw-format-halfday">Taller de innovación a medida (medio día)</h3>
              <p>
                Una sesión enfocada de <strong>3.5 horas</strong> construida sobre MicroCanvas o frameworks complementarios. Ideal para
                alineación rápida y un plan de logros rápidos.
              </p>
              <ul>
                <li>Entrega: presencial o remoto</li>
                <li>
                  Qué incluye: arranque y metas, instantánea de madurez y restricciones, mapa de priorización, decisiones y dueños,
                  plantilla 30/60/90
                </li>
              </ul>
              <p className="microcopy">El contenido por defecto puede personalizarse durante nuestra primera llamada de descubrimiento.</p>
              <p className="microcopy">Típicamente se agenda en 1 a 2 semanas.</p>
              <div className="cardFooter">
                <Link to="https://booking.doulab.net/discovery" className="cardCta" data-cta="cta.services.workshops.formats.halfday.brief">
                  Agenda un brief de medio día →
                </Link>
                <a
                  href="https://booking.doulab.net/hdworkshop"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="cta.services.workshops.formats.halfday.book"
                  aria-label="Agenda un taller de medio día vía Google Calendar"
                  className={`cardCta ${'pages-b4-p2__orderFirst'}`}
                >
                  Agenda un taller de medio día →
                </a>
              </div>
            </article>

            {/* Full-day custom */}
            <article className="card" aria-labelledby="cw-format-fullday">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3 id="cw-format-fullday">Taller de innovación a medida (día completo)</h3>
              <p>
                Una sesión más profunda de <strong>7 horas</strong> que pasa de descubrimiento a decisiones y próximos pasos. Incluye revisión
                de pre-trabajo y síntesis post-trabajo.
              </p>
              <ul>
                <li>Entrega: presencial o remoto</li>
                <li>
                  Qué incluye: descubrimiento a profundidad, mapeo de stakeholders y restricciones, hipótesis y experimentos,
                  mapa de priorización, tablero de acción, síntesis post-trabajo
                </li>
              </ul>
              <p className="microcopy">El contenido por defecto puede personalizarse durante nuestra primera llamada de descubrimiento.</p>
              <p className="microcopy">Típicamente se agenda en 1 a 2 semanas.</p>
              <div className="cardFooter">
                <Link to="https://booking.doulab.net/discovery" className="cardCta" data-cta="cta.services.workshops.formats.fullday.brief">
                  Agenda un brief de día completo →
                </Link>
                <Link
                  to="https://booking.doulab.net/fdworkshop"
                  className="cardCta"
                  data-cta="cta.services.workshops.formats.fullday.discovery"
                  aria-label="Agenda una llamada de descubrimiento para el taller de día completo"
                >
                  Agenda una llamada de descubrimiento
                </Link>
              </div>
            </article>

            {/* Innovation Readiness & Governance Workshop */}
            <article className="card" aria-labelledby="cw-format-innovation-readiness">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3 id="cw-format-innovation-readiness">Taller de Preparación y Gobernanza para la Innovación (8 horas)</h3>
              <p>
                Un viaje estructurado <strong>híbrido de 8 horas</strong> para equipos de innovación y estrategia, combinando prospectiva,
                MicroCanvas® 2.2, IMM-P® y gobernanza de las células de trabajo y equipos transversales para hacer la ejecución predecible y alineada.
              </p>
              <ul>
                <li>Formato: 4 horas presenciales (Día 1) + 4 horas en línea (Día 2)</li>
                <li>Foco: prospectiva, cultura, estructura, disciplina de ejecución y gobernanza de células de trabajo</li>
              </ul>
              <p className="microcopy">Totalmente digital, laptop por participante, con espacios de trabajo colaborativos y artefactos de seguimiento.</p>
              <div className="cardFooter">
                <Link
                  to="/services/innovation-readiness-workshop"
                  className="cardCta"
                  data-cta="cta.services.workshops.formats.innovation_readiness.view"
                  aria-label="Ver detalles del Taller de Preparación y Gobernanza para la Innovación"
                >
                  Ver detalles del taller →
                </Link>
                <Link
                  to="https://booking.doulab.net/discovery"
                  className="cardCta"
                  data-cta="cta.services.workshops.formats.innovation_readiness.brief"
                  aria-label="Agenda un brief para el Taller de Preparación y Gobernanza para la Innovación"
                >
                  Agenda un brief →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section" id="cw-outcomes" aria-labelledby="cw-outcomes-title">
          <h2 id="cw-outcomes-title">Con qué saldrás</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-outcome-decisions">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-decisions">Decisiones y dueños</h3>
              <p>Resúmenes listos para punto de control y un plan de una página con dueños claros.</p>
            </article>
            <article className="card" aria-labelledby="cw-outcome-evidence">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-evidence">Evidencia y experimentos</h3>
              <p>Pruebas rankeadas con señales, tiempos y criterios de éxito.</p>
            </article>
            <article className="card" aria-labelledby="cw-outcome-reuse">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-reuse">Artefactos reutilizables</h3>
              <p>Canvases y plantillas que puedes evolucionar y reutilizar.</p>
            </article>
          </div>
        </section>

        {/* Related case studies — shared component (canonical order) */}
        <section className="section" id="related" aria-labelledby="related-title">
          <h2 id="related-title">Casos de estudio relacionados</h2>
          <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="workshops-final"
          ariaLabelledbyId="workshops-final-title"
          title="¿Listo para alinear y avanzar?"
          body="Envíanos tus metas y restricciones. Diseñaremos el taller correcto y te pondremos en movimiento rápido."
          primaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Agenda un brief de taller', dataCta: 'cta.services.workshops.final.discovery' }}
          secondaryCta={{
            href: 'https://booking.doulab.net/hdworkshop',
            label: 'Agenda un taller de medio día',
            dataCta: 'cta.services.workshops.final.book_halfday_booking',
            newTab: true,
          }}
          ctaNote="Solo usamos analítica con privacidad primero."
        />
      </main>
    </Layout>
  );
}
