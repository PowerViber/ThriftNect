import { itemsData } from './itemsData'; 

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
  layers: {
    top: {
      top: "8%",
      left: "50%",
      transform: "translateX(-50%)",
      height: "150px", // Fixed height for top item
    },
    bottom: {
      top: "45%",
      left: "50%",
      transform: "translateX(-50%)",
      height: "200px", // Fixed height for bottom item
    },
    shoes: {
      bottom: "4%",
      left: "50%",
      transform: "translateX(-50%)",
      height: "100px", // Fixed height for shoes item
    },
  } as const,
};

export const MIXMATCH_ITEMS: MixMatchItem[] = [
  ...itemsData.map((item, index) => {
    let category: MixMatchCategory;
    if (item.name.toLowerCase().includes('tee') || 
      item.name.toLowerCase().includes('jacket') || item.name.toLowerCase().includes('sweater') ||
      item.name.toLowerCase().includes('shirt')) {
      category = 'top';
    } else if (item.name.toLowerCase().includes('jeans') || item.name.toLowerCase().includes('pants') || item.name.toLowerCase().includes('shorts')) {
      category = 'bottom';
    } else {
      category = 'shoes'; 
    }

    return {
      id: index + 1, 
      name: item.name,
      image: `/src/assets/items/${item.image}`,
      category: category,
    };
  })
];
