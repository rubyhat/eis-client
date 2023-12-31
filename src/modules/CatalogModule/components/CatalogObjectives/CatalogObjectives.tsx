import { Grid } from "@mui/material";

import { tempObjectData } from "../../store/tempObjectData";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import { FilterModule } from "../../../FilterModule";
import React from "react";
import { CatalogCardSkeleton } from "../CatalogCardSkeleton";

export const CatalogObjectives = () => {
  // todo: upd skeleton when data will be received
  const [isLoading] = React.useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={9}>
        <Grid container spacing={2}>
          {(isLoading ? Array.from(new Array(9)) : tempObjectData).map(
            (item, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                {item ? <CatalogCard item={item} /> : <CatalogCardSkeleton />}
              </Grid>
            ),
          )}
        </Grid>
      </Grid>
      <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "inherit" } }}>
        <FilterModule />
      </Grid>
    </Grid>
  );
};
