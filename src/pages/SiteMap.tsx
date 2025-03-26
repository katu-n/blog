import { Link } from "react-router-dom"; 

const SiteMap = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">サイトマップ</h1>
      <ul className="space-y-3 text-blue-600 underline">
        <li><Link to="/">トップページ</Link></li>
        <li><Link to="/about">運営者情報（About）</Link></li>
        <li><Link to="/privacy">プライバシーポリシー</Link></li>
        <li><Link to="/contact">お問い合わせ</Link></li>
      </ul>
    </div>
  );
};

export default SiteMap;
