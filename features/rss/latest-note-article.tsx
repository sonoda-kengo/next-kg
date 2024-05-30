import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HoverPaper } from 'components/paper/hover-paper';
import { IArticle } from 'type/types';

interface ILatestNoteArticleProps {
  articleCount?: number;
  isAll?: boolean;
  articles: IArticle[];
}

function LatestNoteArticle({ articleCount, isAll, articles }: ILatestNoteArticleProps) {
  if (!isAll && articleCount) {
    articles = articles.slice(0, articleCount);
  }

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
}

export default LatestNoteArticle;
