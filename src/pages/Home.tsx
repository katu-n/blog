// src/pages/Home.tsx

import React from "react";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">React × WordPress Blog</h1>
        <p className="text-gray-600">ようこそ！最新記事をチェックしよう</p>
      </header>

      <main>
        <PostList />
      </main>

      <footer className="py-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} My Blog
        <Link to="/sitemap" className="text-sm text-gray-600 hover:underline">
          サイトマップ
        </Link>
      </footer>
    </div>
  );
};

export default Home;
