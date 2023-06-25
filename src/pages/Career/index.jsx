import CareerLine from "../../components/CareerLine";
import { allCareers } from "../../constants/career";
import styles from "./style.module.css";

const Career = () => {
  return (
    <>
      <CareerLine items={allCareers} />
    </>
  );
};

export default Career;
