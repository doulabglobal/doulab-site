// src/pages/case-studies/fundapec.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import styles from './fundapec.module.css';

export default function CaseFundapec(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Case studies', item: 'https://doulab.net/case-studies' },
      { '@type': 'ListItem', position: 3, name: 'FUNDAPEC: New business models and alumni platform', item: 'https://doulab.net/case-studies/fundapec' },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'FUNDAPEC: New business models and alumni platform',
    url: 'https://doulab.net/case-studies/fundapec',
    inLanguage: 'en',
    description:
      'Comunidad FUNDAPEC redesigned and relaunched after a new business models exploration, now a reliable engagement engine with clear governance and single source of truth analytics.',
    image: 'https://doulab.net/img/social/og-fundapec.jpg',
    primaryImageOfPage: 'https://doulab.net/img/social/og-fundapec.jpg',
    isPartOf: { '@type': 'WebSite', name: 'Doulab', url: 'https://doulab.net' },
    about: {
      '@type': 'Organization',
      name: 'FUNDAPEC',
      url: 'https://fundapec.edu.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: 'https://doulab.net',
    },
  };

  return (
    <Layout
      title="FUNDAPEC: New business models and alumni platform | Case Study | Doulab"
      description="We redesigned and relaunched Comunidad FUNDAPEC after a new business models exploration, creating a reliable engagement engine with clear governance and single source of truth analytics."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/fundapec" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="FUNDAPEC: New business models and alumni platform | Case Study | Doulab"
        />
        <meta
          property="og:description"
          content="We redesigned and relaunched Comunidad FUNDAPEC after a new business models exploration, creating a reliable engagement engine with clear governance and single source of truth analytics."
        />
        {/* 1200×630 branded social card */}
        <meta property="og:image" content="https://doulab.net/img/social/og-fundapec.jpg" />
        <meta property="og:image:alt" content="Comunidad FUNDAPEC, alumni platform and engagement." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/fundapec-card.jpg"
          imageSrcSet="/img/fundapec-card.avif 1x, /img/fundapec-card.webp 1x, /img/fundapec-card.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className={`microcopy ${styles.breadcrumb}`}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">All case studies</Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="FUNDAPEC: New business models and alumni platform"
          subtitle="Redesign and relaunch powered by evidence, now a reliable engagement engine for growth."
          body="Track A, new business models, showed the need for a simpler, governed, data visible platform. Track B then redesigned and relaunched Comunidad FUNDAPEC to serve as the base for those future models."
          imageBase="/img/fundapec-card"
          imageAlt="Comunidad FUNDAPEC, alumni platform and engagement."
          width={1200}
          height={720}
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Explore ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Explore ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.cases.hero.book_clarityscan_online', ariaLabel: 'Book a ClarityScan online via Stripe Checkout', external: true }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
          eager
        />

        {/* At a glance */}
        <section className="section" aria-labelledby="glance-title">
          <h2 id="glance-title">At a glance</h2>
          <ul>
            <li><strong>Sector:</strong> Education finance and alumni engagement</li>
            <li><strong>Focus:</strong> New business models and a modern alumni platform</li>
            <li><strong>Approach:</strong> Evidence first, simplified journeys, clear ownership, trustworthy analytics</li>
            <li><strong>Result:</strong> Validated member growth and a reliable engagement engine</li>
          </ul>
        </section>

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>
            FUNDAPEC expands access to education in the Dominican Republic. The legacy alumni site listed about 20,000
            registrations but had little clarity on who was active. Journeys were complex, governance was unclear,
            and analytics did not provide a single source of truth for decisions.
          </p>
          <p>
            We started with a <strong>new business models exploration</strong>, Track A. The findings were clear.
            To support credible growth options, the organization needed a <strong>redesigned and relaunched</strong> platform,
            Track B, with simpler journeys, clear ownership, and trustworthy analytics, which became{' '}
            <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>.
          </p>
          <p className="microcopy">
            Comunidad FUNDAPEC in one line: simpler journeys, clearer ownership, better signals.
          </p>
          <p className="microcopy">
            Who benefits first: alumni relations, partnerships, and growth teams that need clearer signals.
          </p>
        </section>

        {/* Key risks and mitigations */}
        <section className="section" aria-labelledby="risks-title">
          <h2 id="risks-title">Key risks and mitigations</h2>
          <ul>
            <li><strong>Activation risk:</strong> Mitigated with clearer onboarding and re engagement flows.</li>
            <li><strong>Data quality risk:</strong> Mitigated with a single source of truth setup and routine validation.</li>
            <li><strong>Ownership risk:</strong> Mitigated with a named owner, Communications, and a simple editorial cadence.</li>
          </ul>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What we did</h2>

          <h3>Phase 1, Track A: New business models exploration</h3>
          <ul>
            <li>
              <strong>Baseline and direction:</strong> Ran a ClarityScan diagnostic to surface risks, align stakeholders,
              and sequence the work.
            </li>
            <li>
              <strong>Evidence first:</strong> Used{' '}
              <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> to map segments, students, alumni, employers, partners,
              define value propositions, shape early OKRs, compare solution options and purpose, and specify processes
              for discovery and initial validation.
              <p className="microcopy">
                Evidence pack: problem and assumptions, segment and JTBD, experiment plan and results, artifact links,
                decision memo, next step.
              </p>
              <p className="microcopy">
                Insights are coded into a signal library to inform next experiments and the roadmap.
              </p>
            </li>
            <li>
              <strong>Offer probes:</strong> Ran offer level probes, no pricing, to assess viability and signal strength.
            </li>
            <li>
              <strong>Governance and roadmap:</strong> Defined decision gates, owners, and criteria to move from discovery
              to piloting, with a clear 24 month growth roadmap.
            </li>
          </ul>

          <h3>
            Phase 2, Track B:{' '}
            <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>{' '}
            redesign and relaunch
          </h3>
          <ul>
            <li>
              <strong>Co design:</strong> Reworked information architecture and content model, profiles, opportunities, events,
              and resources, with accessibility basics.
            </li>
            <li>
              <strong>Simplified journeys:</strong> Clean, linear onboarding and re engagement flows that reduce friction.
            </li>
            <li>
              <strong>Evidence loops and analytics:</strong> Platform analytics now provide a <em>single source of truth</em> for
              participation, growth, and engagement trends.
            </li>
            <li>
              <strong>Clear governance:</strong> Communications owns the platform, no code, so updates do not depend on other teams.
              Editorial cadence, moderation rules, and periodic reviews are in place.
            </li>
            <li>
              <strong>Delivery system:</strong> Cadence, gate reviews, and decision owners in place.
              <ul>
                <li><strong>Gate 1:</strong> Go or No Go after discovery, based on evidence packs.</li>
                <li><strong>Gate 2:</strong> Go or No Go before scale, based on adoption and risk.</li>
              </ul>
              <p className="microcopy">
                Governance model: <strong>RACI</strong> per initiative; <strong>weekly</strong> cadence; <strong>gate checklist</strong> per stage;
                <strong> decision log</strong> and <strong>risk register</strong> for traceability.
              </p>
              <p className="microcopy">
                KPI tree by stage: Discovery, signal quality and interview coverage; Validation, conversion to key action and time to decision;
                Development, cycle time and escaped defects; Scale, activation, engagement, and unit economics.
              </p>
              <p className="microcopy">
                Capability baseline: governance, measurement, and delivery cadence at kickoff, tracked quarterly against the KPI tree.
              </p>
              <p className="microcopy">
                Operational rhythm: weekly reviews, monthly gate checks, and quarterly capability snapshots.
              </p>
              <p className="microcopy">
                Artifacts: charter, gate checklist, RACI, evidence pack template, weekly review.
              </p>
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="section" aria-labelledby="timeline-title">
          <h2 id="timeline-title">Timeline</h2>
          <ul>
            <li><strong>Kick off, Track A:</strong> December 2023, ClarityScan baseline, interviews, offer probes, early OKRs.</li>
            <li><strong>Decision:</strong> June 2024, redesign and relaunch approved, 24 month roadmap set.</li>
            <li><strong>Redesign and build, Track B:</strong> July 2024 to November 2024, IA, journeys, governance, analytics foundations.</li>
            <li><strong>Relaunch:</strong> November 2024, <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a> live, member migration and validation begins.</li>
            <li><strong>Growth checkpoint:</strong> September 2025, active members grew from 10 a year earlier to 515, validated members at 4,000.</li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" aria-labelledby="outcomes-title" aria-describedby="outcomes-desc">
          <p id="outcomes-desc" className="sr-only">What changed, how we measure progress, and key numbers.</p>
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li>
              <strong>From registrations to reality:</strong> Cleaned the legacy base from about 20,000 registrations to
              <strong> 4,000 validated members</strong>.
            </li>
            <li>
              <strong>Active membership growth:</strong> Active members increased from <strong>10</strong> to
              <strong> 515</strong>, as of September 2025, and continue to grow.
            </li>
            <li>
              <strong>Reliable engagement engine:</strong>{' '}
              <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>{' '}
              now supports future growth options from Track A.
            </li>
            <li>
              <strong>Faster, clearer decisions:</strong> Gate reviews, evidence packs, and accountable owners reduced decision latency.
            </li>
          </ul>
          <p className="microcopy">
            Tracked families, as of September 2025: decision latency, cycle time, activation and engagement, and capability growth.
          </p>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Why it mattered</h2>
          <ul>
            <li>Linked mission and sustainability by tying alumni value to credible growth options.</li>
            <li>Replaced guesswork with a single source of truth and visible progress signals.</li>
            <li>Gave Communications control, no code, which shortened cycles and improved responsiveness.</li>
            <li>Built momentum with small wins, clear ownership, and simple user journeys.</li>
          </ul>
        </section>

        {/* Guidance and related services */}
        <p className={`microcopy ${styles.microcopyCentered}`}>
          Start small: Discovery call → ClarityScan → Gate 1 pilot.
        </p>
        <p className={`microcopy ${styles.microcopyCentered}`}>
          To speed things up: share your goals, timelines, constraints, and how you measure success today.
        </p>
        <p className={`microcopy ${styles.microcopyCentered}`}>
          Prefer a briefing for your team or partners? <Link to="/contact">Request a briefing</Link>.
        </p>
        <p className={`microcopy ${styles.microcopyCentered}`}>
          Planning an event or cohort? <Link to="/contact">Co host a session</Link>.
        </p>
        <p className={`microcopy ${styles.microcopyCentered}`}>
          Related services: <Link to="/services/innovation-maturity">Programs, IMM-P®</Link> and{' '}
          <Link to="/services/clarityscan">Diagnostics, ClarityScan®</Link>.
        </p>
        <p className={`microcopy ${styles.microcopyCentered}`}>
          See more examples in <Link to="/case-studies">Case studies</Link>.
        </p>

        {/* Process (diagram) */}
        <section className="section" id="process-diagram" aria-labelledby="process-diagram-title">
          <h2 id="process-diagram-title">Process (diagram)</h2>
          <div className={styles.centeredMedia}>
            <picture>
              <source srcSet="/img/diagrams/fundapec-process.avif" type="image/avif" />
              <source srcSet="/img/diagrams/fundapec-process.webp" type="image/webp" />
              <img
                src="/img/diagrams/fundapec-process.png"
                alt="Process diagram for FUNDAPEC"
                width="1200"
                height="720"
                loading="lazy"
              />
            </picture>
            <p className="microcopy">Diagram: high‑level flow of context → work → outcomes.</p>
          </div>
        </section>

        {/* Standardized Final CTA */}

        {/* Standardized Final CTA */}
        <FinalCta
          id="fundapec-final-cta"
          ariaLabelledbyId="fundapec-final-cta-title"
          title="Take the first step"
          body="Get your baseline in 15 to 20 minutes."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.cases.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="No prep required."
        />
      </main>
    </Layout>
  );
}





