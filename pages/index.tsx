import { OpenInNew } from '@mui/icons-material';
import { Box, Container, Grid, List, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { HoverIcon } from 'components/icon/hover-icon';
import Layout from 'components/layout';
import { RowListItem } from 'components/list/row-list-item';
import LatestNoteArticle from 'features/rss/latest-note-article';

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export default function Home() {
  const windowHeight = '900px';
  const minHeight = '600px';

  return (
    <Layout>
      <Container>
        <Box>
          <Grid
            container
            direction='column'
            height={windowHeight}
            alignContent='center'
            justifyContent='center'
          >
            <Grid item width='80%'>
              <Typography letterSpacing={1}>Hi, my name is</Typography>
              <Typography variant='h2' sx={{ fontWeight: 'bold' }} letterSpacing={1}>
                Kengo Sonoda.
              </Typography>
              <Typography variant='h3' color='text.secondary' letterSpacing={1}>
                I&apos;ll help your project.
              </Typography>
              <Typography letterSpacing={1} my={2} color='text.secondary'>
                I&apos;m a software engineer specializing in building (and occasionally designing)
                exceptional digital experiences.Please check my site.
              </Typography>
            </Grid>
          </Grid>
          <Box display='flex' width='80%' margin='auto' minHeight={minHeight} alignItems='center'>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  01 About
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Item>
                      <Typography mb={2}>
                        Hello! My name is Kengo and I enjoy creating works online.
                      </Typography>
                      <Typography mb={2}>
                        I started my career as a web developer after graduating from Tokyo Institute
                        of Technology in 2021.
                      </Typography>
                      <Typography mb={2}>
                        I have participated in various projects using technologies such as React,
                        Next, Django, PHP, and C#.
                      </Typography>
                    </Item>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Box textAlign='center'>
                      <Image src='/images/me.jpg' width={180} height={240} alt={''} />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box display='flex' width='80%' margin='auto' minHeight={minHeight} alignItems='center'>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  02 Work
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Item>
                      <Typography mb={2}>UNIIV: Tokyo Insitute of Technology</Typography>
                      <Typography mb={2}>FROM: KAGOSHIMA</Typography>
                      <Typography mb={2}>IN: TOKYO</Typography>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Box bgcolor='#fdf3c687' height='300px' padding={2}>
                      <Typography mb={2}>My Skill List</Typography>
                      <Typography mb={2}>FrontEnd : </Typography>
                      <Typography mb={2} ml={2}>
                        TypeScript, React, Next
                      </Typography>
                      <Typography mb={2}>BackEnd : </Typography>
                      <Typography mb={2} ml={2}>
                        python(Django), php(Laravel), Node.js, C#
                      </Typography>
                      <Link href='/work' target='_blank' style={{ textAlign: 'right' }}>
                        <Typography
                          mt={4}
                          color='text.secondary'
                          style={{ textDecoration: 'underline' }}
                        >
                          READ MORE ...
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box display='flex' width='80%' margin='auto' minHeight={minHeight} alignItems='center'>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  03 Blog
                </Typography>
              </Grid>
              <Grid item>
                <Box padding={2}>
                  <LatestNoteArticle />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box display='flex' width='80%' margin='auto' minHeight={minHeight} alignItems='center'>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
                  04 Contact
                </Typography>
              </Grid>
              <Grid item>
                <List>
                  <RowListItem itemKey='name' itemValue='Sonoda Kengo' />
                  <RowListItem itemKey='adress' itemValue='Setagaya, Tokyo' />
                  <RowListItem itemKey='e-mail' itemValue='kengob6@gmail.com' />
                </List>
                <Grid container>
                  <Grid item>
                    <HoverIcon
                      src='/logo/tool/github_black.svg'
                      title='git Hub'
                      subTitle='3 years'
                    />
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
      </Container>
    </Layout>
  );
}
