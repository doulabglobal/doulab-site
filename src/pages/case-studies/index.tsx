import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { CheckCircle, LineChart } from 'lucide-react';

export default function CaseStudies() {
    return (
        <Layout title="Case Studies" description="Selected projects and measurable outcomes from Doulab">
            <Head>
                <link rel="canonical" href="https://doulab.net/case-studies" />
            </Head>

            <main className="container">
                {/* Intro */}
                <section className="section">
                    <header className="margin-bottom--lg">
                        <h1>Case Studies</h1>
                        <p className="lead">
                            Outcome-oriented snapshots tied to IMM gates and KPIs, referencing MicroCanvas® 2.1 processes for
                            traceability and repeatability.
                        </p>
                        <div className="btn-row">
                            <Link className="btn-primary" to="/contact" data-cta="cases_contact">Start a project</Link>
                            <Link className="btn-secondary" to="/insights" data-cta="cases_insights">Read insights</Link>
                        </div>
                    </header>

                    {/* Featured cases (placeholders to be replaced with real content) */}
                    <div className="grid grid-3">
                        <article className="card" aria-labelledby="cs-public-title">
                            <h3 id="cs-public-title">Public sector innovation program</h3>
                            <p>
                                Portfolio design, maturity uplift, and gated decision reviews across institutions.
                            </p>
                            <ul>
                                <li><strong>Gate 1:</strong> Discovery → go/no-go per initiative</li>
                                <li><strong>Gate 2:</strong> Validation → MVP readiness & KPIs</li>
                                <li><strong>MCF 2.1 refs:</strong> Customer Analysis, Problem Definition, Solution Framing</li>
                            </ul>
                            <div className="btn-row">
                                <Link className="btn-secondary" to="/insights" data-cta="cs_public_readmore">Learn more</Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="cs-edtech-title">
                            <h3 id="cs-edtech-title">EdTech validation sprint</h3>
                            <p>
                                Problem/solution fit, MVP roadmap, and governance aligned with IMM gates.
                            </p>
                            <ul>
                                <li><strong>Evidence:</strong> interviews, JTBD, willingness-to-pay</li>
                                <li><strong>Gate 1:</strong> Discovery evidence pack</li>
                                <li><strong>Gate 2:</strong> MVP scope + success metrics</li>
                            </ul>
                            <div className="btn-row">
                                <Link className="btn-secondary" to="/insights" data-cta="cs_edtech_readmore">Learn more</Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="cs-finserv-title">
                            <h3 id="cs-finserv-title">Financial services capacity build</h3>
                            <p>
                                IMM-guided culture/process build-out; product incubation with measured outcomes.
                            </p>
                            <ul>
                                <li><strong>Inputs:</strong> diagnostics, OKR alignment, playbooks</li>
                                <li><strong>Outputs:</strong> pilot launches, lab governance</li>
                                <li><strong>KPIs:</strong> adoption, NPS, cycle time, CAC/LTV signals</li>
                            </ul>
                            <div className="btn-row">
                                <Link className="btn-secondary" to="/insights" data-cta="cs_finserv_readmore">Learn more</Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Method note */}
                <section className="section section--tight" aria-labelledby="method-title">
                    <h2 id="method-title">How we measure</h2>
                    <p className="lead">
                        Each case documents the MCF 2.1 processes used, evidence produced, and IMM gate outcomes (go/no-go),
                        creating an auditable trail from hypothesis to decision.
                    </p>
                    <ul>
                        <li><CheckCircle aria-hidden="true" /> Evidence packs (research notes, artifacts, interview summaries)</li>
                        <li><CheckCircle aria-hidden="true" /> Gate reviews with predefined criteria and owners</li>
                        <li><LineChart aria-hidden="true" /> KPI dashboards tied to stage-appropriate goals</li>
                    </ul>
                </section>

                {/* CTA */}
                <section className="section" aria-labelledby="cta-title">
                    <h2 id="cta-title">Have a challenge in mind?</h2>
                    <p className="lead">We’ll scope a 12+12 week plan with clear gates and success metrics.</p>
                    <div className="btn-row">
                        <Link className="btn-primary" to="/contact" data-cta="cases_cta_contact">Talk to us</Link>
                        <Link className="btn-secondary" to="/what-we-do" data-cta="cases_cta_whatwedo">What we do</Link>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
