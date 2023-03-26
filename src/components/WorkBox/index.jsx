import { Link } from "react-router-dom";
import Tag from "../Tag";
import styles from "./style.module.css";

const WorkBox = ({ item, extra, className, imageClassName, ...props }) => {
  return (
    <Link
      to={item?.generalLink}
      href={item.generalLink}
      className={[styles.workBox, className].join(" ")}
      {...props}
    >
      <img
        className={[styles.image, imageClassName].join(" ")}
        src={item?.image}
        alt="Project"
      />
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.description}>{item?.description}</p>
      <div className="flex gap-2">
        {item.tags.map((tag) => (
          <Tag tag={tag} />
        ))}
        {extra}
      </div>
    </Link>
  );
};

export default WorkBox;
