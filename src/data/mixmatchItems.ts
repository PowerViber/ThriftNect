export type MixMatchCategory = "top" | "bottom" | "shoes";

export type MixMatchItem = {
  id: number;
  name: string;
  image: string;         
  category: MixMatchCategory;
};

const fallbackModel =
  "https://placehold.co/600x800/ffffff/ffffff?text=Your+Model";

export const MIXMATCH_MODEL = {
  image: fallbackModel,
  // default placement per layer; tweak as your cutouts change
  layers: {
    top:    { top: "8%",  left: "50%", transform: "translateX(-50%)", height: "38%" },
    bottom: { top: "42%", left: "50%", transform: "translateX(-50%)", height: "38%" },
    shoes:  { bottom: "4%", left: "50%", transform: "translateX(-50%)", height: "18%" },
  } as const,
};

export const MIXMATCH_ITEMS: MixMatchItem[] = [
  // TOPS
  { id: 1, name: "White T-Shirt", image: "/src/assets/items/white_tee.png", category: "top" },
  { id: 2, name: "Blue Shirt",    image: "https://placehold.co/200x200/60a5fa/ffffff?text=Shirt",   category: "top" },
  { id: 3, name: "Striped Sweater", image: "https://placehold.co/200x200/cbd5e1/ffffff?text=Sweater", category: "top" },

  // BOTTOMS
  { id: 4, name: "Blue Jeans",  image: "/src/assets/items/blue_jeans.png", category: "bottom" },
  { id: 5, name: "Black Pants", image: "https://placehold.co/200x200/1f2937/ffffff?text=Pants", category: "bottom" },
  { id: 6, name: "Khaki Shorts", image: "https://placehold.co/200x200/e5e7eb/ffffff?text=Shorts", category: "bottom" },

  // SHOES
  { id: 7, name: "White Sneakers", image: "https://placehold.co/200x200/f3f4f6/ffffff?text=Sneakers", category: "shoes" },
  { id: 8, name: "Brown Loafers",  image: "https://placehold.co/200x200/8b5134/ffffff?text=Loafers",  category: "shoes" },
  { id: 9, name: "Black Boots",    image: "https://placehold.co/200x200/374151/ffffff?text=Boots",    category: "shoes" },
];
