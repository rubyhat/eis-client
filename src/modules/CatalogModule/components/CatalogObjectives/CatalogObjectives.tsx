import { Grid } from "@mui/material";
import React from "react";
import { tempObjectData } from "../../store/tempObjectData";
import { CatalogCard } from "../CatalogCard/CatalogCard";

export const CatalogObjectives = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={8}>
        <Grid container spacing={2}>
          {tempObjectData.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CatalogCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={4}></Grid>
    </Grid>
  );
};
