import SocialBar from "../SocialBar";
import styles from "./style.module.css";

const Main = ({ className }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <h1 className={styles.heading}>
        Hi, I’m Mertcan Köse.
        <br /> I code mobile and web applications.
      </h1>
      <p className={styles.description}>
        I’m a Software Engineer who developing mobile and web applications and
        enjoys this process.
      </p>
      <SocialBar />
      <a href="mailto:me@mertcankose.com" className={styles.contactOuter}>
        <div className={styles.contactInner}>Contact Me</div>
      </a>
    </section>
  );
};

export default Main;