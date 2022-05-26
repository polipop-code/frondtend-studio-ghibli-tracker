import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
// import StarRating from "../components/StarRating";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export async function getStaticProps() {
  try {
    const res = await fetch("https://ghibliapi.herokuapp.com/films/");
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default function Home({ data }) {
  return (
    <div className={styles.Home_container}>
      <Head>
        <title>STUDIO GHIBLI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&family=Crimson+Pro:wght@200;400&family=Nunito&family=Nunito+Sans&family=Quicksand:wght@500;700&family=Roboto:ital,wght@0,100;1,100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header showFilterBtn showSearchBtn showUserLink />

      {data.map((movie) => (
        <article className={styles.Movie_card_container}>
          <section className={styles.Movie_card_img}>
            <Link href={"./movies/" + movie.id}>
              <img src={movie.image}></img>
            </Link>
          </section>

          <section className={styles.Movie_card_description}>
            <h3>{movie.title}</h3>
            <h4>{movie.release_date}</h4>
            <p>{movie.description}</p>

            <div className={styles.movie_rating}>
              <p>{movie.rt_score} / 100</p>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={movie.rt_score / 10}
                  precision={0.5}
                  readOnly
                  max={10}
                  sx={{ fontSize: 20 }}
                />
              </Stack>
            </div>
          </section>
        </article>
      ))}
    </div>
  );
}

/* En memoria de nuestros primero pasos en react, Estefania Lesmes y Ramón Gonazáles
const Movie_card = () => {
  return (
    <article className={styles.Movie_card_container}>
      <section className={styles.Movie_card_img}>
        <Images />
      </section>
      <section className={styles.Movie_card_description}>
        <Title />
        <Year />
        <Description />
        <StarRating />
      </section>
    </article>
  );
};

const Images = () => {
  return (
    <img src="https://w0.peakpx.com/wallpaper/866/66/HD-wallpaper-ghibli-anime-totoro.jpg"></img>
  );
};

const Title = () => {
  return <h3>Title</h3>;
};

const Year = () => <h4>2002</h4>;

const Description = () => {
  return (
    <p className={styles.description}>
      Haru is a doubtful 17-year-old high school student who can't find her place among the others.
      Her life is turned upside down when, on her way home from high school with her best friend
      Hiromi, she saves the life of a cat that is nearly hit by a truck.
    </p>
  );
};
*/
