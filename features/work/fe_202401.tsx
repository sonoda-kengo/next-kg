import { Box, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import { HoverGrid } from 'components/grid/HoverGrid';

export const Fe_202401 = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3} my={2}>
        <Typography color='text.secondary'>Jan.2024 - PRESENT</Typography>
      </Grid>
      <HoverGrid>
        <Grid margin={2}>
          <Typography variant='h5' mb={1}>
            Frontend Engineer & Backend Engineer
          </Typography>
          <Box>
            <Typography>
              I was in charge of the frontend and backend development for a &quot;Building
              Recruitment Information Input Assistance&quot; application.
            </Typography>
            <Typography>
              Developed an intuitive UI and user-friendly features to allow users to efficiently
              input basic building information.
            </Typography>
            <Typography>
              Implemented input validation and verification features to enhance UX.
            </Typography>
          </Box>
          <Stack direction='row' margin={2} spacing={{ xs: 1, sm: 2 }} flexWrap='wrap'>
            <Chip label='Next.js' />
            <Chip label='AppRouter' />
            <Chip label='Typescript' />
            <Chip label='Material UI' />
            <Chip label='SWR' />
            <Chip label='Swagger' />
            <Chip label='Yup' />
          </Stack>
          <Divider flexItem sx={{ width: '95%', marginX: 'auto' }} />
          <Stack direction='row' margin={2} spacing={{ xs: 1, sm: 2 }} flexWrap='wrap'>
            <Chip label='Django' />
            <Chip label='mysql' />
            <Chip label='Docker' />
            <Chip label='Swagger' />
          </Stack>
        </Grid>
      </HoverGrid>
    </Grid>
  );
};
