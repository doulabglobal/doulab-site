import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import PageHeader from '@site/src/components/PageHeader/PageHeader';
import CardGrid from '@site/src/components/CardGrid/CardGrid';

export default function NotFound() {
  return (
    <Layout title="Página no encontrada">
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <main className="container">
        <PageHeader
          title="Esta página se escapó del laboratorio."
          subtitle="El enlace que seguiste no existe, pero podemos ayudarte a regresar al camino."
          primaryCta={{
            label: 'Agenda',
            to: 'https://booking.doulab.net/',
            external: true,
            dataCta: 'cta.404.book',
            ariaLabel: 'Agenda con Doulab',
          }}
        />

        <section className="section" aria-labelledby="notfound-next-steps">
          <h2 id="notfound-next-steps">A dónde ir ahora</h2>
          <CardGrid>
            <article className="card" aria-labelledby="notfound-services">
              <h3 id="notfound-services">Servicios</h3>
              <p>Explora diagnósticos, talleres y programas.</p>
              <div className="cardFooter">
                <Link to="/services" className="cardCta" data-cta="cta.404.services">
                  Ver servicios →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="notfound-docs">
              <h3 id="notfound-docs">Documentos</h3>
              <p>Lee las últimas investigaciones y recursos.</p>
              <div className="cardFooter">
                <Link to="/docs/research-resources" className="cardCta" data-cta="cta.404.docs">
                  Visitar documentos →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="notfound-contact">
              <h3 id="notfound-contact">Contacto</h3>
              <p>Ponte en contacto con el equipo de Doulab.</p>
              <div className="cardFooter">
                <Link to="/contact" className="cardCta" data-cta="cta.404.contact">
                  Contáctanos →
                </Link>
              </div>
            </article>
            <article className="card" aria-labelledby="notfound-home">
              <h3 id="notfound-home">Inicio</h3>
              <p>Comienza de nuevo en la página principal de Doulab.</p>
              <div className="cardFooter">
                <Link to="/" className="cardCta" data-cta="cta.404.home">
                  Ir al inicio →
                </Link>
              </div>
            </article>
          </CardGrid>
        </section>
      </main>
    </Layout>
  );
}
