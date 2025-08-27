import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

export default function Insights() {
    return (
        <Layout title="Insights" description="Research, resources, and whitepapers from Doulab">
            <Head>
                <link rel="canonical" href="https://doulab.net/insights" />
            </Head>

            <main className="container margin-vert--lg">
                <header className="margin-bottom--lg">
                    <h1>Insights</h1>
                    <p>
                        Research & Resources on MicroCanvas® 2.1, IMM practice, and AI governance—designed to be
                        practical, testable, and open.
                    </p>
                </header>

                <section className="margin-bottom--lg">
                    <h2>Latest highlights</h2>
                    <ul>
                        <li>
                            <strong>Distributed Federated Agentic AI</strong> — a governance blueprint for
                            enterprise and public-sector platforms (whitepaper).
                        </li>
                        <li>
                            <strong>IMM Field Notes</strong> — lessons from 12+12 week sprints (Discovery →
                            Validation → Efficiency → Scale).
                        </li>
                    </ul>
                </section>

                <section className="margin-bottom--lg">
                    <h2>Explore our docs</h2>
                    <p>
                        Visit the curated hub: <Link to="/docs/research-resources/">Research & Resources</Link>.
                        For notable milestones, see <Link to="/docs/releases">Releases</Link>.
                    </p>
                </section>

                <section>
                    <h2>Stay in the loop</h2>
                    <p>We’ll add a privacy-first updates channel here (no trackers, optional Zaraz custom events).</p>
                </section>
            </main>
        </Layout>
    );
}
