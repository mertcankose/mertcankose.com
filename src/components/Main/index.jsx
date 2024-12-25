import AnimatedText from "../AnimatedText";
import CustomButton from "../CustomButton";
import SocialBar from "../SocialBar";
import styles from "./style.module.css";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow-down.svg";
import { successMessage } from "../../helpers/toast";

const Main = ({ className }) => {
  const copyEmail = () => {
    navigator.clipboard.writeText("contact@mertcankose.com");
    successMessage("Email copied to clipboard!");
  };

  return (
    <section className={[styles.main, className].join(" ")}>
      <AnimatedText text="Hi, I’m Mertcan." />
      <AnimatedText text="I craft digital products and experiences." className="mt-2" />

      <p className={styles.description}>
        I transform complex ideas into user-friendly solutions across web, mobile, and blockchain, emphasizing clean
        code and seamless experiences.
      </p>
      <SocialBar />

      <div className="flex items-center gap-4 mt-8">
        <CustomButton onClick={() => copyEmail()} text="Copy Email" className="w-32" />
        <CustomButton type="external" href="/MertcanKose_Resume.pdf" text="View CV" className="w-32" />
      </div>

      <a href="#career" className="mt-10" aria-label={`Scroll to career section`} title={`Scroll to career section`}>
        <ArrowDown width="30" height="30" />
      </a>
    </section>
  );
};

export default Main;
