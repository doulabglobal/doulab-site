// src/pages/services/coaching-mentoring.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons (tree-shaken)
import Users from 'lucide-react/dist/esm/icons/users';
import Briefcase from 'lucide-react/dist/esm/icons/briefcase';
import Target from 'lucide-react/dist/esm/icons/target';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Clock from 'lucide-react/dist/esm/icons/clock';
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Workflow from 'lucide-react/dist/esm/icons/workflow';

import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';
import CaseStudyCards from '@site/src/components/case-studies/CaseStudyCards';

export default function CoachingMentoringPage(): ReactNode {
  // JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Coaching y Mentoría',
    serviceType: 'Coaching ejecutivo y de equipos para innovación',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/coaching-mentoring',
    description:
      'Guía personalizada para líderes y equipos para convertir la estrategia en ejecución y construir innovación repetible usando MCF v2.2 e IMM-P®.',
    areaServed: ['Global'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Hacen coaching a líderes individuales y a equipos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Ofrecemos coaching ejecutivo 1:1 y sesiones en grupos pequeños para equipos de liderazgo.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Hay un compromiso mínimo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La mayoría de los retainers corren trimestralmente. Podemos pilotear una intervención de un mes si es útil.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo medimos el progreso?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Co-definimos resultados y métricas ligeras, y luego revisamos el momentum y los bloqueos en cada sesión.',
        },
      },
    ],
  };

  return (
    <Layout
      title="Coaching y Mentoría: Guía práctica, momentum real"
      description="Coaching 1:1 y de equipos para convertir la estrategia en ejecución, construir innovación repetible y moverse más rápido con menos riesgo."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/coaching-mentoring" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-coaching.jpg" />
        <meta property="og:image:alt" content="Doulab: Coaching y Mentoría" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload (shared Hero uses this base) */}
        <link
          rel="preload"
          as="image"
          href="/img/services-hero.png"
          imageSrcSet="/img/services-hero.avif 1x, /img/services-hero.webp 1x, /img/services-hero.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Coaching y Mentoría"
          subtitle="Guía práctica. Momentum real."
          body="Coaching 1:1 y de equipos que ayuda a líderes a convertir la estrategia en ejecución, construir innovación repetible y navegar el cambio con claridad, anclado en MicroCanvas® v2.2 e IMM-P®."
          imageBase="/img/services-hero"
          imageAlt="Coaching y mentoría: panorama de servicios"
          width={1600}
          height={900}
          primaryCta={{
            to: 'https://booking.doulab.net/discovery',
            label: 'Agenda una llamada introductoria',
            dataCta: 'cta.services.coaching.hero.discovery',
          }}
          secondaryCta={{
            to: '/services/clarityscan',
            label: 'Empieza con un diagnóstico',
            dataCta: 'cta.services.coaching.hero.clarityscan',
          }}
          ctaNote="Llamada de descubrimiento de 20 min. Confirmamos alcance y ritmo en 2 días hábiles."
        />

        {/* Who is it for? (standardized audience tiles) */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">¿Para quién es?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>De idea a evidencia a ajuste, más rápido. Puntos de control claros y foco.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Instituciones públicas</h3>
              <p>Construye capacidad y transparencia con coaching de evidencia primero.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Organizaciones privadas</h3>
              <p>Empresas establecidas que aceleran la entrega de innovación interna.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubadoras y aceleradoras</h3>
              <p>Eleva la calidad de cohortes con playbooks reutilizables y puntos de control de decisión claros.</p>
            </article>
          </div>
        </section>

        {/* Retainers */}
        <section className="section" id="retainers" aria-labelledby="retainers-title">
          <h2 id="retainers-title">Opciones de retainer</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cm-lite">
              <Briefcase className="cardIcon" aria-hidden="true" />
              <h3 id="cm-lite">Retainer Lite</h3>
              <p>Apoyo enfocado para una sola iniciativa o meta de liderazgo.</p>
              <ul>
                <li><strong>2 horas en vivo</strong> / mes</li>
                <li><strong>1 hora asíncrona</strong> / mes</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.services.coaching.retainer.lite">
                  Consultar por Lite →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="cm-standard">
              <Calendar className="cardIcon" aria-hidden="true" />
              <h3 id="cm-standard">Retainer Standard</h3>
              <p>Guía constante para apoyo estratégico mensual y momentum.</p>
              <ul>
                <li><strong>4 horas en vivo</strong> / mes</li>
                <li><strong>2 horas asíncronas</strong> / mes</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.services.coaching.retainer.standard">
                  Consultar por Standard →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="cm-pro">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3 id="cm-pro">Retainer Pro</h3>
              <p>Mentoría de alto compromiso para trabajo estratégico profundo y soporte prioritario.</p>
              <ul>
                <li><strong>6 horas en vivo</strong> / mes</li>
                <li><strong>3 horas asíncronas</strong> / mes</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.services.coaching.retainer.pro">
                  Consultar por Pro →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="cm-enterprise">
              <Sparkles className="cardIcon" aria-hidden="true" />
              <h3 id="cm-enterprise">Retainer Enterprise</h3>
              <p>Mentoría ejecutiva para líderes a través de múltiples iniciativas.</p>
              <ul>
                <li><strong>8 horas en vivo</strong> / mes</li>
                <li><strong>4 horas asíncronas</strong> / mes</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="https://booking.doulab.net/discovery" data-cta="cta.services.coaching.retainer.enterprise">
                  Consultar por Enterprise →
                </Link>
              </div>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__leadTop'}`}>
            <em>Mensual; cancela en cualquier momento con 15 días de aviso.</em>
          </p>
        </section>

        {/* Outcomes */}
        <section className="section" id="outcomes" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Qué obtendrás</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cm-clarity">
              <MessageSquare className="cardIcon" aria-hidden="true" />
              <h3 id="cm-clarity">Claridad y foco</h3>
              <p>Prioridades más nítidas y decisiones más rápidas con confianza.</p>
              <ul>
                <li>OKRs más limpios</li>
                <li>Cadencia de decisión</li>
              </ul>
            </article>

            <article className="card" aria-labelledby="cm-methods">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="cm-methods">Métodos repetibles</h3>
              <p>Playbooks MCF v2.2 + IMM-P® que puedes reutilizar a través de equipos e iniciativas.</p>
              <ul>
                <li>Canvases reutilizables</li>
                <li>Ciclos de evidencia primero</li>
              </ul>
            </article>

            <article className="card" aria-labelledby="cm-time">
              <Clock className="cardIcon" aria-hidden="true" />
              <h3 id="cm-time">Momentum</h3>
              <p>Muévete más rápido con una cadencia constante y dueños claros.</p>
              <ul>
                <li>Sesiones de 30/45/60 minutos</li>
                <li>Revisiones asíncronas ligeras</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Related case studies — shared component (canonical order) */}
        <section className="section" id="related" aria-labelledby="related-title">
          <h2 id="related-title">Casos de estudio relacionados</h2>
          <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
        </section>

        {/* FAQ (content mirrors JSON-LD) */}
        <section className="section" id="faq" aria-labelledby="cm-faq-title">
          <h2 id="cm-faq-title">Preguntas frecuentes</h2>
          <div className="faqGrid">
            <details>
              <summary>¿Hacen coaching a líderes individuales y a equipos?</summary>
              <p>Sí. Ofrecemos coaching ejecutivo 1:1 y sesiones en grupos pequeños para equipos de liderazgo.</p>
            </details>
            <details>
              <summary>¿Hay un compromiso mínimo?</summary>
              <p>La mayoría de los retainers corren trimestralmente. Podemos pilotear una intervención de un mes si es útil.</p>
            </details>
            <details>
              <summary>¿Cómo medimos el progreso?</summary>
              <p>Co-definimos resultados y métricas ligeras, y luego revisamos el momentum y los bloqueos en cada sesión.</p>
            </details>
          </div>
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="coaching-final"
          ariaLabelledbyId="coaching-final-title"
          title="¿Listo para crecer con guía?"
          body="Cuéntanos tus metas y restricciones. Recomendaremos el retainer que se ajuste y empezaremos a avanzar rápido."
          primaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Agenda una llamada introductoria', dataCta: 'cta.services.coaching.final.discovery' }}
          secondaryCta={{ href: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda un ClarityScan® en línea', dataCta: 'cta.services.coaching.final.book_clarityscan_booking', newTab: true }}
          ctaNote="Elige un espacio de descubrimiento de 20 min. Sin preparación requerida."
        />
      </main>
    </Layout>
  );
}
