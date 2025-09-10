import { Box, CircularProgress, styled } from '@mui/material';
import type { ReactElement } from 'react';

const StyledLoaderBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Loader = (): ReactElement => {
  return (
    <StyledLoaderBox>
      <CircularProgress />
    </StyledLoaderBox>
  );
};
