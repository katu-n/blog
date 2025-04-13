import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      {/* 上部プロフィールエリア */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="/katu.png"
          alt="プロフィール写真"
          className="w-32 h-32 rounded-full object-cover shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            このブログについて
          </h1>
          <p className="text-gray-700">
            Webエンジニア・大学院生として活動中。React / TypeScript / WordPress
            /GAS などを使った開発を得意としています。
            趣味はドライブと読書で、技術だけでなく日常からも学びを得ることを大切にしています。
          </p>
        </div>
      </div>

      {/* 自己紹介 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">自己紹介</h2>
        <p className="text-gray-800 leading-relaxed">
          はじめまして、Webエンジニア・大学院生の
          <span className="font-bold">Katu</span>です。
          大学院で流体工学を専攻しつつ、Web開発の世界にも飛び込んで学びを深めています。
          「探究心」と「忍耐強さ」を持って成長し続けることを大切にしており、このブログもその一環として立ち上げました。
        </p>
      </section>

      {/* このブログの目的 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">このブログの目的</h2>
        <p className="text-gray-800 leading-relaxed">
          学びや実務の中で得た知識をアウトプットし、同じ道を歩む仲間たちの力になりたいと思っています。
          また、技術だけでなく、学ぶ楽しさや日々の気づきも共有していきたいです。
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
            {BsTwitterX({})}
            <a
              href="https://x.com/katu_kobe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @katu_kobe
            </a>
          </li>
          <li className="flex items-center gap-2">
            {FaGithub({})}
            <a
              href="https://github.com/katu-n"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/katu-n
            </a>
          </li>
          <li className="flex items-center gap-2">
            {FaInstagram({})}
            <a
              href="https://instagram.com/katu_script"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @katu_script
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
