import { Box, Typography } from "@mui/material";
import React from "react";

export const LinksTitle = () => {
  return (
    <Box>
      <Typography component="h1" variant="titleFirstRegular" marginBottom={1}>
        Здравствуйте!
      </Typography>
      <Typography component="p" variant="textBodyRegular">
        Агентство Недвижимости Розе предлагает эксклюзивные объекты недвижимости
      </Typography>
    </Box>
  );
};
