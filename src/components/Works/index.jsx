import WorkBox from "../WorkBox";
import styles from "./style.module.css";
import { selectedWorks } from "../../constants/work";
import CustomButton from "../CustomButton";
import { Link } from "react-router-dom";

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
      <Link to="/works">
        <CustomButton text="See More" className="mt-10" />
      </Link>
    </section>
  );
};

export default Works;
