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
        variant={isMobile ? "titleThirdEmphasized" : "titleLargeRegular"}
        marginBottom={1}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant={isMobile ? "textCalloutRegular" : "textBodyRegular"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
