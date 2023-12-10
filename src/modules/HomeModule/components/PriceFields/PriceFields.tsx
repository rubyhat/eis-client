import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PriceFieldsProps {
  StartPrice: React.ReactNode;
  EndPrice: React.ReactNode;
}

const inputWrapper = {
  width: "100%",
};

export const PriceFields = (props: PriceFieldsProps) => {
  const { StartPrice, EndPrice } = props;
  return (
    <Box display="flex" alignItems="center">
      <Box sx={inputWrapper}>{StartPrice}</Box>
      <Typography margin="0 8px">—</Typography>
      <Box sx={inputWrapper}>{EndPrice}</Box>
      <Typography marginLeft="8px">₸</Typography>
    </Box>
  );
};
