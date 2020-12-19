import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>not amazon shopping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          not amazon shopping
        </h1>

        <h2 className={styles.title}>
          not amazon CANADA
        </h2>

        <div className={styles.grid}>
          <a href="https://www.not-amazon.ca/" className={styles.card}>
            <h3>not amazon</h3>
          </a>

          <a href="https://not-amazon-toronto.pory.app/" className={styles.card}>
            <h3>not amazon toronto</h3>
          </a>

          <a href="https://not-amazon-vancouver.pory.app/" className={styles.card}>
            <h3>not amazon vancouver</h3>
          </a>
        </div>

        <h2 className={styles.title}>
          not amazon UK
        </h2>

        <div className={styles.grid}>
          <a href="https://www.edengreens.co.uk" className={styles.card}>
            <h3>not amazon edengreens</h3>
          </a>

          <a href="https://www.jampackedpreserves.co.uk" className={styles.card}>
            <h3>not amazon jam packed preserves</h3>
          </a>

          <a href="https://www.loxwoodmeadworks.com/" className={styles.card}>
            <h3>not amazon loxwood mead works</h3>
          </a>

          <a href="https://ourecohome.co.uk/" className={styles.card}>
            <h3>not amazon our eco home</h3>
          </a>

          <a href="https://www.sloaneshotchocolate.com/" className={styles.card}>
            <h3>not amazon slones hot chocolate</h3>
          </a>

          <a href="https://www.susieeatstheseasons.com/" className={styles.card}>
            <h3>not amazon susie eats the seasons</h3>
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
