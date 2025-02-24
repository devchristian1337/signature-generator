
export const fonts = [
  {
    name: "Playfair Display",
    class: "font-playfair",
    style: "Elegant",
  },
  {
    name: "Cormorant",
    class: "font-cormorant",
    style: "Classic",
  },
  {
    name: "Dancing Script",
    class: "font-dancing",
    style: "Handwritten",
  },
] as const;

export type FontOption = (typeof fonts)[number];
