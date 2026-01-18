// src/pages/case-studies/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import CaseStudyCards from '../../components/case-studies/CaseStudyCards';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';
import styles from './case-studies.module.css';

// Tree-shaken icons
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';

export default function CaseStudies(): ReactNode {
  return (
    <Layout
      title="Case Studies, Outcomes and Repeatable Delivery | Doulab"
      description="Selected projects and measurable outcomes from Doulab, with clear checkpoints, evidence packs, and KPIs."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Case Studies, Outcomes and Repeatable Delivery | Doulab" />
        <meta
          property="og:description"
          content="Selected projects and measurable outcomes from Doulab, with clear checkpoints, evidence packs, and KPIs."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-case-studies.jpg" />
        <meta
          property="og:image:alt"
          content="Case studies hero, abstract indigo gradient with Doulab brand accents."
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Breadcrumbs JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
              { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://doulab.net/case-studies' },
            ],
          })}
        </script>

        {/* Case studies list JSON-LD (keep in sync with visible cards) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, url: 'https://doulab.net/case-studies/afp-siembra' },
              { '@type': 'ListItem', position: 2, url: 'https://doulab.net/case-studies/alpha-inversiones' },
              { '@type': 'ListItem', position: 3, url: 'https://doulab.net/case-studies/fundapec' },
              { '@type': 'ListItem', position: 4, url: 'https://doulab.net/case-studies/ogtic-redlab' },
            ],
          })}
        </script>

        {/* Preload hero image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/img/hero-cases.jpg"
          imageSrcSet="/img/hero-cases.avif 1x, /img/hero-cases.webp 1x, /img/hero-cases.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Two-column standardized hero with CTAs */}
        <Hero
          title="Case Studies"
          subtitle="Real projects. Clear checkpoints. Measurable results."
          body="Each case shows context, what we did, and outcomes, with the artifacts and cadence that make it repeatable."
          imageBase="/img/hero-cases"
          imageAlt="Case studies hero, abstract indigo gradient with Doulab brand accents."
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Explore ClarityScan',
            dataCta: 'cta.cases.hero.explore_clarityscan',
            ariaLabel: 'Explore ClarityScan',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.cases.hero.book_clarityscan_online', external: true }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />

        {/* Outcome focus line under the hero */}
        <p className={`microcopy ${styles.heroNote}`}>
          We focus on decision latency, cycle time, and capability growth.
        </p>

        {/* Featured projects, image cards linking to internal pages */}
        <section className="section" id="featured" aria-labelledby="featured-title">
          <h2 id="featured-title">Featured projects</h2>
          <p className="sectionLead">Examples of how checkpoints, evidence, and cadence drive results.</p>
          <p className="microcopy">Proof, 7 labs co-created in 2024.</p>
          <CaseStudyCards variant="grid" />
        </section>

        {/* How we measure progress */}
        <section className="section" id="method" aria-labelledby="method-title">
          <h2 id="method-title">How we measure progress</h2>
          <p className={`microcopy ${styles.methodLead}`}>
            Tracked across IMM-P® gates, <strong>Discovery → Validation → Efficiency → Scale</strong>.
          </p>
          <div className="cardGrid">
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden={true} />
              <h3>Evidence packs</h3>
              <p>Auditable trace from hypothesis to decision, captured as artifacts.</p>
              <ul role="list">
                <li>Research notes and interview summaries</li>
                <li>Decision memos with sources</li>
              </ul>
            </div>
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden={true} />
              <h3>Gate reviews</h3>
              <p>Predefined criteria and owners ensure clarity at every checkpoint.</p>
              <ul role="list">
                <li>Go or No Go based on evidence</li>
                <li>Accountable owners and cadence</li>
              </ul>
              <p className="microcopy">Owners and cadence are defined at kickoff.</p>
            </div>
            <div className="card">
              <LineChart className="cardIcon" aria-hidden={true} />
              <h3>KPI dashboards</h3>
              <p>Stage-appropriate metrics track learning and delivery velocity.</p>
              <ul role="list">
                <li>Adoption, NPS, cycle time</li>
                <li>CAC, LTV, and viability signals</li>
              </ul>
            </div>
          </div>

          {/* Keep high-intent users moving */}
          <p className={`microcopy ${styles.methodLink}`}>
            Want the methods behind the cases?{' '}
            <a href="/docs/research-resources" data-cta="cta.cases.method.research">
              See all research →
            </a>
          </p>
        </section>

        {/* Final CTA, standardized component */}
        <FinalCta
          id="cases-final"
          ariaLabelledbyId="cta-title"
          title="Ready to make innovation repeatable?"
          body="Start small, get your baseline in 15–20 minutes."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.cases.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />
      </main>
    </Layout>
  );
}

