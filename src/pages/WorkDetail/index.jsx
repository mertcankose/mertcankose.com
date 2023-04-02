import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { allWorks } from "../../constants/work";
import { useParams } from "react-router-dom";
import ForwardBox from "../../components/ForwardBox";
import { ReactComponent as Apple } from "../../assets/icons/apple.svg";
import { ReactComponent as PlayStore } from "../../assets/icons/playstore.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Web } from "../../assets/icons/web.svg";

const WorkDetail = () => {
  const [work, setWork] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    const work = allWorks.find((work) => work.name === name);
    setWork(work);
  }, []);

  return (
    <div className={styles.worksDetailContainer}>
      <h2 className={styles.title}>{work?.title}</h2>
      <p className={styles.description}>{work?.description}</p>
      <div className="flex items-center gap-3">
        {work?.appStore.length > 0 && (
          <ForwardBox icon={<Apple />} text="App Store" link={work?.appStore} />
        )}
        {work?.playStore.length > 0 && (
          <ForwardBox
            icon={<PlayStore />}
            text="Play Store"
            link={work?.playStore}
          />
        )}

        {work?.githubLink.length > 0 && (
          <ForwardBox icon={<Github />} text="Github" link={work?.githubLink} />
        )}

        {work?.webLink.length > 0 && (
          <ForwardBox icon={<Web />} text="Web Sitesi" link={work?.webLink} />
        )}
      </div>
    </div>
  );
};

export default WorkDetail;
