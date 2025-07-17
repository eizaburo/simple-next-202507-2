import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.hero}>
          <h1>ヒーローエリア</h1>
          <p>ヒーローエリアのキャッチコピー。</p>
        </section>
        <section className={styles.services}>
          <div className={styles.service}>
            <h2>サービスA</h2>
            <p>サービスAの説明。</p>
          </div>
          <div className={styles.service}>
            <h2>サービスB</h2>
            <p>サービスBの説明。</p>
          </div>
          <div className={styles.service}>
            <h2>サービスC</h2>
            <p>サービスCの説明。</p>
          </div>
        </section>
      </main>
    </>
  );
}
