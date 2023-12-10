import { Typography } from "@mui/material";
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
  return (
    <Box textAlign="center">
      <Typography>{advantage.title}</Typography>
      <Typography color="var(--labels-secondary)">
        {advantage.subtitle}
      </Typography>
    </Box>
  );
};
