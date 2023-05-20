import { Container, Grid, List } from '@mui/material';
import Image from 'next/image';
import Layout from 'components/layout';
import { RowListItem } from 'components/list/row-list-item';

export default function Contact() {
  return (
    <Layout>
      <Container>
        <h1>Contact</h1>
        <Grid container direction='row' alignContent='center' justifyContent='center'>
          <Grid item xs={6}>
            <List>
              <RowListItem itemKey='name' itemValue='Sonoda Kengo' />
              <RowListItem itemKey='adress' itemValue='Setagaya, Tokyo' />
              <RowListItem itemKey='e-mail' itemValue='kengob6@gmail.com' />
            </List>
          </Grid>
          <Grid item xs={6}>
            <Image src='/images/me.jpg' alt='my photo' width={300} height={400} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
