import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconButton } from "@mui/material";

import { Logotype } from "../../../../components/Logotype";
import { MenuList } from "../MenuList";
import { useHeaderStore } from "../../store/useHeaderStore";
import { CustomButton } from "../../../../components/CustomButton";
import { DrawerMenu } from "../DrawerMenu";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isTablet, isMobile, isLaptop } = useScreenSize();

  const { setIsHeaderBurgerOpen } = useHeaderStore((state) => state);

  const handleBurgerIconClick = () => setIsHeaderBurgerOpen(true);

  return (
    <Box
      component="header"
      sx={{
        padding: isMobile ? "8px 0" : "16px 0",
        borderBottom: "1px solid",
        borderColor: "customColors.labelsQuaternary",
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={2}>
            <Logotype />
          </Grid>
          <Grid item xs={6} md={10} display="flex" justifyContent="end">
            {isTablet || isMobile || isLaptop ? (
              <IconButton color="primary" onClick={handleBurgerIconClick}>
                <RxHamburgerMenu />
              </IconButton>
            ) : (
              <React.Fragment>
                <MenuList />
                <Box component={Link} to="/contacts">
                  <CustomButton variant="contained" size="medium">
                    Позвоните нам
                  </CustomButton>
                </Box>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Container>
      <DrawerMenu onClick={handleBurgerIconClick} />
    </Box>
  );
};
