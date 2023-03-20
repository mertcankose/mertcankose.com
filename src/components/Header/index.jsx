import styles from "./style.module.css";
import Bar from "../Bar";

const Header = ({ className }) => {
  return (
    <header className={[styles.header, className].join(" ")}>
      <h1>mertcankose.</h1>
      <Bar />
      <button className={styles.menuButton}>Menu</button>

      <nav className={styles.nav}>
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
