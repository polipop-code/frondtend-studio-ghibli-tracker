import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import StarRating from "../../components/StarRating"
import styles from "../../styles/Movie.module.css";

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

const likeMovie = () => {
  const icon = document.getElementById('like-icon');
  icon.classList.toggle(styles.filled);
}

export default function Movie({ data }) {
  const router = useRouter();
  const request = router.query.movieName;
  const movie = data.find(item => item.id === request);

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
          <button
            className={styles.btn}
            aria-label="Like movie"
            onClick={likeMovie}
          >
            <i className="icon-heart" id="like-icon" aria-hidden="true"></i>
          </button>
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
              <StarRating score={4} />
              <p className={`${styles.copy} ${styles.copyTwo}`}>Your score</p>
              <StarRating />
            </div>
            <p className={styles.desc}>{movie.description}</p>
            <a className={styles.link} href={`#`}>
              More info <i className="icon-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
