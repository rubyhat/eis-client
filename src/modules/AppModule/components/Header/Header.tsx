import Grid from "@mui/material/Grid";
import { Logotype } from "../../../../components/Logotype";

import Container from "@mui/material/Container";

// import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Logotype />
        </Grid>
        <Grid item md={6}>
          <Logotype />
        </Grid>
      </Grid>
    </Container>
  );
};
