export type AppRoute = '/' | '/favorites' | '/search';

export interface IIngredient {
  ingredient: string;
  measure: string | null;
}

export interface ICocktail {
  id: string;
  name: string;
  tags: string[];
  category: string;
  alcoholic: boolean;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: IIngredient[];
}

export interface IFavoritesContext {
  favorites: ICocktail[];
  addFavorite: (cocktail: ICocktail) => void;
  removeFavorite: (id: string) => void;
  checkIfFavorite: (cocktail: ICocktail) => boolean;
  toggleFavorite: (cocktail: ICocktail) => void;
}

export interface INavElement {
  id: number;
  source: AppRoute;
  name: string;
}
