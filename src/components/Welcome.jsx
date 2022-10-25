import { Typography } from "@mui/material";
import React from "react";

const Welcome = ({ data }) => {
  const { title, subTitle } = data;
  return (
    <div>
      <Typography
        mt={8}
        style={{ fontWeight: "bold" }}
        align="center"
        variant="h4"
        component="h2"
      >
        {title}
      </Typography>
      <Typography mb={8} align="center" variant="subtitle1">
        {subTitle}
      </Typography>
    </div>
  );
};

export default Welcome;
