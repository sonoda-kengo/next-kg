import '../styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      // mode: isDarkMode ? 'dark' : 'light',
      mode: 'light',
      primary: {
        main: '#e6e5de',
        // light: '#ffa2a3',
        // dark: '#a34449',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
