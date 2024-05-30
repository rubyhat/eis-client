import React from "react";
import { Container, Grid } from "@mui/material";
import { Greeting } from "./components/Greeting";

export const SellModule = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Greeting />
        </Grid>
      </Grid>
    </Container>
  );
};
