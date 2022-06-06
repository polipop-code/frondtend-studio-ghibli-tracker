import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

export default function StarRating({ score, id }) {
  const rating = (score / 20);
  const key = `rate-${id}`;

  const [value, setValue] = useState(
    typeof window !== 'undefined' && JSON.parse(localStorage.getItem(key)) || null
  );

  useEffect(() => {
    if (id) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  });

  const styles = {
    "& .MuiRating-icon": {
      fontSize: "var(--fs-xxl)"
    },
    "& .MuiRating-iconEmpty": {
      color: "var(--clr-primary-lt)"
    },
    "& .MuiRating-iconFilled": {
      color: "var(--clr-primary)"
    }
  }

  if (score) {
    return (
      <Rating
        value={rating}
        precision={0.5}
        readOnly
        icon={<StarRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
        sx={styles}
      />
    );
  }

  if (id) {
    return (
      <Rating
        value={value}
        onChange={(e, v) => setValue(v)}
        icon={<StarRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarBorderRoundedIcon fontSize="inherit" />}
        sx={styles}
      />
    );
  }
}
