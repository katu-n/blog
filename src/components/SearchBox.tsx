import React, { useState } from "react";

type Props = {
  onSearch: (keyword: string) => void;
};

const SearchBox: React.FC<Props> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    onSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
      <input
        type="text"
        placeholder="記事を検索"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="flex-1 px-4 py-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        検索
      </button>
    </form>
  );
};

export default SearchBox;
