import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { DisplayEstateObject } from "../../../CatalogModule/store";
import { CatalogCard } from "../../../CatalogModule/components/CatalogCard";
import { useScreenSize } from "../../../../hooks/useScreenSize";

const SWIPER_SPEED = 666;
const SWIPER_SPACE_BETWEEN = 16;

interface SimilarEstateSwiperProps {
  estateObjects: DisplayEstateObject[];
}

export const SimilarEstateSwiper = ({
  estateObjects,
}: SimilarEstateSwiperProps) => {
  const { isMobile, isTablet, isLaptop } = useScreenSize();

  const swiperModules = isMobile ? [Pagination] : [Navigation, Pagination];
  const enableNavigation = !isMobile;

  const getSlidesPerView = () => {
    if (isMobile) return 1.1;
    if (isLaptop) return 3;
    if (isTablet) return 2;
    return 4;
  };

  return (
    <Swiper
      modules={swiperModules}
      slidesPerView={getSlidesPerView()}
      spaceBetween={SWIPER_SPACE_BETWEEN}
      initialSlide={0}
      speed={SWIPER_SPEED}
      navigation={enableNavigation}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
    >
      {estateObjects.map((estate) => (
        <SwiperSlide key={estate._id}>
          <CatalogCard item={estate} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
