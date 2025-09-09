import { type ReactElement } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router';
import type { ICocktail } from '../utilities/types';
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { useFavorites } from '../context/useFavorites';

const CocktailInfoPage = (): ReactElement => {
  const cocktail = useLoaderData() as ICocktail;
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  // FIXME: Move to context provider
  const isFavorite = favorites.some((c) => c.id === cocktail.id);
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
          <Typography variant='h4' gutterBottom>
            {cocktail.name}
          </Typography>

          {/* FIXME: Change to icon */}
          <Button
            variant={isFavorite ? 'contained' : 'outlined'}
            color={isFavorite ? 'secondary' : 'primary'}
            onClick={() =>
              isFavorite ? removeFavorite(cocktail.id) : addFavorite(cocktail)
            }
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>

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
              <ListItem key={index}>
                <ListItemText
                  primary={`${ing.ingredient}`}
                  secondary={ing.measure ? ing.measure : ''}
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
