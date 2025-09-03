import React, { useMemo, useState } from "react";
import { MIXMATCH_ITEMS, MIXMATCH_MODEL } from "../data/mixmatchItems";
import type { MixMatchItem } from "../data/mixmatchItems";

const MixMatch: React.FC = () => {
  const tops = useMemo(() => MIXMATCH_ITEMS.filter(i => i.category === "top"), []);
  const bottoms = useMemo(() => MIXMATCH_ITEMS.filter(i => i.category === "bottom"), []);
  const shoes = useMemo(() => MIXMATCH_ITEMS.filter(i => i.category === "shoes"), []);

  const [selectedTop, setSelectedTop] = useState<MixMatchItem>(tops[0]);
  const [selectedBottom, setSelectedBottom] = useState<MixMatchItem>(bottoms[0]);
  const [selectedShoes, setSelectedShoes] = useState<MixMatchItem>(shoes[0]);
  const [showSaved, setShowSaved] = useState(false);

  const L = MIXMATCH_MODEL.layers;

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold text-green-main mb-6">Mix & Match</h1>
      <p className="text-gray-700 mb-8">Coba padukan berbagai outfit untuk menciptakan gaya unikmu.</p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Composited Preview */}
        <div className="relative w-full aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center">
          {/* Base model */}
          <img
            src={MIXMATCH_MODEL.image}
            alt="Base model"
            className="absolute z-0 w-full h-full object-contain pointer-events-none select-none"
          />

          {/* TOP layer */}
          {selectedTop && (
            <img
              src={selectedTop.image}
              alt={selectedTop.name}
              className="absolute z-10 object-contain pointer-events-none select-none"
              style={L.top}
            />
          )}

          {/* BOTTOM layer */}
          {selectedBottom && (
            <img
              src={selectedBottom.image}
              alt={selectedBottom.name}
              className="absolute z-20 object-contain pointer-events-none select-none"
              style={L.bottom}
            />
          )}

          {/* SHOES layer */}
          {selectedShoes && (
            <img
              src={selectedShoes.image}
              alt={selectedShoes.name}
              className="absolute z-30 object-contain pointer-events-none select-none"
              style={L.shoes}
            />
          )}
        </div>

        {/* Pickers */}
        <div className="space-y-8">
          {/* Top */}
          <div>
            <h3 className="text-2xl font-bold text-green-main mb-4">Atasan</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {tops.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedTop(item)}
                  className={`rounded-2xl p-3 shadow-md border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    selectedTop.id === item.id ? "border-green-main ring-green-main" : "border-gray-200"
                  }`}
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <p className="text-sm text-center mt-2">{item.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div>
            <h3 className="text-2xl font-bold text-green-main mb-4">Bawahan</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {bottoms.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedBottom(item)}
                  className={`rounded-2xl p-3 shadow-md border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    selectedBottom.id === item.id ? "border-green-main ring-green-main" : "border-gray-200"
                  }`}
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <p className="text-sm text-center mt-2">{item.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Shoes */}
          <div>
            <h3 className="text-2xl font-bold text-green-main mb-4">Sepatu</h3>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {shoes.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedShoes(item)}
                  className={`rounded-2xl p-3 shadow-md border-2 transition-all duration-300 focus:outline-none focus:ring-2 ${
                    selectedShoes.id === item.id ? "border-green-main ring-green-main" : "border-gray-200"
                  }`}
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <p className="text-sm text-center mt-2">{item.name}</p>
                </button>
              ))}
            </div>
          </div>

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
            <button onClick={() => setShowSaved(false)} className="bg-green-main text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MixMatch;
