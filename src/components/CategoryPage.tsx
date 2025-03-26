import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import PostGrid from "../components/PostGrid";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import SearchSection from "../components/SearchSection";

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: [{ source_url: string }];
  };
};

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const keyword = searchParams.get("s") || "";

  const [posts, setPosts] = useState<Post[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    const postURL = `http://raise-react-skills.local/wp-json/wp/v2/posts?_embed&categories=${id}&page=${page}&search=${encodeURIComponent(keyword)}`;
    const categoryURL = `http://raise-react-skills.local/wp-json/wp/v2/categories/${id}`;

    Promise.all([
      fetch(postURL).then((res) => {
        const total = res.headers.get("X-WP-TotalPages");
        if (total) setTotalPages(Number(total));
        return res.json();
      }),
      fetch(categoryURL).then((res) => res.json()),
    ])
      .then(([postData, categoryData]) => {
        setPosts(postData);
        setCategoryName(categoryData.name);
      })
      .catch((err) => console.error("カテゴリ取得エラー:", err))
      .finally(() => setIsLoading(false));
  }, [id, page, keyword]);

  const handleSearch = (kw: string) => {
    setSearchParams({ s: kw, page: "1" }); // ← クエリに追加
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({ s: keyword, page: newPage.toString() });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <SearchSection onSearch={handleSearch} />
      <h1 className="text-3xl font-bold mb-4">{categoryName} の記事</h1>
      {isLoading ? <Loading /> : <PostGrid posts={posts} />}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CategoryPage;
