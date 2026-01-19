import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

const BOOKINGS_URL = "https://booking.doulab.net/fdworkshop";
const CONTACT_EMAIL = "luis@doulab.net";

export default function InnovationReadinessWorkshopPage() {
  return (
    <Layout
      title="Innovation Readiness & Governance Workshop"
      description="An 8-hour hybrid workshop that aligns foresight, culture, MicroCanvas® 2.1, IMM-P and governance so teams can innovate with clarity and predictable execution."
    >
      <main className={'pages-services-innovation-readiness-workshop__page'}>
        {/* Hero */}
        <section className={'pages-services-innovation-readiness-workshop__hero'}>
          <div className={'pages-services-innovation-readiness-workshop__heroContent'}>
            <h1 className={'pages-services-innovation-readiness-workshop__heroTitle'}>
              Innovation Readiness &amp; Governance Workshop
            </h1>
            <p className={'pages-services-innovation-readiness-workshop__heroSubtitle'}>
              Transform how your team thinks, decides and executes.
            </p>
            <p className={'pages-services-innovation-readiness-workshop__heroBody'}>
              An 8-hour hybrid workshop that integrates foresight, culture, the
              MicroCanvas® Framework 2.1, IMM-P and work-cell governance so your
              innovation initiatives become predictable, aligned and
              evidence-based.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__heroMeta'}>
              <span>Format: 4 hours in person + 4 hours online</span>
              <span>Mode: Fully digital, laptop per participant</span>
            </div>
            <div className={'pages-services-innovation-readiness-workshop__heroActions'}>
              <Link className={'pages-services-innovation-readiness-workshop__primaryButton'} to={BOOKINGS_URL}>
                Book a discovery call
              </Link>
              <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="#structure">
                View workshop structure
              </Link>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Who this workshop is for</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              This workshop is designed for teams who carry real responsibility
              for change and execution:
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Innovation and transformation teams</h3>
                <p>
                  Teams running strategic initiatives, pilots and experiments
                  that must align with long-term value creation.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Strategy and PMO teams</h3>
                <p>
                  Units that coordinate portfolios, projects and change
                  roadmaps, and need better governance and predictability.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Product and service design teams</h3>
                <p>
                  Teams that need to connect customer insight, feasibility and
                  execution discipline into one coherent process.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Work cells and cross-functional teams</h3>
                <p>
                  Groups that exist in name but struggle with roles, cadences
                  and decision rules for running initiatives end to end.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems we address */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>The problems we help you solve</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Most organizations already have ideas. The real challenges are
              structural and behavioral:
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Ideas without structure</h3>
                <p>
                  Initiatives start from intuition, not from a shared model of
                  the problem, the customer and the constraints.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Low resilience under pressure</h3>
                <p>
                  When priorities shift or resistance appears, teams lose
                  momentum or abandon work instead of adapting with intention.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Work cells without governance</h3>
                <p>
                  Work cells and cross-functional teams exist, but roles,
                  cadences and decision rules are informal, implicit or
                  contradictory.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Unpredictable execution</h3>
                <p>
                  Projects move in bursts and stalls. Evidence is not used
                  consistently to guide decisions and gates.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Plans that cannot adapt</h3>
                <p>
                  When internal resistance appears, plans are either pushed
                  through or abandoned, with little structured learning.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Innovation not linked to strategy</h3>
                <p>
                  Teams struggle to show how initiatives support the long-term
                  strategic direction and risk appetite of the organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>What your team will learn and build</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              By the end of the workshop, participants will have concrete
              artifacts and shared language to guide real initiatives.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Foresight and strategic context</h3>
                <p>
                  A clearer understanding of the forces reshaping your sector
                  and how they affect your mandate and portfolio.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Purpose, culture and resilience</h3>
                <p>
                  A shared baseline for why the work matters, and which
                  behaviors support resilience under change and uncertainty.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Structured thinking with MicroCanvas® 2.1</h3>
                <p>
                  The ability to structure problems, customers, value, friction
                  and feasibility in a repeatable way.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Evidence-based execution with IMM-P</h3>
                <p>
                  A practical understanding of how to move from ideas to
                  hypotheses, experiments and evidence gates.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Governance for the work cell or cross-functional team</h3>
                <p>
                  A governance model for the work cell, including roles,
                  cadences, decision rules and escalation paths.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>30/60/90 day roadmap</h3>
                <p>
                  A short, realistic roadmap for the next 30, 60 and 90 days for
                  one or more initiatives, built by the team itself.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structure */}
        <section id="structure" className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <Heading as="h2" id="structure" className={'pages-services-innovation-readiness-workshop__sectionTitle'}>
              Workshop structure (8 hours hybrid)
            </Heading>
            <div className={'pages-services-innovation-readiness-workshop__columns'}>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Day 1 - In person (4 hours, fully digital)</h3>
                <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
                  Focus on context, purpose, culture and structured thinking.
                </p>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>
                    <strong>Opening and shared context</strong> - why innovation
                    must become a governed, evidence-based system.
                  </li>
                  <li>
                    <strong>Foresight and hyperconvergence</strong> - guided
                    exploration of drivers shaping your sector and their
                    implications.
                  </li>
                  <li>
                    <strong>Purpose, identity and culture</strong> - individual
                    and team reflection on meaning, behaviors and resilience.
                  </li>
                  <li>
                    <strong>MicroCanvas® Framework 2.1</strong> - hands-on work
                    with problem, customer, value, friction and feasibility.
                  </li>
                </ul>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Day 2 - Online (4 hours)</h3>
                <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
                  Focus on execution, governance and commitments.
                </p>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>
                    <strong>Re-anchor and recap</strong> - short review of Day 1
                    and the integrated model.
                  </li>
                  <li>
                    <strong>IMM-P execution system</strong> - how to structure
                    hypotheses, experiments and evidence gates.
                  </li>
                  <li>
                    <strong>Governance of the célula de trabajo</strong> - design
                    of roles, cadences, decision rules and escalation, with a
                    short simulation.
                  </li>
                  <li>
                    <strong>Integration and roadmap</strong> - a 30/60/90 day
                    plan built by the team to apply what they created.
                  </li>
                </ul>
              </div>
            </div>

            {/* Typical agenda (time bands) */}
            <div className={'pages-services-innovation-readiness-workshop__typicalAgenda'}>
              <h3 className={'pages-services-innovation-readiness-workshop__typicalAgendaTitle'}>Typical agenda (time bands)</h3>
              <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
                The exact timings are adapted to your context and group size, but a typical flow looks like this:
              </p>
              <div className={'pages-services-innovation-readiness-workshop__columns'}>
                <div className={'pages-services-innovation-readiness-workshop__column'}>
                  <h4>Day 1 — In person</h4>
                  <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                    <li>
                      <strong>0:00–0:30</strong> – Welcome, context and expectations.
                    </li>
                    <li>
                      <strong>0:30–1:30</strong> – Foresight and hyperconvergence: signals, drivers and implications.
                    </li>
                    <li>
                      <strong>1:30–2:30</strong> – Purpose, identity and culture: individual and team-level reflection.
                    </li>
                    <li>
                      <strong>2:30–4:00</strong> – MicroCanvas® 2.1 working blocks (problem, segment, value, friction and feasibility).
                    </li>
                  </ul>
                </div>
                <div className={'pages-services-innovation-readiness-workshop__column'}>
                  <h4>Day 2 — Online</h4>
                  <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                    <li>
                      <strong>0:00–0:30</strong> – Re-anchor, recap and alignment on goals.
                    </li>
                    <li>
                      <strong>0:30–2:00</strong> – IMM-P execution system: hypotheses, experiments and evidence gates.
                    </li>
                    <li>
                      <strong>2:00–3:00</strong> – Governance of the célula de trabajo: roles, cadences and decision rules, with simulation.
                    </li>
                    <li>
                      <strong>3:00–4:00</strong> – Integration and 30/60/90 day roadmap, plus commitments and next steps.
                    </li>
                  </ul>
                </div>
              </div>
              <p className={'pages-services-innovation-readiness-workshop__microcopy'}>
                This agenda is indicative. We fine-tune time bands once we know the number of participants, current initiatives and desired depth per module.
              </p>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Methods and frameworks used</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              The workshop combines several complementary disciplines into one
              integrated journey:
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Strategic foresight and hyperconvergence</h3>
                <p>
                  To connect the team&apos;s work with the larger shifts in
                  demographics, regulation, technology and behavior.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>MicroCanvas® Framework 2.1</h3>
                <p>
                  To structure problems, customer insights, value, friction and
                  feasibility in a consistent way across initiatives.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>IMM-P</h3>
                <p>
                  To bring discipline to how ideas are validated, evidence is
                  used and decisions are made across maturity levels.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Work-cell governance</h3>
                <p>
                  To ensure that initiatives are executed through clear roles,
                  cadences and decision-making practices, not just enthusiasm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fully digital */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Fully digital, collaborative by design</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Everything is digital, even during the in-person session.
            </p>
            <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
              <li>Each participant works from their own laptop for all exercises.</li>
              <li>All collaboration happens in shared online workspaces (Miro or equivalent).</li>
              <li>Content is delivered through Docusaurus in a presentation-friendly layout.</li>
              <li>All outputs remain accessible after the workshop for follow-up and further work.</li>
              <li>No printing, no transcription of sticky notes and no loss of information between days.</li>
            </ul>
          </div>
        </section>

        {/* Measurement */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Measurement and impact</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              The workshop includes a light but rigorous evaluation layer so you
              can see it as an investment in capability, not only as an event.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Pre-workshop baseline</h3>
                <p>
                  Short survey on structure, governance, confidence and
                  alignment to understand where the team is starting from.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Post-workshop assessment</h3>
                <p>
                  The same metrics repeated, to show deltas in confidence,
                  structure, governance and perceived readiness.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Team outputs as evidence</h3>
                <p>
                  The quality of canvases, hypotheses, governance charters and
                  roadmaps is used as qualitative evidence of progress.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Leadership summary</h3>
                <p>
                  A concise view for leadership highlighting improvements,
                  strengths and recommended next steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Format and requirements */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Format, logistics and requirements</h2>
            <div className={'pages-services-innovation-readiness-workshop__columns'}>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Standard format</h3>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>Total duration: 8 hours.</li>
                  <li>Day 1: 4 hours in person (single block).</li>
                  <li>Day 2: 4 hours online (single block, different day).</li>
                </ul>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Technical requirements</h3>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>One laptop per participant (mandatory).</li>
                  <li>Stable WiFi in the in-person room.</li>
                  <li>Modern browser (Chrome or Edge recommended).</li>
                  <li>Zoom access and headphones for Day 2.</li>
                  <li>Access to Miro (guest mode or temporary workspace managed by Doulab).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section id="pricing" className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Investment</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              The workshop is offered as a structured Doulab service with three
              tiers, depending on the level of customization and follow-up you
              require.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Standard</h3>
                <p>
                  Core curriculum for smaller teams who want to experience the
                  full 8-hour format with minimal customization.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Professional</h3>
                <p>
                  Core curriculum plus adaptation to your sector, current
                  initiatives and governance reality. Recommended for most
                  corporate teams.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Enterprise</h3>
                <p>
                  Professional tier plus maturity baseline, OKR integration,
                  portfolio design and 90 day accompaniment for implementation.
                </p>
              </div>
            </div>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              For corporate financial institutions in Latin America (such as
              pension funds, banks and insurers), this workshop is typically
              delivered under the Professional tier.
            </p>
          </div>
        </section>

        {/* About */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>About Doulab</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Doulab is a strategic innovation practice based in Zürich,
              operating at the intersection of foresight, innovation frameworks
              and execution governance.
            </p>
            <p className={'pages-services-innovation-readiness-workshop__bodyText'}>
              We are the authors of the MicroCanvas® Framework 2.1 and the IMM-P
              Innovation Maturity and Methodology Program, and work with public
              and private organizations to turn innovation into a repeatable,
              evidence-based capability. This workshop is facilitated personally
              by Luis Alberto Santiago Arias, Strategic Innovation Architect and
              creator of the MicroCanvas® Framework.
            </p>
          </div>
        </section>

        {/* Related programs and documents */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Related programs and documents</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Pair this workshop with our core diagnostics, programs, and reference material.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>ClarityScan readiness baseline</h3>
                <p>
                  Run a fast maturity scan (MCF 2.1 + IMM-P) to ground the workshop in evidence.
                </p>
                <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="/services/clarityscan">
                  Explore ClarityScan
                </Link>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>IMM-P program</h3>
                <p>
                  Multi-phase journey to embed evidence gates, governance, and delivery cadence.
                </p>
                <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="/services/innovation-maturity">
                  View the program
                </Link>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Custom workshops</h3>
                <p>
                  Tailored sprints for strategy, OKRs, and decision facilitation aligned to your context.
                </p>
                <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="/services/custom-workshops">
                  See custom options
                </Link>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Federated AI whitepaper</h3>
                <p>
                  Our reference on distributed, agentic AI governance and evidence gates.
                </p>
                <Link
                  className={'pages-services-innovation-readiness-workshop__secondaryButton'}
                  to="/docs/research-resources/distributed-federated-agentic-ai"
                >
                  Read the whitepaper
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className={'pages-services-innovation-readiness-workshop__sectionCta'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Next steps</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              If you would like to explore whether this workshop is a good fit
              for your team, we can start with a short discovery call.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__heroActions'}>
              <Link className={'pages-services-innovation-readiness-workshop__primaryButton'} to={BOOKINGS_URL}>
                Book a discovery call
              </Link>
              <a
                className={'pages-services-innovation-readiness-workshop__secondaryButton'}
                href="https://booking.doulab.net/discovery"
                data-cta="cta.services.innovation_readiness.proposal.discovery"
              >
                Request a proposal and dates
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
