import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position='static' sx={{ letterSpacing: 2 }} color='primary'>
      <Toolbar disableGutters>
        <Typography variant='h6' component='a' href='/' marginLeft='2rem'>
          Kengo Sonoda
        </Typography>
        <Box marginLeft='auto'>
          <Link href='/about'>About</Link>
        </Box>
        <Box marginLeft='1rem'>
          <Link href='/work'>Work</Link>
        </Box>
        <Box margin='0 2rem 0 1rem'>
          <Link href='/contact'>Contact</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
