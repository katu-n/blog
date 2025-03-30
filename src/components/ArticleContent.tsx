// components/ArticleContent.tsx
import TableOfContents from './TableOfContents';
import CodeBlock from './CodeBlock';

const ArticleContent = ({ postId }: { postId: string }) => {
  // ダミー記事データ（API連携 or JSONでOK）
  const post = {
    title: 'useEffectの徹底解説',
    content: `
      ## useEffectとは？
      Reactの副作用処理用のフックです。

      ## 基本構文
      \`\`\`tsx
      useEffect(() => {
        console.log("Hello");
      }, []);
      \`\`\`
    `,
    tags: ['React', 'Hooks'],
  };

  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4"># {post.tags.join(' / ')}</div>
      
      <TableOfContents content={post.content} />
      
      <section className="prose prose-blue">
        <CodeBlock content={post.content} />
      </section>
    </article>
  );
};

export default ArticleContent;
