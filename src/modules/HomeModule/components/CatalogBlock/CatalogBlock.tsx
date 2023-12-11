import { Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { CatalogCard } from "../CatalogCard";
import { CatalogCardExtended } from "../CatalogCardExtended";

const catalogCards = [
  {
    imgSrc: "/static/images/img-home-catalog-card-1-1x.webp",
    imgSrcSet: "/static/images/img-home-catalog-card-1-2x.webp 2x",
    title: "Квартиры",
    subtitle: "Вторичное жилье",
    link: "",
    alt: "Квартиры",
  },
  {
    imgSrc: "/static/images/img-home-catalog-card-2-1x.webp",
    imgSrcSet: "/static/images/img-home-catalog-card-2-2x.webp 2x",
    title: "Дома",
    subtitle: "Частные дома и дачи",
    link: "",
    alt: "Дома и дачи",
  },
  {
    imgSrc: "/static/images/img-home-catalog-card-3-1x.webp",
    imgSrcSet: "/static/images/img-home-catalog-card-3-2x.webp 2x",
    title: "Коммерческая недвижимость",
    subtitle: "Помещения и земельные участки",
    link: "",
    alt: "Коммерческая недвижимость",
  },
];

export const CatalogBlock = () => {
  // todo: create hook usePlatforms with useMediaQuery
  const theme = useTheme();
  const isSmOrSmaller = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Grid container spacing={isSmOrSmaller ? 3 : 2}>
        {catalogCards.map((card, i) => (
          <Grid item xs={12} sm={6} lg={3} key={i}>
            <CatalogCard card={card} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} lg={3}>
          <CatalogCardExtended />
        </Grid>
      </Grid>
    </Container>
  );
};
