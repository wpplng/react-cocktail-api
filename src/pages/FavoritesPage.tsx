import type { ReactElement } from 'react';
import { Typography, Grid, styled } from '@mui/material';
import { useFavorites } from '../context/useFavorites';
import type { IFavoritesContext } from '../utilities/types';
import CocktailCard from '../components/Cocktail/CocktailCard';

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(4),
  textAlign: 'center',
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const FavoritesPage = (): ReactElement => {
  const { favorites } = useFavorites() as IFavoritesContext;

  if (favorites.length === 0) {
    return (
      <StyledTypography variant='h5'>
        You have no favorite cocktails yet
      </StyledTypography>
    );
  }

  return (
    <StyledGrid container spacing={3}>
      {favorites.map((cocktail) => (
        <Grid size={{ xs: 12, md: 4, sm: 6 }} key={cocktail.id}>
          <CocktailCard cocktail={cocktail} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default FavoritesPage;
