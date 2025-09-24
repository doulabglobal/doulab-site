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

import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import CaseStudyCards from '../../components/case-studies/CaseStudyCards';

export default function CoachingMentoringPage(): ReactNode {
  // JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Coaching & Mentoring',
    serviceType: 'Executive and team coaching for innovation',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/coaching-mentoring',
    description:
      'Personalized guidance for leaders and teams to turn strategy into execution and build repeatable innovation using MCF v2.1 and IMM-P®.',
    areaServed: ['Global'],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do you coach individual leaders and teams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We offer 1:1 executive coaching and small-group sessions for leadership teams.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a minimum commitment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most retainers run quarterly. We can pilot a one-month engagement if helpful.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do we measure progress?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We co-define outcomes and light metrics, then review momentum and blockers each session.',
        },
      },
    ],
  };

  return (
    <Layout
      title="Coaching & Mentoring — Practical guidance, real momentum | Doulab"
      description="1:1 and team coaching to turn strategy into execution, build repeatable innovation, and move faster with less risk."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/coaching-mentoring" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-coaching.jpg" />
        <meta property="og:image:alt" content="Doulab — Coaching & Mentoring" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload (shared Hero uses this base) */}
        <link
          rel="preload"
          as="image"
          href="/img/services-hero.jpg"
          imageSrcSet="/img/services-hero.avif 1x, /img/services-hero.webp 1x, /img/services-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Coaching & Mentoring"
          subtitle="Practical guidance. Real momentum."
          body="1:1 and team coaching that helps leaders turn strategy into execution, build repeatable innovation, and navigate change with clarity — grounded in MicroCanvas® v2.1 and IMM-P®."
          imageBase="/img/services-hero"
          imageAlt="Coaching & mentoring — services overview"
          width={1600}
          height={900}
          primaryCta={{
            to: '/contact',
            label: 'Book an intro call',
            dataCta: 'cta.services.coaching.hero.contact',
          }}
          secondaryCta={{
            to: '/services/clarityscan',
            label: 'Start with a diagnostic',
            dataCta: 'cta.services.coaching.hero.clarityscan',
          }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
          eager
        />

        {/* Who is it for? (standardized audience tiles) */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Who is it for?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>From idea to evidence to fit—faster. Clear gates and focus.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Public Institutions</h3>
              <p>Build capability and transparency with evidence-first coaching.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Private organizations</h3>
              <p>Established companies accelerating internal innovation delivery.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubators & Accelerators</h3>
              <p>Raise cohort quality with reusable playbooks and clear decision gates.</p>
            </article>
          </div>
        </section>

        {/* Retainers */}
        <section className="section" id="retainers" aria-labelledby="retainers-title">
          <h2 id="retainers-title">Retainer options</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cm-lite">
              <Briefcase className="cardIcon" aria-hidden="true" />
              <h3 id="cm-lite">Lite Retainer</h3>
              <p>Focused support for a single initiative or leadership goal.</p>
              <ul>
                <li><strong>2 live hours</strong> / month</li>
                <li><strong>1 async hour</strong> / month</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.lite">
                  Enquire about Lite →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="cm-standard">
              <Calendar className="cardIcon" aria-hidden="true" />
              <h3 id="cm-standard">Standard Retainer</h3>
              <p>Steady guidance for monthly strategic support and momentum.</p>
              <ul>
                <li><strong>4 live hours</strong> / month</li>
                <li><strong>2 async hours</strong> / month</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.standard">
                  Enquire about Standard →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="cm-pro">
              <ShieldCheck className="cardIcon" aria-hidden="true" />
              <h3 id="cm-pro">Pro Retainer</h3>
              <p>High-engagement mentoring for deep strategic work and priority support.</p>
              <ul>
                <li><strong>6 live hours</strong> / month</li>
                <li><strong>3 async hours</strong> / month</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.pro">
                  Enquire about Pro →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="cm-enterprise">
              <Sparkles className="cardIcon" aria-hidden="true" />
              <h3 id="cm-enterprise">Enterprise Retainer</h3>
              <p>Executive mentoring for leaders across multiple initiatives.</p>
              <ul>
                <li><strong>8 live hours</strong> / month</li>
                <li><strong>4 async hours</strong> / month</li>
              </ul>
              <div className="cardFooter">
                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.enterprise">
                  Enquire about Enterprise →
                </Link>
              </div>
            </article>
          </div>
          <p className="microcopy" style={{ marginTop: '.75rem' }}>
            <em>Monthly; cancel anytime with 15-day notice.</em>
          </p>
        </section>

        {/* Outcomes */}
        <section className="section" id="outcomes" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">What you’ll get</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cm-clarity">
              <MessageSquare className="cardIcon" aria-hidden="true" />
              <h3 id="cm-clarity">Clarity & focus</h3>
              <p>Sharper priorities and faster decisions with confidence.</p>
              <ul>
                <li>Cleaner OKRs</li>
                <li>Decision cadence</li>
              </ul>
            </article>

            <article className="card" aria-labelledby="cm-methods">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="cm-methods">Repeatable methods</h3>
              <p>MCF v2.1 + IMM-P® playbooks you can reuse across teams and initiatives.</p>
              <ul>
                <li>Reusable canvases</li>
                <li>Evidence-first loops</li>
              </ul>
            </article>

            <article className="card" aria-labelledby="cm-time">
              <Clock className="cardIcon" aria-hidden="true" />
              <h3 id="cm-time">Momentum</h3>
              <p>Move faster with a steady cadence and clear owners.</p>
              <ul>
                <li>30/45/60-minute sessions</li>
                <li>Light async reviews</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Related case studies — shared component (canonical order) */}
        <section className="section" id="related" aria-labelledby="related-title">
          <h2 id="related-title">Related case studies</h2>
          <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
        </section>

        {/* FAQ (content mirrors JSON-LD) */}
        <section className="section" id="faq" aria-labelledby="cm-faq-title">
          <h2 id="cm-faq-title">FAQ</h2>
          <div className="faqGrid">
            <details>
              <summary>Do you coach individual leaders and teams?</summary>
              <p>Yes. We offer 1:1 executive coaching and small-group sessions for leadership teams.</p>
            </details>
            <details>
              <summary>Is there a minimum commitment?</summary>
              <p>Most retainers run quarterly. We can pilot a one-month engagement if helpful.</p>
            </details>
            <details>
              <summary>How do we measure progress?</summary>
              <p>We co-define outcomes and light metrics, then review momentum and blockers each session.</p>
            </details>
          </div>
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="coaching-final"
          ariaLabelledbyId="coaching-final-title"
          title="Ready to grow with guidance?"
          body="Tell us your goals and constraints. We’ll recommend the retainer that fits and start making progress fast."
          primaryCta={{ to: '/contact', label: 'Book an intro call', dataCta: 'cta.services.coaching.final.contact' }}
          secondaryCta={{ href: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.services.coaching.final.book_clarityscan_booking', newTab: true }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />
      </main>
    </Layout>
  );
}
