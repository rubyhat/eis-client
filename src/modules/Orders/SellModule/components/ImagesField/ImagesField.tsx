import React from "react";
// import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { MdDelete } from "react-icons/md";
import { useSellModuleStore } from "../../store/useSellModuleStore";

interface ImagesFieldProps {
  isLoading: boolean;
}

export const ImagesField = ({ isLoading }: ImagesFieldProps) => {
  // const { formState, setValue, trigger, register } = useFormContext();
  const { photos, addPhotos, removePhoto, clearPhotos } = useSellModuleStore();

  const onDrop = (acceptedFiles: File[]) => {
    const photoFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/"),
    );
    addPhotos(photoFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 10,
  });

  return (
    <Box>
      <Box
        {...getRootProps()}
        sx={{
          border: "2px dashed grey",
          padding: 2,
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} disabled={isLoading} />
        <Typography variant="body1">
          Перетащите сюда фотографии или кликните для выбора (до 10 фотографий)
        </Typography>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Grid container spacing={2}>
          {photos.map((photo, index) => (
            <Grid item key={index} xs={4}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={URL.createObjectURL(photo)}
                  alt={`preview-${index}`}
                  style={{ width: "100%", height: "auto" }}
                />
                <IconButton
                  onClick={() => removePhoto(index)}
                  sx={{ position: "absolute", top: 0, right: 0, color: "red" }}
                >
                  <MdDelete />
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: 2 }}
      >
        Загрузить
      </Button>
      <Button
        onClick={clearPhotos}
        variant="outlined"
        color="secondary"
        sx={{ marginTop: 2, marginLeft: 2 }}
      >
        Удалить все
      </Button>
    </Box>
  );
};
