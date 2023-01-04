import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface IHoverIcon {
  src: string;
  title: string;
  subTitle?: string;
}

export const HoverIcon = ({ src, title, subTitle }: IHoverIcon) => {
  const [isDisplay, setIsDisplay] = useState(false);

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
          <Typography color='textSecondary'>{subTitle}</Typography>
        </Grid>
      )}
    </Box>
  );
};
