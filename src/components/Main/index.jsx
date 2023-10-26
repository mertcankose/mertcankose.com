import AnimatedText from "../AnimatedText";
import CustomButton from "../CustomButton";
import SocialBar from "../SocialBar";
import styles from "./style.module.css";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { successMessage } from "../../helpers/toast";

const Main = ({ className }) => {
  const copyEmail = () => {
    navigator.clipboard.writeText("mertcankose97@outlook.com");
    successMessage("Email copied to clipboard!");
  };

  return (
    <section className={[styles.main, className].join(" ")}>
      <AnimatedText text="Hi, I’m Mertcan Köse." />
      <AnimatedText text="I code mobile and web applications." className="mt-2" />

      <p className={styles.description}>
        I’m a Software Engineer who developing mobile and web applications and enjoys this process.
      </p>
      <SocialBar />

      <CustomButton onClick={() => copyEmail()} text="Copy Email" className="mt-8" />
      <a href="#works" className="mt-10">
        <ArrowDown width="30" height="30" />
      </a>
    </section>
  );
};

export default Main;
