import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShareButtons from "../components/ShareButtons";

type Post = {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string }>>;
  };
};

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    fetch(`http://raise-react-skills.local/wp-json/wp/v2/posts/${id}?_embed`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("記事取得エラー:", err);
        setLoading(false);
      });
  }, [id]);
  const categoryId = post?._embedded?.["wp:term"]?.[0]?.[0]?.id;

  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (!categoryId) return;

    fetch(
      `http://raise-react-skills.local/wp-json/wp/v2/posts?categories=${categoryId}&per_page=3&_embed`
    )
      .then((res) => res.json())
      .then((data) => setRelatedPosts(data))
      .catch((err) => console.error("関連記事取得エラー:", err));
  }, [categoryId]);

  if (loading) return <div className="p-6 text-center">読み込み中...</div>;
  if (!post)
    return (
      <div className="p-6 text-center text-red-500">
        記事が見つかりませんでした
      </div>
    );

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const categories = post._embedded?.["wp:term"]?.[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">
        {post.title.rendered}
      </h1>
      <p className="text-sm text-gray-500">
        投稿日: {new Date(post.date).toLocaleDateString()}
      </p>

      {categories && (
        <div className="flex gap-2 text-sm text-blue-600">
          {categories.map((cat) => (
            <span key={cat.id} className="bg-blue-100 px-2 py-1 rounded">
              {cat.name}
            </span>
          ))}
        </div>
      )}

      {featuredImage && (
        <img
          src={featuredImage}
          alt="アイキャッチ"
          className="w-full h-auto rounded shadow"
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <Link to="/" className="text-blue-500 hover:underline pt-20">
        &larr; トップに戻る
      </Link>
      {relatedPosts.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">関連記事</h2>
          <div className="space-y-4">
            {relatedPosts.map((relPost) => (
              <div key={relPost.id}>
                <Link
                  to={`/posts/${relPost.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {relPost.title.rendered}
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      <ShareButtons url={window.location.href} title={post.title.rendered} />
    </div>
  );
};

export default PostDetail;
