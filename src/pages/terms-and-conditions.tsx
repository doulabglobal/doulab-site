// src/pages/terms-and-conditions.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import PageHeader from '../components/PageHeader/PageHeader';

export default function TermsAndConditions(): ReactNode {
  const pageTitle = 'Terms & Conditions | Doulab';
  const description =
    'Terms and conditions governing the use of Doulab services, ClarityScan diagnostics, bookings, and related digital properties.';

  return (
    <Layout title={pageTitle} description={description}>
      <Head>
        <link rel="canonical" href="https://doulab.net/terms-and-conditions" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className="container" style={{ padding: '2rem 1rem', maxWidth: '960px' }}>
        <PageHeader
          title="Terms & Conditions"
          meta="Updated: 24 September 2025"
        />

        <section id="agreement">
          <h2>1. Agreement</h2>
          <p>
            These Terms &amp; Conditions (the "Terms") govern your use of Doulab websites, diagnostics, workshops, foresight
            programs, and any related services (collectively, the "Services"). By accessing the Services, submitting a booking,
            or confirming a Statement of Work, you agree to be legally bound by these Terms.
          </p>
        </section>

        <section id="definitions">
          <h2>2. Definitions</h2>
          <ul>
            <li>
              <strong>Client</strong>: Any organization or individual contracting Doulab for Services, including ClarityScan&reg;
              diagnostics, IMM-Pr programs, or advisory engagements.
            </li>
            <li>
              <strong>Deliverables</strong>: Outputs such as reports, briefings, workshops, or frameworks produced specifically for
              a Client under an engagement.
            </li>
            <li>
              <strong>Bookings</strong>: Self-service sessions purchased via Stripe Checkout or scheduled through Microsoft Bookings.
            </li>
          </ul>
        </section>

        <section id="scope">
          <h2>3. Scope of Services</h2>
          <p>
            Doulab designs and delivers strategy, innovation, and foresight engagements. Each engagement is governed by a mutually
            agreed scope, timeline, and set of Deliverables. Doulab may adjust delivery formats to ensure continuity when
            circumstances outside our control require it. Any material change to format, timeline, or scope will be communicated to
            the Client with reasonable notice and requires written confirmation (email is sufficient).
          </p>
        </section>

        <section id="bookings-and-payments">
          <h2>4. Bookings &amp; Payments</h2>
          <ol>
            <li>
              <strong>Stripe Checkout</strong>: Payments for ClarityScan&reg; or similar fixed-fee Services are processed by Stripe.
              You authorize Stripe to store and process your payment details in accordance with Stripe's privacy and security
              policies. Charges are processed in the currency displayed at checkout (USD by default). Applicable taxes will be
              shown before payment is submitted.
            </li>
            <li>
              <strong>Invoiced engagements</strong>: Programs, workshops, or retainers not paid via Stripe are invoiced according to
              the Statement of Work. Unless agreed otherwise in writing, invoices are due within ten (10) calendar days. Doulab
              calculates late interest as simple interest of 1.5 percent per month (or the maximum permitted by law) on the outstanding balance and may suspend work until accounts are current. Accounts more than thirty (30) days past due may be escalated to collections and incur reasonable recovery costs.
            </li>
            <li>
              <strong>Cancellations and reschedules</strong>: Bookings may be rescheduled once with at least twenty four (24) hours' notice by replying to the confirmation email or contacting support@doulab.net. Additional changes or cancellations are treated as new bookings. For multi-session or
              programmatic engagements, the Client may request a reschedule with five (5) business days' notice; shorter notice may
              incur fees needed to cover reserved capacity and travel. If Doulab cancels or reschedules, we will offer the next
              available slot or refund fees paid for the affected session.
            </li>
          </ol>
        </section>

        <section id="client-obligations">
          <h2>5. Client Responsibilities</h2>
          <p>
            Clients agree to provide accurate information, timely access to stakeholders, secure collaboration spaces (for example
            Notion, Miro, Teams, or equivalent), and any materials necessary for Doulab to deliver the Services. Delays or gaps in
            inputs may extend milestones. If Client delays extend beyond ten (10) business days, Doulab may adjust the schedule or
            invoice work completed to date. The Client is responsible for ensuring participation in scheduled sessions, including
            booking follow-up meetings when Deliverables require review.
          </p>
        </section>

        <section id="intellectual-property">
          <h2>6. Intellectual Property</h2>
          <ol>
            <li>
              <strong>Framework IP</strong>: Doulab retains all right, title, and interest in proprietary methods, including
              MicroCanvas&reg;, IMM-Pr&reg;, templates, diagnostics, and research frameworks. Doulab grants Clients a non-exclusive
              license to use these materials internally for the purpose defined in the engagement. Registered marks will be
              identified in Statements of Work and associated Deliverables.
            </li>
            <li>
              <strong>Client Deliverables</strong>: Final Deliverables created specifically for a Client may be used internally by
              that Client without additional license fees, unless outlined differently in the Statement of Work. Any external use or
              publication requires Doulab's written permission.
            </li>
          </ol>
        </section>

        <section id="data-protection">
          <h2>7. Data Protection &amp; Privacy</h2>
          <p>
            Doulab operates on a privacy-first basis. We collect only the data required to deliver the Services, process payments,
            and fulfill our legal obligations. We do not embed third-party trackers in client workspaces. Third-party processors
            (for example Stripe and Microsoft Bookings) handle data under their own policies; Clients should review those terms.
            Project files are stored in encrypted repositories with access restricted to the delivery team. Unless required to retain
            records for legal or audit purposes, project data is deleted or anonymized within twelve (12) months of engagement
            completion. Nothing in these Terms restricts either party from meeting statutory obligations such as breach notifications
            or lawful requests from authorities.
          </p>
        </section>

        <section id="confidentiality">
          <h2>8. Confidentiality</h2>
          <p>
            Both parties agree to keep non-public information shared during the engagement confidential and to use such information
            solely for the delivery of Services. Confidential information will be stored using password-protected or access-controlled
            systems, and shared only with personnel who need it to perform the Services. The confidentiality obligation does not apply
            to information that is public, already known without restriction, independently developed without reliance on the other
            party's information, or obtained lawfully from a third party without breach of obligation.
          </p>
        </section>

        <section id="warranties-disclaimer">
          <h2>9. Warranties &amp; Disclaimer</h2>
          <p>
            Doulab delivers Services with professional diligence and in accordance with agreed scopes. However, innovation and
            foresight initiatives involve inherent uncertainties. Except as expressly stated in these Terms or a Statement of Work,
            the Services are provided "as is" without warranties of any kind, whether express, implied, or statutory. Doulab does not
            guarantee specific commercial outcomes or that Client assumptions will be validated.
          </p>
        </section>

        <section id="liability">
          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Doulab's aggregate liability arising from or related to any engagement is limited
            to the fees paid for the specific Services giving rise to the claim. Doulab will not be liable for indirect, incidental,
            consequential, special, or punitive damages, including lost profits or loss of opportunity. These limitations do not apply
            to liability for gross negligence, intentional misconduct, death, personal injury, or any other liability that cannot be
            excluded under applicable law.
          </p>
        </section>

        <section id="acceptance">
          <h2>11. Deliverable Review &amp; Acceptance</h2>
          <p>
            Unless otherwise defined in the Statement of Work, Deliverables are deemed accepted if no written feedback is received
            within five (5) business days of delivery. If the Client requests changes within that period, the parties will agree on a
            remediation plan and timeline. Additional revisions outside the agreed scope may be billed separately.
          </p>
        </section>

        <section id="governing-law">
          <h2>12. Governing Law &amp; Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of Switzerland, without regard to conflict of law principles. Any disputes shall
            first be addressed through good-faith discussions between appointed representatives. If unresolved within thirty (30)
            days, the matter will be submitted to arbitration administered in Zurich, Switzerland, under the Swiss Rules of
            International Arbitration in English, unless the parties agree on another language. This clause does not prevent either
            party from seeking interim or injunctive relief in competent courts, nor does it limit statutory or regulatory reporting
            obligations.
          </p>
        </section>

        <section id="changes">
          <h2>13. Changes to These Terms</h2>
          <p>
            Doulab may update these Terms from time to time. Material changes will be posted on this page with an updated "last
            revised" date. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section id="contact">
          <h2>14. Contact</h2>
          <p>
            Questions about these Terms can be sent to <a href="mailto:legal@doulab.net">legal@doulab.net</a> or by using the contact
            form at <a href="https://doulab.net/contact">https://doulab.net/contact</a>.
          </p>
        </section>
      </main>
    </Layout>
  );
}


