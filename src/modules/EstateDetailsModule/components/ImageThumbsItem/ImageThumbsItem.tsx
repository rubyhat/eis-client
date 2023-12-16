import { Box } from "@mui/material";
import React from "react";

interface Thumb {
  src: string;
}

interface ImageThumbsItemProps {
  thumb: Thumb;
}
export const ImageThumbsItem = ({ thumb }: ImageThumbsItemProps) => {
  return (
    <Box
      component="img"
      src={thumb.src}
      alt="Фото Объекта"
      sx={{
        width: 1,
        maxWidth: "64px",
        height: "64px",
        cursor: "pointer",
        borderRadius: 2,
        "&:first-child": {
          border: "2px solid",
          borderColor: "customColors.colorsBlue",
        },
      }}
    />
  );
};
