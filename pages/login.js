import React from "react";
import Link from "next/link";
import LoginForm from "../Components/LoginForm/index.js";

import styles from "../styles/Login.module.css";

export default function loginView() {
    return (
        <div className={styles.container}>
            <h1>Studio Ghibli Tracker</h1>

            <LoginForm />

            <section className={styles.signIn}>
                <label>Don't have an account?</label>
                <button disabled className={styles.signIn_button} type="button">
                    Sign in
                </button>
            </section>

            <button disabled className={styles.twitter_connect}>
                Connect with Twitter
            </button>
            <button disabled className={styles.facebook_connect}>
                Connect with Facebook
            </button>
        </div>
    );
}
