import { Grid } from "@mui/material";
import React from "react";
import { tempObjectData } from "../../store/tempObjectData";
import { CatalogCard } from "../CatalogCard/CatalogCard";
import { FilterModule } from "../../../FilterModule";

export const CatalogObjectives = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={9}>
        <Grid container spacing={2}>
          {tempObjectData.map((item, index) => (
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
