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
      <Typography variant="h4" marginBottom={1}>
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );
};
