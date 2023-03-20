import styles from "./style.module.css";
import { Contact, Header, Main, Skills, Works } from "../../components";

const Home = () => {
  return (
    <main className={styles.main}>
      <Header className={styles.header} />
      <Main className={styles.main} />
      <Works />
      <Skills />
      <Contact />
    </main>
  );
};

export default Home;
