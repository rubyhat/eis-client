import { Box, Typography } from "@mui/material";
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
  return (
    <Box component={Link} to={link}>
      <Box component="img" src={imgSrc} srcSet={imgSrcSet} alt={alt} />
      <Typography marginTop={1.5}>{title}</Typography>
      <Typography>{subtitle}</Typography>
    </Box>
  );
};
