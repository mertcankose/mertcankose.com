import CustomButton from "../../components/CustomButton";
import styles from "./style.module.css";

const Support = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Support</h2>
      <p className={styles.description}>
        I'm here to assist you. Whether you have questions, feedback, or just
        want to say hello, feel free to drop me an email. I'm ready to help you
        on your journey!
      </p>
      <CustomButton
        href="mailto:contact@mertcankose.com"
        text="Contact Me"
        className="mt-10 mx-auto"
      />
    </div>
  );
};

export default Support;
