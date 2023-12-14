import { Box } from "@mui/material";
import React from "react";
import { CustomButton } from "../../../../components/CustomButton";

export const FilterMobileWrapper = () => {
  return (
    <Box
      sx={{
        width: {
          xs: 1,
          sm: "min-content",
        },
        marginTop: {
          xs: 1,
          sm: 0,
        },
        marginLeft: {
          xs: 0,
          sm: 2,
        },
      }}
    >
      <CustomButton
        fullWidth
        size="small"
        sx={{
          maxWidth: {
            xs: 1,
            sm: 120,
          },
          height: 34,
        }}
      >
        Фильтры
      </CustomButton>
    </Box>
  );
};
