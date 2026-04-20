import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import type { Nutrition } from '../types';

interface AddNutritionProps {
  onAdd: (nutrition: Omit<Nutrition, 'id'>) => void;
}

const AddNutrition: React.FC<AddNutritionProps> = ({ onAdd }) => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (foodName && calories && protein) {
      onAdd({
        foodName,
        calories: parseFloat(calories),
        protein: parseFloat(protein),
      });
      setFoodName('');
      setCalories('');
      setProtein('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <TextField
        label="Food Name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        required
      />
      <TextField
        label="Calories"
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <TextField
        label="Protein"
        type="number"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Add</Button>
    </Box>
  );
};

export default AddNutrition;