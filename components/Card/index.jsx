import React from "react";
import Link from "next/link";
import StarRating from "../StarRating";
import styles from "./Card.module.css";

export default function Card({ id, title, year, img, desc, rating }) {
  return (
    <article className={styles.wrapper}>
      <figure className={styles.poster}>
        <img
          className={styles.image}
          src={img}
          alt={`${title} poster`}
        />
      </figure>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.year}>{year}</p>
        <p className={styles.desc}>{desc.substring(0, 78)} ...</p>
        <StarRating score={rating} />
        <Link href={`/movies/${id}`}>
          <a className={styles.link}>
            See more
            <i className="icon-arrow-right" aria-hidden="true"></i>
          </a>
        </Link>
      </div>
    </article>
  );
}
