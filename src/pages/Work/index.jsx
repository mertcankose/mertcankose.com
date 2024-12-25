import styles from "./style.module.css";
import { WorksGrid } from "../../components";
import { allWorks } from "../../constants/work";
import { Helmet } from "react-helmet";
import { useState } from "react";

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = allWorks.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.type === selectedCategory || item.type2 === selectedCategory;
  });

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Mertcan Köse | Mobile, Web and Blockchain Developer</title>
        <meta name="description" content="Mertcan Köse - Mobile, Web and Blockchain Developer" />
      </Helmet>
      <h2 className={styles.heading}>All Work</h2>
      <div className={styles.categories}>
        <button
          className={[styles.categoryButton, selectedCategory === "all" ? styles.active : ""].join(" ")}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={[styles.categoryButton, selectedCategory === "mobile" ? styles.active : ""].join(" ")}
          onClick={() => setSelectedCategory("mobile")}
        >
          Mobile
        </button>
        <button
          className={[styles.categoryButton, selectedCategory === "web" ? styles.active : ""].join(" ")}
          onClick={() => setSelectedCategory("web")}
        >
          Web
        </button>
        <button
          className={[styles.categoryButton, selectedCategory === "blockchain" ? styles.active : ""].join(" ")}
          onClick={() => setSelectedCategory("blockchain")}
        >
          Blockchain
        </button>
        <button
          className={[styles.categoryButton, selectedCategory === "backend" ? styles.active : ""].join(" ")}
          onClick={() => setSelectedCategory("backend")}
        >
          Backend
        </button>
      </div>
      <WorksGrid items={filteredItems} />
    </div>
  );
};

export default Work;
