import styles from "./style.module.css";

const Main = ({ className }) => {
  return (
    <section className={[styles.main, className].join(" ")}>
      <h1>Main</h1>
    </section>
  );
};

export default Main;
