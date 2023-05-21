import { AppBar, Box, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const mobileMargin = '1rem';
  const desktopMargin = '4rem';
  const responsibleMargin = isMobile ? mobileMargin : desktopMargin;
  return (
    <AppBar position='static' sx={{ letterSpacing: 2 }} color='primary'>
      <Toolbar disableGutters>
        <Typography variant='h6' component='a' href='/' ml={responsibleMargin}>
          KG
        </Typography>
        <Box ml='auto' mr={responsibleMargin} display='flex' alignItems='center'>
          <Link href='/about'>
            <Typography ml={responsibleMargin}>About</Typography>
          </Link>
          <Link href='/work'>
            <Typography ml={responsibleMargin}>Work</Typography>
          </Link>
          <Link href='/blog'>
            <Typography ml={responsibleMargin}>Blog</Typography>
          </Link>
          <Link href='/contact'>
            <Typography ml={responsibleMargin}>Contact</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
