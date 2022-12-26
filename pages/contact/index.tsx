import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { CardLink } from 'components/card-link/card-link';
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
              <RowListItem itemKey='adress' itemValue='Tokyo Setagaya' />
              <RowListItem itemKey='e-mail' itemValue='kengob6@gmail.com' />
            </List>
          </Grid>
          {/* <Grid item xs={6}>
            <Image src='/images/profile.jpeg' alt='my photo' width={300} height={400} />
          </Grid> */}
        </Grid>
      </Container>
    </Layout>
  );
}
