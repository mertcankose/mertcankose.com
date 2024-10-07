import styles from "./style.module.css";
import { WorksGrid } from "../../components";
import { allWorks } from "../../constants/work";
import { Helmet } from "react-helmet";

const Work = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>Mertcan Köse | Mobile, Web and Blockchain Developer</title>
        <meta
          name="description"
          content="Mertcan Köse - Mobile, Web and Blockchain Developer"
        />
      </Helmet>
      <h2 className={styles.heading}>All Work</h2>
      <WorksGrid items={allWorks} />
    </div>
  );
};

export default Work;
