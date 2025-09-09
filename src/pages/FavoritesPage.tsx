import type { ReactElement } from 'react';
import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { useFavorites } from '../context/useFavorites';
import type { IFavoritesContext } from '../utilities/types';

const FavoritesPage = (): ReactElement => {
  const { favorites, removeFavorite } = useFavorites() as IFavoritesContext;

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
          <Card>
            <CardMedia
              component='img'
              height='200'
              image={cocktail.thumbnail}
              alt={cocktail.name}
            />
            <CardContent>
              <Typography variant='h6'>{cocktail.name}</Typography>
              <Button
                component={Link}
                to={`/cocktail/${cocktail.id}`}
                state={{ fromComponent: true }}
                sx={{ mr: 1 }}
              >
                View
              </Button>
              <Button
                color='secondary'
                onClick={() => removeFavorite(cocktail.id)}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoritesPage;
