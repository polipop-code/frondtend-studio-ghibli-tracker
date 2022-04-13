import React from "react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <navbar className={styles.navbar}>
            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3916/3916810.svg?token=exp=1649870193~hmac=12bbe46ebaae643491f8c67be9f1e67d" />
            </button>

            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3917/3917688.svg?token=exp=1649870133~hmac=e2c7cb09179fc7e45513ec288186fd56" />
            </button>

            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3914/3914366.svg?token=exp=1649869010~hmac=5b86e23d9cb39c5eddcfcd9aa9994b3c" />
            </button>

            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3917/3917132.svg?token=exp=1649870133~hmac=02ce4cedea01b77bac55aba4804c2bb3" />
            </button>
        </navbar>
    );
}
