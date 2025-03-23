import React from "react";

import { Box, Typography } from "@mui/material";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";
import { imageAddItemAreaStyles } from "./styles";

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
    <Box {...getRootProps()} sx={imageAddItemAreaStyles}>
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
