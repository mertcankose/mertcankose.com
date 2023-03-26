import CustomButton from "../../components/CustomButton";
import styles from "./style.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.heading}>Hi, hello and welcome stranger</h2>
      <p className={styles.description}>
        I'm Mertcan Köse, a full-stack software engineer working remotely around
        the world. I create websites, mobile applications, and everything
        in-between. I'm passionate about building delightful experiences with
        the combination of business and marketing to make customers and users
        satisfied when they're using products and services online.
      </p>
      <CustomButton text="Contact Me" className="mt-10" />
    </div>
  );
};

export default About;
