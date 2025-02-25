export const fonts = [
  {
    name: "Dancing Script",
    class: "font-dancing",
    style: "Handwritten",
  },
  {
    name: "Pacifico",
    class: "font-pacifico",
    style: "Handwritten",
  },
  {
    name: "Great Vibes",
    class: "font-great-vibes",
    style: "Handwritten",
  },
  {
    name: "Sacramento",
    class: "font-sacramento",
    style: "Handwritten",
  },
  {
    name: "Satisfy",
    class: "font-satisfy",
    style: "Handwritten",
  },
  {
    name: "Caveat",
    class: "font-caveat",
    style: "Handwritten",
  },
  {
    name: "Mr Dafoe",
    class: "font-mr-dafoe",
    style: "Signature",
  },
  {
    name: "Pinyon Script",
    class: "font-pinyon-script",
    style: "Signature",
  },
  {
    name: "Marck Script",
    class: "font-marck-script",
    style: "Signature",
  },
  {
    name: "Homemade Apple",
    class: "font-homemade-apple",
    style: "Authentic",
  },
  {
    name: "Reenie Beanie",
    class: "font-reenie-beanie",
    style: "Authentic",
  },
  {
    name: "Nothing You Could Do",
    class: "font-nothing-you-could-do",
    style: "Authentic",
  },
  {
    name: "Kalam",
    class: "font-kalam",
    style: "Casual",
  },
  {
    name: "Shadows Into Light",
    class: "font-shadows",
    style: "Casual",
  },
] as const;

export type FontOption = (typeof fonts)[number];
