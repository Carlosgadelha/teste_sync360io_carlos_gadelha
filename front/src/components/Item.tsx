import { Box, Typography } from '@mui/material';

type ItemProps = {
  title: string;
  text: string | number;
};

export const Item = ({ title, text }: ItemProps) => {
  return (
    <Box display="flex" gap={1}>
      <Typography fontWeight='bold'>{`${title}: `}</Typography>
      <Typography>{text}</Typography>
    </Box>
  );
};
