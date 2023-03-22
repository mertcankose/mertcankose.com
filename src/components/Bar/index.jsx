import styles from "./style.module.css";
import Available from "../Available";
import { Link } from "react-router-dom";

const Bar = ({ className }) => {
  return (
    <Link to="/contact" className={[styles.bar, className].join(" ")}>
      <div class="relative flex overflow-x-hidden">
        <div class="animate-marquee whitespace-nowrap">
          <Available />
        </div>

        <div class="absolute top-0 animate-marquee2 whitespace-nowrap">
          <Available />
        </div>
      </div>
    </Link>
  );
};

export default Bar;
