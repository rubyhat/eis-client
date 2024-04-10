import { Box, IconButton, SwipeableDrawer } from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";

import { Logotype } from "../../../../components/Logotype";
import { CustomButton } from "../../../../components/CustomButton";
import { MenuList } from "../MenuList";
import { useHeaderStore } from "../../store/useHeaderStore";
import { useScreenSize } from "../../../../hooks/useScreenSize";
import { Link } from "react-router-dom";
import { useAnalytics } from "../../../../hooks/useAnalytics";

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

  const handleMobilePhoneButtonClick = () =>
    trackEvent({
      category: "HomePage",
      action: "Click on Header",
      label: `Click on Mobile Phone Button`,
    });

  const handlePhoneButtonClick = () =>
    trackEvent({
      category: "HomePage",
      action: "Click on Header",
      label: `Click on Phone Button (redirect to Contacts page)`,
    });

  return (
    <SwipeableDrawer
      anchor={isMobile ? "bottom" : "right"}
      open={isHeaderBurgerOpen}
      onClose={handleCloseBurgerMenu}
      onOpen={handleBurgerIconClick}
      PaperProps={{
        sx: {
          width: isMobile ? "100%" : "300px",
          borderRadius: isMobile ? "8px 8px 0 0" : "inherit",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 1.5,
            borderBottom: "1px solid",
            borderColor: "customColors.labelsQuaternary",
          }}
        >
          <Logotype />
          <IconButton onClick={handleCloseBurgerMenu}>
            <IoClose />
          </IconButton>
        </Box>
        <Box padding={1.5}>
          <Box onClick={handleCloseBurgerMenu}>
            <MenuList showIcon isVertical />
          </Box>
          {isMobile ? (
            <Box
              component="a"
              href="tel:+77752813783"
              onClick={handleMobilePhoneButtonClick}
            >
              <CustomButton
                variant="contained"
                size="large"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Позвоните нам
              </CustomButton>
            </Box>
          ) : (
            <Box
              component={Link}
              to="/contacts"
              onClick={handlePhoneButtonClick}
            >
              <CustomButton
                variant="contained"
                size="large"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Позвоните нам
              </CustomButton>
            </Box>
          )}
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};
