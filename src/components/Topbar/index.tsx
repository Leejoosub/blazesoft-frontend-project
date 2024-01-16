import styles from "./index.module.css";

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarContainer}>
        <h1 className={styles.logoText}>My Library</h1>
      </div>
    </div>
  );
}
