import { OpenInNew } from '@mui/icons-material';
import { Box, Grid, List, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { HoverIcon } from 'components/icon/hover-icon';
import Layout from 'components/layout';
import { RowListItem } from 'components/list/row-list-item';
import { fetchArticles } from 'features/rss/fetchArticles';
import LatestNoteArticle from 'features/rss/latest-note-article';
import { Be_202304 } from 'features/work/be-202304';
import { Fe_202401 } from 'features/work/fe-202401';
import { Se_202104 } from 'features/work/se-202104';
import { IArticle } from 'type/types';

interface Props {
  articles: IArticle[];
}

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Home: NextPage<Props> = ({ articles }) => {
  const windowHeight = '900px';
  const minHeight = '600px';

  return (
    <Layout>
      <Box>
        <Grid
          container
          direction='column'
          height={windowHeight}
          alignContent='center'
          justifyContent='center'
        >
          <Grid item width='80%'>
            <Typography variant='h2' sx={{ fontWeight: 'bold' }} letterSpacing={1}>
              Kengo Sonoda
            </Typography>
            <Typography variant='h3' color='text.secondary' letterSpacing={1}>
              Let me help with your project.
            </Typography>
            <Typography letterSpacing={1} my={2} color='text.secondary'>
              I&apos;m a software engineer passionate about creating exceptional digital
              experiences. With a background in web development and a keen eye for design, I
              specialize in crafting immersive online solutions tailored to your needs.
            </Typography>
          </Grid>
        </Grid>

        {/* About */}
        <Box
          display='flex'
          width='80%'
          margin='auto'
          mb={8}
          minHeight={minHeight}
          alignItems='center'
        >
          <Grid container direction='column'>
            <Grid item>
              <Link href='/about'>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  01 About
                </Typography>
              </Link>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={12} md={8}>
                <Item>
                  <Typography mb={2}>
                    Hello! I&apos;m Kengo, a web developer passionate about creating online
                    experiences.
                  </Typography>
                  <Typography mb={2}>
                    I started on my journey as a web developer after graduating from university in
                    2021.
                  </Typography>
                  <Typography mb={2}>
                    Over the years, I&apos;ve been involved in various projects utilizing a range of
                    technologies including React, Next.js, Django, PHP, and C#.
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box textAlign='center'>
                  <Image src='/images/me.jpg' width={180} height={240} alt={''} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box bgcolor='#fdf3c687' padding={2}>
                  <Typography mb={2}>University: Tokyo Institute of Technology</Typography>
                  <Typography mb={2}>Location: Kagoshima, Japan</Typography>
                  <Typography mb={2}>Current Location: Tokyo, Japan</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Item>
                  <Typography mb={2}>My Skills</Typography>
                  <Typography mb={2}>Frontend :</Typography>
                  <Typography mb={2} ml={2}>
                    - TypeScript, React, Next.js
                  </Typography>
                  <Typography mb={2}>Backend :</Typography>
                  <Typography mb={2} ml={2}>
                    - Python (Django), PHP (Laravel), Node.js, C#
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Work */}
        <Box
          display='flex'
          width='80%'
          margin='auto'
          mb={8}
          minHeight={minHeight}
          alignItems='center'
        >
          <Grid container direction='column'>
            <Grid item>
              <Link href='/work'>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  02 Work
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Grid container spacing={4}>
                <Grid item>
                  <Fe_202401 />
                </Grid>
                <Grid item>
                  <Be_202304 />
                </Grid>
                <Grid item>
                  <Se_202104 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Blog */}
        <Box
          display='flex'
          width='80%'
          margin='auto'
          mb={8}
          minHeight={minHeight}
          alignItems='center'
        >
          <Grid container direction='column'>
            <Grid item>
              <Link href='/blog'>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  03 Blog
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Box padding={2}>
                <LatestNoteArticle articleCount={2} articles={articles} />
              </Box>
            </Grid>
            <Link href='/blog' style={{ textAlign: 'right' }}>
              <Typography mt={4} color='text.secondary' style={{ textDecoration: 'underline' }}>
                READ MORE ...
              </Typography>
            </Link>
          </Grid>
        </Box>

        {/* Contact */}
        <Box display='flex' width='80%' margin='auto' minHeight={minHeight} alignItems='center'>
          <Grid container direction='column'>
            <Grid item>
              <Link href='/contact'>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  04 Contact
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <List>
                <RowListItem itemKey='name' itemValue='Sonoda Kengo' />
                <RowListItem itemKey='adress' itemValue='Setagaya, Tokyo' />
                <RowListItem itemKey='e-mail' itemValue='kengob6@gmail.com' />
              </List>
              <Grid container>
                <Grid item>
                  <HoverIcon src='/logo/tool/github_black.svg' title='git Hub' subTitle='3 years' />
                </Grid>
                <Grid item>
                  <Link target='_blank' href='https://github.com/sonoda-kengo'>
                    <Typography
                      mt={3}
                      sx={{ display: 'flex', alignItems: 'center', textDecoration: 'underline' }}
                    >
                      gitHub
                      <OpenInNew sx={{ ml: 1, fontSize: '1rem' }} />
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles();

  return {
    props: {
      articles,
    },
    revalidate: 60,
  };
};

export default Home;
