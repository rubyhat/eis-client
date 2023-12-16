import React from "react";
import useTitle from "../../hooks/useTitle";
import { Container, Grid, Typography } from "@mui/material";
import { AgentCard } from "../../components/AgentCard/AgentCard";

export const EstateDetailsModule = () => {
  useTitle("Детали объекта недвижимости");
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="titleLargeRegular"
            marginBottom={4}
            display="block"
          >
            Проспект Нуркена Абдирова, 124/3а
          </Typography>
        </Grid>
        <Grid item md={6}>
          <AgentCard />
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </Container>
  );
};
