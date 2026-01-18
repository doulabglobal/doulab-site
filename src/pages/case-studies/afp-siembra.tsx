// src/pages/case-studies/afp-siembra.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import Admonition from '@theme/Admonition';
import Mermaid from '@theme/Mermaid';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import styles from './afp-siembra.module.css';

export default function CaseAfpSiembra(): ReactNode {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'Case studies', item: 'https://doulab.net/case-studies' },
      { '@type': 'ListItem', position: 3, name: 'AFP Siembra: Alcanza and SILAB', item: 'https://doulab.net/case-studies/afp-siembra' },
    ],
  };

  const caseSchema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: 'AFP Siembra: Alcanza and SILAB',
    url: 'https://doulab.net/case-studies/afp-siembra',
    inLanguage: 'en',
    description:
      'From strategy to repeatable delivery, a digital savings product and an innovation lab co created.',
    image: 'https://doulab.net/img/social/og-afp-siembra.jpg',
    about: {
      '@type': 'Organization',
      name: 'AFP Siembra',
      url: 'https://www.afpsiembra.com.do/',
    },
    author: {
      '@type': 'Organization',
      name: 'Doulab',
      url: 'https://doulab.net',
    },
  };

  const videoSchemaDay1 = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'FutureScapes Summit, October 9, 2024',
    description: 'Livestream recording from AFP Siembra FutureScapes Innovation Summit.',
    thumbnailUrl: ['https://i.ytimg.com/vi/v7VBcTu86VQ/hqdefault.jpg'],
    uploadDate: '2024-10-09',
    embedUrl: 'https://www.youtube-nocookie.com/embed/v7VBcTu86VQ',
    publisher: { '@type': 'Organization', name: 'AFP Siembra' },
  };

  const videoSchemaDay2 = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'FutureScapes Summit, October 10, 2024',
    description: 'Livestream recording from AFP Siembra FutureScapes Innovation Summit.',
    thumbnailUrl: ['https://i.ytimg.com/vi/0x3JJShSvZ8/hqdefault.jpg'],
    uploadDate: '2024-10-10',
    embedUrl: 'https://www.youtube-nocookie.com/embed/0x3JJShSvZ8',
    publisher: { '@type': 'Organization', name: 'AFP Siembra' },
  };

  return (
    <Layout
      title="AFP Siembra: Alcanza and SILAB | Case Study | Doulab"
      description="From strategy to repeatable delivery, a digital savings product and an innovation lab co created."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies/afp-siembra" />
        <meta property="og:title" content="AFP Siembra: Alcanza and SILAB | Case Study | Doulab" />
        <meta
          property="og:description"
          content="From strategy to repeatable delivery, a digital savings product and an innovation lab co created."
        />
        {/* Use a 1200×630 social card, not the wide card image */}
        <meta property="og:image" content="https://doulab.net/img/social/og-afp-siembra.jpg" />
        <meta property="og:image:alt" content="AFP Siembra, Alcanza product and SILAB innovation lab." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Luis Santiago Arias" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(videoSchemaDay1)}</script>
        <script type="application/ld+json">{JSON.stringify(videoSchemaDay2)}</script>

        {/* Hero LCP preload (React camelCase) */}
        <link
          rel="preload"
          as="image"
          href="/img/afp-siembra-card.jpg"
          imageSrcSet="/img/afp-siembra-card.avif 1x, /img/afp-siembra-card.webp 1x, /img/afp-siembra-card.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        <nav aria-label="Breadcrumb" className={`microcopy ${styles.breadcrumb}`}>
          <Link to="/case-studies" data-cta="cta.cases.breadcrumb">← All case studies</Link>
        </nav>

        <Hero
          title="AFP Siembra: Alcanza and SILAB"
          subtitle="From strategy to a repeatable innovation engine."
          body={
            'AFP Siembra is a pension fund leader in the Dominican Republic. ' +
            'Alcanza is a 100 percent digital savings solution designed for Dominicans at home and abroad.'
          }
          imageBase="/img/afp-siembra-card"
          imageAlt="AFP Siembra, Alcanza product and SILAB innovation lab."
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
          id="afp-siembra-hero"
          ariaLabelledbyId="afp-siembra-hero-title"
        />

        {/* At a glance */}
        <section className="section" aria-labelledby="glance-title">
          <h2 id="glance-title">At a glance</h2>
          <ul>
            <li><strong>Sector:</strong> Pension and savings, regulated</li>
            <li><strong>Focus:</strong> Digital savings product and an internal innovation lab</li>
            <li><strong>Approach:</strong> Evidence first, gates and cadence, security and compliance</li>
            <li><strong>Result:</strong> App launch and a repeatable innovation engine</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="context-title">
          <h2 id="context-title">Context</h2>
          <p>
            AFP Siembra is a specialized pension fund administrator, AFP, and the first in the Dominican Republic
            authorized by the Superintendencia de Pensiones, SIPEN. The team set out to launch <strong><a href="https://alcanza.com.do" target="_blank" rel="noopener noreferrer">Alcanza</a></strong>,
            a <strong>digital savings solution</strong> for Dominicans, salaried and independent, living in the country and abroad, who need a safe,
            flexible way to save for retirement, housing, education, and other goals.
          </p>
          <p>
            The challenge was low national savings rates, high trust requirements, and a <strong>regulated, security first</strong>
            environment. In parallel, leadership wanted a <strong>repeatable innovation engine</strong> inside the
            organization, which became <strong>SILAB</strong>.
          </p>
        </section>

        <section className="section" aria-labelledby="work-title">
          <h2 id="work-title">What we did</h2>
          <ul>
            <li>
              <strong>Baseline and direction:</strong> Ran an initial assessment, ClarityScan, to determine the current state of the innovation process,
              surface risks, align stakeholders, and sequence the work. Used{' '}
              <Link to="/docs/research-resources/microcanvas">MicroCanvas</Link> to frame problems, understand the customer, define value
              propositions, set objectives and key results, and select the metrics to measure progress. We also worked with
              the innovation team to identify issues that were slowing projects and to unblock them.
            </li>
            <li>
              <strong>Evidence first:</strong> Ran side by side interview tests and concierge trials with employees and customers
              to test profiles, onboarding friction, benefits, cost sensitivity, problem and solution fit, and market and product fit.
            </li>
            <li>
              <strong>Product scope:</strong> Defined the MVP for Alcanza, a 100 percent digital app at launch. Key features were
              personalized goals, close guidance, goal rewards, strong security, retirement flexibility, and no fees or
              minimum balances.
            </li>
            <li>
              <strong>Delivery system:</strong> Established a cadence, decision gates, and a lab playbook. Co authored
              SILAB’s charter, mandate, intake, funding gates, and a governance model to make delivery repeatable.
              <ul>
                <li><strong>Gate 1:</strong> Go or No Go after discovery, based on evidence packs.</li>
                <li><strong>Gate 2:</strong> Go or No Go before scale, based on adoption and risk.</li>
              </ul>
              <p className="microcopy">SILAB’s value: faster decisions, clearer gates, higher hit rate.</p>
              <p className="microcopy">Artifacts: lab charter, gate checklist, RACI, evidence pack template, weekly cadence.</p>
            </li>
            <li>
              <strong>Innovation lab and launch:</strong> Starting in October 2023, we conceptualized the SIEMBRA Innovation Lab, using learnings and outcomes from the Alcanza project to design an internal
              innovation capability. In parallel, we helped design and produce the lab’s public launch during the inaugural AFP Siembra FutureScapes Innovation Summit, a two day event with more than 300 participants.
            </li>
            <li>
              <strong>Security and compliance:</strong> Worked within the Dominican financial sector’s cybersecurity
              regulations. Defined security requirements and testing as first class work.
            </li>
          </ul>

          <p className="microcopy">
            See our open templates in <Link to="/docs/research-resources/microcanvas">Research and Resources</Link>.
          </p>

          <h3>Timeline</h3>
          <ul>
            <li><strong>Kick off:</strong> January 2021</li>
            <li><strong>Discovery and experiments:</strong> 2021 to 2022</li>
            <li><strong>Build and hardening:</strong> 2023 to 2024</li>
            <li><strong>Full production launch:</strong> November 2024, digital app</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="outcomes-title">
          <h2 id="outcomes-title">Outcomes</h2>
          <ul>
            <li><strong>Launched</strong> the Alcanza digital savings app with 100 percent digital onboarding.</li>
            <li><strong>Installed</strong> SILAB governance and a cadence with gate reviews.</li>
            <li><strong>Captured</strong> decisions as evidence packs to improve alignment.</li>
          </ul>
          <p className="microcopy">
            Tracked metrics: decision latency, cycle time, onboarding conversion, and capability growth.
          </p>
          <p className="microcopy">
            See the case diagrams below for the system flow and capability progression.
          </p>
        </section>

        <section className="section" aria-labelledby="why-title">
          <h2 id="why-title">Why it mattered</h2>
          <ul>
            <li>Turned strategy into execution with a repeatable engine for innovation, SILAB.</li>
            <li>Reduced decision friction through gate reviews, owners, and evidence packs.</li>
            <li>Built trust and visibility through a public launch and ongoing cadence.</li>
          </ul>
        </section>

        {/* Case study diagrams */}
        <section className="section" id="case-diagrams" aria-labelledby="case-diagrams-title">
          <h2 id="case-diagrams-title">Case diagrams</h2>
          <Admonition type="tip" title="Diagram — System Flow">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart LR
    A[Problem Context] --> B[Evidence / Signals]
    B --> C[Intervention: Establish SILAB + Digital Launch]
    C --> D[Enablers: Gate Reviews + Evidence Packs]
    D --> E[Capability: Repeatable Product Delivery]
    E --> F[Outcomes: Digital Onboarding + Alignment]
`} />
          </Admonition>
          <Admonition type="tip" title="Diagram — Capability Progression">
            <Mermaid value={`%%{init: {"theme":"neutral","flowchart":{"curve":"linear"},"themeVariables":{"fontSize":"16px"}} }%%
flowchart TB
    A[Before: Ad-hoc Product Delivery]
    B[MCF Workshops + Evidence Packs]
    C[IMM-P Gate Reviews]
    D[After: SILAB Delivery Cadence]
`} />
          </Admonition>
        </section>

        <section className="section" aria-labelledby="videos-title">
          <h2 id="videos-title">FutureScapes Summit, livestreams</h2>
          <div className="cardGrid">
            <div className="card">
              <h3>FutureScapes Summit, October 9, 2024</h3>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/v7VBcTu86VQ?modestbranding=1&rel=0"
                  title="FutureScapes Summit, October 9, 2024"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className={styles.videoFrame}
                />
              </div>
            </div>
            <div className="card">
              <h3>FutureScapes Summit, October 10, 2024</h3>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/0x3JJShSvZ8?modestbranding=1&rel=0"
                  title="FutureScapes Summit, October 10, 2024"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className={styles.videoFrame}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA briefing cards */}
        <section className="section ctaBriefingCards" aria-label="CTA briefing cards">
          <div className="cardGrid">
            <article className="card" aria-labelledby="cta-briefing-title">
              <h3 id="cta-briefing-title">Prefer a briefing?</h3>
              <p>Prefer a briefing?</p>
              <div className="ctaCardButtons">
                <Link to="https://booking.doulab.net/briefing" className="buttonPrimary" data-cta="cta.cases.briefing">Request a briefing</Link>
              </div>
            </article>
            <article className="card" aria-labelledby="cta-path-title">
              <h3 id="cta-path-title">Recommended path</h3>
              <p>Recommended path: Discovery call  → ClarityScan  → Gate 1 pilot.</p>
            </article>
            <article className="card" aria-labelledby="cta-related-title">
              <h3 id="cta-related-title">Related services</h3>
              <ul>
                <li><Link to="/services/innovation-maturity">Programs, IMM-P®</Link></li>
                <li><Link to="/services/clarityscan">Diagnostics, ClarityScan®</Link></li>
              </ul>
            </article>
          </div>
        </section>

        {/* Standardized Final CTA */}

        {/* Standardized Final CTA */}
        <FinalCta
          id="afp-final-cta"
          ariaLabelledbyId="afp-final-cta-title"
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





