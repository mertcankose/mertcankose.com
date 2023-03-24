import styles from "./style.module.css";

const Tag = ({ tag }) => {
  return (
    <div className={styles.tag}>
      <p>{tag}</p>
    </div>
  );
};

export default Tag;
