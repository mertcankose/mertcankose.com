import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import { menu } from "../../constants/menu";
import SocialBar from "../SocialBar";
import { useEffect, useState } from "react";

const Footer = ({ className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null; // veya bir yükleme göstergesi
  }

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
