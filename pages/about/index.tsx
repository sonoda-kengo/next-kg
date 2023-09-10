import { Box, Container, Grid, Typography } from '@mui/material';
import Layout from 'components/layout';
import { SkillList } from 'features/skill-list/skill-list';

export default function About() {
  return (
    <Layout>
      <Container>
        <h1>About</h1>
        <Grid container alignContent='center' justifyContent='center'>
          <Typography>
            In April 2021,
            I started my carrer as a software engineer.
            I live in Tokyo now.
          </Typography>
          <Typography>
            In the future,  I will work abroad.
          </Typography>
        </Grid>
        <Box>
          <h2>skill</h2>
        </Box>
        <SkillList />
      </Container>
    </Layout>
  );
}
