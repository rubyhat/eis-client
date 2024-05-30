import { create } from "zustand";

interface SellModuleStore {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (v: boolean) => void;
}

export const useSellModuleStore = create<SellModuleStore>((set) => ({
  isDrawerOpen: false,
  setIsDrawerOpen: (v) => set({ isDrawerOpen: v }),
}));
