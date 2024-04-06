import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { HoverGrid } from 'components/grid/hover-grid';

export const Be_202304 = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3} my={2}>
        <Typography color='text.secondary'>Apr.2023 - PRESENT</Typography>
      </Grid>
      <HoverGrid>
        <Grid margin={2}>
          <Typography variant='h5' mb={1}>
            Backend Engineer
          </Typography>
          <Box>
            <Typography>
              We developed the &quot;Hotel Room Cleaning Management SaaS&quot; application.
            </Typography>
            <Typography>
              Designed and implemented database models and APIs to fulfill the requirements of new
              features and services.
            </Typography>
            <Typography>
              Enhanced application performance through query optimization, caching implementation,
              load testing, and tuning.
            </Typography>
            <Typography>
              Addressed user-reported bugs by fixing issues, adding tests, and creating automated
              test suites.
            </Typography>
          </Box>
          <Stack direction='row' margin={2} spacing={{ xs: 1, sm: 2 }} flexWrap='wrap'>
            <Chip label='Django' />
            <Chip label='mysql' />
            <Chip label='Swagger' />
            <Chip label='boto3 (AWS)' />
            <Chip label='Docker' />
          </Stack>
        </Grid>
      </HoverGrid>
    </Grid>
  );
};
