import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";

const userDB = [
  {
    userName: "zhonen",
    password: "12345678",
  },
];

export default function LoginView() {
  return (
    <div className={styles.Login_wrapper}>
      <div className={styles.Login_container}>
        <h1>Studio Ghibli Tracker</h1>
        <form className={styles.Login_form} action="/">
          <input
            type="text"
            placeholder="Your user name"
            id="user_name"
            name="user_name"
            required
            minLength="4"
          ></input>

          <input
            type="password"
            placeholder="Your password"
            id="user_password"
            name="user_password"
            required
            minLength="8"
          ></input>

          <button
            type="submit"
            onClick={function (event) {
              var userVal = document.getElementById("user_name").value;
              var userPasswordVal = document.getElementById("user_password").value;

              if ((userVal == userDB[0].userName) & (userPasswordVal == userDB[0].password)) {
                alert("Usuario Valido");
              } else {
                event.preventDefault();
                alert("Algo salio mal");
              }
            }}
          >
            Login
          </button>
          <a href="#">Forgot your password?</a>
        </form>

        <section className={styles.Login_signin}>
          <p>Don&apos;t have an account?</p>
          <Link href="/onboarding">
            <a type="button">Signin</a>
          </Link>
        </section>

        <section className={styles.Login_socialMedia}>
          <button className={styles.Login_socialMedia_Facebook} disabled>
            Connect with Facebook
          </button>
          <button className={styles.Login_socialMedia_Twitter} disabled>
            Connect with Twitter
          </button>
        </section>
      </div>
    </div>
  );
}
