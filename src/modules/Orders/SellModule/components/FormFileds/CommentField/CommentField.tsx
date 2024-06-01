import React from "react";
import toast from "react-hot-toast";
import { useFormContext } from "react-hook-form";

import { Box, Button, Typography } from "@mui/material";

import { FormInputLabel } from "../../FormInputLabel";
import { useSellModuleStore } from "../../../store/useSellModuleStore";

interface CommentFieldProps {
  isLoading: boolean;
}
export const CommentField = ({ isLoading }: CommentFieldProps) => {
  const { step, setStep } = useSellModuleStore();
  const { formState, trigger, register } = useFormContext();

  const handleClickSubmitButton = async () => {
    const isValid = await trigger(["ownerComment"]);
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
        Ваше сообщение
      </Typography>
      <Typography component="p" variant="textBodyRegular" mb={1.5}>
        Это сообщение увидит только сотрудник Roze Agency
      </Typography>
      <Box mb={1.5}>
        <FormInputLabel label="Комментарий" />
        <Box
          component="textarea"
          id="ownerComment"
          {...register("ownerComment", { required: false })}
          disabled={isLoading}
          placeholder="Здесь Вы можете указать дополнительную информацию"
          maxLength={300}
          sx={{
            width: 1,
            minHeight: { xs: 250, sm: 110 },
            padding: 1,
            borderColor: formState.errors["ownerInfo.description"]
              ? "customColors.colorsRed"
              : "customColors.labelsQuaternary",
            borderRadius: "5px",
            fontSize: "16px",
            outlineColor: "customColors.colorsOrange",
            "&::placeholder": {
              fontSize: 14,
              color: "customColors.labelsTertiary",
            },
          }}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={isLoading}
          sx={{
            bottom: 16,
            textTransform: "none",
            position: "absolute",
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
