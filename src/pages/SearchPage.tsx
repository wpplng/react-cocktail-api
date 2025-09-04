import type { ReactElement } from 'react';
import { Form, useActionData, useNavigation } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
import type { ICocktail } from '../utilities/types';
import { Loader } from '../components/UI/Loader';

const SearchPage = (): ReactElement => {
  const results = (useActionData() as ICocktail[]) || [];
  const navigation = useNavigation();

  console.log(results);

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
    </Box>
  );
};

export default SearchPage;
