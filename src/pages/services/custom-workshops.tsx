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

import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import CaseStudyCards from '../../components/case-studies/CaseStudyCards';

export default function CustomWorkshopsPage(): ReactNode {
  // JSON-LD
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Workshops',
    serviceType: 'Innovation workshop facilitation',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/custom-workshops',
    areaServed: ['Global'],
    description:
      'Outcome-driven sessions to align teams, decide faster, and create momentum. Half-day or full-day, on-site or remote. Built on MicroCanvas® v2.1 and IMM-P® gates.',
  };

  return (
    <Layout
      title="Custom Workshops — Align decisions & accelerate outcomes | Doulab"
      description="Outcome-driven sessions to align teams, decide faster, and create momentum. Half-day or full-day formats, on-site or remote."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/custom-workshops" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-workshops.jpg" />
        <meta property="og:image:alt" content="Doulab — Custom Workshops" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload (shared Hero uses this base) */}
        <link
          rel="preload"
          as="image"
          href="/img/workshops-hero.jpg"
          imageSrcSet="/img/workshops-hero.avif 1x, /img/workshops-hero.webp 1x, /img/workshops-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Custom Workshops"
          subtitle="Align. Decide. Move."
          body="Tailored workshops that unblock decisions and turn strategy into action — on-site or remote."
          imageBase="/img/workshops-hero"
          imageAlt="Custom innovation workshops"
          width={1600}
          height={900}
          primaryCta={{ to: '/contact', label: 'Start a workshop brief', dataCta: 'cta.services.workshops.hero.contact' }}
          secondaryCta={{ to: '/what-we-do', label: 'See what we do', dataCta: 'cta.services.workshops.hero.services' }}
          ctaNote="Get your baseline in 15–20 minutes."
          eager
        />
      <div style={{ maxWidth: 'var(--ifm-container-width-xl)', margin: '0.25rem auto 0', padding: '0 1rem' }}>
      <p className="microcopy" style={{ margin: 0, textAlign: 'center' }}>
      Built on <Link to="/docs/research-resources/microcanvas">MicroCanvas® v2.1</Link> and{' '}
      <Link to="/services/innovation-maturity">IMM-P®</Link> gates.
      </p>
      </div>

        {/* Who it’s for? (standardized audience tiles) */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Who it’s for?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>From idea to evidence to fit — faster, with clear decisions and owners.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardList className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Public Institutions</h3>
              <p>Transparent governance and practical capability building in one session.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Private organizations</h3>
              <p>Established companies aligning teams and accelerating delivery maturity.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubators & Accelerators</h3>
              <p>Raise cohort quality with evidence-first methods and reusable playbooks.</p>
            </article>
          </div>
        </section>

        {/* Why run a workshop */}
        <section className="section" id="cw-why" aria-labelledby="cw-why-title">
          <h2 id="cw-why-title">Why run a workshop</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-why-decisions">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-decisions">Decisions, not meetings</h3>
              <p>Make the few decisions that change everything.</p>
              <ul>
                <li>Clear owners & cadence</li>
                <li>One-page plan</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="cw-why-alignment">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-alignment">Team alignment</h3>
              <p>Get cross-functional buy-in and remove blockers in one session.</p>
              <ul>
                <li>Shared framing</li>
                <li>Commitments & next steps</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="cw-why-gtm">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-gtm">Go-to-Market</h3>
              <p>Frame customers, offers, and tests that de-risk launch.</p>
              <ul>
                <li>Target segments & hypotheses</li>
                <li>MVP metrics & signals</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Formats */}
        <section className="section" id="cw-formats" aria-labelledby="cw-formats-title">
          <h2 id="cw-formats-title">Workshop formats</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-format-halfday">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3 id="cw-format-halfday">Custom Innovation Workshop (half-day)</h3>
              <p>
                A focused <strong>3.5-hour</strong> session built on MicroCanvas or complementary frameworks. Ideal for rapid
                alignment and a quick-win plan.
              </p>
              <ul>
                <li>Delivery: on-site or remote</li>
                <li>Includes: pre-work brief, decision log, 30/60/90 template</li>
              </ul>
              <div className="cardFooter">
                <Link to="/contact" className="cardCta" data-cta="cta.services.workshops.formats.halfday.brief">
                  Start a half-day brief →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="cw-format-fullday">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3 id="cw-format-fullday">Custom Innovation Workshop (full-day)</h3>
              <p>
                A deeper <strong>7-hour</strong> session that moves from discovery to decisions and next steps. Includes pre-work
                review and post-work synthesis.
              </p>
              <ul>
                <li>Delivery: on-site or remote</li>
                <li>Includes: pre-work review, prioritization map, action board</li>
              </ul>
              <div className="cardFooter">
                <Link to="/contact" className="cardCta" data-cta="cta.services.workshops.formats.fullday.brief">
                  Start a full-day brief →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section" id="cw-outcomes" aria-labelledby="cw-outcomes-title">
          <h2 id="cw-outcomes-title">What you’ll leave with</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-outcome-decisions">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-decisions">Decisions & owners</h3>
              <p>Gate-ready summaries and a one-page plan with clear owners.</p>
            </article>
            <article className="card" aria-labelledby="cw-outcome-evidence">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-evidence">Evidence & experiments</h3>
              <p>Ranked tests with signals, timelines, and success criteria.</p>
            </article>
            <article className="card" aria-labelledby="cw-outcome-reuse">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-reuse">Reusable artifacts</h3>
              <p>Canvases and templates you can evolve and reuse.</p>
            </article>
          </div>
        </section>

        {/* Related case studies — shared component (canonical order) */}
        <section className="section" id="related" aria-labelledby="related-title">
          <h2 id="related-title">Related case studies</h2>
          <CaseStudyCards slugs={['afp-siembra', 'alpha-inversiones', 'fundapec', 'ogtic-redlab']} />
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="workshops-final"
          ariaLabelledbyId="workshops-final-title"
          title="Ready to align and move?"
          body="Send us your goals and constraints. We’ll design the right workshop and get you moving fast."
          primaryCta={{ to: '/contact', label: 'Start a workshop brief', dataCta: 'cta.services.workshops.final.contact' }}
          secondaryCta={{ to: '/services/clarityscan', label: 'Start with a diagnostic', dataCta: 'cta.services.workshops.final.clarityscan' }}
          ctaNote="We use privacy-first analytics only."
        />
      </main>
    </Layout>
  );
}
