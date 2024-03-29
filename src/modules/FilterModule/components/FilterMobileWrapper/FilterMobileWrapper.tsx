import React from "react";
import { Box } from "@mui/material";

import { CustomButton } from "../../../../components/CustomButton";
import { useFilterStore } from "../../store/useFilterStore";
import { FilterMobile } from "../FilterMobile/FilterMobile";

export const FilterMobileWrapper = () => {
  const { setIsMobileFilterModalOpen } = useFilterStore((state) => state);

  const handleFilterButtonClick = () => setIsMobileFilterModalOpen(true);

  return (
    <Box
      sx={{
        display: {
          xs: "inherit",
          md: "none",
        },
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
        onClick={handleFilterButtonClick}
        fullWidth
        size="medium"
        sx={{
          maxWidth: {
            xs: 1,
            sm: 120,
          },
        }}
      >
        Фильтры
      </CustomButton>
      <FilterMobile />
    </Box>
  );
};
