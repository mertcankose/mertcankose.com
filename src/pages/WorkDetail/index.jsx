import { useState, useEffect } from "react";
import styles from "./style.module.css";
import { allWorks } from "../../constants/work";
import { useParams } from "react-router-dom";
import ForwardBox from "../../components/ForwardBox";
import { ReactComponent as Apple } from "../../assets/icons/apple.svg";
import { ReactComponent as PlayStore } from "../../assets/icons/playstore.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Web } from "../../assets/icons/web.svg";
import { PhotoView } from "react-photo-view";
import { Helmet } from "react-helmet";

const WorkDetail = () => {
  const [work, setWork] = useState(null);

  const { name } = useParams();

  useEffect(() => {
    const work = allWorks.find((work) => work.name === name);
    console.log(work);
    setWork(work);
  }, []);

  const textPrettier = (text) => {
    const paragraphs = text.split("\n");
    return paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);
  };

  const getPhotos = (work) => {
    return Object.keys(work)
      .filter((key) => key.startsWith("photo") && work[key])
      .map((key) => work[key]);
  };

  return (
    <div className={styles.worksDetailContainer}>
      <Helmet>
        <title>{`Mertcan Köse | ${work?.title}`}</title>
      </Helmet>
      <h2 className={styles.title}>{work?.title}</h2>
      <p className={styles.description}>{work?.description}</p>
      <div className="flex items-center gap-3">
        {work?.appStore.length > 0 && (
          <ForwardBox
            icon={<Apple width="24" height="24" />}
            text="App Store"
            link={work?.appStore}
          />
        )}
        {work?.playStore.length > 0 && (
          <ForwardBox
            icon={<PlayStore width="24" height="24" />}
            text="Play Store"
            link={work?.playStore}
          />
        )}

        {work?.githubLink.length > 0 && (
          <ForwardBox
            icon={<Github width="24" height="24" />}
            text="Github"
            link={work?.githubLink}
          />
        )}

        {work?.webLink.length > 0 && (
          <ForwardBox
            icon={<Web width="24" height="24" />}
            text="Web Sitesi"
            link={work?.webLink}
          />
        )}
      </div>
      {work?.text?.length > 0 && (
        <div className="mt-4">{textPrettier(work?.text)}</div>
      )}

      <div className="flex flex-col gap-8 mt-4">
        {work &&
          getPhotos(work).map((photo, index) => (
            <PhotoView key={index} src={photo}>
              <img
                src={photo}
                alt={`Project screenshot ${index + 1}`}
                width={500}
              />
            </PhotoView>
          ))}
      </div>
    </div>
  );
};

export default WorkDetail;
