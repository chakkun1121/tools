import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a className={styles.link}>お知らせ</a>
          <a className={styles.link}>設定</a>
        </div>
      </footer>
    </>
  );
}
