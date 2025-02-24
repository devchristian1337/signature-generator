
import { create } from "zustand";
import type { FontOption } from "@/lib/fonts";

interface SignatureState {
  name: string;
  font: FontOption;
  color: string;
  size: number;
  alignment: "left" | "center" | "right";
  isBold: boolean;
  isItalic: boolean;
  setName: (name: string) => void;
  setFont: (font: FontOption) => void;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setAlignment: (alignment: "left" | "center" | "right") => void;
  setIsBold: (isBold: boolean) => void;
  setIsItalic: (isItalic: boolean) => void;
}

export const useSignature = create<SignatureState>((set) => ({
  name: "",
  font: {
    name: "Dancing Script",
    class: "font-dancing",
    style: "Handwritten",
  },
  color: "#1a1a1a",
  size: 16,
  alignment: "left",
  isBold: false,
  isItalic: false,
  setName: (name) => set({ name }),
  setFont: (font) => set({ font }),
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setAlignment: (alignment) => set({ alignment }),
  setIsBold: (isBold) => set({ isBold }),
  setIsItalic: (isItalic) => set({ isItalic }),
}));
