import { create } from "zustand";

export type ActiveSortType = "new" | "cheap" | "rich";

export interface CatalogStore {
  activeSortType: ActiveSortType;
  setActiveSortType: (v: ActiveSortType) => void;
}

export const useCatalogStore = create<CatalogStore>((set) => ({
  activeSortType: "new",
  setActiveSortType: (v) => set(() => ({ activeSortType: v })),
}));
