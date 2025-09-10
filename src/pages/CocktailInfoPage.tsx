import { type ReactElement } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router';
import type { ICocktail } from '../utilities/types';
import {
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from '../context/useFavorites';

const CocktailInfoPage = (): ReactElement => {
  const cocktail = useLoaderData() as ICocktail;
  const { toggleFavorite, checkIfFavorite } = useFavorites();
  const location = useLocation();

  if (!location.state) {
    return <Navigate to='/' replace />;
  }

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            component='img'
            src={cocktail.thumbnail}
            alt={cocktail.name}
            sx={{
              width: '100%',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Typography variant='h4'>{cocktail.name}</Typography>

            {checkIfFavorite(cocktail) ? (
              <FavoriteIcon
                fontSize='large'
                onClick={() => toggleFavorite(cocktail)}
              />
            ) : (
              <FavoriteBorderIcon
                fontSize='large'
                onClick={() => toggleFavorite(cocktail)}
              />
            )}
          </Box>

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
                <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />
              ))}
            </Box>
          )}

          <Divider sx={{ my: 2 }} />

          <Typography variant='h6' gutterBottom>
            Ingredients
          </Typography>
          <List dense>
            {cocktail.ingredients.map((ing, index) => (
              <ListItem sx={{ paddingLeft: '0' }} key={index}>
                <ListItemText
                  primary={
                    <Typography
                      component='span'
                      variant='body2'
                      sx={{
                        color: 'text.primary',
                        display: 'inline',
                        marginRight: '1rem',
                      }}
                    >
                      {ing.ingredient}
                    </Typography>
                  }
                  secondary={
                    <Typography
                      component='span'
                      variant='body2'
                      sx={{ color: 'text.secondary', display: 'inline' }}
                    >
                      {ing.measure ? ing.measure : ''}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Typography variant='h6' gutterBottom>
            Instructions
          </Typography>
          <Typography>{cocktail.instructions}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CocktailInfoPage;
