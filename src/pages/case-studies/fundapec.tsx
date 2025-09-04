import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function CaseFundapec(): ReactNode {
    return (
        <Layout
            title="Case Study — FUNDAPEC: Alumni Platform"
            description="Comunidad FUNDAPEC: deeper engagement and new value through a modern alumni platform."
        >
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/img/fundapec-card.jpg"
                    imageSrcSet="/img/fundapec-card.avif 1x, /img/fundapec-card.webp 1x, /img/fundapec-card.jpg 1x"
                    imageSizes="(max-width: 700px) 100vw, 1200px"
                />
                <meta property="og:image" content="https://doulab.net/img/fundapec-card.jpg" />
                <meta property="og:image:alt" content="Comunidad FUNDAPEC — alumni platform and engagement." />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <main className="container">
                <nav aria-label="Breadcrumb" className="microcopy" style={{ marginTop: '1rem' }}>
                    <Link to="/case-studies" data-cta="cta.case.fundapec.breadcrumb">← All case studies</Link>
                </nav>

                <header style={{ marginTop: '1rem' }}>
                    <h1>FUNDAPEC — Alumni Platform</h1>
                    <p className="sectionLead">
                        Co-developed and launched <em>Comunidad FUNDAPEC</em> to deepen engagement and unlock new value.
                    </p>
                    <picture>
                        <source srcSet="/img/fundapec-card.avif" type="image/avif" />
                        <source srcSet="/img/fundapec-card.webp" type="image/webp" />
                        <img
                            src="/img/fundapec-card.jpg"
                            alt="Comunidad FUNDAPEC — alumni platform and engagement."
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
                        <li>Stakeholder mapping and value proposition refinement.</li>
                        <li>Platform design with evidence loops.</li>
                        <li>Go-to-market and governance cadence.</li>
                    </ul>
                </section>

                <section className="section" aria-labelledby="outcomes-title">
                    <h2 id="outcomes-title">Outcomes</h2>
                    <ul>
                        <li>Engagement ↑ via targeted journeys.</li>
                        <li>Operational clarity and faster decision cycles.</li>
                        <li>New value streams identified.</li>
                    </ul>
                </section>

                <section className="section" aria-labelledby="cta-title">
                    <div className="finalCta">
                        <h2 id="cta-title">Take the first step</h2>
                        <p>Get your baseline in 15–20 minutes.</p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            <Link to="/services/clarityscan" className="buttonPrimary" data-cta="cta.case.fundapec.clarityscan">
                                Start with ClarityScan®
                            </Link>
                            <Link to="/contact" className="buttonSecondary" data-cta="cta.case.fundapec.book_call">
                                Book a discovery call
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
