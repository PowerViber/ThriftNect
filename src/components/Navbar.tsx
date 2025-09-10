import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  const user = loggedInUser ? JSON.parse(loggedInUser) : null;

  return (
    <header className="bg-white shadow-md rounded-b-xl p-4 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Link to="/"><img src="/src/assets/logo.png" alt="ThriftNect Logo" className="w-16 h-12" /></Link>
      </div>

      <nav className="hidden md:flex space-x-12 text-gray-700 font-medium">
        <Link to="/" className="hover:text-green-main transition-colors duration-300">Beranda</Link>
        <Link to="/mix-match" className="hover:text-green-main transition-colors duration-300">Mix & Match</Link>
        <Link to="/auction" className="hover:text-green-main transition-colors duration-300">Auction</Link>
        <Link to="/wishlist" className="hover:text-green-main transition-colors duration-300">Wishlist</Link>
      </nav>

      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-4">
            {user && user.profilePic ? (
              <Link to="/profile">
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              </Link>
            ) : (
              <Link to="/profile">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">P</span>
                </div>
              </Link>
            )}
          </div>
        ) : (
          <div className="space-x-2">
            <Link to="/login" className="bg-green-main text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-opacity duration-300 hidden md:block">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
