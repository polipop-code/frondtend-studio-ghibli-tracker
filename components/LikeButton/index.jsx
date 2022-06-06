import React, { useState, useEffect } from "react";
import styles from "./LikeButton.module.css";

export default function LikeButton({ id }) {
  const key = `like-${id}`;
  const [liked, setLike] = useState(
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem(key)) || false
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(liked));
  });

  return (
    <button
      className={styles.btn}
      aria-label={liked ? "Unlike movie" : "Like movie"}
      onClick={() => setLike(!liked)}
    >
      <i
        className={`icon-heart ${liked ? styles.filled : ''}`}
        aria-hidden="true"
      ></i>
    </button>
  );
}
