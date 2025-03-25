export const buttonWrapperStyles = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1.25,
};

export const buttonStyles = (isActive: boolean) => {
  return {
    width: "fit-content",
    paddingY: 1,
    paddingX: 2,
    border: "1px solid",
    borderRadius: 1,
    cursor: "pointer",
    backgroundColor: isActive ? "hsla(32,100%,55%,0.25)" : "#fff",
    borderColor: isActive
      ? "customColors.colorsOrange"
      : "customColors.labelsQuaternary",
  };
};

export const containerWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  height: 1,
  pb: 2,
};

export const formStyles = {
  margin: { xs: "none", md: "auto" },
  width: { xs: 1, md: 576 },
  display: "flex",
  flexDirection: "column",
  px: 2,
  height: 1,
};
