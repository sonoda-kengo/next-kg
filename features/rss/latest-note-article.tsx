import { OpenInNew } from '@mui/icons-material';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
    <Grid container spacing={2}>
      {articles.map((article, index) => (
        <Grid item key={index} xs={12} md={6}>
          <Paper
            sx={{
              height: '320px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
            }}
          >
            <Box maxWidth='100%' maxHeight='70%' position='relative'>
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
            </Box>
            <Typography mt={2}>{article.title}</Typography>
            <Link target='_blank' href={article.link} style={{ alignSelf: 'end' }}>
              <Typography
                color='text.secondary'
                mt={3}
                sx={{ display: 'flex', alignItems: 'center', textDecoration: 'underline' }}
              >
                Read More
                <OpenInNew sx={{ ml: 1, fontSize: '1rem' }} />
              </Typography>
            </Link>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestNoteArticle;
