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
- Nombre y apellido
- Correo electrónico
- Información relacionada con tu proyecto o consulta

3. Finalidad del uso de los datos
Responder consultas, elaborar propuestas y mejorar la comunicación.

4. Derechos
Ley 25.326 – Podés solicitar acceso, rectificación o eliminación.

9. Modificaciones
La versión vigente estará siempre disponible en este sitio.
`.trim();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const subject = `Nuevo contacto Mirai - ${name || "Sin nombre"}`;
    const body = [
      `Nombre: ${name}`,
      `Empresa: ${company}`,
      ``,
      `Mensaje:`,
      message,
    ].join("\n");

    const mailto = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  const handleWhatsApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.closest("form") as HTMLFormElement | null;
    if (!form) return;

    // HTML5 validation
    if (!form.reportValidity()) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const text =
      `Hola! Quiero contactarlos \n` +
      `Nombre: ${name}\n` +
      (company ? `Empresa: ${company}\n` : "") +
      `Mensaje: ${message}`;

    const url = `https://wa.me/5491154709065?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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

            <textarea
              name="message"
              placeholder="Contanos sobre tu proyecto (objetivo, tiempos, presupuesto aprox)."
              required
            />

            <label className={styles.check}>
              <input name="privacy" type="checkbox" required />
              <p
                className={styles.privacyLink}
                onClick={() => setPrivacyOpen(true)}
              >
                Acepto la política de privacidad.
              </p>
            </label>

            <label className={styles.check}>
              <input name="newsletter" type="checkbox" />
              <span>Acepto recibir newsletters.</span>
            </label>

          <div style={{display:"flex",flexDirection:"row",gap:"10px"}}>
              <button
                type="button"
                className={styles.whatsBtn}
                onClick={handleWhatsApp}
              >
                Contactanos vía WhatsApp
              </button>
              <button type="submit">Contactanos vía mail</button>
          </div>
          </form>
        </div>
      </div>

      {privacyOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal} role="dialog" aria-modal="true">
            <div className={styles.modalHeader}>
              <div>
                <p className={styles.modalKicker}>Legal</p>
                <h3 className={styles.modalTitle}>Política de privacidad</h3>
              </div>

              <button
                type="button"
                className={styles.closeBtn}
                onClick={() => setPrivacyOpen(false)}
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
