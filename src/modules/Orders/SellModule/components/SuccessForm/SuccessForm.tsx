import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Alert, Box, Button, Typography } from "@mui/material";
import { RiExternalLinkLine } from "react-icons/ri";

export const SuccessForm = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography component="h6" variant="titleSecondRegular" mb={1.5}>
        Заявка успешно отправлена!
      </Typography>
      <Alert severity="success">
        Скоро мы свяжемся с Вами! Спасибо за уделенное время и оказаное доверие
        🧡
      </Alert>
      <Box
        component={Link}
        to="/static/docs/Предпродажная_подготовка.pdf"
        target="_blank"
        sx={{
          color: "#333",
          display: "block",
          padding: 2,
          mt: 2,
          backgroundColor: "hsla(32, 100%, 55%, 0.1)",
          borderRadius: 1,
          cursor: "pointer",
          transition: "all 333ms ease",
          "&:hover": {
            backgroundColor: "hsla(32, 100%, 55%, 0.15)",
          },
        }}
      >
        <Typography component="h6" variant="titleThirdEmphasized" mb={1}>
          Как подготовить недвижимость?
        </Typography>
        <Typography component="p" variant="textBodyRegular">
          Мы подготовили гайд-памятку, где рассказываем о том, как подготовить
          недвижимость к продаже или аренде, советуем посмотреть!
        </Typography>
        <Box mt={2} display="flex" alignItems="center" gap={0.5}>
          <Typography
            component="p"
            variant="textBodyEmphasized"
            sx={{ textDecoration: "underline" }}
          >
            Читать
          </Typography>
          <RiExternalLinkLine size={18} color="hsla(32, 100%, 55%, 1)" />
        </Box>
        <Typography
          component="span"
          variant="textFootnoteRegular"
          sx={{ textDecoration: "none" }}
          color="customColors.labelsSecondary"
        >
          время чтения ~2 минуты
        </Typography>
        <Box
          component="img"
          src="/static/images/order/sell/icon-read-documents.svg"
          width={1}
        />
      </Box>
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
