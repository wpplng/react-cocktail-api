import { List, ListItem, ListItemText, styled } from '@mui/material';
import type { ReactElement } from 'react';
import type { IIngredient } from '../../utilities/types';

interface CocktailIngredientsProps {
  ingredients: IIngredient[];
}

const IngredientItem = styled(ListItem)(() => ({
  paddingLeft: 0,
}));

const IngredientPrimary = styled('span')(() => ({
  color: 'text.primary',
  display: 'inline',
}));

const IngredientSecondary = styled('span')(() => ({
  color: 'text.secondary',
  display: 'inline',
}));

const CocktailIngredients = ({
  ingredients,
}: CocktailIngredientsProps): ReactElement => {
  return (
    <List dense>
      {ingredients.map((ing, index) => (
        <IngredientItem key={index}>
          <ListItemText
            primary={<IngredientPrimary>{ing.ingredient}</IngredientPrimary>}
            secondary={
              <IngredientSecondary>{ing.measure ?? ''}</IngredientSecondary>
            }
          />
        </IngredientItem>
      ))}
    </List>
  );
};

export default CocktailIngredients;
