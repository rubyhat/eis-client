import { create } from "zustand";
import {
  CategoryType,
  CityType,
  ServiceType,
} from "../../../CatalogModule/store";

export type FormValues = {
  ownerName: string;
  ownerPhone: string;
  type: string;
  category: string;
  city: string;
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
  customRoomCount: string;
  setCustomRoomCount: (v: string) => void;
}

const serviceTypes: ServiceButtonChip[] = [
  { value: "sell", label: "Продать", isActive: false },
  { value: "rent", label: "Сдать в аренду", isActive: false },
];

const estateTypes: EstateButtonChip[] = [
  { value: "apartment", label: "Квартира", isActive: false },
  { value: "house", label: "Дом", isActive: false },
  { value: "townhouse", label: "Таунхаус", isActive: false },
  { value: "cottage", label: "Дача", isActive: false },
  { value: "land", label: "Земельный участок", isActive: false },
  { value: "business", label: "Коммерческая недвижимость", isActive: false },
  { value: "factory", label: "Производственное предприятие", isActive: false },
  { value: "other", label: "Другое", isActive: false },
];

const cityTypes: CityButtonChip[] = [
  { value: "Караганда", label: "Караганда", isActive: false },
  { value: "Темиртау", label: "Темиртау", isActive: false },
  { value: "Абай", label: "Абай", isActive: false },
  { value: "Пришахтинск", label: "Пришахтинск", isActive: false },
  { value: "Сарань", label: "Сарань", isActive: false },
  { value: "Другой", label: "Другой", isActive: false },
];

const roomTypes: RoomButtonChip[] = [
  { value: "1", label: "1", isActive: false },
  { value: "2", label: "2", isActive: false },
  { value: "3", label: "3", isActive: false },
  { value: "4", label: "4", isActive: false },
  { value: "5", label: "5", isActive: false },
  { value: "custom", label: "Другое", isActive: false },
];

export const initialFormState = {
  ownerName: "",
  ownerPhone: "",
  ownerComment: "",
  type: "",
  category: "",
  city: "",
  street: "",
  houseNumber: "",
  apartmentNumber: "",
  price: "",
  exchange: "",
  roomCount: "",
  customRoomCount: "",
  houseSquare: "",
  kitchenSquare: "",
  targetFloor: "",
  totalFloor: "",
  ceilingHeight: "",
  houseBuildingYear: "",
  pledge: "",
  documents: "",
  houseCondition: "",
  houseWallMaterial: "",
  houseRoofMaterial: "",
  furniture: "",
  ethernet: "",
  garage: "",
  toiletCount: "",
  parkingSeat: "",
  apartmentComplexTitle: "",
  plotSquare: "",
  houseType: "",
  electricType: "",
  heatingType: "",
  gasType: "",
  sewerType: "",
  toiletType: "",
  waterType: "",
  hasBasement: false,
  hasMansard: false,
};

export const useSellModuleStore = create<SellModuleStore>((set) => ({
  price: "",
  exchange: "",
  ownerComment: "",
  houseSquare: "",
  kitchenSquare: "",
  roomCount: "",
  targetFloor: "",
  totalFloor: "",
  ceilingHeight: "",
  houseBuildingYear: "",
  pledge: "",
  documents: "",
  houseCondition: "",
  houseWallMaterial: "",
  houseRoofMaterial: "",
  furniture: "",
  ethernet: "",
  garage: "",
  toiletCount: "",
  parkingSeat: "",
  apartmentComplexTitle: "",
  plotSquare: "",
  houseType: "",
  electricType: "",
  heatingType: "",
  gasType: "",
  sewerType: "",
  toiletType: "",
  waterType: "",
  hasBasement: false,
  hasMansard: false,
  customRoomCount: "",
  setCustomRoomCount: (v) => set({ customRoomCount: v }),
  isDrawerOpen: true,
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
