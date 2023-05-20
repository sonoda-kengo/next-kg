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
import LatestNoteArticle from 'features/rss/latest-note-article';

export default function Blog() {
  return (
    <Layout>
      <Container>
        <h1>Blog</h1>
        <LatestNoteArticle isAll />
      </Container>
    </Layout>
  );
}
