import { Box, Typography } from "@mui/material";
import React from "react";

export const LinksTitle = () => {
  return (
    <Box>
      <Typography component="h1" variant="titleFirstRegular" marginBottom={1}>
        Здравствуйте!
      </Typography>
      <Typography component="p" variant="textBodyRegular">
        Спасибо за интерес к Агентству Недвижимости Розе предлагает. Мы
        оказываем услуги в сфере недвижимости
      </Typography>
    </Box>
  );
};
