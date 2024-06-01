import React from "react";
import { Alert, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SuccessForm = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Заявка успешно отправлена!
      </Typography>
      <Alert severity="success">
        Спасибо за уделенное время и оказаное доверие 🧡
      </Alert>
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          bottom: 16,
          textTransform: "none",
          position: "absolute",
          width: {
            xs: "calc(100% - 32px)",
            sm: 568,
          },
        }}
        onClick={() => navigate("/")}
      >
        Вернуться на главную
      </Button>
    </Box>
  );
};
