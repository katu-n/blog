import React from "react";
import { Link } from "react-router-dom";

const Thanks: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col px-4 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">お問い合わせありがとうございました！</h1>
      <p className="text-gray-600 mb-6">後ほどご連絡差し上げます。</p>
      <Link to="/" className="text-blue-500 underline hover:text-blue-700">
        トップページへ戻る
      </Link>
    </div>
  );
};

export default Thanks;
