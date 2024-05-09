import { Box, Typography } from '@mui/material';

type ItemProps = {
  title: string;
  text: string | number;
  isTitle?: boolean;
};

export const Item = ({ title, text, isTitle = false }: ItemProps) => {
  return (
    <Box display="flex" gap={1}>
      <Typography fontWeight='bold'>{`${title}${isTitle ? '' : ': '}`}</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};
