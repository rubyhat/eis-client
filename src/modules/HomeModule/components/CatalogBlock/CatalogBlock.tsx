import { Container, Grid } from "@mui/material";
import React from "react";
import { CatalogCard } from "../CatalogCard";
import { CatalogCardExtended } from "../CatalogCardExtended";
import { useScreenSize } from "../../../../hooks/useScreenSize";

const catalogCards = [
  {
    imgSrc: "/static/images/home/catalog/img-home-catalog-card-1-1x.webp",
    imgSrcSet: "/static/images/home/catalog/img-home-catalog-card-1-2x.webp 2x",
    title: "Квартиры",
    subtitle: "Вторичное жилье",
    link: "/catalog",
    alt: "Квартиры",
  },
  {
    imgSrc: "/static/images/home/catalog/img-home-catalog-card-2-1x.webp",
    imgSrcSet: "/static/images/home/catalog/img-home-catalog-card-2-2x.webp 2x",
    title: "Дома",
    subtitle: "Частные дома",
    link: "/catalog",
    alt: "Дома",
  },
  {
    imgSrc: "/static/images/home/catalog/img-home-catalog-card-3-1x.webp",
    imgSrcSet: "/static/images/home/catalog/img-home-catalog-card-3-2x.webp 2x",
    title: "Коммерческая недвижимость",
    subtitle: "Помещения и земельные участки",
    link: "/catalog",
    alt: "Коммерческая недвижимость",
  },
];

export const CatalogBlock = () => {
  const isMobile = useScreenSize();
  return (
    <Container>
      <Grid container spacing={isMobile ? 3 : 2}>
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
