import React from "react";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import { useSellModuleStore } from "../../store/useSellModuleStore";
import { ImagesToolBar } from "./ImagesToolBar";
import { ImagesInfo } from "./ImagesInfo";
import { ImageItem } from "./ImageItem";
import { ImageAddItemButton } from "./ImageAddItemButton";
import { ImageAddItemArea } from "./ImageAddItemArea";
import { SubmitButton } from "../FormFileds/SubmitButton";
import { containerWrapperStyles } from "../FormFileds/assets";

interface ImagesFieldProps {
  isLoading: boolean;
}

export const ImagesField = ({ isLoading }: ImagesFieldProps) => {
  const { register, setValue, formState, trigger } = useFormContext();
  const { images, addImages, setStep, step } = useSellModuleStore();

  const theme = useTheme();
  const showImageAddItemButton = useMediaQuery(theme.breakpoints.down("sm"))
    ? images.length < 6
    : images.length > 0 && images.length < 6;

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
    onDropRejected: (fileRejections) => {
      if (fileRejections.length > 0) {
        toast.error("Максимум можно загрузить 6 фотографий");
      }
    },
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 6,
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
    <Box sx={containerWrapperStyles}>
      <Box flexGrow={1}>
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
      </Box>
      <Box pt={2}>
        <SubmitButton
          isLoading={isLoading}
          handleClickSubmitButton={handleClickSubmitButton}
        />
      </Box>
    </Box>
  );
};
