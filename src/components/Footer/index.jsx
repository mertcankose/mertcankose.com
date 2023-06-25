import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { menu } from "../../constants/menu";
import SocialBar from "../SocialBar";

const Footer = ({ className }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <nav className={styles.nav}>
        {menu.map((menu) => (
          <NavLink
            key={menu.name}
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
