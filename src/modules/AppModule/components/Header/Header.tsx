import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { IconButton } from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";

import { MenuList } from "../MenuList";
import { DrawerMenu } from "../DrawerMenu";

import { Logotype } from "../../../../components/Logotype";
import { useHeaderStore } from "../../store/useHeaderStore";
import { CustomButton } from "../../../../components/CustomButton";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { useAnalytics } from "../../../../hooks/useAnalytics";

export const Header = () => {
  const { trackEvent } = useAnalytics();
  const { isTablet, isMobile, isLaptop } = useScreenSize();

  const { setIsHeaderBurgerOpen } = useHeaderStore((state) => state);

  const handleBurgerIconClick = () => setIsHeaderBurgerOpen(true);

  const handlePhoneButtonClick = () =>
    trackEvent({
      category: "HomePage",
      action: "Click on Header",
      label: `Click on Sell Order Button (redirect to sell order page)`,
    });

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
                <Box
                  component={Link}
                  to="/orders/sell"
                  onClick={handlePhoneButtonClick}
                >
                  <CustomButton variant="contained" size="medium">
                    Подать заявку
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
