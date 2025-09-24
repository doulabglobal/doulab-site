// src/pages/about/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '../../constants/urls';

// Icons (tree-shaken)
import Target from 'lucide-react/dist/esm/icons/target';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Users from 'lucide-react/dist/esm/icons/users';
import Globe from 'lucide-react/dist/esm/icons/globe';

export default function AboutPage(): ReactNode {
  // Organization schema with ImageObject logo
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Doulab',
    url: 'https://doulab.net',
    logo: {
      '@type': 'ImageObject',
      url: 'https://doulab.net/img/doulab.png',
      width: 512,
      height: 512,
    },
    foundingDate: '2018',
    sameAs: [
      'https://www.linkedin.com/company/doulab',
      'https://github.com/doulabglobal',
      'https://themicrocanvas.com',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://doulab.net/contact',
        availableLanguage: ['en', 'es'],
      },
    ],
  };

  // FAQ schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the MicroCanvas® Framework, MCF 2.1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A modular set of canvases that makes innovation repeatable, from discovery to delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Innovation Maturity Model Program, IMM-P®?',
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
          text: 'With a short discovery call or diagnostic. We map goals and constraints, then recommend a workshop, program, or coaching path.',
        },
      },
    ],
  };

  // Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://doulab.net/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://doulab.net/about' },
    ],
  };

  return (
    <Layout
      title="About | Doulab"
      description="Discover Doulab’s vision, story, and service model. Innovation made repeatable."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/about" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="About | Doulab" />
        <meta
          property="og:description"
          content="Discover Doulab’s vision, story, and service model. Innovation made repeatable."
        />
        <meta property="og:image" content="https://doulab.net/img/social/og-about.jpg" />
        <meta property="og:image:alt" content="About Doulab, innovation, foresight, and repeatable delivery." />
        <meta name="twitter:card" content="summary_large_image" />

        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

        {/* Hero LCP preload (camelCase attrs) */}
        <link
          rel="preload"
          as="image"
          href="/img/about.jpg"
          imageSrcSet="/img/about.avif 1x, /img/about.webp 1x, /img/about.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
          fetchPriority="high"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="About"
          subtitle="We help people and institutions create better futures."
          body="We make innovation repeatable and foresight practical, so strategy turns into measurable outcomes."
          imageBase="/img/about"
          imageAlt="About Doulab, team and work collage"
          width={1600}
          height={900}
          primaryCta={{
            to: '/what-we-do',
            label: 'Learn more',
            dataCta: 'cta.about.hero.learn_more',
            ariaLabel: 'Learn more about what we do',
          }}
          secondaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Book a ClarityScan® online', dataCta: 'cta.about.hero.book_clarityscan_online', ariaLabel: 'Book a ClarityScan online via Stripe Checkout', external: true }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
          id="about-hero"
          ariaLabelledbyId="about-hero-title"
          eager
        />

        {/* Proof + outcomes microcopy under hero */}
        <p className="microcopy" style={{ textAlign: 'center', marginTop: '.25rem' }}>
          7 labs co-created in 2024. We reduce decision latency and cycle time.
        </p>

        {/* Purpose */}
        <section className="section" id="purpose" aria-labelledby="purpose-title">
          <h2 id="purpose-title">Our purpose</h2>
          <p className="sectionLead">
            We unlock global prosperity by helping others create better futures.
          </p>
          <p className="microcopy">
            We track decision latency, cycle time, and capability growth.
          </p>
        </section>

        {/* Story */}
        <section className="section" id="our-story" aria-labelledby="our-story-title">
          <h2 id="our-story-title">Our story</h2>
          <p className="sectionLead">
            We started Doulab to answer a tough question. <em>Why are entrepreneurship and innovation hard to do
            consistently, and how can we make a practical recipe to do them well again and again?</em>
          </p>
          <p>
            That quest led to the <strong>MicroCanvas® Framework, MCF 2.1</strong> and the
            <strong> Innovation Maturity Model Program, IMM-P®</strong>. Together they guide teams end to end and help
            leaders measure and improve capability. Today, we extend that work with <strong>Vigía Futura</strong>,
            making foresight usable in everyday decisions.
          </p>
          <p className="microcopy">
            See how we work in practice. <Link to="/what-we-do#who" data-cta="cta.about.story.process">How we work</Link>.
          </p>
        </section>

        {/* Service pillars (concise, action oriented, internal links) */}
        <section className="section" id="service-pillars" aria-labelledby="service-pillars-title">
          <h2 id="service-pillars-title">Our service pillars</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="pillars-diagnostics">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-diagnostics">Diagnostics, know where you stand</h3>
              <p>
                Quick baselines of innovation maturity. Pinpoint gaps with evidence, starting with ClarityScan®. No prep required.
              </p>
              <div className="cardFooter">
                <Link
                  to="/services/clarityscan"
                  className="cardCta"
                  data-cta="cta.about.pillars.diagnostics"
                  aria-label="Start with ClarityScan, diagnostics baseline"
                >
                  Start with ClarityScan® →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-workshops">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-workshops">Workshops, spark aligned action</h3>
              <p>Focused sessions that unlock decisions and turn strategy into next steps.</p>
              <div className="cardFooter">
                <Link
                  to="/services/custom-workshops"
                  className="cardCta"
                  data-cta="cta.about.pillars.workshops"
                  aria-label="Explore workshops"
                >
                  Explore workshops →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-programs">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-programs">Programs, build innovation capacity</h3>
              <p>
                Structured journeys like IMM-P® that install culture, process, and metrics to scale reliably. Owners and cadence set at kickoff.
              </p>
              <div className="cardFooter">
                <Link
                  to="/services/innovation-maturity"
                  className="cardCta"
                  data-cta="cta.about.pillars.programs"
                  aria-label="Explore IMM-P"
                >
                  Explore IMM-P® →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-coaching">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-coaching">Coaching and mentoring</h3>
              <p>Targeted one to one or group support to remove blockers and build internal capability.</p>
              <div className="cardFooter">
                <Link
                  to="/services/coaching-mentoring"
                  className="cardCta"
                  data-cta="cta.about.pillars.coaching"
                  aria-label="Explore coaching and mentoring"
                >
                  Explore coaching and mentoring →
                </Link>
              </div>
            </article>

            <article className="card" aria-labelledby="pillars-futures">
              <Globe className="cardIcon" aria-hidden="true" />
              <h3 id="pillars-futures">Future studies</h3>
              <p>Foresight research and training to spot trends, assess risk, and guide resilient choices.</p>
              <div className="cardFooter">
                <Link
                  to="/vigia-futura"
                  className="cardCta"
                  data-cta="cta.about.pillars.futures"
                  aria-label="Discover Vigía Futura"
                >
                  Discover Vigía Futura →
                </Link>
              </div>
            </article>
          </div>

          {/* Cross-link to services overview */}
          <p className="microcopy" style={{ marginTop: '.5rem' }}>
            Want the full overview?{' '}
            <Link to="/what-we-do" data-cta="cta.about.to_whatwedo">
              See services overview
            </Link>
            .
          </p>
        </section>

        {/* Standardized Final CTA */}
        <FinalCta
          id="about-final"
          ariaLabelledbyId="about-final-title"
          title="Ready to make innovation repeatable?"
          body="Start with a quick diagnostic or book a discovery call. We will meet you where you are and co‑create the path forward."
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan®', dataCta: 'cta.about.final.clarityscan' }}
          secondaryCta={{
            href: CLARITYSCAN_CHECKOUT_URL,
            label: 'Book a ClarityScan® online',
            dataCta: 'cta.about.final.book_clarityscan_booking',
            newTab: true,
          }}
          ctaNote="Built on MicroCanvas® v2.1 and IMM‑P® gates."
        />
      </main>
    </Layout>
  );
}

