import { useState } from "react";
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
      "Librería para construir interfaces web rápidas y modulares. La usamos para frontends dinámicos y escalables."
  },
  {
    name: "Angular",
    icon: angularIcon,
    description:
      "Framework front-end muy completo, ideal para aplicaciones empresariales con alto nivel de estructura."
  },
  {
    name: "Next.js",
    icon:   nextIcon,
    description:
      "Framework sobre React que permite SSR, SSG y aplicaciones muy rápidas, optimizadas para SEO."
  },
  {
    name: "React Native",
    icon: reactIcon,
    description:
      "Tecnología para crear aplicaciones móviles nativas usando React, compartiendo lógica entre web y mobile."
  },
  {
    name: "JavaScript / TypeScript",
    icon: typescriptIcon,
    description:
      "JavaScript es el lenguaje del navegador. TypeScript agrega tipado estático para proyectos más robustos y mantenibles."
  },
  {
    name: "HTML & CSS",
    icon: htmlIcon,
    description:
      "La base de cualquier interfaz web. Nos permite maquetar, estilizar y cuidar el detalle visual de cada producto."
  },
  {
    name: ".NET + C#",
    icon: dotnetIcon,
    description:
      "Stack backend maduro para construir APIs seguras, mantenibles y de alto rendimiento en entornos Microsoft."
  },
  {
    name: "SQL",
    icon: mysqlIcon,
    description:
      "Diseñamos y consultamos bases de datos relacionales (SQL Server, MySQL, PostgreSQL, etc.) según la necesidad del proyecto."
  },
  {
    name: "Jenkins",
    icon: jenkinsIcon,
    description:
      "Servidor de automatización para integrar y desplegar cambios de forma continua."
  },
  {
    name: "Git",
    icon: gitIcon,
    description:
      "Control de versiones para trabajar en equipo, mantener historial y asegurar calidad del código."
  },
  {
    name: "Figma",
    icon: figmaIcon,
    description:
      "Herramienta de diseño colaborativo para prototipos, wireframes y sistemas de diseño."
  }
];

const TechStack = () => {
  const [activeTech, setActiveTech] = useState<Tech | null>(null);

  return (
    <section  className={styles.techSection} id="tecnologia">
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

      {activeTech && (
        <div
          className={styles.popupOverlay}
          onClick={() => setActiveTech(null)}
        >
          <div
            className={styles.popup}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeTech.name}</h3>
            <p>{activeTech.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechStack;
