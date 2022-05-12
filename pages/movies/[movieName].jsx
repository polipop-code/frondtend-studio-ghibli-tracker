import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../components/Header";
import StarRating from "../../components/StarRating"
import styles from "../../styles/Movie.module.css";

const likeMovie = () => {
  const icon = document.getElementById('like-icon');
  icon.classList.toggle(styles.filled);
}

export default function Movie() {
  const router = useRouter();
  const requestedMovie = router.query.movieName;
  console.log(requestedMovie);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Movie name</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <i className={styles.helper}></i>
        <div className={styles.top}>
          <h1 className={styles.title}>Mi vecino totoro <span>(1998)</span></h1>
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
              src={`https://via.placeholder.com/600x900`}
              alt={`Poster`}
            />
          </figure>
          <div className={styles.info}>
            <div className={styles.scores}>
              <p className={styles.copy}>Audience score</p>
              <StarRating score={4} />
              <p className={`${styles.copy} ${styles.copyTwo}`}>Your score</p>
              <StarRating />
            </div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur lorem elit. Tenetur vel mollitia posimu exercitatio deserunt earum sunt nemo fuga suscipit atem. Lorem ipsum dolor sit amet consectetur. Lorem ipsum sit amet elit. Consectetur deseru earum sunt nemo fuga.</p>
            <a className={styles.link} href={`#`}>
              More info <i className="icon-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
