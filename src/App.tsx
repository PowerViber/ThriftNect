import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Wishlist from "./pages/Wishlist";
import Auction from "./pages/Auction";
import MixMatch from "./pages/MixMatch";

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-[#f7f9fc] antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/mix-match" element={<MixMatch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
