import styles from "./Hero.module.scss";
import heroImg from "../../assets/img/HeroBackground_white_fixed.png";

const NAV_HEIGHT = 72;

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top: y, behavior: "smooth" });
  window.history.replaceState(null, "", window.location.pathname);
};

const Hero = () => {
  return (
    <section
      id="inicio"
      className={styles.hero}
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Mirai Technologies</h1>
          <p>
            Software factory enfocada en construir productos digitales escalables
            para startups y empresas.
          </p>

          <div className={styles.actions}>
            <p onClick={() => scrollToId("contacto")} className={styles.primaryBtn}>
              Quiero hablar con ustedes
            </p>
            <p onClick={() => scrollToId("servicios")} className={styles.outlineBtn}>
              Ver qué hacemos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
