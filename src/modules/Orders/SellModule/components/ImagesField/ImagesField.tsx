import React from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useSellModuleStore } from "../../store/useSellModuleStore";
import { ImagesToolBar } from "./ImagesToolBar";
import { ImagesInfo } from "./ImagesInfo";
import { ImageItem } from "./ImageItem";
import { ImageAddItemButton } from "./ImageAddItemButton";
import { ImageAddItemArea } from "./ImageAddItemArea";

interface ImagesFieldProps {
  isLoading: boolean;
}

export const ImagesField = ({ isLoading }: ImagesFieldProps) => {
  const { register, setValue, formState, trigger } = useFormContext();
  const { images, addImages, setStep, step } = useSellModuleStore();

  const theme = useTheme();
  const showImageAddItemButton = useMediaQuery(theme.breakpoints.down("sm"))
    ? true
    : images.length > 0 && images.length < 10;

  // Зарегистрируйте поле images
  React.useEffect(() => {
    register("images");
  }, [register]);

  // Обновите значение поля images при изменении состояния images в Zustand
  React.useEffect(() => {
    setValue("images", images);
  }, [images, setValue]);

  const onDrop = (acceptedFiles: File[]) => {
    const photoFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/"),
    );
    addImages(photoFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 10,
  });

  const handleClickSubmitButton = async () => {
    const triggerList = ["images"];
    const isValid = await trigger(triggerList);
    if (isValid) {
      setStep(step + 1);
    } else {
      toast.error("Пожалуйста, заполните все поля, чтобы продолжить!");
      console.log("Форма невалидна:", formState.errors);
    }
  };

  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Загрузка фотографий
      </Typography>
      <ImagesInfo />
      {images.length === 0 && (
        <ImageAddItemArea
          isLoading={isLoading}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
        />
      )}
      <ImagesToolBar photosLength={images.length} />
      <Box sx={{ marginY: 2 }}>
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <ImageItem key={index} photo={image} index={index} />
          ))}
          {showImageAddItemButton && (
            <ImageAddItemButton getRootProps={getRootProps} />
          )}
        </Grid>
      </Box>
      {formState.errors.images && (
        <Typography variant="textFootnoteRegular" color="error">
          {formState.errors.images.message as string}
        </Typography>
      )}
      <Box paddingTop="72px">
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading || images.length === 0}
          sx={{
            bottom: 16,
            textTransform: "none",
            position: "fixed",
            width: {
              xs: "calc(100% - 32px)",
              sm: 568,
            },
          }}
          onClick={handleClickSubmitButton}
        >
          Продолжить
        </Button>
      </Box>
    </Box>
  );
};
