import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface IHoverIcon {
  src: string;
  title: string;
  startDate?: Date;
  endDate?: Date;
}

const calcYears = (startDate: Date, endDate?: Date): string => {
  const end = endDate ?? new Date();
  const years = (end.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  if (years < 1) return `${Math.round(years * 12)} mo`;
  return `${(Math.floor(years * 2) / 2).toFixed(1)} yrs`;
};

export const HoverIcon = ({ src, title, startDate, endDate }: IHoverIcon) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const subTitle = startDate ? calcYears(startDate, endDate) : undefined;

  return (
    <Box margin={2}>
      {!isDisplay && (
        <Grid
          container
          onMouseOver={() => setIsDisplay(true)}
          onMouseOut={() => setIsDisplay(false)}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Image src={src} alt={title} width={70} height={70} />
        </Grid>
      )}
      {isDisplay && title && (
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          direction='column'
          onMouseOver={() => setIsDisplay(true)}
          onMouseOut={() => setIsDisplay(false)}
          width={70}
          height={70}
        >
          <Typography color='textSecondary'>{title}</Typography>
          {subTitle && <Typography color='textSecondary'>{subTitle}</Typography>}
        </Grid>
      )}
    </Box>
  );
};
