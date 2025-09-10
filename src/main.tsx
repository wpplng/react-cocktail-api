import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router';
import './styles/index.css';
import { FavoritesProvider } from './context/FavoritesProvider';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { CssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </FavoritesProvider>
  </StrictMode>
);
