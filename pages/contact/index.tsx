import { Grid, List, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import Layout from 'components/layout';
import { RowListItem } from 'components/list/row-list-item';

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const imageWidth = isMobile ? 200 : 300;
  const imageHeight = isMobile ? 280 : 400;
  return (
    <Layout>
      <>
        <h1>Contact</h1>
        <Grid container direction='row' alignContent='center' justifyContent='center'>
          <Grid item xs={12} md={6}>
            <List>
              <RowListItem itemKey='name' itemValue='Kengo Sonoda' />
              <RowListItem itemKey='adress' itemValue='Amsterdam, the Netherlands' />
              <RowListItem itemKey='e-mail' itemValue='surulab.inc@gmail.com' />
            </List>
          </Grid>
          <Grid item xs={12} md={6} display='contents'>
            <Image src='/images/me.jpg' alt='my photo' width={imageWidth} height={imageHeight} />
          </Grid>
        </Grid>
      </>
    </Layout>
  );
}
