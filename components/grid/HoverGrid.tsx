import { Grid } from '@mui/material';
import { ReactNode } from 'react';

export const HoverGrid = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      item
      xs={12}
      md={9}
      sx={{
        '&:hover': {
          backgroundColor: '#fdf3c687',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease-in-out',
        },
      }}
    >
      {children}
    </Grid>
  );
};
