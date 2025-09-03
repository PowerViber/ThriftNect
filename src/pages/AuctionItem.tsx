import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AUCTIONS } from "../data/auction";

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const AuctionItem: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const item = useMemo(() => AUCTIONS.find(a => a.slug === slug), [slug]);

  // If item not found, simple 404
  if (!item) {
    return (
      <div className="max-w-3xl mx-auto p-6 md:p-12">
        <p className="text-2xl font-bold text-red-600 mb-4">Item tidak ditemukan.</p>
        <button onClick={() => navigate("/auction")} className="px-4 py-2 rounded-full bg-green-main text-white">
          Kembali ke daftar lelang
        </button>
      </div>
    );
  }

  // Local (in-memory) auction state for this item
  const [highestBid, setHighestBid] = useState(item.startingBid);
  const [userBid, setUserBid] = useState("");
  const [bidHistory, setBidHistory] = useState([
    { user: "ThriftNect", bid: item.startingBid, time: "2:00 PM" },
  ]);
  const [showModal, setShowModal] = useState(false);

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    const newBid = parseInt(userBid, 10);
    if (Number.isNaN(newBid)) return;
    if (newBid > highestBid) {
      setHighestBid(newBid);
      setBidHistory(prev => [
        ...prev,
        {
          user: "You",
          bid: newBid,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setUserBid("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <button onClick={() => navigate(-1)} className="mb-6 text-sm text-gray-600 hover:text-green-main">&larr; Kembali</button>

      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl p-8 shadow-lg">
        {/* Product */}
        <div>
          <img src={item.image} alt={item.name} className="w-full h-auto rounded-xl shadow-md" />
          <h1 className="text-3xl font-bold text-green-main mt-4">{item.name}</h1>
          <p className="text-gray-600">{item.description}</p>
        </div>

        {/* Bidding */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-inner">
            <p className="text-xl text-gray-700 font-semibold mb-2">Penawaran Tertinggi Saat Ini</p>
            <p className="text-5xl font-bold text-green-main">{formatIDR(highestBid)}</p>
          </div>

          <form onSubmit={handleBid} className="space-y-4">
            <label htmlFor="bid-amount" className="block text-gray-700 font-semibold">Tulis Penawaran Anda:</label>
            <input
              type="number"
              id="bid-amount"
              value={userBid}
              onChange={(e) => setUserBid(e.target.value)}
              placeholder="Contoh: 300000"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-main"
              required
            />
            <button type="submit" className="w-full bg-green-main text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-opacity duration-300">
              Ajukan Penawaran
            </button>
          </form>

          {/* History */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold text-green-main mb-4">Riwayat Penawaran</h3>
            <ul className="space-y-2 max-h-40 overflow-y-auto">
              {bidHistory.map((bid, i) => (
                <li key={i} className="flex justify-between items-center text-gray-600">
                  <span className="font-medium">{bid.user}</span>
                  <span className="text-sm">{formatIDR(bid.bid)}</span>
                  <span className="text-xs text-gray-400">{bid.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div role="dialog" aria-modal="true" className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm mx-auto">
            <p className="text-lg font-semibold text-red-600 mb-4">Peringatan</p>
            <p className="text-gray-700 mb-6">Penawaran harus lebih tinggi dari penawaran tertinggi saat ini.</p>
            <button onClick={() => setShowModal(false)} className="bg-green-main text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90">
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuctionItem;
