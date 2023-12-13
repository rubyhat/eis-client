import { Box, Typography } from "@mui/material";
import React from "react";
import { ActiveSortType, useCatalogStore } from "../../store/useCatalogStore";

const sortWrapperStyles = {
  display: "flex",
  alignItems: "center",
  padding: 0.25,
  borderRadius: 2,
  backgroundColor: "rgba(118, 118, 128, 0.12)",
};

const sortButtonStyles = {
  textAlign: "center",
  minWidth: "120px",
  padding: "6px 8px",
  borderRadius: "7px",
  border: "none",
  cursor: "pointer",
};

const sortButtonActiveStyles = {
  backgroundColor: "customColors.colorsWhite",
  boxShadow:
    "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
};

const separatorStyles = {
  width: "1px",
  height: 16,
  backgroundColor: "rgba(60, 60, 67, 0.36)",
  borderRadius: 1,
};

export const CatalogSortButtons = () => {
  const { activeSortType, setActiveSortType } = useCatalogStore(
    (state) => state,
  );

  const handleButtonClick = (type: ActiveSortType) => {
    setActiveSortType(type);
  };
  return (
    <Box sx={sortWrapperStyles}>
      <Box
        component="button"
        onClick={() => handleButtonClick("new")}
        sx={
          activeSortType === "new"
            ? { ...sortButtonStyles, ...sortButtonActiveStyles }
            : { ...sortButtonStyles }
        }
      >
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.labelsPrimary"
        >
          Новые
        </Typography>
      </Box>
      {activeSortType === "rich" && (
        <Box component="div" sx={separatorStyles} />
      )}
      <Box
        sx={
          activeSortType === "cheap"
            ? { ...sortButtonStyles, ...sortButtonActiveStyles }
            : { ...sortButtonStyles }
        }
        component="button"
        onClick={() => handleButtonClick("cheap")}
      >
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.labelsPrimary"
        >
          Дешевые
        </Typography>
      </Box>
      {activeSortType === "new" && <Box component="div" sx={separatorStyles} />}
      <Box
        sx={
          activeSortType === "rich"
            ? { ...sortButtonStyles, ...sortButtonActiveStyles }
            : { ...sortButtonStyles }
        }
        component="button"
        onClick={() => handleButtonClick("rich")}
      >
        <Typography
          component="p"
          variant="textFootnoteRegular"
          color="customColors.labelsPrimary"
        >
          Дорогие
        </Typography>
      </Box>
    </Box>
  );
};
