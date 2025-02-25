import { create } from "zustand";
import type { FontOption } from "@/lib/fonts";

interface SignatureState {
  name: string;
  font: FontOption;
  color: string;
  size: number;
  isBold: boolean;
  isItalic: boolean;
  angle: number;
  background: {
    enabled: boolean;
    color: string;
  };
  setName: (name: string) => void;
  setFont: (font: FontOption) => void;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setIsBold: (isBold: boolean) => void;
  setIsItalic: (isItalic: boolean) => void;
  setAngle: (angle: number) => void;
  setBackground: (background: { enabled: boolean; color: string }) => void;
  toggleBackgroundEnabled: () => void;
  setBackgroundColor: (color: string) => void;
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
  isBold: false,
  isItalic: false,
  angle: 0,
  background: {
    enabled: true,
    color: "#ffffff",
  },
  setName: (name) => set({ name }),
  setFont: (font) => set({ font }),
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setIsBold: (isBold) => set({ isBold }),
  setIsItalic: (isItalic) => set({ isItalic }),
  setAngle: (angle) => set({ angle }),
  setBackground: (background) => set({ background }),
  toggleBackgroundEnabled: () =>
    set((state) => ({
      background: {
        ...state.background,
        enabled: !state.background.enabled,
      },
    })),
  setBackgroundColor: (color) =>
    set((state) => ({
      background: {
        ...state.background,
        color,
      },
    })),
}));
