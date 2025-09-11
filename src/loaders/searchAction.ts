import { searchCocktails } from '../api/cocktailApi';
import type { ActionFunctionArgs } from 'react-router';

export const searchCocktailsAction = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const query = formData.get('query') as string;
  if (!query) return [];
  return await searchCocktails(query);
};
