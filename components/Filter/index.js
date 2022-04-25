import React from "react";
import styles from "./Filter.module.css";

export default function Filter() {
    return (
        <div className={styles.filter}>
            <label>Sort By</label>
            <select>
                <option value="" selected disabled hidden></option>
                <option>Gender</option>
                <option>Duration</option>
            </select>

            <label>Order</label>
            <select>
                <option value="" selected disabled hidden></option>
                <option>Alphabetical</option>
                <option>Yer</option>
            </select>
        </div>
    );
}
