import { createBrowserRouter } from 'react-router';
import App from './App';
import LandingPage from './pages/LandingPage';
import SearchPage from './pages/SearchPage';
import CocktailInfoPage from './pages/CocktailInfoPage';
import { Loader } from './components/UI/Loader';
import { ErrorMessage } from './components/UI/ErrorMessage';
import FavoritesPage from './pages/FavoritesPage';
import {
  cocktailByIdLoader,
  landingPageLoader,
} from './loaders/cocktailLoaders';
import { searchCocktailsAction } from './loaders/searchAction';

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
        loader: landingPageLoader,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
        action: searchCocktailsAction,
      },
      {
        path: 'cocktail/:id',
        element: <CocktailInfoPage />,
        loader: cocktailByIdLoader,
      },
    ],
  },
]);
