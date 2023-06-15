import CareerLine from "../../components/CareerLine";
import { allCareers } from "../../constants/career";
import styles from "./style.module.css";

const Career = () => {
  return (
    <>
      <CareerLine items={allCareers} />
      <a href="/s.pdf" target="_blank">
        .
      </a>
      <a href="/a.pdf" target="_blank">
        _
      </a>
    </>
  );
};

export default Career;
