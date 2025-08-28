import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import { BookOpen, FileText, TrendingUp } from 'lucide-react';

export default function Insights() {
    return (
        <Layout title="Insights" description="Research, resources, and whitepapers from Doulab">
            <Head>
                <link rel="canonical" href="https://doulab.net/insights" />
            </Head>

            <main className="container">
                {/* Intro */}
                <section className="section">
                    <header className="margin-bottom--lg">
                        <h1>Insights</h1>
                        <p className="lead">
                            Research & Resources on MicroCanvas® 2.1, the Innovation Maturity Model, and AI governance—designed to be practical, testable, and open.
                        </p>
                        <div className="btn-row">
                            <Link className="btn-primary" to="/docs/research-resources/" data-cta="insights_docs">
                                Browse Research & Resources
                            </Link>
                            <Link className="btn-secondary" to="/docs/releases" data-cta="insights_releases">
                                See Releases
                            </Link>
                        </div>
                    </header>

                    {/* Highlights (placeholders → replace with real items) */}
                    <div className="grid grid-3">
                        <article className="card" aria-labelledby="insight-agentic-title">
                            <TrendingUp aria-hidden="true" />
                            <h3 id="insight-agentic-title">Distributed Federated Agentic AI</h3>
                            <p>Governance blueprint for enterprise/public platforms: identity, payments, PKI, BPM, UI, and model ops.</p>
                            <div className="btn-row">
                                <Link className="btn-secondary" to="/docs/research-resources/" data-cta="insights_agentic_read">Read in Research & Resources</Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="insight-imm-title">
                            <BookOpen aria-hidden="true" />
                            <h3 id="insight-imm-title">IMM field notes (12+12 weeks)</h3>
                            <p>Lessons from Discovery → Validation → Efficiency → Scale; gate criteria and KPI patterns.</p>
                            <div className="btn-row">
                                <Link className="btn-secondary" to="/docs/research-resources/" data-cta="insights_imm_read">Explore the notes</Link>
                            </div>
                        </article>

                        <article className="card" aria-labelledby="insight-releases-title">
                            <FileText aria-hidden="true" />
                            <h3 id="insight-releases-title">Release log & milestones</h3>
                            <p>Concise changelog of notable docs and site updates, curated for readers.</p>
                            <div className="btn-row">
                                <Link className="btn-secondary" to="/docs/releases" data-cta="insights_releases_read">Open releases</Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Callout to docs hub */}
                <section className="section section--tight" aria-labelledby="docs-hub-title">
                    <h2 id="docs-hub-title">Where to start</h2>
                    <p className="lead">
                        The <Link to="/docs/research-resources/">Research & Resources</Link> hub aggregates whitepapers, frameworks, and open references. For recent updates, see <Link to="/docs/releases">Releases</Link>.
                    </p>
                </section>

                {/* CTA */}
                <section className="section" aria-labelledby="cta-title">
                    <h2 id="cta-title">Have a topic you want us to cover?</h2>
                    <p className="lead">We publish practical, evidence-led guides. Tell us what would help your team.</p>
                    <div className="btn-row">
                        <Link className="btn-primary" to="/contact" data-cta="insights_cta_contact">Suggest a topic</Link>
                        <Link className="btn-secondary" to="/what-we-do" data-cta="insights_cta_whatwedo">What we do</Link>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
