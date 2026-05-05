import { Box, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import { HoverGrid } from 'components/grid/hover-grid';

export const Ai_202511 = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={3} my={2}>
        <Typography color='text.secondary'>Nov.2025 - PRESENT</Typography>
      </Grid>
      <HoverGrid>
        <Grid margin={2}>
          <Typography variant='h5' mb={1}>
            AI Engineer
          </Typography>
          <Box>
            <Typography>
              Developed a RAG (Retrieval-Augmented Generation) system to enable semantic search and
              AI-powered Q&amp;A over internal documents.
            </Typography>
            <Typography>
              Built and integrated vector search pipelines using Azure AI Search, and exposed them
              via a FastAPI backend with a Next.js frontend.
            </Typography>
            <Typography>
              Implemented AI agent workflows using Mastra to automate multi-step tasks and
              orchestrate LLM-based decision making.
            </Typography>
          </Box>
          <Stack direction='row' margin={2} spacing={{ xs: 1, sm: 2 }} flexWrap='wrap'>
            <Chip label='Azure AI Search' />
            <Chip label='FastAPI' />
            <Chip label='Python' />
          </Stack>
          <Divider flexItem sx={{ width: '95%', marginX: 'auto' }} />
          <Stack direction='row' margin={2} spacing={{ xs: 1, sm: 2 }} flexWrap='wrap'>
            <Chip label='Next.js' />
            <Chip label='TypeScript' />
            <Chip label='Mastra' />
          </Stack>
        </Grid>
      </HoverGrid>
    </Grid>
  );
};
