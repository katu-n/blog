// components/ShareButtons.tsx
import React from 'react';

type Props = {
  url: string;
  title: string;
};

const ShareButtons: React.FC<Props> = ({ url, title }) => {
  const encodedURL = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex gap-4 mt-8">
      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Xでシェア
      </a>

      {/* LINE */}
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:underline"
      >
        LINEで送る
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline"
      >
        Facebookでシェア
      </a>
    </div>
  );
};

export default ShareButtons;