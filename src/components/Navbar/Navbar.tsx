import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/img/mirai_logo_hd.png";

const NAV_HEIGHT = 72;
const DESKTOP_MIN_WIDTH = 1024;
const MOUSE_TOP_ZONE = 80;

const NavBar = () => {
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  const isDesktop = () =>
    window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`).matches;

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY -
      NAV_HEIGHT;

    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
  };

  // 🔽 Scroll logic
  useEffect(() => {
    const onScroll = () => {
      if (!isDesktop()) {
        setHidden(false);
        return;
      }

      const y = window.scrollY;

      if (y <= 10) {
        setHidden(false);
        lastScrollY.current = y;
        return;
      }

      const goingDown = y > lastScrollY.current;
      setHidden(goingDown);
      lastScrollY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🖱 Mouse logic (show + hide)
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDesktop()) return;
      if (window.scrollY <= 10) return;

      if (e.clientY <= MOUSE_TOP_ZONE) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ""}`}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <img src={logo} alt="Mirai Technologies" className={styles.logo} />
        </div>

        <ul className={styles.links}>
          <li>
            <button onClick={() => scrollToId("inicio")}>Inicio</button>
          </li>
          <li>
            <button onClick={() => scrollToId("tecnologia")}>
              Tecnología
            </button>
          </li>
          <li>
            <button onClick={() => scrollToId("servicios")}>
              Servicios
            </button>
          </li>
          <li>
            <button
              className={styles.contactBtn}
              onClick={() => scrollToId("contacto")}
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
