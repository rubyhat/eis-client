import toast from "react-hot-toast";
import { useFormContext } from "react-hook-form";

import { Box, Typography } from "@mui/material";

import { FormInputLabel } from "../../FormInputLabel";
import { useSellModuleStore } from "../../../store/useSellModuleStore";
import { SubmitButton } from "../SubmitButton";
import { containerWrapperStyles } from "../assets";
import { textareaStyles } from "./styles";

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
    <Box sx={containerWrapperStyles}>
      <Box flexGrow={1}>
        <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
          Ваше сообщение
        </Typography>
        <Typography component="p" variant="textBodyRegular" mb={1.5}>
          Это сообщение увидит только сотрудник <br />
          <Typography component="span" color="customColors.colorsOrange">
            Roze
          </Typography>{" "}
          Agency
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
            sx={textareaStyles(!!formState.errors["ownerComment"])}
          />
        </Box>
      </Box>
      <Box>
        <SubmitButton
          isLoading={isLoading}
          handleClickSubmitButton={handleClickSubmitButton}
        />
      </Box>
    </Box>
  );
};
