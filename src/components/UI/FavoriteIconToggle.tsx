import { type ReactElement } from 'react';
import { IconButton, styled } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useFavorites } from '../../context/useFavorites';
import type { ICocktail, IFavoritesContext } from '../../utilities/types';
import { red } from '@mui/material/colors';

interface FavoriteIconToggleProps {
  cocktail: ICocktail;
  fontSize?: 'inherit' | 'small' | 'medium' | 'large';
}

const FavoriteIcon = styled(Favorite)(() => ({
  color: red[300],
}));

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
        <FavoriteIcon fontSize={fontSize} />
      ) : (
        <FavoriteBorder fontSize={fontSize} />
      )}
    </IconButton>
  );
};
