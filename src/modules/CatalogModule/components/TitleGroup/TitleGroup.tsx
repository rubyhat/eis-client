import React from "react";
import { Badge, Box, Typography } from "@mui/material";

import { CatalogSortGroup } from "../CatalogSortGroup";
import { useCatalogStore } from "../../store";

interface TitleGroupProps {
  type: string;
  category: string;
  city: string;
}

export const TitleGroup = ({ type, category, city }: TitleGroupProps) => {
  const { estateObjects } = useCatalogStore((state) => state);
  return (
    <Box width={1}>
      <Typography component="h1" variant="titleLargeRegular" marginBottom={1.5}>
        {`${type} ${category} ${city ? "в " + city : ""}`}{" "}
        <Badge
          sx={{ marginLeft: 1, marginBottom: 2 }}
          color="primary"
          badgeContent={estateObjects.length || 0}
        />
      </Typography>
      <CatalogSortGroup />
    </Box>
  );
};
