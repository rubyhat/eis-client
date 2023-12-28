import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FaCopy } from "react-icons/fa6";

export const ContactsInfo = () => {
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
            <IconButton sx={{ marginLeft: 0.5 }}>
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
            <IconButton sx={{ marginLeft: 0.5 }}>
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
              href="tel:+7 775 281 3783"
              color="customColors.colorsBlue"
            >
              +7 775 281 3783
            </Typography>
            <IconButton sx={{ marginLeft: 0.5 }}>
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
