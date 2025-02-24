
import { create } from "zustand";
import type { FontOption } from "@/lib/fonts";

interface SignatureState {
  name: string;
  title: string;
  company: string;
  font: FontOption;
  color: string;
  size: number;
  alignment: "left" | "center" | "right";
  setName: (name: string) => void;
  setTitle: (title: string) => void;
  setCompany: (company: string) => void;
  setFont: (font: FontOption) => void;
  setColor: (color: string) => void;
  setSize: (size: number) => void;
  setAlignment: (alignment: "left" | "center" | "right") => void;
}

export const useSignature = create<SignatureState>((set) => ({
  name: "",
  title: "",
  company: "",
  font: {
    name: "Playfair Display",
    class: "font-playfair",
    style: "Elegant",
  },
  color: "#1a1a1a",
  size: 16,
  alignment: "left",
  setName: (name) => set({ name }),
  setTitle: (title) => set({ title }),
  setCompany: (company) => set({ company }),
  setFont: (font) => set({ font }),
  setColor: (color) => set({ color }),
  setSize: (size) => set({ size }),
  setAlignment: (alignment) => set({ alignment }),
}));
