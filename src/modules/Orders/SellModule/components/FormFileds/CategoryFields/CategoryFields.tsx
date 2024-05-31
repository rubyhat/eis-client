import React from "react";

import { Box, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { LivingSpaceFields } from "./LivingSpaceFields";

interface CategoryFieldsProps {
  isLoading: boolean;
}

const livingSpaces = ["apartment", "house", "townhouse", "cottage", "business"];

export const CategoryFields = ({ isLoading }: CategoryFieldsProps) => {
  const { getValues } = useFormContext();
  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Описание
      </Typography>
      {livingSpaces.includes(getValues().category) && (
        <LivingSpaceFields isLoading={isLoading} />
      )}
    </Box>
  );
};
