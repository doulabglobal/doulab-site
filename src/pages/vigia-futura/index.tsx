// src/pages/vigia-futura/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Hero from '../../components/Hero';
import FinalCta from '../../components/FinalCta';
import Pillars from '../../components/imm/Pillars';
import Roadmap from '../../components/imm/Roadmap';

type SectionDef = { id: string; label: string };

const SECTIONS: SectionDef[] = [
  { id: 'why', label: 'Why' },
  { id: 'family', label: 'Framework family' },
  { id: 'network', label: 'The network' },
  { id: 'index', label: 'The Index' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'engage', label: 'Engage' },
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
      title="Vigía Futura, Foresight and Innovation Observatory"
      description="Vigía Futura is Doulab's foresight and innovation observatory. It publishes the National Innovation Maturity and Digital Transformation Index and curates signals, scenarios, and benchmarks across countries."
    >
      <Head>
        <link rel="canonical" href="https://doulab.net/vigia-futura" />
        <meta name="author" content="Luis Santiago Arias" />
        <meta property="og:title" content="Vigía Futura, Foresight and Innovation Observatory | Doulab" />
        <meta
          property="og:description"
          content="Vigía Futura is Doulab's foresight and innovation observatory. It publishes the National Innovation Maturity and Digital Transformation Index and curates signals, scenarios, and benchmarks across countries."
        />
        <meta property="og:image" content="https://doulab.net/img/vigia-futura-hero.png" />
        <meta property="og:image:alt" content="Vigía Futura, foresight and innovation observatory" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          as="image"
          href="/img/vigia-futura-hero.png"
          imageSrcSet="/img/vigia-futura-hero.avif 1x, /img/vigia-futura-hero.webp 1x, /img/vigia-futura-hero.png 1x"
          imageSizes="(max-width: 700px) 100vw, 600px"
        />
      </Head>

      <main>
        {/* Opening / framing */}
        <Hero
          title="Vigía Futura"
          subtitle="The foresight and innovation observatory of Doulab"
          body="Vigía Futura connects evidence, signals, and learning across institutions so national innovation systems compound progress rather than reset between cohorts. It is the home of the forthcoming National Innovation Maturity and Digital Transformation Index."
          imageBase="/img/vigia-futura-hero"
          imageAlt="Vigía Futura, foresight and innovation observatory"
          width={1600}
          height={900}
          primaryCta={{ to: 'https://booking.doulab.net/briefing', label: 'Book a discovery call', dataCta: 'cta.vigia.hero.contact', ariaLabel: 'Book a discovery call' }}
          secondaryCta={{ to: '#index', label: 'See the Index', dataCta: 'cta.vigia.hero.index', ariaLabel: 'Jump to the Index' }}
          ctaNote="Privacy first. No tracking pixels."
          id="vf-hero"
          ariaLabelledbyId="vf-hero-title"
        />

        {/* In-page subnav */}
        <div className="container">
          <nav className={`subnav ${'pages-vigia-futura-vigia-futura__subnav'}`} aria-label="In this page">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`${'pages-vigia-futura-vigia-futura__subnavLink'}${activeId === s.id ? ' subnavActive' : ''}`}
                aria-current={activeId === s.id ? 'true' : undefined}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        {/* 2. The problem this addresses */}
        <section className="section" id="why" aria-labelledby="vf-why-title">
          <Heading as="h2" id="why">
            Why an observatory, and why now
          </Heading>
          <p className="sectionLead">
            Innovation ecosystems plateau without continuity infrastructure: credible foresight, honest maturity measurement, and governance for institutional learning.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="why-foresight-title">
              <h3 id="why-foresight-title">Foresight is now a public-sector capability</h3>
              <p>
                The OECD's strategic foresight work positions anticipatory governance as core capacity for modern administrations, not a peripheral exercise. Most countries still lack the institutional muscle to turn signals into decisions.
              </p>
              <p className="microcopy">Source: OECD Strategic Foresight Unit.</p>
            </article>
            <article className="card" aria-labelledby="why-maturity-title">
              <h3 id="why-maturity-title">Maturity, not activity, is the bottleneck</h3>
              <p>
                The World Economic Forum's readiness work shows that ecosystem outcomes track capability maturity more than program volume. Counting events and cohorts overstates progress; measuring capability exposes where investment compounds.
              </p>
              <p className="microcopy">Source: WEF readiness and competitiveness frameworks.</p>
            </article>
            <article className="card" aria-labelledby="why-threshold-title">
              <h3 id="why-threshold-title">Coordination thresholds determine takeoff</h3>
              <p>
                Ecosystems that cross a coordination threshold, where actors share evidence, vocabulary, and feedback loops, compound. Those that do not, reset with every government cycle. An observatory exists to hold that continuity.
              </p>
              <p className="microcopy">Source: Doulab coordination-threshold thesis (site blog).</p>
            </article>
          </div>
        </section>

        {/* 3. The framework family */}
        <section className="section" id="family" aria-labelledby="vf-family-title">
          <h2 id="vf-family-title">The Vigía Framework Family</h2>
          <p className="sectionLead">
            A coherent set of frameworks for ecosystem builders. Each piece does one job; together they form the operating stack for national innovation systems.
          </p>
          <Pillars
            ariaLabel="Vigía Framework Family pillars"
            foundationLabel="Common foundation: MCF v2.2 (MicroCanvas® Framework)"
            pillars={[
              {
                title: 'VIF',
                body: 'Vigía Incubanet Framework. Architecture and operating standards for national public-private incubator networks.',
                accent: 'indigo',
                href: 'https://vif.doulab.net',
              },
              {
                title: 'VILF',
                body: 'Vigía Innovation Lab Framework. Five-spine architecture for innovation lab networks at the institutional and national level.',
                accent: 'purple',
                href: 'https://vilf.doulab.net',
              },
              {
                title: 'IMM',
                body: 'Innovation Maturity Model. The capability spine. Five domains that describe how ecosystems and institutions actually mature.',
                accent: 'green',
                to: '/services/innovation-maturity#imm-model',
              },
              {
                title: 'IMM-P®',
                body: 'The execution spine. The engagement program through which institutions advance their maturity with evidence, gates, and learning loops.',
                accent: 'amber',
                to: '/services/innovation-maturity',
              },
              {
                title: 'MEL',
                body: 'Monitoring, evaluation, and learning. The feedback layer that turns activity into institutional memory across cohorts and cycles.',
                accent: 'slate',
              },
            ]}
          />
        </section>

        {/* 4. The Vigía Futura Network */}
        <section className="section" id="network" aria-labelledby="vf-network-title">
          <h2 id="vf-network-title">The Vigía Futura Network</h2>
          <p className="sectionLead">
            Vigía Futura is the observatory layer. The Network is the coalition of observatories, labs, and research partners that produces and curates its outputs.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="net-publish-title">
              <h3 id="net-publish-title">What the observatory publishes</h3>
              <ul>
                <li>The National Innovation Maturity and Digital Transformation Index.</li>
                <li>Signal libraries and scenario briefings across priority domains.</li>
                <li>Benchmarking data and cross-country comparison studies.</li>
                <li>Method notes and replication packs for partner institutions.</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="net-network-title">
              <h3 id="net-network-title">A network, not a single institution</h3>
              <p>
                We are building Vigía Futura with public and private partners: universities, ministries, ecosystem builders, and multilateral programs. Each node contributes local evidence; the Network contributes shared method, comparability, and continuity.
              </p>
            </article>
            <article className="card" aria-labelledby="net-stance-title">
              <h3 id="net-stance-title">Stance</h3>
              <p>
                Independent, evidence-anchored, replicable. The observatory's job is to report what is actually maturing and what is not, in language ministers, boards, and ecosystem builders can act on.
              </p>
            </article>
          </div>
        </section>

        {/* 5. The Index (centerpiece) */}
        <section className="section" id="index" aria-labelledby="vf-index-title">
          <h2 id="vf-index-title">The National Innovation Maturity and Digital Transformation Index</h2>
          <p className="sectionLead">
            An IMM-grounded measurement instrument that scores national ecosystems across five capability domains and one digital transformation vertical. Forthcoming; pilots in flight.
          </p>
          <Pillars
            ariaLabel="Index dimensions"
            foundationLabel="Grounded in IMM and the IMM-DT vertical"
            pillars={[
              {
                title: 'Evidence and epistemic discipline',
                body: 'How rigorously the ecosystem produces, shares, and uses evidence to update decisions.',
                accent: 'indigo',
              },
              {
                title: 'Decision logic and governance',
                body: 'How decisions are framed, escalated, and held accountable across public and private actors.',
                accent: 'purple',
              },
              {
                title: 'Culture and behavior',
                body: 'Whether everyday practice rewards learning, candor about failure, and disciplined iteration.',
                accent: 'green',
              },
              {
                title: 'Iteration and adaptive improvement',
                body: 'Whether the ecosystem closes loops between policy, program, and outcome, and improves cycle over cycle.',
                accent: 'amber',
              },
              {
                title: 'Systemic and AI governance',
                body: 'Whether emerging technology, especially AI, is governed with foresight and institutional safeguards.',
                accent: 'red',
              },
              {
                title: 'IMM-DT vertical',
                body: 'Digital transformation maturity at national scale: infrastructure, services, talent, data, and adoption.',
                accent: 'slate',
              },
            ]}
          />
          <div className="cardGrid">
            <article className="card" aria-labelledby="index-use-title">
              <h3 id="index-use-title">What the Index unlocks</h3>
              <ul>
                <li>Year-over-year comparability for governments and ministries.</li>
                <li>Targeted investment by multilaterals and development partners where capability is binding.</li>
                <li>A shared vocabulary for ecosystem builders across borders.</li>
                <li>A diagnostic that survives administration changes.</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="index-method-title">
              <h3 id="index-method-title">Method, briefly</h3>
              <p>
                The Index combines institutional scans, evidence audits, and structured expert review against IMM rubrics. It is calibrated against established readiness instruments (OECD, WEF) and published with full method notes so countries can replicate or contest findings.
              </p>
            </article>
          </div>
        </section>

        {/* 6. Roll-out roadmap */}
        <section className="section" id="roadmap" aria-labelledby="vf-roadmap-title">
          <h2 id="vf-roadmap-title">Roll-out roadmap</h2>
          <p className="sectionLead">
            The Network and the Index roll out in horizons. Each horizon ships a usable artifact, not a milestone slide.
          </p>
          <Roadmap
            ariaLabel="Vigía Futura roll-out roadmap"
            horizons={[
              {
                range: '0 to 6 months',
                label: 'Consolidate the observatory',
                body: 'Operating framework set; first pilot countries scoped with partners.',
                state: 'now',
                initiatives: [
                  'Vigía Futura observatory framework consolidated',
                  'Pilot country scoping and partner alignment',
                ],
              },
              {
                range: '6 to 12 months',
                label: 'Run the first scans',
                body: 'National maturity scans run across the pilot set; first public signal library released.',
                state: 'now',
                initiatives: [
                  'National maturity scans in pilot countries',
                  'Signal library v1 published',
                ],
              },
              {
                range: '12 to 18 months',
                label: 'Publish the Index',
                body: 'First public release of the Index, accompanied by an ecosystem benchmark report.',
                state: 'next',
                initiatives: [
                  'Index v1 publication',
                  'Cross-country benchmark report',
                ],
              },
              {
                range: '18 to 30 months',
                label: 'Scale the Network',
                body: 'Expansion to additional countries; annual Index release cycle established.',
                state: 'next',
                initiatives: [
                  'Network expansion to additional countries',
                  'Annual Index release cadence',
                ],
              },
              {
                range: '30 to 48 months',
                label: 'Integrate IMM-DT and multilaterals',
                body: 'Full IMM-DT vertical integrated into the Index; multilateral partnerships formalized.',
                state: 'later',
                initiatives: [
                  'IMM-DT vertical fully integrated',
                  'Multilateral partnerships formalized',
                ],
              },
            ]}
          />
        </section>

        {/* 7. Working with Vigía Futura */}
        <section className="section" id="engage" aria-labelledby="vf-engage-title">
          <h2 id="vf-engage-title">Working with Vigía Futura</h2>
          <p className="sectionLead">
            Vigía Futura works with governments, ministries, multilateral programs, universities, and ecosystem builders.
          </p>
          <div className="cardGrid">
            <article className="card" aria-labelledby="engage-gov-title">
              <h3 id="engage-gov-title">Governments and ministries</h3>
              <p>National scans, foresight briefings, and capability roadmaps tied to IMM-P® engagements.</p>
            </article>
            <article className="card" aria-labelledby="engage-multi-title">
              <h3 id="engage-multi-title">Multilateral programs</h3>
              <p>Country comparability, investment targeting, and joint evaluation against shared rubrics.</p>
            </article>
            <article className="card" aria-labelledby="engage-eco-title">
              <h3 id="engage-eco-title">Universities and ecosystem builders</h3>
              <p>Local observatory nodes, replication packs, and access to the signal library and method notes.</p>
            </article>
          </div>
          <div className={`heroCtas ${'pages-vigia-futura-vigia-futura__centeredCtas'}`}>
            <Link className="buttonPrimary" to="https://booking.doulab.net/briefing" data-cta="cta.vigia.mid.briefing">
              Book a discovery call
            </Link>
          </div>
        </section>

        {/* 8. Final CTA */}
        <FinalCta
          id="vf-final"
          ariaLabelledbyId="vf-cta-title"
          title="Talk to us about Vigía Futura"
          body="Whether you lead a ministry, a multilateral program, a university, or an ecosystem coalition, we will scope a path that fits your context. Privacy first, no tracking pixels."
          primaryCta={{ to: 'https://booking.doulab.net/briefing', label: 'Book a discovery call', dataCta: 'cta.vigia.final.contact' }}
        />
      </main>
    </Layout>
  );
}
