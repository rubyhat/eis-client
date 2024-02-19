import Box from "@mui/material/Box";
import React from "react";
import { AdvantageItem } from "./AdvantageItem";
import { Container, Grid } from "@mui/material";

const advantages = [
  { title: "3+", subtitle: "лет на рынке недвижимости" },
  { title: "150+", subtitle: "реализованных объектов недвижимости" },
  { title: "2+", subtitle: "месяца в среднем на реализацию 1 объекта" },
  { title: "от 1.2%", subtitle: "вознаграждение агента недвижимости" },
];

export const AdvantagesBlock = () => {
  return (
    <Box
      sx={{
        padding: "32px 0",
        borderTop: "1px solid var(--labels-quaternary)",
        borderBottom: "1px solid var(--labels-quaternary)",
        backgroundColor: "hsla(210, 100%, 52%, 0.05)",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {advantages.map((advantage, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <AdvantageItem advantage={advantage} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
