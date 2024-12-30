import styles from "./style.module.css";
import CustomButton from "../CustomButton";
import Tag from "../Tag";
import { skills } from "../../constants/skills";
import { analytics } from "../../firebase";
import { logEvent } from "firebase/analytics";

const Skills = ({ className }) => {
  const handleCVClick = () => {
    console.log("cv clicked");

    logEvent(analytics, "cv_button_click", {
      action: "view_cv",
      document_type: "pdf",
      document_name: "MertcanKose_Resume.pdf",
      location: window.location.pathname,
    });
  };

  return (
    <section className={[styles.skills, className].join(" ")}>
      <div className={styles.skillsArea}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <div className={styles.skillsTags}>
          {skills.map((skill) => (
            <Tag tag={skill.text} key={skill.id} active={skill.active} />
          ))}
        </div>
        <CustomButton onClick={handleCVClick} type="external" href="/MertcanKose_Resume.pdf" text="View CV" />
      </div>
    </section>
  );
};

export default Skills;
