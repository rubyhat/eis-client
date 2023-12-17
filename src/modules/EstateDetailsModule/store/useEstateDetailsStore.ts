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
  images: image[];
  activeImage: string;
  isViewerModalOpen: boolean;
  setImages: (v: image[]) => void;
  setActiveImage: (v: string) => void;
  setIsViewerModalOpen: (v: boolean) => void;
}

export const useEstateDetailsStore = create<EstateDetailsStore>((set) => ({
  activeImage: tempThumbs[0].src,
  images: tempThumbs,
  isViewerModalOpen: false,
  setImages: (v) => set({ images: v }),
  setActiveImage: (v) => set({ activeImage: v }),
  setIsViewerModalOpen: (v) => set({ isViewerModalOpen: v }),
}));
