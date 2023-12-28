import { Container, Grid } from "@mui/material";
import React from "react";
import { FeedbackForm } from "../../components/FeedbackForm";
import { ContactsInfo } from "./components/ContactsInfo";

export const ContactsModule = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <FeedbackForm />
        </Grid>
        <Grid item xs={12} md={5}>
          <ContactsInfo />
        </Grid>
      </Grid>
    </Container>
  );
};
