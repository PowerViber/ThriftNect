// src/pages/MixMatch.tsx
import React, { useState } from "react";

const MixMatch: React.FC = () => {
  const items = {
    top: [
      { id: 1, name: "White T-Shirt",    image: "https://placehold.co/200x200/cccccc/ffffff?text=Tee" },
      { id: 2, name: "Blue Shirt",       image: "https://placehold.co/200x200/60a5fa/ffffff?text=Shirt" },
      { id: 3, name: "Striped Sweater",  image: "https://placehold.co/200x200/cbd5e1/ffffff?text=Sweater" },
    ],
    bottom: [
      { id: 1, name: "Blue Jeans",   image: "https://placehold.co/200x200/3b82f6/ffffff?text=Jeans" },
      { id: 2, name: "Black Pants",  image: "https://placehold.co/200x200/1f2937/ffffff?text=Pants" },
      { id: 3, name: "Khaki Shorts", image: "https://placehold.co/200x200/e5e7eb/ffffff?text=Shorts" },
    ],
    shoes: [
      { id: 1, name: "Gray Sneakers", image: "https://placehold.co/200x200/949494/ffffff?text=Sneakers" },
      { id: 2, name: "Brown Loafers",  image: "https://placehold.co/200x200/8b5134/ffffff?text=Loafers" },
      { id: 3, name: "Black Boots",    image: "https://placehold.co/200x200/374151/ffffff?text=Boots" },
    ],
  };

  const [selectedTop, setSelectedTop] = useState(items.top[0]);
  const [selectedBottom, setSelectedBottom] = useState(items.bottom[0]);
  const [selectedShoes, setSelectedShoes] = useState(items.shoes[0]);
  const [showSaved, setShowSaved] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold text-green-main mb-6">Mix & Match</h1>
      <p className="text-gray-700 mb-8">Coba padukan berbagai outfit untuk menciptakan gaya unikmu.</p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Preview */}
        <div className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
          {/* base mannequin */}
          <img
            src="https://placehold.co/600x800/f7f9fc/ffffff?text=Model"
            alt="Base model"
            className="absolute z-0 w-full h-full object-contain pointer-events-none select-none"
          />

          {/* TOP — placed upper area */}
          {selectedTop && (
            <img
              src={selectedTop.image}
              alt={selectedTop.name}
              className="absolute z-10 object-contain pointer-events-none select-none"
              style={{
                top: "8%",
                left: "50%",
                transform: "translateX(-50%)",
                height: "38%",  // adjust to fit your assets
              }}
            />
          )}

          {/* BOTTOM — placed mid-lower area */}
          {selectedBottom && (
            <img
              src={selectedBottom.image}
              alt={selectedBottom.name}
              className="absolute z-20 object-contain pointer-events-none select-none"
              style={{
                top: "42%",
                left: "50%",
                transform: "translateX(-50%)",
                height: "38%",
              }}
            />
          )}

          {/* SHOES — placed at bottom */}
          {selectedShoes && (
            <img
              src={selectedShoes.image}
              alt={selectedShoes.name}
              className="absolute z-30 object-contain pointer-events-none select-none"
              style={{
                bottom: "4%",
                left: "50%",
                transform: "translateX(-50%)",
                height: "18%",
              }}
            />
          )}
        </div>


        {/* Pickers */}
        <div className="space-y-8">
          {([
            { label: "Atasan",  data: items.top,    selected: selectedTop,    setter: setSelectedTop    },
            { label: "Bawahan", data: items.bottom, selected: selectedBottom, setter: setSelectedBottom },
            { label: "Sepatu",  data: items.shoes,  selected: selectedShoes,  setter: setSelectedShoes  },
          ] as const).map((group) => (
            <div key={group.label}>
              <h3 className="text-2xl font-bold text-green-main mb-4">{group.label}</h3>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {group.data.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => group.setter(item)}
                    className={`cursor-pointer rounded-2xl p-3 shadow-md border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
                      group.selected.id === item.id ? "border-green-main ring-green-main" : "border-gray-200"
                    }`}
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                    <p className="text-sm text-center mt-2">{item.name}</p>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            className="w-full bg-green-main text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-opacity duration-300"
            onClick={() => setShowSaved(true)}
          >
            Simpan Outfit
          </button>
        </div>
      </div>

      {/* Saved modal */}
      {showSaved && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div role="dialog" aria-modal="true" className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm mx-auto">
            <p className="text-lg font-semibold text-green-600 mb-4">Outfit Tersimpan</p>
            <p className="text-gray-700 mb-6">Outfit Anda telah berhasil disimpan!</p>
            <button onClick={() => setShowSaved(false)} className="bg-green-main text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MixMatch;