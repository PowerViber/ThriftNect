import React from "react";
import { Link } from "react-router-dom";
import { AUCTIONS } from "../data/auction";

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

const AuctionList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12">
      <h1 className="text-4xl font-bold text-green-main mb-6">Auction</h1>
      <p className="text-gray-700 mb-8">Pilih item lelang lalu ajukan penawaranmu.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AUCTIONS.map((item) => (
          <Link
            key={item.id}
            to={`/auction/${item.slug}`}
            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
            <div className="p-4 space-y-1">
              <h3 className="font-bold text-lg text-gray-800 group-hover:text-green-main transition-colors">
                {item.name}
              </h3>
              <p className="text-gray-600 line-clamp-2">{item.description}</p>
              <p className="text-sm text-gray-500 mt-2">Mulai dari: <span className="font-semibold">{formatIDR(item.startingBid)}</span></p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuctionList;
