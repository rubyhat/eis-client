import { Grid } from "@mui/material";
import React from "react";
import { tempObjectData } from "../../store/tempObjectData";
import { CatalogCard } from "../CatalogCard/CatalogCard";

export const CatalogObjectives = () => {
  return (
    <Grid container spacing={2}>
      {tempObjectData.map((item, index) => (
        <Grid item md={4} key={index}>
          <CatalogCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
