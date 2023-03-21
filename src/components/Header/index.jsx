import { useState } from "react";
import styles from "./style.module.css";
import Bar from "../Bar";
import { Link } from "react-router-dom";

const Header = ({ className }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={[styles.header, className].join(" ")}>
      <Link to="/" className={styles.heading}>
        mertcankose.
      </Link>
      {/* <Bar /> */}
      {/* <button
        className={styles.menuButton}
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? "Close" : "Menu"}
      </button>

      <nav className={[styles.nav, openMenu && styles.openNav].join(" ")}>
        <span className={[styles.navItem, styles.about].join(" ")}>About</span>
        <span className={[styles.navItem, styles.work].join(" ")}>Work</span>
        <span className={[styles.navItem, styles.skills].join(" ")}>
          Skills
        </span>
        <span className={[styles.navItem, styles.contact].join(" ")}>
          Contact
        </span>
      </nav> */}
    </header>
  );
};
export default Header;
