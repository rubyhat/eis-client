import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import { useScreenSize } from "../../../../hooks/useScreenSize";

interface SearchTitleProps {
  title: string;
  subtitle: string;
  color?: string;
}

export const SearchTitle = (props: SearchTitleProps) => {
  const { title, subtitle, color } = props;
  const { isMobile } = useScreenSize();
  return (
    <Box textAlign="center" color={color || "#fff"} paddingTop={2}>
      <Typography
        component="h1"
        variant={isMobile ? "titleSecondRegular" : "titleLargeRegular"}
        marginBottom={isMobile ? 0.5 : 1}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant={isMobile ? "textCalloutRegular" : "textBodyRegular"}
        color={isMobile ? "customColors.labelsSecondary" : "inherit"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
