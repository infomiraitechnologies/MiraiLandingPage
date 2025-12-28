import styles from "./Footer.module.scss";
import imagen32px from "../../assets/img/favicon-32x32.png";

const NAV_HEIGHT = 72;

export default function Footer() {
  const year = new Date().getFullYear();


  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
};

  return (
    <>
      <svg
    className={styles.bottomCurve}
    viewBox="0 0 1440 120"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path
  d="M0,20 C240,80 480,100 720,90 960,80 1200,40 1440,60 L1440,130 L0,120 Z"
        fill="#0a2540"
    />
  </svg>
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <img className={styles.logoCurve} src={imagen32px} alt="Logo Mirai Technologies" />
            <div>
              <h3 className={styles.name}>Mirai Technologies</h3>
              <p className={styles.tagline}>
                Desarrollo web & mobile. APIs escalables. Entrega rápida y calidad.
              </p>
            </div>
          </div>
        </div>

          {/* Links */}
          <div className={styles.col}>
            <h4>Secciones</h4>
            <ul>
              <li><div><p style={{width:20}} onClick={() => scrollToId("tecnologia")}>Tecnología</p></div></li>
              <li><div><p style={{width:20}} onClick={() => scrollToId("servicios")}>Servicios</p></div></li>
              <li><div><p style={{width:20}} onClick={() => scrollToId("contacto")}>Contacto</p></div></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="mailto:infomiraitechnologies@gmail.com">
                  infomiraitechnologies@gmail.com
                </a>
              </li>
              <li>
                <a target="_blank" href="https://wa.me/5491154709065?text=Hola%2C%20buen%20día.%20Estoy%20interesado%2Fa%20en%20sus%20servicios%20de%20desarrollo.%20¿Podrían%20brindarme%20más%20información%3F%20Gracias.">
                  +54 9 11 5470-9065
                </a>
              </li>
              <li>Buenos Aires, AR</li>
            </ul>
          </div>

        {/* Social */}
        <div className={styles.col}>
          <h4>Redes</h4>
          <div className={styles.social}>
            <a target="_blank" href="https://www.linkedin.com/in/mirai-technologies-4a23ab39b/" aria-label="LinkedIn">LinkedIn</a>
            <a target="_blank" href="https://www.instagram.com/miraitech.it?igsh=aTVpMGNxZjc3bWUx" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <span>© {year} Mirai Technologies. Todos los derechos reservados.</span>
          <div className={styles.bottomLinks}>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
