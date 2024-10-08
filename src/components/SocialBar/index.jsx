import styles from "./style.module.css";
import { social } from "../../constants/social";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      {social.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          aria-label={`Visit my ${item.name} page`}
          title={`Visit my ${item.name} page`}
          rel="noopener noreferrer"
          className="opacity-60 hover:opacity-100 transition-all duration-300"
        >
          {item.icon}
          <span className="sr-only">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialBar;
