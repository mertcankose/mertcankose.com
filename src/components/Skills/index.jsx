import styles from "./style.module.css";
import CustomButton from "../CustomButton";
import Tag from "../Tag";
import { skills } from "../../constants/skills";

const Skills = ({ className }) => {
  return (
    <section className={[styles.skills, className].join(" ")}>
      <div className={styles.textArea}>
        <h2 className={styles.thingsTitle}>Things I do</h2>
        <p className={styles.thingsText}>
          I develop custom mobile and web applications tailored to your needs. I
          specialize in React Native app development, as well as web development
          using React, and Vue. Also Wordpress. I also create decentralized
          applications (dApps) using blockchain technology. Let's bring your
          vision to life!
        </p>
      </div>
      <div className={styles.skillsArea}>
        <h4 className={styles.skillsTitle}>Skills</h4>
        <div className={styles.skillsTags}>
          {skills.map((skill) => (
            <Tag tag={skill.text} key={skill.id} />
          ))}
        </div>
        <CustomButton
          type="external"
          href="/MertcanKose-Resume.pdf"
          text="Download CV"
          className={styles.downloadButton}
        />
      </div>
    </section>
  );
};

export default Skills;
