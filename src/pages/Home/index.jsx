import { Fragment } from "react";
import styles from "./style.module.css";
import { LetsTalk, Main, Skills, Works } from "../../components";
import { selectedWorks } from "../../constants/work";
import { allCareers } from "../../constants/career";
import CareerLine from "../../components/CareerLine";

const Home = () => {
  return (
    <Fragment>
      <Main className={styles.mainSection} />
      <Works items={selectedWorks} className="mb-12" />
      <CareerLine items={allCareers} className="mt-24" />

      <Skills className={styles.skillsSection} />
      <LetsTalk />
    </Fragment>
  );
};

export default Home;
