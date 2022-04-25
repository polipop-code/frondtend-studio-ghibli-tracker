import React from "react";
import styles from "../../styles/Login.module.css";

const userDB = [
    {
        name: "zhonen",
        password: "12345678",
    },
];

export default function LoginForm() {
    return (
        <form className={styles.logIn} action="/" method="get">
            <label for="user_name">User or e-mial</label>
            <input
                type="text"
                placeholder="Enter your user name or e-mail..."
                id="user_name"
                name="user_name"
                required
                minLength="4"
            ></input>

            <label for="user_password">Password</label>
            <input
                type="password"
                placeholder="Your password here..."
                id="user_password"
                name="user_password"
                required
                minLength="8"
            ></input>

            <button
                type="submit"
                className={styles.logIn_button}
                onClick={function (event) {
                    var userVal = document.getElementById("user_name").value;
                    var userPasswordVal =
                        document.getElementById("user_password").value;
                    if (
                        (userVal == userDB[0].name) &
                        (userPasswordVal == userDB[0].password)
                    ) {
                        alert("Usuario Valido");
                    } else {
                        event.preventDefault();
                        alert("Algo salio mal");
                    }
                }}
            >
                Login
            </button>
        </form>
    );
}
