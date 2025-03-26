//一覧のループ処理を行うコンポーネント
import React from "react";
import PostCard from "./PostCard";

type Props = {
  posts: {
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
  }[];
};

const PostGrid: React.FC<Props> = ({ posts }) => {
  if (posts.length === 0) {
    return <p className="text-gray-500">該当する記事がありません</p>;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostGrid;
