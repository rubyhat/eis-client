import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FaCopy } from "react-icons/fa6";
import toast from "react-hot-toast";

export const ContactsInfo = () => {
  const handleCopyClipboard = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success("Успешно скопировано!");
      })
      .catch((err) => {
        toast.error(
          "Не удалось скопировать, возможно Ваш браузер заблокировал это действие",
        );
        // eslint-disable-next-line no-console
        console.error("Ошибка при копировании: ", err);
      });
  };

  return (
    <Box>
      <Typography component="h3" variant="titleSecondRegular">
        Агентство Недвижимости "Розе"
      </Typography>
      <Box component="ul" sx={{ padding: "12px 0" }}>
        <Box component="li">
          <Typography
            component="p"
            variant="textCalloutRegular"
            color="customColors.labelsSecondary"
          >
            Служба поддержки
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="a"
              href="mailto:support@roze.kz"
              color="customColors.colorsBlue"
            >
              support@roze.kz
            </Typography>
            <IconButton
              sx={{ marginLeft: 0.5 }}
              onClick={() => handleCopyClipboard("support@roze.kz")}
            >
              <FaCopy size="14" color="hsla(213, 100%, 53%, 1)" />
            </IconButton>
          </Box>
        </Box>
        <Box component="li">
          <Typography
            component="p"
            variant="textCalloutRegular"
            color="customColors.labelsSecondary"
          >
            Для партнеров
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="a"
              href="mailto:support@roze.kz"
              color="customColors.colorsBlue"
            >
              b2b@roze.kz
            </Typography>
            <IconButton
              sx={{ marginLeft: 0.5 }}
              onClick={() => handleCopyClipboard("b2b@roze.kz")}
            >
              <FaCopy size="14" color="hsla(213, 100%, 53%, 1)" />
            </IconButton>
          </Box>
        </Box>
        <Box component="li">
          <Typography
            component="p"
            variant="textCalloutRegular"
            color="customColors.labelsSecondary"
          >
            Телефон для связи
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="a"
              href="tel:+77752813783"
              color="customColors.colorsBlue"
            >
              +7 775 281 3783
            </Typography>
            <IconButton
              sx={{ marginLeft: 0.5 }}
              onClick={() => handleCopyClipboard("+77752813783")}
            >
              <FaCopy size="14" color="hsla(213, 100%, 53%, 1)" />
            </IconButton>
          </Box>
        </Box>
        <Box component="li">
          <Typography
            component="p"
            variant="textCalloutRegular"
            color="customColors.labelsSecondary"
          >
            Юридический адрес
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              component="a"
              href="https://go.2gis.com/ayfrx9"
              target="_blank"
              color="customColors.colorsBlue"
            >
              Казахстан, город Караганда, улица Нуркена Абдирова 5, офис 401
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
