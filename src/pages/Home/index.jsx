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
        <title>Mertcan Köse | Mobile and Web Developer</title>
        <meta name="description" content="Mertcan Köse - Mobile and Web Developer crafting clean, user-friendly digital products." />
      </Helmet>

      <Main className={styles.mainSection} />
      <CareerLine items={allCareers} className="" />
      <Works items={selectedWorks} className="mt-24" />
      <Skills className={styles.skillsSection} />
   

      <LetsTalk />
    </Fragment>
  );
};

export default Home;
