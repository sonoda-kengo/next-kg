import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useTranslation from 'next-translate/useTranslation';
import { useLayoutEffect, useRef } from 'react';
import { CardLink } from 'components/card-link/card-link';
import Layout from 'components/layout';

export default function Home() {
  const { t } = useTranslation('common');

  const el_scroll = useRef<HTMLDivElement>(null);
  const el = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (el_scroll) {
        gsap.from('.scroll_about', {
          scrollTrigger: {
            trigger: '.scroll_about',
            scrub: true,
            start: 'top bottom',
            end: 'top top',
          },
          scaleX: 0,
          transformOrigin: 'left center',
          ease: 'none',
        });
      }
      if (el) {
        gsap.from('.box', {
          y: 1000,
          duration: 1,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Layout>
      <Container>
        <div className='box' ref={el}>
          <Box>
            <h1 dangerouslySetInnerHTML={{ __html: t('home_msg') }} />
          </Box>
        </div>
        <Box marginY={4}>
          <Typography variant='h2' className='scroll_about' ref={el_scroll}>
            About
          </Typography>
        </Box>
        <Box marginY={4}>
          <Typography variant='h2' className='scroll_about' ref={el_scroll}>
            Work
          </Typography>
        </Box>
        <Grid container direction='row' alignContent='center' justifyContent='center'>
          <Grid item sx={{ margin: '80px 100px' }}>
            <CardLink href='/about' imagePath='/images/test.jpg' title='About'>
              {t('card_about_msg')}
            </CardLink>
          </Grid>
          <Grid item sx={{ margin: '80px 100px' }}>
            <CardLink href='/work' imagePath='/images/test.jpg' title='Work'>
              {t('card_work_msg')}
            </CardLink>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
