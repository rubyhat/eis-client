import React from "react";
import { Container, Grid } from "@mui/material";
import { LinkList } from "./components/LinkList";
import { LinksTitle } from "./components/LinksTitle";
import { HelpModule } from "../HelpModule";

export const LinksModule = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LinksTitle />
        </Grid>
        <Grid item xs={12}>
          <LinkList />
        </Grid>
        <HelpModule />
      </Grid>
    </Container>
  );
};
