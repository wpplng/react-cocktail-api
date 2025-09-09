import { createContext } from 'react';
import type { IFavoritesContext } from '../utilities/types';

export const FavoritesContext = createContext<IFavoritesContext | null>(null);
