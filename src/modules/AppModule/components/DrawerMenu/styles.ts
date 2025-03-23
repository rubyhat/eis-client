export const paperPropsStyles = (isMobile: boolean) => {
  return {
    width: isMobile ? "100%" : "300px",
    borderRadius: isMobile ? "8px 8px 0 0" : "inherit",
  };
};

export const logotypeWrapperStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 1.5,
  borderBottom: "1px solid",
  borderColor: "customColors.labelsQuaternary",
};
