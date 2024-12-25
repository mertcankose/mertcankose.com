import styles from "./style.module.css";

const Tag = ({ tag, active, className }) => {
  const skills = tag.split("|").map((skill) => skill.trim());

  return (
    <div className={[styles.tag, className].join(" ")}>
      <div className={styles.tagContent}>
        {skills.map((skill, index) => (
          <>
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
            {index < skills.length - 1 && <span className={styles.separator}>•</span>}
          </>
        ))}
      </div>
      {active && (
        <div className={styles.activeIndicator}>
          <button type="button" className={styles.fireEmoji} aria-label="Used in the last week">
            🔥
            <div className={styles.tooltip}>Used in the last week</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Tag;
