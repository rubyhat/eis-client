export const textareaStyles = (error: boolean) => {
  return {
    width: 1,
    minHeight: { xs: 250, sm: 110 },
    padding: 1,
    borderColor: error
      ? "customColors.colorsRed"
      : "customColors.labelsQuaternary",
    borderRadius: "5px",
    fontSize: "16px",
    outlineColor: "customColors.colorsOrange",
    "&::placeholder": {
      fontSize: 14,
      color: "customColors.labelsTertiary",
    },
  };
};
