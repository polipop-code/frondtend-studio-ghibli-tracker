import React from 'react';
import styles from '../Loader/Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <h1 className={styles.loader}>loading...</h1>
    </div>
  );
};

export default Loading