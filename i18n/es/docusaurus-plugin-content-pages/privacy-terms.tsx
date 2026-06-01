import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Heading from '@theme/Heading';
import PageHeader from '@site/src/components/PageHeader/PageHeader';

export default function PrivacyAndTerms(): ReactNode {
  const pageTitle = 'Privacidad y Términos | Doulab';
  const description =
    'Política de privacidad y términos y condiciones que cubren los servicios de Doulab, diagnósticos, programas de prospectiva y propiedades digitales.';
  const lastUpdated = '15 de enero de 2026';

  return (
    <Layout title={pageTitle} description={description}>
      <Head>
        <link rel="canonical" href="https://doulab.net/privacy-terms" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta name="robots" content="noindex,follow" />
      </Head>

      <main className={`container ${'pages-legal__main'}`}>
        <PageHeader
          title="Privacidad y Términos"
          meta={`Actualizado: ${lastUpdated}`}
          body={
            <p>
              Esta página explica cómo Doulab recopila, utiliza y protege la información personal, y establece los términos que rigen el
              uso de nuestros diagnósticos, programas de prospectiva y servicios de asesoría. Si tienes preguntas, contacta a{' '}
              <a href="mailto:legal@doulab.net">legal@doulab.net</a>.
            </p>
          }
        />

        <nav aria-label="Navegación en la página" className={'pages-legal__nav'}>
          <ul className={'pages-legal__navList'}>
            <li>
              <a href="#privacy">Privacidad</a>
            </li>
            <li>
              <a href="#analytics">Analítica</a>
            </li>
            <li>
              <a href="#bookings">Reservas</a>
            </li>
            <li>
              <a href="#terms">Términos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>

        <section id="privacy" className={'pages-legal__section'}>
          <Heading as="h2" id="privacy">
            Privacidad
          </Heading>
          <p>
            Santiago Arias Consulting (&quot;Doulab&quot;) (referido como &quot;Doulab&quot;, &quot;nosotros&quot; o &quot;nos&quot;) brinda servicios de prospectiva estratégica,
            asesoría en innovación y diagnósticos. Esta Política de Privacidad describe la información personal que recopilamos, cómo la usamos y
            las opciones disponibles para ti.
          </p>

          <section id="data-we-collect">
            <Heading as="h3" id="data-we-collect">
              1. Información que recopilamos
            </Heading>
            <ul>
              <li>
                <strong>Información de contacto</strong>: Nombre, correo electrónico empresarial, número de teléfono, organización y cargo que proporcionas al
                solicitar una consulta, inscribirte en un programa o descargar recursos.
              </li>
              <li>
                <strong>Datos de engagement</strong>: Respuestas, evaluaciones y entregables compartidos durante los diagnósticos ClarityScan&reg;,
                talleres, entrevistas y sesiones colaborativas de trabajo.
              </li>
              <li>
                <strong>Soporte y comunicaciones</strong>: Copias de los mensajes enviados a legal@doulab.net, hello@doulab.net u otros
                canales de soporte, incluyendo los metadatos transmitidos por tu proveedor de correo electrónico.
              </li>
              <li>
                <strong>Datos técnicos</strong>: Direcciones IP, identificadores de dispositivo, ubicación aproximada, tipo de navegador, configuración de
                idioma y URLs de referencia capturadas a través de analítica respetuosa de la privacidad (Cloudflare Web Analytics) para entender
                el desempeño del sitio. No usamos cookies de marketing ni de publicidad.
              </li>
              <li>
                <strong>Datos de pago</strong>: Stripe Checkout procesa los pagos por servicios de tarifa fija. Doulab no almacena números de tarjeta;
                Stripe procesa los datos personales bajo sus propios términos y políticas de privacidad.
              </li>
              <li>
                <strong>Datos de reserva</strong>: Detalles de las citas enviadas a través de booking.doulab.net (que redirige a enlaces de citas de
                Google Calendar), tales como nombre, correo electrónico y horario solicitado.
              </li>
            </ul>
          </section>

          <section id="analytics">
            <Heading as="h3" id="analytics">
              Analítica
            </Heading>
            <p>
              Usamos Cloudflare Web Analytics para entender el desempeño del sitio y las tendencias agregadas de tráfico. No usamos cookies de
              marketing ni de publicidad.
            </p>
          </section>

          <section id="bookings">
            <Heading as="h3" id="bookings">
              Reservas
            </Heading>
            <p>
              Las solicitudes de reserva hechas en booking.doulab.net redirigen a enlaces de citas de Google Calendar. Recopilamos únicamente los
              detalles que envías (nombre, correo electrónico y horario solicitado) para agendar las sesiones.
            </p>
          </section>

          <section id="how-we-use-data">
            <Heading as="h3" id="how-we-use-data">
              2. Cómo usamos la información
            </Heading>
            <p>Procesamos información personal para:</p>
            <ul>
              <li>Entregar programas, diagnósticos y servicios de asesoría cubiertos por una declaración de trabajo o reserva;</li>
              <li>Agendar sesiones, gestionar la logística de proyectos y brindar soporte al cliente;</li>
              <li>Mejorar nuestras herramientas, metodologías y base de conocimiento utilizando insights agregados y anonimizados;</li>
              <li>Enviar actualizaciones operativas, avisos de políticas y, cuando esté permitido, contenido de liderazgo de pensamiento relevante para tu compromiso;</li>
              <li>Cumplir con obligaciones legales, solicitudes regulatorias y requisitos internos de gestión de riesgos.</li>
            </ul>
          </section>

          <section id="legal-bases">
            <Heading as="h3" id="legal-bases">
              3. Bases legales para el tratamiento (lawful basis)
            </Heading>
            <p>
              Doulab procesa datos personales con base en los siguientes fundamentos: (a) ejecución de un contrato o para tomar pasos a tu solicitud
              antes de celebrar un contrato; (b) intereses legítimos en la entrega y mejora de los servicios mientras se protege la información del
              cliente; (c) cumplimiento de obligaciones legales, incluyendo el resguardo de registros financieros; y (d) consentimiento para
              comunicaciones opcionales específicas o actividades de investigación cuando se requiera.
            </p>
          </section>

          <section id="data-sharing">
            <Heading as="h3" id="data-sharing">
              4. Compartición y transferencias de datos
            </Heading>
            <p>
              Podemos compartir información personal con socios cuidadosamente seleccionados que nos ayudan a entregar los servicios, tales como Cloudflare
              Pages (hosting y analítica), GitHub (control de código fuente y CI), enlaces de citas de Google Calendar (agendamiento) y Stripe
              (pagos). Cada socio está obligado por compromisos de confidencialidad y acuerdos de tratamiento de datos. No vendemos ni alquilamos
              información personal. Cuando los datos se transfieren fuera de Suiza o del Espacio Económico Europeo, nos apoyamos en decisiones de
              adecuación, cláusulas contractuales estándar o salvaguardas comparables.
            </p>
          </section>

          <section id="retention">
            <Heading as="h3" id="retention">
              5. Retención de datos
            </Heading>
            <p>
              Conservamos los registros de cliente, diagnósticos y resultados de los compromisos durante la vigencia de un compromiso activo más hasta cinco
              (5) años, salvo que un período mayor sea legalmente requerido o se acuerde expresamente por escrito. Las preferencias de marketing se conservan
              hasta que decidas darte de baja. Podemos anonimizar la información para investigación o benchmarking; los datos anonimizados ya no son datos personales.
            </p>
          </section>

          <section id="security">
            <Heading as="h3" id="security">
              6. Medidas de seguridad
            </Heading>
            <p>
              Doulab mantiene salvaguardas administrativas, técnicas y físicas para proteger la información personal. El acceso está limitado al
              personal y subcontratistas que lo requieren para desempeñar sus funciones, sujetos a obligaciones de confidencialidad. Revisamos
              las herramientas, controles de acceso y procedimientos de respuesta a incidentes al menos anualmente.
            </p>
          </section>

          <section id="your-rights">
            <Heading as="h3" id="your-rights">
              7. Tus derechos
            </Heading>
            <p>
              Dependiendo de tu jurisdicción, puedes tener el derecho de acceder, corregir, eliminar o restringir el tratamiento de tus datos
              personales, así como el derecho a la portabilidad de datos y a oponerte a ciertos tratamientos. Puedes ejercer estos derechos
              enviando un correo a <a href="mailto:legal@doulab.net">legal@doulab.net</a>. Podemos necesitar verificar tu identidad antes de responder. También
              tienes derecho a presentar una reclamación ante tu autoridad de protección de datos.
            </p>
          </section>

          <section id="children">
            <Heading as="h3" id="children">
              8. Privacidad de menores
            </Heading>
            <p>
              Nuestros servicios están diseñados para profesionales y organizaciones. No recopilamos a sabiendas información de personas
              menores de dieciséis (16) años. Si crees que un menor ha proporcionado datos personales, contáctanos para que podamos eliminarlos.
            </p>
          </section>

          <section id="updates">
            <Heading as="h3" id="updates">
              9. Cambios a esta Política de Privacidad
            </Heading>
            <p>
              Los cambios materiales a esta Política de Privacidad se publicarán en esta página con una fecha de revisión actualizada. Cuando la ley lo requiera,
              obtendremos tu consentimiento para los cambios significativos.
            </p>
          </section>
        </section>

        <section id="terms" className={'pages-legal__section'}>
          <Heading as="h2" id="terms">
            Términos y Condiciones
          </Heading>
          <p>
            Estos Términos y Condiciones (&quot;Términos&quot;) rigen el acceso a los diagnósticos, talleres, programas de investigación y
            servicios relacionados de Doulab (colectivamente, los &quot;Servicios&quot;). Al acceder o utilizar los Servicios, aceptas estos Términos. Si
            estás aceptando en nombre de una organización, confirmas que tienes la autoridad para vincular a esa organización.
          </p>

          <section id="terms-agreement">
            <Heading as="h3" id="terms-agreement">
              1. Acuerdo
            </Heading>
            <p>
              Cada compromiso se rige por estos Términos, cualquier declaración de trabajo, propuesta de proyecto o confirmación de reserva emitida por
              Doulab, y cualquier anexo suplementario acordado por escrito. En caso de conflicto, el orden de prelación es: (a) declaraciones de
              trabajo firmadas; (b) anexos suplementarios; (c) estos Términos.
            </p>
          </section>

          <section id="terms-definitions">
            <Heading as="h3" id="terms-definitions">
              2. Definiciones
            </Heading>
            <ul>
              <li>
                <strong>Cliente</strong>: Cualquier organización o individuo que contrate a Doulab por los Servicios, incluyendo diagnósticos
                ClarityScan&reg;, programas IMM-P® o compromisos de asesoría.
              </li>
              <li>
                <strong>Entregables</strong>: Reportes, modelos, playbooks u otros productos generados para el Cliente en conexión con un
                compromiso.
              </li>
              <li>
                <strong>Reservas</strong>: Sesiones de autoservicio agendadas a través de Stripe Checkout o booking.doulab.net (que redirige
                a enlaces de citas de Google Calendar), más cualquier otra herramienta de agendamiento explícitamente proporcionada por Doulab.
              </li>
            </ul>
          </section>

          <section id="terms-scope">
            <Heading as="h3" id="terms-scope">
              3. Alcance de los Servicios
            </Heading>
            <p>
              Doulab diseña y entrega compromisos de estrategia, innovación, prospectiva y capacidad organizacional. Cada compromiso
              incluye el cronograma, formato y Entregables descritos en la declaración de trabajo o confirmación de reserva aplicable.
              Doulab puede adaptar formatos de entrega o personal para asegurar la continuidad. Los cambios materiales al alcance requieren acuerdo
              por escrito (el correo electrónico es suficiente).
            </p>
          </section>

          <section id="terms-payments">
            <Heading as="h3" id="terms-payments">
              4. Reservas y pagos
            </Heading>
            <ol>
              <li>
                <strong>Stripe Checkout</strong>: Los pagos por Servicios de tarifa fija son procesados por Stripe. Autorizas a Stripe a almacenar
                y procesar los detalles de pago conforme a las políticas de privacidad y seguridad de Stripe. Los cargos se procesan en la
                moneda mostrada en el checkout (USD por defecto). Los impuestos aplicables se muestran antes del pago.
              </li>
              <li>
                <strong>Compromisos facturados</strong>: Los programas a medida o retainers se facturan según la declaración de trabajo. Salvo que se acuerde
                lo contrario, las facturas vencen en diez (10) días calendario. Los saldos atrasados acumulan un interés simple de 1.5 por ciento mensual
                (o el máximo permitido por la ley). Doulab puede suspender el trabajo mientras las facturas permanezcan pendientes.
              </li>
              <li>
                <strong>Cancelaciones y reprogramaciones</strong>: Las reservas pueden reprogramarse una vez con al menos veinticuatro (24) horas
                de aviso. Los cambios adicionales se tratan como nuevas reservas. Los compromisos multisesión pueden reprogramarse con cinco (5)
                días hábiles de aviso; un aviso menor puede generar cargos que cubran la capacidad reservada y viáticos. Si Doulab debe cancelar,
                ofreceremos el siguiente espacio disponible o reembolsaremos los honorarios de la sesión afectada.
              </li>
            </ol>
          </section>

          <section id="terms-client-obligations">
            <Heading as="h3" id="terms-client-obligations">
              5. Responsabilidades del Cliente
            </Heading>
            <p>
              Los Clientes se comprometen a proporcionar acceso oportuno a las partes interesadas, información precisa y espacios seguros de colaboración (por ejemplo
              Notion, Miro, Teams o similares). El Cliente es responsable de asegurar que la participación en talleres o diagnósticos sea
              voluntaria y cumpla con las políticas internas aplicables.
            </p>
          </section>

          <section id="terms-ip">
            <Heading as="h3" id="terms-ip">
              6. Propiedad intelectual
            </Heading>
            <p>
              Salvo que se acuerde lo contrario, Doulab conserva la propiedad de las metodologías, frameworks, herramientas y propiedad intelectual
              preexistente utilizada en la entrega de los Servicios. Tras el pago completo, el Cliente recibe una licencia no exclusiva e intransferible
              para usar los Entregables para sus fines internos de negocio. El Cliente no puede revender ni redistribuir los Entregables sin
              permiso por escrito.
            </p>
          </section>

          <section id="terms-feedback">
            <Heading as="h3" id="terms-feedback">
              7. Retroalimentación
            </Heading>
            <p>
              La retroalimentación, sugerencias o ideas de mejora compartidas con Doulab pueden ser usadas para evolucionar nuestros Servicios sin obligación hacia el
              Cliente. Doulab no hará referencia pública a la retroalimentación de un Cliente sin permiso.
            </p>
          </section>

          <section id="terms-confidentiality">
            <Heading as="h3" id="terms-confidentiality">
              8. Confidencialidad
            </Heading>
            <p>
              Ambas partes se comprometen a proteger la información confidencial divulgada durante un compromiso y a utilizarla solo para entregar o
              recibir los Servicios. Las obligaciones de confidencialidad no aplican a información que sea pública, ya conocida sin
              restricción, desarrollada independientemente u obtenida legalmente de un tercero sin incumplimiento de deber.
            </p>
          </section>

          <section id="terms-warranties">
            <Heading as="h3" id="terms-warranties">
              9. Garantías y descargo
            </Heading>
            <p>
              Doulab entregará los Servicios con cuidado y habilidad profesional consistentes con los alcances acordados. Salvo que se indique expresamente,
              los Servicios se proporcionan &quot;tal cual&quot; sin garantías de ningún tipo. Doulab no garantiza resultados comerciales específicos
              ni que las suposiciones del Cliente sean validadas.
            </p>
          </section>

          <section id="terms-liability">
            <Heading as="h3" id="terms-liability">
              10. Limitación de responsabilidad
            </Heading>
            <p>
              En la máxima medida permitida por la ley, la responsabilidad agregada de Doulab derivada de los Servicios se limita a los honorarios
              pagados por el compromiso que dio origen al reclamo. Doulab no será responsable por daños indirectos, incidentales, consecuentes,
              especiales o punitivos. Estas limitaciones no aplican a la responsabilidad que no pueda excluirse bajo la ley aplicable.
            </p>
          </section>

          <section id="terms-acceptance">
            <Heading as="h3" id="terms-acceptance">
              11. Revisión y aceptación de Entregables
            </Heading>
            <p>
              Los Entregables se consideran aceptados si no se recibe retroalimentación por escrito en cinco (5) días hábiles desde la entrega. Los cambios
              solicitados dentro de ese plazo se atenderán en un plan de remediación mutuamente acordado. Las revisiones adicionales fuera del alcance
              pueden facturarse por separado.
            </p>
          </section>

          <section id="terms-law">
            <Heading as="h3" id="terms-law">
              12. Ley aplicable y resolución de disputas
            </Heading>
            <p>
              Estos Términos se rigen por las leyes de Suiza. Las disputas primero se escalarán a representantes designados para una resolución
              de buena fe. Si no se resuelven en treinta (30) días, las disputas se someterán a arbitraje administrado en
              Zúrich, Suiza, bajo las Reglas Suizas de Arbitraje Internacional, en inglés, salvo que las partes acuerden lo contrario.
              Nada impide que cualquiera de las partes busque medidas cautelares o de urgencia en tribunales competentes.
            </p>
          </section>

          <section id="terms-changes">
            <Heading as="h3" id="terms-changes">
              13. Cambios a estos Términos
            </Heading>
            <p>
              Doulab puede actualizar estos Términos de tiempo en tiempo. Los cambios materiales se publicarán en esta página con una fecha de revisión
              actualizada. El uso continuado de los Servicios después de que los cambios entren en vigor constituye la aceptación de los Términos actualizados.
            </p>
          </section>

          <section id="terms-contact">
            <Heading as="h3" id="terms-contact">
              14. Contacto
            </Heading>
            <p>
              Las preguntas sobre estos Términos pueden enviarse a <a href="mailto:legal@doulab.net">legal@doulab.net</a> o a través del formulario de contacto
              en <a href="https://doulab.net/contact">https://doulab.net/contact</a>.
            </p>
          </section>
        </section>

        <section id="contact" className={'pages-legal__section'}>
          <Heading as="h2" id="contact">
            Contacto
          </Heading>
          <p>
            Escribe a <a href="mailto:legal@doulab.net">legal@doulab.net</a> o a Doulab, Mettlenstrasse 45, 8193 Eglisau, Suiza
            para consultas de privacidad, solicitudes de acceso a datos o reclamaciones.
          </p>
        </section>
      </main>
    </Layout>
  );
}
