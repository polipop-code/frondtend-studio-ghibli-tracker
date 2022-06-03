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
    <div className={styles.Filter_container}>
      <Autocomplete className={styles.Filter_component}
        id="filter-demo"
        options={SortBy}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        sx={{ width: 280 }}
        renderInput={(params) => <TextField sx={{ fontSize: 26 }} {...params} label="Sort by" />}
      />
    </div>
  );
}

const SortBy = [
  { title: "Alphabetical" },
  { title: "Year" },
  { title: "Gender" },
  { title: "Duration" },
];
