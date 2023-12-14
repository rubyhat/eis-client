import { Grid } from "@mui/material";
import React from "react";
import { tempObjectData } from "../../store/tempObjectData";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import { FilterModule } from "../../../FilterModule";

export const CatalogObjectives = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <Grid container spacing={2}>
          {tempObjectData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CatalogCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={3}>
        <FilterModule />
      </Grid>
    </Grid>
  );
};
