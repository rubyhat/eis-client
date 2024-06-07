import React from "react";

import { Box, Typography } from "@mui/material";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

interface ImageAddItemAreaProps {
  isLoading: boolean;
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
}

export const ImageAddItemArea = ({
  isLoading,
  getInputProps,
  getRootProps,
}: ImageAddItemAreaProps) => {
  return (
    <Box
      {...getRootProps()}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        border: "2px solid",
        borderColor: "customColors.colorsOrange",
        borderRadius: 2,
        paddingX: 2,
        paddingY: 8,
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} disabled={isLoading} />
      <MdOutlineAddPhotoAlternate
        size={48}
        color="hsla(32, 100%, 55%, 1)"
        style={{ marginBottom: 4 }}
      />
      <Typography variant="body1">
        Перетащите сюда фотографии или кликните для выбора
      </Typography>
    </Box>
  );
};
