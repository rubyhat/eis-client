import React from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Box } from "@mui/material";
import { CatalogModule } from "../../modules/CatalogModule";

export const Catalog = () => {
  const { isMobile } = useScreenSize();
  return (
    <Box className={!isMobile ? "section" : ""}>
      <CatalogModule />
    </Box>
  );
};
