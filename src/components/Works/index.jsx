import WorkBox from "../WorkBox";
import styles from "./style.module.css";
import { selectedWorks } from "../../constants/work";

const Works = () => {
  const changingImage = (index) => {
    if (index === 1) {
      return true;
    }
    return false;
  };

  return (
    <section className={styles.worksContainer}>
      <h3 className={styles.heading}>Selected Work</h3>
      <div className={styles.works}>
        {selectedWorks.map((work, index) => (
          <WorkBox
            item={work}
            key={index}
            className=""
            imageClassName={changingImage(index) && styles.workImage}
            extra={<></>}
          />
        ))}
      </div>
      {/* <button>See More</button> */}
    </section>
  );
};

export default Works;
