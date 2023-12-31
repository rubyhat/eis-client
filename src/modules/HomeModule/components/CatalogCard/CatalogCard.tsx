import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useScreenSize } from "../../../../hooks/useScreenSize";

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
  const { isMobile } = useScreenSize();
  return (
    <Box component={Link} to={link} display="block">
      <Box
        component="img"
        src={imgSrc}
        srcSet={imgSrcSet}
        alt={alt}
        width="100%"
        borderRadius={2}
      />
      <Typography
        component="h5"
        color="customColors.labelsPrimary"
        variant={isMobile ? "titleSecondRegular" : "textBodyEmphasized"}
        marginTop={1}
      >
        {title}
      </Typography>
      <Typography
        component="p"
        variant={isMobile ? "textBodyRegular" : "textFootnoteRegular"}
        color="customColors.labelsSecondary"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
