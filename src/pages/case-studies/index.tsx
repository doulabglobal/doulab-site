// src/pages/case-studies/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import CaseStudyCards from '../../components/case-studies/CaseStudyCards';

// Tree-shaken icons
import CheckCircle from 'lucide-react/dist/esm/icons/check-circle';
import LineChart from 'lucide-react/dist/esm/icons/line-chart';

export default function CaseStudies(): ReactNode {
  return (
    <Layout
      title="Case Studies — Outcomes & Repeatable Delivery | Doulab"
      description="Selected projects and measurable outcomes from Doulab, shown with clear checkpoints, evidence packs, and KPIs."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/case-studies" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:image" content="https://doulab.net/img/social/og-case-studies.jpg" />
        <meta
          property="og:image:alt"
          content="Case studies hero — abstract indigo gradient with Doulab brand accents."
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Preload hero image for LCP */}
        <link
          rel="preload"
          as="image"
          href="/img/hero-cases.jpg"
          imageSrcSet="/img/hero-cases.avif 1x, /img/hero-cases.webp 1x, /img/hero-cases.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
      </Head>

      <main>
        {/* Two-column standardized hero with CTAs */}
        <Hero
          title="Case Studies"
          subtitle="Real projects. Clear checkpoints. Measurable results."
          body="Each case shows context, what we did, and outcomes — with the artifacts and cadence that made it repeatable."
          imageBase="/img/hero-cases"
          imageAlt="Case studies hero — abstract indigo gradient with Doulab brand accents."
          primaryCta={{
            to: '/services/clarityscan',
            label: 'Start with ClarityScan®',
            dataCta: 'cta.cases.hero.clarityscan',
            ariaLabel: 'Start with ClarityScan — quick 15–20 minute baseline',
          }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.cases.hero.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
          eager
        />

        {/* Featured projects — image cards linking to internal pages */}
        <section className="section" id="featured" aria-labelledby="featured-title">
          <h2 id="featured-title">Featured projects</h2>
          <p className="sectionLead">A few examples showing how checkpoints, evidence, and cadence drive results.</p>

          {/* Reusable cards (canonical order + consistent CTA/alt/data-cta) */}
          <CaseStudyCards variant="grid" />
        </section>

        {/* How we measure progress */}
        <section className="section" id="method" aria-labelledby="method-title">
          <h2 id="method-title">How we measure progress</h2>
          <p className="microcopy" style={{ marginTop: '-.25rem' }}>
            Tracked across IMM-P® gates: <strong>Discovery → Validation → Efficiency → Scale</strong>.
          </p>
          <div className="cardGrid">
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden="true" />
              <h3>Evidence packs</h3>
              <p>Auditable trace from hypothesis to decision, captured as artifacts.</p>
              <ul>
                <li>Research notes &amp; interview summaries</li>
                <li>Decision memos with sources</li>
              </ul>
            </div>
            <div className="card">
              <CheckCircle className="cardIcon" aria-hidden="true" />
              <h3>Gate reviews</h3>
              <p>Predefined criteria &amp; owners ensure clarity at every checkpoint.</p>
              <ul>
                <li>Go/No-Go based on evidence</li>
                <li>Accountable owners &amp; cadence</li>
              </ul>
            </div>
            <div className="card">
              <LineChart className="cardIcon" aria-hidden="true" />
              <h3>KPI dashboards</h3>
              <p>Stage-appropriate metrics track learning and delivery velocity.</p>
              <ul>
                <li>Adoption, NPS, cycle time</li>
                <li>CAC/LTV &amp; viability signals</li>
              </ul>
            </div>
          </div>
          {/* Optional: internal link to research */}
          {/* <p className="microcopy">
            Learn more about our approach in <Link to="/research" data-cta="cta.cases.method.research">Research + Resources</Link>.
          </p> */}
        </section>

        {/* Final CTA — standardized component */}
        <FinalCta
          id="cases-final"
          ariaLabelledbyId="cta-title"
          title="Ready to make innovation repeatable?"
          body="Start small — get your baseline in 15–20 minutes."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.cases.final.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.cases.final.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
        />
      </main>
    </Layout>
  );
}
