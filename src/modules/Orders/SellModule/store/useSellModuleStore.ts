import { create } from "zustand";
import {
  CategoryType,
  CityType,
  ServiceType,
} from "../../../CatalogModule/store";
import {
  cityTypes,
  estateTypes,
  initialFormState,
  keysToRemove,
  roomTypes,
  serviceTypes,
} from "./initValues";

export interface OwnerInfo {
  ownerName: string;
  ownerPhone: string;
  ownerComment?: string;
}

export interface ApartmentComplex {
  title?: string;
}

type KeysToRemove = (typeof keysToRemove)[number];

export type SellOrder = Omit<FormValues, KeysToRemove> & {
  ownerInfo: OwnerInfo;
  apartmentComplex: ApartmentComplex;
};

export type FormValues = {
  ownerName: string;
  ownerPhone: string;
  type: string;
  category: string;
  city: string;
  cityRegion?: string;
  street: string;
  price: string;
  exchange: string;
  pledge: string;
  documents: string;
  houseNumber?: string;
  apartmentNumber?: string;
  roomCount?: string;
  customRoomCount?: string;
  houseSquare?: string;
  kitchenSquare?: string;
  targetFloor?: string;
  totalFloor?: string;
  ceilingHeight?: string;
  houseBuildingYear?: string;
  houseCondition?: string;
  houseWallMaterial?: string;
  houseRoofMaterial?: string;
  furniture?: string;
  ethernet?: string;
  garage?: string;
  toiletCount?: string;
  plotSquare?: string;
  houseType?: string;
  electricType?: string;
  heatingType?: string;
  gasType?: string;
  sewerType?: string;
  toiletType?: string;
  waterType?: string;
  hasBasement?: boolean;
  hasMansard?: boolean;
  apartmentComplexTitle?: string;
  parkingSeat?: string;
  ownerComment?: string;
  entranceNumber?: string;
  intercomNumber?: string;
};

export interface ButtonChip {
  label: string;
  isActive: boolean;
}

export interface ServiceButtonChip extends ButtonChip {
  value: ServiceType;
}

export interface EstateButtonChip extends ButtonChip {
  value: CategoryType;
}
export interface CityButtonChip extends ButtonChip {
  value: CityType;
}

export interface RoomButtonChip extends ButtonChip {
  value: string;
}

interface SellModuleStore {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (v: boolean) => void;
  step: number;
  setStep: (v: number) => void;
  serviceTypes: ServiceButtonChip[];
  setActiveServiceType: (value: ServiceType) => void;
  estateTypes: EstateButtonChip[];
  setActiveEstateType: (value: CategoryType) => void;
  cityTypes: CityButtonChip[];
  setActiveCityType: (value: CityType) => void;
  roomTypes: RoomButtonChip[];
  setActiveRoomType: (value: string) => void;
  loadStateFromLocalStorage: () => void;
  cityRegion: string;
  price: string;
  exchange: string;
  ownerComment: string;
  houseSquare: string;
  kitchenSquare: string;
  targetFloor: string;
  totalFloor: string;
  ceilingHeight: string;
  houseBuildingYear: string;
  roomCount: string;
  pledge: string;
  documents: string;
  houseCondition: string;
  houseWallMaterial: string;
  houseRoofMaterial: string;
  furniture: string;
  ethernet: string;
  garage: string;
  toiletCount: string;
  parkingSeat: string;
  apartmentComplexTitle: string;
  plotSquare: string;
  houseType: string;
  electricType: string;
  heatingType: string;
  gasType: string;
  sewerType: string;
  toiletType: string;
  waterType: string;
  hasBasement: boolean;
  hasMansard: boolean;
  entranceNumber: string;
  intercomNumber: string;
  images: File[];
  customRoomCount: string;
  setCustomRoomCount: (v: string) => void;
  addImages: (newImages: File[]) => void;
  removePhoto: (index: number) => void;
  clearPhotos: () => void;
}

export const useSellModuleStore = create<SellModuleStore>((set) => ({
  ...initialFormState,
  addImages: (newImages) =>
    set((state) => ({ images: [...state.images, ...newImages] })),
  removePhoto: (index) =>
    set((state) => ({
      images: state.images.filter((_, i) => i !== index),
    })),
  clearPhotos: () => set({ images: [] }),
  customRoomCount: "",
  setCustomRoomCount: (v) => set({ customRoomCount: v }),
  isDrawerOpen: false,
  setIsDrawerOpen: (v) => set({ isDrawerOpen: v }),
  step: 1,
  setStep: (v) => set({ step: v }),
  serviceTypes: serviceTypes,
  setActiveServiceType: (value) =>
    set((state) => {
      const updatedServiceTypes = state.serviceTypes.map((service) => ({
        ...service,
        isActive: service.value === value,
      }));
      localStorage.setItem("serviceTypes", JSON.stringify(updatedServiceTypes));
      return { serviceTypes: updatedServiceTypes };
    }),
  estateTypes: estateTypes,
  setActiveEstateType: (value) =>
    set((state) => {
      const updatedEstateTypes = state.estateTypes.map((estate) => ({
        ...estate,
        isActive: estate.value === value,
      }));
      localStorage.setItem("estateTypes", JSON.stringify(updatedEstateTypes));
      return { estateTypes: updatedEstateTypes };
    }),
  cityTypes: cityTypes,
  setActiveCityType: (value) =>
    set((state) => {
      const updatedCityTypes = state.cityTypes.map((city) => ({
        ...city,
        isActive: city.value === value,
      }));
      localStorage.setItem("cityTypes", JSON.stringify(updatedCityTypes));
      return { cityTypes: updatedCityTypes };
    }),
  roomTypes: roomTypes,
  setActiveRoomType: (value) =>
    set((state) => {
      const updatedRoomTypes = state.roomTypes.map((room) => ({
        ...room,
        isActive: room.value === value,
      }));
      localStorage.setItem("roomTypes", JSON.stringify(updatedRoomTypes));
      return { roomTypes: updatedRoomTypes };
    }),
  loadStateFromLocalStorage: () => {
    const savedServiceTypes = localStorage.getItem("serviceTypes");
    const savedEstateTypes = localStorage.getItem("estateTypes");
    const savedCityTypes = localStorage.getItem("cityTypes");
    const savedRoomTypes = localStorage.getItem("roomTypes");
    if (savedServiceTypes) {
      set({ serviceTypes: JSON.parse(savedServiceTypes) });
    }
    if (savedEstateTypes) {
      set({ estateTypes: JSON.parse(savedEstateTypes) });
    }
    if (savedCityTypes) {
      set({ cityTypes: JSON.parse(savedCityTypes) });
    }
    if (savedRoomTypes) {
      set({ roomTypes: JSON.parse(savedRoomTypes) });
    }
  },
}));
