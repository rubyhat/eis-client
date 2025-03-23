import React from "react";
import { Link } from "react-router-dom";
import { Box, IconButton, SwipeableDrawer } from "@mui/material";
import { IoClose } from "react-icons/io5";

import { Logotype } from "../../../../components/Logotype";
import { CustomButton } from "../../../../components/CustomButton";
import { MenuList } from "../MenuList";
import { useHeaderStore } from "../../store/useHeaderStore";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { useAnalytics } from "../../../../hooks/useAnalytics";
import { logotypeWrapperStyles, paperPropsStyles } from "./styles";

interface DrawerMenuProps {
  onClick: () => void;
}

export const DrawerMenu = ({
  onClick: handleBurgerIconClick,
}: DrawerMenuProps) => {
  const { isMobile } = useScreenSize();
  const { trackEvent } = useAnalytics();
  const { isHeaderBurgerOpen, setIsHeaderBurgerOpen } = useHeaderStore(
    (state) => state,
  );

  const handleCloseBurgerMenu = (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsHeaderBurgerOpen(false);
  };

  const handlePhoneButtonClick = () => {
    trackEvent({
      category: "HomePage",
      action: "Click on Header",
      label: `Click on Sell Order Button (redirect to sell order page)`,
    });
    setIsHeaderBurgerOpen(false);
  };

  return (
    <SwipeableDrawer
      anchor={isMobile ? "bottom" : "right"}
      open={isHeaderBurgerOpen}
      onClose={handleCloseBurgerMenu}
      onOpen={handleBurgerIconClick}
      PaperProps={{
        sx: paperPropsStyles(isMobile),
      }}
    >
      <Box>
        <Box sx={logotypeWrapperStyles}>
          <Logotype />
          <IconButton onClick={handleCloseBurgerMenu}>
            <IoClose />
          </IconButton>
        </Box>
        <Box padding={1.5}>
          <Box onClick={handleCloseBurgerMenu}>
            <MenuList showIcon isVertical />
          </Box>

          <Box
            component={Link}
            to="/orders/sell"
            onClick={handlePhoneButtonClick}
          >
            <CustomButton
              variant="contained"
              size="large"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Подать заявку
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};
