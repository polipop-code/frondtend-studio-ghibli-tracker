import React from "react";
import Link from "next/link";
import styles from "../styles/Login.module.css";

const userDB = [
  {
    email: "zhonen@mail.com",
    password: "12345678",
  },
];

export default function LoginView() {
  return (
    <div className={styles.Login_wrapper}>
      <div className={styles.Login_container}>
        <h1>Studio Ghibli Tracker</h1>

        <form className={styles.Login_form} action="/" method="get">
          <input
            type="email"
            placeholder="Your email"
            id="user_email"
            name="user_email"
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
              var userVal = document.getElementById("user_email").value;
              var userPasswordVal = document.getElementById("user_password").value;
              if ((userVal == userDB[0].email) & (userPasswordVal == userDB[0].password)) {
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
          <p>Don't have an account?</p>
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
