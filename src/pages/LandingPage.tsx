import type { ReactElement } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import type { ICocktail } from '../utilities/types';
import CocktailCard from '../components/Cocktail/CocktailCard';
import { useLoaderData, useNavigate } from 'react-router';

const LandingPage = (): ReactElement => {
  const cocktail = useLoaderData() as ICocktail;
  const navigate = useNavigate();

  const handleNewRandom = () => {
    navigate(0);
  };

  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant='h3' gutterBottom>
        Cocktail Wiki
      </Typography>

      <Button variant='contained' onClick={handleNewRandom} sx={{ mb: 3 }}>
        Get Random Cocktail
      </Button>

      {cocktail && (
        <Box display='flex' justifyContent='center'>
          <CocktailCard cocktail={cocktail} />
        </Box>
      )}
    </Container>
  );
};

export default LandingPage;
