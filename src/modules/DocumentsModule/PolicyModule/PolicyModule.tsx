import React from "react";
import { Alert, Container, Grid } from "@mui/material";

// todo: add document
export const PolicyModule = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Alert severity="info">
            Документ находится в разработке на данный момент!
          </Alert>
        </Grid>
      </Grid>
    </Container>
  );
};
