import styles from "./style.module.css";
import WorksGrid from "../WorksGrid";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton";
import { useState } from "react";

const Works = ({ items = [], className }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = items.filter((item) => {
    if (selectedCategory === "all") return true;
    return item.type === selectedCategory || item.type2 === selectedCategory;
  });

  return (
    <div className={[styles.container, className].join(" ")} id="works">
      <h2 className={styles.heading}>Selected Works</h2>
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
      
      
      <Link to="/work" className="">
        <CustomButton text="All Works" className="mt-10 mx-auto" />
      </Link>
      
    </div>
  );
};

export default Works;
