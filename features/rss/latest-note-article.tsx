import { Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HoverPaper } from 'components/paper/hover-paper';

interface Article {
  title: string;
  thumbnail: string | null;
  description: string;
  link: string;
}

interface LatestNoteArticleProps {
  articleCount?: number;
  isAll?: boolean;
}

const LatestNoteArticle: React.FC<LatestNoteArticleProps> = ({ articleCount, isAll }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  articleCount = articleCount ? articleCount : 2;

  useEffect(() => {
    const fetchLatestArticle = async () => {
      const proxyUrl = '/api/proxy?url=https://note.com/magn_kengo/rss';

      try {
        const response = await fetch(proxyUrl);
        const data = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, 'application/xml');
        const items = xml.querySelectorAll('item');
        let latestArticles = Array.from(items).map((item) => ({
          title: item.querySelector('title')?.textContent || '',
          thumbnail: item.querySelector('thumbnail')?.textContent || '',
          description: item.querySelector('description')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
        }));

        if (!isAll) {
          latestArticles = latestArticles.slice(0, articleCount);
        }
        setArticles(latestArticles);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchLatestArticle();
  }, [articleCount, isAll]);

  return (
    <Grid container spacing={3}>
      {articles.map((article, index) => (
        <Grid item key={index} xs={12} md={6} sx={{ padding: 0 }}>
          <Link target='_blank' href={article.link}>
            <HoverPaper>
              <Grid container direction='column' justifyContent='center' alignItems='center'>
                <Grid item>
                  {article.thumbnail && (
                    <Image
                      sizes='100vw'
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      width={800}
                      height={419}
                      src={article.thumbnail}
                      alt='Thumbnail'
                    />
                  )}
                </Grid>
                <Grid item>
                  <Typography mt={2}>{article.title}</Typography>
                </Grid>
              </Grid>
            </HoverPaper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestNoteArticle;
