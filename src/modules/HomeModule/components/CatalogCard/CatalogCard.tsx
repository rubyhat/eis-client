import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface CatalogCard {
  imgSrc: string;
  imgSrcSet: string;
  title: string;
  subtitle: string;
  link: string;
  alt: string;
}

interface CatalogCardProps {
  card: CatalogCard;
}

export const CatalogCard = (props: CatalogCardProps) => {
  const { imgSrc, imgSrcSet, title, subtitle, link, alt } = props.card;
  const theme = useTheme();
  return (
    <Box component={Link} to={link} display="block">
      <Box component="img" src={imgSrc} srcSet={imgSrcSet} alt={alt} />
      <Typography
        component="h5"
        color="customColors.labelsPrimary"
        variant="textBodyEmphasized"
        marginTop={1}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant="textFootnoteRegular"
        color={theme.palette.customColors?.labelsSecondary}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
