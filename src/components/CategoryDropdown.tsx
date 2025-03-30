import React, { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import * as FaIcons from "react-icons/fa6";

type Category = {
  id: number;
  name: string;
  count: number;
};

const CategoryDropdown: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const match = location.pathname.match(/\/category\/(\d+)/);
  const currentCategoryId = match ? Number(match[1]) : null;

  useEffect(() => {
    fetch("http://raise-react-skills.local/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // メニュー外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-800 rounded hover:bg-blue-500 hover:text-white transition"
        onClick={() => setOpen(!open)}
      >
         {FaChevronDown({})}
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow z-50">
          {categories.map((cat) => {
            const isActive = cat.id === currentCategoryId;
            return (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 text-sm ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat.name} <span className="text-xs text-gray-500">({cat.count})</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
