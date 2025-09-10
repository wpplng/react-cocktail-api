import { type ReactElement } from 'react';
import { IconButton } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from '../../context/useFavorites';
import type { ICocktail, IFavoritesContext } from '../../utilities/types';

interface FavoriteIconToggleProps {
  cocktail: ICocktail;
  fontSize?: 'inherit' | 'small' | 'medium' | 'large';
}

export const FavoriteIconToggle = ({
  cocktail,
  fontSize = 'medium',
}: FavoriteIconToggleProps): ReactElement => {
  const { checkIfFavorite, toggleFavorite } =
    useFavorites() as IFavoritesContext;

  const active = checkIfFavorite(cocktail);

  return (
    <IconButton onClick={() => toggleFavorite(cocktail)}>
      {active ? (
        <Favorite fontSize={fontSize} sx={{ color: 'black' }} />
      ) : (
        <FavoriteBorder fontSize={fontSize} />
      )}
    </IconButton>
  );
};
