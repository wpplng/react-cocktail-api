import { Box, CircularProgress } from '@mui/material';
import type { ReactElement } from 'react';

export const Loader = (): ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
