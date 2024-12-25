import { Link } from "react-router-dom";
import Tag from "../Tag";
import styles from "./style.module.css";
import { ReactComponent as ExternalLink } from "../../assets/icons/external-link.svg";
import { ReactComponent as Mobile } from "../../assets/icons/smartphone.svg";
import { ReactComponent as Web } from "../../assets/icons/monitor.svg";

const WorkBox = ({ item, extra, className, imageClassName, ...props }) => {
  return (
    <Link
      to={item?.generalLink}
      href={item.generalLink}
      aria-label={`Visit the ${item.title} project detail page`}
      title={`Visit the ${item.title} project detail page`}
      className={[styles.workBox, className, "relative"].join(" ")}
      {...props}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-start justify-start">
          <img className={[styles.image, imageClassName].join(" ")} src={item?.image} alt="Project" loading="lazy" />
          <h3 className={styles.title}>{item?.title}</h3>
          <p className={styles.description}>{item?.description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-end gap-2 h-full">
            {item.tags.map((tag) => (
              <Tag tag={tag} className="py-1.5 px-3" />
            ))}
            {extra}
          </div>

          {item?.type === "mobile" ? <Mobile width="18" height="18" /> : <Web width="18" height="18" />}
        </div>

        <ExternalLink width="18" height="18" className="absolute top-5 right-5" />
      </div>
    </Link>
  );
};

export default WorkBox;
