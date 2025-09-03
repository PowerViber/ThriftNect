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
    image: "https://placehold.co/600x600/1a4f4d/ffffff?text=Leather+Jacket",
    description: "Jaket kulit vintage asli, kondisi sangat baik.",
    startingBid: 250_000,
  },
  {
    id: 2,
    slug: "oversized-denim-jacket",
    name: "Oversized Denim Jacket",
    image: "https://placehold.co/600x600/4b5563/ffffff?text=Denim+Jacket",
    description: "Denim tebal, potongan oversized, cocok untuk streetwear.",
    startingBid: 180_000,
  },
  {
    id: 3,
    slug: "rare-band-tee-1998",
    name: "Rare Band Tee (1998)",
    image: "https://placehold.co/600x600/0f172a/ffffff?text=Band+Tee",
    description: "Kaos band langka tahun 1998, kondisi kolektor.",
    startingBid: 320_000,
  },
];
