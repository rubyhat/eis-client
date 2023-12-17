import { Box } from "@mui/material";
import React from "react";
import { ImageThumbsItem } from "../ImageThumbsItem/ImageThumbsItem";
import { useEstateDetailsStore } from "../../store/useEstateDetailsStore";

export const ImageThumbs = () => {
  const { images, setActiveImage } = useEstateDetailsStore((state) => state);

  const handleClickThumb = (img: string) => setActiveImage(img);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // todo: add scroll to mobile ?
        // maxWidth: "100%",
        // overflow: "hidden",
        // overflowX: "scroll",
        gap: 1,
      }}
    >
      {images.map((thumb, index) => (
        <Box key={index} onClick={() => handleClickThumb(thumb.src)}>
          <ImageThumbsItem thumb={thumb} />
        </Box>
      ))}
    </Box>
  );
};
