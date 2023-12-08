import React from "react";

const ENV = import.meta.env.REACT_APP_ENV;

export const usePlatform = () => {
  const [media, setMedia] = React.useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
  });

  const handleResize = () => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    const isTablet =
      !isMobile && window.matchMedia("(max-width: 1024px)").matches;
    const isLaptop =
      !isMobile &&
      !isTablet &&
      window.matchMedia("(max-width: 1400px)").matches;
    const isDesktop = !isMobile && !isTablet && !isLaptop;

    setMedia({
      isMobile,
      isTablet,
      isLaptop,
      isDesktop,
    });
  };

  React.useEffect(() => {
    handleResize();
    ENV === "development" && window.addEventListener("resize", handleResize);
  }, []);

  return { ...media };
};
