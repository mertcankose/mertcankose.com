import { useState } from "react";
import styles from "./style.module.css";
import Bar from "../Bar";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../assets/icons/chevron-down.svg";
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
              <ArrowDown width="22" height="22" />
            </div>
          )}
        </button>
      </div>

      <nav
        className={[styles.nav, "absolute", openMenu && styles.openNav].join(
          " "
        )}
      >
        <span className={[styles.navItem, styles.about].join(" ")}>About</span>
        <span className={[styles.navItem, styles.work].join(" ")}>Work</span>
        <span className={[styles.navItem, styles.skills].join(" ")}>
          Skills
        </span>
        <span className={[styles.navItem, styles.contact].join(" ")}>
          Contact
        </span>
      </nav>
    </header>
  );
};
export default Header;
