import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { ContactsInfo } from "./components/ContactsInfo";
import { SocialMediaIconLinks } from "../../components/SocialMediaIconLinks";
import { DocumentListLinks } from "../../components/DocumentsListLink";
import useTitle from "../../hooks/useTitle";
import { FeedbackModule } from "../FeedbackModule";

export const ContactsModule = () => {
  useTitle("Контакты - Roze Agency");
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <FeedbackModule
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
