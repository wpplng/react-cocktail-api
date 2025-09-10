import { useState, type ReactElement } from 'react';
import type { ICocktail } from '../../utilities/types';
import { Box, List, ListItem, ListItemButton, styled } from '@mui/material';
import { Link } from 'react-router';
import { Pagination } from '../UI/Pagination';
import { itemsPerPage } from '../../utilities/constants';

interface CocktailListProps {
  results: ICocktail[];
}

const StyledListItem = styled(ListItem)(() => ({
  padding: '0',
  fontSize: '1rem',
}));

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
          <StyledListItem key={cocktail.id}>
            <ListItemButton
              component={Link}
              to={`/cocktail/${cocktail.id}`}
              state={{ fromComponent: true }}
            >
              {cocktail.name}
            </ListItemButton>
          </StyledListItem>
        ))}
      </List>
      {results.length > itemsPerPage && (
        <Pagination results={results} page={page} onChange={handleSetPage} />
      )}
    </Box>
  );
};

export default CocktailList;
