import { useState, type ReactElement } from 'react';
import type { ICocktail } from '../../utilities/types';
import { Box, List, ListItem, ListItemButton, Pagination } from '@mui/material';
import { Link } from 'react-router';

interface CocktailListProps {
  results: ICocktail[];
}

const CocktailList = ({ results }: CocktailListProps): ReactElement => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const paginated = results.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

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
        <Pagination
          count={Math.ceil(results.length / itemsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ mt: 2 }}
        />
      )}
    </Box>
  );
};

export default CocktailList;
