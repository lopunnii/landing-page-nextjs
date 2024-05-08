import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.card}>
        <h1>Sign up now for a 6 month free trial!</h1>
        <p className={styles.description}>
          This special offer is only available from 01/07/2024~01/07/2025.
        </p>
        <button className={styles.sign_up_btn}>Sign Up</button>
      </div>
    </main>
  );
}
