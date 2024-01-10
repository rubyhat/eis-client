import { create } from "zustand";
import { initialState } from "./initialState";

export interface FaqItem {
  title: string;
  text: string;
  subtitle?: string;
}

export interface HelpStore {
  faqItems: FaqItem[];
}

export const useHelpStore = create<HelpStore>(() => ({
  ...initialState,
}));
