import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-md rounded-b-xl p-4 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#1a4f4d" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.102a4.918 4.918 0 011.059 1.157L14.754 9H18c2.209 0 4 1.791 4 4s-1.791 4-4 4h-3.246l-3.935 4.741c-.266.32-.619.558-.999.684a2.91 2.91 0 01-1.077-.101c-.378-.126-.732-.364-.999-.684L2.754 13H1.5c-.828 0-1.5-.672-1.5-1.5S.672 10 1.5 10H5.246l3.935-4.741c.266-.32.619-.558.999-.684a2.91 2.91 0 011.077.101c.378.126.732.364.999.684l-1.059-1.157zM18 13v-2.5h-2.5V13H18z" />
        </svg>
        <span className="font-bold text-xl text-green-main">ThriftNect</span>
      </div>

      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#hero" className="hover:text-green-main transition-colors duration-300">Beranda</a>
        <a href="#why-choose" className="hover:text-green-main transition-colors duration-300">Tentang Kami</a>
        <a href="#features" className="hover:text-green-main transition-colors duration-300">Fitur</a>
        <a href="#testimonials" className="hover:text-green-main transition-colors duration-300">Kontak</a>
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
