import styles from "./style.module.css";
import Available from "../Available";
import { Link } from "react-router-dom";

const Bar = ({ className }) => {
  return (
    <a href="mailto:mertcankose142@gmail.com" className={[styles.bar, className].join(" ")}>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <Available />
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <Available />
        </div>
      </div>
    </a>
  );
};

export default Bar;
