import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
interface AdvantageItem {
  title: string;
  subtitle: string;
}

interface AdvantageItemProps {
  advantage: AdvantageItem;
}

export const AdvantageItem = (props: AdvantageItemProps) => {
  const { advantage } = props;
  const theme = useTheme();
  return (
    <Box textAlign="center">
      <Typography
        color={theme.palette.customColors?.labelsPrimary}
        component="h6"
        variant="titleLargeRegular"
      >
        {advantage.title}
      </Typography>
      <Typography
        component="p"
        variant="textFootnoteRegular"
        color={theme.palette.customColors?.labelsSecondary}
      >
        {advantage.subtitle}
      </Typography>
    </Box>
  );
};
