import type { ReactElement } from 'react';
import { Link } from 'react-router';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import type { ICocktail } from '../../utilities/types';
import { FavoriteIconToggle } from '../UI/FavoriteIconToggle';

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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h6' marginRight='1rem'>
            {cocktail.name}
          </Typography>
          <FavoriteIconToggle cocktail={cocktail} />
        </Box>

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
