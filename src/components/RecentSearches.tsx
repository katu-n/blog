import React from "react";

type Props = {
  items: string[];
  onSelect: (word: string) => void;
  onDelete: (word: string) => void;
};

const RecentSearches: React.FC<Props> = ({ items, onSelect, onDelete }) => {
  if (items.length === 0) return null;

  return (
    <div className="text-sm text-gray-600 mt-2">
      <span className="mr-2">最近の検索:</span>
      {items.map((word, i) => (
        <span key={i} className="inline-flex items-center mr-2 bg-gray-100 px-2 py-1 rounded">
          <button
            onClick={() => onSelect(word)}
            className="text-blue-500 hover:underline mr-1"
          >
            {word}
          </button>
          <button
            onClick={() => onDelete(word)}
            className="text-red-400 hover:text-red-600 text-xs"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  );
};

export default RecentSearches;
