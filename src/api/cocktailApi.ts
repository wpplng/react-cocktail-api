import { mapRawCocktailData } from './mapRawCocktailData';
import type { ICocktail } from '../utilities/types';
import { baseUrl } from '../utilities/constants';

export const fetchRandomCocktail = async (): Promise<ICocktail> => {
  const res = await fetch(`${baseUrl}random.php`);
  if (!res.ok) throw new Error('Failed to fetch cocktail');
  const data = await res.json();
  return mapRawCocktailData(data.drinks[0]);
};

export const fetchCocktailById = async (id: string): Promise<ICocktail> => {
  const res = await fetch(`${baseUrl}lookup.php?i=${id}`);
  if (!res.ok) throw new Error('Failed to fetch cocktail details');
  const data = await res.json();
  return mapRawCocktailData(data.drinks[0]);
};

export const searchCocktails = async (query: string): Promise<ICocktail[]> => {
  const res = await fetch(`${baseUrl}search.php?s=${query}`);
  if (!res.ok) throw new Error('Failed to search cocktails');
  const data = await res.json();
  if (!data.drinks) return [];
  return data.drinks.map(mapRawCocktailData);
};
