import { Button } from "@mui/material";
import { buttonStyles } from "./styles";

interface SubmitButtonProps {
  isLoading: boolean;
  handleClickSubmitButton: () => void;
}
export const SubmitButton = ({
  isLoading,
  handleClickSubmitButton,
}: SubmitButtonProps) => {
  return (
    <Button
      fullWidth
      size="large"
      variant="contained"
      disabled={isLoading}
      sx={buttonStyles}
      onClick={handleClickSubmitButton}
    >
      Продолжить
    </Button>
  );
};
