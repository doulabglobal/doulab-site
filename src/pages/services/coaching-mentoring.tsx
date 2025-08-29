// src/pages/services/coaching-mentoring.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {
    Users,
    Briefcase,
    Target,
    Calendar,
    MessageSquare,
    Clock,
    ShieldCheck,
    Sparkles,
    ArrowRight,
} from 'lucide-react';

export default function CoachingMentoringPage(): ReactNode {
    // Structured data
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Coaching & Mentoring',
        serviceType: 'Executive and team coaching for innovation',
        provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
        url: 'https://doulab.net/services/coaching-mentoring',
        description:
            'Personalized guidance for leaders and teams to turn strategy into execution and build repeatable innovation using MCF v2.1 and IMM®.',
        areaServed: 'Global',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Do you coach individual leaders and teams?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We offer 1:1 executive coaching and small-group sessions for leadership teams.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is there a minimum commitment?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most retainers run quarterly. We can pilot a one-month engagement if helpful.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do we measure progress?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We co-define outcomes and light metrics, then review momentum and blockers each session.',
                },
            },
        ],
    };

    return (
        <Layout
            title="Coaching & Mentoring — Practical guidance, real momentum | Doulab"
            description="1:1 and team coaching to turn strategy into execution, build repeatable innovation, and move faster with less risk."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services/coaching-mentoring" />
                {/* LCP: Preload hero image (browser will still pick AVIF/WEBP at render) */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/coaching-hero.png"
                    imageSrcSet="/img/coaching-hero.avif 1x, /img/coaching-hero.webp 1x, /img/coaching-hero.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="cm-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="cm-hero-title" className="heroTitle">Coaching &amp; Mentoring</h1>
                            <p className="heroSubtitle">Practical guidance. Real momentum.</p>
                            <p className="heroText">
                                1:1 and team coaching that helps leaders <strong>turn strategy into execution</strong>, build
                                <strong> repeatable innovation</strong>, and navigate change with clarity—grounded in
                                <strong> MicroCanvas® v2.1</strong> and <strong>IMM®</strong>.
                            </p>
                            {/* Trust line (text-only) */}
                            <p className="sectionLead" style={{ marginTop: '.25rem' }}>
                                Leaders at public institutions and financial services use our coaching to de-risk decisions.
                            </p>

                            <div className="heroCtas">
                                {/* Zaraz taxonomy: cta.services.coaching.hero.contact */}
                                <Link to="/contact" className="buttonPrimary" data-cta="cta.services.coaching.hero.contact">
                                    Book an intro call
                                </Link>
                                {/* Zaraz taxonomy: cta.services.coaching.hero.clarityscan */}
                                <Link to="/services/clarityscan" className="buttonSecondary" data-cta="cta.services.coaching.hero.clarityscan">
                                    Start with a diagnostic
                                </Link>
                            </div>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/coaching-hero.avif" type="image/avif" />
                                <source srcSet="/img/coaching-hero.webp" type="image/webp" />
                                <img
                                    src="/img/coaching-hero.png"
                                    alt="Coaching & mentoring"
                                    className="heroImage"
                                    loading="eager"
                                    fetchPriority="high"
                                    width="600"
                                    height="400"
                                />
                            </picture>
                        </div>
                    </div>
                </section>

                {/* Who it’s for */}
                <section className="section" aria-labelledby="cm-who-title">
                    <h2 id="cm-who-title">Who it’s for</h2>
                    <p className="sectionLead">
                        Executives, founders, and transformation leaders who want a <strong>thinking partner</strong> to move faster with
                        <strong> less risk</strong>—and bring teams along confidently.
                    </p>

                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cm-who-exec">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-who-exec">Executive leaders</h3>
                            <p>Navigate ambiguity, set focus, and align your org around what matters.</p>
                            <ul>
                                <li>Sharper priorities &amp; OKRs</li>
                                <li>Decision support</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cm-who-owner">
                            <Briefcase className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-who-owner">Innovation owners</h3>
                            <p>Structure discovery, delivery, and learning loops that actually stick.</p>
                            <ul>
                                <li>Evidence-first cadence</li>
                                <li>Reusable playbooks</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cm-who-gtm">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-who-gtm">Product / GTM leaders</h3>
                            <p>Clarify value, reduce waste, and ship customer-centered outcomes.</p>
                            <ul>
                                <li>JTBD &amp; experiments</li>
                                <li>Outcome tracking</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Retainers */}
                <section className="section" aria-labelledby="cm-retainers-title">
                    <h2 id="cm-retainers-title">Coaching retainers</h2>
                    <p className="sectionLead">
                        Choose the cadence that fits. All tiers include a shared workspace, action tracking, and light async support.
                    </p>

                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cm-lite">
                            <Clock className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-lite">Lite Retainer</h3>
                            <p>Focused support for sharp decisions and checkpoints.</p>
                            <ul>
                                <li><strong>2 live hours</strong> / month</li>
                                <li><strong>1 async hour</strong> / month</li>
                            </ul>
                            <div className="cardFooter">
                                {/* cta.services.coaching.retainer.lite */}
                                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.lite">
                                    Enquire about Lite <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="cm-standard">
                            <Calendar className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-standard">Standard Retainer</h3>
                            <p>Steady guidance for monthly strategic support and momentum.</p>
                            <ul>
                                <li><strong>4 live hours</strong> / month</li>
                                <li><strong>2 async hours</strong> / month</li>
                            </ul>
                            <div className="cardFooter">
                                {/* cta.services.coaching.retainer.standard */}
                                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.standard">
                                    Enquire about Standard <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="cm-pro">
                            <ShieldCheck className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-pro">Pro Retainer</h3>
                            <p>High-engagement mentoring for deep strategic work and priority support.</p>
                            <ul>
                                <li><strong>6 live hours</strong> / month</li>
                                <li><strong>3 async hours</strong> / month</li>
                            </ul>
                            <div className="cardFooter">
                                {/* cta.services.coaching.retainer.pro */}
                                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.pro">
                                    Enquire about Pro <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="cm-enterprise">
                            <Sparkles className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-enterprise">Enterprise Retainer</h3>
                            <p>Executive mentoring for leaders across multiple initiatives.</p>
                            <ul>
                                <li><strong>8 live hours</strong> / month</li>
                                <li><strong>4 async hours</strong> / month</li>
                            </ul>
                            <div className="cardFooter">
                                {/* cta.services.coaching.retainer.enterprise */}
                                <Link className="cardCta" to="/contact" data-cta="cta.services.coaching.retainer.enterprise">
                                    Enquire about Enterprise <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    </div>

                    <p className="sectionLead" style={{ marginTop: '.75rem' }}>
                        <em>Monthly; cancel anytime with 15-day notice.</em>
                    </p>
                </section>

                {/* Outcomes */}
                <section className="section" aria-labelledby="cm-outcomes-title">
                    <h2 id="cm-outcomes-title">What you’ll get</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cm-clarity">
                            <MessageSquare className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-clarity">Clarity &amp; focus</h3>
                            <p>Sharper priorities and faster decisions with confidence.</p>
                            <ul>
                                <li>Cleaner OKRs</li>
                                <li>Decision cadence</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cm-methods">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-methods">Repeatable methods</h3>
                            <p>MCF + IMM playbooks you can reuse across teams and initiatives.</p>
                            <ul>
                                <li>Reusable canvases</li>
                                <li>Evidence-first loops</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cm-measured">
                            <ShieldCheck className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-measured">Measured progress</h3>
                            <p>Light instrumentation to track actions, risks, and delivered outcomes.</p>
                            <ul>
                                <li>Momentum reviews</li>
                                <li>Outcome tracking &amp; reviews</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* How we coach */}
                <section className="section" aria-labelledby="cm-how-title">
                    <h2 id="cm-how-title">How we coach</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cm-format">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-format">1:1 or small group</h3>
                            <p>Confidential space for executive problem-solving and alignment.</p>
                            <ul>
                                <li>Leader or core team</li>
                                <li>Goal-oriented sessions</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cm-case">
                            <Briefcase className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-case">Case-based sessions</h3>
                            <p>We work on your live priorities—no generic lectures or filler.</p>
                            <ul>
                                <li>On-your-context</li>
                                <li>Actionable outputs</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cm-cadence">
                            <Calendar className="cardIcon" aria-hidden="true" />
                            <h3 id="cm-cadence">Cadence that fits</h3>
                            <p>Weekly, bi-weekly, or monthly—plus async support between calls.</p>
                            <ul>
                                <li>30/45/60-min sessions</li>
                                <li>Light async reviews</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section" aria-labelledby="cm-cta-title">
                    <div className="finalCta">
                        <h2 id="cm-cta-title">Ready to grow with guidance?</h2>
                        <p>Tell us your goals and constraints. We’ll recommend the retainer that fits and start making progress fast.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            {/* cta.services.coaching.final.contact */}
                            <Link to="/contact" className="buttonPrimary" data-cta="cta.services.coaching.final.contact">
                                Book an intro call
                            </Link>
                            {/* cta.services.coaching.final.clarityscan */}
                            <Link to="/services/clarityscan" className="buttonSecondary" data-cta="cta.services.coaching.final.clarityscan">
                                Start with ClarityScan®
                            </Link>
                        </div>
                        {/* Privacy microcopy */}
                        <p className="sectionLead" style={{ marginTop: '.75rem' }}>
                            <small><em>Privacy-first: no tracking pixels. Email only.</em></small>
                        </p>
                    </div>
                </section>

                {/* On-page FAQ content is above; JSON-LD rich results added in <Head> */}
                <section className="section" aria-labelledby="cm-faq-title">
                    <h2 id="cm-faq-title">FAQ</h2>
                    <div className="faqGrid">
                        <details>
                            <summary>Do you coach individual leaders and teams?</summary>
                            <p>Yes. We offer 1:1 executive coaching and small-group sessions for leadership teams.</p>
                        </details>
                        <details>
                            <summary>Is there a minimum commitment?</summary>
                            <p>Most retainers run quarterly. We can pilot a one-month engagement if helpful.</p>
                        </details>
                        <details>
                            <summary>How do we measure progress?</summary>
                            <p>We co-define outcomes and light metrics, then review momentum and blockers each session.</p>
                        </details>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
