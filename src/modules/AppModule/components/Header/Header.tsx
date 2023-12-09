import Grid from "@mui/material/Grid";
import { Logotype } from "../../../../components/Logotype";

import Container from "@mui/material/Container";
import { MenuList } from "../MenuList";
import Box from "@mui/material/Box";

export const Header = () => {
  return (
    <Box
      sx={{
        padding: "16px 0",
        borderBottom: "1px solid var(--labels-quaternary)",
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={4}>
            <Logotype />
          </Grid>
          <Grid item md={8} display="flex" justifyContent="end">
            <MenuList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
