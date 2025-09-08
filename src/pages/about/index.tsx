// src/pages/about/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';

// Icons (tree-shaken)
import Target from 'lucide-react/dist/esm/icons/target';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Users from 'lucide-react/dist/esm/icons/users';
import Globe from 'lucide-react/dist/esm/icons/globe';

export default function AboutPage(): ReactNode {
  // Organization schema
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Doulab',
    url: 'https://doulab.net',
    logo: 'https://doulab.net/img/doulab.png',
    foundingDate: '2018',
    sameAs: [
      'https://www.linkedin.com/company/doulab',
      'https://github.com/doulabglobal',
      'https://themicrocanvas.com',
    ],
  };

  // FAQ schema (updated naming)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the MicroCanvas® Framework (MCF 2.1)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A modular set of canvases that makes innovation repeatable—from discovery to delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Innovation Maturity Model Program (IMM-P®)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A structured program to assess and improve innovation capability across strategy, culture, process, and results.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do engagements start?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'With a quick discovery call or diagnostic. We map goals and constraints, then recommend a workshop, program, or coaching path.',
        },
      },
    ],
  };

  return (
    <Layout
      title="About — Doulab"
      description="Discover Doulab’s vision, story, and service model — innovation made repeatable."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/about" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="About — Doulab" />
        <meta property="og:description" content="Discover Doulab’s vision, story, and service model — innovation made repeatable." />
        <meta property="og:image" content="https://doulab.net/img/social/og-about.jpg" />
        <meta property="og:image:alt" content="About Doulab — innovation, foresight, and repeatable delivery." />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        {/* Hero LCP preload (camelCase attrs) */}
        <link
          rel="preload"
          as="image"
          href="/img/about.jpg"
          imageSrcSet="/img/about.avif 1x, /img/about.webp 1x, /img/about.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="About"
          subtitle="We help people and institutions create better futures."
          body="We make innovation repeatable and foresight practical — so strategy turns into measurable outcomes."
          imageBase="/img/about"
          imageAlt="About Doulab — team and work collage"
          width={1600}
          height={900}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.about.hero.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.about.hero.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
          id="about-hero"
          ariaLabelledbyId="about-hero-title"
          eager
        />

        {/* Story */}
        <section className="section" id="our-story" aria-labelledby="our-story-title">
          <h2 id="our-story-title">Our story</h2>
          <p className="sectionLead">
            We started Doulab to answer a tough question: <em>why are entrepreneurship and innovation hard to do
            consistently — and how can we make a practical recipe to do them well, again and again?</em>
          </p>
          <p>
            That quest led to the <strong>MicroCanvas® Framework (MCF 2.1)</strong> and the
            <strong> Innovation Maturity Model Program (IMM-P®)</strong>. Together they guide teams end-to-end and help
            leaders measure and improve capability. Today, we extend that work with <strong>Vigía Futura</strong>,
            making foresight usable in everyday decisions.
          </p>
        </section>

        {/* Service pillars (concise, action-oriented, internal links) */}
        <section className="section" id="service-pillars" aria-labelledby="service-pillars-title">
          <h2 id="service-pillars-title">Our service pillars</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="pillars-diagnostics">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-diagnostics">Diagnostics: Know where you stand</h3>
              <p>Quick baselines of innovation maturity; pinpoint gaps with evidence — starting with ClarityScan®.</p>
              <div className="cardFooter">
                <Link to="/services/clarityscan" className="cardCta" data-cta="cta.about.pillars.diagnostics">
                  Start with ClarityScan® →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-workshops">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-workshops">Workshops: Spark aligned action</h3>
              <p>Focused sessions that unlock decisions and turn strategy into next steps.</p>
              <div className="cardFooter">
                  <Link to="/services/custom-workshops" className="cardCta" data-cta="cta.about.pillars.workshops">
                  Explore workshops →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-programs">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-programs">Programs: Build innovation capacity</h3>
              <p>Structured journeys — like IMM-P® — that install culture, process, and metrics to scale reliably.</p>
              <div className="cardFooter">
                <Link to="/services/innovation-maturity" className="cardCta" data-cta="cta.about.pillars.programs">
                  Explore IMM-P® →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-coaching">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-coaching">Coaching &amp; mentoring</h3>
              <p>Targeted 1:1 or group support to remove blockers and build internal capability.</p>
              <div className="cardFooter">
                <Link to="/services/coaching-mentoring" className="cardCta" data-cta="cta.about.pillars.coaching">
                  Explore coaching &amp; mentoring →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-futures">
              <Globe className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-futures">Future studies</h3>
              <p>Foresight research and training to spot trends, assess risk, and guide resilient choices.</p>
              <div className="cardFooter">
                <Link to="/vigia-futura" className="cardCta" data-cta="cta.about.pillars.futures">
                  Discover Vigía Futura →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Standardized Final CTA */}
        <FinalCta
          id="about-final"
          ariaLabelledbyId="about-final-title"
          title="Ready to make innovation repeatable?"
          body="Start with a quick diagnostic or book a discovery call. We’ll meet you where you are and co-create the path forward."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.about.final.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.about.final.book_call' }}
          ctaNote="Get your baseline in 15–20 minutes."
        />
      </main>
    </Layout>
  );
}
