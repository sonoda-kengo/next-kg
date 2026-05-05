import { Avatar, Box, Chip, Typography } from '@mui/material';

interface SkillItem {
  label: string;
  icon: string;
}

interface SkillCategory {
  name: string;
  color: string;
  bg: string;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    name: 'Frontend',
    color: '#1565c0',
    bg: '#e3f2fd',
    skills: [
      { label: 'TypeScript', icon: '/logo/language/typescript.svg' },
      { label: 'React', icon: '/logo/framework/react.svg' },
      { label: 'Next.js', icon: '/logo/framework/next.svg' },
      { label: 'Nuxt', icon: '/logo/framework/nuxt.svg' },
      { label: 'MUI', icon: '/logo/framework/material-ui.svg' },
    ],
  },
  {
    name: 'Backend',
    color: '#1b5e20',
    bg: '#e8f5e9',
    skills: [
      { label: 'Python', icon: '/logo/language/python.svg' },
      { label: 'FastAPI', icon: '/logo/framework/fastapi.svg' },
      { label: 'Django', icon: '/logo/framework/django.svg' },
      { label: 'Node.js', icon: '/logo/framework/nodejs.svg' },
    ],
  },
  {
    name: 'AI / Agent',
    color: '#4a148c',
    bg: '#f3e5f5',
    skills: [
      { label: 'Claude', icon: '/logo/tool/anthropic.svg' },
      { label: 'Mastra', icon: '/logo/tool/mastra.svg' },
      { label: 'Azure AI Search', icon: '/logo/host/azure.svg' },
    ],
  },
  {
    name: 'Tools & Infra',
    color: '#37474f',
    bg: '#eceff1',
    skills: [
      { label: 'Cursor', icon: '/logo/tool/cursor.svg' },
      { label: 'Docker', icon: '/logo/tool/docker.svg' },
      { label: 'Git', icon: '/logo/tool/git.svg' },
      { label: 'Vercel', icon: '/logo/host/vercel_black.svg' },
    ],
  },
];

export const HomeSkillChips = () => (
  <Box display='flex' flexDirection='column' gap={2}>
    {categories.map((cat) => (
      <Box key={cat.name}>
        <Typography variant='caption' fontWeight='bold' color='text.secondary' letterSpacing={1} sx={{ textTransform: 'uppercase' }}>
          {cat.name}
        </Typography>
        <Box display='flex' flexWrap='wrap' gap={1} mt={0.5}>
          {cat.skills.map((s) => (
            <Chip
              key={s.label}
              size='small'
              avatar={<Avatar src={s.icon} sx={{ bgcolor: 'transparent' }} />}
              label={s.label}
              sx={{
                bgcolor: cat.bg,
                color: cat.color,
                fontWeight: 500,
                '& .MuiChip-avatar': { width: 18, height: 18 },
              }}
            />
          ))}
        </Box>
      </Box>
    ))}
  </Box>
);
