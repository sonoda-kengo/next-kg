import { Box, Container, Divider } from '@mui/material';
import Layout from 'components/layout';
import { SkillList } from 'features/skill-list/skill-list';

export default function Work() {
  return (
    <Layout>
      <Container>
        <h1>Work</h1>
        <Box>
          <h2>Skill list</h2>
          <Divider />
        </Box>
        <SkillList />
      </Container>
    </Layout>
  );
}
