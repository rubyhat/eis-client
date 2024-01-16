import { Grid } from "@mui/material";

import { CatalogCard } from "../CatalogCard/CatalogCard";
import { FilterModule } from "../../../FilterModule";
import React from "react";
import { CatalogCardSkeleton } from "../CatalogCardSkeleton";
import { apiCatalogModule } from "../../api/apiCatalogModule";
import { useQuery } from "@tanstack/react-query";

export const CatalogObjectives = () => {
  // todo: нужен ли скелетон сейчас? Данные получаем очень быстро и мелькающий скелетон выглядит плохо
  const {
    data: catalogData,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () => apiCatalogModule.fetchCatalog(),
    queryKey: ["catalogItems"],
  });

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
            catalogData.map((item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <CatalogCard item={item} />
              </Grid>
            ))}
        </Grid>
      </Grid>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "inherit" } }}>
        <FilterModule />
      </Grid>
    </Grid>
  );
};
