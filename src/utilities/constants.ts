import type { INavElement } from './types';

export const baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

export const itemsPerPage: number = 10;

export const navElements: INavElement[] = [
  { id: 1, source: '/', name: 'Home' },
  { id: 2, source: '/favorites', name: 'Favorites' },
  { id: 3, source: '/search', name: 'Search' },
];
