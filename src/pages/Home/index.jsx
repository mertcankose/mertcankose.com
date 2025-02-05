import { Fragment } from "react";
import styles from "./style.module.css";
import { LetsTalk, Main, Skills, Works } from "../../components";
import { selectedWorks } from "../../constants/work";
import { allCareers } from "../../constants/career";
import CareerLine from "../../components/CareerLine";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Mertcan Köse | Mobile, Web and Blockchain Developer</title>
        <meta name="description" content="Mertcan Köse - Mobile, Web and Blockchain Developer" />
      </Helmet>

      <Main className={styles.mainSection} />
      <Works items={selectedWorks} className="" />
      <CareerLine items={allCareers} className="mt-24" />
      <Skills className={styles.skillsSection} />
   

      <LetsTalk />
    </Fragment>
  );
};

export default Home;
