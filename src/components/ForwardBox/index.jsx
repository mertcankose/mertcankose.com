import { Link } from "react-router-dom";
import styles from "./style.module.css";

const ForwardBox = ({ icon, text, link }) => {
  return (
    <Link to={link} className={styles.link} target="_blank">
      {icon}
      <p>{text}</p>
    </Link>
  );
};

export default ForwardBox;
