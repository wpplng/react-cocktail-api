import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import './index.css';
import { FavoritesProvider } from './context/FavoritesProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
  </StrictMode>
);
