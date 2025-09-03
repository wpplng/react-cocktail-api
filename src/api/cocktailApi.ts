import { mapRawCocktailData } from './mapRawCocktailData';
import type { ICocktail } from '../utilities/types';

export const fetchRandomCocktail = async (): Promise<ICocktail> => {
  const res = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  );
  if (!res.ok) throw new Error('Failed to fetch cocktail');
  const data = await res.json();
  return mapRawCocktailData(data.drinks[0]);
};

export const fetchCocktailById = async (id: string): Promise<ICocktail> => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!res.ok) throw new Error('Failed to fetch cocktail details');
  const data = await res.json();
  return mapRawCocktailData(data.drinks[0]);
};
