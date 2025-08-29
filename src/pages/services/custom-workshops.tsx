// src/pages/services/custom-workshops.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import {
    Lightbulb,
    CalendarClock,
    Users,
    Target,
    ClipboardCheck,
    Wand2,
    Rocket,
} from 'lucide-react';

export default function CustomWorkshopsPage(): ReactNode {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Custom Workshops',
        serviceType: 'Innovation workshop facilitation',
        provider: {
            '@type': 'Organization',
            name: 'Doulab',
            url: 'https://doulab.net',
        },
        url: 'https://doulab.net/services/custom-workshops',
        areaServed: 'Global',
        description:
            'Outcome-driven sessions to align teams, decide faster, and create momentum. Half-day or full-day formats, on-site or remote.',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Can you customize the agenda?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'Yes. We tailor content, tools, and outcomes to your goals, timeline, and team size.',
                },
            },
            {
                '@type': 'Question',
                name: 'What prep is required?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'Minimal. We share a short intake and optional materials list (e.g., recent plans or KPIs).',
                },
            },
            {
                '@type': 'Question',
                name: 'Remote or in-person?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        'Both. We use collaborative canvases for remote and whiteboards/templates in person.',
                },
            },
        ],
    };

    return (
        <Layout
            title="Custom Workshops — Align decisions & accelerate outcomes | Doulab"
            description="Outcome-driven sessions to align teams, decide faster, and create momentum. Half-day or full-day formats, on-site or remote."
        >
            <Head>
                <link rel="canonical" href="https://doulab.net/services/custom-workshops" />
                {/* Preload LCP hero image (PNG fallback). Browser will still pick AVIF/WEBP if present. */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/workshops-hero.png"
                    imageSrcSet="/img/workshops-hero.avif 1x, /img/workshops-hero.webp 1x, /img/workshops-hero.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="cw-hero-title">
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="cw-hero-title" className="heroTitle">
                                Custom Workshops
                            </h1>
                            <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                                Align. Decide. Move.
                            </p>
                            <p className="heroText">
                                We design and run <strong>tailored workshops</strong> that unblock decisions and turn strategy
                                into action. Built on MicroCanvas® and IMM®, delivered on-site or remote, and tuned to your
                                goals and constraints.
                            </p>

                            {/* Outcomes mini-list */}
                            <div aria-label="Outcomes you can expect">
                                <p className="heroText" style={{ marginTop: '0.5rem', fontWeight: 600 }}>
                                    Outcomes you can expect
                                </p>
                                <ul>
                                    <li>Key decisions made with clear owners</li>
                                    <li>A shared, prioritized plan for the next 30/60/90 days</li>
                                    <li>Reusable canvases and artifacts you can evolve</li>
                                </ul>
                            </div>

                            <div className="heroCtas">
                                <Link
                                    to="/contact"
                                    className="buttonPrimary"
                                    data-cta="cta.services.workshops.hero.contact"
                                >
                                    Start a workshop brief
                                </Link>
                                <Link
                                    to="/services"
                                    className="buttonSecondary"
                                    data-cta="cta.services.workshops.hero.services"
                                >
                                    See all services
                                </Link>
                            </div>

                            {/* Micro-proof line */}
                            <p className="heroText" style={{ marginTop: '0.75rem', opacity: 0.9 }}>
                                <em>Trusted by teams at OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones.</em>
                            </p>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/workshops-hero.avif" type="image/avif" />
                                <source srcSet="/img/workshops-hero.webp" type="image/webp" />
                                <img
                                    src="/img/workshops-hero.png"
                                    alt="Custom workshops illustration"
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

                {/* When to run a workshop */}
                <section className="section" id="cw-when" aria-labelledby="cw-who-title">
                    <h2 id="cw-who-title">When to run a workshop</h2>
                    <p className="sectionLead">
                        Use a custom workshop when you need a <strong>decision</strong>, a <strong>shared plan</strong>, or a{' '}
                        <strong>jump-start</strong> — without weeks of meetings.
                    </p>

                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cw-why-strategy">
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-why-strategy">Strategy sprints</h3>
                            <p>Clarify priorities, OKRs, and bets using evidence-based tools.</p>
                            <ul>
                                <li>Align on focus and trade-offs</li>
                                <li>Produce a one-page plan</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cw-why-alignment">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-why-alignment">Team alignment</h3>
                            <p>Get cross-functional buy-in and remove blockers in one session.</p>
                            <ul>
                                <li>Shared problem framing</li>
                                <li>Commitments &amp; cadence</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cw-why-gtm">
                            <Target className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-why-gtm">Go-to-Market</h3>
                            <p>Frame customer/jobs, offers, and tests that de-risk launch.</p>
                            <ul>
                                <li>Target segments &amp; hypotheses</li>
                                <li>MVP metrics &amp; signals</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Workshop formats */}
                <section className="section" id="cw-formats" aria-labelledby="cw-offers-title">
                    <h2 id="cw-offers-title">Workshop formats</h2>

                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cw-format-halfday">
                            <CalendarClock className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-format-halfday">Custom Innovation Workshop (half-day)</h3>
                            <p>
                                A focused <strong>3.5-hour</strong> session built on MicroCanvas® or complementary frameworks.
                                Ideal for rapid alignment, prioritization, and a quick-win plan.
                            </p>
                            <ul>
                                <li>Delivery: on-site or remote</li>
                                <li>Includes: pre-work brief, decision log, 30/60/90 template</li>
                            </ul>
                            <div className="cardFooter">
                                <Link
                                    to="/contact"
                                    className="cardCta"
                                    data-cta="cta.services.workshops.formats.halfday.brief"
                                >
                                    Start a half-day brief →
                                </Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="cw-format-fullday">
                            <CalendarClock className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-format-fullday">Custom Innovation Workshop (full-day)</h3>
                            <p>
                                A deeper <strong>7-hour</strong> session that moves from discovery to decisions and next steps.
                                Includes pre-work review and post-work synthesis.
                            </p>
                            <ul>
                                <li>Delivery: on-site or remote</li>
                                <li>Includes: pre-work review, prioritization map, action board</li>
                            </ul>
                            <div className="cardFooter">
                                <Link
                                    to="/contact"
                                    className="cardCta"
                                    data-cta="cta.services.workshops.formats.fullday.brief"
                                >
                                    Start a full-day brief →
                                </Link>
                            </div>
                        </article>
                    </div>

                    <p className="sectionLead" style={{ marginTop: '0.5rem' }}>
                        <em>
                            Typical effort (client time): Half-day ~4–5 hours, Full-day ~8–9 hours including pre/post touchpoints.
                            Pricing on request.
                        </em>
                    </p>
                </section>

                {/* What you’ll leave with */}
                <section className="section" id="cw-outcomes" aria-labelledby="cw-outcomes-title">
                    <h2 id="cw-outcomes-title">What you’ll leave with</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cw-outcome-decisions">
                            <ClipboardCheck className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-outcome-decisions">Decisions made</h3>
                            <p>Clear choices documented with rationale, owners, and due dates.</p>
                            <ul>
                                <li>Gate-ready decision summaries</li>
                                <li>Risks &amp; assumptions log</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cw-outcome-artifacts">
                            <Wand2 className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-outcome-artifacts">Artifacts you can reuse</h3>
                            <p>Working canvases, prioritization maps, and action boards.</p>
                            <ul>
                                <li>Editable templates</li>
                                <li>Versioned in your repos</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="cw-outcome-3090">
                            <Rocket className="cardIcon" aria-hidden="true" />
                            <h3 id="cw-outcome-3090">30–60–90 plan</h3>
                            <p>Sequenced actions, owners, and success metrics for momentum.</p>
                            <ul>
                                <li>Cadence and checkpoints</li>
                                <li>Links to dashboards</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Sample agendas (aligned to MCF v2.1 + IMM®) */}
                <section className="section" id="cw-agendas" aria-labelledby="cw-agenda-title">
                    <h2 id="cw-agenda-title">Sample agendas (MCF v2.1 + IMM®)</h2>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="cw-agenda-halfday">
                            <h3 id="cw-agenda-halfday">Half-day (3.5h) — MCF Discovery rail</h3>
                            <ul>
                                <li>MCF: Context &amp; goals (15m)</li>
                                <li>MCF: Problem Definition Canvas (30m)</li>
                                <li>MCF: Customer / Jobs-to-Be-Done Canvas (45m)</li>
                                <li>MCF: Option mapping + Experiment backlog (60m)</li>
                                <li>Break + alignment (15m)</li>
                                <li>MCF: Prioritization (ICE/RICE) + 30-day plan (30m)</li>
                                <li>IMM: Gate prep (decision log, owners) (15m)</li>
                            </ul>
                            <p><em>Gate-ready output:</em> Discovery decision pack (Go/No-Go), ranked tests, owners, and dates.</p>
                        </article>

                        <article className="card" aria-labelledby="cw-agenda-fullday">
                            <h3 id="cw-agenda-fullday">Full-day (7h) — Discovery → Validation</h3>
                            <ul>
                                <li>MCF: Context &amp; constraints, objectives (30m)</li>
                                <li>MCF: Discovery synthesis + evidence review (90m)</li>
                                <li>MCF: Problem Definition + hypotheses (60m)</li>
                                <li>Breaks (30m total)</li>
                                <li>MCF: Solution Framing + Experiment Design Canvas (90m)</li>
                                <li>MCF: Prioritization &amp; roadmap (60m)</li>
                                <li>IMM: Gate review (Gate 1 or 2) + 30-60-90 plan (60m)</li>
                            </ul>
                            <p><em>Gate-ready output:</em> Hypotheses, experiment designs, prioritized roadmap, and 30-60-90 with KPIs.</p>
                        </article>

                        <article className="card" aria-labelledby="cw-agenda-themes">
                            <h3 id="cw-agenda-themes">Popular tracks (mapped to MCF/IMM)</h3>
                            <ul>
                                <li>Innovation strategy &amp; operating model → MCF Operating Model + IMM governance cadence</li>
                                <li>Customer discovery &amp; GTM → MCF Discovery/Problem/Customer + Gate 1 decision pack</li>
                                <li>Foresight in planning → Futures lenses + risks/opportunities, IMM evidence cadence</li>
                            </ul>
                            <p style={{ marginTop: '0.25rem' }}>
                                <em>Need a different rail?</em> We tailor canvases &amp; gates to your context.
                            </p>
                        </article>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section" id="cw-cta" aria-labelledby="cw-cta-title">
                    <div className="finalCta">
                        <h2 id="cw-cta-title">Ready to align and move?</h2>
                        <p>Send us your goals and constraints. We’ll design the right workshop and get you moving fast.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            <Link
                                to="/contact"
                                className="buttonPrimary"
                                data-cta="cta.services.workshops.final.contact"
                            >
                                Start a workshop brief
                            </Link>
                            <Link
                                to="/services/clarityscan"
                                className="buttonSecondary"
                                data-cta="cta.services.workshops.final.clarityscan"
                            >
                                Start with a diagnostic
                            </Link>
                        </div>
                        <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
                            <em>
                                We don’t run third-party trackers on this site. If you choose to schedule off-site, that provider’s
                                privacy policy applies.
                            </em>
                        </p>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
