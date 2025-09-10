import { type ReactElement } from 'react';
import { Form, useActionData, useNavigation } from 'react-router';
import { Box, IconButton, Typography, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { ICocktail } from '../utilities/types';
import { Loader } from '../components/UI/Loader';
import CocktailList from '../components/Cocktail/CocktailList';

const StyledInput = styled('input')(() => ({
  marginRight: '1rem',
  border: '1px solid lightGray',
  borderRadius: '20px',
  padding: '1rem 0.8rem',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SearchPage = (): ReactElement => {
  const results = (useActionData() as ICocktail[]) || [];
  const navigation = useNavigation();

  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        Search Cocktails
      </Typography>
      <Form method='post'>
        <StyledInput type='text' name='query' placeholder='Search by name' />
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Form>
      {navigation.state === 'submitting' && <Loader />}
      {results.length > 0 && <CocktailList results={results} />}
      {results.length === 0 && navigation.state === 'idle' && (
        <StyledTypography>Try searching for a cocktail above</StyledTypography>
      )}
    </Box>
  );
};

export default SearchPage;
