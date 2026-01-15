// src/pages/what-we-do/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';

// Icons (tree-shaken)
import Layers from 'lucide-react/dist/esm/icons/layers';
import Target from 'lucide-react/dist/esm/icons/target';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Search from 'lucide-react/dist/esm/icons/search';
import AlignJustify from 'lucide-react/dist/esm/icons/align-justify';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import TrendingUp from 'lucide-react/dist/esm/icons/trending-up';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';
import Globe from 'lucide-react/dist/esm/icons/globe';

export default function WhatWeDo(): ReactNode {
  return (
    <Layout
      title="What we do, Programs, Diagnostics and Foresight | Doulab"
      description="Programs, diagnostics, and foresight to make innovation repeatable with MicroCanvas® 2.1 and IMM-P®."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/what-we-do" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="What we do, Programs, Diagnostics and Foresight | Doulab" />
        <meta
          property="og:description"
          content="Programs, diagnostics, and foresight that make innovation repeatable with MicroCanvas 2.1 and IMM-P."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-what-we-do.jpg" />
        <meta property="og:image:alt" content="Doulab, Programs, diagnostics, and foresight." />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Breadcrumb JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
              { '@type': 'ListItem', position: 2, name: 'What we do', item: 'https://doulab.net/what-we-do' },
            ],
          })}
        </script>

        {/* Services JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'Service',
                name: 'ClarityScan',
                serviceType: 'Diagnostics',
                provider: { '@type': 'Organization', name: 'Doulab' },
                description: 'A short diagnostic that maps innovation maturity and gaps in 15 to 20 minutes.',
                areaServed: 'Global',
                url: 'https://doulab.net/services/clarityscan',
              },
              {
                '@type': 'Service',
                name: 'IMM-P',
                serviceType: 'Innovation Maturity Model Program',
                provider: { '@type': 'Organization', name: 'Doulab' },
                description: 'A 12 + 12 week program with clear gates and KPIs to build repeatable delivery.',
                areaServed: 'Global',
                url: 'https://doulab.net/services/innovation-maturity',
              },
              {
                '@type': 'Service',
                name: 'Vigía Futura',
                serviceType: 'Foresight',
                provider: { '@type': 'Organization', name: 'Doulab' },
                description: 'Foresight research, briefings, and indices for trend radar and risk framing.',
                areaServed: 'Global',
                url: 'https://doulab.net/vigia-futura',
              },
            ],
          })}
        </script>

        {/* Hero LCP preload */}
        <link
          rel="preload"
          as="image"
          href="/img/services-hero.jpg"
          imageSrcSet="/img/services-hero.avif 1x, /img/services-hero.webp 1x, /img/services-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="What we do"
          subtitle="Innovation architecture, diagnostics, and foresight, built to make delivery repeatable."
          body="We install the culture, process, and cadence for innovation to scale, using MicroCanvas® 2.1 and the Innovation Maturity Model Program, IMM-P®."
          imageBase="/img/services-hero"
          imageAlt="What we do, services overview"
          width={1600}
          height={900}
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Explore ClarityScan',
            dataCta: 'cta.whatwedo.hero.explore_clarityscan',
            ariaLabel: 'Explore ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.whatwedo.hero.book_clarityscan_online', ariaLabel: 'Book a ClarityScan online via Stripe Checkout', external: true }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
          id="whatwedo-hero"
          ariaLabelledbyId="whatwedo-hero-title"
          eager
        />

        {/* In-page subnav (match Insights/Vigía style) */}
        <div className="container">
          <nav
            className="subnav"
            aria-label="In this page"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '.5rem',
              padding: '.25rem 0 .5rem',
              margin: '0 auto .75rem',
            }}
          >
            <a href="#who" data-cta="cta.whatwedo.anchor.who">Who is it for?</a>
            <a href="#programs" data-cta="cta.whatwedo.anchor.programs">Products and Programs</a>
          </nav>
        </div>

        {/* Who is it for? */}
        <section className="section" id="who" aria-labelledby="who">
          <Heading as="h2" id="who">
            Who is it for?
          </Heading>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>From ideas to evidence to product market fit, with gates, focus, and repeatable delivery.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Public institutions</h3>
              <p>Transparent governance, capability building, and scaled delivery across programs and cohorts.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Private organizations</h3>
              <p>Established companies that want stronger internal innovation and delivery maturity.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubators and accelerators</h3>
              <p>Raise cohort quality with evidence first methods, clear gates, and reusable playbooks.</p>
            </article>
          </div>
        </section>

        {/* Products and Programs */}
        <section className="section" id="programs" aria-labelledby="programs-title">
          <h2 id="programs-title">Products and Programs</h2>
          <p className="sectionLead">Three ways we reduce risk and accelerate outcomes.</p>

          <div className="cardGrid">
            <article className="card" aria-labelledby="imm-title">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="imm-title">IMM-P®, 12 + 12 weeks</h3>
              <p>Discovery and Validation → Efficiency and Scale, with explicit gates and KPIs.</p>
              <ul>
                <li><strong>Gate 1</strong>, go or no go after Discovery</li>
                <li><strong>Gate 2</strong>, go or no go before MVP or Scale</li>
              </ul>
              <p className="microcopy">Outcomes, faster decisions, shorter cycles, visible capability growth.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/services/innovation-maturity"
                  data-cta="cta.whatwedo.programs.imm"
                  aria-label="Explore IMM-P"
                >
                  Explore IMM-P® →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="diagnostics-title">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="diagnostics-title">Diagnostics</h3>
              <p>Fast baselines on maturity, risks, and constraints to anchor decisions.</p>
              <ul>
                <li>ClarityScan® baseline, MCF 2.1 and IMM-P®</li>
                <li>Maturity map and prioritized risk shortlist</li>
              </ul>
              <p className="microcopy">What you get, a baseline, a shortlist of risks, and a 30, 60, 90 plan.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/services/clarityscan"
                  data-cta="cta.whatwedo.programs.diagnostics"
                  aria-label="Explore diagnostics"
                >
                  Explore diagnostics →
                </Link>
          </div>
        </article>

        {/* Workshops pillar */}
        <article className="card" aria-labelledby="pillars-workshops">
          <Lightbulb className="cardIcon" aria-hidden={true} />
          <h3 id="pillars-workshops">Workshops</h3>
          <p>
            Custom and readymade sessions (including the Innovation Readiness &amp; Governance workshop)
            that compress weeks into a day: align decisions, clarify roles, and produce actionable roadmaps.
          </p>
          <ul>
            <li>Strategy/OKR alignment workshops</li>
            <li>Decision and roadmap facilitation</li>
            <li>Innovation Readiness &amp; Governance (8h hybrid) for evidence-based gates</li>
          </ul>
          <div className="cardFooter">
            <Link
              className="cardCta"
              to="/services/custom-workshops"
              data-cta="cta.whatwedo.pillars.workshops"
              aria-label="Explore workshops"
            >
              Explore workshops →
            </Link>
          </div>
        </article>

        {/* Coaching & mentoring pillar */}
        <article className="card" aria-labelledby="pillars-coaching">
          <Users className="cardIcon" aria-hidden={true} />
          <h3 id="pillars-coaching">Coaching & mentoring</h3>
          <p>Targeted one‑to‑one or group support to remove blockers and build internal capability.</p>
          <div className="cardFooter">
            <Link
              className="cardCta"
              to="/services/coaching-mentoring"
              data-cta="cta.whatwedo.pillars.coaching"
              aria-label="Explore coaching and mentoring"
            >
              Explore coaching and mentoring →
            </Link>
          </div>
        </article>

        <article className="card" aria-labelledby="vigia-title">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="vigia-title">Vigía Futura</h3>
              <p>Foresight program with indices for trend radar, risk, and opportunity framing.</p>
              <ul>
                <li>Foresight maturity and literacy</li>
                <li>Briefings and early signal scans</li>
              </ul>
              <p className="microcopy">What you get, a shared view of shifts, and credible options to act.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/vigia-futura"
                  data-cta="cta.whatwedo.programs.vigia"
                  aria-label="Discover Vigía Futura"
                >
                  Discover Vigía Futura →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Proof, by the numbers */}
        <section className="section" id="numbers" aria-labelledby="numbers-title">
          <h2 id="numbers-title">Proof, by the numbers</h2>
          <div className="cardGrid">
            <div className="card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '.25rem' }}>12 + 12 weeks</h3>
              <p style={{ marginBottom: '.25rem' }}><strong>Structured sprint cadence</strong></p>
              <p className="microcopy">Discovery and Validation → Efficiency and Scale</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '.25rem' }}>7</h3>
              <p style={{ marginBottom: '.25rem' }}><strong>innovation labs co-created</strong></p>
              <p className="microcopy">Public sector capacity building in 2024</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: '1.75rem', marginBottom: '.25rem' }}>2 to 4 per week</h3>
              <p style={{ marginBottom: '.25rem' }}><strong>sessions for 12 months</strong></p>
              <p className="microcopy">Scaled capability build out</p>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="section" id="process" aria-labelledby="process-title">
          <h2 id="process-title">How we work</h2>
          <ul className="processRail" role="list">
            <li className="processStep" role="listitem">
              <Search className="stepIcon" aria-hidden="true" /><h4>Diagnose</h4>
              <p>Baseline maturity, risks, and constraints with MCF 2.1 and IMM-P®.</p>
            </li>
            <li className="processStep" role="listitem">
              <AlignJustify className="stepIcon" aria-hidden="true" /><h4>Align</h4>
              <p>Define outcomes, OKRs, and decision gates, align stakeholders.</p>
            </li>
            <li className="processStep" role="listitem">
              <Rocket className="stepIcon" aria-hidden="true" /><h4>Pilot</h4>
              <p>Run focused experiments to derisk value, viability, and delivery.</p>
            </li>
            <li className="processStep" role="listitem">
              <TrendingUp className="stepIcon" aria-hidden="true" /><h4>Scale</h4>
              <p>Install cadence, metrics, and governance for repeatable delivery.</p>
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="whatwedo-final"
          ariaLabelledbyId="whatwedo-final-title"
          title="Ready to make innovation repeatable?"
          body="Start with a quick diagnostic or book a discovery call. We will meet you where you are and co‑create the path forward."
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Start with ClarityScan®',
            dataCta: 'cta.whatwedo.final.clarityscan',
          }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.whatwedo.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />
      </main>
    </Layout>
  );
}







