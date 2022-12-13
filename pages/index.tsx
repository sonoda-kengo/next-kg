import { Box, Container, Grid } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { CardLink } from 'components/card-link/card-link';
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
            <CardLink href='/about' imagePath='/images/test.jpg' title='About'>
              [!]this card is for /about for description
            </CardLink>
          </Grid>
          <Grid item sx={{ margin: '80px 100px' }}>
            <CardLink href='/work' imagePath='/images/test.jpg' title='Work'>
              [!]this card is for /work for description
            </CardLink>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
