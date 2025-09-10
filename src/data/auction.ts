import { itemsData } from './itemsData'; 

export type AuctionItem = {
  id: number;
  slug: string;          
  name: string;
  image: string;
  description: string;
  startingBid: number;   // IDR
};

export const AUCTIONS: AuctionItem[] = [
  {
    id: 1,
    slug: "vintage-leather-jacket",
    name: "Vintage Leather Jacket",
    image: `/src/assets/items/${itemsData.find(item => item.name === "Vintage Jacket")?.image}`,
    description: "Jaket kulit vintage langka dalam kondisi sangat baik. Wajib dimiliki oleh setiap kolektor fashion.",
    startingBid: 250_000,
  },
  {
    id: 2,
    slug: "oversized-tee",
    name: "Oversized Tee",
    image: `/src/assets/items/${itemsData.find(item => item.name === "Oversized Tee")?.image || "https://placehold.co/600x600/4b5563/ffffff?text=Denim+Jacket"}`,
    description: "T-shirt oversized yang nyaman dan stylish, sempurna untuk tampilan streetwear kasual. Esensial untuk lemari pakaian.",
    startingBid: 180_000,
  },
  {
    id: 3,
    slug: "cargo-pants",
    name: "Cargo Pants",
    image: `/src/assets/items/${itemsData.find(item => item.name === "Cargo Pants")?.image || "https://placehold.co/600x600/0f172a/ffffff?text=Band+Tee"}`,
    description: "Celana cargo dengan banyak kantong, cocok untuk gaya kasual.",
    startingBid: 320_000,
  },
];
