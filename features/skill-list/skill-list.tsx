import { Box, Grid, Typography } from '@mui/material';
import { HoverIcon } from 'components/icon/hover-icon';

// d(year, month) — month is 1-indexed
const d = (year: number, month: number) => new Date(year, month - 1, 1);

export const SkillList = () => {
  return (
    <>
      <Box marginY={5}>
        <Typography>Language</Typography>
        <Grid container>
          <Grid item>
            <HoverIcon src='/logo/language/html-5.svg' title='HTML' startDate={d(2020, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/css-3.svg' title='CSS' startDate={d(2020, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/javascript.svg' title='JavaScript' startDate={d(2021, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/typescript.svg' title='TypeScript' startDate={d(2022, 7)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/python.svg' title='Python' startDate={d(2021, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/csharp.svg' title='C#' startDate={d(2021, 4)} endDate={d(2023, 3)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/language/php.svg' title='PHP' startDate={d(2021, 7)} endDate={d(2021, 12)} />
          </Grid>
        </Grid>
      </Box>
      <Box marginY={5}>
        <Typography>Framework</Typography>
        <Grid container>
          <Grid item>
            <HoverIcon src='/logo/framework/react.svg' title='React' startDate={d(2022, 7)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/next.svg' title='Next.js' startDate={d(2021, 11)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/nuxt.svg' title='Nuxt' startDate={d(2026, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/material-ui.svg' title='MUI' startDate={d(2022, 7)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/django.svg' title='Django' startDate={d(2021, 4)} endDate={d(2023, 3)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/fastapi.svg' title='FastAPI' startDate={d(2025, 11)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/laravel.svg' title='Laravel' startDate={d(2021, 7)} endDate={d(2021, 12)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/nodejs.svg' title='Node.js' startDate={d(2022, 7)} endDate={d(2024, 3)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/express_black.svg' title='Express' startDate={d(2022, 7)} endDate={d(2023, 6)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/framework/threejs_black.svg' title='Three.js' startDate={d(2023, 4)} endDate={d(2023, 10)} />
          </Grid>
        </Grid>
      </Box>
      <Box marginY={5}>
        <Typography>AI / Cloud</Typography>
        <Grid container>
          <Grid item>
            <HoverIcon src='/logo/tool/anthropic.svg' title='Claude' startDate={d(2025, 12)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/mastra.svg' title='Mastra' startDate={d(2026, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/host/azure.svg' title='Azure AI Search' startDate={d(2025, 11)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/host/aws.svg' title='AWS' startDate={d(2022, 4)} endDate={d(2024, 3)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/host/vercel_black.svg' title='Vercel' startDate={d(2021, 11)} />
          </Grid>
        </Grid>
      </Box>
      <Box marginY={5}>
        <Typography>Development Tool</Typography>
        <Grid container>
          <Grid item>
            <HoverIcon src='/logo/tool/cursor.svg' title='Cursor' startDate={d(2024, 10)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/visual-studio-code.svg' title='VSCode' startDate={d(2021, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/github_black.svg' title='GitHub' startDate={d(2021, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/git.svg' title='Git' startDate={d(2021, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/docker.svg' title='Docker' startDate={d(2023, 4)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/figma.svg' title='Figma' startDate={d(2022, 7)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/postman.svg' title='Postman' startDate={d(2022, 4)} endDate={d(2024, 3)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/tool/storybook.svg' title='Storybook' startDate={d(2023, 4)} endDate={d(2024, 3)} />
          </Grid>
        </Grid>
      </Box>
      <Box marginY={5}>
        <Typography>OS</Typography>
        <Grid container>
          <Grid item>
            <HoverIcon src='/logo/OS/apple_black.svg' title='macOS' startDate={d(2022, 11)} />
          </Grid>
          <Grid item>
            <HoverIcon src='/logo/OS/windows.svg' title='Windows' startDate={d(2021, 4)} endDate={d(2023, 3)} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
