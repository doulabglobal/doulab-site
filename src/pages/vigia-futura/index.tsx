// src/pages/vigia-futura/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';

type SectionDef = { id: string; label: string };

const SECTIONS: SectionDef[] = [
    { id: 'radar', label: 'Radar' },
    { id: 'briefings', label: 'Executive Briefings' },
    { id: 'labs', label: 'Policy & Venture Labs' },
    { id: 'training', label: 'Training & Capacity' },
    { id: 'roadmap', label: 'Roadmap' },
];

export default function VigiaFuturaPage() {
    const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

        const headings = SECTIONS
            .map((s) => document.getElementById(s.id))
            .filter(Boolean) as HTMLElement[];

        if (!headings.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target?.id) setActiveId((visible.target as HTMLElement).id);
            },
            { rootMargin: '0px 0px -60% 0px', threshold: [0.25, 0.6, 1] }
        );

        observerRef.current = observer;
        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, []);

    return (
        <Layout
            title="Vigía Futura — Strategic Foresight Observatory"
            description="A strategic foresight observatory that surfaces signals, maps risks, and translates insight into action."
        >
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/img/vigia-futura-hero.png"
                    imageSrcSet="/img/vigia-futura-hero.avif 1x, /img/vigia-futura-hero.webp 1x, /img/vigia-futura-hero.png 1x"
                    imageSizes="(max-width: 600px) 100vw, 600px"
                />
            </Head>

            <main>
                {/* Hero */}
                <section className="heroBanner" aria-labelledby="vf-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="vf-hero-title" className="heroTitle">Vigía Futura</h1>
                            <p className="heroSubtitle" style={{ textAlign: 'justify' }}>
                                A strategic foresight observatory that <strong>surfaces signals</strong>, <strong>maps risks</strong>, and
                                <strong> translates insight into action</strong>.
                            </p>
                            <p className="heroText">
                                Anticipate change and design resilient strategies with our <strong>live radar</strong>, <strong>executive briefings</strong>,
                                <strong> policy &amp; venture labs</strong>, and <strong>training programs</strong>.
                            </p>
                            <div className="heroCtas">
                                <Link className="buttonPrimary" to="/contact" data-cta="cta.vigia.hero.contact">
                                    Book a briefing
                                </Link>
                                <a className="buttonSecondary" href="#radar" data-cta="cta.vigia.hero.radar">
                                    Explore the radar
                                </a>
                            </div>

                            {/* In-page subnav (canonical classes) */}
                            <nav className="subnav" aria-label="In this page">
                                {SECTIONS.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className={activeId === s.id ? 'subnavActive' : undefined}
                                        aria-current={activeId === s.id ? 'true' : undefined}
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <picture>
                                <source srcSet="/img/vigia-futura-hero.avif" type="image/avif" />
                                <source srcSet="/img/vigia-futura-hero.webp" type="image/webp" />
                                <img
                                    src="/img/vigia-futura-hero.png"
                                    alt="Vigía Futura — foresight observatory"
                                    className="heroImage"
                                    loading="eager"
                                    fetchPriority="high"
                                    decoding="async"
                                    width={600}
                                    height={400}
                                />
                            </picture>
                        </div>
                    </div>
                </section>

                {/* Radar */}
                <section className="section" id="radar" aria-labelledby="vf-radar-title">
                    <h2 id="vf-radar-title">Radar</h2>
                    <p className="sectionLead">
                        A living <strong>radar</strong> that surfaces early-warning signals, trends, and inflection points — <strong>updated quarterly</strong>.
                    </p>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="radar-signals-title">
                            <h3 id="radar-signals-title">Signals → Patterns</h3>
                            <p>Track weak signals and cluster them into patterns to detect momentum before it’s obvious.</p>
                            <ul>
                                <li>Horizon scanning, tagging, clustering</li>
                                <li>Heat, direction, confidence scores</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="radar-risks-title">
                            <h3 id="radar-risks-title">Risks → Options</h3>
                            <p>Each pattern includes risks, opportunities, and practical options leaders can act on now.</p>
                            <ul>
                                <li>Risk posture &amp; option framing</li>
                                <li>Immediate, near-term, long-term moves</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="radar-briefing-title">
                            <h3 id="radar-briefing-title">Briefing-Ready</h3>
                            <p>Quarterly updates and custom readouts help boards and teams align on what matters next.</p>
                            <ul>
                                <li>Board/C-suite briefings</li>
                                <li>Team workshops &amp; follow-ups</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Executive Briefings */}
                <section className="section" id="briefings" aria-labelledby="vf-briefings-title">
                    <h2 id="vf-briefings-title">Executive Briefings</h2>
                    <p className="sectionLead">
                        Curated <strong>60–90 minute</strong> briefings that turn foresight into <strong>specific implications</strong> for your context.
                    </p>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="briefings-board-title">
                            <h3 id="briefings-board-title">Board &amp; C-Suite</h3>
                            <p>Scenario implications, risk posture, and option framing for decisions under uncertainty.</p>
                            <ul>
                                <li>Strategic choices &amp; trade-offs</li>
                                <li>Guardrails &amp; success signals</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="briefings-strategy-title">
                            <h3 id="briefings-strategy-title">Strategy Teams</h3>
                            <p>From trends to roadmaps: align OKRs, prioritize bets, and define de-risking experiments.</p>
                            <ul>
                                <li>Portfolio &amp; OKR alignment</li>
                                <li>Experiment ladders &amp; KPIs</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="briefings-public-title">
                            <h3 id="briefings-public-title">Public Sector</h3>
                            <p>Policy windows, governance choices, and DPI implications for inclusive, resilient outcomes.</p>
                            <ul>
                                <li>Anticipatory governance</li>
                                <li>DPI building blocks &amp; ethics</li>
                            </ul>
                        </article>
                    </div>

                    <div className="heroCtas" style={{ justifyContent: 'center', marginTop: '0.75rem' }}>
                        <Link className="buttonPrimary" to="/contact" data-cta="cta.vigia.mid.briefing">
                            Request a briefing
                        </Link>
                        <Link className="buttonSecondary" to="/services/custom-workshops" data-cta="cta.vigia.mid.workshops">
                            See workshop options
                        </Link>
                    </div>
                </section>

                {/* Policy & Venture Labs */}
                <section className="section" id="labs" aria-labelledby="vf-labs-title">
                    <h2 id="vf-labs-title">Policy &amp; Venture Labs</h2>
                    <p className="sectionLead">
                        Time-boxed labs to <strong>prototype policy, services, or ventures</strong> against emerging futures — with <strong>measurable learning loops</strong>.
                    </p>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="labs-governance-title">
                            <h3 id="labs-governance-title">Experimental Governance</h3>
                            <p>Design and test anticipatory governance tools and DPI building blocks with stakeholders.</p>
                            <ul>
                                <li>Policy canvases &amp; simulations</li>
                                <li>Multi-stakeholder pilots</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="labs-ppp-title">
                            <h3 id="labs-ppp-title">Public-Private Pilots</h3>
                            <p>Run time-boxed pilots with measurable learning loops and transparent evaluation criteria.</p>
                            <ul>
                                <li>Hypotheses &amp; evaluation gates</li>
                                <li>Evidence packs &amp; readouts</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="labs-venture-title">
                            <h3 id="labs-venture-title">Venture Readiness</h3>
                            <p>Shape propositions, validate assumptions, and align capital with policy and market signals.</p>
                            <ul>
                                <li>JTBD, pricing, adoption signals</li>
                                <li>Roadmaps &amp; risk registers</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Training & Capacity */}
                <section className="section" id="training" aria-labelledby="vf-training-title">
                    <h2 id="vf-training-title">Training &amp; Capacity</h2>
                    <p className="sectionLead">
                        Programs and toolkits to embed <strong>futures literacy</strong> and practice across teams — so foresight shows up in planning and delivery.
                    </p>
                    <div className="cardGrid">
                        <article className="card" aria-labelledby="training-literacy-title">
                            <h3 id="training-literacy-title">Futures Literacy</h3>
                            <p>Core concepts, horizon scanning, and sense-making methods for practitioners and leaders.</p>
                            <ul>
                                <li>Signals, patterns, scenarios</li>
                                <li>Sense-making rituals</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="training-strategy-title">
                            <h3 id="training-strategy-title">Foresight in Strategy</h3>
                            <p>Integrate foresight into planning cycles, risk registers, and portfolio governance.</p>
                            <ul>
                                <li>OKR &amp; risk integration</li>
                                <li>Portfolio guardrails</li>
                            </ul>
                        </article>
                        <article className="card" aria-labelledby="training-train-title">
                            <h3 id="training-train-title">Train-the-Trainer</h3>
                            <p>Build internal capability to run radar updates, briefings, and labs with confidence.</p>
                            <ul>
                                <li>Facilitation playbooks</li>
                                <li>Certification options</li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* Roadmap */}
                <section className="section" id="roadmap" aria-labelledby="vf-roadmap-title">
                    <h2 id="vf-roadmap-title">Roadmap</h2>
                    <p className="sectionLead">
                        Launch sequence and goals for 2025–26: live radar, 250+ leader briefings, thematic clusters, and public toolkits.
                    </p>
                    <ul>
                        <li><strong>Q3 ’25:</strong> Radar v1 launch; <em>AI governance</em> cluster briefings; partner cohort #1.</li>
                        <li><strong>Q4 ’25:</strong> Quarterly radar update; <em>climate futures</em> cluster; policy lab #1.</li>
                        <li><strong>Q1 ’26:</strong> <em>Digital trust</em> cluster; train-the-trainer program; Toolkit #1 release.</li>
                    </ul>
                </section>

                {/* Proof / Numbers */}
                <section className="section section--tight" aria-labelledby="vf-proof-title">
                    <h2 id="vf-proof-title">At a glance</h2>
                    <div className="cardGrid">
                        <article className="card" aria-label="Leaders briefed target">
                            <h3>250+ leaders briefed</h3>
                            <p>Target across 2025–26 via executive briefings and cohort partners.</p>
                        </article>
                        <article className="card" aria-label="Update cadence">
                            <h3>Quarterly radar updates</h3>
                            <p>Fresh signals, patterns, and implications every quarter.</p>
                        </article>
                        <article className="card" aria-label="Thematic clusters">
                            <h3>3 thematic clusters</h3>
                            <p>AI governance, climate futures, and digital trust (2025–26).</p>
                        </article>
                    </div>
                </section>

                {/* Final centered CTA */}
                <section className="section" aria-labelledby="vf-cta-title">
                    <div className="finalCta">
                        <h2 id="vf-cta-title">Ready to build future-ready capacity?</h2>
                        <p>Book a briefing or start with a workshop. We’ll meet you where you are and co-create a path forward. <em>Privacy-first: no tracking pixels. Email only.</em></p>
                        <div className="heroCtas" style={{ justifyContent: 'center' }}>
                            <Link className="buttonPrimary" to="/contact" data-cta="cta.vigia.final.contact">
                                Book a briefing
                            </Link>
                            <Link className="buttonSecondary" to="/services/custom-workshops" data-cta="cta.vigia.final.workshops">
                                Start a workshop
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
