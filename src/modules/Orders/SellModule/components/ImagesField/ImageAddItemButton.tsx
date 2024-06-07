import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { DropzoneRootProps } from "react-dropzone";

interface ImageAddItemButtonProps {
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
}

export const ImageAddItemButton = ({
  getRootProps,
}: ImageAddItemButtonProps) => {
  return (
    <Grid item xs={6}>
      <Box
        {...getRootProps()}
        sx={{
          border: "2px solid",
          borderColor: "customColors.colorsOrange",
          borderRadius: 2,
          width: 1,
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <MdOutlineAddPhotoAlternate
          size={24}
          color="hsla(32, 100%, 55%, 1)"
          style={{ marginBottom: 4 }}
        />
        <Typography component="p" variant="caption" color="primary">
          Добавить фото
        </Typography>
      </Box>
    </Grid>
  );
};
