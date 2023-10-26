import WorkBox from "../WorkBox";
import styles from "./style.module.css";

const changingImages = [0, 2, 9, 10, 12, 13, 14];

const WorksGrid = ({ items = [] }) => {
  const changingImage = (index) => {
    if (changingImages.includes(index)) {
      return true;
    }
    return false;
  };

  return (
    <div className={styles.works}>
      {items.map((work, index) => (
        <WorkBox item={work} key={index} className="" imageClassName={changingImage(index) && styles.workImage} extra={<></>} />
      ))}
    </div>
  );
};

export default WorksGrid;
