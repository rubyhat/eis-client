import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import useTitle from "../../hooks/useTitle";

import { SearchWrapper } from "./components/SearchWrapper";
import { AdvantagesBlock } from "./components/AdvantagesBlock";

export const HomeModule = () => {
  useTitle("Главная страница");
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchWrapper />
          </Grid>
        </Grid>
      </Container>
      <Box className="section">
        <AdvantagesBlock />
      </Box>
    </React.Fragment>
  );
};
