import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import styles from "../styles/Account.module.css";

export default function Account() {
  return (
    <>
      <Head>
        <title>My account</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section>
          <figure className={styles.profile}>
            <img className={styles.image} src="https://via.placeholder.com/300" alt="Profile" />
          </figure>
          <h1 className={styles.title}>Username</h1>
        </section>
        <div className={styles.panel}>
          <section className={styles.controls}>
            <h2 className={styles.sronly}>Your links</h2>
            <Link href="#">
              <a className={styles.link}>
                Scores
                <i className="icon-arrow-right" aria-hidden="true"></i>
              </a>
            </Link>
            <Link href="#">
              <a className={styles.link}>
                Passwords
                <i className="icon-arrow-right" aria-hidden="true"></i>
              </a>
            </Link>
          </section>
          <section className={styles.info}>
            <h2 className={styles.subtitle}>Ghibli movies watched</h2>
            <div className={styles.bar}>
              <meter className={styles.meter} min="0" max="24" value="17"></meter>
              <div className={styles.gauge} style={{width: `70%`}}></div>
            </div>
            <p className={styles.counter}>17/24</p>
          </section>
        </div>
      </main>
    </>
  );
}
