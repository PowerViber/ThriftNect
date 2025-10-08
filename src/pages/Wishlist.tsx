import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AUCTIONS } from "../data/auction"; 

type WishlistItem = {
  id: number;
  name: string;
  price?: number;
  image: string;
  slug?: string;
};

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Oversized Tee",
      price: 180000,
      image: "https://placehold.co/400x400/d1d5db/ffffff?text=Oversized+Tee",
      slug: "oversized-tee",
    },
    {
      id: 2,
      name: "Vintage Graphic Tee",
      price: 95000,
      image: "https://placehold.co/400x400/d1d5db/ffffff?text=Graphic+Tee",
    },
  ]);

  const [newItemName, setNewItemName] = useState("");
  const [newItemImage, setNewItemImage] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName) return;

    // check if it exists in auction
    const found = AUCTIONS.find(
      (a) => a.name.toLowerCase() === newItemName.toLowerCase()
    );

    const newItem: WishlistItem = {
      id: Date.now(),
      name: newItemName,
      price: newItemPrice ? parseInt(newItemPrice) : undefined,
      image:
        newItemImage ||
        "https://placehold.co/400x400/cccccc/ffffff?text=Wishlist+Item",
      slug: found?.slug,
    };

    setWishlistItems([...wishlistItems, newItem]);
    setNewItemName("");
    setNewItemImage("");
    setNewItemPrice("");
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold text-green-main mb-6">Wishlist</h1>
      <p className="text-gray-700 mb-8">
        Di sini kamu bisa melihat dan mengatur barang favoritmu.
      </p>

      {/* Add new item form */}
      <form onSubmit={addItem} className="mb-8 bg-white p-6 rounded-2xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-green-main">Tambah Item Baru</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Nama Item"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300"
            required
          />
          <input
            type="number"
            placeholder="Harga (opsional)"
            value={newItemPrice}
            onChange={(e) => setNewItemPrice(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300"
          />
          <input
            type="text"
            placeholder="URL Gambar (opsional)"
            value={newItemImage}
            onChange={(e) => setNewItemImage(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-green-main text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90"
        >
          Tambah ke Wishlist
        </button>
      </form>

      {wishlistItems.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                {item.price && (
                  <p className="text-green-main font-bold">
                    Rp {item.price.toLocaleString()}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {item.slug ? (
                    <Link
                      to={`/auction/${item.slug}`}
                      className="flex-1 bg-green-main text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-opacity-90 text-center"
                    >
                      Lihat di Auction
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="flex-1 bg-gray-200 text-gray-500 px-4 py-2 rounded-full font-semibold text-sm cursor-not-allowed"
                    >
                      Tidak tersedia di Auction
                    </button>
                  )}

                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-300"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-8 text-center text-gray-500 shadow-md">
          <p className="text-xl font-semibold">Wishlist Anda kosong.</p>
          <p className="mt-2">
            Mulai jelajahi produk dan tambahkan item favoritmu!
          </p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
