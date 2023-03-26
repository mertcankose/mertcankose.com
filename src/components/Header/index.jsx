import { useState } from "react";
import styles from "./style.module.css";
import Bar from "../Bar";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const Header = ({ className }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={[styles.header, className].join(" ")}>
      <Link to="/" className={styles.heading}>
        mertcankose.
      </Link>
      <Bar className={styles.bar} />
      <div className={[styles.menuButtonWrapper, "relative"].join(" ")}>
        <button
          className={[styles.menuButton, "relative"].join(" ")}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <div className={styles.closeContent}>
              <span className="text-base">Close</span>
              <Close width="22" height="22" />
            </div>
          ) : (
            <div className={styles.menuContent}>
              <span className="text-base">Menu</span>
              <ChevronDown width="22" height="22" />
            </div>
          )}
        </button>
      </div>

      <nav
        className={[styles.nav, "absolute", openMenu && styles.openNav].join(
          " "
        )}
      >
        <Link to="/about" className={[styles.navItem, styles.about].join(" ")}>
          About
        </Link>
        <Link className={[styles.navItem, styles.work].join(" ")}>Work</Link>
        <Link className={[styles.navItem, styles.skills].join(" ")}>
          Skills
        </Link>
        <Link className={[styles.navItem, styles.contact].join(" ")}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
