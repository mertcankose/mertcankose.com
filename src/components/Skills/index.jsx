import styles from "./style.module.css";
import CustomButton from "../CustomButton";
import Tag from "../Tag";
import { skills } from "../../constants/skills";

const Skills = ({ className }) => {
  return (
    <section className={[styles.skills, className].join(" ")}>
      <div className={styles.skillsArea}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <div className={styles.skillsTags}>
          {skills.map((skill) => (
            <Tag tag={skill.text} key={skill.id} active={skill.active} />
          ))}
        </div>
        <CustomButton type="external" href="/MertcanKose_Resume.pdf" text="View CV" />
      </div>
    </section>
  );
};

export default Skills;
