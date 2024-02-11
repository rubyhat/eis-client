import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const DocumentListLinks = () => {
  return (
    <Box component="ul">
      <Box component="li">
        <Typography
          component="p"
          variant="textCalloutRegular"
          color="customColors.labelsSecondary"
        >
          Документы
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            component={Link}
            to="/docs/agreement"
            color="customColors.colorsBlue"
          >
            Пользовательское соглашение
          </Typography>
        </Box>
      </Box>
      <Box component="li">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            component={Link}
            to="/docs/policy"
            color="customColors.colorsBlue"
          >
            Политика конфиденциальности
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
