import styles from "./style.module.css";
import {
  LetsTalk,
  Header,
  Main,
  Skills,
  Works,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Main className={styles.mainSection} />
      {/* 
      <Works />
      <Skills />
      <LetsTalk /> 
      <Footer />
      */}
    </div>
  );
};

export default Home;
