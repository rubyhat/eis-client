import Box from "@mui/material/Box";
import { HomeModule } from "../../modules/HomeModule";
import React from "react";
import { useScreenSize } from "../../hooks/useScreenSize";

export const Home = () => {
  const { isMobile } = useScreenSize();
  return (
    <Box className={!isMobile ? "section" : ""}>
      <HomeModule />
    </Box>
  );
};
