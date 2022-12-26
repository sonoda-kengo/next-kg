import { Typography } from '@mui/material';
import { ReactNode } from 'react';

export const TypoUnderLine = ({ children }: { children: ReactNode }) => {
  return <Typography sx={{ textDecoration: 'underline' }}>{children}</Typography>;
};
