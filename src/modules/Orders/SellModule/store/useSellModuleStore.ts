import { create } from "zustand";
import { CategoryType, ServiceType } from "../../../CatalogModule/store";

export const initialFormState = {
  ownerName: "",
  ownerPhone: "",
  type: "",
  category: "",
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

interface SellModuleStore {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (v: boolean) => void;
  step: number;
  setStep: (v: number) => void;
  serviceTypes: ServiceButtonChip[];
  setActiveServiceType: (value: ServiceType) => void;
  estateTypes: EstateButtonChip[];
  setActiveEstateType: (value: CategoryType) => void;
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

export const useSellModuleStore = create<SellModuleStore>((set) => ({
  isDrawerOpen: true,
  setIsDrawerOpen: (v) => set({ isDrawerOpen: v }),
  step: 2,
  setStep: (v) => set({ step: v }),
  serviceTypes: serviceTypes,
  setActiveServiceType: (value) =>
    set((state) => ({
      serviceTypes: state.serviceTypes.map((service) => ({
        ...service,
        isActive: service.value === value,
      })),
    })),
  estateTypes: estateTypes,
  setActiveEstateType: (value) =>
    set((state) => ({
      estateTypes: state.estateTypes.map((estate) => ({
        ...estate,
        isActive: estate.value === value,
      })),
    })),
}));
