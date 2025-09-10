import type { ReactElement } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Button, Container, Typography, Box } from '@mui/material';

import type { ICocktail } from '../utilities/types';
import CocktailCard from '../components/Cocktail/CocktailCard';

const LandingPage = (): ReactElement => {
  const cocktail = useLoaderData() as ICocktail;
  const navigate = useNavigate();

  const handleNewRandom = () => {
    navigate(0);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mt: 4,
      }}
    >
      <Typography variant='h3' gutterBottom textAlign='center'>
        Cocktail Wiki
      </Typography>

      <Button variant='contained' onClick={handleNewRandom} sx={{ mb: 3 }}>
        Get Random Cocktail
      </Button>

      {cocktail && (
        <Box>
          <CocktailCard cocktail={cocktail} />
        </Box>
      )}
    </Container>
  );
};

export default LandingPage;
