import type { ReactElement } from 'react';
import { Link } from 'react-router';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
          <Card sx={{ margin: 'auto' }}>
            <CardMedia
              component='img'
              height='200'
              image={cocktail.thumbnail}
              alt={cocktail.name}
            />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='h6'>{cocktail.name}</Typography>
                <FavoriteIcon onClick={() => removeFavorite(cocktail.id)} />
              </Box>
              <Button
                component={Link}
                to={`/cocktail/${cocktail.id}`}
                state={{ fromComponent: true }}
                sx={{ m: 1 }}
              >
                View
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FavoritesPage;
