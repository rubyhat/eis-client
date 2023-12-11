import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

interface SearchTitleProps {
  title: string;
  subtitle: string;
}

export const SearchTitle = (props: SearchTitleProps) => {
  const { title, subtitle } = props;
  return (
    <Box textAlign="center" color="#fff" marginBottom={4} paddingTop={2}>
      <Typography component="h1" variant="titleLargeRegular" marginBottom={1}>
        {title}
      </Typography>
      <Typography component="p" variant="textBodyRegular">
        {subtitle}
      </Typography>
    </Box>
  );
};
