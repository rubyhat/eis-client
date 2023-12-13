import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Logotype } from "../../../../components/Logotype";
import { MenuList } from "../MenuList";

export const Footer = () => {
  return (
    <Box
      component="footer"
      padding="16px 0"
      border="1px solid"
      borderColor="customColors.labelsQuaternary"
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12} md={4}>
            <Box marginBottom={1.5}>
              <MenuList isVertical />
            </Box>
            <Typography
              variant="textCalloutRegular"
              color="customColors.labelsSecondary"
            >
              © 2019–2024 Все права защищены
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
