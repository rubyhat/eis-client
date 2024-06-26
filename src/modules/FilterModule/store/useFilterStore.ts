import { create } from "zustand";
import {
  CategoryType,
  DocumentsType,
  ExchangeType,
  HouseConditionType,
  HouseWallMaterialType,
  MortgageType,
  PledgeType,
  ServiceType,
} from "../../CatalogModule/store";

export interface FilterState {
  city: string;
  cityRegion: string;
  roomCount: string;
  priceStart: string;
  priceEnd: string;
  houseSquare: string;
  houseSquareEnd: string;
  kitchenSquare: string;
  houseBuildingYear: string;
  notFirstFloor: boolean;
  notLastFloor: boolean;
  targetFloor: number | null;
  totalFloor: number | null;
  type: ServiceType | "";
  mortgage: MortgageType | "";
  exchange: ExchangeType | "";
  category: CategoryType | "";
  houseWallMaterial: HouseWallMaterialType | "";
  houseCondition: HouseConditionType | "";
  pledge: PledgeType | "";
  documents: DocumentsType | "";
}

export const initialFilterState: FilterState = {
  city: "",
  cityRegion: "",
  category: "",
  houseWallMaterial: "",
  houseCondition: "",
  roomCount: "",
  priceStart: "",
  priceEnd: "",
  houseSquare: "",
  houseSquareEnd: "",
  kitchenSquare: "",
  houseBuildingYear: "",
  pledge: "",
  documents: "",
  mortgage: "",
  exchange: "",
  type: "",
  targetFloor: null,
  totalFloor: null,
  notFirstFloor: false,
  notLastFloor: false,
};

export interface FilterStore {
  isMobileFilterModalOpen: boolean;
  filterState: FilterState;
  setIsMobileFilterModalOpen: (v: boolean) => void;
  setFilterState: (v: FilterState) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  isMobileFilterModalOpen: false,
  filterState: initialFilterState,
  setIsMobileFilterModalOpen: (v) => set({ isMobileFilterModalOpen: v }),
  setFilterState: (v: FilterState) => set({ filterState: v }),
}));
