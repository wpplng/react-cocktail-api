import { useState, type ReactElement } from 'react';
import {
  Form,
  useActionData,
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
  marginRight: '1rem',
  border: '1px solid lightGray',
  borderRadius: '20px',
  padding: '1rem 0.8rem',
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SearchPage = (): ReactElement => {
  const results = (useActionData() as ICocktail[]) || [];
  const navigation = useNavigation() as Navigation;
  const [showNonAlcoholic, setShowNonAlcoholic] = useState<boolean>(false);
  const filteredResults: ICocktail[] = showNonAlcoholic
    ? results.filter((c) => !c.alcoholic)
    : results;

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
      {results.length > 0 && (
        <StyledFormControlLabel
          control={
            <Checkbox
              checked={showNonAlcoholic}
              onChange={(e) => setShowNonAlcoholic(e.target.checked)}
            />
          }
          label='Show only non-alcoholic'
          sx={{ mt: 2 }}
        />
      )}
      {navigation.state === 'submitting' && <Loader />}
      {filteredResults.length > 0 && <CocktailList results={filteredResults} />}
      {results.length === 0 && navigation.state === 'idle' && (
        <StyledTypography>Try searching for a cocktail above</StyledTypography>
      )}
    </Box>
  );
};

export default SearchPage;
