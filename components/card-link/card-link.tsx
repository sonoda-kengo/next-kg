import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ICardLinkProps {
  href: string;
  title: string;
  imagePath: string;
  children: ReactNode;
}

export const CardLink = ({ href, title, imagePath, children }: ICardLinkProps) => {
  return (
    <Card sx={{ width: '280px', height: '400px' }}>
      <Link href={href}>
        <CardMedia component='img' height='180px' image={imagePath} alt={title} />
        <CardContent sx={{ height: '220px' }}>
          <Typography sx={{ letterSpacing: 3 }} variant='h5'>
            {title}
          </Typography>
          <Typography color='text.secondary'>{children}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
};
