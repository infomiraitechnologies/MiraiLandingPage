import styles from './Hero.module.scss';
import heroImg from "../../assets/img/HeroBackground_white_fixed.png";


const Hero = () => {
  return (
   <section
  id="inicio"
  className={styles.hero}
  style={{ backgroundImage: `url(${heroImg})` }}
>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1>Mirai Technologies</h1>
        <p>
          Software factory enfocada en construir productos digitales
          escalables para startups y empresas.
        </p>
        <div className={styles.actions}>
          <a href="#contacto" className={styles.primaryBtn}>
            Quiero hablar con ustedes
          </a>
          <a href="#servicios" className={styles.outlineBtn}>
            Ver qué hacemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
