import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../../components/Header";
import styles from "../../styles/Movie.module.css";

const LikeButton = dynamic(() => import("../../components/LikeButton"), { ssr: false });
const StarRating = dynamic(() => import("../../components/StarRating"), { ssr: false });

export async function getStaticProps() {
  const API = "https://ghibliapi.herokuapp.com/films";

  try {
    const response = await fetch(API);
    const data = await response.json();

    return {
      props: { data }
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default function Movie({ data }) {
  const router = useRouter();
  const request = router.query.movieName;
  const movie = data.find(item => item.id === request);
  const name = movie.title.replace(/\s/g, '_');

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{movie.title}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <i className={styles.helper}></i>
        <div className={styles.top}>
          <h1 className={styles.title}>{movie.title} <span>({movie.release_date})</span></h1>
          <LikeButton id={movie.id} />
        </div>
        <div className={styles.content}>
          <figure className={styles.poster}>
            <img
              className={styles.image}
              src={movie.image}
              alt={`${movie.title} poster`}
            />
          </figure>
          <div className={styles.info}>
            <div className={styles.scores}>
              <p className={styles.copy}>Audience score</p>
              <StarRating score={movie.rt_score} />
              <p className={`${styles.copy} ${styles.copyTwo}`}>Your score</p>
              <StarRating id={movie.id} />
            </div>
            <p className={styles.desc}>{movie.description}</p>
            <a
              className={styles.link}
              href={`https://ghibli.fandom.com/wiki/${name}`}
              target="_blank"
            >
              More info <i className="icon-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
