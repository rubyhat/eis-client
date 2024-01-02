import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { Logotype } from "../../../../components/Logotype";
import { MenuList } from "../MenuList";
import { ContactsInfo } from "../../../ContactsModule/components/ContactsInfo";
import { Copyright } from "../Copyright";
import { useScreenSize } from "../../../../hooks/useScreenSize";

export const Footer = () => {
  const { isMobile, isTablet } = useScreenSize();
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
            <Box display="flex" alignItems="center">
              <Logotype />
              <Box
                component="a"
                href="tel:+77752813783"
                sx={{
                  marginLeft: 2,
                  color: "customColors.colorsBlue",
                  textDecoration: "underline",
                  "&:hover": {
                    textDecoration: "none",
                  },
                }}
              >
                +7 775 281 3783
              </Box>
            </Box>
            <Box marginBottom={isMobile || isTablet ? 0 : 1.5}>
              <MenuList isVertical />
            </Box>
            {!isMobile && !isTablet && <Copyright />}
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactsInfo hiddenTitle />
            {(isMobile || isTablet) && (
              <Box marginTop={1.5}>
                <Copyright />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
