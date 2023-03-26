import AnimatedText from "../AnimatedText";
import CustomButton from "../CustomButton";
import SocialBar from "../SocialBar";
import styles from "./style.module.css";

const Main = ({ className }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <AnimatedText text="Hi, I’m Mertcan Köse." />
      <AnimatedText
        text="I code mobile and web applications."
        className="mt-2"
      />

      <p className={styles.description}>
        I’m a Software Engineer who developing mobile and web applications and
        enjoys this process.
      </p>
      <SocialBar />
      <CustomButton text="Contact Me" className="mt-10" />
    </section>
  );
};

export default Main;
