import React from "react";
import { Container, Grid, SwipeableDrawer } from "@mui/material";
import { useSellModuleStore } from "../../store/useSellModuleStore";

export const SellFormDrawer = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useSellModuleStore();

  const handleCloseDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(false);
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isDrawerOpen}
      onClose={handleCloseDrawer}
      onOpen={() => setIsDrawerOpen(true)}
      PaperProps={{
        sx: {
          width: 1,
          height: "100vh",
        },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </SwipeableDrawer>
  );
};
