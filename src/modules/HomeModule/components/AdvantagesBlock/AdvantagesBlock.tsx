import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";

import { AdvantageItem } from "./AdvantageItem";
import { advantagesWrapperStyles } from "./styles";

const date = new Date();

const advantages = [
  {
    title: date.getFullYear() - 2021 + "+",
    subtitle: "лет на рынке недвижимости",
  },
  { title: "200+", subtitle: "реализованных объектов недвижимости" },
  { title: "3+", subtitle: "месяца в среднем на реализацию 1 объекта" },
  { title: "от 1.3%", subtitle: "вознаграждение агента недвижимости" },
];

export const AdvantagesBlock = () => {
  return (
    <Box sx={advantagesWrapperStyles}>
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
