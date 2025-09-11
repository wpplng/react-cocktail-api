import { useEffect, useState, type ReactElement } from 'react';
import {
  Form,
  useLoaderData,
  useSearchParams,
  useNavigation,
  type Navigation,
} from 'react-router';
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import type { ICocktail } from '../utilities/types';
import { Loader } from '../components/UI/Loader';
import CocktailList from '../components/Cocktail/CocktailList';

const StyledInput = styled('input')(() => ({
  marginRight: '0.2rem',
  border: '1px solid lightGray',
  borderRadius: '20px',
  padding: '1rem 0.8rem',
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SearchPage = (): ReactElement => {
  const results = (useLoaderData() as ICocktail[]) || [];
  const navigation = useNavigation() as Navigation;
  const [searchParams] = useSearchParams();
  const [nonAlcoholic, setNonAlcoholic] = useState<boolean>(
    searchParams.get('nonAlcoholic') === 'true'
  );

  useEffect(() => {
    setNonAlcoholic(searchParams.get('nonAlcoholic') === 'true');
  }, [searchParams]);

  return (
    <Box>
      <Typography variant='h4' gutterBottom>
        Search Cocktails
      </Typography>
      <Form method='get'>
        <StyledInput
          type='text'
          name='query'
          placeholder='Search by name'
          defaultValue={searchParams.get('query') ?? ''}
        />
        <StyledFormControlLabel
          control={
            <Checkbox
              name='nonAlcoholic'
              value='true'
              checked={nonAlcoholic}
              onChange={(e) => setNonAlcoholic(e.target.checked)}
            />
          }
          label='Show only non-alcoholic'
        />
        <IconButton type='submit'>
          <SearchIcon />
        </IconButton>
      </Form>
      {navigation.state === 'loading' && <Loader />}
      {results.length > 0 && <CocktailList results={results} />}
      {results.length === 0 &&
        navigation.state === 'idle' &&
        searchParams.size === 0 && (
          <StyledTypography>
            Try searching for a cocktail above
          </StyledTypography>
        )}
      {results.length === 0 &&
        navigation.state === 'idle' &&
        searchParams.size !== 0 && (
          <StyledTypography>
            No matches for your search, try again
          </StyledTypography>
        )}
    </Box>
  );
};

export default SearchPage;
