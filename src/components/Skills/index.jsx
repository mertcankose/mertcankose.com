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
          I specialize in developing custom mobile apps using{" "}
          <span className="text-gray-800 font-bold">React Native</span>,
          delivering high-performance solutions for both iOS and Android. My web
          development expertise focuses on{" "}
          <span className="text-gray-800 font-bold">React and WordPress</span>,
          creating responsive and engaging online experiences. In the{" "}
          <span className="text-gray-800 font-bold">blockchain </span>
          space, I build decentralized applications
          <span className="font-bold text-gray-800"> (dApps)</span> that
          leverage this innovative technology for secure and transparent
          solutions. My approach combines cutting-edge technical skills with a
          deep understanding of user needs and business goals. Whether you need
          a powerful mobile app, a dynamic web platform, or a revolutionary
          blockchain solution, I'm here to bring your vision to life.
        </p>
      </div>
      <div className={styles.skillsArea}>
        <h3 className={styles.skillsTitle}>Skills</h3>
        <div className={styles.skillsTags}>
          {skills.map((skill) => (
            <Tag tag={skill.text} key={skill.id} />
          ))}
        </div>
        <CustomButton
          type="external"
          href="/MertcanKose_Resume.pdf"
          text="View CV"
        />
      </div>
    </section>
  );
};

export default Skills;
