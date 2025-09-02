import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';
import { fetchRandomCocktail } from '../api/cocktailApi';
import type { ICocktail } from '../api/mapRawCocktailData';
import CocktailCard from '../components/Cocktail/CocktailCard';

const LandingPage = (): ReactElement => {
  const [cocktail, setCocktail] = useState<ICocktail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadRandomCocktail = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchRandomCocktail();
      setCocktail(data);
      console.log(cocktail);
    } catch (err) {
      console.error(err);
      setError('Failed to load cocktail. Try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRandomCocktail();
  }, []);

  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant='h3' gutterBottom>
        Cocktail Wiki
      </Typography>

      <Button variant='contained' onClick={loadRandomCocktail} sx={{ mb: 3 }}>
        Get Random Cocktail
      </Button>

      {loading && <CircularProgress />}
      {error && <Typography color='error'>{error}</Typography>}

      {cocktail && (
        <Box display='flex' justifyContent='center'>
          <CocktailCard cocktail={cocktail} />
        </Box>
      )}
    </Container>
  );
};

export default LandingPage;
