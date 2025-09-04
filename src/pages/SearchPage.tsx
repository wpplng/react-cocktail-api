import { useState, type ReactElement } from 'react';
import { Form, Link, useActionData, useNavigation } from 'react-router';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Pagination,
  Typography,
} from '@mui/material';
import type { ICocktail } from '../utilities/types';
import { Loader } from '../components/UI/Loader';

const SearchPage = (): ReactElement => {
  const results = (useActionData() as ICocktail[]) || [];
  const navigation = useNavigation();

  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const paginated = results.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        Search Cocktails
      </Typography>

      <Form method='post'>
        <input
          type='text'
          name='query'
          placeholder='Search by name...'
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        <Button type='submit' variant='contained'>
          Search
        </Button>
      </Form>

      {navigation.state === 'submitting' && <Loader />}
      {results.length > 0 && (
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
      )}

      {results.length === 0 && navigation.state === 'idle' && (
        <Typography sx={{ mt: 2 }}>
          Try searching for a cocktail above
        </Typography>
      )}
    </Box>
  );
};

export default SearchPage;
