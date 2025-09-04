// src/pages/about/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '../../components/Hero';
import Target from 'lucide-react/dist/esm/icons/target';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Users from 'lucide-react/dist/esm/icons/users';
import Globe from 'lucide-react/dist/esm/icons/globe';
import type { JSX } from 'react';

export default function AboutPage(): JSX.Element {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Doulab',
    url: 'https://doulab.net',
    logo: '/img/doulab.png',
    foundingDate: '2018',
    sameAs: [
      'https://www.linkedin.com/company/doulab',
      'https://github.com/doulabglobal',
      'https://themicrocanvas.com',
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the MicroCanvas Framework (MCF)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A modular set of canvases that makes innovation repeatable—from discovery to delivery.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Innovation Maturity Model — Program (IMM-P)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A structured way to assess and improve innovation capability across strategy, culture, process, and results.',
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
    <Layout title="About — Doulab" description="Discover Doulab’s vision, story, and service model — innovation made repeatable.">
      <Head>
        <link rel="canonical" href="https://doulab.net/about" />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <link
          rel="preload"
          as="image"
          href="/img/about.png"
          imageSrcSet="/img/about.avif 1x, /img/about.webp 1x, /img/about.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
      </Head>

      <main>
        <Hero
          title="About — Doulab"
          subtitle="We help unlock prosperity by helping others create better futures."
          body={"We make innovation repeatable and foresight practical—so strategy turns into measurable outcomes."}
          imageBase="/img/about"
          imageAlt="About Doulab"
          width={600}
          height={400}
          primaryCta={{ to: '/services/clarityscan', label: 'Start with ClarityScan', dataCta: 'cta.about.hero.clarityscan' }}
          secondaryCta={{ to: '/contact', label: 'Book a discovery call', dataCta: 'cta.about.hero.book_call' }}
          ctaNote="Get your baseline in 15-20 minutes."
          id="about-hero"
          ariaLabelledbyId="about-hero-title"
          eager
        />

        <section className="section" id="our-story" aria-labelledby="our-story-title">
          <h2 id="our-story-title">Our Story</h2>
          <p className="sectionLead">
            We started Doulab to answer a tough question: <em>why are entrepreneurship and innovation so hard to do consistently—and how can we make a practical recipe for repeatable, sustainable, and scalable innovation in any context?</em>
          </p>
          <p className="sectionLead">
            That quest gave birth to the <strong>MicroCanvas Framework (MCF)</strong> and the <strong>Innovation Maturity Model — Program (IMM-P)</strong>. Together they guide teams end‑to‑end and help leaders measure and steadily improve innovation capability. Today, we extend that work through <strong>Vigía Futura</strong>.
          </p>
        </section>

        <section className="section" id="service-pillars" aria-labelledby="service-pillars-title">
          <h2 id="service-pillars-title">Our Service Pillars</h2>
          <div className="cardGrid">
            <article className="card">
              <Target className="cardIcon" aria-hidden="true" />
              <h3>Diagnostics: Know where you stand</h3>
              <p>Quick baselines of innovation maturity; pinpoint gaps with evidence-based tools like ClarityScan.</p>
              <div className="cardFooter">
                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.diagnostics">Explore diagnostics &rarr;</Link>
              </div>
            </article>

            <article className="card">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3>Workshops: Spark aligned action</h3>
              <p>Focused sessions that unlock decisions and translate strategy into practical next steps.</p>
              <div className="cardFooter">
                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.workshops">Explore workshops &rarr;</Link>
              </div>
            </article>

            <article className="card">
              <Layers className="cardIcon" aria-hidden="true" />
              <h3>Programs: Build innovation capacity</h3>
              <p>Structured journeys — like IMM-P — that install culture, process, and metrics to scale reliably.</p>
              <div className="cardFooter">
                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.programs">Explore programs &rarr;</Link>
              </div>
            </article>

            <article className="card">
              <Users className="cardIcon" aria-hidden="true" />
              <h3>Coaching &amp; mentoring: Personalized guidance</h3>
              <p>Targeted 1:1 or group support to remove blockers and build internal capability.</p>
              <div className="cardFooter">
                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.coaching">Explore coaching &amp; mentoring &rarr;</Link>
              </div>
            </article>

            <article className="card">
              <Globe className="cardIcon" aria-hidden="true" />
              <h3>Future studies: Anticipate &amp; shape tomorrow</h3>
              <p>Foresight research and training to spot trends, assess risk, and guide resilient choices.</p>
              <div className="cardFooter">
                <Link to="/vigia-futura" className="cardCta" data-cta="cta.about.pillars.futures">Discover Vigía Futura &rarr;</Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section" aria-labelledby="cta-title">
          <div className="finalCta">
            <h2 id="cta-title">Ready to make innovation repeatable?</h2>
            <p>Start with a quick diagnostic or book a discovery call. We’ll meet you where you are and co-create the path forward.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.about.final.start_diagnostic">
                Start with a diagnostic
              </Link>
              <Link to="/contact" className="buttonSecondary" data-cta="cta.about.final.contact">
                Talk to us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

