// postCardの表示を担当するコンポーネント
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  post: {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    _embedded?: {
      "wp:featuredmedia"?: [
        {
          source_url: string;
        }
      ];
    };
  };
};

const PostCard: React.FC<Props> = ({ post }) => {
  const thumbnail = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
      <Link
        to={`/posts/${post.id}`}
        className="text-lg font-bold hover:text-blue-600"
      >
      {thumbnail && (
          <img src={thumbnail} alt="" className="w-full h-48 object-cover" />
        )}
      <div className="p-4">
        <h2
          className="text-lg font-bold"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        <p
          className="text-sm text-gray-600 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
        <p className="text-xs text-gray-400 mt-2">
          {new Date(post.date).toLocaleDateString()}
        </p>
      </div>
          </Link>
    </div>
  );
};

export default PostCard;
