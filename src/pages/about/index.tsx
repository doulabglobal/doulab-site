// src/pages/about/index.tsx
import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Target, Lightbulb, Layers, Users, Globe } from 'lucide-react';
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
                name: 'What is the MicroCanvas® Framework (MCF)?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A modular set of canvases that makes innovation repeatable—from discovery to delivery.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is the Innovation Maturity Model (IMM)®?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'A structured way to assess and improve innovation capability across strategy, culture, process, and results.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do engagements start?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'With a quick discovery call or diagnostic. We map goals and constraints, then recommend a workshop, program, or coaching path.',
                },
            },
        ],
    };

    return (
        <Layout
            title="About — Doulab"
            description="Discover Doulab's vision, story, and service model — innovation made repeatable."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/about" />
                <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                {/* LCP preload for hero image (React camelCase props) */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/about.png"
                    imageSrcSet="/img/about.avif 1x, /img/about.webp 1x, /img/about.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="about-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="about-hero-title" className="heroTitle">About Doulab</h1>
                            <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                                We help unlock global prosperity by helping others create better futures.
                            </p>
                            <p className="heroText">
                                We make innovation <strong>repeatable</strong> and foresight <strong>practical</strong>—so strategy turns into measurable outcomes.
                            </p>

                            <nav className="subnav" aria-label="About page sections">
                                <a href="#our-story">Our Story</a>
                                <a href="#service-pillars">Our service pillars</a>
                                <a href="#ecosystem-building">Ecosystem Building</a>
                                <a href="#faq">FAQ</a>
                            </nav>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/about.avif" type="image/avif" />
                                <source srcSet="/img/about.webp" type="image/webp" />
                                <img
                                    src="/img/about.png"
                                    alt="About Doulab"
                                    className="heroImage"
                                    loading="eager"
                                    fetchPriority="high"
                                    decoding="async"
                                    width={600}
                                    height={400}
                                />
                            </picture>
                        </div>
                    </div>
                </section>

                {/* Our Story — grouped strictly by year */}
                <section className="section" id="our-story" aria-labelledby="our-story-title">
                    <h2 id="our-story-title">Our Story</h2>
                    <p className="sectionLead">
                        We started Doulab to answer a tough question: <em>why are entrepreneurship and innovation so hard to do consistently—and how can we make a practical recipe for repeatable, sustainable, and scalable innovation in any context?</em>
                    </p>
                    <p className="sectionLead">
                        That quest gave birth to the <strong>MicroCanvas® Framework (MCF)</strong> and the <strong>Innovation Maturity Model (IMM®)</strong>. Together they guide teams end-to-end and help leaders measure and steadily improve innovation capability. Today, we extend that work through <strong>Vigía Futura</strong>.
                    </p>

                    {/* …timeline unchanged… */}
                </section>

                {/* Proof logos */}
                {/* …unchanged… */}

                {/* Our Service Pillars (adds a hidden alias for legacy #principles links) */}
                <section className="section" id="service-pillars" aria-labelledby="service-pillars-title">
                    {/* Back-compat alias for older links that pointed to #principles */}
                    <span id="principles" style={{ position: 'relative', top: '-80px' }} aria-hidden="true" />
                    <h2 id="service-pillars-title">Our Service Pillars</h2>
                    <div className="cardGrid">
                        <article className="card">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3>Diagnostics: Know where you stand</h3>
                            <p>Quick baselines of innovation maturity; pinpoint gaps with evidence-based tools like ClarityScan®.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.diagnostics">Explore diagnostics →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3>Workshops: Spark aligned action</h3>
                            <p>Focused sessions that unlock decisions and translate strategy into practical next steps.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.workshops">Explore workshops →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Layers className="cardIcon" aria-hidden="true" />
                            <h3>Programs: Build innovation capacity</h3>
                            <p>Structured journeys—like IMM-P—that install culture, process, and metrics to scale reliably.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.programs">Explore programs →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3>Coaching &amp; mentoring: Personalized guidance</h3>
                            <p>Targeted 1:1 or group support to remove blockers and build internal capability.</p>
                            <div className="cardFooter">
                                <Link to="/what-we-do" className="cardCta" data-cta="cta.about.pillars.coaching">Explore coaching &amp; mentoring →</Link>
                            </div>
                        </article>

                        <article className="card">
                            <Globe className="cardIcon" aria-hidden="true" />
                            <h3>Future studies: Anticipate &amp; shape tomorrow</h3>
                            <p>Foresight research and training to spot trends, assess risk, and guide resilient choices.</p>
                            <div className="cardFooter">
                                <Link to="/vigia-futura" className="cardCta" data-cta="cta.about.pillars.futures">Discover Vigía Futura →</Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Ecosystem Building */}
                {/* …unchanged… */}

                {/* FAQ */}
                {/* …unchanged… */}

                {/* Final CTA */}
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
