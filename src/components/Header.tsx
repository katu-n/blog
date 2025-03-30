import React from "react";
import { Link } from "react-router-dom";
// import CategoryLinks from "./CategoryLinks";
import CategoryDropdown from "./CategoryDropdown";
import CategoryLinks from "./CategoryLinks";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">
          Katu-Script          
        </Link>
        <CategoryLinks />
      </div>
    </header>
  );
};

export default Header;
