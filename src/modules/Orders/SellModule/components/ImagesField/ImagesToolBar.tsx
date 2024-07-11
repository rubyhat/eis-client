import React from "react";

import { Box, Button, Typography } from "@mui/material";
import { useSellModuleStore } from "../../store/useSellModuleStore";
import toast from "react-hot-toast";

interface ImagesToolBarProps {
  photosLength: number;
}

export const ImagesToolBar = ({ photosLength }: ImagesToolBarProps) => {
  const clearPhotos = useSellModuleStore((store) => store.clearPhotos);

  const handleDeleteAllClick = () => {
    clearPhotos();
    toast.success("Фото были успешно удалены!");
  };

  return (
    <Box
      sx={{
        display: photosLength > 0 ? "flex" : "none",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography component="p" variant="textBodyRegular">
        Выбрано фотографий: {photosLength}
      </Typography>
      <Button
        onClick={handleDeleteAllClick}
        variant="outlined"
        color="error"
        sx={{ textTransform: "none" }}
      >
        Удалить все
      </Button>
    </Box>
  );
};
