import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className={styles.btn}
      aria-label="Go back"
      onClick={() => router.back()}
    >
      <i className="icon-arrow-left-small" aria-hidden="true"></i>
    </button>
  );
}

const UserLink = () => {
  return (
    <Link href="/account">
      <a
        className={styles.btn}
        aria-label="Go to account"
      >
        <i className="icon-user" aria-hidden="true"></i>
      </a>
    </Link>
  );
}

const SearchForm = ({ fn }) => {

  return (
    <form className={styles.form} id="form" onSubmit={e => e.preventDefault()}>
      <input
        className={styles.input}
        type="search"
        name="search"
        id="search"
        placeholder="Search movie ..."
        onChange={fn}
      />
    </form>
  )
}

const FilterButton = () => {
  return (
    <button
      className={styles.btn}
      aria-label="Filter movies"
    >
      <i className="icon-filter" aria-hidden="true"></i>
    </button>
  );
}

const SearchButton = () => {
  return (
    <button
      className={styles.btn}
      aria-label="Search movie"
      onClick={() => {
        const form = document.getElementById('form');
        form.classList.toggle(`${styles.isVisible}`);
      }}
    >
      <i className="icon-search" aria-hidden="true"></i>
    </button>
  );
}

export default function Header(props) {
  const showUserLink = props.showUserLink;
  const showFilterBtn = props.showFilterBtn;
  const showSearchBtn = props.showSearchBtn;
  const searchFunction = props.searchFunction;

  return (
    <header className={styles.header}>
      {showUserLink ? <UserLink /> : <BackButton />}
      {showSearchBtn ? <SearchForm fn={searchFunction}/> : null}
      <div className={styles.btnsWrapper}>
        {showFilterBtn ? <FilterButton /> : null}
        {showSearchBtn ? <SearchButton /> : null}
      </div>
    </header>
  );
}
