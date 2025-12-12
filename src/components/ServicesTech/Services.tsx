import styles from "./Services.module.scss";
const SERVICES = [
  {
    title: "Desarrollo Web a Medida",
    icon: "webIcon",
    text: "Construimos aplicaciones y sitios web rápidos, escalables y diseñados específicamente para las necesidades del negocio."
  },
  {
    title: "Aplicaciones Mobile",
    icon: "mobileIcon",
    text: "Creamos aplicaciones móviles nativas para iOS y Android usando React Native, compartiendo lógica y acelerando el desarrollo."
  },
  {
    title: "Desarrollo Backend / APIs",
    icon: "backendIcon",
    text: "Diseñamos y desarrollamos APIs robustas y seguras con .NET, C# y Java Spring Boot, listas para escalar."
  }
];

const Services = () => {
  return (
    <>
      <svg   className={styles.bottomCurve} viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path
      d="M0,20 C240,80 480,100 720,90 960,80 1200,40 1440,60 L1440,130 L0,120 Z"
      fill="#e6ebf1"
    />
  </svg>
    <section  style={{background:"#e6ebf1"}}  className={styles.services} id="servicios">
           
      
      <h2>Servicios</h2>
      <p className={styles.subtitle}>
        Soluciones digitales enfocadas en calidad, escalabilidad y velocidad de entrega.
      </p>

      <div className={styles.grid}>
        {SERVICES.map((s) => (
          <div className={styles.card} key={s.title}>
            
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>

    </section>
     <svg className={styles.bottomCurve}viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path
      d="M0,80 C240,20 480,0 720,10 960,20 1200,60 1440,40 L1440,0 L0,0 Z"
      fill="#e6ebf1"
    />
  </svg>
    </>
  );
};

export default Services;
