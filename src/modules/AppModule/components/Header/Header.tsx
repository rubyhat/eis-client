import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { RxHamburgerMenu } from "react-icons/rx";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, useTheme } from "@mui/material";

import { Logotype } from "../../../../components/Logotype";
import { MenuList } from "../MenuList";
import { useHeaderStore } from "../../store/useHeaderStore";
import { CustomButton } from "../../../../components/CustomButton";
import { DrawerMenu } from "../DrawerMenu";

export const Header = () => {
  const theme = useTheme();
  const isMdOrSmaller = useMediaQuery(theme.breakpoints.down("md"));

  const { setIsHeaderBurgerOpen } = useHeaderStore((state) => state);

  const handleBurgerIconClick = () => setIsHeaderBurgerOpen(true);

  return (
    <Box
      sx={{
        padding: "16px 0",
        borderBottom: "1px solid var(--labels-quaternary)",
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={2}>
            <Logotype />
          </Grid>
          <Grid item xs={6} md={10} display="flex" justifyContent="end">
            {isMdOrSmaller ? (
              <IconButton color="primary" onClick={handleBurgerIconClick}>
                <RxHamburgerMenu />
              </IconButton>
            ) : (
              <React.Fragment>
                <MenuList />
                <CustomButton variant="contained" size="medium">
                  Позвоните нам
                </CustomButton>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Container>
      <DrawerMenu onClick={handleBurgerIconClick} />
    </Box>
  );
};
