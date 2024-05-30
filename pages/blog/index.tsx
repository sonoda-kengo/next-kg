import { GetStaticProps, NextPage } from 'next';
import Layout from 'components/layout';
import { fetchArticles } from 'features/rss/fetchArticles';
import LatestNoteArticle from 'features/rss/latest-note-article';
import { IArticle } from 'type/types';

interface Props {
  articles: IArticle[];
}

const Blog: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      <>
        <h1>Blog</h1>
        <LatestNoteArticle articles={articles} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await fetchArticles();

  return {
    props: {
      articles,
    },
    revalidate: 60, // ISRによる再生成の間隔（秒単位）
  };
};

export default Blog;
