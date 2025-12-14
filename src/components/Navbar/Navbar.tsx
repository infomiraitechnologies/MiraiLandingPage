import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/img/mirai_logo_hd.png";

const NAV_HEIGHT = 72;
const DESKTOP_MIN_WIDTH = 1024;

const NavBar = () => {
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDesktop = () =>
    window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches;

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);

    setMenuOpen(false); // 👈 cerrar menú al navegar
  };

  useEffect(() => {
    const onScroll = () => {
      if (!isDesktop()) {
        setHidden(false);
        return;
      }

      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;

      if (y < 80) setHidden(false);
      else setHidden(goingDown);

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 👇 si paso a desktop, cierro menú
  useEffect(() => {
    const onResize = () => {
      if (isDesktop()) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ""}`}>
      <nav className={styles.nav}>
        <img src={logo} alt="Mirai Technologies" className={styles.logo} />

        {/* Desktop links */}
        <ul className={styles.links}>
          <li><button onClick={() => scrollToId("inicio")}>Inicio</button></li>
          <li><button onClick={() => scrollToId("tecnologia")}>Tecnología</button></li>
          <li><button onClick={() => scrollToId("servicios")}>Servicios</button></li>
          <li>
            <button className={styles.contactBtn} onClick={() => scrollToId("contacto")}>
              Contacto
            </button>
          </li>
        </ul>

        {/* Mobile button */}
        <button
          className={styles.burger}
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        <button onClick={() => scrollToId("inicio")}>Inicio</button>
        <button onClick={() => scrollToId("tecnologia")}>Tecnología</button>
        <button onClick={() => scrollToId("servicios")}>Servicios</button>
        <button className={styles.mobileContact} onClick={() => scrollToId("contacto")}>
          Contacto
        </button>
      </div>

      {/* overlay */}
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default NavBar;
