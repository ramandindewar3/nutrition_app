import React from 'react';
import { List } from '@mui/material';
import NutritionItem from './NutritionItem';
import type { Nutrition } from '../types';

interface NutritionListProps {
  nutritionList: Nutrition[];
  onDelete: (id: string) => void;
}

const NutritionList: React.FC<NutritionListProps> = ({ nutritionList, onDelete }) => {
  return (
    <List>
      {nutritionList.map((item) => (
        <NutritionItem key={item.id} nutrition={item} onDelete={onDelete} />
      ))}
    </List>
  );
};

export default NutritionList;