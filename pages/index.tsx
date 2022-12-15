import { Box, Container, Grid, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { CardLink } from 'components/card-link/card-link';
import Layout from 'components/layout';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container>
        <Typography variant='h5'>
          {/* <div dangerouslySetInnerHTML={{ __html: t('home_msg') }} /> */}
          home_msg
        </Typography>
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
