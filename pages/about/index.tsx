import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Stack,
  Typography,
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { CardLink } from 'components/card-link/card-link';
import { HoverIcon } from 'components/icon/hover-icon';
import Layout from 'components/layout';
import { TypoUnderLine } from 'components/typography/typo-underline';

export default function About() {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container>
        <h1>About</h1>
        <Grid container alignContent='center' justifyContent='center'>
          <h4 dangerouslySetInnerHTML={{ __html: t('home_msg') }} />
        </Grid>
        <Box>
          <h2>skill</h2>
        </Box>
        <Box marginY={5}>
          <Typography>Langage</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/language/html-5.svg' alt='html-5' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/css-3.svg' alt='css-3' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/javascript.svg' alt='jsvascript' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/typescript.svg' alt='typescript' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/python.svg' alt='python' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/csharp.svg' alt='c#' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/php.svg' alt='php' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>Framework</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/framework/react.svg' alt='react' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/next.svg' alt='next' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/nodejs.svg' alt='node' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/threejs.svg' alt='three' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/express.svg' alt='express' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/laravel.svg' alt='laravel' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>OS</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/OS/apple.svg' alt='apple' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/OS/windows.svg' alt='windows' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>Hosting Service</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/host/aws.svg' alt='aws' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/host/vercel.svg' alt='vercel' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>Development Tool</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/tool/git.svg' alt='git' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/github.svg' alt='github' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/gitlab.svg' alt='gitlab' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/visual-studio-code.svg' alt='vs-code' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/visual-studio.svg' alt='visual-studio' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/figma.svg' alt='figma' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/storybook.svg' alt='storybook' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/material-ui.svg' alt='mui' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/postman.svg' alt='postman' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/jupyter.svg' alt='jupyter' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/anaconda.svg' alt='anaconda' />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
