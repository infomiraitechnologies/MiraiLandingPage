import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/img/mirai_logo_hd.png";

const NavBar = () => {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
        setVisible(true);
      } else {
        setAtTop(false);
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Zona sensible arriba */}
      {!atTop && (
        <div
          className={styles.hoverZone}
          onMouseEnter={() => setVisible(true)}
        />
      )}

      <header
        className={`${styles.header} ${
          visible ? styles.show : styles.hide
        }`}
        onMouseLeave={() => {
          if (!atTop) setVisible(false);
        }}
      >
        <nav className={styles.nav}>
          <div className={styles.left}>
            <img src={logo} alt="Mirai Logo" className={styles.logo} />
          </div>

          <ul className={styles.links}>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#tecnologia">Tecnología</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li>
              <a href="#contacto" className={styles.contactBtn}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
