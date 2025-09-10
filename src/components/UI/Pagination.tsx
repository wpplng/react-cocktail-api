import type { ReactElement } from 'react';
import { Pagination as MuiPagination, styled } from '@mui/material';
import type { ICocktail } from '../../utilities/types';
import { itemsPerPage } from '../../utilities/constants';

interface PaginationProps {
  results: ICocktail[];
  page: number;
  onChange: (value: number) => void;
}

const StyledPagination = styled(MuiPagination)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const Pagination = ({
  results,
  page,
  onChange,
}: PaginationProps): ReactElement => {
  return (
    <StyledPagination
      count={Math.ceil(results.length / itemsPerPage)}
      page={page}
      onChange={(_, value) => onChange(value)}
    />
  );
};
