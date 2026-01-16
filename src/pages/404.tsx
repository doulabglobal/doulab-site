import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import PageHeader from '../components/PageHeader/PageHeader';
import CardGrid from '../components/CardGrid/CardGrid';

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <main className="container">
        <PageHeader
          title="This page escaped the lab."
          subtitle="The link you followed doesn’t exist, but we can get you back on track."
          primaryCta={{
            label: 'Book',
            to: 'https://booking.doulab.net/',
            external: true,
            dataCta: 'cta.404.book',
            ariaLabel: 'Book with Doulab',
          }}
        />

        <section className="section" aria-labelledby="notfound-next-steps">
          <h2 id="notfound-next-steps">Where to go next</h2>
          <CardGrid>
            <article className="card" aria-labelledby="notfound-services">
              <h3 id="notfound-services">Services</h3>
              <p>Explore diagnostics, workshops, and programs.</p>
              <div className="cardFooter">
                <Link to="/services" className="cardCta" data-cta="cta.404.services">
                  View services →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="notfound-docs">
              <h3 id="notfound-docs">Docs</h3>
              <p>Read the latest research and resources.</p>
              <div className="cardFooter">
                <Link to="/docs/research-resources" className="cardCta" data-cta="cta.404.docs">
                  Visit docs →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="notfound-contact">
              <h3 id="notfound-contact">Contact</h3>
              <p>Get in touch with the Doulab team.</p>
              <div className="cardFooter">
                <Link to="/contact" className="cardCta" data-cta="cta.404.contact">
                  Contact us →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="notfound-home">
              <h3 id="notfound-home">Home</h3>
              <p>Start over at the Doulab homepage.</p>
              <div className="cardFooter">
                <Link to="/" className="cardCta" data-cta="cta.404.home">
                  Go home →
                </Link>
              </div>
            </article>
          </CardGrid>
        </section>
      </main>
    </Layout>
  );
}
