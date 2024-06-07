import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { useSellModuleStore } from "../../store/useSellModuleStore";

interface ImagesToolBarProps {
  photosLength: number;
}

export const ImagesToolBar = ({ photosLength }: ImagesToolBarProps) => {
  const clearPhotos = useSellModuleStore((store) => store.clearPhotos);
  return (
    <Box
      sx={{
        display: photosLength > 0 ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography component="p" variant="textBodyRegular">
        Выбрано: {photosLength} фотографий
      </Typography>
      <Button
        onClick={clearPhotos}
        variant="outlined"
        color="error"
        sx={{ textTransform: "none" }}
      >
        Удалить все
      </Button>
    </Box>
  );
};
