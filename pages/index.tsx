import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import Layout from 'components/layout';
import LatestNoteArticle from 'features/rss/latest-note-article';

export const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function Home() {
  const { t } = useTranslation('common');
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
                {/* <Grid container direction='row' justifyContent='center'>
                  <Grid item bgcolor='#def3f4' margin={2} padding={4} width='60%'> */}

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
                  {/* <Grid item margin={2}> */}

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
                {/* <Grid container direction='row' justifyContent='center'>
                  <Grid item bgcolor='#def3f4' margin={2} padding={4} width='30%'> */}

                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Item>
                      <Typography mb={2}>UNIIV: Tokyo Insitute of Technology</Typography>
                      <Typography mb={2}>FROM: KAGOSHIMA</Typography>
                      <Typography mb={2}>IN: TOKYO</Typography>
                    </Item>
                  </Grid>
                  {/* <Grid item bgcolor='#def3f4' margin={2} padding={4} width='60%'> */}

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
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12}>
                    <Box>
                      <Box bgcolor='#fdf3c687' padding={2}>
                        <LatestNoteArticle />
                      </Box>
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
                  04 Contact
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={8}>
                    <Box>
                      <Box height='200px' bgcolor='blue'></Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box>
                      <Box height='200px' bgcolor='blue'></Box>
                    </Box>
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
