import styles from "./style.module.css";

const ContactButton = () => {
  return (
    <a href="mailto:me@mertcankose.com" className={styles.contactOuter}>
      <div className={styles.contactInner}>Contact Me</div>
    </a>
  );
};

export default ContactButton;
