import AnimatedText from "../AnimatedText";
import CustomButton from "../CustomButton";
import SocialBar from "../SocialBar";
import CurrentlyCard from "../CurrentlyCard";
import styles from "./style.module.css";
import { successMessage } from "../../helpers/toast";
import { analytics } from "../../firebase";
import { logEvent } from "firebase/analytics";

const Main = ({ className }) => {
  const copyEmail = () => {
    navigator.clipboard.writeText("mertcankose142@gmail.com");
    successMessage("Email copied to clipboard!");
  };

  const handleCVClick = () => {
    logEvent(analytics, "cv_button_click", {
      action: "view_cv",
      document_type: "pdf",
      document_name: "MertcanKose_Resume.pdf",
      location: window.location.pathname,
    });
  };

  return (
    <section className={[styles.main, className].join(" ")}>
      <div className={styles.layout}>
        <div className={styles.left}>
          <CurrentlyCard />
        </div>

        <div className={styles.right}>
          <AnimatedText text="Hi, I’m Mertcan." className="md:text-left leading-[1.1]" />
          <AnimatedText text="I craft digital products and experiences." className="mt-1 md:text-left leading-[1.1]" />

          <p className={styles.description}>
            I transform complex ideas into user-friendly solutions across web and mobile, emphasizing clean code and
            seamless experiences.
          </p>
          <SocialBar />

          <div className="flex items-center gap-4 mt-6">
            <CustomButton onClick={() => copyEmail()} text="Copy Email" className="w-32" />
            <CustomButton
              onClick={handleCVClick}
              type="external"
              href="/MertcanKose_Resume.pdf"
              text="View CV"
              className="w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
