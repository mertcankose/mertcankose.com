import styles from "./style.module.css";
import { WorksGrid } from "../../components";
import { allWorks } from "../../constants/work";

const Work = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>All Work</h2>
      <WorksGrid items={allWorks} />
    </div>
  );
};

export default Work;
