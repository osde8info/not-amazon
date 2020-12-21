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
          not amazon USA (CA)
        </h2>

        <div>
          <a href="https://www.greenapplebooks.com/">
            <h4>not amazon green apple books</h4>
          </a>

          <a href="https://www.vervecoffee.com/">
            <h4>not amazon verve coffee</h4>
          </a>
        </div>

        <h2 className={styles.title}>
          not amazon ENGLAND (Kent)
        </h2>

        <div className={styles.grid}>
          <a href="https://www.beeenergyhoney.com" className={styles.card}>
            <h3>not amazon bee energy honey</h3>
          </a>

          <a href="https://foodsmart.uk/" className={styles.card}>
            <h3>not amazon food smart</h3>
          </a>
        </div>

        <h2 className={styles.title}>
          not amazon ENGLAND (Surrey)
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

    <h2 className={styles.title}>
          not amazon SCOTLAND
        </h2>

        <div className={styles.grid}>
          <a href="https://twitter.com/EdinBookshop" className={styles.card}>
            <h3>not amazon edin bookshop</h3>
          </a>

          <a href="https://twitter.com/GoldenHareBooks" className={styles.card}>
            <h3>not amazon golden hare books</h3>
          </a>

          <a href="https://twitter.com/Lighthousebks" className={styles.card}>
            <h3>not amazon light house books</h3>
          </a>

          <a href="https://twitter.com/PortyBooks" className={styles.card}>
            <h3>not amazon porty books</h3>
          </a>

          <a href="https://twitter.com/ToppingsEdin" className={styles.card}>
            <h3>not amazon toppings</h3>
          </a>

          <a href="https://twitter.com/tweetwronger" className={styles.card}>
            <h3>not amazon typewronger</h3>
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
