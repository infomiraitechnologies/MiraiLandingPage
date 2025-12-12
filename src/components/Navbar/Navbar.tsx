import styles from "./Navbar.module.scss";
import logo from "../../assets/img/mirai_logo_hd.png";
const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <img src={logo} alt="Mirai Logo" className={styles.logo} />
        </div>

        <ul className={styles.links}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#tecnologia">Tecnología</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#contacto" className={styles.contactBtn}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
