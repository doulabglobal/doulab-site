import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { Layers, Target, Lightbulb } from 'lucide-react';

export default function WhatWeDo() {
    return (
        <Layout title="What we do" description="Programs, diagnostics, and foresight to make innovation repeatable.">
            <Head>
                <link rel="canonical" href="https://doulab.net/what-we-do" />
            </Head>

            <main className="container">
                {/* Intro */}
                <section className="section">
                    <header className="margin-bottom--lg">
                        <h1>What we do</h1>
                        <p className="lead">
                            We design and run structured innovation systems—powered by MicroCanvas® 2.1 and the Innovation
                            Maturity Model—to turn uncertainty into repeatable outcomes.
                        </p>
                        <div className="btn-row">
                            <Link className="btn-primary" to="/contact" data-cta="whatwedo_contact">Talk to us</Link>
                            <Link className="btn-secondary" to="/case-studies" data-cta="whatwedo_cases">See case studies</Link>
                        </div>
                    </header>

                    {/* Products & Programs */}
                    <div className="grid grid-3">
                        <article className="card" aria-labelledby="imm-title">
                            <Layers aria-hidden="true" />
                            <h3 id="imm-title">IMM Sprints (12+12 weeks)</h3>
                            <p>Discovery & Validation → Efficiency & Scale, with clear gates and KPIs.</p>
                            <ul>
                                <li>Gate 1 — Go/No-Go after Discovery</li>
                                <li>Gate 2 — Go/No-Go before MVP/Scale</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="diagnostics-title">
                            <Target aria-hidden="true" />
                            <h3 id="diagnostics-title">Diagnostics & Workshops</h3>
                            <p>Fast assessments, strategy sessions, and decision-driving workshops.</p>
                            <ul>
                                <li>Innovation maturity baseline (MCF 2.1 + IMM)</li>
                                <li>Strategy + OKR alignment sprints</li>
                            </ul>
                        </article>

                        <article className="card" aria-labelledby="vigia-title">
                            <Lightbulb aria-hidden="true" />
                            <h3 id="vigia-title">Vigía Futura</h3>
                            <p>Foresight observatory and indices for trend radar, risk, and opportunity framing.</p>
                            <ul>
                                <li>Foresight maturity & literacy</li>
                                <li>Briefings and early-signal scans</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Proof / Numbers (placeholder for now; we’ll wire real metrics next pass) */}
                <section className="section section--tight">
                    <h2>Proof & numbers</h2>
                    <p className="lead">We’ll add concise, verifiable metrics here (conversion-oriented, privacy-safe).</p>
                </section>

                {/* Next steps */}
                <section className="section">
                    <h2>Next steps</h2>
                    <ol>
                        <li>20-minute discovery call to align on goals and constraints.</li>
                        <li>Light diagnostic to baseline current maturity.</li>
                        <li>Proposal with a 12+12 week plan and gate criteria.</li>
                    </ol>
                    <div className="btn-row">
                        <Link className="btn-primary" to="/contact" data-cta="whatwedo_cta_contact">Start the conversation</Link>
                        <Link className="btn-secondary" to="/insights" data-cta="whatwedo_cta_insights">Explore insights</Link>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
