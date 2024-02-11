import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";

import { Logotype } from "../../../../components/Logotype";
import { MenuList } from "../MenuList";
import { ContactsInfo } from "../../../ContactsModule/components/ContactsInfo";
import { Copyright } from "../Copyright";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { SocialMediaIconLinks } from "../../../../components/SocialMediaIconLinks";
import { useLocation } from "react-router-dom";
import { DocumentListLinks } from "../../../../components/DocumentsListLink";

export const Footer = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const location = useLocation();
  const isContactsPage = location.pathname === "/contacts";

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      component="footer"
      padding="16px 0"
      border="1px solid"
      borderColor="customColors.labelsQuaternary"
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <Logotype />
            </Box>
            <Box marginBottom={isMobile || isTablet ? 0 : 1.5}>
              {isMobile || isTablet ? (
                <Accordion
                  expanded={expanded === "map"}
                  onChange={handleAccordionChange("map")}
                >
                  <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="map"
                    id="map"
                  >
                    Карта сайта
                  </AccordionSummary>
                  <AccordionDetails>
                    <MenuList isVertical />
                  </AccordionDetails>
                </Accordion>
              ) : (
                <MenuList isVertical />
              )}
            </Box>
            {!isMobile && !isTablet && <Copyright />}
          </Grid>
          <Grid item xs={12} md={4}>
            {(isMobile || isTablet) && !isContactsPage && (
              <Box paddingBottom={1.5}>
                <SocialMediaIconLinks />
              </Box>
            )}
            {!isContactsPage && <ContactsInfo hiddenTitle />}
            {(isMobile || isTablet) && (
              <Box marginTop={0.5}>
                {!isContactsPage && <DocumentListLinks />}
                <Box marginTop={1.5}>
                  <Copyright />
                </Box>
              </Box>
            )}
          </Grid>
          {!isMobile && !isTablet && !isContactsPage && (
            <Grid item xs={12} md={4}>
              <SocialMediaIconLinks />
              <DocumentListLinks />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};
