import { Paper } from '@mui/material';
import { ReactNode } from 'react';

export const HoverPaper = ({ children }: { children: ReactNode }) => {
  return (
    <Paper
      sx={{
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
        '&:hover': {
          backgroundColor: '#fdf3c687',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease-in-out',
        },
      }}
    >
      {children}
    </Paper>
  );
};
