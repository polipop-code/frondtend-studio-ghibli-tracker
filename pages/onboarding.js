import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Onboarding.module.css";

export default function OnboardingView() {
  return (
    <div className={styles.Onboarding_wrapper}>
      <div className={styles.Onboarding_container}>
        <h1>Studio Ghibli Tracker</h1>
        <form className={styles.signin_form} action="/login">
          <input
            type="text"
            placeholder="Enter an user name"
            id="user_name"
            name="user_name"
            required
            minLength="4"
          ></input>

          <input
            type="password"
            placeholder="Enter a password"
            id="user_password"
            name="user_password"
            required
            minLength="8"
          ></input>

          <button type="submit">Register</button>
        </form>

        <section className={styles.Onboarding_login}>
          <p>Do you have an account?</p>
          <Link href="/login">
            <a type="button">Login</a>
          </Link>
        </section>
      </div>
    </div>
  );
}
