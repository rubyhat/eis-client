import React from "react";

interface SearchSelectProps {
  name: string;
  label: string;
}

export const SearchSelect = ({
  name,
  label,
  control,
  defaultValue,
  children,
  ...props
}: SearchSelectProps) => {
  return <div>SearchSelect</div>;
};
