import CareerLine from "../../components/CareerLine";
import { allCareers } from "../../constants/career";
import styles from "./style.module.css";

const Career = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Career</h2>
      <CareerLine items={allCareers} />
    </div>
  );
};

export default Career;
