import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* 上部プロフィールエリア */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/my-photo.jpg" // ← publicフォルダに置いた画像
          alt="プロフィール写真"
          className="w-32 h-32 rounded-full object-cover shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-2">このブログについて</h1>
          <p className="text-gray-700">
            Webエンジニア・大学院生として活動中。React / TypeScript / WordPress などを使った開発を得意としています。
          </p>
        </div>
      </div>

      {/* 自己紹介 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">このブログの目的</h2>
        <p className="text-gray-800 leading-relaxed">
          学びや実務の中で得た知見をアウトプットしつつ、同じ道を進む仲間や学習者の助けになればと思い、立ち上げました。
        </p>
      </section>

      {/* 使用技術 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用技術</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>React + TypeScript</li>
          <li>Tailwind CSS</li>
          <li>WordPress REST API</li>
          <li>Google Apps Script (GAS)</li>
        </ul>
      </section>

      {/* SNSリンク */}
      <section>
        <h2 className="text-xl font-semibold mb-2">SNS</h2>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-center gap-2">
            {FaTwitter({})}
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @yourhandle
            </a>
          </li>
          <li className="flex items-center gap-2">
            {FaGithub({})}
            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/yourname
            </a>
          </li>
          <li className="flex items-center gap-2">
            {FaInstagram({})}
            <a
              href="https://instagram.com/yourinsta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @yourinsta
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
