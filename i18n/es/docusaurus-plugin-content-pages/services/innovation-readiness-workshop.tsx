import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

const BOOKINGS_URL = "https://booking.doulab.net/fdworkshop";
const CONTACT_EMAIL = "luis@doulab.net";

export default function InnovationReadinessWorkshopPage() {
  return (
    <Layout
      title="Taller de Preparación y Gobernanza para la Innovación"
      description="Un taller híbrido de 8 horas que alinea prospectiva, cultura, MicroCanvas® 2.2, IMM-P® y gobernanza para que los equipos puedan innovar con claridad y ejecución predecible."
    >
      <main className={'pages-services-innovation-readiness-workshop__page'}>
        {/* Hero */}
        <section className={'pages-services-innovation-readiness-workshop__hero'}>
          <div className={'pages-services-innovation-readiness-workshop__heroContent'}>
            <h1 className={'pages-services-innovation-readiness-workshop__heroTitle'}>
              Taller de Preparación y Gobernanza para la Innovación
            </h1>
            <p className={'pages-services-innovation-readiness-workshop__heroSubtitle'}>
              Transforma cómo tu equipo piensa, decide y ejecuta.
            </p>
            <p className={'pages-services-innovation-readiness-workshop__heroBody'}>
              Un taller híbrido de 8 horas que integra prospectiva, cultura, el
              MicroCanvas® Framework 2.2, IMM-P® y gobernanza de células de trabajo
              para que tus iniciativas de innovación se vuelvan predecibles,
              alineadas y basadas en evidencia.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__heroMeta'}>
              <span>Formato: 4 horas presenciales + 4 horas en línea</span>
              <span>Modalidad: Totalmente digital, laptop por participante</span>
            </div>
            <div className={'pages-services-innovation-readiness-workshop__heroActions'}>
              <Link className={'pages-services-innovation-readiness-workshop__primaryButton'} to={BOOKINGS_URL}>
                Agenda una llamada de descubrimiento
              </Link>
              <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="#structure">
                Ver estructura del taller
              </Link>
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Para quién es este taller</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Este taller está diseñado para equipos que cargan responsabilidad real
              por el cambio y la ejecución:
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Equipos de innovación y transformación</h3>
                <p>
                  Equipos que corren iniciativas estratégicas, pilotos y experimentos
                  que deben alinearse con la creación de valor de largo plazo.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Equipos de estrategia y PMO</h3>
                <p>
                  Unidades que coordinan portafolios, proyectos y hojas de ruta de
                  cambio, y necesitan mejor gobernanza y predictibilidad.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Equipos de diseño de producto y servicio</h3>
                <p>
                  Equipos que necesitan conectar el insight de cliente, la
                  factibilidad y la disciplina de ejecución en un proceso coherente.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Células de trabajo y equipos transversales</h3>
                <p>
                  Grupos que existen en nombre pero luchan con roles, cadencias
                  y reglas de decisión para correr iniciativas de extremo a extremo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems we address */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Los problemas que te ayudamos a resolver</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              La mayoría de las organizaciones ya tiene ideas. Los retos reales son
              estructurales y conductuales:
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Ideas sin estructura</h3>
                <p>
                  Las iniciativas parten de intuición, no de un modelo compartido del
                  problema, del cliente y de las restricciones.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Baja resiliencia bajo presión</h3>
                <p>
                  Cuando las prioridades cambian o aparece resistencia, los equipos pierden
                  momentum o abandonan el trabajo en lugar de adaptarse con intención.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Células de trabajo sin gobernanza</h3>
                <p>
                  Las células de trabajo y los equipos transversales existen, pero los roles,
                  las cadencias y las reglas de decisión son informales, implícitas o
                  contradictorias.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Ejecución impredecible</h3>
                <p>
                  Los proyectos se mueven a saltos y paradas. La evidencia no se usa
                  consistentemente para guiar decisiones y puntos de control.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Planes que no pueden adaptarse</h3>
                <p>
                  Cuando aparece resistencia interna, los planes se empujan a la fuerza
                  o se abandonan, con poco aprendizaje estructurado.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Innovación no vinculada a la estrategia</h3>
                <p>
                  Los equipos luchan por mostrar cómo las iniciativas apoyan la dirección
                  estratégica de largo plazo y el apetito de riesgo de la organización.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Qué aprenderá y construirá tu equipo</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Al finalizar el taller, los participantes tendrán artefactos concretos
              y lenguaje compartido para guiar iniciativas reales.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Prospectiva y contexto estratégico</h3>
                <p>
                  Un entendimiento más claro de las fuerzas que reconfiguran tu sector
                  y cómo afectan tu mandato y portafolio.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Propósito, cultura y resiliencia</h3>
                <p>
                  Una línea base compartida sobre por qué el trabajo importa, y qué
                  comportamientos apoyan la resiliencia bajo cambio e incertidumbre.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Pensamiento estructurado con MicroCanvas® 2.2</h3>
                <p>
                  La capacidad de estructurar problemas, clientes, valor, fricción
                  y factibilidad de manera repetible.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Ejecución basada en evidencia con IMM-P®</h3>
                <p>
                  Un entendimiento práctico de cómo pasar de ideas a
                  hipótesis, experimentos y puntos de control de evidencia.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Gobernanza para la célula de trabajo o equipo transversal</h3>
                <p>
                  Un modelo de gobernanza para la célula de trabajo, incluyendo roles,
                  cadencias, reglas de decisión y rutas de escalamiento.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Hoja de ruta 30/60/90 días</h3>
                <p>
                  Una hoja de ruta corta y realista para los próximos 30, 60 y 90 días para
                  una o más iniciativas, construida por el equipo mismo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Structure */}
        <section id="structure" className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <Heading as="h2" id="structure" className={'pages-services-innovation-readiness-workshop__sectionTitle'}>
              Estructura del taller (8 horas híbrido)
            </Heading>
            <div className={'pages-services-innovation-readiness-workshop__columns'}>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Día 1 - Presencial (4 horas, totalmente digital)</h3>
                <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
                  Foco en contexto, propósito, cultura y pensamiento estructurado.
                </p>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>
                    <strong>Apertura y contexto compartido</strong> - por qué la innovación
                    debe convertirse en un sistema gobernado y basado en evidencia.
                  </li>
                  <li>
                    <strong>Prospectiva e hiperconvergencia</strong> - exploración
                    guiada de los motores que dan forma a tu sector y sus
                    implicaciones.
                  </li>
                  <li>
                    <strong>Propósito, identidad y cultura</strong> - reflexión individual
                    y de equipo sobre significado, comportamientos y resiliencia.
                  </li>
                  <li>
                    <strong>MicroCanvas® Framework 2.2</strong> - trabajo práctico
                    con problema, cliente, valor, fricción y factibilidad.
                  </li>
                </ul>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Día 2 - En línea (4 horas)</h3>
                <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
                  Foco en ejecución, gobernanza y compromisos.
                </p>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>
                    <strong>Re-anclaje y recapitulación</strong> - revisión breve del Día 1
                    y del modelo integrado.
                  </li>
                  <li>
                    <strong>Sistema de ejecución IMM-P®</strong> - cómo estructurar
                    hipótesis, experimentos y puntos de control de evidencia.
                  </li>
                  <li>
                    <strong>Gobernanza de la célula de trabajo</strong> - diseño
                    de roles, cadencias, reglas de decisión y escalamiento, con una
                    simulación corta.
                  </li>
                  <li>
                    <strong>Integración y hoja de ruta</strong> - un plan de 30/60/90 días
                    construido por el equipo para aplicar lo que crearon.
                  </li>
                </ul>
              </div>
            </div>

            {/* Typical agenda (time bands) */}
            <div className={'pages-services-innovation-readiness-workshop__typicalAgenda'}>
              <h3 className={'pages-services-innovation-readiness-workshop__typicalAgendaTitle'}>Agenda típica (bandas de tiempo)</h3>
              <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
                Los tiempos exactos se adaptan a tu contexto y tamaño de grupo, pero un flujo típico se ve así:
              </p>
              <div className={'pages-services-innovation-readiness-workshop__columns'}>
                <div className={'pages-services-innovation-readiness-workshop__column'}>
                  <h4>Día 1: Presencial</h4>
                  <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                    <li>
                      <strong>0:00–0:30</strong> – Bienvenida, contexto y expectativas.
                    </li>
                    <li>
                      <strong>0:30–1:30</strong> – Prospectiva e hiperconvergencia: señales, motores e implicaciones.
                    </li>
                    <li>
                      <strong>1:30–2:30</strong> – Propósito, identidad y cultura: reflexión a nivel individual y de equipo.
                    </li>
                    <li>
                      <strong>2:30–4:00</strong> – Bloques de trabajo de MicroCanvas® 2.2 (problema, segmento, valor, fricción y factibilidad).
                    </li>
                  </ul>
                </div>
                <div className={'pages-services-innovation-readiness-workshop__column'}>
                  <h4>Día 2: En línea</h4>
                  <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                    <li>
                      <strong>0:00–0:30</strong> – Re-anclaje, recapitulación y alineación sobre metas.
                    </li>
                    <li>
                      <strong>0:30–2:00</strong> – Sistema de ejecución IMM-P®: hipótesis, experimentos y puntos de control de evidencia.
                    </li>
                    <li>
                      <strong>2:00–3:00</strong> – Gobernanza de la célula de trabajo: roles, cadencias y reglas de decisión, con simulación.
                    </li>
                    <li>
                      <strong>3:00–4:00</strong> – Integración y hoja de ruta de 30/60/90 días, más compromisos y próximos pasos.
                    </li>
                  </ul>
                </div>
              </div>
              <p className={'pages-services-innovation-readiness-workshop__microcopy'}>
                Esta agenda es indicativa. Ajustamos las bandas de tiempo una vez conocemos el número de participantes, las iniciativas actuales y la profundidad deseada por módulo.
              </p>
            </div>
          </div>
        </section>

        {/* Methods */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Métodos y frameworks usados</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              El taller combina varias disciplinas complementarias en un viaje
              integrado:
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Prospectiva estratégica e hiperconvergencia</h3>
                <p>
                  Para conectar el trabajo del equipo con los cambios mayores en
                  demografía, regulación, tecnología y comportamiento.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>MicroCanvas® Framework 2.2</h3>
                <p>
                  Para estructurar problemas, insights de cliente, valor, fricción y
                  factibilidad de manera consistente a través de las iniciativas.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>IMM-P®</h3>
                <p>
                  Para llevar disciplina a cómo se validan las ideas, se usa la
                  evidencia y se toman las decisiones a través de los niveles de madurez.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Gobernanza de células de trabajo</h3>
                <p>
                  Para asegurar que las iniciativas se ejecuten a través de roles claros,
                  cadencias y prácticas de toma de decisión, no solo entusiasmo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fully digital */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Totalmente digital, colaborativo por diseño</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Todo es digital, incluso durante la sesión presencial.
            </p>
            <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
              <li>Cada participante trabaja desde su propia laptop para todos los ejercicios.</li>
              <li>Toda la colaboración ocurre en espacios de trabajo en línea compartidos (Miro o equivalente).</li>
              <li>El contenido se entrega a través de Docusaurus en un diseño amigable para presentación.</li>
              <li>Todas las salidas permanecen accesibles después del taller para seguimiento y trabajo adicional.</li>
              <li>Sin impresión, sin transcripción de notas adhesivas y sin pérdida de información entre días.</li>
            </ul>
          </div>
        </section>

        {/* Measurement */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Medición e impacto</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              El taller incluye una capa de evaluación ligera pero rigurosa para que puedas
              verlo como una inversión en capacidad, no solo como un evento.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Línea base pre-taller</h3>
                <p>
                  Encuesta corta sobre estructura, gobernanza, confianza y
                  alineación para entender desde dónde parte el equipo.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Evaluación post-taller</h3>
                <p>
                  Las mismas métricas repetidas, para mostrar deltas en confianza,
                  estructura, gobernanza y preparación percibida.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Salidas del equipo como evidencia</h3>
                <p>
                  La calidad de canvases, hipótesis, cartas de gobernanza y
                  hojas de ruta se usa como evidencia cualitativa de progreso.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Resumen para liderazgo</h3>
                <p>
                  Una vista concisa para liderazgo destacando mejoras,
                  fortalezas y próximos pasos recomendados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Format and requirements */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Formato, logística y requisitos</h2>
            <div className={'pages-services-innovation-readiness-workshop__columns'}>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Formato estándar</h3>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>Duración total: 8 horas.</li>
                  <li>Día 1: 4 horas presenciales (bloque único).</li>
                  <li>Día 2: 4 horas en línea (bloque único, día diferente).</li>
                </ul>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__column'}>
                <h3>Requisitos técnicos</h3>
                <ul className={'pages-services-innovation-readiness-workshop__bulletList'}>
                  <li>Una laptop por participante (obligatorio).</li>
                  <li>WiFi estable en la sala presencial.</li>
                  <li>Navegador moderno (Chrome o Edge recomendados).</li>
                  <li>Acceso a Zoom y audífonos para el Día 2.</li>
                  <li>Acceso a Miro (modo invitado o espacio de trabajo temporal gestionado por Doulab).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section id="pricing" className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Inversión</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              El taller se ofrece como un servicio estructurado de Doulab con tres
              niveles, según el nivel de personalización y seguimiento que
              requieras.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Standard</h3>
                <p>
                  Currículum central para equipos más pequeños que quieren experimentar el
                  formato completo de 8 horas con personalización mínima.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Professional</h3>
                <p>
                  Currículum central más adaptación a tu sector, iniciativas actuales
                  y realidad de gobernanza. Recomendado para la mayoría de los
                  equipos corporativos.
                </p>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Enterprise</h3>
                <p>
                  Nivel Professional más línea base de madurez, integración de OKR,
                  diseño de portafolio y acompañamiento de 90 días para implementación.
                </p>
              </div>
            </div>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Para instituciones financieras corporativas en Latinoamérica (como
              fondos de pensión, bancos y aseguradoras), este taller típicamente
              se entrega bajo el nivel Professional.
            </p>
          </div>
        </section>

        {/* About */}
        <section className={'pages-services-innovation-readiness-workshop__sectionAlt'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Acerca de Doulab</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Doulab es una práctica de innovación estratégica con sede en Zúrich,
              que opera en la intersección de prospectiva, frameworks de innovación
              y gobernanza de ejecución.
            </p>
            <p className={'pages-services-innovation-readiness-workshop__bodyText'}>
              Somos los autores del MicroCanvas® Framework 2.2 y del Programa IMM-P®
              de Madurez y Metodología en Innovación, y trabajamos con organizaciones
              públicas y privadas para convertir la innovación en una capacidad
              repetible y basada en evidencia. Este taller es facilitado personalmente
              por Luis Alberto Santiago Arias, Arquitecto de Innovación Estratégica y
              creador del MicroCanvas® Framework.
            </p>
          </div>
        </section>

        {/* Related programs and documents */}
        <section className={'pages-services-innovation-readiness-workshop__section'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Programas y documentos relacionados</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Combina este taller con nuestros diagnósticos centrales, programas y material de referencia.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__grid'}>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Línea base de preparación ClarityScan</h3>
                <p>
                  Ejecuta una evaluación rápida de madurez (MCF 2.2 + IMM) para anclar el taller en evidencia.
                </p>
                <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="/services/clarityscan">
                  Explora ClarityScan
                </Link>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Programa IMM-P®</h3>
                <p>
                  Viaje multifase para incorporar puntos de control de evidencia, gobernanza y cadencia de entrega.
                </p>
                <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="/services/innovation-maturity">
                  Ver el programa
                </Link>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Talleres a medida</h3>
                <p>
                  Sprints a medida para estrategia, OKRs y facilitación de decisiones alineados a tu contexto.
                </p>
                <Link className={'pages-services-innovation-readiness-workshop__secondaryButton'} to="/services/custom-workshops">
                  Ver opciones a medida
                </Link>
              </div>
              <div className={'pages-services-innovation-readiness-workshop__card'}>
                <h3>Whitepaper de IA Federada</h3>
                <p>
                  Nuestra referencia sobre gobernanza de IA distribuida y agéntica con puntos de control de evidencia.
                </p>
                <Link
                  className={'pages-services-innovation-readiness-workshop__secondaryButton'}
                  to="/docs/research-resources/distributed-federated-agentic-ai"
                >
                  Leer el whitepaper
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className={'pages-services-innovation-readiness-workshop__sectionCta'}>
          <div className={'pages-services-innovation-readiness-workshop__container'}>
            <h2 className={'pages-services-innovation-readiness-workshop__sectionTitle'}>Próximos pasos</h2>
            <p className={'pages-services-innovation-readiness-workshop__sectionIntro'}>
              Si te gustaría explorar si este taller es un buen ajuste para tu
              equipo, podemos empezar con una llamada corta de descubrimiento.
            </p>
            <div className={'pages-services-innovation-readiness-workshop__heroActions'}>
              <Link className={'pages-services-innovation-readiness-workshop__primaryButton'} to={BOOKINGS_URL}>
                Agenda una llamada de descubrimiento
              </Link>
              <a
                className={'pages-services-innovation-readiness-workshop__secondaryButton'}
                href="https://booking.doulab.net/discovery"
                data-cta="cta.services.innovation_readiness.proposal.discovery"
              >
                Solicita una propuesta y fechas
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
