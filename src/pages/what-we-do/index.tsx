import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function WhatWeDo() {
    return (
        <Layout title="What we do" description="Doulab services and products">
            <Head>
                <link rel="canonical" href="https://doulab.net/what-we-do" />
            </Head>
            <main className="container margin-vert--lg">
                <header className="margin-bottom--lg">
                    <h1>What we do</h1>
                    <p>
                        We design and run structured innovation systems—powered by MicroCanvas® 2.1 and the IMM
                        program—to turn uncertainty into repeatable outcomes.
                    </p>
                </header>

                <section className="margin-bottom--lg">
                    <h2>Products & Programs</h2>
                    <ul>
                        <li><strong>IMM Sprints (12+12 weeks):</strong> Discovery & Validation → Efficiency & Scale.</li>
                        <li><strong>Diagnostics & Workshops:</strong> fast assessments, strategy, and roadmaps.</li>
                        <li><strong>Vigía Futura:</strong> foresight observatory and indices (innovation & prospectiva).</li>
                    </ul>
                </section>

                <section className="margin-bottom--lg">
                    <h2>Proof & Numbers</h2>
                    <p>Light placeholder—will be replaced with real metrics (conversion-oriented).</p>
                </section>

                <section>
                    <h2>Next steps</h2>
                    <p>
                        Talk to us about your goals; we’ll map an IMM journey with clear gates and KPIs.
                    </p>
                </section>
            </main>
        </Layout>
    );
}
