import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { menu } from "../../constants/menu";
import SocialBar from "../SocialBar";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        {menu.map((menu) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.navItemActive : styles.navItem
            }
            to={menu.url}
          >
            {menu.name}
          </NavLink>
        ))}
      </nav>
      <SocialBar />
    </footer>
  );
};

export default Footer;
