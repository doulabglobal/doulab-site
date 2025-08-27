import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function CaseStudies() {
    return (
        <Layout title="Case Studies" description="Selected Doulab projects and outcomes">
            <Head>
                <link rel="canonical" href="https://doulab.net/case-studies" />
            </Head>

            <main className="container margin-vert--lg">
                <header className="margin-bottom--lg">
                    <h1>Case Studies</h1>
                    <p>
                        Outcome-oriented snapshots tied to IMM gates and decision criteria, referencing
                        MicroCanvas® 2.1 processes for auditability.
                    </p>
                </header>

                <section className="margin-bottom--lg">
                    <h2>Featured</h2>
                    <ul>
                        <li>
                            <strong>Public sector innovation program</strong> — portfolio design, maturity uplift,
                            and gated decision reviews (Gate 1/2 with measurable KPIs).
                        </li>
                        <li>
                            <strong>EdTech validation sprint</strong> — problem/solution fit, MVP roadmap, and
                            go/no-go governance aligned with IMM.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Method note</h2>
                    <p>
                        Each case study maps to MCF 2.1 (e.g., Customer Analysis, Problem Definition, Solution
                        Framing) and documents Gate outcomes to ensure traceability.
                    </p>
                </section>
            </main>
        </Layout>
    );
}
