import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './vigia-futura.module.css';

const SECTIONS = [
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
        const headings = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

        observerRef.current = new IntersectionObserver(
            entries => {
                // Choose the most visible section
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible?.target?.id) setActiveId(visible.target.id);
            },
            { rootMargin: '0px 0px -60% 0px', threshold: [0.25, 0.6, 1] }
        );

        headings.forEach(h => observerRef.current?.observe(h));
        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <Layout title="Vigía Futura" description="Strategic foresight observatory for Latin America and beyond.">
            <main>
                {/* Hero */}
                <section className={styles.heroBanner} aria-labelledby="vf-hero-title">
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
                            <h1 id="vf-hero-title" className={styles.heroTitle}>Vigía Futura</h1>
                            <p className={styles.heroSubtitle} style={{ textAlign: 'justify' }}>
                                A strategic foresight observatory that tracks signals, maps risks, and turns insights into action
                                for public and private leaders across the region.
                            </p>
                            <p className={styles.heroText}>
                                We help organizations anticipate change and design resilient strategies—through live radar,
                                executive briefings, policy & venture labs, and capacity programs.
                            </p>
                            <div className={styles.heroCtas}>
                                <Link to="/contact" className={styles.buttonPrimary} data-cta="vf_hero_contact">
                                    Book a briefing
                                </Link>
                                <Link to="#radar" className={styles.buttonSecondary} data-cta="vf_hero_learn">
                                    Explore the radar
                                </Link>
                            </div>
                        </div>
                        <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
                            <img
                                src="/img/vigia-futura-hero.png"
                                alt="Vigía Futura — foresight observatory"
                                className={styles.heroImage}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>

                    {/* In‑page subnav */}
                    <nav className={styles.subnav} aria-label="In this page">
                        {SECTIONS.map(s => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className={activeId === s.id ? styles.subnavActive : undefined}
                                aria-current={activeId === s.id ? 'true' : undefined}
                            >
                                {s.label}
                            </a>
                        ))}
                    </nav>
                </section>

                {/* Radar */}
                <section className={styles.section} id="radar" aria-labelledby="vf-radar-title">
                    <h2 id="vf-radar-title">Radar</h2>
                    <p className={styles.sectionLead}>
                        A living foresight radar that surfaces early‑warning signals, trends, and inflection points with quarterly updates.
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <h3>Signals → Patterns</h3>
                            <p>We track weak signals and cluster them into patterns to detect momentum before it’s obvious.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Risks → Options</h3>
                            <p>Each pattern includes risks, opportunities, and practical options leaders can act on now.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Briefing Ready</h3>
                            <p>Quarterly updates and custom readouts help boards and teams align on what matters next.</p>
                        </div>
                    </div>
                </section>

                {/* Executive Briefings */}
                <section className={styles.section} id="briefings" aria-labelledby="vf-briefings-title">
                    <h2 id="vf-briefings-title">Executive Briefings</h2>
                    <p className={styles.sectionLead}>
                        Curated, 60–90 minute briefings that translate foresight into focused implications for your context.
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <h3>Board & C‑Suite</h3>
                            <p>Scenario implications, risk posture, and option framing for decisions under uncertainty.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Strategy Teams</h3>
                            <p>From trends to roadmaps: align OKRs, prioritize bets, and define de‑risking experiments.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Public Sector</h3>
                            <p>Policy windows, governance choices, and DPI implications for inclusive, resilient outcomes.</p>
                        </div>
                    </div>
                </section>

                {/* Policy & Venture Labs */}
                <section className={styles.section} id="labs" aria-labelledby="vf-labs-title">
                    <h2 id="vf-labs-title">Policy & Venture Labs</h2>
                    <p className={styles.sectionLead}>
                        Short, outcomes‑oriented labs to prototype policy, services, or ventures against emerging futures.
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <h3>Experimental Governance</h3>
                            <p>Design and test anticipatory governance tools and DPI building blocks with stakeholders.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Public‑Private Pilots</h3>
                            <p>Run time‑boxed pilots with measurable learning loops and transparent evaluation criteria.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Venture Readiness</h3>
                            <p>Shape propositions, validate assumptions, and align capital with policy and market signals.</p>
                        </div>
                    </div>
                </section>

                {/* Training & Capacity */}
                <section className={styles.section} id="training" aria-labelledby="vf-training-title">
                    <h2 id="vf-training-title">Training & Capacity</h2>
                    <p className={styles.sectionLead}>
                        Embed futures literacy and practice across teams with programs, toolkits, and coaching.
                    </p>
                    <div className={styles.cardGrid}>
                        <div className={styles.card}>
                            <h3>Futures Literacy</h3>
                            <p>Core concepts, horizon scanning, and sense‑making methods for practitioners and leaders.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Foresight in Strategy</h3>
                            <p>Integrate foresight into planning cycles, risk registers, and portfolio governance.</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Train‑the‑Trainer</h3>
                            <p>Build internal capability to run radar updates, briefings, and labs with confidence.</p>
                        </div>
                    </div>
                </section>

                {/* Roadmap */}
                <section className={styles.section} id="roadmap" aria-labelledby="vf-roadmap-title">
                    <h2 id="vf-roadmap-title">Roadmap</h2>
                    <p className={styles.sectionLead}>
                        Launch sequence and goals for 2025: live radar, 250+ org briefings, thematic clusters, and public toolkits.
                    </p>
                    <ul className={styles.bullets}>
                        <li><strong>Q3:</strong> Radar v1 launch, first cluster (AI governance) briefings, partner cohort #1.</li>
                        <li><strong>Q4:</strong> Quarterly radar update, climate futures cluster, policy lab #1.</li>
                        <li><strong>Q1’26:</strong> Digital trust cluster, train‑the‑trainer program, toolkit #1 release.</li>
                    </ul>
                </section>

                {/* Final centered CTA */}
                <section className={styles.section} aria-labelledby="vf-cta-title">
                    <div className={styles.finalCta}>
                        <h2 id="vf-cta-title">Ready to build future‑ready capacity?</h2>
                        <p>Book a briefing or start with a workshop. We’ll meet you where you are and co‑create a path forward.</p>
                        <div className={styles.heroCtas}>
                            <Link to="/contact" className={styles.buttonPrimary} data-cta="vf_footer_contact">
                                Book a briefing
                            </Link>
                            <Link to="/services/custom-workshops" className={styles.buttonSecondary} data-cta="vf_footer_workshops">
                                Start a workshop
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
