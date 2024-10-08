import styles from "./style.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner_box}>
        <div className={styles.spinner}></div>
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
