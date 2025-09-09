import type { ReactElement } from 'react';
import { Pagination as MuiPagination } from '@mui/material';
import type { ICocktail } from '../../utilities/types';
import { itemsPerPage } from '../../utilities/constants';

interface PaginationProps {
  results: ICocktail[];
  page: number;
  onChange: (value: number) => void;
}

export const Pagination = ({
  results,
  page,
  onChange,
}: PaginationProps): ReactElement => {
  return (
    <MuiPagination
      count={Math.ceil(results.length / itemsPerPage)}
      page={page}
      onChange={(_, value) => onChange(value)}
      sx={{ mt: 2 }}
    />
  );
};
