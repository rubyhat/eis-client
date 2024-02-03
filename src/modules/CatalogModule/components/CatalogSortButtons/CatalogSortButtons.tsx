import { Box, Typography } from "@mui/material";
import React from "react";
import { ActiveSortType, useCatalogStore } from "../../store/useCatalogStore";
import { IoIosArrowDown } from "react-icons/io";

const sortWrapperStyles = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: 0.25,
  borderRadius: 2,
  backgroundColor: "rgba(118, 118, 128, 0.12)",
};

const sortButtonStyles = {
  textAlign: "center",
  minWidth: "80px",
  width: "100%",
  padding: "6px 8px",
  borderRadius: "7px",
  border: "none",
  cursor: "pointer",
  background: "transparent",
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

const sortOptions = [
  { type: "new", label: "Новые" },
  {
    type: "cheap",
    label: "Стоимость",
    icon: (
      <IoIosArrowDown color="#007bff" size={16} style={{ marginLeft: 2 }} />
    ),
  },
  {
    type: "rich",
    label: "Стоимость",
    icon: (
      <IoIosArrowDown
        color="#007bff"
        size={16}
        style={{ rotate: "180deg", marginLeft: 2 }}
      />
    ),
  },
];

export const CatalogSortButtons = () => {
  const { activeSortType, estateObjects, setActiveSortType, setEstateObjects } =
    useCatalogStore((state) => state);

  const handleButtonClick = (type: ActiveSortType) => {
    setActiveSortType(type);
    // todo: add filter for date
    const filteredEstateObject = estateObjects.sort((a, b) => {
      const firstPrice = a.price - a.discount;
      const secondPrice = b.price - b.discount;
      if (type === "cheap") {
        return firstPrice - secondPrice;
      } else if (type === "rich") {
        return secondPrice - firstPrice;
      } else {
        // Сначала новые (сравнение дат)
        const dateA = new Date(a.updatedAt).getTime();
        const dateB = new Date(b.updatedAt).getTime();
        return dateB - dateA;
      }
    });
    setEstateObjects(filteredEstateObject);
  };

  // todo: сделать гибко, сейчас hardcode на три кнопки, если кнопок будет больше, то уже не будет работать
  const shouldShowSeparator = (index: number, side: "start" | "end") => {
    return (
      (activeSortType === "new" && index === 1 && side === "end") ||
      (activeSortType === "rich" && index === 1 && side === "start")
    );
  };

  return (
    <Box
      sx={{
        ...sortWrapperStyles,
        maxWidth: {
          xs: 1,
          sm: "366px",
        },
      }}
    >
      {sortOptions.map(({ type, label, icon }, index) => (
        <React.Fragment key={index}>
          {shouldShowSeparator(index, "start") && (
            <Box component="div" sx={separatorStyles} />
          )}
          <Box
            component="button"
            onClick={() => handleButtonClick(type as ActiveSortType)}
            sx={
              activeSortType === type
                ? { ...sortButtonStyles, ...sortButtonActiveStyles }
                : { ...sortButtonStyles }
            }
          >
            <Typography
              component="p"
              variant="textFootnoteRegular"
              color="customColors.labelsPrimary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {label}
              {icon && icon}
            </Typography>
          </Box>
          {shouldShowSeparator(index, "end") && (
            <Box component="div" sx={separatorStyles} />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};
