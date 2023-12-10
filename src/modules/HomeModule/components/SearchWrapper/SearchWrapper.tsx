import Box from "@mui/material/Box";
import React from "react";
import { SearchTitle } from "../SearchTitle";
import { SearchForm } from "../SearchForm";

export const SearchWrapper = () => {
  return (
    <Box sx={{ position: "relative", minHeight: 280 }}>
      <SearchTitle
        title="Ваша будущая недвижимость"
        subtitle="Проверенная недвижимость от агентства “Розе”"
      />
      <SearchForm />
      <Box
        component="img"
        src="/static/images/img-hero-wallpaper-1x.webp"
        srcSet="/static/images/img-hero-wallpaper-2x.webp 2x"
        alt="hero-wallpaper"
        sx={{ position: "absolute", zIndex: -1, width: "100%", top: 0 }}
      />
    </Box>
  );
};
