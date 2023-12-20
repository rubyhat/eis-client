import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import useTitle from "../../hooks/useTitle";

import { SearchWrapper } from "./components/SearchWrapper";
import { AdvantagesBlock } from "./components/AdvantagesBlock";
import { CatalogBlock } from "./components/CatalogBlock";
import { AboutBlock } from "./components/AboutBlock/AboutBlock";

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
        <CatalogBlock />
      </Box>
      <Box className="section">
        <AdvantagesBlock />
      </Box>
      <Box className="section">
        <AboutBlock />
      </Box>
    </React.Fragment>
  );
};
