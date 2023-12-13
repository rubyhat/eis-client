import React from "react";
import useTitle from "../../hooks/useTitle";
import { Container, Grid } from "@mui/material";
import { TitleGroup } from "./components/TitleGroup";

export const CatalogModule = () => {
  useTitle("Главная страница");
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TitleGroup type="квартир" city="Караганде" />
        </Grid>
      </Grid>
    </Container>
  );
};
