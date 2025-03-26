import React from "react";
import { Link } from "react-router-dom";
import CategoryLinks from "./CategoryLinks";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 mb-2 md:mb-0">
          My Tech Blog
        </Link>
        <CategoryLinks />
        <Link to="/privacy" className="text-sm text-gray-600 hover:underline">
          プライバシーポリシー
        </Link>
      </div>
    </header>
  );
};

export default Header;
