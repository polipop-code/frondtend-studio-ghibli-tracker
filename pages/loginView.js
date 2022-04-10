import React from "react";
import Link from "next/link";

import styles from "../styles/Login.module.css";

export default function login_page() {
    return (
        <div className={styles.container}>
            <Link href="/">
                <a>Regresar</a>
            </Link>

            <h1>Studio Ghibli Tracker</h1>

            <form className={styles.logIn}>
                <label>User</label>
                <input type="text" id="user_name"></input>
                <label>Password</label>
                <input type="text" id="user_password"></input>
                <button type="submit">Login</button>
            </form>

            <section className={styles.signIn}>
                <label>Didn't have an account yet?</label>
                <button>Sign in</button>
            </section>

            <button>Connect with Twitter</button>
            <button>Connect with Facebook</button>
        </div>
    );
}
