import { Box, Container, Grid, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { CardLink } from 'components/card-link/card-link';
import Layout from 'components/layout';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container>
        <Box margin={4}>
          <h1 dangerouslySetInnerHTML={{ __html: t('home_msg') }} />
        </Box>
        <Box marginY={8}>
          <Typography variant='h3'>About</Typography>
          <Grid item margin={4}>
            <h1 dangerouslySetInnerHTML={{ __html: t('about_msg') }} />
          </Grid>
        </Box>
        <Box marginY={8}>
          <Typography variant='h3'>Work</Typography>
          <Grid item margin={4}>
            <Typography>git account</Typography>
          </Grid>
          <Grid item margin={4}>
            <Typography>Qiita account</Typography>
          </Grid>
        </Box>
        <Grid container direction='row' alignContent='center' justifyContent='center'>
          <Grid item sx={{ margin: '80px 100px' }}>
            <CardLink href='/about' imagePath='/images/test.jpg' title='About'>
              {t('card_about_msg')}
            </CardLink>
          </Grid>
          <Grid item sx={{ margin: '80px 100px' }}>
            <CardLink href='/work' imagePath='/images/test.jpg' title='Work'>
              {t('card_work_msg')}
            </CardLink>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
