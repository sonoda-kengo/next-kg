import Layout from 'components/layout';
import LatestNoteArticle from 'features/rss/latest-note-article';

export default function Blog() {
  return (
    <Layout>
      <>
        <h1>Blog</h1>
        <LatestNoteArticle isAll />
      </>
    </Layout>
  );
}
