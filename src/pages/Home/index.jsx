import { Fragment } from "react";
import styles from "./style.module.css";
import { LetsTalk, Main, Skills, Works } from "../../components";
import { selectedWorks } from "../../constants/work";

const Home = () => {
  return (
    <Fragment>
      <Main className={styles.mainSection} />
      <Works items={selectedWorks} />
      <Skills className={styles.skillsSection} />
      <LetsTalk />
    </Fragment>
  );
};

export default Home;
