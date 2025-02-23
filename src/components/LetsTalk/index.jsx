import { successMessage } from "../../helpers/toast";
import CustomButton from "../CustomButton";
import styles from "./style.module.css";

const LetsTalk = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("mertcankose142@gmail.com");
    successMessage("Email copied to clipboard!");
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Let's Talk about Your Project.</h3>
      <p className={styles.description}>
        Something on your mind? Get in touch and let's chat!
      </p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton href="mailto:mertcankose142@gmail.com" text="Send me an email" />

        <CustomButton onClick={() => copyEmail()} text="Copy Email" />
      </div>
    </section>
  );
};

export default LetsTalk;
