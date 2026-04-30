import { Helmet } from "react-helmet";
import CareerLine from "../../components/CareerLine";
import { allCareers } from "../../constants/career";

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Career | Mertcan Köse</title>
        <meta
          name="description"
          content="The career journey of Mertcan Köse — companies, roles, and projects across mobile and web."
        />
      </Helmet>
      <CareerLine items={allCareers} className="mt-20" />
    </>
  );
};

export default Career;
