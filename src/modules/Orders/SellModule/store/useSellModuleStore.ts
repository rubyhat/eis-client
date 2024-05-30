import { create } from "zustand";

interface SellModuleStore {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (v: boolean) => void;
  step: number;
  setStep: (v: number) => void;
}

export const useSellModuleStore = create<SellModuleStore>((set) => ({
  isDrawerOpen: true,
  setIsDrawerOpen: (v) => set({ isDrawerOpen: v }),
  step: 1,
  setStep: (v) => set({ step: v }),
}));
