import { Alert, Grid } from "@mui/material";

import { CatalogCard } from "../CatalogCard/CatalogCard";
import { FilterModule } from "../../../FilterModule";
import React from "react";
import { CatalogCardSkeleton } from "../CatalogCardSkeleton";
import { apiCatalogModule } from "../../api/apiCatalogModule";
import { useQuery } from "@tanstack/react-query";
import { useCatalogStore } from "../../store";
import { useLocation } from "react-router-dom";

export const CatalogObjectives = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { estateObjects, setEstateObjects } = useCatalogStore((state) => state);
  // todo: нужен ли скелетон сейчас? Данные получаем очень быстро и мелькающий скелетон выглядит плохо
  const {
    data: catalogData,
    isLoading,
    isSuccess,
    isError,
  } = useQuery({
    queryFn: () => apiCatalogModule.fetchCatalog(searchParams.toString()),
    queryKey: ["catalogItems"],
  });

  React.useEffect(() => {
    if (isSuccess && !isError) {
      setEstateObjects(catalogData);
    }
  }, [catalogData, isError, isSuccess, setEstateObjects]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={9}>
        <Grid container spacing={2}>
          {isLoading &&
            Array.from(new Array(9)).map((_, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <CatalogCardSkeleton />
              </Grid>
            ))}
          {isSuccess &&
            estateObjects.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <CatalogCard item={item} />
              </Grid>
            ))}
          {isSuccess && Boolean(!estateObjects.length) && (
            <Grid item xs={12}>
              <Alert severity="info">
                В данный момент нет подходящих объектов недвижимости, но уже
                совсем скоро нам будет что Вам показать
              </Alert>
            </Grid>
          )}
          {isError && (
            <Grid item xs={12}>
              <Alert severity="warning">
                Произошла ошибка во время запроса данных с сервера! В данный
                момент уже ведутся работы по улучшению платформы, скоро здесь
                появятся объекты недвижимости, пожалуйста, попробуйте зайти
                позднее!
              </Alert>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "inherit" } }}>
        <FilterModule />
      </Grid>
    </Grid>
  );
};
