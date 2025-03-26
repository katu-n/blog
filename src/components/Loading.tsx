import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="text-center text-gray-400 py-10">
      <p className="animate-pulse">読み込み中...</p>
    </div>
  );
};

export default Loading;
