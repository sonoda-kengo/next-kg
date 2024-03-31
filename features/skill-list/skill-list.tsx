import { Box, Grid, Typography } from '@mui/material';
import { HoverIcon } from 'components/icon/hover-icon';

export const SkillList = () => {
  return (
    <>
      <Box marginY={5}>
        <Typography>Langage</Typography>
        <Grid container>
          <Grid item>
            <HoverIcon src='/logo/language/html-5.svg' title='HTML-5' subTitle='5 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/css-3.svg' title='CSS-3' subTitle='5 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/javascript.svg' title='JavaScript' subTitle='4 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/typescript.svg' title='TypeScript' subTitle='2 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/python.svg' title='python' subTitle='3 years' />
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
            <HoverIcon src='/logo/framework/next.svg' title='Next' subTitle='1.5 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/material-ui.svg' title='MUI' subTitle='1.5 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/django.svg' title='Django' subTitle='1 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/swagger.svg' title='Swagger' subTitle='1 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/nodejs.svg' title='Node' subTitle='1 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/threejs_black.svg' title='Three' subTitle='0.5 years' />
          </Grid>
          <Grid item>
            <HoverIcon
              src='/logo/framework/express_black.svg'
              title='Express'
              subTitle='0.5 years'
            />
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
            <HoverIcon src='/logo/OS/apple_black.svg' title='MacOS' subTitle='4 years' />
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
            <HoverIcon src='/logo/host/aws.svg' title='AWS' subTitle='3 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/host/vercel_black.svg' title='Vercel' subTitle='2 years' />
          </Grid>
        </Grid>
      </Box>
      <Box marginY={5}>
        <Typography>Development Tool</Typography>
        <Grid container>
          <Grid item>
            <HoverIcon src='/logo/tool/github_black.svg' title='git Hub' subTitle='4 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/git.svg' title='git' subTitle='3 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/gitlab.svg' title='git Lab' subTitle='3 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/visual-studio-code.svg' title='VsCode' subTitle='4 years' />
          </Grid>
          <Grid item>
            <HoverIcon
              src='/logo/tool/visual-studio.svg'
              title='Visual Studio'
              subTitle='5 years'
            />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/docker.svg' title='Docker' subTitle='1 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/figma.svg' title='Figma' subTitle='1.5 years' />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/storybook.svg' title='storybook' subTitle='0.5 years' />
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
    </>
  );
};
