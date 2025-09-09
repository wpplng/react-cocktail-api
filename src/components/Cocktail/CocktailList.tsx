import { useState, type ReactElement } from 'react';
import type { ICocktail } from '../../utilities/types';
import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { Link } from 'react-router';
import { Pagination } from '../UI/Pagination';
import { itemsPerPage } from '../../utilities/constants';

interface CocktailListProps {
  results: ICocktail[];
}

const CocktailList = ({ results }: CocktailListProps): ReactElement => {
  const [page, setPage] = useState(1);

  const paginated = results.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleSetPage = (value: number) => {
    setPage(value);
  };

  return (
    <Box mt={3}>
      <List>
        {paginated.map((cocktail) => (
          <ListItem key={cocktail.id} disablePadding>
            <ListItemButton
              component={Link}
              to={`/cocktail/${cocktail.id}`}
              state={{ fromComponent: true }}
            >
              {cocktail.name}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {results.length > itemsPerPage && (
        <Pagination results={results} page={page} onChange={handleSetPage} />
      )}
    </Box>
  );
};

export default CocktailList;
