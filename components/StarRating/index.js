import React, { useState, useEffect } from "react";
import styles from "./StarRating.module.css";

const StarRating = (props) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const score = props.score;

  if (score) {
    useEffect(() => {
      const track = document.getElementById('track');
      const btns = Array.from(track.children);

      btns.map((item, i) => {
        if (i < score) {
          item.className = `${styles.btn} ${styles.on}`;
        }
      })
    });
  }

  return (
    <div className={styles.track} id="track">
      {
        [...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={`${styles.btn} ${index <= (hover || rating) ? styles.on : styles.off}`}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              aria-label={`Rate with ${index} stars`}
              tabIndex={score ? '-1': null}
            >
              <i className="icon-star" aria-hidden="true"></i>
            </button>
          );
        })
      }
      {score ? <div className={styles.cover}></div> : null}
    </div>
  );
};

export default StarRating;