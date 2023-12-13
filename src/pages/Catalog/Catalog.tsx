import React from "react";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Box } from "@mui/material";

export const Catalog = () => {
  const { isMobile } = useScreenSize();
  return <Box className={!isMobile ? "section" : ""}>Hello catalog page!</Box>;
};
