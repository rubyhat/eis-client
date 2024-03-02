import React from "react";
import { Alert, Box } from "@mui/material";

export const TestHostAlert = () => {
  const isTestHost = window.location.href.includes("test");
  if (isTestHost)
    return (
      <Alert severity="error">
        <strong>Это тестовый сайт.</strong> Все, что Вы здесь видите{" "}
        <strong>не существует</strong>. Перейдите на оффициальный сайт{" "}
        <Box
          component="a"
          href="https://roze.kz"
          sx={{
            textDecoration: "underline",
            fontWeight: 700,
            color: "customColors.colorsBlue",
          }}
        >
          Roze.kz
        </Box>
      </Alert>
    );

  return <></>;
};
