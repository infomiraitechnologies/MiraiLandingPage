import { useEffect, useState } from "react";
import styles from "./TechStack.module.scss";

import reactIcon from "../../assets/icons/react.svg";
import angularIcon from "../../assets/icons/angular.svg";
import nextIcon from "../../assets/icons/nextdotjs.svg";
import figmaIcon from "../../assets/icons/figma.svg";
import gitIcon from "../../assets/icons/git.svg";
import mysqlIcon from "../../assets/icons/sqlite.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";
import dotnetIcon from "../../assets/icons/dotnet.svg";
import jenkinsIcon from "../../assets/icons/jenkins.svg";
import htmlIcon from "../../assets/icons/html5.svg";

interface Tech {
  name: string;
  icon: string;
  description: string;
}

const TECHS: Tech[] = [
  {
    name: "React",
    icon: reactIcon,
    description:
      "Librería para construir interfaces web rápidas y modulares. Ideal para frontends dinámicos, escalables y mantenibles."
  },
  {
    name: "Angular",
    icon: angularIcon,
    description:
      "Framework front-end completo, ideal para aplicaciones grandes con buena estructura, componentes y tooling robusto."
  },
  {
    name: "Next.js",
    icon: nextIcon,
    description:
      "Framework sobre React con SSR/SSG, performance y buenas prácticas para SEO. Perfecto para productos web modernos."
  },
  {
    name: "React Native",
    icon: reactIcon,
    description:
      "Desarrollo de apps iOS/Android con experiencia nativa, reutilizando lógica y componentes para acelerar entregas."
  },
  {
    name: "JavaScript / TypeScript",
    icon: typescriptIcon,
    description:
      "JavaScript es la base del frontend. TypeScript suma tipado y tooling para proyectos más seguros, escalables y fáciles de mantener."
  },
  {
    name: "HTML & CSS",
    icon: htmlIcon,
    description:
      "Fundamentos de la web: maquetación, estilos y detalles visuales. Clave para UI consistente, accesible y responsive."
  },
  {
    name: ".NET + C#",
    icon: dotnetIcon,
    description:
      "Stack backend sólido para APIs seguras y de alto rendimiento, con arquitectura mantenible y preparada para escalar."
  },
  {
    name: "SQL",
    icon: mysqlIcon,
    description:
      "Modelado y consultas en bases de datos relacionales (PostgreSQL, MySQL, SQL Server, etc.) según la necesidad del proyecto."
  },
  {
    name: "Jenkins",
    icon: jenkinsIcon,
    description:
      "Automatización de pipelines para integración y despliegue continuo (CI/CD), mejorando calidad y velocidad de entrega."
  },
  {
    name: "Git",
    icon: gitIcon,
    description:
      "Control de versiones para trabajo en equipo, revisiones, historial y flujos de desarrollo seguros."
  },
  {
    name: "Figma",
    icon: figmaIcon,
    description:
      "Diseño colaborativo para wireframes, prototipos y handoff. Ayuda a alinear producto, UI y desarrollo."
  }
];


const TechStack = () => {
  const [activeTech, setActiveTech] = useState<Tech | null>(null);
useEffect(() => {
  if (!activeTech) return;

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") setActiveTech(null);
  };

  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, [activeTech]);
  return (
    <section className={styles.techSection} id="tecnologia">
      <div className={styles.container}>
        <h2>Tecnologías que utilizamos</h2>
        <p className={styles.subtitle}>
          Trabajamos con un stack moderno y probado para construir productos
          escalables, mantenibles y fáciles de evolucionar.
        </p>

        <div className={styles.grid}>
          {TECHS.map((tech) => (
            <button
              key={tech.name}
              type="button"
              className={styles.techItem}
              onClick={() => setActiveTech(tech)}
            >
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </button>
          ))}
        </div>
      </div>

      {activeTech && (
  <div
    className={styles.popupOverlay}
    onClick={() => setActiveTech(null)}
    onKeyDown={(e) => {
      if (e.key === "Escape") setActiveTech(null);
    }}
    role="presentation"
  >
    <div
      className={styles.popup}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle de ${activeTech.name}`}
      tabIndex={-1}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className={styles.closeBtn}
        onClick={() => setActiveTech(null)}
        aria-label="Cerrar"
      >
        ✕
      </button>

      <h3>{activeTech.name}</h3>
      <p>{activeTech.description}</p>
    </div>
  </div>
)}
    </section>
  );
};

export default TechStack;
