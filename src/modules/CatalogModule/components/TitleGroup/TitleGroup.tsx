import { Box, Typography } from "@mui/material";
import React from "react";
import { CatalogSortGroup } from "../CatalogSortGroup";

interface TitleGroupProps {
  type: string;
  category: string;
  city: string;
}

export const TitleGroup = ({ type, category, city }: TitleGroupProps) => {
  return (
    <Box width={1}>
      <Typography
        component="h1"
        variant="titleLargeRegular"
        marginBottom={1.5}
      >{`${type} ${category} ${city ? "в " + city : ""}`}</Typography>
      <CatalogSortGroup />
    </Box>
  );
};
