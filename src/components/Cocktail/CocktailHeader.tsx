import { type ReactElement } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { FavoriteIconToggle } from '../../components/UI/FavoriteIconToggle';
import type { ICocktail } from '../../utilities/types';

interface CocktailHeaderProps {
  cocktail: ICocktail;
}

const HeaderBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 2,
}));

export const CocktailHeader = ({
  cocktail,
}: CocktailHeaderProps): ReactElement => {
  return (
    <HeaderBox>
      <Typography variant='h4'>{cocktail.name}</Typography>
      <FavoriteIconToggle cocktail={cocktail} fontSize='large' />
    </HeaderBox>
  );
};
