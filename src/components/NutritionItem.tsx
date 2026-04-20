import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import type { Nutrition } from '../types';

interface NutritionItemProps {
  nutrition: Nutrition;
  onDelete: (id: string) => void;
}

const NutritionItem: React.FC<NutritionItemProps> = ({ nutrition, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => onDelete(nutrition.id!)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={nutrition.foodName}
        secondary={`Calories: ${nutrition.calories}, Protein: ${nutrition.protein}g`}
      />
    </ListItem>
  );
};

export default NutritionItem;