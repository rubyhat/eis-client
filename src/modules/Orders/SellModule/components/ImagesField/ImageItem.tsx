import React from "react";
import toast from "react-hot-toast";

import { Box, Grid, IconButton } from "@mui/material";
import { MdDelete } from "react-icons/md";

import { useSellModuleStore } from "../../store/useSellModuleStore";

interface ImageItemProps {
  index: number;
  photo: File;
}

export const ImageItem = ({ index, photo }: ImageItemProps) => {
  const removePhoto = useSellModuleStore((store) => store.removePhoto);
  const handleClickDeletePhoto = (index: number) => {
    removePhoto(index);
    toast.success("Фото было успешно удалено!");
  };
  return (
    <Grid item key={index} xs={6}>
      <Box sx={{ position: "relative", height: 1 }}>
        <Box
          component="img"
          src={URL.createObjectURL(photo)}
          alt={`preview-${index}`}
          sx={{
            borderRadius: 2,
            width: 1,
            height: 150,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <IconButton
          onClick={() => handleClickDeletePhoto(index)}
          sx={{
            position: "absolute",
            top: 6,
            right: 6,
            color: "customColors.colorsRed",
            backgroundColor: "#fff",
          }}
          size="small"
        >
          <MdDelete size={16} />
        </IconButton>
      </Box>
    </Grid>
  );
};
