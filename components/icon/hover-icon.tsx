import { Box, Typography } from '@mui/material';
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
    <Box
      margin={2}
      onMouseOver={() => setIsDisplay(true)}
      onMouseOut={() => setIsDisplay(false)}
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Image src={src} alt={title} width={70} height={70} />
      {isDisplay && title && (
        <Box marginLeft='0.8rem'>
          <Typography color='textSecondary'>{title}</Typography>
          <Typography color='textSecondary'>{subTitle}</Typography>
        </Box>
      )}
    </Box>
  );
};
