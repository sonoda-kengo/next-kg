import useTranslation from 'next-translate/useTranslation';
import Layout from 'components/layout';

export default function Test() {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <>
        <h1>{t('home_msg')}</h1>
      </>
    </Layout>
  );
}
