import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { FeedbackForm } from "../../components/FeedbackForm";
import { ContactsInfo } from "./components/ContactsInfo";
import { SocialMediaIconLinks } from "../../components/SocialMediaIconLinks";
import { DocumentListLinks } from "../../components/DocumentsListLink";

export const ContactsModule = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <FeedbackForm
            estateAgent={{ name: "Артур Розе", phone: "+77752813783" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <ContactsInfo />
          <DocumentListLinks />
          <Box sx={{ marginTop: 1 }}>
            <SocialMediaIconLinks />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
