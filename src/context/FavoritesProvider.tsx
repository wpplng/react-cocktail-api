import { useState, useEffect, type ReactNode } from 'react';
import type { ICocktail } from '../utilities/types';
import { FavoritesContext } from './FavoritesContext';

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<ICocktail[]>(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? (JSON.parse(stored) as ICocktail[]) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (cocktail: ICocktail): void => {
    setFavorites((prev) =>
      prev.some((c) => c.id === cocktail.id) ? prev : [...prev, cocktail]
    );
  };

  const removeFavorite = (id: string): void => {
    setFavorites((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
