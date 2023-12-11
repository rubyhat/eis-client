import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
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

// todo: upd temp images
export const CatalogCard = (props: CatalogCardProps) => {
  const { imgSrc, imgSrcSet, title, subtitle, link, alt } = props.card;
  const theme = useTheme();
  const isSmOrSmaller = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box component={Link} to={link} display="block">
      <Box
        component="img"
        src={imgSrc}
        srcSet={imgSrcSet}
        alt={alt}
        width="100%"
      />
      <Typography
        component="h5"
        color="customColors.labelsPrimary"
        variant={isSmOrSmaller ? "titleSecondRegular" : "textBodyEmphasized"}
        marginTop={1}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant={isSmOrSmaller ? "textBodyRegular" : "textFootnoteRegular"}
        color={theme.palette.customColors?.labelsSecondary}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
