import { useContext } from "react";
import styles from "./style.module.css";
import Bar from "../Bar";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { menu } from "../../constants/menu";
import OutsideAlerter from "../OutsideAlerter";
import StoreContext from "../../context/store";

const Header = ({ className }) => {
  const { openMenu, setOpenMenu } = useContext(StoreContext);

  return (
    <header className={[styles.header, className].join(" ")}>
      <Link to="/" className={styles.heading}>
        mertcankose.
      </Link>
      <Bar className={styles.bar} />

      <OutsideAlerter>
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
          {menu.map((item, index) => (
            <Link key={index} to={item.url} className={styles.navItem}>
              {item.name}
            </Link>
          ))}
        </nav>
      </OutsideAlerter>
    </header>
  );
};

export default Header;
