// src/pages/services/index.tsx
import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import Hero from '@site/src/components/Hero';
import FinalCta from '@site/src/components/FinalCta';
import { CLARITYSCAN_CHECKOUT_URL } from '@site/src/constants/urls';
import PageMetadata from '@site/src/lib/pageMetadata';
import Search from 'lucide-react/dist/esm/icons/search';
import Lightbulb from 'lucide-react/dist/esm/icons/lightbulb';
import Layers from 'lucide-react/dist/esm/icons/layers';
import Users from 'lucide-react/dist/esm/icons/users';
import Radar from 'lucide-react/dist/esm/icons/radar';
import Settings2 from 'lucide-react/dist/esm/icons/settings-2';

export default function ServicesPage(): ReactNode {
    return (
        <Layout
            title="Servicios: innovación estructurada, diagnósticos, talleres y prospectiva"
            description="Programas, talleres, diagnósticos y prospectiva para hacer que la innovación sea repetible. Líneas base, decisiones con puntos de control y resultados medibles; con la privacidad primero."
        >
            <PageMetadata slug="/services" ogImage="/img/docusaurus-social-card.jpg" />
            <Head>
                <meta property="og:title" content="Servicios, innovación estructurada, diagnósticos, talleres y prospectiva" />
                <meta property="og:description" content="Programas, talleres, diagnósticos y prospectiva para hacer que la innovación sea repetible. Líneas base, decisiones con puntos de control y resultados medibles." />
                <meta property="og:image:alt" content="Doulab: Servicios" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="author" content="Luis Santiago Arias" />
                {/* Preload LCP hero image (PNG fallback). Browser will choose best available source. */}
                <link
                    rel="preload"
                    as="image"
                    href="/img/services-hero.png"
                    imageSrcSet="/img/services-hero.avif 1x, /img/services-hero.webp 1x, /img/services-hero.png 1x"
                    imageSizes="(max-width: 700px) 100vw, 600px"
                />
            </Head>

            <main>
                <Hero
                    title="Nuestros servicios"
                    subtitle="Programas, talleres, diagnósticos y prospectiva, convirtiendo la estrategia en resultados sostenidos."
                    body={"Ya sea que estés mapeando madurez, alineando equipos o preparándote para escalar, te encontramos donde estás y cocreamos el camino hacia los resultados."}
                    imageBase="/img/services-hero"
                    imageAlt="Nuestros servicios"
                    width={1600}
                    height={900}
                    primaryCta={{ to: CLARITYSCAN_CHECKOUT_URL, label: 'Agenda un ClarityScan® en línea', dataCta: 'cta.services.hero.book_clarityscan_online', external: true }}
                    secondaryCta={{ to: '/services/clarityscan', label: 'Explora ClarityScan', dataCta: 'cta.services.hero.explore_clarityscan' }}
                    ctaNote="ClarityScan Nivel 1 se reserva en línea por CHF 150. Los programas y talleres se definen en alcance durante una llamada de descubrimiento. Facturado en CHF; verás el equivalente local al pagar."
                    id="services-hero"
                    ariaLabelledbyId="services-hero-title"
                    eager
                />

                {/* Trusted line */}
                <section className="section" aria-label="Confían en nosotros">
                    <p className={`sectionLead ${'pages-b4-p1__centerText'}`}>
                        Confían en nosotros organizaciones como OGTIC, AFP Siembra, FUNDAPEC y Alpha Inversiones.
                    </p>
                </section>

                {/* Services Grid */}
                <section className="section" aria-labelledby="services-grid-title">
                    <h2 id="services-grid-title">Qué ofrecemos</h2>
                    <div className="cardGrid">
                        {/* Diagnostics */}
                        <article className="card" aria-labelledby="svc-diagnostics">
                            <Search className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-diagnostics">ClarityScan®: sabe dónde estás parado</h3>
                            <p>Un diagnóstico por niveles, basado en evidencia, para establecer la línea base de madurez en innovación y prospectiva y sacar a la luz las brechas.</p>
                            <ul>
                                <li>Nivel 1 Snapshot: CHF 150, reservable en línea</li>
                                <li>Nivel 2 Diagnóstico y Nivel 3 Auditoría: por alcance</li>
                            </ul>
                            <p className="microcopy">Facturado en CHF; verás el equivalente local al pagar.</p>
                            <div className={`cardFooter ${'pages-b4-p1__cardFooterRow'}`}>
                                <Link to="/services/clarityscan" className="cardCta" data-cta="cta.services.card.diagnostics" aria-label="Explora los niveles de ClarityScan">
                                    Explora los niveles →
                                </Link>
                                <Link href={CLARITYSCAN_CHECKOUT_URL} className="cardCta" data-cta="cta.services.card.diagnostics.book_online" aria-label="Reserva el Nivel 1 Snapshot de ClarityScan en línea vía Stripe Checkout" target="_blank" rel="noopener noreferrer">
                                    Reserva Nivel 1 →
                                </Link>
                            </div>
                        </article>

                        {/* Workshops */}
                        <article className="card" aria-labelledby="svc-workshops">
                            <Lightbulb className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-workshops">Talleres: alinea y activa</h3>
                            <p>Sesiones enfocadas que comprimen semanas de reuniones en decisiones y un plan claro.</p>
                            <ul>
                                <li>Sprint de alineación de estrategia y OKR</li>
                                <li>Facilitación de decisiones y hoja de ruta</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/custom-workshops" className="cardCta" data-cta="cta.services.card.workshops" aria-label="Agenda un sprint de taller con talleres a medida">
                                    Agenda un sprint de taller →
                                </Link>
                            </div>
                        </article>

                        {/* Programs */}
                        <article className="card" aria-labelledby="svc-programs">
                            <Layers className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-programs">Programas: construye capacidad de innovación</h3>
                            <p>Recorridos IMM-P® multifase para integrar gobernanza, proceso y habilidades.</p>
                            <ul>
                                <li>12+12 semanas: Descubrimiento/Validación a Eficiencia/Escala</li>
                                <li>Decisiones con puntos de control, KPI y cadencia</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/innovation-maturity" className="cardCta" data-cta="cta.services.card.programs" aria-label="Únete al programa de madurez en innovación IMM-P">
                                    Únete al programa IMM-P® →
                                </Link>
                            </div>
                        </article>

                        {/* IMM-DT vertical */}
                        <article className="card" aria-labelledby="svc-imm-dt">
                            <Settings2 className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-imm-dt">IMM-DT: madurez en transformación digital</h3>
                            <p>El vertical de transformación digital del IMM. Establece la línea base de madurez a lo largo de estrategia, proceso, cultura, tecnología y gobernanza.</p>
                            <ul>
                                <li>Construido sobre MCF v2.2 e IMM 2.2 (puntuación por dominio, preparación por fase)</li>
                                <li>Referencia piloto: transformación fintech de FUNDAPEC</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/imm-dt" className="cardCta" data-cta="cta.services.card.imm-dt">
                                    Explora IMM-DT →
                                </Link>
                            </div>
                        </article>

                        {/* Coaching */}
                        <article className="card" aria-labelledby="svc-coaching">
                            <Users className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-coaching">Coaching y mentoría: crece con guía</h3>
                            <p>Acompañamiento 1:1 y grupal para remover bloqueos, transferir práctica y sostener la cadencia de entrega.</p>
                            <ul>
                                <li>Apoyo a la decisión y ciclos de retroalimentación</li>
                                <li>Rituales para la cadencia de entrega</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/services/coaching-mentoring" className="cardCta" data-cta="cta.services.card.coaching" aria-label="Ver opciones de coaching para coaching y mentoría">
                                    Ver opciones de coaching →
                                </Link>
                            </div>
                        </article>

                        {/* Future Studies */}
                        <article className="card" aria-labelledby="svc-futures">
                            <Radar className="cardIcon" aria-hidden="true" />
                            <h3 id="svc-futures">Estudios de futuro: anticipa y lidera</h3>
                            <p>Señales, escenarios y alfabetización para mitigar el riesgo de las apuestas y dar forma a una estrategia resiliente.</p>
                            <ul>
                                <li>Escaneos de señales tempranas y briefings</li>
                                <li>Diseño de escenarios y formación en prospectiva</li>
                            </ul>
                            <div className="cardFooter">
                                <Link to="/vigia-futura" className="cardCta" data-cta="cta.services.card.vigia" aria-label="Conoce más sobre Vigía Futura">
                                    Conoce más →
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Final CTA */}
                <FinalCta
                    id="services-final"
                    ariaLabelledbyId="services-cta-title"
                    title="Elige el servicio que se ajusta a tu momento."
                    body="ClarityScan® Nivel 1 se reserva en línea. Talleres, programas y coaching se definen en alcance en una llamada de descubrimiento de 20 minutos."
                    primaryCta={{ href: CLARITYSCAN_CHECKOUT_URL, label: 'Empieza con un diagnóstico', dataCta: 'cta.services.final.diagnostic', newTab: true }}
                    secondaryCta={{ to: 'https://booking.doulab.net/discovery', label: 'Conversemos', dataCta: 'cta.services.final.contact' }}
                />
            </main>
        </Layout>
    );
}
