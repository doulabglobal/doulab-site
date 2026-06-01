// src/pages/services/clarityscan.tsx
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
import ShieldCheck from 'lucide-react/dist/esm/icons/shield-check';
import Cpu from 'lucide-react/dist/esm/icons/cpu';

import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import Pillars from '../../components/imm/Pillars';
import Radar from '../../components/imm/Radar';
import MaturityLadder from '../../components/imm/MaturityLadder';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';

export default function ClarityScanPage(): ReactNode {
  // JSON-LD schema (Service) with Tier 1 offer
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ClarityScan®',
    serviceType: 'Innovation/Foresight Maturity Diagnostic',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/clarityscan',
    areaServed: ['Global'],
    description:
      'A tiered innovation/foresight maturity diagnostic. Tier 1 Snapshot delivers a same-week baseline; Tier 2 Diagnostic and Tier 3 Audit scale to deeper engagements.',
    offers: {
      '@type': 'Offer',
      name: 'ClarityScan® Tier 1: Snapshot',
      price: '150',
      priceCurrency: 'CHF',
      url: CLARITYSCAN_CHECKOUT_URL,
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <Layout
      title="ClarityScan®: Tiered innovation maturity diagnostic | Doulab"
      description="ClarityScan® is a tiered innovation/foresight maturity diagnostic. Tier 1 Snapshot (CHF 150) delivers a same-week baseline; Tier 2 Diagnostic and Tier 3 Audit scale to deeper engagements."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/services/clarityscan" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-clarityscan.jpg" />
        <meta property="og:image:alt" content="ClarityScan®: tiered innovation maturity diagnostic" />
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
        {/* Hero: tiered diagnostic positioning */}
        <Hero
          title="ClarityScan®"
          subtitle="A tiered innovation/foresight maturity diagnostic. See where you are. Decide what to do next."
          body="Three tiers, one IMM 2.2 measurement backbone. Tier 1 Snapshot is a 15 to 20 minute self-assessment with a same-week PDF readout (CHF 150). Tier 2 Diagnostic is a scoped, role-segmented engagement with a prioritized roadmap. Tier 3 Audit is an evidence-backed, audit-ready dossier for regulated and institutional programs."
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
          ctaNote="Tier 1 paid via secure Stripe checkout. Tiers 2 and 3 scoped on a 20-minute discovery call."
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

        {/* What every tier delivers: the 5 IMM domains */}
        <section className="section" id="domains" aria-labelledby="domains-title">
          <h2 id="domains-title">What every tier measures</h2>
          <p className="sectionLead">
            All three tiers score the same five IMM 2.2 domains. What changes across tiers is depth, respondent cohorts,
            evidence requirements, and the shape of the deliverable.
          </p>
          <Pillars
            ariaLabel="The five IMM domains scored by ClarityScan"
            foundationLabel="IMM 2.2 maturity model"
            pillars={[
              {
                icon: <ClipboardCheck aria-hidden="true" />,
                title: 'Evidence & epistemic discipline',
                body: 'How you separate assumptions from evidence and enforce thresholds before committing resources.',
                accent: 'indigo',
              },
              {
                icon: <Workflow aria-hidden="true" />,
                title: 'Decision logic & governance',
                body: 'How you allocate capital, define gates, document decisions, and maintain accountability.',
                accent: 'slate',
              },
              {
                icon: <Users aria-hidden="true" />,
                title: 'Culture & behavior',
                body: 'Whether teams can invalidate safely, learn without blame, and collaborate across boundaries.',
                accent: 'purple',
              },
              {
                icon: <Cpu aria-hidden="true" />,
                title: 'Iteration & adaptive improvement',
                body: 'How quickly you learn, iterate, and institutionalize what works across initiatives.',
                accent: 'green',
              },
              {
                icon: <ShieldCheck aria-hidden="true" />,
                title: 'Systemic & AI governance',
                body: 'Data governance, auditability, lifecycle controls, and impact oversight as complexity increases.',
                accent: 'amber',
              },
            ]}
          />
        </section>

        {/* The three tiers */}
        <section className="section" id="tiers" aria-labelledby="tiers-title">
          <h2 id="tiers-title">The three tiers</h2>
          <p className="sectionLead">
            Start where you are. Tier 1 is bookable online. Tier 2 and Tier 3 are scope-based and start with a short
            discovery call.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="tier-1-card">
              <Gauge className="cardIcon" aria-hidden="true" />
              <h3 id="tier-1-card">Tier 1: Snapshot</h3>
              <p><strong>CHF 150</strong> · 15 to 20 minutes · paid online via Stripe</p>
              <ul>
                <li>Single respondent, qualitative self-scoring across the five IMM domains.</li>
                <li>One-page PDF: radar, maturity ladder, 3 to 5 priority moves, 30/60/90 plan.</li>
                <li>No evidence documentation required.</li>
              </ul>
              <p>Best for: a quick executive read, a personal baseline, or an inbound diagnostic.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="#tier-1-detail"
                  data-cta="cta.services.clarityscan.tier1.see_detail"
                  aria-label="See Tier 1 Snapshot detail below"
                >
                  See Tier 1 detail →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="tier-2-card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="tier-2-card">Tier 2: Diagnostic</h3>
              <p><strong>Scope-based</strong> · multi-day engagement · role-segmented respondents</p>
              <ul>
                <li>Role-segmented cohorts (directive, middle management, operations).</li>
                <li>Domain radar with target overlay, prioritized gap matrix, 90-day roadmap.</li>
                <li>Scored assessment without formal evidence documentation.</li>
              </ul>
              <p>Best for: executive teams aligning on capability gaps before committing to a program.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/services/clarityscan/diagnostic"
                  data-cta="cta.services.clarityscan.tier2.see_detail"
                  aria-label="Open the Tier 2 Diagnostic detail page"
                >
                  See Tier 2 detail →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="tier-3-card">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="tier-3-card">Tier 3: Audit</h3>
              <p><strong>Scope-based</strong> · multi-week engagement · evidence-backed</p>
              <ul>
                <li>Every domain score backed by documented artifacts, decisions, and observed practice.</li>
                <li>Phase readiness gates tied to the IMM-P® 5-phase model.</li>
                <li>Governance-grade dossier, not just a roadmap.</li>
              </ul>
              <p>Best for: regulated finance, public-sector digital programs, and audit-grade engagements.</p>
              <div className="cardFooter">
                <Link
                  className="cardCta"
                  to="/services/clarityscan/audit"
                  data-cta="cta.services.clarityscan.tier3.see_detail"
                  aria-label="Open the Tier 3 Audit detail page"
                >
                  See Tier 3 detail →
                </Link>
              </div>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            Looking at digital transformation specifically? See <Link to="/services/imm-dt">IMM-DT</Link>, the digital
            transformation vertical of IMM-P®.
          </p>
        </section>

        {/* Tier 1 detail */}
        <section className="section" id="tier-1-detail" aria-labelledby="tier-1-detail-title">
          <h2 id="tier-1-detail-title">Tier 1 Snapshot: what you get</h2>
          <p className="sectionLead">
            A same-week, single-page maturity readout. The visuals below are illustrative; your scores are computed from
            your responses.
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
              <h3 style={{ color: 'var(--dl-indigo, #4F46E5)' }}>Domain radar</h3>
              <Radar
                ariaLabel="Example Tier 1 domain radar with five IMM domains"
                title="Five-domain maturity snapshot"
                domains={[
                  { name: 'Evidence', score: 50 },
                  { name: 'Decision logic', score: 65 },
                  { name: 'Culture', score: 40 },
                  { name: 'Iteration', score: 55 },
                  { name: 'Systemic / AI', score: 45 },
                ]}
                caption="Example output. Your scores are computed from your responses."
              />
            </div>

            <div>
              <h3 style={{ color: 'var(--dl-purple, #7C3AED)' }}>Maturity ladder</h3>
              <MaturityLadder
                ariaLabel="Example Tier 1 maturity ladder with current rung 2"
                title="Where you sit today"
                current={2}
                rungs={[
                  { label: 'Foundations', description: 'Ad-hoc practice; little shared discipline.' },
                  { label: 'Structured Discovery', description: 'Repeatable framing, interviews, and assumption tests.' },
                  { label: 'Efficiency', description: 'Process, automation, and quality controls in place.' },
                  { label: 'Scaling', description: 'Infrastructure, partnerships, and growth operating system.' },
                  { label: 'Continuous Improvement', description: 'Learning, foresight, and resilience compound.' },
                ]}
              />
              <p className="microcopy" style={{ marginTop: '0.75rem' }}>
                Example positioning. You see where you are; Tier 2 and Tier 3 sequence the climb.
              </p>
            </div>
          </div>

          <p style={{ marginTop: '1.5rem' }}>
            Your Tier 1 deliverable is a single-page maturity readout (PDF) with the radar, the ladder, 3 to 5 priority
            moves, and a 30/60/90 plan. Delivered within two business days of your response.
          </p>
        </section>

        {/* How Tier 1 works */}
        <section className="section" id="how" aria-labelledby="how-title">
          <h2 id="how-title">How Tier 1 works</h2>
          <div className="cardGrid">
            <article className="card">
              <PlayCircle className="cardIcon" aria-hidden="true" />
              <h3>Schedule</h3>
              <p>Pick a time (15 to 20 minutes).</p>
            </article>
            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>Discuss</h3>
              <p>Walk through the five IMM domains.</p>
            </article>
            <article className="card">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3>Act</h3>
              <p>Receive your snapshot and next steps within two business days.</p>
            </article>
          </div>
        </section>

        {/* What Tier 1 does not include */}
        <section className="section" id="tier-1-exclusions" aria-labelledby="tier-1-exclusions-title">
          <h2 id="tier-1-exclusions-title">What Tier 1 does not include</h2>
          <p className="sectionLead">
            Tier 1 is a rapid read, not a full program diagnosis. It deliberately excludes:
          </p>
          <div className="cardGrid">
            <article className="card">
              <h3>No evidence documentation</h3>
              <p>Scoring is qualitative and self-reported. For evidence-backed scoring, see Tier 3.</p>
            </article>
            <article className="card">
              <h3>No cohort segmentation</h3>
              <p>A single respondent answers. For role-segmented respondents, see Tier 2.</p>
            </article>
            <article className="card">
              <h3>No benchmark</h3>
              <p>No peer or regional comparison. Tier 2 adds benchmarking where relevant.</p>
            </article>
            <article className="card">
              <h3>No governance package</h3>
              <p>No decision log, no risk register, no governance model. Those come with Tier 3.</p>
            </article>
          </div>
          <p className={`microcopy ${'pages-b4-p2__microcopyTop'}`}>
            For deeper assessments, see <Link to="/services/clarityscan/diagnostic">Tier 2 Diagnostic</Link> or{' '}
            <Link to="/services/clarityscan/audit">Tier 3 Audit</Link>, or the full{' '}
            <Link to="/services/innovation-maturity">IMM-P®</Link> program.
          </p>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="clarityscan-final"
          ariaLabelledbyId="clarityscan-final-title"
          title="Ready to get a clear read?"
          body="Start with Tier 1 (CHF 150, paid online) for a same-week baseline, or talk to us for a scoped Tier 2 or Tier 3 engagement."
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
