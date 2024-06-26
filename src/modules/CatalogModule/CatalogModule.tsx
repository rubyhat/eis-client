import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";

import { TitleGroup } from "./components/TitleGroup";
import { CatalogObjectives } from "./components/CatalogObjectives";

import useTitle from "../../hooks/useTitle";
import { FilterMobileWrapper } from "../FilterModule/components/FilterMobileWrapper/FilterMobileWrapper";
import { CustomButton } from "../../components/CustomButton";
import { useCopySharingLink } from "../../hooks/useCopySharingLink";
import { useAnalytics } from "../../hooks/useAnalytics";

export const CatalogModule = () => {
  useTitle("Каталог - Квартиры в Караганде");
  const { deviceShareLink } = useCopySharingLink();
  const location = useLocation();
  const { trackEvent } = useAnalytics();

  const [params, setParams] = React.useState<{ [k: string]: string }>({});
  React.useLayoutEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = Object.fromEntries(searchParams.entries());
    setParams(params);
  }, [location]);

  const categoryTitles = {
    apartment: "квартир",
    house: "домов",
    land: "земельных участков",
    cottage: "дач",
    townhouse: "таунхаусов",
    business: "коммерческих объектов",
    factory: "заводов и фабрик",
    other: "недвижимости",
  };
  const categoryFromParams = params.category as keyof typeof categoryTitles;
  const cityTitles = {
    Караганда: "Караганде",
    Пришахтинск: "Пришахтинске",
    Абай: "Абае",
    Сарань: "Сарани",
  };
  const cityFromParams = params.city as keyof typeof cityTitles;

  const handleShareButtonClick = () => {
    trackEvent({
      category: "CatalogPage",
      action: "Click On Share Objects",
    });
    deviceShareLink();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            width={1}
            display="flex"
            justifyContent="space-between"
            sx={{
              alignItems: {
                xs: "flex-start",
                sm: "flex-end",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <TitleGroup
              type={params.type === "rent" ? "Аренда" : "Продажа"}
              category={
                Object.prototype.hasOwnProperty.call(
                  categoryTitles,
                  params.category,
                )
                  ? categoryTitles[categoryFromParams]
                  : "недвижимости"
              }
              city={
                Object.prototype.hasOwnProperty.call(cityTitles, params.city)
                  ? cityTitles[cityFromParams]
                  : ""
              }
            />
            <FilterMobileWrapper />
            <CustomButton
              onClick={handleShareButtonClick}
              fullWidth
              size="medium"
              isGreenButton
              sx={{
                marginTop: 1,
                maxWidth: {
                  xs: 1,
                  sm: 270,
                },
                marginLeft: {
                  xs: 0,
                  sm: 2,
                  md: 0,
                },
              }}
            >
              Поделиться подборкой
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop={3} />
      <CatalogObjectives />
    </Container>
  );
};
