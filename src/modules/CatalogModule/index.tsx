import React from "react";
import useTitle from "../../hooks/useTitle";
import { Box, Container, Grid } from "@mui/material";
import { TitleGroup } from "./components/TitleGroup";
import { CatalogObjectives } from "./components/CatalogObjectives";
import { FilterMobileWrapper } from "../FilterModule/components/FilterMobileWrapper/FilterMobileWrapper";

export const CatalogModule = () => {
  useTitle("Каталог - Квартиры в Караганде");
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            width={1}
            display="flex"
            justifyContent="space-between"
            sx={{
              alignItems: {
                xs: "flex-start",
                sm: "flex-end",
              },
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <TitleGroup type="квартир" city="Караганде" />
            <FilterMobileWrapper />
          </Box>
        </Grid>
      </Grid>
      <Box marginTop={3} />
      <CatalogObjectives />
    </Container>
  );
};
