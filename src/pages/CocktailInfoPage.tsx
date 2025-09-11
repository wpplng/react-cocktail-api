import { type ReactElement } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router';
import type { ICocktail } from '../utilities/types';
import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import CocktailIngredients from '../components/Cocktail/CocktailIngredients';
import CocktailHeader from '../components/Cocktail/CocktailHeader';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const CocktailImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius:
    typeof theme.shape.borderRadius === 'number'
      ? theme.shape.borderRadius * 2
      : `calc(${theme.shape.borderRadius} * 2)`,
  boxShadow: theme.shadows[3],
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(1),
}));

const CocktailInfoPage = (): ReactElement => {
  const cocktail = useLoaderData() as ICocktail;
  const location = useLocation();

  if (!location.state) {
    return <Navigate to='/' replace />;
  }

  return (
    <StyledPaper elevation={3}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <CocktailImage src={cocktail.thumbnail} alt={cocktail.name} />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <CocktailHeader cocktail={cocktail} />
          <Typography variant='subtitle1' color='text.secondary' gutterBottom>
            {cocktail.category} •{' '}
            {cocktail.alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Glass: {cocktail.glass}
          </Typography>
          {cocktail.tags.length > 0 && (
            <Box mb={2}>
              {cocktail.tags.map((tag) => (
                <StyledChip key={tag} label={tag} />
              ))}
            </Box>
          )}
          <StyledDivider />
          <Typography variant='h6' gutterBottom>
            Ingredients
          </Typography>
          <CocktailIngredients ingredients={cocktail.ingredients} />
          <StyledDivider />
          <Typography variant='h6' gutterBottom>
            Instructions
          </Typography>
          <Typography>{cocktail.instructions}</Typography>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default CocktailInfoPage;
