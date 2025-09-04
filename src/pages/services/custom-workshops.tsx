// src/pages/services/custom-workshops.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import CalendarClock from 'lucide-react/dist/esm/icons/calendar-clock';
import Users from 'lucide-react/dist/esm/icons/users';
import Target from 'lucide-react/dist/esm/icons/target';
import ClipboardCheck from 'lucide-react/dist/esm/icons/clipboard-check';

export default function CustomWorkshopsPage(): ReactNode {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Workshops',
    serviceType: 'Innovation workshop facilitation',
    provider: { '@type': 'Organization', name: 'Doulab', url: 'https://doulab.net' },
    url: 'https://doulab.net/services/custom-workshops',
    areaServed: 'Global',
    description: 'Outcome-driven sessions to align teams, decide faster, and create momentum. Half‑day or full‑day formats, on‑site or remote.',
  };

  return (
    <Layout title="Custom Workshops - Align decisions & accelerate outcomes | Doulab" description="Outcome-driven sessions to align teams, decide faster, and create momentum. Half‑day or full‑day formats, on‑site or remote.">
      <Head>
        <link rel="canonical" href="https://doulab.net/services/custom-workshops" />
        <link rel="preload" as="image" href="/img/workshops-hero.png" imageSrcSet="/img/workshops-hero.avif 1x, /img/workshops-hero.webp 1x, /img/workshops-hero.png 1x" imageSizes="(max-width: 700px) 100vw, 600px" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Head>

      <main>
        {/* Hero */}
        <section className="heroBanner" aria-labelledby="cw-hero-title">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: '1 1 460px', paddingRight: '2rem' }}>
              <h1 id="cw-hero-title" className="heroTitle">Custom Workshops</h1>
              <p className="heroSubtitle" style={{ textAlign: 'justify' }}>Align. Decide. Move.</p>
              <p className="heroText">
                We design and run <strong>tailored workshops</strong> that unblock decisions and turn strategy into action. Built on MicroCanvas and IMM‑P, delivered on‑site or remote, and tuned to your goals and constraints.
              </p>
              <div className="heroCtas">
                <Link to="/contact" className="buttonPrimary" data-cta="cta.services.workshops.hero.contact">Start a workshop brief</Link>
                <Link to="/services" className="buttonSecondary" data-cta="cta.services.workshops.hero.services">See all services</Link>
              </div>
              <p className="heroText" style={{ marginTop: '0.75rem', opacity: 0.9 }}>
                <em>Trusted by teams at OGTIC, AFP Siembra, FUNDAPEC, and Alpha Inversiones.</em>
              </p>
            </div>
            <div style={{ flex: '1 1 320px', textAlign: 'center' }}>
              <picture>
                <source srcSet="/img/workshops-hero.avif" type="image/avif" />
                <source srcSet="/img/workshops-hero.webp" type="image/webp" />
                <img src="/img/workshops-hero.png" alt="Custom innovation workshops" className="heroImage" loading="eager" fetchPriority="high" width="600" height="400" />
              </picture>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="section" id="cw-why" aria-labelledby="cw-why-title">
          <h2 id="cw-why-title">Why run a workshop</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-why-decisions">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-decisions">Decisions, not meetings</h3>
              <p>Make the few decisions that change everything.</p>
              <ul>
                <li>Clear owners &amp; next steps</li>
                <li>One‑page plan</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="cw-why-alignment">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-alignment">Team alignment</h3>
              <p>Get cross‑functional buy‑in and remove blockers in one session.</p>
              <ul>
                <li>Shared framing</li>
                <li>Commitments &amp; cadence</li>
              </ul>
            </article>
            <article className="card" aria-labelledby="cw-why-gtm">
              <Target className="cardIcon" aria-hidden="true" />
              <h3 id="cw-why-gtm">Go‑to‑Market</h3>
              <p>Frame customers, offers, and tests that de‑risk launch.</p>
              <ul>
                <li>Target segments &amp; hypotheses</li>
                <li>MVP metrics &amp; signals</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Formats */}
        <section className="section" id="cw-formats" aria-labelledby="cw-offers-title">
          <h2 id="cw-offers-title">Workshop formats</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-format-halfday">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3 id="cw-format-halfday">Custom Innovation Workshop (half‑day)</h3>
              <p>A focused <strong>3.5‑hour</strong> session built on MicroCanvas or complementary frameworks. Ideal for rapid alignment and a quick‑win plan.</p>
              <ul>
                <li>Delivery: on‑site or remote</li>
                <li>Includes: pre‑work brief, decision log, 30/60/90 template</li>
              </ul>
              <div className="cardFooter">
                <Link to="/contact" className="cardCta" data-cta="cta.services.workshops.formats.halfday.brief">Start a half‑day brief &rarr;</Link>
              </div>
            </article>
            <article className="card" aria-labelledby="cw-format-fullday">
              <CalendarClock className="cardIcon" aria-hidden="true" />
              <h3 id="cw-format-fullday">Custom Innovation Workshop (full‑day)</h3>
              <p>A deeper <strong>7‑hour</strong> session that moves from discovery to decisions and next steps. Includes pre‑work review and post‑work synthesis.</p>
              <ul>
                <li>Delivery: on‑site or remote</li>
                <li>Includes: pre‑work review, prioritization map, action board</li>
              </ul>
              <div className="cardFooter">
                <Link to="/contact" className="cardCta" data-cta="cta.services.workshops.formats.fullday.brief">Start a full‑day brief &rarr;</Link>
              </div>
            </article>
          </div>
        </section>

        {/* Outcomes */}
        <section className="section" id="cw-outcomes" aria-labelledby="cw-outcomes-title">
          <h2 id="cw-outcomes-title">What you'll leave with</h2>
          <div className="cardGrid">
            <article className="card" aria-labelledby="cw-outcome-decisions">
              <ClipboardCheck className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-decisions">Decisions &amp; owners</h3>
              <p>Gate‑ready summaries and a one‑page plan with owners.</p>
            </article>
            <article className="card" aria-labelledby="cw-outcome-evidence">
              <Lightbulb className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-evidence">Evidence &amp; experiments</h3>
              <p>Ranked tests with signals, timelines, and success criteria.</p>
            </article>
            <article className="card" aria-labelledby="cw-outcome-reuse">
              <Users className="cardIcon" aria-hidden="true" />
              <h3 id="cw-outcome-reuse">Reusable artifacts</h3>
              <p>Canvases and templates you can evolve and reuse.</p>
            </article>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section" id="cw-cta" aria-labelledby="cw-cta-title">
          <div className="finalCta">
            <h2 id="cw-cta-title">Ready to align and move?</h2>
            <p>Send us your goals and constraints. We'll design the right workshop and get you moving fast.</p>
            <div className="heroCtas" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="buttonPrimary" data-cta="cta.services.workshops.final.contact">Start a workshop brief</Link>
              <Link to="/services/clarityscan" className="buttonSecondary" data-cta="cta.services.workshops.final.clarityscan">Start with a diagnostic</Link>
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.95rem' }}>
              <em>We don't run third‑party trackers on this site. If you choose to schedule off‑site, that provider's privacy policy applies.</em>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

