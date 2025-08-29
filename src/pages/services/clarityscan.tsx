// src/pages/services/clarityscan/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {
    Gauge,
    Target,
    CheckCircle,
    PlayCircle,
    Layers,
    CalendarClock,
} from 'lucide-react';

export default function ClarityScanPage(): ReactNode {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'ClarityScan®',
        serviceType: 'Innovation/Foresight Diagnostic',
        provider: {
            '@type': 'Organization',
            name: 'Doulab',
            url: 'https://doulab.net',
        },
        url: 'https://doulab.net/services/clarityscan',
        areaServed: 'Global',
        potentialAction: {
            '@type': 'ScheduleAction',
            target: 'https://calendly.com/lasantiago/clarityscan',
        },
        description:
            'A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How fast can we run ClarityScan®?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'We can usually schedule within a few days. The live session is about 30 minutes.',
                },
            },
            {
                '@type': 'Question',
                name: 'Who should attend?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'Ideally a sponsor plus 2–4 team members across product, operations, and delivery.',
                },
            },
            {
                '@type': 'Question',
                name: 'What do we need to prepare?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'A brief on your goals and context, and any existing OKRs, roadmap, or metrics.',
                },
            },
        ],
    };

    return (
        <Layout
            title="ClarityScan® — Rapid innovation maturity diagnostic | Doulab"
            description="A rapid, evidence-based diagnostic to baseline innovation/foresight maturity and pinpoint priority actions."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services/clarityscan" />
                {/* Preload LCP hero image; browser will choose best source */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/clarityscan-hero.png"
                    imageSrcSet="/img/clarityscan-hero.avif 1x, /img/clarityscan-hero.webp 1x, /img/clarityscan-hero.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="clarityscan-hero-title">
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="clarityscan-hero-title" className="heroTitle">
                                ClarityScan®
                            </h1>
                            <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                                A rapid diagnostic to see where you are — and what to do next.
                            </p>
                            <p className="heroText">
                                In under 30 minutes, ClarityScan® maps your innovation/foresight maturity across strategy,
                                culture, process, and results — then pinpoints the top actions to unlock momentum.
                            </p>

                            {/* Outcomes mini-list */}
                            <div aria-label="Outcomes you can expect">
                                <p className="heroText" style={{ marginTop: '0.5rem', fontWeight: 600 }}>
                                    Outcomes you can expect
                                </p>
                                <ul>
                                    <li>Single-page maturity snapshot (PDF)</li>
                                    <li>Top 3–5 priority moves with owners &amp; cadence</li>
                                    <li>30/60/90-day action plan template (editable)</li>
                                </ul>
                            </div>

                            <div className="heroCtas">
                                <a
                                    href="https://calendly.com/lasantiago/clarityscan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="buttonPrimary"
                                    data-cta="cta.services.clarityscan.hero.run"
                                    aria-label="Schedule ClarityScan on Calendly (opens in a new tab)"
                                >
                                    Run ClarityScan®
                                </a>
                                <Link
                                    to="/contact"
                                    className="buttonSecondary"
                                    data-cta="cta.services.clarityscan.hero.contact"
                                >
                                    Talk to us
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/clarityscan-hero.avif" type="image/avif" />
                                <source srcSet="/img/clarityscan-hero.webp" type="image/webp" />
                                <img
                                    src="/img/clarityscan-hero.png"
                                    alt="ClarityScan diagnostic visual"
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

                {/* What you get */}
                <section className="section" id="benefits" aria-labelledby="clarityscan-benefits-title">
                    <h2 id="clarityscan-benefits-title">What you get</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="benefit-snapshot">
                            <Gauge className="cardIcon" aria-hidden="true" />
                            <h3 id="benefit-snapshot">Maturity snapshot</h3>
                            <p>Clear, visual read of your current capability across the four pillars.</p>
                            <ul>
                                <li>Strategy, Culture, Process, Results</li>
                                <li>Single view of strengths &amp; gaps (Innovation and/or Foresight)</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="benefit-priorities">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3 id="benefit-priorities">Priority moves</h3>
                            <p>Top 3–5 actions for the next 30–90 days, aligned to your goals.</p>
                            <ul>
                                <li>Impact vs. effort mapping</li>
                                <li>Owners, cadence, checkpoints</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="benefit-next">
                            <CheckCircle className="cardIcon" aria-hidden="true" />
                            <h3 id="benefit-next">Next-step paths</h3>
                            <p>Recommended options — workshops, programs, or coaching — no fluff.</p>
                            <ul>
                                <li>DIY or guided acceleration</li>
                                <li>Gated decisions &amp; KPIs</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* How it works */}
                <section className="section" id="how" aria-labelledby="clarityscan-how-title">
                    <h2 id="clarityscan-how-title">How it works</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="how-1">
                            <Layers className="cardIcon" aria-hidden="true" />
                            <h3 id="how-1">1) Quick intake</h3>
                            <p>Short context so we tailor the diagnostic to your reality.</p>
                            <ul>
                                <li>Simple survey + objectives</li>
                                <li>Key constraints &amp; timelines</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="how-2">
                            <PlayCircle className="cardIcon" aria-hidden="true" />
                            <h3 id="how-2">2) 30-minute session</h3>
                            <p>Live walkthrough of pillars, signals, and evidence with your team.</p>
                            <ul>
                                <li>Shared understanding</li>
                                <li>Evidence-led discussion</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="how-3">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3 id="how-3">3) Findings brief</h3>
                            <p>Concise readout: maturity snapshot, gaps, and priority actions.</p>
                            <ul>
                                <li>Single-page summary</li>
                                <li>Owners &amp; next steps</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="how-4">
                            <CheckCircle className="cardIcon" aria-hidden="true" />
                            <h3 id="how-4">4) Action options</h3>
                            <p>Clear next steps — DIY, Doulab support, or hybrid acceleration.</p>
                            <ul>
                                <li>Workshop/program pathways</li>
                                <li>Cadence &amp; governance</li>
                            </ul>
                        </article>
                    </div>

                    {/* Scope note */}
                    <p className="sectionLead" style={{ marginTop: '0.75rem' }}>
                        <em>
                            Note: ClarityScan® is a rapid read, not a full program diagnosis. For deeper assessments, see
                            ClarityScan® Plus or our IMM® Programs.
                        </em>
                    </p>
                </section>

                {/* Pricing & formats */}
                <section className="section" id="formats" aria-labelledby="clarityscan-pricing-title">
                    <h2 id="clarityscan-pricing-title">Pricing &amp; formats</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="format-core">
                            <CalendarClock className="cardIcon" aria-hidden="true" />
                            <h3 id="format-core">ClarityScan® — Core</h3>
                            <p>30-minute session + findings brief + 30/60/90-day plan. Remote delivery.</p>
                            <p><strong>Typical effort:</strong> ~2 hours total (intake + session + brief).</p>
                            <div className="cardFooter">
                                <a
                                    className="cardCta"
                                    href="https://calendly.com/lasantiago/clarityscan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cta="cta.services.clarityscan.formats.core.schedule"
                                    aria-label="Schedule ClarityScan Core on Calendly (opens in a new tab)"
                                >
                                    Schedule now →
                                </a>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="format-plus">
                            <CalendarClock className="cardIcon" aria-hidden="true" />
                            <h3 id="format-plus">ClarityScan® — Plus</h3>
                            <p>Everything in Core + stakeholder interviews + tailored roadmap review.</p>
                            <p><strong>Typical effort:</strong> ~4–6 hours total (adds interviews + roadmap review). Pricing on request.</p>
                            <div className="cardFooter">
                                <Link
                                    className="cardCta"
                                    to="/contact"
                                    data-cta="cta.services.clarityscan.formats.plus.proposal"
                                >
                                    Request a proposal →
                                </Link>
                            </div>
                        </article>
                    </div>

                    {/* Cross-link to deeper programs */}
                    <p className="sectionLead" style={{ marginTop: '0.5rem' }}>
                        Prefer a deeper assessment? Explore our{' '}
                        <Link to="/services/innovation-maturity">IMM® Programs</Link>.
                    </p>
                </section>

                {/* Who it's for */}
                <section className="section" id="ideal" aria-labelledby="clarityscan-ideal-title">
                    <h2 id="clarityscan-ideal-title">Who it’s for</h2>
                    <ul>
                        <li>Leaders who need a fast, evidence-based read on capability and gaps.</li>
                        <li>Teams about to refresh strategy, OKRs, or transformation roadmaps.</li>
                        <li>Organizations deciding where to invest to accelerate outcomes.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="section" id="faq" aria-labelledby="clarityscan-faq-title">
                    <h2 id="clarityscan-faq-title">FAQ</h2>
                    <div className="cardGrid">
                        <article className="card">
                            <h3>How fast can we run ClarityScan®?</h3>
                            <p>We can usually schedule within a few days. The live session is ~30 minutes.</p>
                        </article>
                        <article className="card">
                            <h3>Who should attend?</h3>
                            <p>Ideally a sponsor + 2–4 team members across product, ops, and delivery.</p>
                        </article>
                        <article className="card">
                            <h3>What do we need to prepare?</h3>
                            <p>A brief on your goals/context and any existing OKRs, roadmap, or metrics.</p>
                        </article>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section" id="cta" aria-labelledby="clarityscan-cta-title">
                    <div className="finalCta">
                        <h2 id="clarityscan-cta-title">Ready to get a clear read?</h2>
                        <p>Run ClarityScan® and get your maturity snapshot plus the exact next steps to take.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            <a
                                href="https://calendly.com/lasantiago/clarityscan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="buttonPrimary"
                                data-cta="cta.services.clarityscan.final.run"
                                aria-label="Schedule ClarityScan on Calendly (opens in a new tab)"
                            >
                                Start ClarityScan® →
                            </a>
                            <Link
                                to="/contact"
                                className="buttonSecondary"
                                data-cta="cta.services.clarityscan.final.contact"
                            >
                                Book a discovery call →
                            </Link>
                        </div>

                        {/* Privacy note */}
                        <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
                            <em>
                                We don’t run third-party trackers on this site. Scheduling happens on Calendly; information you share
                                there is covered by their privacy policy.
                            </em>
                        </p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
