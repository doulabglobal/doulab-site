import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Contact() {
    return (
        <Layout title="Contact" description="Get in touch with Doulab">
            <Head>
                <link rel="canonical" href="https://doulab.net/contact" />
            </Head>

            <main className="container margin-vert--lg">
                <header className="margin-bottom--lg">
                    <h1>Contact</h1>
                    <p>Tell us about your goals. We’ll propose an IMM journey with clear gates and KPIs.</p>
                </header>

                <section aria-labelledby="write-to-us" className="margin-bottom--lg">
                    <h2 id="write-to-us">Write to us</h2>
                    <p>
                        Email: <a href="mailto:hello@doulab.net">hello@doulab.net</a>
                    </p>
                    <p>We aim to reply within 2 business days.</p>
                </section>

                <section aria-labelledby="next-steps">
                    <h2 id="next-steps">Next steps</h2>
                    <ul>
                        <li>Optional 20-minute discovery call to align on objectives.</li>
                        <li>Light diagnostic to baseline current maturity (MCF 2.1 + IMM).</li>
                        <li>Proposal with a 12+12 week plan (Discovery/Validation → Efficiency/Scale).</li>
                    </ul>
                </section>

                {/* Future: privacy-first form (when ready)
          <section aria-labelledby="contact-form" className="margin-top--lg">
            <h2 id="contact-form">Send a message</h2>
            <form method="post" action="/api/contact">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required />
              <button type="submit">Send</button>
            </form>
          </section>
        */}
            </main>
        </Layout>
    );
}
