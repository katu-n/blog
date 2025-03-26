import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RecentSearches from "./RecentSearches";
import SearchBox from "./SearchBox";

const STORAGE_KEY = "recentSearches";
const MAX_RECENT = 5;

type Props = {
  onSearch: (keyword: string) => void;
};

const SearchSection: React.FC<Props> = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const keyword = searchParams.get("s") || "";

  // ローカルストレージから履歴取得
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // クエリが変わったときに自動検索（戻る・進むにも対応）
  useEffect(() => {
    if (keyword) {
      updateRecentSearches(keyword);
    }
    onSearch(keyword);
  }, [keyword]);

  const updateRecentSearches = (keyword: string) => {
    let updated = [keyword, ...recentSearches.filter((w) => w !== keyword)];
    if (updated.length > MAX_RECENT) {
      updated = updated.slice(0, MAX_RECENT);
    }
    setRecentSearches(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const handleSearch = (keyword: string) => {
    if (!keyword.trim()) return;
    setSearchParams({ s: keyword });
  };

  const handleDelete = (word: string) => {
    const updated = recentSearches.filter((w) => w !== word);
    setRecentSearches(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <div className="mb-6">
      <SearchBox onSearch={handleSearch} />
      <RecentSearches
        items={recentSearches}
        onSelect={handleSearch}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default SearchSection;
