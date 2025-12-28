import { useEffect, useState, type FormEvent } from "react";
import styles from "./Contact.module.scss";

const TO = "infomiraitechnologies@gmail.com";

export default function Contact() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const PRIVACY_TEXT = `
Política de Privacidad – Mirai Technologies

En Mirai Technologies valoramos y protegemos la privacidad de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos los datos personales que nos proporcionás al interactuar con nuestro sitio web.

1. Responsable del tratamiento de datos
Mirai Technologies
Correo electrónico: infomiraitechnologies@gmail.com
Ubicación: Buenos Aires, Argentina

2. Datos personales que recopilamos
Podemos recopilar los siguientes datos cuando completás formularios o nos contactás:
- Nombre y apellido
- Correo electrónico
- Información relacionada con tu proyecto o consulta
- Cualquier otro dato que decidas proporcionar voluntariamente

3. Finalidad del uso de los datos
Los datos personales recopilados se utilizan únicamente para:
- Responder consultas o solicitudes de contacto
- Brindar información sobre nuestros servicios
- Elaborar propuestas comerciales
- Mejorar la comunicación con potenciales clientes

4. Conservación de los datos
Los datos serán conservados únicamente durante el tiempo necesario para cumplir con la finalidad para la cual fueron recopilados o mientras exista una relación comercial o de contacto activa.

5. Confidencialidad y seguridad
Implementamos medidas técnicas y organizativas razonables para proteger tus datos personales contra accesos no autorizados, pérdida o uso indebido.

6. Cesión de datos a terceros
Mirai Technologies no vende, alquila ni cede datos personales a terceros, salvo obligación legal o requerimiento de autoridad competente.

7. Derechos del titular de los datos
De acuerdo con la Ley 25.326 de Protección de Datos Personales, tenés derecho a:
- Acceder a tus datos
- Rectificarlos o actualizarlos
- Solicitar su eliminación
Podés ejercer estos derechos enviando un correo a: infomiraitechnologies@gmail.com

8. Aceptación de la política
Al enviar tus datos a través de nuestros formularios, aceptás expresamente esta Política de Privacidad.

9. Modificaciones
Mirai Technologies se reserva el derecho de modificar esta política para adaptarla a cambios legales o mejoras del servicio. La versión vigente estará siempre disponible en este sitio.
`.trim();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const website = (form.elements.namedItem("website") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const subject = `Nuevo contacto Mirai - ${name || "Sin nombre"}`;

    const body = [
      `Nombre: ${name}`,
      `Empresa: ${company}`,
      `Web: ${website}`,
      `Email: ${email}`,
      ``,
      `Mensaje:`,
      message,
    ].join("\n");

    const mailto = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  // lock scroll cuando el modal está abierto (sin salto)
  useEffect(() => {
    if (!privacyOpen) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [privacyOpen]);

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.kicker}>Contacto</p>
          <h2 className={styles.title}>
            ¿Listo para transformar tu <span>negocio</span>?
          </h2>
          <p className={styles.desc}>
            Contanos qué necesitás y te respondemos con una propuesta clara.
          </p>

          <div className={styles.bullets}>
            <div className={styles.bullet}>Respuesta en menos de 24hs</div>
            <div className={styles.bullet}>Estimación y roadmap</div>
          </div>
        </div>

        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <input name="name" placeholder="Nombre y Apellido" required />
              <input name="company" placeholder="Empresa" />
            </div>

            <input name="email" placeholder="Correo electrónico" type="email" required />

            <textarea
              name="message"
              placeholder="Contanos sobre tu proyecto (objetivo, tiempos, presupuesto)."
              required
            />

            <label className={styles.check}>
              <input name="privacy" type="checkbox" required />
              <p
              className={styles.privacyLink}
              style={{color:"rgb(11, 188, 214)"}}
                onClick={() => setPrivacyOpen(true)}
              >
                Acepto la política de privacidad.
              </p>
            </label>

            <label className={styles.check}>
              <input name="newsletter" type="checkbox" />
              <span>Acepto recibir newsletters.</span>
            </label>

            <button type="submit">Hablemos de tu proyecto</button>
          </form>
        </div>
      </div>

      {privacyOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Política de privacidad">
            <div className={styles.modalHeader}>
              <div>
                <p className={styles.modalKicker}>Legal</p>
                <h3 className={styles.modalTitle}>Política de privacidad</h3>
              </div>

              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setPrivacyOpen(false)}
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              <p className={styles.policyText}>{PRIVACY_TEXT}</p>
            </div>

            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.primaryBtn}
                onClick={() => setPrivacyOpen(false)}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
