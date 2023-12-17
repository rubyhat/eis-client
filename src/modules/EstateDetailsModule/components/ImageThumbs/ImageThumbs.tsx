import { Box } from "@mui/material";
import React from "react";
import { ImageThumbsItem } from "../ImageThumbsItem/ImageThumbsItem";

const tempThumbs = [
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
];

export const ImageThumbs = () => {
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
      {tempThumbs.map((thumb, index) => (
        <ImageThumbsItem thumb={thumb} key={index} />
      ))}
    </Box>
  );
};
