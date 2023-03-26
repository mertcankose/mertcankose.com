import styles from "./style.module.css";

const CustomButton = ({ text, className }) => {
  return (
    <a
      href="mailto:me@mertcankose.com"
      className={[styles.contactOuter, className].join(" ")}
    >
      <div className={styles.contactInner}>{text}</div>
    </a>
  );
};

export default CustomButton;
