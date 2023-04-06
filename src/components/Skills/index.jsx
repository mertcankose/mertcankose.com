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
          Strategy, management, creative direction, & development are my
          specialities. I find that efficient work - flows, excellent
          communication skills and a dose of self-discipline are key - a strong
          work ethic has driven my success in a myriad of specialties.
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
