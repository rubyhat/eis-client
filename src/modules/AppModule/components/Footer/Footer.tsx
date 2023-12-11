import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Logotype } from "../../../../components/Logotype";
import { Link } from "react-router-dom";

interface LinkObject {
  title: string;
  to: string;
}

const links: LinkObject[] = [
  { title: "Квартиры", to: "/kvartiry1" },
  { title: "Дома и дачи", to: "/kvartiry2" },
  { title: "Коммерческая недвижимость", to: "/kvartiry3" },
  { title: "Каталог", to: "/kvartiry4" },
];

export const Footer = () => {
  return (
    <Box
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
            <Box component="ul" marginBottom={2}>
              {links.map(({ title, to }, i) => (
                <Box
                  component="li"
                  key={i}
                  sx={{
                    marginBottom: 0.75,
                    "&:last-child": {
                      marginBottom: 0,
                    },
                  }}
                >
                  <Box
                    component={Link}
                    to={to}
                    sx={{
                      display: "block",
                      color: "customColors.labelsPrimary",
                      "&:hover": {
                        color: "customColors.colorsBlue",
                      },
                    }}
                  >
                    {title}
                  </Box>
                </Box>
              ))}
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
