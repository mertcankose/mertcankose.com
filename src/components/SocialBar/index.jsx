import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import styles from "./style.module.css";

const SocialBar = () => {
  return (
    <div className={styles.socialBar}>
      <a href="https://github.com/mertcankose" target="_blank">
        <Github width="32" height="32" />
      </a>
      <a href="https://twitter.com/mertcankose_" target="_blank">
        <Twitter width="32" height="32" />
      </a>
      <a href="https://www.linkedin.com/in/mertcankose-/" target="_blank">
        <Linkedin width="32" height="32" />
      </a>
      <a href="mailto:me@mertcankose.com">
        <Email width="32" height="32" />
      </a>
    </div>
  );
};

export default SocialBar;
