import { Link } from "react-router-dom";
import styles from "./style.module.css";

const OnlyLink = ({ href, children, ...props }) => {
  return (
    <a href={href} target="_blank" {...props}>
      {children}
    </a>
  );
};

const LinkButton = ({ href, children, ...props }) => {
  return (
    <Link to={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};

const BaseButton = ({ children, ...props }) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

const CustomButton = ({ text, type, className, ...props }) => {
  let ButtonComponent = props.href ? LinkButton : BaseButton;
  if (type === "external") {
    ButtonComponent = OnlyLink;
  }
  return (
    <ButtonComponent
      className={[styles.contactOuter, className].join(" ")}
      {...props}
    >
      <div className={styles.contactInner}>{text}</div>
    </ButtonComponent>
  );
};

export default CustomButton;
