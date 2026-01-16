import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import PageHeader from '../components/PageHeader/PageHeader';

export default function PrivacyAndTerms(): ReactNode {
  const pageTitle = 'Privacy & Terms | Doulab';
  const description =
    'Privacy policy and terms & conditions covering Doulab services, diagnostics, foresight programs, and digital properties.';
  const lastUpdated = '15 January 2026';

  return (
    <Layout title={pageTitle} description={description}>
      <Head>
        <link rel="canonical" href="https://doulab.net/privacy-terms" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className="container" style={{ padding: '2rem 1rem', maxWidth: '960px' }}>
        <PageHeader
          title="Privacy & Terms"
          meta={`Updated: ${lastUpdated}`}
          body={
            <p>
              This page explains how Doulab collects, uses, and protects personal information and sets out the terms that govern the
              use of our diagnostics, foresight programs, and advisory services. If you have questions, contact{' '}
              <a href="mailto:legal@doulab.net">legal@doulab.net</a>.
            </p>
          }
        />

        <nav aria-label="On-page navigation" style={{ margin: '2rem 0' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-and-conditions">Terms &amp; Conditions</a>
            </li>
          </ul>
        </nav>

        <section id="privacy-policy" style={{ marginBottom: '3rem' }}>
          <h2>Privacy Policy</h2>
          <p>
            Doulab GmbH (referred to as &quot;Doulab&quot;, &quot;we&quot;, or &quot;us&quot;) provides strategic foresight, innovation
            advisory, and diagnostic services. This Privacy Policy describes the personal information we collect, how we use it, and
            the choices available to you.
          </p>

          <section id="data-we-collect">
            <h3>1. Information We Collect</h3>
            <ul>
              <li>
                <strong>Contact information</strong>: Name, business email, phone number, organization, and role provided when you
                request a consultation, register for a program, or download resources.
              </li>
              <li>
                <strong>Engagement data</strong>: Responses, assessments, and deliverables shared during ClarityScan&reg; diagnostics,
                workshops, interviews, and collaborative working sessions.
              </li>
              <li>
                <strong>Support and communications</strong>: Copies of messages sent to legal@doulab.net, hello@doulab.net, or other
                support channels, including metadata transmitted by your email provider.
              </li>
              <li>
                <strong>Technical data</strong>: IP addresses, device identifiers, approximate location, browser type, language
                settings, and referring URLs captured through privacy-respecting analytics (Cloudflare Web Analytics) to understand
                site performance. We do not use marketing or advertising cookies.
              </li>
              <li>
                <strong>Payment data</strong>: Stripe Checkout processes payments for fixed-fee services. Doulab does not store card
                numbers; Stripe processes personal data under its own terms and privacy policies.
              </li>
              <li>
                <strong>Booking data</strong>: Appointment details submitted through booking.doulab.net (which redirects to Google
                Calendar appointment links), such as name, email, and requested time.
              </li>
            </ul>
          </section>

          <section id="how-we-use-data">
            <h3>2. How We Use Information</h3>
            <p>We process personal information to:</p>
            <ul>
              <li>Deliver programs, diagnostics, and advisory services covered under a statement of work or booking;</li>
              <li>Schedule sessions, manage project logistics, and provide client support;</li>
              <li>Improve our tools, methodologies, and knowledge base using aggregated and anonymized insights;</li>
              <li>Send operational updates, policy notices, and—where permitted—thought leadership relevant to your engagement;</li>
              <li>Comply with legal obligations, regulatory requests, and internal risk management requirements.</li>
            </ul>
          </section>

          <section id="legal-bases">
            <h3>3. Legal Bases for Processing</h3>
            <p>
              Doulab processes personal data on the following grounds: (a) performance of a contract or to take steps at your request
              before entering into a contract; (b) legitimate interests in delivering and improving services while safeguarding client
              information; (c) compliance with legal obligations, including financial record keeping; and (d) consent for specific
              optional communications or research activities where required.
            </p>
          </section>

          <section id="data-sharing">
            <h3>4. Data Sharing &amp; Transfers</h3>
            <p>
              We may share personal information with carefully selected partners that help us deliver services, such as Cloudflare
              Pages (hosting and analytics), GitHub (source control and CI), Google Calendar appointment links (scheduling), and Stripe
              (payments). Each partner is bound by confidentiality commitments and data processing agreements. We do not sell or rent
              personal information. When data is transferred outside Switzerland or the European Economic Area, we rely on adequacy
              decisions, standard contractual clauses, or comparable safeguards.
            </p>
          </section>

          <section id="retention">
            <h3>5. Data Retention</h3>
            <p>
              We retain client records, diagnostics, and engagement outputs for the duration of an active engagement plus up to five
              (5) years, unless a longer period is legally required or expressly agreed in writing. Marketing preferences are retained
              until you opt out. We may anonymize information for research or benchmarking; anonymized data is no longer personal data.
            </p>
          </section>

          <section id="security">
            <h3>6. Security Measures</h3>
            <p>
              Doulab maintains administrative, technical, and physical safeguards to protect personal information. Access is limited to
              personnel and subcontractors who require it to perform their roles, subject to confidentiality obligations. We review
              tooling, access controls, and incident response procedures at least annually.
            </p>
          </section>

          <section id="your-rights">
            <h3>7. Your Rights</h3>
            <p>
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict processing of your personal
              information, as well as the right to data portability and to object to certain processing. You can exercise these rights by
              emailing <a href="mailto:legal@doulab.net">legal@doulab.net</a>. We may need to verify your identity before responding. You
              also have the right to lodge a complaint with your data protection authority.
            </p>
          </section>

          <section id="children">
            <h3>8. Children&apos;s Privacy</h3>
            <p>
              Our services are designed for professionals and organizations. We do not knowingly collect information from individuals
              under the age of sixteen (16). If you believe a minor has provided personal data, contact us so we can delete it.
            </p>
          </section>

          <section id="updates">
            <h3>9. Changes to This Privacy Policy</h3>
            <p>
              Material changes to this Privacy Policy will be posted on this page with an updated revision date. Where required by law,
              we will obtain your consent for significant changes.
            </p>
          </section>

          <section id="privacy-contact">
            <h3>10. Contact</h3>
            <p>
              Email <a href="mailto:legal@doulab.net">legal@doulab.net</a> or write to Doulab GmbH, Alpenstrasse 15, 6300 Zug,
              Switzerland for privacy inquiries, data access requests, or complaints.
            </p>
          </section>
        </section>

        <section id="terms-and-conditions">
          <h2>Terms &amp; Conditions</h2>
          <p>
            These Terms &amp; Conditions (&quot;Terms&quot;) govern access to Doulab diagnostics, workshops, research programs, and
            related services (collectively, the &quot;Services&quot;). By accessing or using the Services you agree to these Terms. If
            you are accepting on behalf of an organization, you confirm you have authority to bind that organization.
          </p>

          <section id="terms-agreement">
            <h3>1. Agreement</h3>
            <p>
              Each engagement is governed by these Terms, any statement of work, project proposal, or booking confirmation issued by
              Doulab, and any supplemental schedules agreed in writing. In case of conflict, the order of precedence is: (a) signed
              statements of work; (b) supplemental schedules; (c) these Terms.
            </p>
          </section>

          <section id="terms-definitions">
            <h3>2. Definitions</h3>
            <ul>
              <li>
                <strong>Client</strong>: Any organization or individual contracting Doulab for Services, including ClarityScan&reg;
                diagnostics, IMM-Pr programs, or advisory engagements.
              </li>
              <li>
                <strong>Deliverables</strong>: Reports, models, playbooks, or other outputs produced for the Client in connection with an
                engagement.
              </li>
              <li>
                <strong>Bookings</strong>: Self-service sessions scheduled through Stripe Checkout, Microsoft Bookings, or other online
                scheduling tools made available by Doulab.
              </li>
            </ul>
          </section>

          <section id="terms-scope">
            <h3>3. Scope of Services</h3>
            <p>
              Doulab designs and delivers strategy, innovation, foresight, and organizational capability engagements. Each engagement
              includes the timeline, format, and Deliverables described in the applicable statement of work or booking confirmation.
              Doulab may adapt delivery formats or staffing to ensure continuity. Material changes to scope require written agreement
              (email is sufficient).
            </p>
          </section>

          <section id="terms-payments">
            <h3>4. Bookings &amp; Payments</h3>
            <ol>
              <li>
                <strong>Stripe Checkout</strong>: Payments for fixed-fee Services are processed by Stripe. You authorize Stripe to store
                and process payment details in accordance with Stripe&apos;s privacy and security policies. Charges are processed in the
                currency displayed at checkout (USD by default). Applicable taxes are shown before payment.
              </li>
              <li>
                <strong>Invoiced engagements</strong>: Custom programs or retainers are invoiced per the statement of work. Unless agreed
                otherwise, invoices are due within ten (10) calendar days. Late balances accrue simple interest of 1.5 percent per month
                (or the maximum permitted by law). Doulab may suspend work while invoices remain outstanding.
              </li>
              <li>
                <strong>Cancellations and reschedules</strong>: Bookings may be rescheduled once with at least twenty four (24) hours&apos;
                notice. Additional changes are treated as new bookings. Multi-session engagements can be rescheduled with five (5)
                business days&apos; notice; shorter notice may incur fees covering reserved capacity and travel. If Doulab must cancel, we
                will offer the next available slot or refund fees for the affected session.
              </li>
            </ol>
          </section>

          <section id="terms-client-obligations">
            <h3>5. Client Responsibilities</h3>
            <p>
              Clients agree to provide timely access to stakeholders, accurate information, and secure collaboration spaces (for example
              Notion, Miro, Teams, or similar). The Client is responsible for ensuring that participation in workshops or diagnostics is
              voluntary and compliant with applicable internal policies.
            </p>
          </section>

          <section id="terms-ip">
            <h3>6. Intellectual Property</h3>
            <p>
              Unless otherwise agreed, Doulab retains ownership of methodologies, frameworks, tools, and pre-existing intellectual
              property used in delivering the Services. Upon full payment, the Client receives a non-exclusive, non-transferable license
              to use Deliverables for its internal business purposes. The Client may not resell or redistribute Deliverables without
              written permission.
            </p>
          </section>

          <section id="terms-feedback">
            <h3>7. Feedback</h3>
            <p>
              Feedback, suggestions, or improvement ideas shared with Doulab may be used to evolve our Services without obligation to the
              Client. Doulab will not publicly reference a Client&apos;s feedback without permission.
            </p>
          </section>

          <section id="terms-confidentiality">
            <h3>8. Confidentiality</h3>
            <p>
              Both parties agree to protect confidential information disclosed during an engagement and to use it only for delivering or
              receiving the Services. Confidentiality obligations do not apply to information that is public, already known without
              restriction, independently developed, or obtained lawfully from a third party without breach of duty.
            </p>
          </section>

          <section id="terms-warranties">
            <h3>9. Warranties &amp; Disclaimer</h3>
            <p>
              Doulab will deliver Services with professional care and skill consistent with agreed scopes. Except as expressly stated,
              the Services are provided &quot;as is&quot; without warranties of any kind. Doulab does not guarantee specific commercial
              outcomes or that Client assumptions will be validated.
            </p>
          </section>

          <section id="terms-liability">
            <h3>10. Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, Doulab&apos;s aggregate liability arising from the Services is limited to the fees
              paid for the engagement giving rise to the claim. Doulab will not be liable for indirect, incidental, consequential,
              special, or punitive damages. These limitations do not apply to liability that cannot be excluded under applicable law.
            </p>
          </section>

          <section id="terms-acceptance">
            <h3>11. Deliverable Review &amp; Acceptance</h3>
            <p>
              Deliverables are deemed accepted if no written feedback is received within five (5) business days of delivery. Requested
              changes within that timeframe will be addressed in a mutually agreed remediation plan. Additional revisions outside scope
              may be billed separately.
            </p>
          </section>

          <section id="terms-law">
            <h3>12. Governing Law &amp; Dispute Resolution</h3>
            <p>
              These Terms are governed by the laws of Switzerland. Disputes will first be escalated to designated representatives for
              good-faith resolution. If unresolved within thirty (30) days, disputes will be submitted to arbitration administered in
              Zurich, Switzerland under the Swiss Rules of International Arbitration in English, unless the parties agree otherwise.
              Nothing prevents either party from seeking interim or injunctive relief in competent courts.
            </p>
          </section>

          <section id="terms-changes">
            <h3>13. Changes to These Terms</h3>
            <p>
              Doulab may update these Terms from time to time. Material changes will be posted on this page with an updated revision
              date. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section id="terms-contact">
            <h3>14. Contact</h3>
            <p>
              Questions about these Terms can be sent to <a href="mailto:legal@doulab.net">legal@doulab.net</a> or via the contact form
              at <a href="https://doulab.net/contact">https://doulab.net/contact</a>.
            </p>
          </section>
        </section>
      </main>
    </Layout>
  );
}
