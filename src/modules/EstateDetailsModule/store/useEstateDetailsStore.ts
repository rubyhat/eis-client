import { create } from "zustand";

const tempThumbs = [
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
  {
    src: "/static/images/img-details-temp-1.webp",
  },
  {
    src: "/static/images/img-details-temp-2.webp",
  },
];

interface image {
  src: string;
}
interface EstateDetailsStore {
  activeImage: string;
  images: image[];
  setImages: (v: image[]) => void;
  setActiveImage: (v: string) => void;
}

export const useEstateDetailsStore = create<EstateDetailsStore>((set) => ({
  activeImage: "",
  images: tempThumbs,
  setImages: (v) => set({ images: v }),
  setActiveImage: (v) => set({ activeImage: v }),
}));
