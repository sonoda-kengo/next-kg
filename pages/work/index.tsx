import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Layout from 'components/layout';
import { Be_202304 } from 'features/work/be-202304';
import { Fe_202401 } from 'features/work/fe-202401';
import { Se_202104 } from 'features/work/se-202104';

export default function Work() {
  return (
    <Layout>
      <Stack direction='column' margin={2}>
        <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold' }}>
          work
        </Typography>
        <Grid container spacing={4}>
          <Grid item>
            <Fe_202401 />
          </Grid>
          <Grid item>
            <Be_202304 />
          </Grid>
          <Grid item>
            <Se_202104 />
          </Grid>
        </Grid>
      </Stack>
    </Layout>
  );
}
