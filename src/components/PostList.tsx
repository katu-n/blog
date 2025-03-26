import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchSection from "./SearchSection";
import PostGrid from "./PostGrid";
import Loading from "./Loading";
import Pagination from "./Pagination";

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: [{ source_url: string }];
  };
};

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("s") || "";
  const page = Number(searchParams.get("page") || "1");

  const fetchPosts = (query = "", page = 1) => {
    setIsLoading(true);
    const baseURL =
      "http://raise-react-skills.local/wp-json/wp/v2/posts?_embed";
    const url = `${baseURL}&search=${encodeURIComponent(query)}&page=${page}`;

    fetch(url)
      .then((res) => {
        const total = res.headers.get("X-WP-TotalPages");
        if (total) setTotalPages(Number(total));
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => console.error("APIエラー:", err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchPosts(keyword, page);
  }, [keyword, page]);

  const handleSearch = (word: string) => {
    setSearchParams({ s: word, page: "1" });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({ s: keyword, page: page.toString() });
  };

  return (
    <div className="p-4">
      <SearchSection onSearch={handleSearch} />
      {isLoading ? <Loading /> : <PostGrid posts={posts} />}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PostList;
