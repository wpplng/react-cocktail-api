import { createContext } from 'react';
import type { ICocktail } from '../utilities/types';

interface FavoritesContextProps {
  favorites: ICocktail[];
  addFavorite: (cocktail: ICocktail) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps | null>(
  null
);
