import styles from "./style.module.css";
import { allWorks } from "../../constants/work";
import WorksGrid from "../WorksGrid";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

const Works = ({ items = [] }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Selected Works</h2>
      <WorksGrid items={items} />
      <Link to="/work">
        <CustomButton text="See More" className="mt-10" />
      </Link>
    </div>
  );
};

export default Works;
