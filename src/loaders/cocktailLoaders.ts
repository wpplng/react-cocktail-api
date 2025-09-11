import {
  fetchCocktailById,
  fetchRandomCocktail,
  searchCocktails,
} from '../api/cocktailApi';
import type { LoaderFunctionArgs } from 'react-router';
import type { ICocktail } from '../utilities/types';

export const landingPageLoader = async () => {
  return await fetchRandomCocktail();
};

export const cocktailByIdLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) throw new Error('Missing cocktail id');

  return await fetchCocktailById(params.id);
};

export const searchCocktailsLoader = async ({
  request,
}: {
  request: Request;
}) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');
  const nonAlcoholic = url.searchParams.get('nonAlcoholic') === 'true';

  if (!query) return [];

  const results: ICocktail[] = await searchCocktails(query);

  if (nonAlcoholic) {
    return results.filter((c) => !c.alcoholic);
  }

  return results;
};
