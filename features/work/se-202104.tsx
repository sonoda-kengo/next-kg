import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { HoverGrid } from 'components/grid/hover-grid';

export const Se_202104 = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3} my={2}>
        <Typography color='text.secondary'>Apr.2021 - Mar.2023</Typography>
      </Grid>
      <HoverGrid>
        <Grid margin={2}>
          <Typography variant='h5' mb={1}>
            System Engineer
          </Typography>
          <Box>
            <Typography>I worked as a system engineer in Tokyo-based venture company.</Typography>
            <Typography>
              I specialized in creating systems for the architecture industry and customizing CAD
              software.
            </Typography>
          </Box>
          <Stack direction='row' margin={2} spacing={{ xs: 1, sm: 2 }} flexWrap='wrap'>
            <Chip label='React' />
            <Chip label='PHP' />
            <Chip label='Laravel' />
            <Chip label='C#' />
          </Stack>
        </Grid>
      </HoverGrid>
    </Grid>
  );
};
