import type { ReactElement } from 'react';
import { Typography, Grid } from '@mui/material';
import { useFavorites } from '../context/useFavorites';
import type { IFavoritesContext } from '../utilities/types';
import CocktailCard from '../components/Cocktail/CocktailCard';

const FavoritesPage = (): ReactElement => {
  const { favorites } = useFavorites() as IFavoritesContext;

  if (favorites.length === 0) {
    return (
      <Typography variant='h5' sx={{ mt: 4, textAlign: 'center' }}>
        You have no favorite cocktails yet
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {favorites.map((cocktail) => (
        <Grid size={{ xs: 12, md: 4, sm: 6 }} key={cocktail.id}>
          <CocktailCard cocktail={cocktail} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoritesPage;
