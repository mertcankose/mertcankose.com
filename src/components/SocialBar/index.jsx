import styles from "./style.module.css";
import { social } from "../../constants/social";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      {social.map((item) => (
        <a href={item.url} target="_blank" className="opacity-60 hover:opacity-100 transition-all duration-300">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
