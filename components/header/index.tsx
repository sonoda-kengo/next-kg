import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: '#fffcf9', color: 'black', fontFamily: 'cursive' }}
    >
      <Toolbar disableGutters>
        <Typography variant='h6' component='a' href='/' marginLeft='40px' fontFamily='serif'>
          Kengo Sonoda
        </Typography>

        <Box margin='0 40px 0 auto'>
          <Link href='/about'>About</Link>
        </Box>
        <Box margin='0 40px'>
          <Link href='/work'>Work</Link>
        </Box>
        <Box margin='0 40px'>
          <Link href='/contact'>Contact</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
