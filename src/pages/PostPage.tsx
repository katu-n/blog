// pages/PostPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "../components/ArticleContent";

const PostPage: React.FC = () => {
  const { id } = useParams(); // 例: /posts/:id ルーティング前提
  if (!id) {
    return <p>Error: Post ID is missing</p>;
  }
  return (
    <main>
      <ArticleContent postId={id} />
    </main>
  );
};

export default PostPage;
