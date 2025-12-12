import type { FormEvent } from "react";
import styles from "./Contact.module.scss";

const TO = "infomiraitechnologies@gmail.com";

export default function Contact() {
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

    // abre el cliente de correo del usuario con todo precargado
    window.location.href = mailto;

    // opcional: reset
    // form.reset();
  }

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.kicker}>Contacto</p>
          <h2 className={styles.title}>
            ¿Listo para transformar tu <span>negocio</span>?
          </h2>
          <p className={styles.desc}>
            Contanos qué necesitás y te respondemos con una propuesta clara. Sin vueltas, sin humo.
          </p>
          <div className={styles.bullets}>
            <div className={styles.bullet}>Respuesta en menos de 24hs</div>
            <div className={styles.bullet}>Estimación y roadmap</div>
          </div>
        </div>

        <div className={styles.right}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.row}>
              <input name="name" placeholder="Nombre y Apellido" required />
              <input name="company" placeholder="Empresa" />
            </div>

            <input name="website" placeholder="Sitio web de la empresa (opcional)" />
            <input name="email" placeholder="Correo electrónico" type="email" required />
            <textarea
              name="message"
              placeholder="Contanos sobre tu proyecto (objetivo, tiempos, presupuesto aprox)."
              required
            />

            <label className={styles.check}>
              <input name="privacy" type="checkbox" required />
              <span>
                Acepto la <a href="#">política de privacidad</a>.
              </span>
            </label>

            <label className={styles.check}>
              <input name="newsletter" type="checkbox" />
              <span>Acepto recibir newsletters.</span>
            </label>

            <button type="submit">Hablemos de tu proyecto</button>
          </form>
        </div>
      </div>
    </section>
  );
}
