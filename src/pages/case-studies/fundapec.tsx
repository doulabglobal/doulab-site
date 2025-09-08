import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';

export default function CaseFundapec(): ReactNode {
  return (
    <Layout
      title="FUNDAPEC: New Business Models & Alumni Platform — Case Study | Doulab"
      description="Comunidad FUNDAPEC redesigned and relaunched after a new business models exploration—now a reliable engagement engine with clear governance and single-source-of-truth analytics."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/fundapec" />
        {/* 1200×630 branded social card */}
        <meta property="og:image" content="https://doulab.net/img/social/og-fundapec.jpg" />
        <meta property="og:image:alt" content="Comunidad FUNDAPEC — alumni platform and engagement." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />
      </Head>

      <main className="container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">All case studies</Link>
        </nav>

        {/* Two-column standardized hero */}
        <Hero
          title="FUNDAPEC: New Business Models & Alumni Platform"
          subtitle="Redesign and relaunch powered by evidence—now a reliable engagement engine for growth."
          body="Track A (new business models) revealed the need for a simpler, governed, data-visible platform. Track B then redesigned and relaunched Comunidad FUNDAPEC to serve as the foundation for those future models."
          imageBase="/img/fundapec-card"
          imageAlt="Comunidad FUNDAPEC — alumni platform and engagement."
          width={1200}
          height={720}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.hero.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.cases.hero.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
          eager
        />

        {/* Context */}
        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>
            FUNDAPEC expands access to education in the Dominican Republic. The legacy alumni site had ~20,000
            “registrations” but little clarity on who was truly active. Journeys were complex, governance was diffuse,
            and analytics didn’t provide a single source of truth for decisions.
          </p>
          <p>
            We started with a <strong>new business models exploration</strong> (Track A). The findings made it clear:
            to support credible growth options, the organization needed a <strong>redesigned and relaunched</strong> platform
            (Track B) with simplified journeys, clear ownership, and trustworthy analytics—what became{' '}
            <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>.
          </p>
        </section>

        {/* What we did */}
        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What we did</h2>

          <h3>Phase 1 — Track A: New Business Models Exploration</h3>
          <ul>
            <li>
              <strong>Baseline & direction:</strong> Ran a ClarityScan diagnostic to surface risks, align stakeholders,
              and sequence work.
            </li>
            <li>
              <strong>Evidence first:</strong> Used <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> to map segments
              (students, alumni, employers, partners), define value propositions, shape early OKRs, articulate solution
              alternatives and transformative purpose, and specify the processes needed for discovery and initial validation.
            </li>
            <li>
              <strong>Offer probes:</strong> Conducted offer-level probes (no pricing) to assess viability and signal strength.
            </li>
            <li>
              <strong>Governance & roadmap:</strong> Defined decision gates, owners, and criteria to advance from discovery
              to piloting—along with a clear 24-month growth roadmap.
            </li>
          </ul>

          <h3>
            Phase 2 — Track B:{' '}
            <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>{' '}
            Redesign &amp; Relaunch
          </h3>
          <ul>
            <li>
              <strong>Co-design:</strong> Reworked information architecture and content model (profiles, opportunities, events,
              resources) with accessibility basics.
            </li>
            <li>
              <strong>Simplified journeys:</strong> Clean, linear onboarding and re-engagement flows that reduce friction.
            </li>
            <li>
              <strong>Evidence loops & analytics:</strong> Platform analytics now provide a <em>single source of truth</em> for
              participation, growth, and engagement trends.
            </li>
            <li>
              <strong>Clear governance:</strong> Communications owns the platform (no-code), so updates don’t depend on other teams.
              Editorial cadence, moderation rules, and periodic reviews are in place.
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="section" aria-labelledby="timeline-title">
          <h2 id="timeline-title">Timeline</h2>
          <ul>
            <li><strong>Kick-off (Track A):</strong> December 2023 — ClarityScan baseline; interviews; offer probes; early OKRs.</li>
            <li><strong>Decision:</strong> June 2024 — Redesign & relaunch approved; 24-month roadmap set.</li>
            <li><strong>Redesign & Build (Track B):</strong> July 2024–November 2024 — IA, journeys, governance, analytics foundations.</li>
            <li><strong>Relaunch:</strong> November 2024 — <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a> live; member migration & validation begins.</li>
            <li><strong>Growth checkpoint:</strong> September 2025 — Active members grew from 10 (a year prior) to 515; validated members at 4,000.</li>
          </ul>
        </section>

        {/* Outcomes */}
        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li>
              <strong>From registrations to reality:</strong> Cleaned the legacy base from ~20,000 “registrations” to
              <strong> 4,000 validated members</strong>.
            </li>
            <li>
              <strong>Active membership growth:</strong> Active members increased from <strong>10</strong> (a year ago) to
              <strong> 515</strong> and continue to grow steadily.
            </li>
            <li>
              <strong>Reliable engagement engine:</strong>{' '}
              <a href="https://comunidad.fundapec.edu.do" target="_blank" rel="noopener noreferrer">Comunidad FUNDAPEC</a>{' '}
              now underpins future growth for the new business models explored in Track A.
            </li>
            <li>
              <strong>Faster, clearer decisions:</strong> Gate reviews, evidence packs, and accountable owners reduced decision latency.
            </li>
          </ul>
        </section>

        {/* Why it mattered */}
        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Why it mattered</h2>
          <ul>
            <li>Connected mission and sustainability by tying alumni value to credible growth options.</li>
            <li>Replaced guesswork with <strong>single-source-of-truth</strong> analytics and visible progress signals.</li>
            <li>Gave Communications control (no-code), shortening cycles and improving responsiveness.</li>
            <li>Built momentum via small wins, clear ownership, and simple user journeys.</li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Get your baseline in 15–20 minutes.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.cases.final.clarityscan">
                Start with ClarityScan®
              </Link>
              <Link to="/contact" className="buttonSecondary" data-cta="cta.cases.final.book_call">
                Book a discovery call
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
