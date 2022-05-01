import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import styles from "./Filter.module.css";

const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
});

export default function Filter() {
    return (
        <div className={styles.filters_container}>
            <label>Sort By</label>
            <Autocomplete
                id="filter-demo"
                options={SortBy}
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField
                        sx={{ fontSize: 26 }}
                        {...params}
                        label="Sort by"
                    />
                )}
            />

            <label>Order</label>
            <Autocomplete
                id="filter-demo"
                options={Order}
                getOptionLabel={(option) => option.title}
                filterOptions={filterOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Order" />
                )}
            />
        </div>
    );
}

const SortBy = [{ title: "Gender" }, { title: "Duration" }];

const Order = [{ title: "Alphabetical" }, { title: "Year" }];
