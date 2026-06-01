// src/pages/services/clarityscan/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

// Icons (tree-shaken)
import Gauge from 'lucide-react/dist/esm/icons/gauge';
import Target from 'lucide-react/dist/esm/icons/target';
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import PlayCircle from 'lucide-react/dist/esm/icons/play-circle';
import Layers from 'lucide-react/dist/esm/icons/layers';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';
import Users from 'lucide-react/dist/esm/icons/users';
import Workflow from 'lucide-react/dist/esm/icons/workflow';

import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';

export default function ClarityScanPage(): ReactNode {
  // JSON-LD schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan®',
    serviceType: 'Innovation/Foresight Diagnostic',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan',
    areaServed: ['Global'],
    potentialAction: { '@type': 'ScheduleAction', target: 'https://booking.doulab.net/clarityscan' },
    description:
      'A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions.',
  };

  return (
    <Layout
      title="ClarityScan®: Rapid innovation maturity diagnostic | Doulab"
      description="A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-clarityscan.jpg" />
        <meta property="og:image:alt" content="ClarityScan®: rapid innovation maturity diagnostic" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload */}
        <link
          rel="preload"
          as="image"
          href="/img/clarityscan-hero.png"
          imageSrcSet="/img/clarityscan-hero.avif 1x, /img/clarityscan-hero.webp 1x, /img/clarityscan-hero.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="ClarityScan®"
          subtitle="See where you are, and what to do next."
          body="ClarityScan® is a tiered innovation/foresight maturity diagnostic. Start with a 15–20 minute Snapshot (Tier 1, CHF 150) for a clear baseline and a 30/60/90 plan; go deeper with a Diagnostic (Tier 2) or an evidence-backed Audit (Tier 3) when you need governance and auditability."
          imageBase="/img/clarityscan-hero"
          imageAlt="ClarityScan® diagnostic visual"
          width={1600}
          height={900}
          primaryCta={{
            to: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book Tier 1: CHF 150',
            dataCta: 'cta.services.clarityscan.hero.book_clarityscan_online',
            ariaLabel: 'Book a ClarityScan Tier 1 Snapshot online via Stripe Checkout',
            external: true,
          }}
          secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Talk to us about T2 / T3', dataCta: 'cta.services.clarityscan.hero.contact' }}
          ctaNote="Tier 1 paid via secure Stripe checkout. Tiers 2 and 3 scoped on a 20-min discovery call."
        />

        {/* Who is it for? */}
        <section className="section" id="who" aria-labelledby="who-title">
          <h2 id="who-title">Who is it for?</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="who-startups">
              <Rocket className="cardIcon" aria-hidden="true" />
              <h3 id="who-startups">Startups</h3>
              <p>From idea to evidence to fit, fast. Clear gates and focus.</p>
            </article>
            <article className="card" aria-labelledby="who-public">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="who-public">Public Institutions</h3>
              <p>Transparent governance and capability building with a quick baseline.</p>
            </article>
            <article className="card" aria-labelledby="who-private">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="who-private">Private organizations</h3>
              <p>Established companies that want to accelerate internal innovation delivery.</p>
            </article>
            <article className="card" aria-labelledby="who-accelerators">
              <Workflow className="cardIcon" aria-hidden="true" />
              <h3 id="who-accelerators">Incubators & Accelerators</h3>
              <p>Lift cohort quality with evidence-first methods and reusable playbooks.</p>
            </article>
          </div>
        </section>

        {/* What you get */}
        <section className="section" id="benefits" aria-labelledby="benefits-title">
          <h2 id="benefits-title">What you get</h2>
          <div className="cardGrid">
            <article className="card">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3>Maturity snapshot</h3>
              <p>Single-page PDF with clear scores, notes, and risks.</p>
            </article>
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>Top moves</h3>
              <p>3–5 priority actions with owners and cadence.</p>
            </article>
            <article className="card">
              <CheckCircle className="cardIcon" aria-hidden="true" />
              <h3>30/60/90</h3>
              <p>Editable plan template to build momentum quickly.</p>
            </article>
          </div>
        </section>

        {/* How it works */}
        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">How it works</h2>
          <div className="cardGrid">
            <article className="card">
              <PlayCircle className="cardIcon" aria-hidden="true" />
              <h3>Schedule</h3>
              <p>Pick a time (15–20 minutes).</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>Discuss</h3>
              <p>Walk through strategy, culture, process, and results.</p>
            </article>
            <article className="card">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3>Act</h3>
              <p>Receive your snapshot and next steps within two business days.</p>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Note: Tier 1 is a rapid read, not a full program diagnosis. For deeper assessments, see Tier 2 / Tier 3 below
            or our <Link to="/services/innovation-maturity">IMM-P®</Link> programs.
          </p>
        </section>

        {/* Tiers */}
        <section className="section" id="tiers" aria-labelledby="tiers-title">
          <h2 id="tiers-title">Three tiers: start where you are</h2>
          <p className="sectionLead">
            ClarityScan® scales with the question you are trying to answer. Tier 1 is bookable online; Tier 2 and Tier 3 are
            scope-based and start with a short discovery call.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="tier-1-title">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3 id="tier-1-title">Tier 1: Snapshot</h3>
              <p><strong>CHF 150</strong> · 15–20 minutes · paid online via Stripe</p>
              <ul>
                <li>Fast scoring across strategy, culture, process, and results.</li>
                <li>Single-page maturity readout with 3–5 priority moves and a 30/60/90 plan.</li>
                <li>No evidence documentation required; qualitative scoring by the respondent.</li>
              </ul>
              <p>Best for: a quick executive read, an inbound diagnostic for a new prospect, or a personal baseline before a deeper engagement.</p>
              <div className="cardFooter">
                <a
                  className="cardCta"
                  href={CLARITYSCAN_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="cta.services.clarityscan.tier1.book_online"
                  aria-label="Book a ClarityScan Tier 1 Snapshot online via Stripe Checkout"
                >
                  Book Tier 1: CHF 150 →
                </a>
              </div>
            </article>
            <article className="card" aria-labelledby="tier-2-title">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="tier-2-title">Tier 2: Diagnostic</h3>
              <p><strong>Scope-based</strong> · multi-day engagement · respondent cohorts</p>
              <ul>
                <li>Structured questionnaire across role-segmented respondent cohorts (directive, middle management, operations).</li>
                <li>Domain-level radar, maturity ladder, and cohort breakdowns; prioritized gaps mapped to MCF v2.2 canvases.</li>
                <li>Scored assessment without formal evidence documentation; output is a working roadmap, not an audit deliverable.</li>
              </ul>
              <p>Best for: an executive team aligning on capability gaps before committing to an IMM-P® program; benchmarking across business units.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="https://booking.doulab.net/discovery"
                  data-cta="cta.services.clarityscan.tier2.contact"
                >
                  Talk to us about Tier 2 →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="tier-3-title">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="tier-3-title">Tier 3: Audit</h3>
              <p><strong>Scope-based</strong> · multi-week engagement · evidence-backed</p>
              <ul>
                <li>Every score is backed by documented evidence: artifacts, decisions, observed practice.</li>
                <li>Auditability for compliance, regulator-facing reviews, and institutional learning.</li>
                <li>Tied to IMM-P® phase readiness gates; deliverable is a governance-grade dossier, not just a roadmap.</li>
              </ul>
              <p>Best for: regulated finance, public-sector digital programs, and any organization that needs the diagnostic to stand up to internal or external audit.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="https://booking.doulab.net/discovery"
                  data-cta="cta.services.clarityscan.tier3.contact"
                >
                  Talk to us about Tier 3 →
                </Link>
              </div>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Looking at digital transformation specifically? See <Link to="/services/imm-dt">IMM-DT</Link>, the digital
            transformation vertical of IMM-P®.
          </p>
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="clarityscan-final"
          ariaLabelledbyId="clarityscan-final-title"
          title="Ready to get a clear read?"
          body="Start with Tier 1 (CHF 150, paid online) for a same-week baseline, or talk to us for a scoped Tier 2 / Tier 3 engagement."
          primaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book Tier 1: CHF 150',
            dataCta: 'cta.services.clarityscan.final.book_clarityscan_booking',
            newTab: true,
          }}
          secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Talk to us about T2 / T3', dataCta: 'cta.services.clarityscan.final.contact' }}
          ctaNote="Tier 1: receipt and booking link by email. Discovery call: 20 minutes, no prep required."
        />
      </main>
    </Layout>
  );
}



