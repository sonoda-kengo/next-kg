import { Box, Container } from '@mui/material';
import { ReactElement } from 'react';
import Footer from './footer/footer';
import Header from './header/header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <Box mb={6}>
          <main>{children}</main>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
