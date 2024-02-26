import Box from "@mui/material/Box";
import React from "react";
import { SearchTitle } from "../SearchTitle";
import { SearchForm } from "../SearchForm";
import { useScreenSize } from "../../../../hooks/useScreenSize";

export const SearchWrapper = () => {
  const { isMobile, isTablet } = useScreenSize();

  if (isMobile || isTablet) {
    return (
      <Box>
        <Box marginBottom={isMobile ? 1.5 : 2}>
          <SearchTitle
            title="Ваша будущая недвижимость"
            subtitle="Эксклюзивная недвижимость от агентства «Розе»"
            color="customColors.labelsPrimary"
          />
        </Box>
        <SearchForm />
      </Box>
    );
  }

  return (
    <Box sx={{ position: "relative", minHeight: 280 }}>
      <Box marginBottom={4}>
        <SearchTitle
          title="Ваша будущая недвижимость"
          subtitle="Эксклюзивная недвижимость от агентства «Розе»"
        />
      </Box>
      <SearchForm />
      <Box
        component="img"
        src="/static/images/img-hero-wallpaper-1x.webp"
        srcSet="/static/images/img-hero-wallpaper-2x.webp 2x"
        alt="hero-wallpaper"
        sx={{
          position: "absolute",
          zIndex: -1,
          width: "100%",
          minHeight: 280,
          top: 0,
        }}
      />
    </Box>
  );
};
