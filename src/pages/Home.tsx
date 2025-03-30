// src/pages/Home.tsx

import React from "react";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold">技術と遊ぶブログ<br/>React × WordPressで構築中</h1>
        <p className="text-gray-600 mt-3">ようこそkatu-Scriptへ！コードと学びのログを、読者と一緒に積み上げていく技術ブログ</p>
      </header>

      <main>
        <PostList />
      </main>
      <section className="border-t border-gray-300 pt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">このブログについて</h2>
        <div className="space-y-3">
          <Link
            to="/about"
            className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800"
          >
            {FaUserCircle({})}
            運営者プロフィール（About）
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-800"
          >
            {FaEnvelope({})}
            お問い合わせ（Contact）
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          ご相談やご連絡、運営方針についてはこちらからどうぞ。
        </p>
      </section>
      <footer className="py-6 text-center text-sm text-gray-400">
        <div>&copy; {new Date().getFullYear()} My Blog</div>
        <div>
          <Link to="/sitemap" className="text-sm text-gray-600 hover:underline">
            サイトマップ
          </Link>
        </div>
        <Link to="/privacy" className="text-sm text-gray-600 hover:underline">
          プライバシーポリシー
        </Link>
      </footer>
    </div>
  );
};

export default Home;
