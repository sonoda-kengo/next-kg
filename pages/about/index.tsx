import { Box, Grid, Stack, Typography } from '@mui/material';
import Layout from 'components/layout';
import { SkillList } from 'features/skill-list/skill-list';

export default function About() {
  return (
    <Layout>
      <Stack direction='column' margin={2}>
        <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
          about
        </Typography>
        <Grid container>
          <Typography>
            In April 2021, I began my career as a software engineer. I am currently based in
            Tokyo.At present, I am working as a freelance engineer in Tokyo.Moving forward, I aspire
            to work abroad.
          </Typography>
        </Grid>
        <Box>
          <h2>skill</h2>
        </Box>
        <SkillList />
      </Stack>
    </Layout>
  );
}
