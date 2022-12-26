import { Box } from '@mui/material';
import Image from 'next/image';

interface IRowListItem {
  src: string;
  alt: string;
}

export const HoverIcon = ({ src, alt }: IRowListItem) => {
  return (
    <Box margin={1}>
      <Image src={src} alt={alt} width={70} height={70} />
    </Box>
  );
};
