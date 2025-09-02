import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import { fetchRandomCocktail } from '../api/cocktailApi';
import type { ICocktail } from '../api/mapRawCocktailData';

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

  return <div>{cocktail?.name}</div>;
};

export default LandingPage;
