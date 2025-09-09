import { createBrowserRouter } from 'react-router';
import App from './App';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import CocktailInfoPage from './pages/CocktailInfoPage';
import {
  fetchCocktailById,
  fetchRandomCocktail,
  searchCocktails,
} from './api/cocktailApi';
import { Loader } from './components/UI/Loader';
import { ErrorMessage } from './components/UI/ErrorMessage';
import FavoritesPage from './pages/FavoritesPage';

// FIXME: Move loaders and actions to another file
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    hydrateFallbackElement: <Loader />,
    errorElement: <ErrorMessage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: async () => {
          return await fetchRandomCocktail();
        },
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
        action: async ({ request }: { request: Request }) => {
          const formData = await request.formData();
          const query = formData.get('query') as string;
          if (!query) return [];
          return await searchCocktails(query);
        },
      },
      {
        path: 'cocktail/:id',
        element: <CocktailInfoPage />,
        loader: async ({ params }) => {
          if (!params.id) throw new Error('Missing cocktail id');
          return await fetchCocktailById(params.id);
        },
      },
    ],
  },
]);
