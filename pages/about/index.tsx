import { Box, Container, Grid } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Layout from 'components/layout';
import { SkillList } from 'features/skill-list/skill-list';

export default function About() {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container>
        <h1>About</h1>
        <Grid container alignContent='center' justifyContent='center'>
          <h4 dangerouslySetInnerHTML={{ __html: t('home_msg') }} />
        </Grid>
        <Box>
          <h2>skill</h2>
        </Box>
        <SkillList />
      </Container>
    </Layout>
  );
}
