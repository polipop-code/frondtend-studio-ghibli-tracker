import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

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

export default function Home({ data }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <Head>
        <title>Studio Ghibli Tracker</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header
        showUserLink
        showFilterBtn
        showSearchBtn
        searchFunction={e => setSearch(e.target.value)}
      />
      <main className={styles.wrapper}>
        <h1 className={styles.srOnly}>Movies list</h1>
        {
          data.filter(item => {
            if (search === "") {
              return item;
            } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          }).map((item, i) => {
            return (
              <Card
                key={i}
                id={item.id}
                title={item.title}
                year={item.release_date}
                img={item.image}
                desc={item.description}
                rating={item.rt_score}
              />
            );
          })
        }
      </main>
    </>
  );
}
