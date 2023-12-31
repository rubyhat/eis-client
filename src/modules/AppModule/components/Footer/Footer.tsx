/* eslint-disable no-console */
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Logotype } from "../../../../components/Logotype";
import { MenuList } from "../MenuList";
import { ContactsInfo } from "../../../ContactsModule/components/ContactsInfo";
import { version } from "../../../../../package.json";

export const Footer = () => {
  React.useEffect(() => {
    const styles = [
      "color: white",
      "font-size: 12px",
      "background-color: hsla(211, 100%, 50%, 1)",
      "padding: 4px",
      "border-radius: 4px",
      "font-weight: bold",
    ].join(";");
    console.log(`%cv${version}`, styles, "Platform Version");
    console.log(
      `%csupport@roze.kz`,
      styles,
      `Если вы столкнулись с проблемой, пожалуйста сообщите нам`,
    );
  }, []);
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
            <Box marginBottom={1.5}>
              <MenuList isVertical />
            </Box>
            <Typography
              component="p"
              variant="textCalloutRegular"
              color="customColors.labelsSecondary"
            >
              Версия платформы: v{version}
            </Typography>
            <Typography
              component="p"
              variant="textCalloutRegular"
              color="customColors.labelsSecondary"
            >
              © 2019–2024 Все права защищены
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactsInfo hiddenTitle />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
