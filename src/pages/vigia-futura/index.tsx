// src/pages/vigia-futura/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';

type SectionDef = { id: string; label: string };

type DocMeta = { id: string; title: string; description?: string; permalink: string; tags?: string[] };
type DocsVersion = { isLast?: boolean; docs: DocMeta[] };
type DocsPluginData = { versions: DocsVersion[] };

const SECTIONS: SectionDef[] = [
  { id: 'radar', label: 'Radar' },
  { id: 'briefings', label: 'Executive Briefings' },
  { id: 'labs', label: 'Policy and Venture Labs' },
  { id: 'training', label: 'Training and Capacity' },
  { id: 'roadmap', label: 'Roadmap' },
];

function useRadarDocs(limit = 3) {
  const allDocsData = useAllDocsData();
  const docsPluginData = (allDocsData?.['default'] as unknown as DocsPluginData | undefined);
  const latestVersion =
    docsPluginData?.versions?.find((v) => v.isLast) ?? docsPluginData?.versions?.[0];

  const docs = latestVersion?.docs ?? [];
  const radarDocs = docs
    .filter((d) => (d.tags ?? []).map((t) => t.toLowerCase()).includes('radar'))
    .sort((a, b) => b.id.localeCompare(a.id))
    .slice(0, limit);

  return radarDocs;
}

export default function VigiaFuturaPage() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const radarDocs = useRadarDocs(3);

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
      title="Vigía Futura, Strategic Foresight Observatory | Doulab"
      description="A strategic foresight observatory that surfaces signals, maps risks, and translates insight into action."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/vigia-futura" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Vigía Futura, Strategic Foresight Observatory | Doulab" />
        <meta
          property="og:description"
          content="A strategic foresight observatory that surfaces signals, maps risks, and translates insight into action."
        />
        <meta property="og:image" content="https://doulab.net/img/vigia-futura-hero.jpg" />
        <meta property="og:image:alt" content="Vigía Futura, foresight observatory" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Hero LCP preload (React camelCase attrs) */}
        <link
          rel="preload"
          as="image"
          href="/img/vigia-futura-hero.jpg"
          imageSrcSet="/img/vigia-futura-hero.avif 1x, /img/vigia-futura-hero.webp 1x, /img/vigia-futura-hero.jpg 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
      </Head>

      <main>
        {/* Standardized two-column hero */}
        <Hero
          title="Vigía Futura"
          subtitle="Strategic foresight observatory"
          body="Anticipate change and design resilient strategies. We surface signals, map risks, and turn insight into action through a live radar, executive briefings, policy and venture labs, and training."
          imageBase="/img/vigia-futura-hero"
          imageAlt="Vigía Futura, foresight observatory"
          width={1600}
          height={900}
          primaryCta={{ to: '/contact', label: 'Book a briefing', dataCta: 'cta.vigia.hero.contact', ariaLabel: 'Book a briefing' }}
          secondaryCta={{ to: '#radar', label: 'Explore the radar', dataCta: 'cta.vigia.hero.radar', ariaLabel: 'Jump to radar' }}
          ctaNote="Privacy first. No tracking pixels."
          id="vf-hero"
          ariaLabelledbyId="vf-hero-title"
          eager
        />

        {/* In-page subnav */}
       {/* In-page subnav (centered, same width as content) */}
<div className="container">
  <nav
    className="subnav"
    aria-label="In this page"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '.5rem',
      padding: '.25rem 0 .5rem',
      margin: '0 auto .75rem',
    }}
  >
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


        {/* Radar */}
        <section className="section" id="radar" aria-labelledby="vf-radar-title" aria-describedby="vf-radar-desc">
          <p id="vf-radar-desc" className="sr-only">
            The radar surfaces early signals, trends, and inflection points, and is updated quarterly.
          </p>
          <h2 id="vf-radar-title">Radar</h2>
          <p className="sectionLead">
            A living radar that surfaces early signals, trends, and inflection points, updated quarterly.
          </p>

          {/* Static explainer tiles */}
          <div className="cardGrid">
            <article className="card" aria-labelledby="radar-signals-title">
              <h3 id="radar-signals-title">Signals to patterns</h3>
              <p>Track weak signals and cluster them into patterns to detect momentum before it is obvious.</p>
              <ul>
                <li>Horizon scanning, tagging, clustering</li>
                <li>Heat, direction, confidence scores</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="radar-risks-title">
              <h3 id="radar-risks-title">Risks to options</h3>
              <p>Each pattern includes risks, opportunities, and practical options leaders can act on now.</p>
              <ul>
                <li>Risk posture and option framing</li>
                <li>Immediate, near term, long term moves</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="radar-briefing-title">
              <h3 id="radar-briefing-title">Briefing ready</h3>
              <p>Quarterly updates and custom readouts help boards and teams align on what matters next.</p>
              <ul>
                <li>Board and C suite briefings</li>
                <li>Team workshops and follow ups</li>
              </ul>
            </article>
          </div>

          {/* Dynamic: Latest from the radar (docs tagged "radar") */}
          <h3 id="vf-radar-latest-title" style={{ marginTop: '1rem' }}>Latest from the radar</h3>
          <div className="cardGrid" role="list" aria-labelledby="vf-radar-latest-title">
            {radarDocs.length === 0 ? (
              <article className="card" role="listitem" aria-label="Radar updates">
                <h4>No radar items yet</h4>
                <p className="microcopy">We are preparing the first set of radar notes.</p>
              </article>
            ) : (
              radarDocs.map((d) => (
                <article className="card" key={d.permalink} role="listitem" aria-labelledby={`radar-doc-${d.id}`}>
                  <h4 id={`radar-doc-${d.id}`}>{d.title}</h4>
                  {d.description && <p>{d.description}</p>}
                  <div className="cardFooter">
                    <Link
                      className="cardCta"
                      to={d.permalink}
                      data-cta="cta.vigia.radar.read"
                      aria-label={`Read ${d.title}`}
                    >
                      Read update →
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Executive Briefings */}
        <section className="section" id="briefings" aria-labelledby="vf-briefings-title">
          <h2 id="vf-briefings-title">Executive briefings</h2>
          <p className="sectionLead">
            Curated 60 to 90 minute briefings that turn foresight into specific implications for your context.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="briefings-board-title">
              <h3 id="briefings-board-title">Board and C suite</h3>
              <p>Scenario implications, risk posture, and option framing for decisions under uncertainty.</p>
              <ul>
                <li>Strategic choices and trade offs</li>
                <li>Guardrails and success signals</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="briefings-strategy-title">
              <h3 id="briefings-strategy-title">Strategy teams</h3>
              <p>From trends to roadmaps, align OKRs, prioritize bets, and define de risking experiments.</p>
              <ul>
                <li>Portfolio and OKR alignment</li>
                <li>Experiment ladders and KPIs</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="briefings-public-title">
              <h3 id="briefings-public-title">Public sector</h3>
              <p>Policy windows, governance choices, and DPI implications for inclusive, resilient outcomes.</p>
              <ul>
                <li>Anticipatory governance</li>
                <li>DPI building blocks and ethics</li>
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

        {/* Policy and Venture Labs */}
        <section className="section" id="labs" aria-labelledby="vf-labs-title">
          <h2 id="vf-labs-title">Policy and venture labs</h2>
          <p className="sectionLead">
            Time boxed labs to prototype policy, services, or ventures against emerging futures, with measurable learning loops.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="labs-governance-title">
              <h3 id="labs-governance-title">Experimental governance</h3>
              <p>Design and test anticipatory governance tools and DPI building blocks with stakeholders.</p>
              <ul>
                <li>Policy canvases and simulations</li>
                <li>Multi stakeholder pilots</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="labs-ppp-title">
              <h3 id="labs-ppp-title">Public private pilots</h3>
              <p>Run time boxed pilots with measurable learning loops and transparent evaluation criteria.</p>
              <ul>
                <li>Hypotheses and evaluation gates</li>
                <li>Evidence packs and readouts</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="labs-venture-title">
              <h3 id="labs-venture-title">Venture readiness</h3>
              <p>Shape propositions, validate assumptions, and align capital with policy and market signals.</p>
              <ul>
                <li>JTBD, pricing, adoption signals</li>
                <li>Roadmaps and risk registers</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Training and Capacity */}
        <section className="section" id="training" aria-labelledby="vf-training-title">
          <h2 id="vf-training-title">Training and capacity</h2>
          <p className="sectionLead">
            Programs and toolkits to embed futures literacy and practice across teams, so foresight shows up in planning and delivery.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="training-literacy-title">
              <h3 id="training-literacy-title">Futures literacy</h3>
              <p>Core concepts, horizon scanning, and sense making methods for practitioners and leaders.</p>
              <ul>
                <li>Signals, patterns, scenarios</li>
                <li>Sense making rituals</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="training-strategy-title">
              <h3 id="training-strategy-title">Foresight in strategy</h3>
              <p>Integrate foresight into planning cycles, risk registers, and portfolio governance.</p>
              <ul>
                <li>OKR and risk integration</li>
                <li>Portfolio guardrails</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="training-train-title">
              <h3 id="training-train-title">Train the trainer</h3>
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
            Launch sequence and goals for 2025 and 2026: live radar, 250 plus leader briefings, thematic clusters, and public toolkits.
          </p>
          <ul>
            <li><strong>Q3 2025:</strong> Radar v1 launch, <em>AI governance</em> cluster briefings, partner cohort 1.</li>
            <li><strong>Q4 2025:</strong> Quarterly radar update, <em>climate futures</em> cluster, policy lab 1.</li>
            <li><strong>Q1 2026:</strong> <em>Digital trust</em> cluster, train the trainer program, Toolkit 1 release.</li>
          </ul>
        </section>

        {/* Proof / Numbers */}
        <section className="section section--tight" aria-labelledby="vf-proof-title">
          <h2 id="vf-proof-title">At a glance</h2>
          <div className="cardGrid">
            <article className="card" aria-label="Leaders briefed target">
              <h3>250 plus leaders briefed</h3>
              <p>Target across 2025 and 2026 via executive briefings and cohort partners.</p>
            </article>
            <article className="card" aria-label="Update cadence">
              <h3>Quarterly radar updates</h3>
              <p>Fresh signals, patterns, and implications every quarter.</p>
            </article>
            <article className="card" aria-label="Thematic clusters">
              <h3>Three thematic clusters</h3>
              <p>AI governance, climate futures, and digital trust, 2025 to 2026.</p>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <FinalCta
          id="vf-final"
          ariaLabelledbyId="vf-cta-title"
          title="Ready to build future ready capacity?"
          body="Book a briefing or start with a workshop. We will meet you where you are and co-create a path forward. Privacy first, no tracking pixels."
          primaryCta={{ to: '/contact', label: 'Book a briefing', dataCta: 'cta.vigia.final.contact' }}
          secondaryCta={{ href: 'https://outlook.office.com/book/Doulab@NETORGFT5107446.onmicrosoft.com/s/rRGkXT4g4kS-FFL_J-4j4Q2?ismsaljsauthenabled&utm_source=doulab.net&utm_medium=cta&utm_campaign=vigia_final_cta', label: 'Book a ClarityScan® online', dataCta: 'cta.vigia.final.book_clarityscan_booking', newTab: true }}
        />
      </main>
    </Layout>
  );
}
