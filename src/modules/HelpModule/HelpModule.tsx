import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { FaqAccordion } from "./components";
import { useHelpStore } from "./store";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

export const HelpModule = () => {
  useTitle("Вопрос/Ответ - Roze Agency");
  const { faqItems } = useHelpStore((state) => state);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="titleFirstRegular">
            Часто задаваемые вопросы
          </Typography>
          <Typography
            component="p"
            variant="textBodyRegular"
            color="customColors.labelsSecondary"
            marginBottom={1}
          >
            Не нашли свой вопрос?{" "}
            <Box
              sx={{
                color: "customColors.colorsBlue",
                textDecoration: "underline",
              }}
              component={Link}
              to="/contacts"
            >
              Свяжитесь с нами!
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FaqAccordion faqItems={faqItems} />
        </Grid>
      </Grid>
    </Container>
  );
};
