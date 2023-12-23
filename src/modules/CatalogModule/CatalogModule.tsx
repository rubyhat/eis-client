import React from "react";
import useTitle from "../../hooks/useTitle";
import { Box, Container, Grid } from "@mui/material";
import { TitleGroup } from "./components/TitleGroup";
import { CatalogObjectives } from "./components/CatalogObjectives";
import { FilterMobileWrapper } from "../FilterModule/components/FilterMobileWrapper/FilterMobileWrapper";
import { CustomButton } from "../../components/CustomButton";
import { useCopySharingLink } from "../../hooks/useCopySharingLink";

export const CatalogModule = () => {
  useTitle("Каталог - Квартиры в Караганде");
  const { copyLink } = useCopySharingLink(); // todo: remove temp button
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
            <CustomButton
              onClick={copyLink}
              fullWidth
              size="small"
              isGreenButton
              sx={{
                marginTop: 1,
                maxWidth: {
                  xs: 1,
                  sm: 120,
                },
                height: 34,
              }}
            >
              Поделиться ссылкой
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
      <Box marginTop={3} />
      <CatalogObjectives />
    </Container>
  );
};
