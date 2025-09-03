import { createBrowserRouter } from 'react-router';
import App from './App';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import CocktailInfoPage from './pages/CocktailInfoPage';
import { fetchCocktailById, fetchRandomCocktail } from './api/cocktailApi';
import { Loader } from './components/UI/Loader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: async () => {
          return await fetchRandomCocktail();
        },
      },
      {
        path: 'search',
        element: <SearchPage />,
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
