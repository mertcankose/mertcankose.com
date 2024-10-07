import { Helmet } from "react-helmet";
import CareerLine from "../../components/CareerLine";
import { allCareers } from "../../constants/career";
import styles from "./style.module.css";

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Mertcan Köse | Mobile, Web and Blockchain Developer</title>
        <meta
          name="description"
          content="Mertcan Köse - Mobile, Web and Blockchain Developer"
        />
      </Helmet>
      <CareerLine items={allCareers} className="mt-20" />
    </>
  );
};

export default Career;
