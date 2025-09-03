import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="bg-[#f7f9fc] antialiased">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default App;
