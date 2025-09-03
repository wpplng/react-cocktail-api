import type { ReactElement } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import type { ICocktail } from '../../utilities/types';
import { Link } from 'react-router';

interface CocktailCardProps {
  cocktail: ICocktail;
}

const CocktailCard = ({ cocktail }: CocktailCardProps): ReactElement => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardMedia
        component='img'
        height='200'
        image={cocktail.thumbnail}
        alt={cocktail.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {cocktail.name}
        </Typography>
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
    </Card>
  );
};

export default CocktailCard;
