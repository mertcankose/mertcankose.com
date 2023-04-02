import CustomButton from "../CustomButton";
import styles from "./style.module.css";
import { toast } from "react-toastify";

const LetsTalk = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Let's Talk about Your Project.</h3>
      <p className={styles.description}>
        Something on your mind? Get in touch and let's chat!
      </p>
      <div className="flex items-center gap-3 mt-6">
        <CustomButton text="Send me an email" />

        <CustomButton
          onClick={() => {
            toast.success("Email copied to clipboard!");
          }}
          text="Copy Email"
        />
      </div>
    </section>
  );
};

export default LetsTalk;
