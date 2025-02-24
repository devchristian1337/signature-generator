export const fonts = [
  {
    name: "Dancing Script",
    class: "font-dancing",
    style: "Handwritten",
  },
] as const;

export type FontOption = (typeof fonts)[number];
