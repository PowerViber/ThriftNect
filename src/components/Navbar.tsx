import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md rounded-b-xl p-4 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/logo.png" alt="ThriftNect Logo" className="w-16 h-12" />
      </div>

      <nav className="hidden md:flex space-x-12 text-gray-700 font-medium">
        <Link to="/" className="hover:text-green-main transition-colors duration-300">Beranda</Link>
        <Link to="/mix-match" className="hover:text-green-main transition-colors duration-300">Mix & Match</Link>
        <Link to="/auction" className="hover:text-green-main transition-colors duration-300">Auction</Link>
        <Link to="/wishlist" className="hover:text-green-main transition-colors duration-300">Wishlist</Link>
      </nav>

      <button className="bg-green-main text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-opacity duration-300 hidden md:block">
        Masuk
      </button>

      <button className="md:hidden" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
