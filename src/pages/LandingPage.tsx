import type { ReactElement } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { Box, Button, Container, Typography, styled } from '@mui/material';
import type { ICocktail } from '../utilities/types';
import CocktailCard from '../components/Cocktail/CocktailCard';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginTop: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  borderRadius: '20px',
  padding: '1rem 0.8rem',
}));

const LandingPage = (): ReactElement => {
  const cocktail = useLoaderData() as ICocktail;
  const navigate = useNavigate();

  const handleNewRandom = () => {
    navigate(0);
  };

  return (
    <StyledContainer>
      <Typography variant='h3' gutterBottom textAlign='center'>
        Cocktail Wiki
      </Typography>
      <StyledButton variant='contained' onClick={handleNewRandom}>
        Get Random Cocktail
      </StyledButton>
      {cocktail && (
        <Box>
          <CocktailCard cocktail={cocktail} />
        </Box>
      )}
    </StyledContainer>
  );
};

export default LandingPage;
