import styles from "./style.module.css";
import WorksGrid from "../WorksGrid";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";

const Works = ({ items = [], className }) => {
  return (
    <div className={[styles.container, className].join(" ")} id="works">
      <h2 className={styles.heading}>Selected Works</h2>
      <WorksGrid items={items} />
      <Link to="/work">
        <CustomButton text="See More" className="mt-10" />
      </Link>
    </div>
  );
};

export default Works;
