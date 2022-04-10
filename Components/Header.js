import React from "react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <navbar className={styles.navbar}>
            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3916/3916837.svg?token=exp=1649623327~hmac=1770dab025ee17baeb66689b6105d98b" />
            </button>

            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3917/3917559.svg?token=exp=1649624895~hmac=fe8a02df9b46e62a0a3e88df85ec5ce2" />
            </button>

            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3914/3914366.svg?token=exp=1649625504~hmac=fd20b830f26635f275f2f95b728a6e7f" />
            </button>

            <button>
                <img src="https://www.flaticon.es/svg/vstatic/svg/3917/3917132.svg?token=exp=1649625533~hmac=75b9a9619468291b36b1857ba61862c1" />
            </button>
        </navbar>
    );
}
