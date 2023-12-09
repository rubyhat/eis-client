import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { CustomButton } from "../../../../components/ButtonFilled";

interface LinkObject {
  title: string;
  to: string;
}

const links: LinkObject[] = [
  { title: "Квартиры", to: "/kvartiry1" },
  { title: "Дома и дачи", to: "/kvartiry2" },
  { title: "Коммерческая недвижимость", to: "/kvartiry3" },
  { title: "Каталог", to: "/kvartiry4" },
];

export const MenuList = () => {
  return (
    <Box component="ul" sx={{ display: "flex", alignItems: "center" }}>
      {links.map((link) => (
        <Box component="li" key={link.to} sx={{ marginRight: 2 }}>
          <Box
            component={Link}
            to={link.to}
            className="text-callout-regular"
            sx={{
              "&:hover": {
                color: "var(--colors-blue)",
                textDecoration: "underline",
                transition: "all 333ms ease",
              },
            }}
          >
            {link.title}
          </Box>
        </Box>
      ))}
      <CustomButton variant="contained" size="medium">
        Позвоните нам
      </CustomButton>
    </Box>
  );
};
