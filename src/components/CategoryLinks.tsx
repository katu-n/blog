import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Category = {
  id: number;
  name: string;
  count: number;
};

const CategoryLinks: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const location = useLocation();

  // 現在のカテゴリIDをパスから取得
  const match = location.pathname.match(/\/category\/(\d+)/);
  const currentCategoryId = match ? Number(match[1]) : null;

  useEffect(() => {
    fetch("http://raise-react-skills.local/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat.id === currentCategoryId;

        return (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {cat.name} <span className="ml-1 text-xs text-gray-500">({cat.count})</span>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryLinks;
