import React from "react";
import useTitle from "../../hooks/useTitle";
import { Box, Container, Grid } from "@mui/material";
import { TitleGroup } from "./components/TitleGroup";
import { CatalogObjectives } from "./components/CatalogObjectives";
import { FilterMobileWrapper } from "../FilterModule/components/FilterMobileWrapper/FilterMobileWrapper";
import { CustomButton } from "../../components/CustomButton";
import { useCopySharingLink } from "../../hooks/useCopySharingLink";
import { useLocation } from "react-router-dom";

export const CatalogModule = () => {
  useTitle("Каталог - Квартиры в Караганде");
  const { copyLink } = useCopySharingLink(); // todo: remove temp button
  const location = useLocation();

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
              onClick={copyLink}
              fullWidth
              size="small"
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
                height: 34,
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
