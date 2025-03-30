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

  const match = location.pathname.match(/\/category\/(\d+)/);
  const currentCategoryId = match ? Number(match[1]) : null;

  useEffect(() => {
    fetch("http://raise-react-skills.local/wp-json/wp/v2/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("カテゴリ取得エラー:", err));
  }, []);

  const sortedCategories = categories
    .slice()
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  // ✅ データ未取得中は何も表示しない（またはローディングでもOK）
  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {sortedCategories.map((cat) => {
        const isActive = cat.id === currentCategoryId;
        return (
          <Link
            key={cat.id}
            to={`/category/${cat.id}`}
            className={`block px-4 py-2 text-sm rounded ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat.name}
            <span className="text-xs text-gray-500 ml-1">({cat.count})</span>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryLinks;
