import React from "react";
import useTitle from "../../hooks/useTitle";
import { Box, Container, Grid } from "@mui/material";
import { TitleGroup } from "./components/TitleGroup";
import { CatalogObjectives } from "./components/CatalogObjectives";

export const CatalogModule = () => {
  useTitle("Главная страница");
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TitleGroup type="квартир" city="Караганде" />
        </Grid>
      </Grid>
      <Box marginTop={2} />
      <CatalogObjectives />
    </Container>
  );
};
