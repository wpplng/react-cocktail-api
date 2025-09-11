import { fetchCocktailById, fetchRandomCocktail } from '../api/cocktailApi';
import type { LoaderFunctionArgs } from 'react-router';

export const landingPageLoader = async () => {
  return await fetchRandomCocktail();
};

export const cocktailByIdLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) throw new Error('Missing cocktail id');
  return await fetchCocktailById(params.id);
};
