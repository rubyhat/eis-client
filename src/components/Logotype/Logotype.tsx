import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const Logotype = () => {
  return (
    <Typography
      component={Link}
      to="/"
      variant="textCalloutRegular"
      color="customColors.labelsPrimary"
      display="flex"
      alignItems="center"
    >
      <Typography color="customColors.colorsOrange" marginRight={0.5}>
        Roze
      </Typography>
      Agency
    </Typography>
  );
};
