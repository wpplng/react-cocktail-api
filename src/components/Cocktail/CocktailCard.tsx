import type { ReactElement } from 'react';
import { Link } from 'react-router';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';
import type { ICocktail } from '../../utilities/types';
import { FavoriteIconToggle } from '../UI/FavoriteIconToggle';

interface CocktailCardProps {
  cocktail: ICocktail;
}

const StyledCard = styled(Card)(() => ({
  maxWidth: '345px',
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const CocktailCard = ({ cocktail }: CocktailCardProps): ReactElement => {
  return (
    <StyledCard>
      <CardMedia
        component='img'
        height='200'
        image={cocktail.thumbnail}
        alt={cocktail.name}
      />
      <CardContent>
        <StyledBox>
          <Typography variant='h6' marginRight='1rem'>
            {cocktail.name}
          </Typography>
          <FavoriteIconToggle cocktail={cocktail} />
        </StyledBox>
        <Typography variant='body2' color='text.secondary'>
          {cocktail.category} •{' '}
          {cocktail.alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
        </Typography>
      </CardContent>
      <Button
        component={Link}
        to={`/cocktail/${cocktail.id}`}
        state={{ fromComponent: true }}
        size='small'
        sx={{ m: 1 }}
      >
        See more
      </Button>
    </StyledCard>
  );
};

export default CocktailCard;
