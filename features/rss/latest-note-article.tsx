import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Article {
  title: string;
  thumbnail: string | null;
  description: string;
  link: string;
}

const LatestNoteArticle: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      const proxyUrl = '/api/proxy?url=https://note.com/magn_kengo/rss';

      try {
        const response = await fetch(proxyUrl);
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item');
        const latestItem = items[0];

        setArticle({
          title: latestItem.querySelector('title')?.textContent || '',
          thumbnail: latestItem.querySelector('thumbnail')?.textContent || '',
          description: latestItem.querySelector('description')?.textContent || '',
          link: latestItem.querySelector('link')?.textContent || '',
        });
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchLatestArticle();
  }, []);

  if (!article) {
    return null;
  }

  if (article) {
    console.log('article', article.thumbnail);
  }

  return (
    <Box>
      <h2>{article.title}</h2>
      <Box>
        {article.thumbnail && (
          <Image width={300} height={200} src={article?.thumbnail} alt='Thumbnail' />
        )}
      </Box>
      <p dangerouslySetInnerHTML={{ __html: article.description }} />
    </Box>
  );
};

export default LatestNoteArticle;
