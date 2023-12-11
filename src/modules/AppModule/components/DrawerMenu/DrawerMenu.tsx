import {
  Box,
  IconButton,
  SwipeableDrawer,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { IoClose } from "react-icons/io5";

import { Logotype } from "../../../../components/Logotype";
import { CustomButton } from "../../../../components/CustomButton";
import { MenuList } from "../MenuList";
import { useHeaderStore } from "../../store/useHeaderStore";

interface DrawerMenuProps {
  onClick: () => void;
}

export const DrawerMenu = ({
  onClick: handleBurgerIconClick,
}: DrawerMenuProps) => {
  const theme = useTheme();
  const isSmOrSmaller = useMediaQuery(theme.breakpoints.down("sm"));
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
  return (
    <SwipeableDrawer
      anchor={isSmOrSmaller ? "bottom" : "right"}
      open={isHeaderBurgerOpen}
      onClose={handleCloseBurgerMenu}
      onOpen={handleBurgerIconClick}
      PaperProps={{
        sx: {
          width: isSmOrSmaller ? "100%" : "300px",
          borderRadius: isSmOrSmaller ? "8px 8px 0 0" : "inherit",
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
          <MenuList isVertical />
          <CustomButton
            variant="contained"
            size="large"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Позвоните нам
          </CustomButton>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};
