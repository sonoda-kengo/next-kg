import { Box, Container, Grid, Typography } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { HoverIcon } from 'components/icon/hover-icon';
import Layout from 'components/layout';

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
              <HoverIcon src='/logo/language/html-5.svg' title='HTML-5' subTitle='4 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/css-3.svg' title='CSS-3' subTitle='4 years' />
            </Grid>
            <Grid item>
              <HoverIcon
                src='/logo/language/javascript.svg'
                title='JavaScript'
                subTitle='3 years'
              />
            </Grid>
            <Grid item>
              <HoverIcon
                src='/logo/language/typescript.svg'
                title='TypeScript'
                subTitle='1 years'
              />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/python.svg' title='python' subTitle='2 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/csharp.svg' title='C#' subTitle='2 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/language/php.svg' title='PHP' subTitle='1 years' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>Framework</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/framework/react.svg' title='React' subTitle='1 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/next.svg' title='Next' subTitle='0.5 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/nodejs.svg' title='Node' subTitle='1 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/threejs.svg' title='Three' subTitle='0.5 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/express.svg' title='Express' subTitle='0.5 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/framework/laravel.svg' title='Laravel' subTitle='0.5 years' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>OS</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/OS/apple.svg' title='MacOS' subTitle='3 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/OS/windows.svg' title='Windows' subTitle='3 years' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>Hosting Service</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/host/aws.svg' title='AWS' subTitle='0.5 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/host/vercel.svg' title='Vercel' subTitle='1 years' />
            </Grid>
          </Grid>
        </Box>
        <Box marginY={5}>
          <Typography>Development Tool</Typography>
          <Grid container>
            <Grid item>
              <HoverIcon src='/logo/tool/git.svg' title='git' subTitle='3 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/github.svg' title='git Hub' subTitle='3 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/gitlab.svg' title='git Lab' subTitle='3 years' />
            </Grid>
            <Grid item>
              <HoverIcon
                src='/logo/tool/visual-studio-code.svg'
                title='VsCode'
                subTitle='4 years'
              />
            </Grid>
            <Grid item>
              <HoverIcon
                src='/logo/tool/visual-studio.svg'
                title='Visual Studio'
                subTitle='3 years'
              />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/figma.svg' title='Figma' subTitle='0.5 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/storybook.svg' title='storybook' subTitle='0.5 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/material-ui.svg' title='MUI' subTitle='0.5 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/postman.svg' title='postman' subTitle='2 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/jupyter.svg' title='jupyter' subTitle='1 years' />
            </Grid>
            <Grid item>
              <HoverIcon src='/logo/tool/anaconda.svg' title='anaconda' subTitle='2 years' />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
