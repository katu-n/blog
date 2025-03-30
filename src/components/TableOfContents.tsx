// components/TableOfContents.tsx
import React, { useEffect, useState } from 'react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

type Props = {
  content: string;
};

const TableOfContents: React.FC<Props> = ({ content }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const headingRegex = /^(##+)\s+(.*)$/gm;
    const matches: RegExpExecArray[] = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      matches.push(match);
    }

    const extractedHeadings: Heading[] = matches.map((match) => {
      const level = match[1].length; // '##' -> level 2, '###' -> level 3
      const rawText = match[2];
      const id = rawText
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-ぁ-んァ-ン一-龯]/g, '');

      return { id, text: rawText, level };
    });

    setHeadings(extractedHeadings);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="mb-6 p-4 bg-gray-100 rounded-md border border-gray-200">
      <h2 className="text-lg font-bold mb-2">目次</h2>
      <ul className="space-y-1 text-sm text-gray-700">
        {headings.map((heading) => (
          <li key={heading.id} className={`ml-${(heading.level - 2) * 4}`}>
            <a href={`#${heading.id}`} className="hover:underline">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
