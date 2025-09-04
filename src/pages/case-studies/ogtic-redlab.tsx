import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function CaseOgticRedlab(): ReactNode {
    return (
        <Layout
            title="Case Study — OGTIC: RedLab Innovation Network"
            description="Public-sector innovation network built on structured capability and cohort learning."
        >
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/img/ogtic-redlab-card.jpg"
                    imageSrcSet="/img/ogtic-redlab-card.avif 1x, /img/ogtic-redlab-card.webp 1x, /img/ogtic-redlab-card.jpg 1x"
                    imageSizes="(max-width: 700px) 100vw, 1200px"
                />
                <meta property="og:image" content="https://doulab.net/img/ogtic-redlab-card.jpg" />
                <meta property="og:image:alt" content="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions." />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <main className="container">
                <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
                    <Link to="/case-studies" data-cta="cta.case.ogtic.breadcrumb">← All case studies</Link>
                </nav>

                <header style={{ marginTop: '1rem' }}>
                    <h1>OGTIC — RedLab Innovation Network</h1>
                    <p className="sectionLead">
                        Built and facilitated RedLab to accelerate public-sector innovation through structured capability and cohort learning.
                    </p>
                    <picture>
                        <source srcSet="/img/ogtic-redlab-card.avif" type="image/avif" />
                        <source srcSet="/img/ogtic-redlab-card.webp" type="image/webp" />
                        <img
                            src="/img/ogtic-redlab-card.jpg"
                            alt="OGTIC — Red de Laboratorios de Innovación (RedLab) cohort sessions."
                            width={1200}
                            height={720}
                            loading="eager"
                            decoding="async"
                            style={{ borderRadius: '0.75rem', width: '100%', height: 'auto', marginTop: '0.75rem' }}
                        />
                    </picture>
                </header>

                <section className="section" aria-labelledby="context-title">
                    <h2 id="context-title">Context</h2>
                    <p>Brief context of the challenge and goals. Replace this with your specific narrative.</p>
                </section>

                <section className="section" aria-labelledby="work-title">
                    <h2 id="work-title">What we did</h2>
                    <ul>
                        <li>Network design and operating model.</li>
                        <li>Cohort programming and evidence loops.</li>
                        <li>Capability build-out and governance cadence.</li>
                    </ul>
                </section>

                <section className="section" aria-labelledby="outcomes-title">
                    <h2 id="outcomes-title">Outcomes</h2>
                    <ul>
                        <li>Decision latency ↓ across participating entities.</li>
                        <li>Faster delivery cycles on priority projects.</li>
                        <li>Reusable playbooks and stronger internal capability.</li>
                    </ul>
                </section>

                <section className="section" aria-labelledby="cta-title">
                    <div className="finalCta">
                        <h2 id="cta-title">Take the first step</h2>
                        <p>Get your baseline in 15–20 minutes.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.case.ogtic.clarityscan">
                                Start with ClarityScan®
                            </Link>
                            <Link to="/contact" className="buttonSecondary" data-cta="cta.case.ogtic.book_call">
                                Book a discovery call
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
