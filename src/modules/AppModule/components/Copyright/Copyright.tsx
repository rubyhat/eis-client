/* eslint-disable no-console */
import React from "react";
import { Typography } from "@mui/material";

import { version } from "../../../../../package.json";

export const Copyright = () => {
  React.useEffect(() => {
    const styles = [
      "color: white",
      "font-size: 12px",
      "background-color: hsla(32, 100%, 55%, 1)",
      "padding: 4px",
      "border-radius: 4px",
      "font-weight: bold",
    ].join(";");
    console.log(`%c${import.meta.env.MODE}`, styles, "Mode");
    console.log(`%cv${version}`, styles, "Platform Version");
    console.log(
      `%csupport@roze.kz`,
      styles,
      `Если вы столкнулись с проблемой, пожалуйста сообщите нам`,
    );
  }, []);
  return (
    <>
      <Typography
        component="p"
        variant="textCalloutRegular"
        color="customColors.labelsSecondary"
      >
        Версия платформы: Beta v{version}
      </Typography>
      <Typography
        component="p"
        variant="textCalloutRegular"
        color="customColors.labelsSecondary"
      >
        © 2019–2024 Все права защищены
      </Typography>
    </>
  );
};
