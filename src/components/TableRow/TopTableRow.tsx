import styles from "./index.module.css";

export default function TopTableRow() {
  return (
    <div className={`${styles.rowContainer} ${styles.topRowContainer}`}>
      <div className={styles.bookTitle}>Title</div>
      <div className={styles.bookCategory}>Category</div>
      <div className={styles.bookPrice}>Price</div>
      <div className={styles.bookDelete}>Delete</div>
    </div>
  );
}
