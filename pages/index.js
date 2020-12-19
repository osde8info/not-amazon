import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>not amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.not-amazon.ca/">not amazon</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://www.not-amazon.ca/" className={styles.card}>
            <h3>not amazon</h3>
          </a>

          <a href="https://not-amazon-toronto.pory.app/" className={styles.card}>
            <h3>not amazon toronto</h3>
          </a>

          <a
            href="https://not-amazon-vancouver.pory.app/" className={styles.card}>
            <h3>not amazon vancouver</h3>
          </a>

          <a
            href="https://www.not-amazon.ca/" className={styles.card}>
            <h3>not amazon</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
