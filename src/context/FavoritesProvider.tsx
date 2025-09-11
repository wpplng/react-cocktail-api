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

  // not in use right now but keeping for future possible implementations
  const addFavorite = (cocktail: ICocktail): void => {
    setFavorites((prev) =>
      prev.some((c) => c.id === cocktail.id) ? prev : [...prev, cocktail]
    );
  };

  // not in use right now but keeping for future possible implementations
  const removeFavorite = (id: string): void => {
    setFavorites((prev) => prev.filter((c) => c.id !== id));
  };

  const checkIfFavorite = (cocktail: ICocktail): boolean =>
    favorites.some((c) => c.id === cocktail.id);

  const toggleFavorite = (cocktail: ICocktail): void => {
    setFavorites((prev) =>
      prev.some((c) => c.id === cocktail.id)
        ? prev.filter((c) => c.id !== cocktail.id)
        : [...prev, cocktail]
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        checkIfFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
