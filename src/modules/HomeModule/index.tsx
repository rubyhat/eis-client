import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import useTitle from "../../hooks/useTitle";
import { SearchWrapper } from "./components/SearchWrapper";

export const HomeModule = () => {
  useTitle("Главная страница");
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchWrapper />
        </Grid>
      </Grid>
    </Container>
  );
};
