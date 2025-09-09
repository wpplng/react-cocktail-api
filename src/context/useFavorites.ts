import { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';
import type { IFavoritesContext } from '../utilities/types';

export const useFavorites = (): IFavoritesContext => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error('FavoritesContext is not available');
  }
  return ctx;
};
