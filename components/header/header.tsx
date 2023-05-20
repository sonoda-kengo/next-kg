import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar position='static' sx={{ letterSpacing: 2 }} color='primary'>
      <Toolbar disableGutters>
        <Typography variant='h6' component='a' href='/' marginLeft='4rem'>
          KG
        </Typography>
        <Box marginLeft='auto'>
          <Link href='/about'>About</Link>
        </Box>
        <Box marginLeft='1rem'>
          <Link href='/work'>Work</Link>
        </Box>
        <Box marginLeft='1rem'>
          <Link href='/blog'>Blog</Link>
        </Box>
        <Box margin='0 4rem 0 1rem'>
          <Link href='/contact'>Contact</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
