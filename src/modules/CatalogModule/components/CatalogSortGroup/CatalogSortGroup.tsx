import { Box, Typography } from "@mui/material";
import React from "react";
import { CatalogSortButtons } from "../CatalogSortButtons";

export const CatalogSortGroup = () => {
  return (
    <Box display="flex" alignItems="center">
      <Typography component="p" variant="titleThirdRegular" marginRight={2}>
        Сортировать:
      </Typography>
      <CatalogSortButtons />
    </Box>
  );
};
