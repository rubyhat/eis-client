import { Box, Typography } from "@mui/material";
import React from "react";
import { CatalogSortGroup } from "../CatalogSortGroup";

interface TitleGroupProps {
  type: string;
  city: string;
}

export const TitleGroup = ({ type, city }: TitleGroupProps) => {
  return (
    <Box>
      <Typography
        component="h1"
        variant="titleLargeRegular"
        marginBottom={1.5}
      >{`Продажа ${type} в ${city}`}</Typography>
      <CatalogSortGroup />
    </Box>
  );
};
