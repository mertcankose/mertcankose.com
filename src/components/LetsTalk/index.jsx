import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import styles from "./style.module.css";

const LetsTalk = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Let's Talk about Your Project.</h3>
      <p className={styles.description}>
        Something on your mind? Get in touch and let's chat!
      </p>
      <Link to="/contact">
        <CustomButton text="Send me an email" className="mt-6" />
      </Link>
    </section>
  );
};

export default LetsTalk;
