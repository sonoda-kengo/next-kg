import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from 'components/layout';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container>
        <Box>
          <div dangerouslySetInnerHTML={{ __html: t('home_msg') }} />
        </Box>
        <Grid container direction='row' alignContent='center' justifyContent='center'>
          <Grid item sx={{ margin: '80px 100px' }}>
            <Card sx={{ maxWidth: '300px', height: '400px' }}>
              <Link href={'/work'}>
                <CardMedia component='img' height='180px' image='/images/test.jpg' alt='work' />
                <CardContent sx={{ height: '220px' }}>
                  <Typography variant='h5'>About me</Typography>
                  <Typography color='text.secondary'>
                    [!]this card is for \about for description
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
          <Grid item sx={{ margin: '80px 100px' }}>
            <Card sx={{ maxWidth: '300px', height: '400px' }}>
              <Link href={'/work'}>
                <CardMedia component='img' height='180px' image='/images/test.jpg' alt='work' />
                <CardContent sx={{ height: '220px' }}>
                  <Typography variant='h5'>My Work</Typography>
                  <Typography color='text.secondary'>
                    [!]this card is for \work for description
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
