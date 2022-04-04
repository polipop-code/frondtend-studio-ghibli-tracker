import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function login_page() {
    return (
        <div className={styles.loginPage_container}>
            <Link href="/">
                <a>Regresar</a>
            </Link>
            <h1>Studio Ghibli Tracker</h1>
            <form action="" className={styles.loginPage_form}>
                <label>User</label>
                <input type="text" id="user_name"></input>
                <label>Password</label>
                <input type="text" id="user_password"></input>
                <button type="submit">Login</button>
            </form>
            <section>
                <button>Connect with Twitter</button>
                <button>Connect with Facebook</button>
            </section>
        </div>
    );
}
